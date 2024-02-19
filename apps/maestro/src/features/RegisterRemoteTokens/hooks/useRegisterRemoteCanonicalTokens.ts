import { INTERCHAIN_TOKEN_FACTORY_ENCODERS } from "@axelarjs/evm";
import { useMemo } from "react";

import { useChainId } from "wagmi";

import { NEXT_PUBLIC_INTERCHAIN_DEPLOYMENT_GAS_LIMIT } from "~/config/env";
import {
  useInterchainTokenFactoryMulticall,
  usePrepareInterchainTokenFactoryMulticall,
} from "~/lib/contracts/InterchainTokenFactory.hooks";
import { useEstimateGasFeeMultipleChainsQuery } from "~/services/axelarjsSDK/hooks";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";
import { useInterchainTokenDetailsQuery } from "~/services/interchainToken/hooks";

export type RegisterRemoteCanonicalTokensInput = {
  chainIds: number[];
  tokenAddress: `0x${string}`;
  originChainId: number;
  deployerAddress: `0x${string}`;
};

export default function useRegisterRemoteCanonicalTokens(
  input: RegisterRemoteCanonicalTokensInput
) {
  const { computed } = useEVMChainConfigsQuery();
  const chainId = useChainId();

  const destinationChains = useMemo(
    () =>
      input.chainIds
        .map((chainId) => computed.indexedByChainId[chainId])
        .filter(Boolean),
    [input.chainIds, computed.indexedByChainId]
  );

  const destinationChainIds = destinationChains.map(
    (chain) => chain.chain_name
  );

  const sourceChain = useMemo(
    () => computed.indexedByChainId[chainId],
    [chainId, computed.indexedByChainId]
  );

  const { data: tokenDetails } = useInterchainTokenDetailsQuery({
    chainId: input.originChainId,
    tokenAddress: input.tokenAddress,
  });

  const { data: gasFeesData } = useEstimateGasFeeMultipleChainsQuery({
    destinationChainIds,
    sourceChainId: sourceChain?.id ?? "0",
    gasLimit: NEXT_PUBLIC_INTERCHAIN_DEPLOYMENT_GAS_LIMIT,
  });

  const multicallArgs = useMemo(() => {
    if (!tokenDetails || !gasFeesData || tokenDetails.kind !== "canonical")
      return [];

    return destinationChainIds.map((axelarChainId, i) => {
      const gasValue = gasFeesData.gasFees[i].fee;

      return INTERCHAIN_TOKEN_FACTORY_ENCODERS.deployRemoteCanonicalInterchainToken.data(
        {
          originalChain: sourceChain?.chain_name ?? "0x",
          originalTokenAddress: tokenDetails.tokenAddress,
          destinationChain: axelarChainId,
          gasValue,
        }
      );
    });
  }, [destinationChainIds, gasFeesData, sourceChain?.chain_name, tokenDetails]);

  const totalGasFee = gasFeesData?.totalGasFee ?? 0n;

  const { config } = usePrepareInterchainTokenFactoryMulticall({
    value: totalGasFee,
    args: [multicallArgs],
    enabled: multicallArgs.length > 0 && totalGasFee > 0n,
  });

  return useInterchainTokenFactoryMulticall(config);
}
