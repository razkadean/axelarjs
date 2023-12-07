/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IInterchainTokenExpressExecutable.sol/IInterchainTokenExpressExecutable.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./IInterchainTokenExpressExecutable.abi";

export type IInterchainTokenExpressExecutableExecuteWithInterchainTokenArgs = {
  commandId: `0x${string}`;
  sourceChain: string;
  sourceAddress: `0x${string}`;
  data: `0x${string}`;
  tokenId: `0x${string}`;
  token: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IInterchainTokenExpressExecutable.executeWithInterchainToken function args
 */
export const encodeIInterchainTokenExpressExecutableExecuteWithInterchainTokenArgs =
  ({
    commandId,
    sourceChain,
    sourceAddress,
    data,
    tokenId,
    token,
    amount,
  }: IInterchainTokenExpressExecutableExecuteWithInterchainTokenArgs) =>
    [
      commandId,
      sourceChain,
      sourceAddress,
      data,
      tokenId,
      token,
      amount,
    ] as const;

/**
 * Encoder function for IInterchainTokenExpressExecutable.executeWithInterchainToken function data
 */
export const encodeIInterchainTokenExpressExecutableExecuteWithInterchainTokenData =
  ({
    commandId,
    sourceChain,
    sourceAddress,
    data,
    tokenId,
    token,
    amount,
  }: IInterchainTokenExpressExecutableExecuteWithInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "executeWithInterchainToken",
      abi: ABI_FILE.abi,
      args: [
        commandId,
        sourceChain,
        sourceAddress,
        data,
        tokenId,
        token,
        amount,
      ],
    });

export type IInterchainTokenExpressExecutableExpressExecuteWithInterchainTokenArgs =
  {
    commandId: `0x${string}`;
    sourceChain: string;
    sourceAddress: `0x${string}`;
    data: `0x${string}`;
    tokenId: `0x${string}`;
    token: `0x${string}`;
    amount: bigint;
  };

/**
 * Factory function for IInterchainTokenExpressExecutable.expressExecuteWithInterchainToken function args
 */
export const encodeIInterchainTokenExpressExecutableExpressExecuteWithInterchainTokenArgs =
  ({
    commandId,
    sourceChain,
    sourceAddress,
    data,
    tokenId,
    token,
    amount,
  }: IInterchainTokenExpressExecutableExpressExecuteWithInterchainTokenArgs) =>
    [
      commandId,
      sourceChain,
      sourceAddress,
      data,
      tokenId,
      token,
      amount,
    ] as const;

/**
 * Encoder function for IInterchainTokenExpressExecutable.expressExecuteWithInterchainToken function data
 */
export const encodeIInterchainTokenExpressExecutableExpressExecuteWithInterchainTokenData =
  ({
    commandId,
    sourceChain,
    sourceAddress,
    data,
    tokenId,
    token,
    amount,
  }: IInterchainTokenExpressExecutableExpressExecuteWithInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "expressExecuteWithInterchainToken",
      abi: ABI_FILE.abi,
      args: [
        commandId,
        sourceChain,
        sourceAddress,
        data,
        tokenId,
        token,
        amount,
      ],
    });

export const IINTERCHAIN_TOKEN_EXPRESS_EXECUTABLE_ENCODERS = {
  executeWithInterchainToken: {
    args: encodeIInterchainTokenExpressExecutableExecuteWithInterchainTokenArgs,
    data: encodeIInterchainTokenExpressExecutableExecuteWithInterchainTokenData,
  },
  expressExecuteWithInterchainToken: {
    args: encodeIInterchainTokenExpressExecutableExpressExecuteWithInterchainTokenArgs,
    data: encodeIInterchainTokenExpressExecutableExpressExecuteWithInterchainTokenData,
  },
};
