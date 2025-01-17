import {
  AxelarConfigClient,
  AxelarscanClient,
  EVMChainConfig,
} from "@axelarjs/api";
import { invariant } from "@axelarjs/utils";

import { encodeAbiParameters, keccak256 } from "viem";

import { NEXT_PUBLIC_NETWORK_ENV } from "~/config/env";
import { ExtendedWagmiChainConfig, WAGMI_CHAIN_CONFIGS } from "~/config/wagmi";
import MaestroKVClient from "~/services/db/kv";

export type EVMChainsMap = Record<
  string | number,
  {
    info: EVMChainConfig;
    wagmi: ExtendedWagmiChainConfig;
  }
>;

export async function evmChains<TCacheKey extends string>(
  kvClient: MaestroKVClient,
  axelarscanClient: AxelarscanClient,
  cacheKey: TCacheKey
): Promise<EVMChainsMap> {
  const chainConfigs = await axelarscanClient.getChainConfigs();

  if (process.env.DISABLE_CACHE !== "true") {
    const cached = await kvClient.getCached<EVMChainsMap>(cacheKey);

    if (cached) {
      return cached;
    }
  }

  const eligibleChains = chainConfigs.evm.filter((chain) =>
    // filter out chains that are do not have a wagmi config
    WAGMI_CHAIN_CONFIGS.some((config) => config.id === chain.chain_id)
  );

  const evmChainsMap = eligibleChains.reduce(
    (acc, chain) => {
      const wagmiConfig = WAGMI_CHAIN_CONFIGS.find(
        (config) => config.id === chain.chain_id
      );

      // for type safety
      invariant(wagmiConfig, "wagmiConfig is required");

      const entry = {
        info: chain,
        wagmi: wagmiConfig,
      };

      return {
        ...acc,
        [chain.id]: entry,
        [chain.chain_id]: entry,
      };
    },
    {} as Record<
      string | number,
      {
        info: EVMChainConfig;
        wagmi: ExtendedWagmiChainConfig;
      }
    >
  );

  // cache for 1 hour
  await kvClient.setCached<EVMChainsMap>(cacheKey, evmChainsMap, 3600);

  return evmChainsMap;
}

export async function axelarConfigs<TCacheKey extends string>(
  kvClient: MaestroKVClient,
  axelarConfigClient: AxelarConfigClient,
  cacheKey: TCacheKey
): Promise<any> {
  const chainConfigs = await axelarConfigClient.getChainConfigs(
    NEXT_PUBLIC_NETWORK_ENV
  );

  const cached = await kvClient.getCached<any>(cacheKey);

  if (cached) {
    return cached;
  }

  // cache for 1 hour
  await kvClient.setCached<any>(cacheKey, chainConfigs, 3600);

  return chainConfigs;
}

// Calculate PREFIX_INTERCHAIN_TOKEN_SALT
const PREFIX_INTERCHAIN_TOKEN_SALT = keccak256(
  Buffer.from(process.env.INTERCHAIN_TOKEN_SALT || "its-interchain-token-salt")
);

export function generateInterchainTokenSalt(
  tokenId: `0x${string}`
): `0x${string}` {
  if (!tokenId.startsWith("0x") || tokenId.length !== 66) {
    throw new Error("tokenId must be a valid bytes32 hex string");
  }

  // Use the keccak256 hash function from the js-sha3 library
  const buffer = encodeAbiParameters(
    [
      { name: "y", type: "bytes32" },
      { name: "z", type: "bytes32" },
    ],
    [PREFIX_INTERCHAIN_TOKEN_SALT, keccak256(tokenId)]
  );

  // Create a keccak256 hash of the buffer
  const hash = keccak256(buffer);

  return `${hash}`;
}
