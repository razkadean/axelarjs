import { BigNumber } from "@ethersproject/bignumber";
import { Logger } from "ethers/lib/utils";
import { useAccount, useMutation, useWalletClient } from "wagmi";

import { useInterchainTokenLinker } from "~/lib/contract/hooks/useInterchainTokenLinker";

import { DeployAndRegisterTransactionState } from "../AddErc20.state";

export type UseRegisterInterchainTokenInput = {
  tokenAddress: `0x${string}`;
  destinationChainIds: string[];
  gasFees: BigNumber[];
  onFinished?: () => void;
  onStatusUpdate?: (message: DeployAndRegisterTransactionState) => void;
};

export function useRegisterOriginTokenAndDeployRemoteTokensMutation() {
  const signer = useWalletClient();

  const { address } = useAccount();

  const tokenLinker = useInterchainTokenLinker({
    address: String(process.env.NEXT_PUBLIC_TOKEN_LINKER_ADDRESS),
    signerOrProvider: signer.data,
  });

  return useMutation(async (input: UseRegisterInterchainTokenInput) => {
    if (!(signer && tokenLinker && address)) {
      return;
    }

    try {
      //register tokens

      const value = input.gasFees.reduce(
        (a, b) => a.add(BigNumber.from(b)),
        BigNumber.from(0)
      );
      const registerTokensTx =
        await tokenLinker.registerOriginTokenAndDeployRemoteTokens(
          input.tokenAddress,
          input.destinationChainIds,
          input.gasFees,
          { value }
        );

      const txDone = await registerTokensTx.wait(1);

      if (input.onStatusUpdate) {
        input.onStatusUpdate({
          type: "deployed",
          txHash: txDone.transactionHash as `0x${string}`,
          tokenAddress: input.tokenAddress,
        });
      }

      if (input.onFinished) {
        input.onFinished();
      }
    } catch (e) {
      if (input.onStatusUpdate) {
        input.onStatusUpdate({ type: "idle" });
      }
      if (e instanceof Error && "code" in e) {
        switch (e.code) {
          case Logger.errors.ACTION_REJECTED:
            throw new Error("User rejected the transaction");
          default:
            throw new Error("Transaction reverted by EVM");
        }
      }

      return;
    }
  });
}
