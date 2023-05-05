import { always } from "rambda";

import { HTTPClient, Options } from "../HTTPClient";
import {
  GetContractsResponse,
  GetFeesParams,
  GetFeesResponse,
  GetGasPriceParams,
  GetGasPriceResponse,
  GetGMPChartParams,
  GetGMPChartResponse,
  GetGMPCumulativeVolumeParams,
  GetGMPCumulativeVolumeResponse,
  GetGMPStatisticsParams,
  GetGMPStatisticsResponse,
  GetGMPTotalVolumeParams,
  GetGMPTotalVolumeResponse,
  SearchGMPParams,
  SearchGMPResponse,
} from "./types";

export class GMPClient extends HTTPClient {
  static init(options: Options) {
    return new GMPClient(options, {
      name: "GMPClient",
      version: "0.0.1",
    });
  }

  async searchGMP(params: SearchGMPParams) {
    return await this.client
      .post("", {
        json: { ...params, method: "searchGMP" },
      })
      .json<SearchGMPResponse>()
      .catch(always({ data: [] as SearchGMPResponse["data"] }))
      .then((res) => res.data);
  }

  async getGMPStatistics(params: GetGMPStatisticsParams) {
    return await this.client
      .post("", {
        json: {
          ...params,
          method: "GMPStats",
        },
      })
      .json<GetGMPStatisticsResponse>();
  }

  async getGMPChart(params: GetGMPChartParams) {
    return await this.client
      .post("", {
        json: {
          ...params,
          method: "GMPChart",
        },
      })
      .json<GetGMPChartResponse>()
      .then((res) => res.data);
  }

  async getGMPCumulativeVolume(params: GetGMPCumulativeVolumeParams) {
    return await this.client
      .post("", {
        json: {
          ...params,
          method: "GMPCumulativeVolume",
        },
      })
      .json<GetGMPCumulativeVolumeResponse>();
  }

  async getGMPTotalVolume(params: GetGMPTotalVolumeParams) {
    return await this.client
      .post("", {
        json: {
          ...params,
          method: "GMPTotalVolume",
        },
      })
      .json<GetGMPTotalVolumeResponse>();
  }

  async estimateTimeSpent(params: GetGasPriceParams) {
    return await this.client
      .post("", {
        json: {
          ...params,
          method: "estimateTimeSpent",
        },
      })
      .json<{ time_spent: number }>();
  }

  async getGasPrice(params: GetGasPriceParams) {
    return await this.client
      .post("", {
        json: { ...params, method: "getGasPrice" },
      })
      .json<GetGasPriceResponse>()
      .then((res) => res.result);
  }

  async getGasSymbols() {
    return await this.client
      .post("", { json: { method: "getGasSupportSymbols" } })
      .json<string[]>();
  }

  async getFees(params: GetFeesParams) {
    return await this.client
      .post("", {
        json: { ...params, method: "getFees" },
      })
      .json<GetFeesResponse>()
      .then((res) => res.result);
  }

  async getContracts() {
    return await this.client
      .post("", { json: { method: "getContracts" } })
      .json<GetContractsResponse>();
  }
}

export const createGMPClient = GMPClient.init;
