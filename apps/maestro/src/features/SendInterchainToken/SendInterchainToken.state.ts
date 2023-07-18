import type { EVMChainConfig } from "@axelarjs/api";
import { useMemo, useState } from "react";

import { trpc } from "~/lib/trpc";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";
import { useInterchainTokensQuery } from "~/services/gmp/hooks";
import { useInterchainTransferMutation } from "./hooks/useInterchainTransferMutation";
import { useTokenManagerSendTokenMutation } from "./hooks/useTokenManagerSendTokenMutation";

export function useSendInterchainTokenState(props: {
  tokenAddress: `0x${string}`;
  tokenId: `0x${string}`;
  sourceChain: EVMChainConfig;
  kind: "canonical" | "standardized";
  isModalOpen?: boolean;
}) {
  const { computed } = useEVMChainConfigsQuery();

  const { data: interchainToken } = useInterchainTokensQuery({
    tokenAddress: props.tokenAddress,
    chainId: props.sourceChain.chain_id,
  });

  const [isModalOpen, setIsModalOpen] = useState(props.isModalOpen ?? false);
  const [toChainId, selectToChain] = useState(5);

  const eligibleTargetChains = useMemo(() => {
    return (interchainToken?.matchingTokens ?? [])
      .filter((x) => x.isRegistered && x.chainId !== props.sourceChain.chain_id)
      .map((x) => computed.indexedByChainId[x.chainId]);
  }, [
    interchainToken?.matchingTokens,
    props.sourceChain.chain_id,
    computed.indexedByChainId,
  ]);

  const selectedToChain = useMemo(
    () =>
      eligibleTargetChains.find((c) => c.chain_id === toChainId) ??
      eligibleTargetChains[0],

    [toChainId, eligibleTargetChains]
  );

  const {
    mutateAsync: interchainTransferAsync,
    isLoading: isInterchainTransferSending,
    txState: interchainTransferTxState,
    reset: resetInterchainTransferTxState,
  } = useInterchainTransferMutation({
    tokenAddress: props.tokenAddress,
    destinationChainId: selectedToChain?.id,
    sourceChainId: props.sourceChain.id,
  });

  const {
    mutateAsync: tokenManagerSendTokenAsync,
    isLoading: isTokenManagerSending,
    txState: tokenManagerTxState,
    reset: resetTokenManagerTxState,
  } = useTokenManagerSendTokenMutation({
    tokenAddress: props.tokenAddress,
    tokenId: props.tokenId,
    destinationChainId: selectedToChain?.id,
    sourceChainId: props.sourceChain.id,
  });

  const trpcContext = trpc.useContext();

  const refetchBalances = () =>
    trpcContext.erc20.getERC20TokenBalanceForOwner.refetch();

  const resetTxState = () => {
    resetInterchainTransferTxState();
    resetTokenManagerTxState();
  };

  const isSending =
    props.kind === "canonical"
      ? isTokenManagerSending
      : isInterchainTransferSending;

  const txState =
    props.kind === "canonical"
      ? tokenManagerTxState
      : interchainTransferTxState;

  const sendTokenAsync =
    props.kind === "canonical"
      ? tokenManagerSendTokenAsync
      : interchainTransferAsync;

  return [
    {
      isModalOpen,
      txState,
      isSending,
      selectedToChain,
      eligibleTargetChains,
    },
    {
      setIsModalOpen,
      resetTxState,
      sendTokenAsync,
      selectToChain,
      refetchBalances,
    },
  ] as const;
}

export type UseSendInterchainTokenState = ReturnType<
  typeof useSendInterchainTokenState
>;

export type State = UseSendInterchainTokenState[0];
export type Actions = UseSendInterchainTokenState[1];
