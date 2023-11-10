/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IInterchainTokenStandard.sol/IInterchainTokenStandard.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./IInterchainTokenStandard.abi";

export type IInterchainTokenStandardInterchainTransferArgs = {
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for IInterchainTokenStandard.interchainTransfer function args
 */
export const encodeIInterchainTokenStandardInterchainTransferArgs = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenStandardInterchainTransferArgs) =>
  [destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for IInterchainTokenStandard.interchainTransfer function data
 */
export const encodeIInterchainTokenStandardInterchainTransferData = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenStandardInterchainTransferArgs) =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [destinationChain, recipient, amount, metadata],
  });

export type IInterchainTokenStandardInterchainTransferFromArgs = {
  sender: `0x${string}`;
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for IInterchainTokenStandard.interchainTransferFrom function args
 */
export const encodeIInterchainTokenStandardInterchainTransferFromArgs = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenStandardInterchainTransferFromArgs) =>
  [sender, destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for IInterchainTokenStandard.interchainTransferFrom function data
 */
export const encodeIInterchainTokenStandardInterchainTransferFromData = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenStandardInterchainTransferFromArgs) =>
  encodeFunctionData({
    functionName: "interchainTransferFrom",
    abi: ABI_FILE.abi,
    args: [sender, destinationChain, recipient, amount, metadata],
  });

export const IINTERCHAIN_TOKEN_STANDARD_ENCODERS = {
  interchainTransfer: encodeIInterchainTokenStandardInterchainTransferArgs,
  interchainTransferFrom:
    encodeIInterchainTokenStandardInterchainTransferFromArgs,
};
