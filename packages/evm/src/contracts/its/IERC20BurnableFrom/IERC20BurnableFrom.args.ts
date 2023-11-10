/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IERC20BurnableFrom.sol/IERC20BurnableFrom.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./IERC20BurnableFrom.abi";

export type IERC20BurnableFromBurnFromArgs = {
  from: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20BurnableFrom.burnFrom function args
 */
export const encodeIERC20BurnableFromBurnFromArgs = ({
  from,
  amount,
}: IERC20BurnableFromBurnFromArgs) => [from, amount] as const;

/**
 * Encoder function for IERC20BurnableFrom.burnFrom function data
 */
export const encodeIERC20BurnableFromBurnFromData = ({
  from,
  amount,
}: IERC20BurnableFromBurnFromArgs) =>
  encodeFunctionData({
    functionName: "burnFrom",
    abi: ABI_FILE.abi,
    args: [from, amount],
  });

export const IERC20_BURNABLE_FROM_ENCODERS = {
  burnFrom: encodeIERC20BurnableFromBurnFromArgs,
};
