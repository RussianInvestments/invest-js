// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { TradeSourceType as _tinkoff_public_invest_api_contract_v1_TradeSourceType } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeSourceType';

export interface GetLastTradesRequest {
  'figi'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'instrumentId'?: (string);
  'tradeSource'?: (_tinkoff_public_invest_api_contract_v1_TradeSourceType | keyof typeof _tinkoff_public_invest_api_contract_v1_TradeSourceType);
  '_figi'?: "figi";
  '_instrumentId'?: "instrumentId";
}

export interface GetLastTradesRequest__Output {
  'figi'?: (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
  'instrumentId'?: (string);
  'tradeSource': (keyof typeof _tinkoff_public_invest_api_contract_v1_TradeSourceType);
  '_figi': "figi";
  '_instrumentId': "instrumentId";
}
