/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/InterchainTokenFactory.sol/InterchainTokenFactory.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./InterchainTokenFactory.abi";

export type InterchainTokenFactoryCanonicalInterchainTokenIdArgs = {
  tokenAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.canonicalInterchainTokenId function args
 */
export const encodeInterchainTokenFactoryCanonicalInterchainTokenIdArgs = ({
  tokenAddress,
}: InterchainTokenFactoryCanonicalInterchainTokenIdArgs) =>
  [tokenAddress] as const;

/**
 * Encoder function for InterchainTokenFactory.canonicalInterchainTokenId function data
 */
export const encodeInterchainTokenFactoryCanonicalInterchainTokenIdData = ({
  tokenAddress,
}: InterchainTokenFactoryCanonicalInterchainTokenIdArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "canonicalInterchainTokenId",
    abi: ABI_FILE.abi,
    args: [tokenAddress],
  });

export type InterchainTokenFactoryCanonicalInterchainTokenSaltArgs = {
  chainNameHash_: `0x${string}`;
  tokenAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.canonicalInterchainTokenSalt function args
 */
export const encodeInterchainTokenFactoryCanonicalInterchainTokenSaltArgs = ({
  chainNameHash_,
  tokenAddress,
}: InterchainTokenFactoryCanonicalInterchainTokenSaltArgs) =>
  [chainNameHash_, tokenAddress] as const;

/**
 * Encoder function for InterchainTokenFactory.canonicalInterchainTokenSalt function data
 */
export const encodeInterchainTokenFactoryCanonicalInterchainTokenSaltData = ({
  chainNameHash_,
  tokenAddress,
}: InterchainTokenFactoryCanonicalInterchainTokenSaltArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "canonicalInterchainTokenSalt",
    abi: ABI_FILE.abi,
    args: [chainNameHash_, tokenAddress],
  });

export type InterchainTokenFactoryDeployInterchainTokenArgs = {
  salt: `0x${string}`;
  name: string;
  symbol: string;
  decimals: number;
  initialSupply: bigint;
  minter: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.deployInterchainToken function args
 */
export const encodeInterchainTokenFactoryDeployInterchainTokenArgs = ({
  salt,
  name,
  symbol,
  decimals,
  initialSupply,
  minter,
}: InterchainTokenFactoryDeployInterchainTokenArgs) =>
  [salt, name, symbol, decimals, initialSupply, minter] as const;

/**
 * Encoder function for InterchainTokenFactory.deployInterchainToken function data
 */
export const encodeInterchainTokenFactoryDeployInterchainTokenData = ({
  salt,
  name,
  symbol,
  decimals,
  initialSupply,
  minter,
}: InterchainTokenFactoryDeployInterchainTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "deployInterchainToken",
    abi: ABI_FILE.abi,
    args: [salt, name, symbol, decimals, initialSupply, minter],
  });

export type InterchainTokenFactoryDeployRemoteCanonicalInterchainTokenArgs = {
  originalChain: string;
  originalTokenAddress: `0x${string}`;
  destinationChain: string;
  gasValue: bigint;
};

/**
 * Factory function for InterchainTokenFactory.deployRemoteCanonicalInterchainToken function args
 */
export const encodeInterchainTokenFactoryDeployRemoteCanonicalInterchainTokenArgs =
  ({
    originalChain,
    originalTokenAddress,
    destinationChain,
    gasValue,
  }: InterchainTokenFactoryDeployRemoteCanonicalInterchainTokenArgs) =>
    [originalChain, originalTokenAddress, destinationChain, gasValue] as const;

/**
 * Encoder function for InterchainTokenFactory.deployRemoteCanonicalInterchainToken function data
 */
export const encodeInterchainTokenFactoryDeployRemoteCanonicalInterchainTokenData =
  ({
    originalChain,
    originalTokenAddress,
    destinationChain,
    gasValue,
  }: InterchainTokenFactoryDeployRemoteCanonicalInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "deployRemoteCanonicalInterchainToken",
      abi: ABI_FILE.abi,
      args: [originalChain, originalTokenAddress, destinationChain, gasValue],
    });

export type InterchainTokenFactoryDeployRemoteInterchainTokenArgs = {
  originalChainName: string;
  salt: `0x${string}`;
  minter: `0x${string}`;
  destinationChain: string;
  gasValue: bigint;
};

/**
 * Factory function for InterchainTokenFactory.deployRemoteInterchainToken function args
 */
export const encodeInterchainTokenFactoryDeployRemoteInterchainTokenArgs = ({
  originalChainName,
  salt,
  minter,
  destinationChain,
  gasValue,
}: InterchainTokenFactoryDeployRemoteInterchainTokenArgs) =>
  [originalChainName, salt, minter, destinationChain, gasValue] as const;

/**
 * Encoder function for InterchainTokenFactory.deployRemoteInterchainToken function data
 */
export const encodeInterchainTokenFactoryDeployRemoteInterchainTokenData = ({
  originalChainName,
  salt,
  minter,
  destinationChain,
  gasValue,
}: InterchainTokenFactoryDeployRemoteInterchainTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "deployRemoteInterchainToken",
    abi: ABI_FILE.abi,
    args: [originalChainName, salt, minter, destinationChain, gasValue],
  });

export type InterchainTokenFactoryInterchainTokenAddressArgs = {
  deployer: `0x${string}`;
  salt: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.interchainTokenAddress function args
 */
export const encodeInterchainTokenFactoryInterchainTokenAddressArgs = ({
  deployer,
  salt,
}: InterchainTokenFactoryInterchainTokenAddressArgs) =>
  [deployer, salt] as const;

/**
 * Encoder function for InterchainTokenFactory.interchainTokenAddress function data
 */
export const encodeInterchainTokenFactoryInterchainTokenAddressData = ({
  deployer,
  salt,
}: InterchainTokenFactoryInterchainTokenAddressArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTokenAddress",
    abi: ABI_FILE.abi,
    args: [deployer, salt],
  });

export type InterchainTokenFactoryInterchainTokenIdArgs = {
  deployer: `0x${string}`;
  salt: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.interchainTokenId function args
 */
export const encodeInterchainTokenFactoryInterchainTokenIdArgs = ({
  deployer,
  salt,
}: InterchainTokenFactoryInterchainTokenIdArgs) => [deployer, salt] as const;

/**
 * Encoder function for InterchainTokenFactory.interchainTokenId function data
 */
export const encodeInterchainTokenFactoryInterchainTokenIdData = ({
  deployer,
  salt,
}: InterchainTokenFactoryInterchainTokenIdArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTokenId",
    abi: ABI_FILE.abi,
    args: [deployer, salt],
  });

export type InterchainTokenFactoryInterchainTokenSaltArgs = {
  chainNameHash_: `0x${string}`;
  deployer: `0x${string}`;
  salt: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.interchainTokenSalt function args
 */
export const encodeInterchainTokenFactoryInterchainTokenSaltArgs = ({
  chainNameHash_,
  deployer,
  salt,
}: InterchainTokenFactoryInterchainTokenSaltArgs) =>
  [chainNameHash_, deployer, salt] as const;

/**
 * Encoder function for InterchainTokenFactory.interchainTokenSalt function data
 */
export const encodeInterchainTokenFactoryInterchainTokenSaltData = ({
  chainNameHash_,
  deployer,
  salt,
}: InterchainTokenFactoryInterchainTokenSaltArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTokenSalt",
    abi: ABI_FILE.abi,
    args: [chainNameHash_, deployer, salt],
  });

export type InterchainTokenFactoryMulticallArgs = { data: any };

/**
 * Factory function for InterchainTokenFactory.multicall function args
 */
export const encodeInterchainTokenFactoryMulticallArgs = ({
  data,
}: InterchainTokenFactoryMulticallArgs) => [data] as const;

/**
 * Encoder function for InterchainTokenFactory.multicall function data
 */
export const encodeInterchainTokenFactoryMulticallData = ({
  data,
}: InterchainTokenFactoryMulticallArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "multicall",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type InterchainTokenFactoryProposeOwnershipArgs = {
  newOwner: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.proposeOwnership function args
 */
export const encodeInterchainTokenFactoryProposeOwnershipArgs = ({
  newOwner,
}: InterchainTokenFactoryProposeOwnershipArgs) => [newOwner] as const;

/**
 * Encoder function for InterchainTokenFactory.proposeOwnership function data
 */
export const encodeInterchainTokenFactoryProposeOwnershipData = ({
  newOwner,
}: InterchainTokenFactoryProposeOwnershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeOwnership",
    abi: ABI_FILE.abi,
    args: [newOwner],
  });

export type InterchainTokenFactoryRegisterCanonicalInterchainTokenArgs = {
  tokenAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.registerCanonicalInterchainToken function args
 */
export const encodeInterchainTokenFactoryRegisterCanonicalInterchainTokenArgs =
  ({
    tokenAddress,
  }: InterchainTokenFactoryRegisterCanonicalInterchainTokenArgs) =>
    [tokenAddress] as const;

/**
 * Encoder function for InterchainTokenFactory.registerCanonicalInterchainToken function data
 */
export const encodeInterchainTokenFactoryRegisterCanonicalInterchainTokenData =
  ({
    tokenAddress,
  }: InterchainTokenFactoryRegisterCanonicalInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "registerCanonicalInterchainToken",
      abi: ABI_FILE.abi,
      args: [tokenAddress],
    });

export type InterchainTokenFactorySetupArgs = { data: `0x${string}` };

/**
 * Factory function for InterchainTokenFactory.setup function args
 */
export const encodeInterchainTokenFactorySetupArgs = ({
  data,
}: InterchainTokenFactorySetupArgs) => [data] as const;

/**
 * Encoder function for InterchainTokenFactory.setup function data
 */
export const encodeInterchainTokenFactorySetupData = ({
  data,
}: InterchainTokenFactorySetupArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type InterchainTokenFactoryTransferOwnershipArgs = {
  newOwner: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.transferOwnership function args
 */
export const encodeInterchainTokenFactoryTransferOwnershipArgs = ({
  newOwner,
}: InterchainTokenFactoryTransferOwnershipArgs) => [newOwner] as const;

/**
 * Encoder function for InterchainTokenFactory.transferOwnership function data
 */
export const encodeInterchainTokenFactoryTransferOwnershipData = ({
  newOwner,
}: InterchainTokenFactoryTransferOwnershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOwnership",
    abi: ABI_FILE.abi,
    args: [newOwner],
  });

export type InterchainTokenFactoryUpgradeArgs = {
  newImplementation: `0x${string}`;
  newImplementationCodeHash: `0x${string}`;
  params: `0x${string}`;
};

/**
 * Factory function for InterchainTokenFactory.upgrade function args
 */
export const encodeInterchainTokenFactoryUpgradeArgs = ({
  newImplementation,
  newImplementationCodeHash,
  params,
}: InterchainTokenFactoryUpgradeArgs) =>
  [newImplementation, newImplementationCodeHash, params] as const;

/**
 * Encoder function for InterchainTokenFactory.upgrade function data
 */
export const encodeInterchainTokenFactoryUpgradeData = ({
  newImplementation,
  newImplementationCodeHash,
  params,
}: InterchainTokenFactoryUpgradeArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "upgrade",
    abi: ABI_FILE.abi,
    args: [newImplementation, newImplementationCodeHash, params],
  });

export const INTERCHAIN_TOKEN_FACTORY_ENCODERS = {
  canonicalInterchainTokenId: {
    args: encodeInterchainTokenFactoryCanonicalInterchainTokenIdArgs,
    data: encodeInterchainTokenFactoryCanonicalInterchainTokenIdData,
  },
  canonicalInterchainTokenSalt: {
    args: encodeInterchainTokenFactoryCanonicalInterchainTokenSaltArgs,
    data: encodeInterchainTokenFactoryCanonicalInterchainTokenSaltData,
  },
  deployInterchainToken: {
    args: encodeInterchainTokenFactoryDeployInterchainTokenArgs,
    data: encodeInterchainTokenFactoryDeployInterchainTokenData,
  },
  deployRemoteCanonicalInterchainToken: {
    args: encodeInterchainTokenFactoryDeployRemoteCanonicalInterchainTokenArgs,
    data: encodeInterchainTokenFactoryDeployRemoteCanonicalInterchainTokenData,
  },
  deployRemoteInterchainToken: {
    args: encodeInterchainTokenFactoryDeployRemoteInterchainTokenArgs,
    data: encodeInterchainTokenFactoryDeployRemoteInterchainTokenData,
  },
  interchainTokenAddress: {
    args: encodeInterchainTokenFactoryInterchainTokenAddressArgs,
    data: encodeInterchainTokenFactoryInterchainTokenAddressData,
  },
  interchainTokenId: {
    args: encodeInterchainTokenFactoryInterchainTokenIdArgs,
    data: encodeInterchainTokenFactoryInterchainTokenIdData,
  },
  interchainTokenSalt: {
    args: encodeInterchainTokenFactoryInterchainTokenSaltArgs,
    data: encodeInterchainTokenFactoryInterchainTokenSaltData,
  },
  multicall: {
    args: encodeInterchainTokenFactoryMulticallArgs,
    data: encodeInterchainTokenFactoryMulticallData,
  },
  proposeOwnership: {
    args: encodeInterchainTokenFactoryProposeOwnershipArgs,
    data: encodeInterchainTokenFactoryProposeOwnershipData,
  },
  registerCanonicalInterchainToken: {
    args: encodeInterchainTokenFactoryRegisterCanonicalInterchainTokenArgs,
    data: encodeInterchainTokenFactoryRegisterCanonicalInterchainTokenData,
  },
  setup: {
    args: encodeInterchainTokenFactorySetupArgs,
    data: encodeInterchainTokenFactorySetupData,
  },
  transferOwnership: {
    args: encodeInterchainTokenFactoryTransferOwnershipArgs,
    data: encodeInterchainTokenFactoryTransferOwnershipData,
  },
  upgrade: {
    args: encodeInterchainTokenFactoryUpgradeArgs,
    data: encodeInterchainTokenFactoryUpgradeData,
  },
};

export function createInterchainTokenFactoryReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    canonicalInterchainTokenId(
      canonicalInterchainTokenIdArgs: InterchainTokenFactoryCanonicalInterchainTokenIdArgs
    ) {
      const encoder =
        INTERCHAIN_TOKEN_FACTORY_ENCODERS["canonicalInterchainTokenId"];
      const encodedArgs = encoder.args(canonicalInterchainTokenIdArgs);

      return publicClient.read("canonicalInterchainTokenId", {
        args: encodedArgs,
      });
    },
    canonicalInterchainTokenSalt(
      canonicalInterchainTokenSaltArgs: InterchainTokenFactoryCanonicalInterchainTokenSaltArgs
    ) {
      const encoder =
        INTERCHAIN_TOKEN_FACTORY_ENCODERS["canonicalInterchainTokenSalt"];
      const encodedArgs = encoder.args(canonicalInterchainTokenSaltArgs);

      return publicClient.read("canonicalInterchainTokenSalt", {
        args: encodedArgs,
      });
    },
    interchainTokenAddress(
      interchainTokenAddressArgs: InterchainTokenFactoryInterchainTokenAddressArgs
    ) {
      const encoder =
        INTERCHAIN_TOKEN_FACTORY_ENCODERS["interchainTokenAddress"];
      const encodedArgs = encoder.args(interchainTokenAddressArgs);

      return publicClient.read("interchainTokenAddress", { args: encodedArgs });
    },
    interchainTokenId(
      interchainTokenIdArgs: InterchainTokenFactoryInterchainTokenIdArgs
    ) {
      const encoder = INTERCHAIN_TOKEN_FACTORY_ENCODERS["interchainTokenId"];
      const encodedArgs = encoder.args(interchainTokenIdArgs);

      return publicClient.read("interchainTokenId", { args: encodedArgs });
    },
    interchainTokenSalt(
      interchainTokenSaltArgs: InterchainTokenFactoryInterchainTokenSaltArgs
    ) {
      const encoder = INTERCHAIN_TOKEN_FACTORY_ENCODERS["interchainTokenSalt"];
      const encodedArgs = encoder.args(interchainTokenSaltArgs);

      return publicClient.read("interchainTokenSalt", { args: encodedArgs });
    },
  };
}
