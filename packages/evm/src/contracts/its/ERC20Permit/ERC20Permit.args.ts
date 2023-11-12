/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interchain-token/ERC20Permit.sol/ERC20Permit.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./ERC20Permit.abi";

export type ERC20PermitApproveArgs = { spender: `0x${string}`; amount: bigint };

/**
 * Factory function for ERC20Permit.approve function args
 */
export const encodeERC20PermitApproveArgs = ({
  spender,
  amount,
}: ERC20PermitApproveArgs) => [spender, amount] as const;

/**
 * Encoder function for ERC20Permit.approve function data
 */
export const encodeERC20PermitApproveData = ({
  spender,
  amount,
}: ERC20PermitApproveArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "approve",
    abi: ABI_FILE.abi,
    args: [spender, amount],
  });

export type ERC20PermitDecreaseAllowanceArgs = {
  spender: `0x${string}`;
  subtractedValue: bigint;
};

/**
 * Factory function for ERC20Permit.decreaseAllowance function args
 */
export const encodeERC20PermitDecreaseAllowanceArgs = ({
  spender,
  subtractedValue,
}: ERC20PermitDecreaseAllowanceArgs) => [spender, subtractedValue] as const;

/**
 * Encoder function for ERC20Permit.decreaseAllowance function data
 */
export const encodeERC20PermitDecreaseAllowanceData = ({
  spender,
  subtractedValue,
}: ERC20PermitDecreaseAllowanceArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "decreaseAllowance",
    abi: ABI_FILE.abi,
    args: [spender, subtractedValue],
  });

export type ERC20PermitIncreaseAllowanceArgs = {
  spender: `0x${string}`;
  addedValue: bigint;
};

/**
 * Factory function for ERC20Permit.increaseAllowance function args
 */
export const encodeERC20PermitIncreaseAllowanceArgs = ({
  spender,
  addedValue,
}: ERC20PermitIncreaseAllowanceArgs) => [spender, addedValue] as const;

/**
 * Encoder function for ERC20Permit.increaseAllowance function data
 */
export const encodeERC20PermitIncreaseAllowanceData = ({
  spender,
  addedValue,
}: ERC20PermitIncreaseAllowanceArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "increaseAllowance",
    abi: ABI_FILE.abi,
    args: [spender, addedValue],
  });

export type ERC20PermitPermitArgs = {
  issuer: `0x${string}`;
  spender: `0x${string}`;
  value: bigint;
  deadline: bigint;
  v: number;
  r: `0x${string}`;
  s: `0x${string}`;
};

/**
 * Factory function for ERC20Permit.permit function args
 */
export const encodeERC20PermitPermitArgs = ({
  issuer,
  spender,
  value,
  deadline,
  v,
  r,
  s,
}: ERC20PermitPermitArgs) =>
  [issuer, spender, value, deadline, v, r, s] as const;

/**
 * Encoder function for ERC20Permit.permit function data
 */
export const encodeERC20PermitPermitData = ({
  issuer,
  spender,
  value,
  deadline,
  v,
  r,
  s,
}: ERC20PermitPermitArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "permit",
    abi: ABI_FILE.abi,
    args: [issuer, spender, value, deadline, v, r, s],
  });

export type ERC20PermitTransferArgs = {
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for ERC20Permit.transfer function args
 */
export const encodeERC20PermitTransferArgs = ({
  recipient,
  amount,
}: ERC20PermitTransferArgs) => [recipient, amount] as const;

/**
 * Encoder function for ERC20Permit.transfer function data
 */
export const encodeERC20PermitTransferData = ({
  recipient,
  amount,
}: ERC20PermitTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transfer",
    abi: ABI_FILE.abi,
    args: [recipient, amount],
  });

export type ERC20PermitTransferFromArgs = {
  sender: `0x${string}`;
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for ERC20Permit.transferFrom function args
 */
export const encodeERC20PermitTransferFromArgs = ({
  sender,
  recipient,
  amount,
}: ERC20PermitTransferFromArgs) => [sender, recipient, amount] as const;

/**
 * Encoder function for ERC20Permit.transferFrom function data
 */
export const encodeERC20PermitTransferFromData = ({
  sender,
  recipient,
  amount,
}: ERC20PermitTransferFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferFrom",
    abi: ABI_FILE.abi,
    args: [sender, recipient, amount],
  });

export const ERC20_PERMIT_ENCODERS = {
  approve: {
    args: encodeERC20PermitApproveArgs,
    data: encodeERC20PermitApproveData,
  },
  decreaseAllowance: {
    args: encodeERC20PermitDecreaseAllowanceArgs,
    data: encodeERC20PermitDecreaseAllowanceData,
  },
  increaseAllowance: {
    args: encodeERC20PermitIncreaseAllowanceArgs,
    data: encodeERC20PermitIncreaseAllowanceData,
  },
  permit: {
    args: encodeERC20PermitPermitArgs,
    data: encodeERC20PermitPermitData,
  },
  transfer: {
    args: encodeERC20PermitTransferArgs,
    data: encodeERC20PermitTransferData,
  },
  transferFrom: {
    args: encodeERC20PermitTransferFromArgs,
    data: encodeERC20PermitTransferFromData,
  },
};
