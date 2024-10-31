// Original file: investAPI/src/docs/contracts/signals.proto

import type { StrategyType as _tinkoff_public_invest_api_contract_v1_StrategyType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StrategyType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { SignalDirection as _tinkoff_public_invest_api_contract_v1_SignalDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/SignalDirection';
import type { SignalState as _tinkoff_public_invest_api_contract_v1_SignalState } from '../../../../../../tinkoff/public/invest/api/contract/v1/SignalState';
import type { Page as _tinkoff_public_invest_api_contract_v1_Page, Page__Output as _tinkoff_public_invest_api_contract_v1_Page__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Page';

export interface GetSignalsRequest {
  'signalId'?: (string);
  'strategyId'?: (string);
  'strategyType'?: (_tinkoff_public_invest_api_contract_v1_StrategyType | keyof typeof _tinkoff_public_invest_api_contract_v1_StrategyType);
  'instrumentUid'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_SignalDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_SignalDirection);
  'active'?: (_tinkoff_public_invest_api_contract_v1_SignalState | keyof typeof _tinkoff_public_invest_api_contract_v1_SignalState);
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
  'strategyType'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_StrategyType);
  'instrumentUid'?: (string);
  'from'?: (_google_protobuf_Timestamp__Output | null);
  'to'?: (_google_protobuf_Timestamp__Output | null);
  'direction'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_SignalDirection);
  'active'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_SignalState);
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
