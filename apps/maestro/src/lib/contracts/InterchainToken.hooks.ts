/* eslint-disable @typescript-eslint/consistent-type-imports */

// Generated by @wagmi/cli@1.3.0 on 7/18/2023 at 11:42:16 PM
import {
  useContractEvent,
  UseContractEventConfig,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from "wagmi";
import {
  PrepareWriteContractResult,
  ReadContractResult,
  WriteContractMode,
} from "wagmi/actions";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InterchainToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const interchainTokenABI = [
  { type: "error", inputs: [], name: "InvalidAccount" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "subtractedValue", internalType: "uint256", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getTokenManager",
    outputs: [
      {
        name: "tokenManager",
        internalType: "contract ITokenManager",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "addedValue", internalType: "uint256", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "recipient", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "interchainTransfer",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "recipient", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "interchainTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tokenManagerRequiresApproval",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenABI}__.
 */
export function useInterchainTokenRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof interchainTokenABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenABI,
      TFunctionName,
      TSelectData
    >,
    "abi"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenABI,
    ...config,
  } as UseContractReadConfig<typeof interchainTokenABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"allowance"`.
 */
export function useInterchainTokenAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<typeof interchainTokenABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenABI,
    functionName: "allowance",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useInterchainTokenBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<typeof interchainTokenABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenABI,
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"getTokenManager"`.
 */
export function useInterchainTokenGetTokenManager<
  TFunctionName extends "getTokenManager",
  TSelectData = ReadContractResult<typeof interchainTokenABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenABI,
    functionName: "getTokenManager",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"tokenManagerRequiresApproval"`.
 */
export function useInterchainTokenTokenManagerRequiresApproval<
  TFunctionName extends "tokenManagerRequiresApproval",
  TSelectData = ReadContractResult<typeof interchainTokenABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenABI,
    functionName: "tokenManagerRequiresApproval",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useInterchainTokenTotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<typeof interchainTokenABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenABI,
    functionName: "totalSupply",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__.
 */
export function useInterchainTokenWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          string
        >["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof interchainTokenABI,
        TFunctionName,
        TMode
      > & {
        abi?: never;
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenABI, TFunctionName, TMode>({
    abi: interchainTokenABI,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"approve"`.
 */
export function useInterchainTokenApprove<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          "approve"
        >["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<typeof interchainTokenABI, "approve", TMode> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenABI, "approve", TMode>({
    abi: interchainTokenABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useInterchainTokenDecreaseAllowance<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          "decreaseAllowance"
        >["request"]["abi"],
        "decreaseAllowance",
        TMode
      > & { functionName?: "decreaseAllowance" }
    : UseContractWriteConfig<
        typeof interchainTokenABI,
        "decreaseAllowance",
        TMode
      > & {
        abi?: never;
        functionName?: "decreaseAllowance";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenABI,
    "decreaseAllowance",
    TMode
  >({
    abi: interchainTokenABI,
    functionName: "decreaseAllowance",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useInterchainTokenIncreaseAllowance<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          "increaseAllowance"
        >["request"]["abi"],
        "increaseAllowance",
        TMode
      > & { functionName?: "increaseAllowance" }
    : UseContractWriteConfig<
        typeof interchainTokenABI,
        "increaseAllowance",
        TMode
      > & {
        abi?: never;
        functionName?: "increaseAllowance";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenABI,
    "increaseAllowance",
    TMode
  >({
    abi: interchainTokenABI,
    functionName: "increaseAllowance",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"interchainTransfer"`.
 */
export function useInterchainTokenInterchainTransfer<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          "interchainTransfer"
        >["request"]["abi"],
        "interchainTransfer",
        TMode
      > & { functionName?: "interchainTransfer" }
    : UseContractWriteConfig<
        typeof interchainTokenABI,
        "interchainTransfer",
        TMode
      > & {
        abi?: never;
        functionName?: "interchainTransfer";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenABI,
    "interchainTransfer",
    TMode
  >({
    abi: interchainTokenABI,
    functionName: "interchainTransfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"interchainTransferFrom"`.
 */
export function useInterchainTokenInterchainTransferFrom<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          "interchainTransferFrom"
        >["request"]["abi"],
        "interchainTransferFrom",
        TMode
      > & { functionName?: "interchainTransferFrom" }
    : UseContractWriteConfig<
        typeof interchainTokenABI,
        "interchainTransferFrom",
        TMode
      > & {
        abi?: never;
        functionName?: "interchainTransferFrom";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenABI,
    "interchainTransferFrom",
    TMode
  >({
    abi: interchainTokenABI,
    functionName: "interchainTransferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"transfer"`.
 */
export function useInterchainTokenTransfer<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          "transfer"
        >["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<typeof interchainTokenABI, "transfer", TMode> & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenABI, "transfer", TMode>({
    abi: interchainTokenABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useInterchainTokenTransferFrom<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenABI,
          "transferFrom"
        >["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<
        typeof interchainTokenABI,
        "transferFrom",
        TMode
      > & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenABI, "transferFrom", TMode>({
    abi: interchainTokenABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__.
 */
export function usePrepareInterchainTokenWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof interchainTokenABI, TFunctionName>,
    "abi"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareInterchainTokenApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof interchainTokenABI, "approve">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareInterchainTokenDecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenABI,
      "decreaseAllowance"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    functionName: "decreaseAllowance",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, "decreaseAllowance">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareInterchainTokenIncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenABI,
      "increaseAllowance"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    functionName: "increaseAllowance",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, "increaseAllowance">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"interchainTransfer"`.
 */
export function usePrepareInterchainTokenInterchainTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenABI,
      "interchainTransfer"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    functionName: "interchainTransfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, "interchainTransfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"interchainTransferFrom"`.
 */
export function usePrepareInterchainTokenInterchainTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenABI,
      "interchainTransferFrom"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    functionName: "interchainTransferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, "interchainTransferFrom">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareInterchainTokenTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof interchainTokenABI, "transfer">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareInterchainTokenTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof interchainTokenABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenABI, "transferFrom">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenABI}__.
 */
export function useInterchainTokenEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenABI, TEventName>,
    "abi"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenABI,
    ...config,
  } as UseContractEventConfig<typeof interchainTokenABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenABI}__ and `eventName` set to `"Approval"`.
 */
export function useInterchainTokenApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenABI, "Approval">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenABI,
    eventName: "Approval",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenABI, "Approval">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenABI}__ and `eventName` set to `"Transfer"`.
 */
export function useInterchainTokenTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenABI, "Transfer">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenABI,
    eventName: "Transfer",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenABI, "Transfer">);
}
