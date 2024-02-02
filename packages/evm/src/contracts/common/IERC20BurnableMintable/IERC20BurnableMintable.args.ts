/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interchain-token/IERC20BurnableMintable.sol/IERC20BurnableMintable.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IERC20BurnableMintable.abi";

export type IERC20BurnableMintableAllowanceArgs = {
  owner: `0x${string}`;
  spender: `0x${string}`;
};

/**
 * Factory function for IERC20BurnableMintable.allowance function args
 */
export const encodeIERC20BurnableMintableAllowanceArgs = ({
  owner,
  spender,
}: IERC20BurnableMintableAllowanceArgs) => [owner, spender] as const;

/**
 * Encoder function for IERC20BurnableMintable.allowance function data
 */
export const encodeIERC20BurnableMintableAllowanceData = ({
  owner,
  spender,
}: IERC20BurnableMintableAllowanceArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "allowance",
    abi: ABI_FILE.abi,
    args: [owner, spender],
  });

export type IERC20BurnableMintableApproveArgs = {
  spender: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20BurnableMintable.approve function args
 */
export const encodeIERC20BurnableMintableApproveArgs = ({
  spender,
  amount,
}: IERC20BurnableMintableApproveArgs) => [spender, amount] as const;

/**
 * Encoder function for IERC20BurnableMintable.approve function data
 */
export const encodeIERC20BurnableMintableApproveData = ({
  spender,
  amount,
}: IERC20BurnableMintableApproveArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "approve",
    abi: ABI_FILE.abi,
    args: [spender, amount],
  });

export type IERC20BurnableMintableBalanceOfArgs = { account: `0x${string}` };

/**
 * Factory function for IERC20BurnableMintable.balanceOf function args
 */
export const encodeIERC20BurnableMintableBalanceOfArgs = ({
  account,
}: IERC20BurnableMintableBalanceOfArgs) => [account] as const;

/**
 * Encoder function for IERC20BurnableMintable.balanceOf function data
 */
export const encodeIERC20BurnableMintableBalanceOfData = ({
  account,
}: IERC20BurnableMintableBalanceOfArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "balanceOf",
    abi: ABI_FILE.abi,
    args: [account],
  });

export type IERC20BurnableMintableBurnFromArgs = {
  from: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20BurnableMintable.burnFrom function args
 */
export const encodeIERC20BurnableMintableBurnFromArgs = ({
  from,
  amount,
}: IERC20BurnableMintableBurnFromArgs) => [from, amount] as const;

/**
 * Encoder function for IERC20BurnableMintable.burnFrom function data
 */
export const encodeIERC20BurnableMintableBurnFromData = ({
  from,
  amount,
}: IERC20BurnableMintableBurnFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "burnFrom",
    abi: ABI_FILE.abi,
    args: [from, amount],
  });

export type IERC20BurnableMintableMintArgs = {
  to: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20BurnableMintable.mint function args
 */
export const encodeIERC20BurnableMintableMintArgs = ({
  to,
  amount,
}: IERC20BurnableMintableMintArgs) => [to, amount] as const;

/**
 * Encoder function for IERC20BurnableMintable.mint function data
 */
export const encodeIERC20BurnableMintableMintData = ({
  to,
  amount,
}: IERC20BurnableMintableMintArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "mint",
    abi: ABI_FILE.abi,
    args: [to, amount],
  });

export type IERC20BurnableMintableSetupArgs = {
  name_: string;
  symbol_: string;
  decimals_: number;
  owner: `0x${string}`;
};

/**
 * Factory function for IERC20BurnableMintable.setup function args
 */
export const encodeIERC20BurnableMintableSetupArgs = ({
  name_,
  symbol_,
  decimals_,
  owner,
}: IERC20BurnableMintableSetupArgs) =>
  [name_, symbol_, decimals_, owner] as const;

/**
 * Encoder function for IERC20BurnableMintable.setup function data
 */
export const encodeIERC20BurnableMintableSetupData = ({
  name_,
  symbol_,
  decimals_,
  owner,
}: IERC20BurnableMintableSetupArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [name_, symbol_, decimals_, owner],
  });

export type IERC20BurnableMintableTransferArgs = {
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20BurnableMintable.transfer function args
 */
export const encodeIERC20BurnableMintableTransferArgs = ({
  recipient,
  amount,
}: IERC20BurnableMintableTransferArgs) => [recipient, amount] as const;

/**
 * Encoder function for IERC20BurnableMintable.transfer function data
 */
export const encodeIERC20BurnableMintableTransferData = ({
  recipient,
  amount,
}: IERC20BurnableMintableTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transfer",
    abi: ABI_FILE.abi,
    args: [recipient, amount],
  });

export type IERC20BurnableMintableTransferFromArgs = {
  sender: `0x${string}`;
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20BurnableMintable.transferFrom function args
 */
export const encodeIERC20BurnableMintableTransferFromArgs = ({
  sender,
  recipient,
  amount,
}: IERC20BurnableMintableTransferFromArgs) =>
  [sender, recipient, amount] as const;

/**
 * Encoder function for IERC20BurnableMintable.transferFrom function data
 */
export const encodeIERC20BurnableMintableTransferFromData = ({
  sender,
  recipient,
  amount,
}: IERC20BurnableMintableTransferFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferFrom",
    abi: ABI_FILE.abi,
    args: [sender, recipient, amount],
  });

export type IERC20BurnableMintableTransferOwnershipArgs = {
  newOwner: `0x${string}`;
};

/**
 * Factory function for IERC20BurnableMintable.transferOwnership function args
 */
export const encodeIERC20BurnableMintableTransferOwnershipArgs = ({
  newOwner,
}: IERC20BurnableMintableTransferOwnershipArgs) => [newOwner] as const;

/**
 * Encoder function for IERC20BurnableMintable.transferOwnership function data
 */
export const encodeIERC20BurnableMintableTransferOwnershipData = ({
  newOwner,
}: IERC20BurnableMintableTransferOwnershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOwnership",
    abi: ABI_FILE.abi,
    args: [newOwner],
  });

export const IERC20BurnableMintable_ENCODERS = {
  allowance: {
    args: encodeIERC20BurnableMintableAllowanceArgs,
    data: encodeIERC20BurnableMintableAllowanceData,
  },
  approve: {
    args: encodeIERC20BurnableMintableApproveArgs,
    data: encodeIERC20BurnableMintableApproveData,
  },
  balanceOf: {
    args: encodeIERC20BurnableMintableBalanceOfArgs,
    data: encodeIERC20BurnableMintableBalanceOfData,
  },
  burnFrom: {
    args: encodeIERC20BurnableMintableBurnFromArgs,
    data: encodeIERC20BurnableMintableBurnFromData,
  },
  mint: {
    args: encodeIERC20BurnableMintableMintArgs,
    data: encodeIERC20BurnableMintableMintData,
  },
  setup: {
    args: encodeIERC20BurnableMintableSetupArgs,
    data: encodeIERC20BurnableMintableSetupData,
  },
  transfer: {
    args: encodeIERC20BurnableMintableTransferArgs,
    data: encodeIERC20BurnableMintableTransferData,
  },
  transferFrom: {
    args: encodeIERC20BurnableMintableTransferFromArgs,
    data: encodeIERC20BurnableMintableTransferFromData,
  },
  transferOwnership: {
    args: encodeIERC20BurnableMintableTransferOwnershipArgs,
    data: encodeIERC20BurnableMintableTransferOwnershipData,
  },
};

export function createIERC20BurnableMintableReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    allowance(allowanceArgs: IERC20BurnableMintableAllowanceArgs) {
      const encoder = IERC20BurnableMintable_ENCODERS["allowance"];
      const encodedArgs = encoder.args(allowanceArgs);

      return publicClient.read("allowance", { args: encodedArgs });
    },
    balanceOf(balanceOfArgs: IERC20BurnableMintableBalanceOfArgs) {
      const encoder = IERC20BurnableMintable_ENCODERS["balanceOf"];
      const encodedArgs = encoder.args(balanceOfArgs);

      return publicClient.read("balanceOf", { args: encodedArgs });
    },
    decimals() {
      return publicClient.read("decimals");
    },
    name() {
      return publicClient.read("name");
    },
    owner() {
      return publicClient.read("owner");
    },
    pendingOwner() {
      return publicClient.read("pendingOwner");
    },
    symbol() {
      return publicClient.read("symbol");
    },
    totalSupply() {
      return publicClient.read("totalSupply");
    },
  };
}
