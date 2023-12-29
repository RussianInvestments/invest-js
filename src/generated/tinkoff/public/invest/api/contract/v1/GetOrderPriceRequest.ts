// Original file: investAPI/src/docs/contracts/orders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { OrderDirection as _tinkoff_public_invest_api_contract_v1_OrderDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderDirection';
import type { Long } from '@grpc/proto-loader';

export interface GetOrderPriceRequest {
  'accountId'?: (string);
  'instrumentId'?: (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_OrderDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'quantity'?: (number | string | Long);
}

export interface GetOrderPriceRequest__Output {
  'accountId': (string);
  'instrumentId': (string);
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'direction': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderDirection);
  'quantity': (string);
}
