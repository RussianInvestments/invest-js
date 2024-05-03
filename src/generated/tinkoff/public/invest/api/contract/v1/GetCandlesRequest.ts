// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { CandleInterval as _tinkoff_public_invest_api_contract_v1_CandleInterval } from '../../../../../../tinkoff/public/invest/api/contract/v1/CandleInterval';

// Original file: investAPI/src/docs/contracts/marketdata.proto

export enum _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource {
  CANDLE_SOURCE_UNSPECIFIED = 0,
  CANDLE_SOURCE_EXCHANGE = 1,
}

export interface GetCandlesRequest {
  'figi'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_CandleInterval | keyof typeof _tinkoff_public_invest_api_contract_v1_CandleInterval);
  'instrumentId'?: (string);
  'candleSourceType'?: (_tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource | keyof typeof _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource);
  '_figi'?: "figi";
  '_instrumentId'?: "instrumentId";
  '_candleSourceType'?: "candleSourceType";
}

export interface GetCandlesRequest__Output {
  'figi'?: (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
  'interval': (keyof typeof _tinkoff_public_invest_api_contract_v1_CandleInterval);
  'instrumentId'?: (string);
  'candleSourceType'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource);
  '_figi': "figi";
  '_instrumentId': "instrumentId";
  '_candleSourceType': "candleSourceType";
}
