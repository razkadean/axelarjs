import {
  AxelarQueryAPI,
  loadChains as getChainConfigs,
  type Environment,
} from "@axelar-network/axelarjs-sdk";

import { getNativeToken } from "~/lib/utils/getNativeToken";
import type {
  EstimateGasFeeInput,
  EstimateGasFeeMultipleChainsInput,
  GetChainInfoInput,
} from "~/server/routers/axelarjsSDK";

export const client = new AxelarQueryAPI({
  environment: process.env.NEXT_PUBLIC_NETWORK_ENV as Environment,
});

async function estimateGasFee(params: EstimateGasFeeInput): Promise<bigint> {
  const response = await client.estimateGasFee(
    params.sourceChainId,
    params.destinationChainId,
    params.sourceChainTokenSymbol,
    params.gasLimit,
    params.gasMultiplier,
    params.minGasPrice
  );

  const rawFee = typeof response === "string" ? response : response.baseFee;

  return BigInt(rawFee);
}

async function estimateGasFeeMultipleChains(
  params: EstimateGasFeeMultipleChainsInput
) {
  const results = await Promise.all([
    ...params.destinationChainIds.map((destinationChainId) =>
      estimateGasFee({
        ...params,
        destinationChainId,
        sourceChainTokenSymbol: getNativeToken(params.sourceChainId),
      })
        .then((fee) => ({
          status: "success" as const,
          fee,
          sourceChainId: params.sourceChainId,
          destinationChainId,
        }))
        .catch((error) => ({
          status: "error" as const,
          error: error instanceof Error ? error.message : "Unknown error",
          fee: 0n,
          sourceChainId: params.sourceChainId,
          destinationChainId,
        }))
    ),
  ]);

  const totalGasFee = results.reduce((acc, x) => acc + x.fee, 0n);

  return {
    totalGasFee,
    gasFees: results,
  };
}

async function getChainInfo(params: GetChainInfoInput) {
  const chains = await getChainConfigs({
    environment: process.env.NEXT_PUBLIC_NETWORK_ENV as Environment,
  });

  const chainConfig = chains.find((chain) => chain.id === params.axelarChainId);

  if (!chainConfig) {
    throw new Error(`Could not find chain config for ${params.axelarChainId}`);
  }

  return chainConfig;
}

const extendedClient = {
  ...client,
  estimateGasFee,
  estimateGasFeeMultipleChains,
  getChainConfigs,
  getChainInfo,
};

export default extendedClient;

export { estimateGasFee, estimateGasFeeMultipleChains };
