/**
 * This file was generated by scripts/codegen.cjs
 *
 * Original abi file:
 * - @axelar-network/interchain-token-service/dist/interchain-token-service/InterchainTokenService.sol/InterchainTokenService.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./interchain-token-service.abi";

export type InterchainTokenServiceDeployAndRegisterRemoteStandardizedTokenArgs =
  {
    salt: `0x${string}`;
    name: string;
    symbol: string;
    decimals: number;
    distributor: `0x${string}`;
    operator: `0x${string}`;
    destinationChain: string;
    gasValue: bigint;
  };

/**
 * Factory function for InterchainTokenService.deployAndRegisterRemoteStandardizedToken function args
 */
export const encodeInterchainTokenServiceDeployAndRegisterRemoteStandardizedTokenArgs =
  ({
    salt,
    name,
    symbol,
    decimals,
    distributor,
    operator,
    destinationChain,
    gasValue,
  }: InterchainTokenServiceDeployAndRegisterRemoteStandardizedTokenArgs) =>
    [
      salt,
      name,
      symbol,
      decimals,
      distributor,
      operator,
      destinationChain,
      gasValue,
    ] as const;

/**
 * Encoder function for InterchainTokenService.deployAndRegisterRemoteStandardizedToken function data
 */
export const encodeInterchainTokenServiceDeployAndRegisterRemoteStandardizedTokenData =
  ({
    salt,
    name,
    symbol,
    decimals,
    distributor,
    operator,
    destinationChain,
    gasValue,
  }: InterchainTokenServiceDeployAndRegisterRemoteStandardizedTokenArgs) =>
    encodeFunctionData({
      functionName: "deployAndRegisterRemoteStandardizedToken",
      abi: ABI_FILE.abi,
      args: [
        salt,
        name,
        symbol,
        decimals,
        distributor,
        operator,
        destinationChain,
        gasValue,
      ],
    });

export type InterchainTokenServiceDeployAndRegisterStandardizedTokenArgs = {
  salt: `0x${string}`;
  name: string;
  symbol: string;
  decimals: number;
  mintAmount: bigint;
  distributor: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.deployAndRegisterStandardizedToken function args
 */
export const encodeInterchainTokenServiceDeployAndRegisterStandardizedTokenArgs =
  ({
    salt,
    name,
    symbol,
    decimals,
    mintAmount,
    distributor,
  }: InterchainTokenServiceDeployAndRegisterStandardizedTokenArgs) =>
    [salt, name, symbol, decimals, mintAmount, distributor] as const;

/**
 * Encoder function for InterchainTokenService.deployAndRegisterStandardizedToken function data
 */
export const encodeInterchainTokenServiceDeployAndRegisterStandardizedTokenData =
  ({
    salt,
    name,
    symbol,
    decimals,
    mintAmount,
    distributor,
  }: InterchainTokenServiceDeployAndRegisterStandardizedTokenArgs) =>
    encodeFunctionData({
      functionName: "deployAndRegisterStandardizedToken",
      abi: ABI_FILE.abi,
      args: [salt, name, symbol, decimals, mintAmount, distributor],
    });

export type InterchainTokenServiceDeployCustomTokenManagerArgs = {
  salt: `0x${string}`;
  tokenManagerType: number;
  params: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.deployCustomTokenManager function args
 */
export const encodeInterchainTokenServiceDeployCustomTokenManagerArgs = ({
  salt,
  tokenManagerType,
  params,
}: InterchainTokenServiceDeployCustomTokenManagerArgs) =>
  [salt, tokenManagerType, params] as const;

/**
 * Encoder function for InterchainTokenService.deployCustomTokenManager function data
 */
export const encodeInterchainTokenServiceDeployCustomTokenManagerData = ({
  salt,
  tokenManagerType,
  params,
}: InterchainTokenServiceDeployCustomTokenManagerArgs) =>
  encodeFunctionData({
    functionName: "deployCustomTokenManager",
    abi: ABI_FILE.abi,
    args: [salt, tokenManagerType, params],
  });

export type InterchainTokenServiceDeployRemoteCanonicalTokenArgs = {
  tokenId: `0x${string}`;
  destinationChain: string;
  gasValue: bigint;
};

/**
 * Factory function for InterchainTokenService.deployRemoteCanonicalToken function args
 */
export const encodeInterchainTokenServiceDeployRemoteCanonicalTokenArgs = ({
  tokenId,
  destinationChain,
  gasValue,
}: InterchainTokenServiceDeployRemoteCanonicalTokenArgs) =>
  [tokenId, destinationChain, gasValue] as const;

/**
 * Encoder function for InterchainTokenService.deployRemoteCanonicalToken function data
 */
export const encodeInterchainTokenServiceDeployRemoteCanonicalTokenData = ({
  tokenId,
  destinationChain,
  gasValue,
}: InterchainTokenServiceDeployRemoteCanonicalTokenArgs) =>
  encodeFunctionData({
    functionName: "deployRemoteCanonicalToken",
    abi: ABI_FILE.abi,
    args: [tokenId, destinationChain, gasValue],
  });

export type InterchainTokenServiceDeployRemoteCustomTokenManagerArgs = {
  salt: `0x${string}`;
  destinationChain: string;
  tokenManagerType: number;
  params: `0x${string}`;
  gasValue: bigint;
};

/**
 * Factory function for InterchainTokenService.deployRemoteCustomTokenManager function args
 */
export const encodeInterchainTokenServiceDeployRemoteCustomTokenManagerArgs = ({
  salt,
  destinationChain,
  tokenManagerType,
  params,
  gasValue,
}: InterchainTokenServiceDeployRemoteCustomTokenManagerArgs) =>
  [salt, destinationChain, tokenManagerType, params, gasValue] as const;

/**
 * Encoder function for InterchainTokenService.deployRemoteCustomTokenManager function data
 */
export const encodeInterchainTokenServiceDeployRemoteCustomTokenManagerData = ({
  salt,
  destinationChain,
  tokenManagerType,
  params,
  gasValue,
}: InterchainTokenServiceDeployRemoteCustomTokenManagerArgs) =>
  encodeFunctionData({
    functionName: "deployRemoteCustomTokenManager",
    abi: ABI_FILE.abi,
    args: [salt, destinationChain, tokenManagerType, params, gasValue],
  });

export type InterchainTokenServiceExecuteArgs = {
  commandId: `0x${string}`;
  sourceChain: string;
  sourceAddress: string;
  payload: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.execute function args
 */
export const encodeInterchainTokenServiceExecuteArgs = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceExecuteArgs) =>
  [commandId, sourceChain, sourceAddress, payload] as const;

/**
 * Encoder function for InterchainTokenService.execute function data
 */
export const encodeInterchainTokenServiceExecuteData = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
}: InterchainTokenServiceExecuteArgs) =>
  encodeFunctionData({
    functionName: "execute",
    abi: ABI_FILE.abi,
    args: [commandId, sourceChain, sourceAddress, payload],
  });

export type InterchainTokenServiceExecuteWithTokenArgs = {
  commandId: `0x${string}`;
  sourceChain: string;
  sourceAddress: string;
  payload: `0x${string}`;
  tokenSymbol: string;
  amount: bigint;
};

/**
 * Factory function for InterchainTokenService.executeWithToken function args
 */
export const encodeInterchainTokenServiceExecuteWithTokenArgs = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
  tokenSymbol,
  amount,
}: InterchainTokenServiceExecuteWithTokenArgs) =>
  [
    commandId,
    sourceChain,
    sourceAddress,
    payload,
    tokenSymbol,
    amount,
  ] as const;

/**
 * Encoder function for InterchainTokenService.executeWithToken function data
 */
export const encodeInterchainTokenServiceExecuteWithTokenData = ({
  commandId,
  sourceChain,
  sourceAddress,
  payload,
  tokenSymbol,
  amount,
}: InterchainTokenServiceExecuteWithTokenArgs) =>
  encodeFunctionData({
    functionName: "executeWithToken",
    abi: ABI_FILE.abi,
    args: [commandId, sourceChain, sourceAddress, payload, tokenSymbol, amount],
  });

export type InterchainTokenServiceExpressReceiveTokenArgs = {
  tokenId: `0x${string}`;
  destinationAddress: `0x${string}`;
  amount: bigint;
  commandId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.expressReceiveToken function args
 */
export const encodeInterchainTokenServiceExpressReceiveTokenArgs = ({
  tokenId,
  destinationAddress,
  amount,
  commandId,
}: InterchainTokenServiceExpressReceiveTokenArgs) =>
  [tokenId, destinationAddress, amount, commandId] as const;

/**
 * Encoder function for InterchainTokenService.expressReceiveToken function data
 */
export const encodeInterchainTokenServiceExpressReceiveTokenData = ({
  tokenId,
  destinationAddress,
  amount,
  commandId,
}: InterchainTokenServiceExpressReceiveTokenArgs) =>
  encodeFunctionData({
    functionName: "expressReceiveToken",
    abi: ABI_FILE.abi,
    args: [tokenId, destinationAddress, amount, commandId],
  });

export type InterchainTokenServiceExpressReceiveTokenWithDataArgs = {
  tokenId: `0x${string}`;
  sourceChain: string;
  sourceAddress: `0x${string}`;
  destinationAddress: `0x${string}`;
  amount: bigint;
  data: `0x${string}`;
  commandId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.expressReceiveTokenWithData function args
 */
export const encodeInterchainTokenServiceExpressReceiveTokenWithDataArgs = ({
  tokenId,
  sourceChain,
  sourceAddress,
  destinationAddress,
  amount,
  data,
  commandId,
}: InterchainTokenServiceExpressReceiveTokenWithDataArgs) =>
  [
    tokenId,
    sourceChain,
    sourceAddress,
    destinationAddress,
    amount,
    data,
    commandId,
  ] as const;

/**
 * Encoder function for InterchainTokenService.expressReceiveTokenWithData function data
 */
export const encodeInterchainTokenServiceExpressReceiveTokenWithDataData = ({
  tokenId,
  sourceChain,
  sourceAddress,
  destinationAddress,
  amount,
  data,
  commandId,
}: InterchainTokenServiceExpressReceiveTokenWithDataArgs) =>
  encodeFunctionData({
    functionName: "expressReceiveTokenWithData",
    abi: ABI_FILE.abi,
    args: [
      tokenId,
      sourceChain,
      sourceAddress,
      destinationAddress,
      amount,
      data,
      commandId,
    ],
  });

export type InterchainTokenServiceGetCanonicalTokenIdArgs = {
  tokenAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getCanonicalTokenId function args
 */
export const encodeInterchainTokenServiceGetCanonicalTokenIdArgs = ({
  tokenAddress,
}: InterchainTokenServiceGetCanonicalTokenIdArgs) => [tokenAddress] as const;

/**
 * Encoder function for InterchainTokenService.getCanonicalTokenId function data
 */
export const encodeInterchainTokenServiceGetCanonicalTokenIdData = ({
  tokenAddress,
}: InterchainTokenServiceGetCanonicalTokenIdArgs) =>
  encodeFunctionData({
    functionName: "getCanonicalTokenId",
    abi: ABI_FILE.abi,
    args: [tokenAddress],
  });

export type InterchainTokenServiceGetCustomTokenIdArgs = {
  sender: `0x${string}`;
  salt: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getCustomTokenId function args
 */
export const encodeInterchainTokenServiceGetCustomTokenIdArgs = ({
  sender,
  salt,
}: InterchainTokenServiceGetCustomTokenIdArgs) => [sender, salt] as const;

/**
 * Encoder function for InterchainTokenService.getCustomTokenId function data
 */
export const encodeInterchainTokenServiceGetCustomTokenIdData = ({
  sender,
  salt,
}: InterchainTokenServiceGetCustomTokenIdArgs) =>
  encodeFunctionData({
    functionName: "getCustomTokenId",
    abi: ABI_FILE.abi,
    args: [sender, salt],
  });

export type InterchainTokenServiceGetExpressReceiveTokenArgs = {
  tokenId: `0x${string}`;
  destinationAddress: `0x${string}`;
  amount: bigint;
  commandId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getExpressReceiveToken function args
 */
export const encodeInterchainTokenServiceGetExpressReceiveTokenArgs = ({
  tokenId,
  destinationAddress,
  amount,
  commandId,
}: InterchainTokenServiceGetExpressReceiveTokenArgs) =>
  [tokenId, destinationAddress, amount, commandId] as const;

/**
 * Encoder function for InterchainTokenService.getExpressReceiveToken function data
 */
export const encodeInterchainTokenServiceGetExpressReceiveTokenData = ({
  tokenId,
  destinationAddress,
  amount,
  commandId,
}: InterchainTokenServiceGetExpressReceiveTokenArgs) =>
  encodeFunctionData({
    functionName: "getExpressReceiveToken",
    abi: ABI_FILE.abi,
    args: [tokenId, destinationAddress, amount, commandId],
  });

export type InterchainTokenServiceGetExpressReceiveTokenWithDataArgs = {
  tokenId: `0x${string}`;
  sourceChain: string;
  sourceAddress: `0x${string}`;
  destinationAddress: `0x${string}`;
  amount: bigint;
  data: `0x${string}`;
  commandId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getExpressReceiveTokenWithData function args
 */
export const encodeInterchainTokenServiceGetExpressReceiveTokenWithDataArgs = ({
  tokenId,
  sourceChain,
  sourceAddress,
  destinationAddress,
  amount,
  data,
  commandId,
}: InterchainTokenServiceGetExpressReceiveTokenWithDataArgs) =>
  [
    tokenId,
    sourceChain,
    sourceAddress,
    destinationAddress,
    amount,
    data,
    commandId,
  ] as const;

/**
 * Encoder function for InterchainTokenService.getExpressReceiveTokenWithData function data
 */
export const encodeInterchainTokenServiceGetExpressReceiveTokenWithDataData = ({
  tokenId,
  sourceChain,
  sourceAddress,
  destinationAddress,
  amount,
  data,
  commandId,
}: InterchainTokenServiceGetExpressReceiveTokenWithDataArgs) =>
  encodeFunctionData({
    functionName: "getExpressReceiveTokenWithData",
    abi: ABI_FILE.abi,
    args: [
      tokenId,
      sourceChain,
      sourceAddress,
      destinationAddress,
      amount,
      data,
      commandId,
    ],
  });

export type InterchainTokenServiceGetFlowInAmountArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getFlowInAmount function args
 */
export const encodeInterchainTokenServiceGetFlowInAmountArgs = ({
  tokenId,
}: InterchainTokenServiceGetFlowInAmountArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.getFlowInAmount function data
 */
export const encodeInterchainTokenServiceGetFlowInAmountData = ({
  tokenId,
}: InterchainTokenServiceGetFlowInAmountArgs) =>
  encodeFunctionData({
    functionName: "getFlowInAmount",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceGetFlowLimitArgs = { tokenId: `0x${string}` };

/**
 * Factory function for InterchainTokenService.getFlowLimit function args
 */
export const encodeInterchainTokenServiceGetFlowLimitArgs = ({
  tokenId,
}: InterchainTokenServiceGetFlowLimitArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.getFlowLimit function data
 */
export const encodeInterchainTokenServiceGetFlowLimitData = ({
  tokenId,
}: InterchainTokenServiceGetFlowLimitArgs) =>
  encodeFunctionData({
    functionName: "getFlowLimit",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceGetFlowOutAmountArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getFlowOutAmount function args
 */
export const encodeInterchainTokenServiceGetFlowOutAmountArgs = ({
  tokenId,
}: InterchainTokenServiceGetFlowOutAmountArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.getFlowOutAmount function data
 */
export const encodeInterchainTokenServiceGetFlowOutAmountData = ({
  tokenId,
}: InterchainTokenServiceGetFlowOutAmountArgs) =>
  encodeFunctionData({
    functionName: "getFlowOutAmount",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceGetImplementationArgs = {
  tokenManagerType: bigint;
};

/**
 * Factory function for InterchainTokenService.getImplementation function args
 */
export const encodeInterchainTokenServiceGetImplementationArgs = ({
  tokenManagerType,
}: InterchainTokenServiceGetImplementationArgs) => [tokenManagerType] as const;

/**
 * Encoder function for InterchainTokenService.getImplementation function data
 */
export const encodeInterchainTokenServiceGetImplementationData = ({
  tokenManagerType,
}: InterchainTokenServiceGetImplementationArgs) =>
  encodeFunctionData({
    functionName: "getImplementation",
    abi: ABI_FILE.abi,
    args: [tokenManagerType],
  });

export type InterchainTokenServiceGetParamsLiquidityPoolArgs = {
  operator: `0x${string}`;
  tokenAddress: `0x${string}`;
  liquidityPoolAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getParamsLiquidityPool function args
 */
export const encodeInterchainTokenServiceGetParamsLiquidityPoolArgs = ({
  operator,
  tokenAddress,
  liquidityPoolAddress,
}: InterchainTokenServiceGetParamsLiquidityPoolArgs) =>
  [operator, tokenAddress, liquidityPoolAddress] as const;

/**
 * Encoder function for InterchainTokenService.getParamsLiquidityPool function data
 */
export const encodeInterchainTokenServiceGetParamsLiquidityPoolData = ({
  operator,
  tokenAddress,
  liquidityPoolAddress,
}: InterchainTokenServiceGetParamsLiquidityPoolArgs) =>
  encodeFunctionData({
    functionName: "getParamsLiquidityPool",
    abi: ABI_FILE.abi,
    args: [operator, tokenAddress, liquidityPoolAddress],
  });

export type InterchainTokenServiceGetParamsLockUnlockArgs = {
  operator: `0x${string}`;
  tokenAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getParamsLockUnlock function args
 */
export const encodeInterchainTokenServiceGetParamsLockUnlockArgs = ({
  operator,
  tokenAddress,
}: InterchainTokenServiceGetParamsLockUnlockArgs) =>
  [operator, tokenAddress] as const;

/**
 * Encoder function for InterchainTokenService.getParamsLockUnlock function data
 */
export const encodeInterchainTokenServiceGetParamsLockUnlockData = ({
  operator,
  tokenAddress,
}: InterchainTokenServiceGetParamsLockUnlockArgs) =>
  encodeFunctionData({
    functionName: "getParamsLockUnlock",
    abi: ABI_FILE.abi,
    args: [operator, tokenAddress],
  });

export type InterchainTokenServiceGetParamsMintBurnArgs = {
  operator: `0x${string}`;
  tokenAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getParamsMintBurn function args
 */
export const encodeInterchainTokenServiceGetParamsMintBurnArgs = ({
  operator,
  tokenAddress,
}: InterchainTokenServiceGetParamsMintBurnArgs) =>
  [operator, tokenAddress] as const;

/**
 * Encoder function for InterchainTokenService.getParamsMintBurn function data
 */
export const encodeInterchainTokenServiceGetParamsMintBurnData = ({
  operator,
  tokenAddress,
}: InterchainTokenServiceGetParamsMintBurnArgs) =>
  encodeFunctionData({
    functionName: "getParamsMintBurn",
    abi: ABI_FILE.abi,
    args: [operator, tokenAddress],
  });

export type InterchainTokenServiceGetStandardizedTokenAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getStandardizedTokenAddress function args
 */
export const encodeInterchainTokenServiceGetStandardizedTokenAddressArgs = ({
  tokenId,
}: InterchainTokenServiceGetStandardizedTokenAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.getStandardizedTokenAddress function data
 */
export const encodeInterchainTokenServiceGetStandardizedTokenAddressData = ({
  tokenId,
}: InterchainTokenServiceGetStandardizedTokenAddressArgs) =>
  encodeFunctionData({
    functionName: "getStandardizedTokenAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceGetTokenAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getTokenAddress function args
 */
export const encodeInterchainTokenServiceGetTokenAddressArgs = ({
  tokenId,
}: InterchainTokenServiceGetTokenAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.getTokenAddress function data
 */
export const encodeInterchainTokenServiceGetTokenAddressData = ({
  tokenId,
}: InterchainTokenServiceGetTokenAddressArgs) =>
  encodeFunctionData({
    functionName: "getTokenAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceGetTokenManagerAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getTokenManagerAddress function args
 */
export const encodeInterchainTokenServiceGetTokenManagerAddressArgs = ({
  tokenId,
}: InterchainTokenServiceGetTokenManagerAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.getTokenManagerAddress function data
 */
export const encodeInterchainTokenServiceGetTokenManagerAddressData = ({
  tokenId,
}: InterchainTokenServiceGetTokenManagerAddressArgs) =>
  encodeFunctionData({
    functionName: "getTokenManagerAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceGetValidTokenManagerAddressArgs = {
  tokenId: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.getValidTokenManagerAddress function args
 */
export const encodeInterchainTokenServiceGetValidTokenManagerAddressArgs = ({
  tokenId,
}: InterchainTokenServiceGetValidTokenManagerAddressArgs) => [tokenId] as const;

/**
 * Encoder function for InterchainTokenService.getValidTokenManagerAddress function data
 */
export const encodeInterchainTokenServiceGetValidTokenManagerAddressData = ({
  tokenId,
}: InterchainTokenServiceGetValidTokenManagerAddressArgs) =>
  encodeFunctionData({
    functionName: "getValidTokenManagerAddress",
    abi: ABI_FILE.abi,
    args: [tokenId],
  });

export type InterchainTokenServiceMulticallArgs = { data: any };

/**
 * Factory function for InterchainTokenService.multicall function args
 */
export const encodeInterchainTokenServiceMulticallArgs = ({
  data,
}: InterchainTokenServiceMulticallArgs) => [data] as const;

/**
 * Encoder function for InterchainTokenService.multicall function data
 */
export const encodeInterchainTokenServiceMulticallData = ({
  data,
}: InterchainTokenServiceMulticallArgs) =>
  encodeFunctionData({
    functionName: "multicall",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type InterchainTokenServiceRegisterCanonicalTokenArgs = {
  tokenAddress: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.registerCanonicalToken function args
 */
export const encodeInterchainTokenServiceRegisterCanonicalTokenArgs = ({
  tokenAddress,
}: InterchainTokenServiceRegisterCanonicalTokenArgs) => [tokenAddress] as const;

/**
 * Encoder function for InterchainTokenService.registerCanonicalToken function data
 */
export const encodeInterchainTokenServiceRegisterCanonicalTokenData = ({
  tokenAddress,
}: InterchainTokenServiceRegisterCanonicalTokenArgs) =>
  encodeFunctionData({
    functionName: "registerCanonicalToken",
    abi: ABI_FILE.abi,
    args: [tokenAddress],
  });

export type InterchainTokenServiceSetFlowLimitArgs = {
  tokenIds: any;
  flowLimits: any;
};

/**
 * Factory function for InterchainTokenService.setFlowLimit function args
 */
export const encodeInterchainTokenServiceSetFlowLimitArgs = ({
  tokenIds,
  flowLimits,
}: InterchainTokenServiceSetFlowLimitArgs) => [tokenIds, flowLimits] as const;

/**
 * Encoder function for InterchainTokenService.setFlowLimit function data
 */
export const encodeInterchainTokenServiceSetFlowLimitData = ({
  tokenIds,
  flowLimits,
}: InterchainTokenServiceSetFlowLimitArgs) =>
  encodeFunctionData({
    functionName: "setFlowLimit",
    abi: ABI_FILE.abi,
    args: [tokenIds, flowLimits],
  });

export type InterchainTokenServiceSetOperatorArgs = {
  operator_: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.setOperator function args
 */
export const encodeInterchainTokenServiceSetOperatorArgs = ({
  operator_,
}: InterchainTokenServiceSetOperatorArgs) => [operator_] as const;

/**
 * Encoder function for InterchainTokenService.setOperator function data
 */
export const encodeInterchainTokenServiceSetOperatorData = ({
  operator_,
}: InterchainTokenServiceSetOperatorArgs) =>
  encodeFunctionData({
    functionName: "setOperator",
    abi: ABI_FILE.abi,
    args: [operator_],
  });

export type InterchainTokenServiceSetPausedArgs = { paused: boolean };

/**
 * Factory function for InterchainTokenService.setPaused function args
 */
export const encodeInterchainTokenServiceSetPausedArgs = ({
  paused,
}: InterchainTokenServiceSetPausedArgs) => [paused] as const;

/**
 * Encoder function for InterchainTokenService.setPaused function data
 */
export const encodeInterchainTokenServiceSetPausedData = ({
  paused,
}: InterchainTokenServiceSetPausedArgs) =>
  encodeFunctionData({
    functionName: "setPaused",
    abi: ABI_FILE.abi,
    args: [paused],
  });

export type InterchainTokenServiceSetupArgs = { data: `0x${string}` };

/**
 * Factory function for InterchainTokenService.setup function args
 */
export const encodeInterchainTokenServiceSetupArgs = ({
  data,
}: InterchainTokenServiceSetupArgs) => [data] as const;

/**
 * Encoder function for InterchainTokenService.setup function data
 */
export const encodeInterchainTokenServiceSetupData = ({
  data,
}: InterchainTokenServiceSetupArgs) =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type InterchainTokenServiceTransferOwnershipArgs = {
  newOwner: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.transferOwnership function args
 */
export const encodeInterchainTokenServiceTransferOwnershipArgs = ({
  newOwner,
}: InterchainTokenServiceTransferOwnershipArgs) => [newOwner] as const;

/**
 * Encoder function for InterchainTokenService.transferOwnership function data
 */
export const encodeInterchainTokenServiceTransferOwnershipData = ({
  newOwner,
}: InterchainTokenServiceTransferOwnershipArgs) =>
  encodeFunctionData({
    functionName: "transferOwnership",
    abi: ABI_FILE.abi,
    args: [newOwner],
  });

export type InterchainTokenServiceTransmitSendTokenArgs = {
  tokenId: `0x${string}`;
  sourceAddress: `0x${string}`;
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.transmitSendToken function args
 */
export const encodeInterchainTokenServiceTransmitSendTokenArgs = ({
  tokenId,
  sourceAddress,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: InterchainTokenServiceTransmitSendTokenArgs) =>
  [
    tokenId,
    sourceAddress,
    destinationChain,
    destinationAddress,
    amount,
    metadata,
  ] as const;

/**
 * Encoder function for InterchainTokenService.transmitSendToken function data
 */
export const encodeInterchainTokenServiceTransmitSendTokenData = ({
  tokenId,
  sourceAddress,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: InterchainTokenServiceTransmitSendTokenArgs) =>
  encodeFunctionData({
    functionName: "transmitSendToken",
    abi: ABI_FILE.abi,
    args: [
      tokenId,
      sourceAddress,
      destinationChain,
      destinationAddress,
      amount,
      metadata,
    ],
  });

export type InterchainTokenServiceUpgradeArgs = {
  newImplementation: `0x${string}`;
  newImplementationCodeHash: `0x${string}`;
  params: `0x${string}`;
};

/**
 * Factory function for InterchainTokenService.upgrade function args
 */
export const encodeInterchainTokenServiceUpgradeArgs = ({
  newImplementation,
  newImplementationCodeHash,
  params,
}: InterchainTokenServiceUpgradeArgs) =>
  [newImplementation, newImplementationCodeHash, params] as const;

/**
 * Encoder function for InterchainTokenService.upgrade function data
 */
export const encodeInterchainTokenServiceUpgradeData = ({
  newImplementation,
  newImplementationCodeHash,
  params,
}: InterchainTokenServiceUpgradeArgs) =>
  encodeFunctionData({
    functionName: "upgrade",
    abi: ABI_FILE.abi,
    args: [newImplementation, newImplementationCodeHash, params],
  });