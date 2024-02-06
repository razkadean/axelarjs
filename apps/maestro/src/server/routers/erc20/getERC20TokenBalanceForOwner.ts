import { TRPCError } from "@trpc/server";
import { always } from "rambda";
import { z } from "zod";

import { hex40Literal } from "~/lib/utils/validation";
import { publicProcedure } from "~/server/trpc";

const ROLES_ENUM = ["MINTER", "OPERATOR", "FLOW_LIMITER"] as const;

const getENUMIndex = (role: (typeof ROLES_ENUM)[number]) => {
  return ROLES_ENUM.indexOf(role);
};

export const getERC20TokenBalanceForOwner = publicProcedure
  .input(
    z.object({
      chainId: z.number(),
      tokenAddress: hex40Literal(),
      owner: hex40Literal(),
    })
  )
  .query(async ({ input, ctx }) => {
    const chainConfig = ctx.configs.wagmiChainConfigs.find(
      (chain) => chain.id === input.chainId
    );

    if (!chainConfig) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Invalid chainId",
      });
    }

    try {
      const client = ctx.contracts.createERC20Client(
        chainConfig,
        input.tokenAddress
      );

      const [tokenBalance, decimals, owner, pendingOwner] = await Promise.all([
        client.reads.balanceOf({ account: input.owner }),
        client.reads.decimals(),
        client.reads.owner().catch(always(null)),
        client.reads.pendingOwner().catch(always(null)),
      ]);

      const itClient = ctx.contracts.createInterchainTokenClient(
        chainConfig,
        input.tokenAddress
      );
      const [
        isTokenMinter,
        hasMinterRole,
        hasOperatorRole,
        hasFlowLimiterRole,
      ] = await Promise.all(
        [
          itClient.reads.isMinter({
            addr: input.owner,
          }),
          itClient.reads.hasRole({
            role: getENUMIndex("MINTER"),
            account: input.owner,
          }),
          itClient.reads.hasRole({
            role: getENUMIndex("OPERATOR"),
            account: input.owner,
          }),
          itClient.reads.hasRole({
            role: getENUMIndex("FLOW_LIMITER"),
            account: input.owner,
          }),
        ].map((p) => p.catch(always(false)))
      );

      const isTokenOwner = owner === input.owner;

      return {
        isTokenOwner,
        isTokenMinter,
        tokenBalance: tokenBalance.toString(),
        decimals,
        isTokenPendingOwner: pendingOwner === input.owner,
        hasPendingOwner: pendingOwner !== null,
        hasMinterRole,
        hasOperatorRole,
        hasFlowLimiterRole,
      };
    } catch (error) {
      // If we get a TRPC error, we throw it
      if (error instanceof TRPCError) {
        throw error;
      }
      // otherwise, we throw an internal server error
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Failed to get ERC20 token balance on ${input.tokenAddress} on chain ${input.chainId} for ${input.owner}`,
        cause: error,
      });
    }
  });
