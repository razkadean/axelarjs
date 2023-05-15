import { Chain } from "viem";

import { PublicContractClient } from "../PublicContractClient";
import ABI_FILE from "./interchain-token.abi";

export const INTERCHAIN_TOKEN_ABI = ABI_FILE.abi;

export class InterchainTokenClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      chain: options.chain,
      abi: INTERCHAIN_TOKEN_ABI,
      address: options.address,
    });
  }
}