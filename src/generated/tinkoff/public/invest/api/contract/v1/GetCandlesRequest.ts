// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { CandleInterval as _tinkoff_public_invest_api_contract_v1_CandleInterval, CandleInterval__Output as _tinkoff_public_invest_api_contract_v1_CandleInterval__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CandleInterval';

// Original file: investAPI/src/docs/contracts/marketdata.proto

export const _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource = {
  CANDLE_SOURCE_UNSPECIFIED: 'CANDLE_SOURCE_UNSPECIFIED',
  CANDLE_SOURCE_EXCHANGE: 'CANDLE_SOURCE_EXCHANGE',
  CANDLE_SOURCE_INCLUDE_WEEKEND: 'CANDLE_SOURCE_INCLUDE_WEEKEND',
} as const;

export type _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource =
  | 'CANDLE_SOURCE_UNSPECIFIED'
  | 0
  | 'CANDLE_SOURCE_EXCHANGE'
  | 1
  | 'CANDLE_SOURCE_INCLUDE_WEEKEND'
  | 3

export type _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource__Output = typeof _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource[keyof typeof _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource]

export interface GetCandlesRequest {
  'figi'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_CandleInterval);
  'instrumentId'?: (string);
  'candleSourceType'?: (_tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource);
  'limit'?: (number);
  '_figi'?: "figi";
  '_instrumentId'?: "instrumentId";
  '_candleSourceType'?: "candleSourceType";
  '_limit'?: "limit";
}

export interface GetCandlesRequest__Output {
  'figi'?: (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
  'interval': (_tinkoff_public_invest_api_contract_v1_CandleInterval__Output);
  'instrumentId'?: (string);
  'candleSourceType'?: (_tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource__Output);
  'limit'?: (number);
  '_figi': "figi";
  '_instrumentId': "instrumentId";
  '_candleSourceType': "candleSourceType";
  '_limit': "limit";
}
