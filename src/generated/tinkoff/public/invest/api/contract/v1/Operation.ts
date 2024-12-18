// Original file: investAPI/src/docs/contracts/operations.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { OperationState as _tinkoff_public_invest_api_contract_v1_OperationState, OperationState__Output as _tinkoff_public_invest_api_contract_v1_OperationState__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationState';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { OperationType as _tinkoff_public_invest_api_contract_v1_OperationType, OperationType__Output as _tinkoff_public_invest_api_contract_v1_OperationType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationType';
import type { OperationTrade as _tinkoff_public_invest_api_contract_v1_OperationTrade, OperationTrade__Output as _tinkoff_public_invest_api_contract_v1_OperationTrade__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationTrade';
import type { ChildOperationItem as _tinkoff_public_invest_api_contract_v1_ChildOperationItem, ChildOperationItem__Output as _tinkoff_public_invest_api_contract_v1_ChildOperationItem__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ChildOperationItem';
import type { Long } from '@grpc/proto-loader';

export interface Operation {
  'id'?: (string);
  'parentOperationId'?: (string);
  'currency'?: (string);
  'payment'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'state'?: (_tinkoff_public_invest_api_contract_v1_OperationState);
  'quantity'?: (number | string | Long);
  'quantityRest'?: (number | string | Long);
  'figi'?: (string);
  'instrumentType'?: (string);
  'date'?: (_google_protobuf_Timestamp | null);
  'type'?: (string);
  'operationType'?: (_tinkoff_public_invest_api_contract_v1_OperationType);
  'trades'?: (_tinkoff_public_invest_api_contract_v1_OperationTrade)[];
  'assetUid'?: (string);
  'positionUid'?: (string);
  'instrumentUid'?: (string);
  'childOperations'?: (_tinkoff_public_invest_api_contract_v1_ChildOperationItem)[];
}

export interface Operation__Output {
  'id': (string);
  'parentOperationId': (string);
  'currency': (string);
  'payment': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'state': (_tinkoff_public_invest_api_contract_v1_OperationState__Output);
  'quantity': (string);
  'quantityRest': (string);
  'figi': (string);
  'instrumentType': (string);
  'date': (_google_protobuf_Timestamp__Output | null);
  'type': (string);
  'operationType': (_tinkoff_public_invest_api_contract_v1_OperationType__Output);
  'trades': (_tinkoff_public_invest_api_contract_v1_OperationTrade__Output)[];
  'assetUid': (string);
  'positionUid': (string);
  'instrumentUid': (string);
  'childOperations': (_tinkoff_public_invest_api_contract_v1_ChildOperationItem__Output)[];
}
