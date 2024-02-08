import { TRPCError } from "@trpc/server";
import { groupBy } from "rambda";
import { z } from "zod";

import { NEXT_PUBLIC_INTERCHAIN_TOKEN_SERVICE_ADDRESS } from "~/config/env";
import { hex40Literal } from "~/lib/utils/validation";
import { publicProcedure } from "~/server/trpc";

const INPUT_SCHEMA = z.object({
  sampleSize: z.number().optional().default(20),
  senderAddress: hex40Literal().optional(),
  top: z.number().optional().default(10),
  minTxCount: z.number().optional().default(2),
  fromTime: z.number().optional(),
  toTime: z.number().optional(),
});

export type RecentTransactionsInput = z.infer<typeof INPUT_SCHEMA>;

/**
 * Get the top transactions by token id
 */
export const getTopTransactions = publicProcedure
  .input(INPUT_SCHEMA)
  .query(async ({ input, ctx }) => {
    try {
      const commonParams = {
        senderAddress: input.senderAddress,
        destinationContractAddress:
          NEXT_PUBLIC_INTERCHAIN_TOKEN_SERVICE_ADDRESS,
        fromTime: input.fromTime,
        toTime: input.toTime,
      };
      const [tokenDeployments, interchainTransfers] = await Promise.all([
        ctx.services.gmp.searchGMP({
          ...commonParams,
          contractMethod: "InterchainTokenDeploymentStarted",
          size: 100,
          // _source: {
          //   includes: [
          //     "interchain_token_deployment_started.tokenName",
          //     "interchain_token_deployment_started.tokenSymbol",
          //     "interchain_token_deployment_started.tokenId",
          //   ],
          // },
        }),
        ctx.services.gmp.searchGMP({
          ...commonParams,
          contractMethod: "InterchainTransfer",
          size: 500,
          // _source: {
          //   includes: [
          //     "interchain_transfer.name",
          //     "interchain_transfer.symbol",
          //     "interchain_transfer.contract_address",
          //     "interchain_transfer.tokenId",
          //   ],
          // },
        }),
      ]);

      const eligibleTokenIds = new Set(
        tokenDeployments
          .map((tx) => tx.interchain_token_deployment_started?.tokenId)
          .filter(Boolean)
      );

      const eligibleTransfers = interchainTransfers.filter((transfer) =>
        eligibleTokenIds.has(transfer.interchain_transfer?.tokenId)
      );

      const grouped = groupBy(
        (tx) => tx.interchain_transfer?.tokenId ?? "",
        eligibleTransfers
      );

      const filtered = Object.entries(grouped).filter(
        ([, txs]) => txs.length >= input.minTxCount
      );
      return filtered
        .map(([tokenId, [tx, ...txs]]) => {
          const transfer = tx.interchain_transfer;

          return {
            tokenId: tokenId as `0x${string}`,
            name: transfer?.name ?? "",
            symbol: transfer?.symbol ?? "",
            address: transfer?.contract_address ?? ("" as `0x${string}`),
            count: txs.length + 1,
          };
        })
        .sort((a, b) => b.count - a.count)
        .slice(0, input.top);
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }

      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to get recent transactions",
      });
    }
  });

// infer the output type from the procedure
export type GetTopTransactionsOutput =
  typeof getTopTransactions._def._output_out;
