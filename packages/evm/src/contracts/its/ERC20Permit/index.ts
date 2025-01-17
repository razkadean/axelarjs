/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interchain-token/ERC20Permit.sol/ERC20Permit.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./ERC20Permit.abi";
import { createERC20PermitReadClient } from "./ERC20Permit.args";

const createReadClient = createERC20PermitReadClient;

export * from "./ERC20Permit.args";

export const ERC20_PERMIT_ABI = ABI_FILE.abi;

export class ERC20PermitClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  public readonly reads: ReturnType<typeof createReadClient>;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: ERC20_PERMIT_ABI,
      address: options.address,
      chain: options.chain,
    });

    this.reads = createReadClient(this);
  }
}
