// Original file: investAPI/src/docs/contracts/stoporders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { StopOrderDirection as _tinkoff_public_invest_api_contract_v1_StopOrderDirection } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderDirection';
import type { StopOrderExpirationType as _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderExpirationType';
import type { StopOrderType as _tinkoff_public_invest_api_contract_v1_StopOrderType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { ExchangeOrderType as _tinkoff_public_invest_api_contract_v1_ExchangeOrderType } from '../../../../../../tinkoff/public/invest/api/contract/v1/ExchangeOrderType';
import type { TakeProfitType as _tinkoff_public_invest_api_contract_v1_TakeProfitType } from '../../../../../../tinkoff/public/invest/api/contract/v1/TakeProfitType';
import type { PriceType as _tinkoff_public_invest_api_contract_v1_PriceType } from '../../../../../../tinkoff/public/invest/api/contract/v1/PriceType';
import type { TrailingValueType as _tinkoff_public_invest_api_contract_v1_TrailingValueType } from '../../../../../../tinkoff/public/invest/api/contract/v1/TrailingValueType';
import type { Long } from '@grpc/proto-loader';

export interface _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData {
  'indent'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'indentType'?: (_tinkoff_public_invest_api_contract_v1_TrailingValueType | keyof typeof _tinkoff_public_invest_api_contract_v1_TrailingValueType);
  'spread'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'spreadType'?: (_tinkoff_public_invest_api_contract_v1_TrailingValueType | keyof typeof _tinkoff_public_invest_api_contract_v1_TrailingValueType);
}

export interface _tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData__Output {
  'indent': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'indentType': (keyof typeof _tinkoff_public_invest_api_contract_v1_TrailingValueType);
  'spread': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'spreadType': (keyof typeof _tinkoff_public_invest_api_contract_v1_TrailingValueType);
}

export interface PostStopOrderRequest {
  'figi'?: (string);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'stopPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_StopOrderDirection | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'accountId'?: (string);
  'expirationType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderExpirationType | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType);
  'stopOrderType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderType | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderType);
  'expireDate'?: (_google_protobuf_Timestamp | null);
  'instrumentId'?: (string);
  'exchangeOrderType'?: (_tinkoff_public_invest_api_contract_v1_ExchangeOrderType | keyof typeof _tinkoff_public_invest_api_contract_v1_ExchangeOrderType);
  'takeProfitType'?: (_tinkoff_public_invest_api_contract_v1_TakeProfitType | keyof typeof _tinkoff_public_invest_api_contract_v1_TakeProfitType);
  'trailingData'?: (_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData | null);
  'priceType'?: (_tinkoff_public_invest_api_contract_v1_PriceType | keyof typeof _tinkoff_public_invest_api_contract_v1_PriceType);
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
  'direction': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'accountId': (string);
  'expirationType': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderExpirationType);
  'stopOrderType': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderType);
  'expireDate'?: (_google_protobuf_Timestamp__Output | null);
  'instrumentId': (string);
  'exchangeOrderType': (keyof typeof _tinkoff_public_invest_api_contract_v1_ExchangeOrderType);
  'takeProfitType': (keyof typeof _tinkoff_public_invest_api_contract_v1_TakeProfitType);
  'trailingData': (_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest_TrailingData__Output | null);
  'priceType': (keyof typeof _tinkoff_public_invest_api_contract_v1_PriceType);
  '_figi': "figi";
  '_price': "price";
  '_stopPrice': "stopPrice";
  '_expireDate': "expireDate";
}
