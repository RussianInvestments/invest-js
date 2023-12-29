// Original file: investAPI/src/docs/contracts/orders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface GetMaxLotsRequest {
  'accountId'?: (string);
  'instrumentId'?: (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  '_price'?: "price";
}

export interface GetMaxLotsRequest__Output {
  'accountId': (string);
  'instrumentId': (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  '_price': "price";
}
