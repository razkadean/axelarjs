import type { EVMChainConfig, GMPTxStatus } from "@axelarjs/api/index";

import type { WagmiEVMChainConfig } from "~/config/wagmi";

type Kind = "canonical" | "standardized";

export type TokenInfo = {
  chainId: number;
  isRegistered: boolean;
  isOriginToken: boolean;
  tokenAddress: `0x${string}`;
  tokenId: `0x${string}`;
  decimals: number;
  kind: Kind;
  isSelected?: boolean;
  chain?: EVMChainConfig;
  wagmiConfig?: WagmiEVMChainConfig;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  deploymentStatus?: "pending" | GMPTxStatus;
  deploymentTxHash?: `0x${string}:${number}` | `0x${string}`;
};
