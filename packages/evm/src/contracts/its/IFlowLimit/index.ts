/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IFlowLimit.sol/IFlowLimit.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IFlowLimit.abi";

export const IFLOW_LIMIT_ABI = ABI_FILE.abi;

export class IFlowLimitClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: IFLOW_LIMIT_ABI,
      address: options.address,
      chain: options.chain,
    });
  }
}