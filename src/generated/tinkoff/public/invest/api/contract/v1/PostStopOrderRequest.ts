// Original file: investAPI/src/docs/contracts/stoporders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { StopOrderDirection as _tinkoff_public_invest_api_contract_v1_StopOrderDirection, StopOrderDirection__Output as _tinkoff_public_invest_api_contract_v1_StopOrderDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderDirection';
import type { StopOrderExpirationType as _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType, StopOrderExpirationType__Output as _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderExpirationType';
import type { StopOrderType as _tinkoff_public_invest_api_contract_v1_StopOrderType, StopOrderType__Output as _tinkoff_public_invest_api_contract_v1_StopOrderType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { ExchangeOrderType as _tinkoff_public_invest_api_contract_v1_ExchangeOrderType, ExchangeOrderType__Output as _tinkoff_public_invest_api_contract_v1_ExchangeOrderType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ExchangeOrderType';
import type { TakeProfitType as _tinkoff_public_invest_api_contract_v1_TakeProfitType, TakeProfitType__Output as _tinkoff_public_invest_api_contract_v1_TakeProfitType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TakeProfitType';
import type { PriceType as _tinkoff_public_invest_api_contract_v1_PriceType, PriceType__Output as _tinkoff_public_invest_api_contract_v1_PriceType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PriceType';
import type { TrailingValueType as _tinkoff_public_invest_api_contract_v1_TrailingValueType, TrailingValueType__Output as _tinkoff_public_invest_api_contract_v1_TrailingValueType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TrailingValueType';
import type { Long } from '@grpc/proto-loader';

export interface _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData {
  'indent'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'indentType'?: (_tinkoff_public_invest_api_contract_v1_TrailingValueType);
  'spread'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'spreadType'?: (_tinkoff_public_invest_api_contract_v1_TrailingValueType);
}

export interface _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData__Output {
  'indent': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'indentType': (_tinkoff_public_invest_api_contract_v1_TrailingValueType__Output);
  'spread': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'spreadType': (_tinkoff_public_invest_api_contract_v1_TrailingValueType__Output);
}

export interface PostStopOrderRequest {
  'figi'?: (string);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'stopPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'accountId'?: (string);
  'expirationType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderExpirationType);
  'stopOrderType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderType);
  'expireDate'?: (_google_protobuf_Timestamp | null);
  'instrumentId'?: (string);
  'exchangeOrderType'?: (_tinkoff_public_invest_api_contract_v1_ExchangeOrderType);
  'takeProfitType'?: (_tinkoff_public_invest_api_contract_v1_TakeProfitType);
  'trailingData'?: (_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData | null);
  'priceType'?: (_tinkoff_public_invest_api_contract_v1_PriceType);
  'orderId'?: (string);
  '_figi'?: "figi";
  '_price'?: "price";
  '_stopPrice'?: "stopPrice";
  '_expireDate'?: "expireDate";
}

export interface PostStopOrderRequest__Output {
  'figi'?: (string);
  'quantity': (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'stopPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'direction': (_tinkoff_public_invest_api_contract_v1_StopOrderDirection__Output);
  'accountId': (string);
  'expirationType': (_tinkoff_public_invest_api_contract_v1_StopOrderExpirationType__Output);
  'stopOrderType': (_tinkoff_public_invest_api_contract_v1_StopOrderType__Output);
  'expireDate'?: (_google_protobuf_Timestamp__Output | null);
  'instrumentId': (string);
  'exchangeOrderType': (_tinkoff_public_invest_api_contract_v1_ExchangeOrderType__Output);
  'takeProfitType': (_tinkoff_public_invest_api_contract_v1_TakeProfitType__Output);
  'trailingData': (_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData__Output | null);
  'priceType': (_tinkoff_public_invest_api_contract_v1_PriceType__Output);
  'orderId': (string);
  '_figi': "figi";
  '_price': "price";
  '_stopPrice': "stopPrice";
  '_expireDate': "expireDate";
}
