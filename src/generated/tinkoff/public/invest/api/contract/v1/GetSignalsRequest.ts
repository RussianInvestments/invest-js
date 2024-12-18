// Original file: investAPI/src/docs/contracts/signals.proto

import type { StrategyType as _tinkoff_public_invest_api_contract_v1_StrategyType, StrategyType__Output as _tinkoff_public_invest_api_contract_v1_StrategyType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StrategyType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { SignalDirection as _tinkoff_public_invest_api_contract_v1_SignalDirection, SignalDirection__Output as _tinkoff_public_invest_api_contract_v1_SignalDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SignalDirection';
import type { SignalState as _tinkoff_public_invest_api_contract_v1_SignalState, SignalState__Output as _tinkoff_public_invest_api_contract_v1_SignalState__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SignalState';
import type { Page as _tinkoff_public_invest_api_contract_v1_Page, Page__Output as _tinkoff_public_invest_api_contract_v1_Page__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Page';

export interface GetSignalsRequest {
  'signalId'?: (string);
  'strategyId'?: (string);
  'strategyType'?: (_tinkoff_public_invest_api_contract_v1_StrategyType);
  'instrumentUid'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_SignalDirection);
  'active'?: (_tinkoff_public_invest_api_contract_v1_SignalState);
  'paging'?: (_tinkoff_public_invest_api_contract_v1_Page | null);
  '_signalId'?: "signalId";
  '_strategyId'?: "strategyId";
  '_strategyType'?: "strategyType";
  '_instrumentUid'?: "instrumentUid";
  '_from'?: "from";
  '_to'?: "to";
  '_direction'?: "direction";
  '_active'?: "active";
  '_paging'?: "paging";
}

export interface GetSignalsRequest__Output {
  'signalId'?: (string);
  'strategyId'?: (string);
  'strategyType'?: (_tinkoff_public_invest_api_contract_v1_StrategyType__Output);
  'instrumentUid'?: (string);
  'from'?: (_google_protobuf_Timestamp__Output | null);
  'to'?: (_google_protobuf_Timestamp__Output | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_SignalDirection__Output);
  'active'?: (_tinkoff_public_invest_api_contract_v1_SignalState__Output);
  'paging'?: (_tinkoff_public_invest_api_contract_v1_Page__Output | null);
  '_signalId': "signalId";
  '_strategyId': "strategyId";
  '_strategyType': "strategyType";
  '_instrumentUid': "instrumentUid";
  '_from': "from";
  '_to': "to";
  '_direction': "direction";
  '_active': "active";
  '_paging': "paging";
}
