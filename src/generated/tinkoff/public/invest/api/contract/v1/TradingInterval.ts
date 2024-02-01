// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface _tinkoff_public_invest_api_contract_v1_TradingInterval_TimeInterval {
  'startTs'?: (_google_protobuf_Timestamp | null);
  'endTs'?: (_google_protobuf_Timestamp | null);
}

export interface _tinkoff_public_invest_api_contract_v1_TradingInterval_TimeInterval__Output {
  'startTs': (_google_protobuf_Timestamp__Output | null);
  'endTs': (_google_protobuf_Timestamp__Output | null);
}

export interface TradingInterval {
  'type'?: (string);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_TradingInterval_TimeInterval | null);
}

export interface TradingInterval__Output {
  'type': (string);
  'interval': (_tinkoff_public_invest_api_contract_v1_TradingInterval_TimeInterval__Output | null);
}
