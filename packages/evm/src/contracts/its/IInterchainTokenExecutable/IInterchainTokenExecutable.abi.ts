/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IInterchainTokenExecutable.sol/IInterchainTokenExecutable.json
 *
 * DO NOT EDIT MANUALLY
 */

export default {
  contractName: "IInterchainTokenExecutable",
  abi: [
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "commandId",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "sourceChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "sourceAddress",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "executeWithInterchainToken",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
} as const;
