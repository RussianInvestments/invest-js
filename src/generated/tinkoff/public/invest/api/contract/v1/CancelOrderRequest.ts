// Original file: investAPI/src/docs/contracts/orders.proto

import type { OrderIdType as _tinkoff_public_invest_api_contract_v1_OrderIdType } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderIdType';

export interface CancelOrderRequest {
  'accountId'?: (string);
  'orderId'?: (string);
  'orderIdType'?: (_tinkoff_public_invest_api_contract_v1_OrderIdType | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderIdType);
  '_orderIdType'?: "orderIdType";
}

export interface CancelOrderRequest__Output {
  'accountId': (string);
  'orderId': (string);
  'orderIdType'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderIdType);
  '_orderIdType': "orderIdType";
}
