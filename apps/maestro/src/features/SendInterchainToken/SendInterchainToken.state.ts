import type { EVMChainConfig } from "@axelarjs/api";
import { useMemo, useState } from "react";

import { useTransactionState } from "~/lib/hooks/useTransaction";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";
import { useInterchainTokensQuery } from "~/services/gmp/hooks";
import { useSendInterchainTokenMutation } from "./hooks/useSendInterchainTokenMutation";

export function useSendInterchainTokenState(props: {
  tokenAddress: `0x${string}`;
  sourceChain: EVMChainConfig;
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

  const { mutateAsync: sendTokenAsync, isLoading: isSending } =
    useSendInterchainTokenMutation({
      tokenAddress: props.tokenAddress,
      destinationChainId: selectedToChain?.chain_name,
      sourceChainId: props.sourceChain.chain_name,
    });

  const [txState, setTxState] = useTransactionState();

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
      setTxState,
      sendTokenAsync,
      selectToChain,
    },
  ] as const;
}