// Original file: investAPI/src/docs/contracts/orders.proto

import type { PriceType as _tinkoff_public_invest_api_contract_v1_PriceType } from '../../../../../../tinkoff/public/invest/api/contract/v1/PriceType';

export interface GetOrderStateRequest {
  'accountId'?: (string);
  'orderId'?: (string);
  'priceType'?: (_tinkoff_public_invest_api_contract_v1_PriceType | keyof typeof _tinkoff_public_invest_api_contract_v1_PriceType);
}

export interface GetOrderStateRequest__Output {
  'accountId': (string);
  'orderId': (string);
  'priceType': (keyof typeof _tinkoff_public_invest_api_contract_v1_PriceType);
}
