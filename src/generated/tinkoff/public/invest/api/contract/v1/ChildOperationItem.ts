// Original file: investAPI/src/docs/contracts/operations.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';

export interface ChildOperationItem {
  'instrumentUid'?: (string);
  'payment'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
}

export interface ChildOperationItem__Output {
  'instrumentUid': (string);
  'payment': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
}
