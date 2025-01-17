import { AXELAR_RPC_URLS } from "@axelarjs/core";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { toAccAddress } from "@cosmjs/stargate/build/queryclient/utils";

import { STANDARD_FEE } from "../../constants";
import {
  createAxelarSigningClient,
  getAxelarSigningClientOptions,
} from "../stargateClient";
import { MOCK_BROADCAST_RESPONSE } from "./mock";

describe("stargate client", () => {
  test("default registry", () => {
    const { registry } = getAxelarSigningClientOptions();

    expect(registry).toBeDefined();

    const typeFound = registry.lookupType("/axelar.evm.v1beta1.LinkRequest");
    expect(typeFound).toBeDefined();
    expect(typeFound?.decode).toBeDefined();
    expect(typeFound?.encode).toBeDefined();
  });

  test("broadcast link transaction", async () => {
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      process.env["COSMOS_WALLET_MNEMONIC"] as string,
      { prefix: "axelar" }
    );

    const client = await createAxelarSigningClient(
      AXELAR_RPC_URLS.testnet,
      offlineSigner
    );

    vi.spyOn(client, "signAndBroadcast").mockImplementation(() =>
      Promise.resolve(MOCK_BROADCAST_RESPONSE)
    );

    const [accData] = await offlineSigner.getAccounts();

    if (!accData) {
      return;
    }

    const txResponse = await client.tx.evm.link.signAndBroadcast(
      accData.address,
      {
        sender: toAccAddress(String(accData?.address)),
        recipientAddr: "0xB8Cd93C83A974649D76B1c19f311f639e62272BC",
        recipientChain: "avalanche",
        asset: "wavax-wei",
        chain: "fantom",
      },
      STANDARD_FEE
    );

    expect(txResponse.transactionHash).toEqual(
      MOCK_BROADCAST_RESPONSE.transactionHash
    );
  });

  test("simulate link transaction", async () => {
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      process.env["COSMOS_WALLET_MNEMONIC"] as string,
      { prefix: "axelar" }
    );

    const client = await createAxelarSigningClient(
      AXELAR_RPC_URLS.testnet,
      offlineSigner
    );

    const [accData] = await offlineSigner.getAccounts();

    if (!accData) {
      return;
    }

    const estimateGas = await client.tx.evm.link.simulate(accData.address, {
      sender: toAccAddress(String(accData.address)),
      recipientAddr: "0xB8Cd93C83A974649D76B1c19f311f639e62272BC",
      recipientChain: "avalanche",
      asset: "wavax-wei",
      chain: "fantom",
    });

    expect(estimateGas).not.toBeLessThan(10000);
  });
});
