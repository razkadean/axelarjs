import { Alert, Button, LinkButton, toast } from "@axelarjs/ui";
import { invariant, maskAddress } from "@axelarjs/utils";
import { useCallback, useMemo, type FC } from "react";

import { TransactionExecutionError } from "viem";
import { useNetwork } from "wagmi";

import { useInterchainTokenServiceGetCanonicalTokenId } from "~/lib/contracts/InterchainTokenService.hooks";
import { useTransactionState } from "~/lib/hooks/useTransactionState";
import { logger } from "~/lib/logger";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";
import { useRegisterCanonicalTokenMutation } from "../AddErc20/hooks/useRegisterCanonicalTokenMutation";

type Props = {
  address?: `0x${string}`;
  tokenName?: string;
  tokenSymbol?: string;
  decimals?: number;
  chainName?: string;
  onSuccess?: () => void;
};

export const RegisterCanonicalToken: FC<Props> = ({
  address = "0x0" as `0x${string}`,
  tokenName = "",
  tokenSymbol = "",
  decimals = -1,
  chainName = "Axelar",
  onSuccess = () => {},
}) => {
  const [txState, setTxState] = useTransactionState();
  const { chain } = useNetwork();

  const { computed } = useEVMChainConfigsQuery();

  const sourceChain = useMemo(
    () => (chain ? computed.indexedByChainId[chain.id] : undefined),
    [chain, computed]
  );

  const { data: expectedTokenId } =
    useInterchainTokenServiceGetCanonicalTokenId({
      args: [address],
    });

  const { writeAsync: registerCanonicalToken } =
    useRegisterCanonicalTokenMutation(
      {
        onStatusUpdate(message) {
          if (message.type === "deployed") {
            onSuccess();
          }
        },
      },
      {
        tokenAddress: address,
        sourceChainId: sourceChain?.id as string,
        expectedTokenId: expectedTokenId as `0x${string}`,
        tokenName,
        tokenSymbol,
        decimals,
      }
    );

  const handleSubmitTransaction = useCallback(async () => {
    if (!expectedTokenId) return;
    setTxState({
      status: "awaiting_approval",
    });

    invariant(sourceChain, "Source chain is not defined");

    try {
      const tx = await registerCanonicalToken?.();

      if (tx) {
        setTxState({
          status: "submitted",
          hash: tx.hash,
        });
      }
    } catch (error) {
      if (error instanceof TransactionExecutionError) {
        toast.error(`Transaction reverted: ${error.cause.shortMessage}`);
        logger.error("Failed to register origin token:", error.cause);
        setTxState({
          status: "idle",
        });
        return;
      }

      setTxState({
        status: "reverted",
        error: error as Error,
      });
    }
  }, [expectedTokenId, setTxState, sourceChain, registerCanonicalToken]);

  const buttonChildren = useMemo(() => {
    switch (txState.status) {
      case "awaiting_approval":
        return "Confirm on wallet";
      case "submitted":
        return "Registering token...";
      case "reverted":
        return "Transaction failed";
      default:
        return `Register origin token on ${chainName}`;
    }
  }, [txState, chainName]);

  return (
    <div className="grid gap-4">
      <Button
        length="block"
        onClick={handleSubmitTransaction}
        loading={
          txState.status === "awaiting_approval" ||
          txState.status === "submitted"
        }
      >
        {buttonChildren}
      </Button>
      {txState.status === "reverted" && (
        <Alert>
          <p>Transaction failed: {txState.error?.message}</p>
        </Alert>
      )}
      {txState.status === "submitted" && (
        <LinkButton
          href={`${sourceChain?.explorer.url}/tx/${txState.hash}`}
          target="_blank"
          rel="noopener noreferrer"
          variant="info"
        >
          View {maskAddress(txState.hash)} on {chainName}
        </LinkButton>
      )}
    </div>
  );
};
