import type { ERC20Client } from "@axelarjs/evm";

import { TRPCError } from "@trpc/server";
import { always } from "rambda";
import invariant from "tiny-invariant";
import { z } from "zod";

import { EVM_CHAIN_CONFIGS } from "~/config/wagmi";
import { publicProcedure } from "~/server/trpc";

export const getERC20TokenDetails = publicProcedure
  .input(
    z.object({
      chainId: z.number().optional(),
      tokenAddress: z.string().regex(/^(0x)?[0-9a-f]{40}$/i),
    })
  )
  .query(async ({ input, ctx }) => {
    try {
      const chainConfig = EVM_CHAIN_CONFIGS.find(
        (chain) => chain.id === input.chainId
      );

      if (!chainConfig) {
        for (const config of EVM_CHAIN_CONFIGS) {
          const client = ctx.contracts.createERC20Client(
            config,
            input.tokenAddress as `0x${string}`
          );

          try {
            const details = await getTokenPublicDetails(client);

            if (details) {
              return details;
            }
          } catch (error) {
            console.log(
              `Token ${input.tokenAddress} not found on ${config.name}`
            );
          }
        }

        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid chainId",
        });
      }

      const client = ctx.contracts.createERC20Client(
        chainConfig,
        input.tokenAddress as `0x${string}`
      );

      return getTokenPublicDetails(client);
    } catch (error) {
      // If we get a TRPC error, we throw it
      if (error instanceof TRPCError) {
        throw error;
      }
      // otherwise, we throw an internal server error
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Failed to get ERC20 token details for ${input.tokenAddress} on ${input.chainId}`,
      });
    }
  });

async function getTokenPublicDetails(client: ERC20Client) {
  invariant(client.chain, "client.chain must be defined");

  const [name, symbol, decimals, owner, pendingOwner] = await Promise.all([
    client.readContract("name"),
    client.readContract("symbol"),
    client.readContract("decimals"),
    client.readContract("owner").catch(always(null)),
    client.readContract("pendingOwner").catch(always(null)),
  ]);

  return {
    chainId: client.chain.id,
    chainName: client.chain.name,
    name,
    symbol,
    decimals,
    owner,
    pendingOwner,
  };
}
