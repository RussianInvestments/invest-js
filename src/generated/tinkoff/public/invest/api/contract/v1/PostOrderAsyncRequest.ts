// Original file: investAPI/src/docs/contracts/orders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { OrderDirection as _tinkoff_public_invest_api_contract_v1_OrderDirection, OrderDirection__Output as _tinkoff_public_invest_api_contract_v1_OrderDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderDirection';
import type { OrderType as _tinkoff_public_invest_api_contract_v1_OrderType, OrderType__Output as _tinkoff_public_invest_api_contract_v1_OrderType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderType';
import type { TimeInForceType as _tinkoff_public_invest_api_contract_v1_TimeInForceType, TimeInForceType__Output as _tinkoff_public_invest_api_contract_v1_TimeInForceType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TimeInForceType';
import type { PriceType as _tinkoff_public_invest_api_contract_v1_PriceType, PriceType__Output as _tinkoff_public_invest_api_contract_v1_PriceType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PriceType';
import type { Long } from '@grpc/proto-loader';

export interface PostOrderAsyncRequest {
  'instrumentId'?: (string);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_OrderDirection);
  'accountId'?: (string);
  'orderType'?: (_tinkoff_public_invest_api_contract_v1_OrderType);
  'orderId'?: (string);
  'timeInForce'?: (_tinkoff_public_invest_api_contract_v1_TimeInForceType);
  'priceType'?: (_tinkoff_public_invest_api_contract_v1_PriceType);
  '_price'?: "price";
  '_timeInForce'?: "timeInForce";
  '_priceType'?: "priceType";
}

export interface PostOrderAsyncRequest__Output {
  'instrumentId': (string);
  'quantity': (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'direction': (_tinkoff_public_invest_api_contract_v1_OrderDirection__Output);
  'accountId': (string);
  'orderType': (_tinkoff_public_invest_api_contract_v1_OrderType__Output);
  'orderId': (string);
  'timeInForce'?: (_tinkoff_public_invest_api_contract_v1_TimeInForceType__Output);
  'priceType'?: (_tinkoff_public_invest_api_contract_v1_PriceType__Output);
  '_price': "price";
  '_timeInForce': "timeInForce";
  '_priceType': "priceType";
}
