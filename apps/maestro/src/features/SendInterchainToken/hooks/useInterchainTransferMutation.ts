import { INTERCHAIN_TOKEN_ENCODERS } from "@axelarjs/evm";
import { toast } from "@axelarjs/ui/toaster";

import { useMutation } from "@tanstack/react-query";
import { parseUnits, TransactionExecutionError } from "viem";
import { useAccount, useChainId } from "wagmi";

import {
  useReadInterchainTokenDecimals,
  useWriteInterchainTokenInterchainTransfer,
} from "~/lib/contracts/InterchainToken.hooks";
import { useTransactionState } from "~/lib/hooks/useTransactionState";
import { logger } from "~/lib/logger";
import { getNativeToken } from "~/lib/utils/getNativeToken";
import { useEstimateGasFeeQuery } from "~/services/axelarjsSDK/hooks";

export type UseSendInterchainTokenConfig = {
  tokenAddress: `0x${string}`;
  sourceChainName: string;
  destinationChainName: string;
};

export type UseSendInterchainTokenInput = {
  tokenAddress: `0x${string}`;
  amount: string;
};

export function useInterchainTransferMutation(
  config: UseSendInterchainTokenConfig
) {
  const [txState, setTxState] = useTransactionState();
  const { data: decimals } = useReadInterchainTokenDecimals({
    address: config.tokenAddress,
  });

  const chainId = useChainId();

  const { address } = useAccount();

  const { data: gas } = useEstimateGasFeeQuery({
    sourceChainId: config.sourceChainName,
    destinationChainId: config.destinationChainName,
    sourceChainTokenSymbol: getNativeToken(
      config.sourceChainName.toLowerCase()
    ),
  });

  const { writeContractAsync: transferAsync } =
    useWriteInterchainTokenInterchainTransfer();

  const mutation = useMutation<void, unknown, UseSendInterchainTokenInput>({
    mutationFn: async ({ amount }) => {
      if (!(decimals && address && gas)) {
        return;
      }

      const bnAmount = parseUnits(amount, decimals);

      try {
        setTxState({
          status: "awaiting_approval",
        });

        const txHash = await transferAsync({
          address: config.tokenAddress,
          value: BigInt(gas ?? 0) * BigInt(2),
          args: INTERCHAIN_TOKEN_ENCODERS.interchainTransfer.args({
            destinationChain: config.destinationChainName,
            recipient: address,
            amount: bnAmount,
            metadata: "0x",
          }),
        });
        if (txHash) {
          setTxState({
            status: "submitted",
            hash: txHash,
            chainId,
          });
        }
      } catch (error) {
        if (error instanceof TransactionExecutionError) {
          toast.error(`Transaction failed: ${error.cause.shortMessage}`);
          logger.error("Failed to transfer token:", error.cause);

          setTxState({
            status: "idle",
          });
          return;
        }

        if (error instanceof Error) {
          setTxState({
            status: "reverted",
            error: error,
          });
        } else {
          setTxState({
            status: "reverted",
            error: new Error("failed to transfer token"),
          });
        }

        return;
      }
    },
  });

  return {
    ...mutation,
    txState,
    reset: () => {
      setTxState({ status: "idle" });
      mutation.reset();
    },
  };
}
