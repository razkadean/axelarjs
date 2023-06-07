import type { InterchainTokenServiceClient } from "@axelarjs/evm";

import { TRPCError } from "@trpc/server";
import { partition } from "rambda";
import { z } from "zod";

import { EVM_CHAIN_CONFIGS, type WagmiEVMChainConfig } from "~/config/wagmi";
import type { Context } from "~/server/context";
import { publicProcedure } from "~/server/trpc";

const isAddressZero = (address: string) => parseInt(address, 16) === 0;

export const searchInterchainToken = publicProcedure
  .input(
    z.object({
      chainId: z.number().optional(),
      tokenAddress: z.string().regex(/^(0x)?[0-9a-f]{40}$/i),
      chainIds: z.array(z.number().or(z.string())),
    })
  )
  .query(async ({ input, ctx }) => {
    try {
      const [[chainConfig], remainingChainConfigs] = partition(
        (chain) => chain.id === input.chainId,
        EVM_CHAIN_CONFIGS
      );

      if (!chainConfig) {
        for (const chainConfig of EVM_CHAIN_CONFIGS) {
          const client =
            ctx.contracts.createInterchainTokenServiceClient(chainConfig);

          try {
            const tokenId = await client.readContract("getTokenId", {
              args: [input.tokenAddress as `0x${string}`],
            });

            if (tokenId && !isAddressZero(tokenId)) {
              console.log("Found token ID on chain", chainConfig.name);
              return doStuffWithClient(
                client,
                chainConfig,
                remainingChainConfigs,
                input,
                ctx
              );
            }
          } catch (error) {
            console.log(
              `Token ${input.tokenAddress} not registered on ${chainConfig.name}`
            );
          }
        }

        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Token ${input.tokenAddress} not registered on any chain`,
        });
      }

      const client =
        ctx.contracts.createInterchainTokenServiceClient(chainConfig);

      return doStuffWithClient(
        client,
        chainConfig,
        remainingChainConfigs,
        input,
        ctx
      );
    } catch (error) {
      // If we get a TRPC error, we throw it
      if (error instanceof TRPCError) {
        throw error;
      }
      // otherwise, we throw an internal server error
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to get InterchainToken details",
        cause: error,
      });
    }
  });

async function doStuffWithClient(
  client: InterchainTokenServiceClient,
  chainConfig: WagmiEVMChainConfig,
  remainingChainConfigs: WagmiEVMChainConfig[],
  input: {
    tokenAddress: string;
    chainId?: number;
  },
  ctx: Context
) {
  const [tokenId, originTokenId] = await Promise.all([
    client.readContract("getTokenId", {
      args: [input.tokenAddress as `0x${string}`],
    }),
    client.readContract("getOriginTokenId", {
      args: [input.tokenAddress as `0x${string}`],
    }),
  ]);

  if (!tokenId || isAddressZero(tokenId)) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: `Token not found on ${chainConfig.name} (${chainConfig.id})`,
    });
  }

  const [tokenAddress, isOriginToken] = await Promise.all([
    client.readContract("getTokenAddress", {
      args: [tokenId],
    }),
    client.readContract("isOriginToken", {
      args: [tokenId],
    }),
  ]);

  if (tokenAddress.toLowerCase() !== input.tokenAddress.toLowerCase()) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: `Token ids don't match. ${{
        tokenId,
        tokenAddress,
      }} `,
    });
  }

  const matchingTokens = await Promise.all(
    remainingChainConfigs.map(async (chain) => {
      try {
        const client = ctx.contracts.createInterchainTokenServiceClient(chain);

        const matchingTokenAddressFromTokenId = await client.readContract(
          "getTokenAddress",
          {
            args: [tokenId],
          }
        );

        const [matchingOriginTokenId, isOriginToken] = await Promise.all([
          client.readContract("getOriginTokenId", {
            args: [matchingTokenAddressFromTokenId as `0x${string}`],
          }),
          client.readContract("isOriginToken", {
            args: [tokenId],
          }),
        ]);

        return {
          tokenId,
          isOriginToken,
          chainId: chain.id,
          chainName: chain.name,
          tokenAddress: matchingTokenAddressFromTokenId,
          originTokenId: matchingOriginTokenId,
          isRegistered: parseInt(matchingTokenAddressFromTokenId, 16) > 0,
        };
      } catch (error) {
        return {
          tokenId,
          originTokenId,
          chainId: chain.id,
          tokenAddress,
          isOriginToken: false,
          isRegistered: false,
        };
      }
    })
  );

  const lookupToken = {
    tokenId,
    originTokenId,
    tokenAddress,
    isOriginToken,
    isRegistered: parseInt(tokenAddress, 16) > 0,
    chainId: Number(input.chainId),
  };

  return {
    ...lookupToken,
    matchingTokens: [lookupToken, ...matchingTokens],
  };
}