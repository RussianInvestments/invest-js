// Original file: investAPI/src/docs/contracts/signals.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { SignalDirection as _tinkoff_public_invest_api_contract_v1_SignalDirection, SignalDirection__Output as _tinkoff_public_invest_api_contract_v1_SignalDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SignalDirection';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface Signal {
  'signalId'?: (string);
  'strategyId'?: (string);
  'strategyName'?: (string);
  'instrumentUid'?: (string);
  'createDt'?: (_google_protobuf_Timestamp | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_SignalDirection);
  'initialPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'info'?: (string);
  'name'?: (string);
  'targetPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'endDt'?: (_google_protobuf_Timestamp | null);
  'probability'?: (number);
  'stoploss'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'closePrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'closeDt'?: (_google_protobuf_Timestamp | null);
  '_info'?: "info";
  '_probability'?: "probability";
  '_stoploss'?: "stoploss";
  '_closePrice'?: "closePrice";
  '_closeDt'?: "closeDt";
}

export interface Signal__Output {
  'signalId': (string);
  'strategyId': (string);
  'strategyName': (string);
  'instrumentUid': (string);
  'createDt': (_google_protobuf_Timestamp__Output | null);
  'direction': (_tinkoff_public_invest_api_contract_v1_SignalDirection__Output);
  'initialPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'info'?: (string);
  'name': (string);
  'targetPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'endDt': (_google_protobuf_Timestamp__Output | null);
  'probability'?: (number);
  'stoploss'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'closePrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'closeDt'?: (_google_protobuf_Timestamp__Output | null);
  '_info': "info";
  '_probability': "probability";
  '_stoploss': "stoploss";
  '_closePrice': "closePrice";
  '_closeDt': "closeDt";
}
