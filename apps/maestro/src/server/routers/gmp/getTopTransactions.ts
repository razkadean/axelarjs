import { TRPCError } from "@trpc/server";
import { groupBy, uniqBy } from "rambda";
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
        size: 99000,
        destinationContractAddress:
          NEXT_PUBLIC_INTERCHAIN_TOKEN_SERVICE_ADDRESS,
        fromTime: input.fromTime,
        toTime: input.toTime,
      };
      const [tokenDeployments, interchainTransfers] = await Promise.all([
        ctx.services.gmp.searchGMP({
          ...commonParams,
          // @ts-expect-error because contractMethod is typed to one or the other, the underlying api can accept multiple csv
          contractMethod:
            "InterchainTokenDeploymentStarted,TokenManagerDeploymentStarted",
          _source: {
            includes: [
              "interchain_token_deployment_started.tokenId",
              "token_manager_deployment_started.tokenId",
            ],
            excludes: EXCLUDED_RESPONSE_FIELDS,
          },
        }),
        ctx.services.gmp.searchGMP({
          ...commonParams,
          contractMethod: "InterchainTransfer",
          _source: {
            includes: [
              "interchain_transfer.name",
              "interchain_transfer.symbol",
              "interchain_transfer.contract_address",
              "interchain_transfer.tokenId",
              "call.transactionHash",
            ],
            excludes: EXCLUDED_RESPONSE_FIELDS,
          },
        }),
      ]);

      const eligibleTokenIds = new Set(
        tokenDeployments
          .map(
            (tx) =>
              tx.interchain_token_deployment_started?.tokenId ||
              tx.token_manager_deployment_started?.tokenId
          )
          .filter(Boolean)
      );

      const eligibleTransfers = uniqBy(
        ({ call }) => `${call.transactionHash}:${call._logIndex}`,
        interchainTransfers.filter((transfer) =>
          eligibleTokenIds.has(transfer.interchain_transfer?.tokenId)
        )
      );

      const grouped = groupBy(
        (tx) => tx.interchain_transfer?.tokenId ?? "",
        eligibleTransfers
      );

      const filtered = Object.entries(grouped).filter(
        ([, txs]) => txs.length >= input.minTxCount
      );

      const results = filtered
        .map(([tokenId, [tx, ...txs]]) => {
          const transfer = tx.interchain_transfer;

          return {
            tokenId: tokenId as `0x${string}`,
            name: transfer?.name ?? "",
            symbol: transfer?.symbol ?? "",
            address: transfer?.contract_address ?? ("" as `0x${string}`),
            count: txs.length + 1,
            txIds: txs.map((tx) => tx.call.transactionHash),
          };
        })
        .sort((a, b) => b.count - a.count)
        .slice(0, input.top);

      return results;
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

const EXCLUDED_RESPONSE_FIELDS = [
  "call.returnValues",
  "call.transaction",
  "call.event",
  "call.chain",
  "call.destination_chain_type",
  "call._logIndex",
  "call.chain_type",
  "call.blockNumber",
  "call.block_timestamp",
  "refunded",
  "to_refund",
  "fees",
  "gas",
  "time_spent",
  "executed",
  "confirm",
  "gas_price_rate",
  "gas_paid",
  "approved",
  "executing_at",
  "command_id",
  "is_not_enough_gas",
  "is_call_from_relayer",
  "is_insufficient_fee",
  "not_enough_gas_to_execute",
  "status",
  "simplified_status",
  "gas_status",
  "is_two_way",
  "is_execute_from_relayer",
  "not_to_refund",
  "no_gas_remain",
];
