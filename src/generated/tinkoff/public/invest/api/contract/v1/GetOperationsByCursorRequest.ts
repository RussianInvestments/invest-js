// Original file: investAPI/src/docs/contracts/operations.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { OperationType as _tinkoff_public_invest_api_contract_v1_OperationType, OperationType__Output as _tinkoff_public_invest_api_contract_v1_OperationType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationType';
import type { OperationState as _tinkoff_public_invest_api_contract_v1_OperationState, OperationState__Output as _tinkoff_public_invest_api_contract_v1_OperationState__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationState';

export interface GetOperationsByCursorRequest {
  'accountId'?: (string);
  'instrumentId'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'cursor'?: (string);
  'limit'?: (number);
  'operationTypes'?: (_tinkoff_public_invest_api_contract_v1_OperationType)[];
  'state'?: (_tinkoff_public_invest_api_contract_v1_OperationState);
  'withoutCommissions'?: (boolean);
  'withoutTrades'?: (boolean);
  'withoutOvernights'?: (boolean);
  '_instrumentId'?: "instrumentId";
  '_from'?: "from";
  '_to'?: "to";
  '_cursor'?: "cursor";
  '_limit'?: "limit";
  '_state'?: "state";
  '_withoutCommissions'?: "withoutCommissions";
  '_withoutTrades'?: "withoutTrades";
  '_withoutOvernights'?: "withoutOvernights";
}

export interface GetOperationsByCursorRequest__Output {
  'accountId': (string);
  'instrumentId'?: (string);
  'from'?: (_google_protobuf_Timestamp__Output | null);
  'to'?: (_google_protobuf_Timestamp__Output | null);
  'cursor'?: (string);
  'limit'?: (number);
  'operationTypes': (_tinkoff_public_invest_api_contract_v1_OperationType__Output)[];
  'state'?: (_tinkoff_public_invest_api_contract_v1_OperationState__Output);
  'withoutCommissions'?: (boolean);
  'withoutTrades'?: (boolean);
  'withoutOvernights'?: (boolean);
  '_instrumentId': "instrumentId";
  '_from': "from";
  '_to': "to";
  '_cursor': "cursor";
  '_limit': "limit";
  '_state': "state";
  '_withoutCommissions': "withoutCommissions";
  '_withoutTrades': "withoutTrades";
  '_withoutOvernights': "withoutOvernights";
}
