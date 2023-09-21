import { QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

import { EnvironmentConfigs, getConfigs } from "../constants";
import type { AxelarQueryClientConfig } from "../types";
import { AxelarQueryService, setupQueryExtension } from "./types";

export * from "../types";

export type AxelarQueryClientService = QueryClient & AxelarQueryService;

let instance: AxelarQueryClientService;

export class AxelarQueryClient extends QueryClient {
  static async init(config: AxelarQueryClientConfig) {
    if (!instance) {
      const { axelarRpcUrl, environment } = config;
      const links: EnvironmentConfigs = getConfigs(environment);
      const rpc: string = axelarRpcUrl || links.axelarRpcUrl;
      instance = QueryClient.withExtensions(
        await Tendermint34Client.connect(rpc),
        (base) => setupQueryExtension(base, config.rpcImpl)
      );
    }
    return instance;
  }
}

export const createAxelarRPCClient = AxelarQueryClient.init;
