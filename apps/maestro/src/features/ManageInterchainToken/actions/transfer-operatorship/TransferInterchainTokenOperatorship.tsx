import { INTERCHAIN_TOKEN_SERVICE_ENCODERS } from "@axelarjs/evm";
import {
  Alert,
  Button,
  Dialog,
  FormControl,
  Label,
  TextInput,
} from "@axelarjs/ui";
import { toast } from "@axelarjs/ui/toaster";
import { useCallback, useMemo, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { isAddress, TransactionExecutionError } from "viem";
import { useChainId, useWaitForTransaction } from "wagmi";

import { useInterchainTokenServiceTransferOperatorship } from "~/lib/contracts/InterchainTokenService.hooks";
import { useTransactionState } from "~/lib/hooks/useTransactionState";
import { logger } from "~/lib/logger";
import { trpc } from "~/lib/trpc";

type FormState = {
  recipientAddress: `0x${string}`;
};

export const TransferInterchainTokenOperatorship: FC = () => {
  const [txState, setTxState] = useTransactionState();
  const chainId = useChainId();

  const { register, handleSubmit, formState } = useForm<FormState>({
    defaultValues: {
      recipientAddress: undefined,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    writeAsync: transferOperatorshipAsync,
    isLoading: isTransfering,
    data: transferResult,
  } = useInterchainTokenServiceTransferOperatorship();

  const trpcContext = trpc.useUtils();

  useWaitForTransaction({
    hash: transferResult?.hash,
    async onSuccess(receipt) {
      if (!transferResult) {
        return;
      }

      await Promise.all([
        trpcContext.interchainToken.searchInterchainToken.invalidate(),
        trpcContext.erc20.getERC20TokenBalanceForOwner.invalidate(),
      ]);

      await Promise.all([
        trpcContext.interchainToken.searchInterchainToken.refetch(),
        trpcContext.erc20.getERC20TokenBalanceForOwner.refetch(),
      ]);

      setTxState({
        status: "confirmed",
        receipt,
      });

      toast.success("Successfully transferred token operatorship");
    },
  });

  const submitHandler = useCallback<SubmitHandler<FormState>>(
    async (data, e) => {
      e?.preventDefault();

      setTxState({
        status: "awaiting_approval",
      });

      try {
        const txResult = await transferOperatorshipAsync({
          args: INTERCHAIN_TOKEN_SERVICE_ENCODERS.transferOperatorship.args({
            operator: data.recipientAddress,
          }),
        });

        if (txResult?.hash) {
          setTxState({
            status: "submitted",
            chainId,
            hash: txResult.hash,
          });
        }
      } catch (error) {
        if (error instanceof TransactionExecutionError) {
          toast.error(
            `Failed to transfer token operatorship: ${error.cause.shortMessage}`
          );
          logger.error(
            `Failed to transfer token operatorship: ${error.cause.message}`
          );

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
    },
    [chainId, setTxState, transferOperatorshipAsync]
  );

  const buttonChildren = useMemo(() => {
    switch (txState.status) {
      case "idle":
      case "confirmed":
        return "Transfer token operatorship";
      case "awaiting_approval":
        return "Confirm on wallet";
      case "submitted":
        return "Transfering token operatorship";
      case "reverted":
        return "Failed to transfer operatorship";
    }
  }, [txState]);

  return (
    <>
      <Dialog.Title className="flex">
        <span>Transfer rate-limit manager</span>
      </Dialog.Title>
      {txState.status === "confirmed" ? (
        <Alert status="success">
          Token operatorship has been successfully transferred.
        </Alert>
      ) : (
        <form
          className="flex flex-1 flex-col justify-between gap-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <FormControl>
            <Label htmlFor="recipientAddress">
              <Label.Text>Recipient address</Label.Text>
            </Label>
            <TextInput
              id="recipientAddress"
              bordered
              placeholder="Enter recipient address"
              className="bg-base-200"
              min={0}
              {...register("recipientAddress", {
                disabled: isTransfering,
                validate(value) {
                  if (!value || !isAddress(value)) {
                    return "Invalid address";
                  }

                  return true;
                },
              })}
            />
          </FormControl>

          <Button
            variant="primary"
            type="submit"
            disabled={!formState.isValid || isTransfering}
            loading={
              txState.status === "awaiting_approval" ||
              txState.status === "submitted"
            }
          >
            {buttonChildren}
          </Button>
        </form>
      )}
    </>
  );
};

export default TransferInterchainTokenOperatorship;
