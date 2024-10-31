// Original file: investAPI/src/docs/contracts/stoporders.proto

import type { StopOrderDirection as _tinkoff_public_invest_api_contract_v1_StopOrderDirection, StopOrderDirection__Output as _tinkoff_public_invest_api_contract_v1_StopOrderDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderDirection';
import type { StopOrderType as _tinkoff_public_invest_api_contract_v1_StopOrderType, StopOrderType__Output as _tinkoff_public_invest_api_contract_v1_StopOrderType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { TakeProfitType as _tinkoff_public_invest_api_contract_v1_TakeProfitType, TakeProfitType__Output as _tinkoff_public_invest_api_contract_v1_TakeProfitType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TakeProfitType';
import type { StopOrderStatusOption as _tinkoff_public_invest_api_contract_v1_StopOrderStatusOption, StopOrderStatusOption__Output as _tinkoff_public_invest_api_contract_v1_StopOrderStatusOption__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderStatusOption';
import type { ExchangeOrderType as _tinkoff_public_invest_api_contract_v1_ExchangeOrderType, ExchangeOrderType__Output as _tinkoff_public_invest_api_contract_v1_ExchangeOrderType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ExchangeOrderType';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { TrailingValueType as _tinkoff_public_invest_api_contract_v1_TrailingValueType, TrailingValueType__Output as _tinkoff_public_invest_api_contract_v1_TrailingValueType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TrailingValueType';
import type { TrailingStopStatus as _tinkoff_public_invest_api_contract_v1_TrailingStopStatus, TrailingStopStatus__Output as _tinkoff_public_invest_api_contract_v1_TrailingStopStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TrailingStopStatus';
import type { Long } from '@grpc/proto-loader';

export interface _tinkoff_public_invest_api_contract_v1_StopOrder_TrailingData {
  'indent'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'indentType'?: (_tinkoff_public_invest_api_contract_v1_TrailingValueType);
  'spread'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'spreadType'?: (_tinkoff_public_invest_api_contract_v1_TrailingValueType);
  'status'?: (_tinkoff_public_invest_api_contract_v1_TrailingStopStatus);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'extr'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface _tinkoff_public_invest_api_contract_v1_StopOrder_TrailingData__Output {
  'indent': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'indentType': (_tinkoff_public_invest_api_contract_v1_TrailingValueType__Output);
  'spread': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'spreadType': (_tinkoff_public_invest_api_contract_v1_TrailingValueType__Output);
  'status': (_tinkoff_public_invest_api_contract_v1_TrailingStopStatus__Output);
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'extr': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}

export interface StopOrder {
  'stopOrderId'?: (string);
  'lotsRequested'?: (number | string | Long);
  'figi'?: (string);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_StopOrderDirection);
  'currency'?: (string);
  'orderType'?: (_tinkoff_public_invest_api_contract_v1_StopOrderType);
  'createDate'?: (_google_protobuf_Timestamp | null);
  'activationDateTime'?: (_google_protobuf_Timestamp | null);
  'expirationTime'?: (_google_protobuf_Timestamp | null);
  'price'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'stopPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'instrumentUid'?: (string);
  'takeProfitType'?: (_tinkoff_public_invest_api_contract_v1_TakeProfitType);
  'trailingData'?: (_tinkoff_public_invest_api_contract_v1_StopOrder_TrailingData | null);
  'status'?: (_tinkoff_public_invest_api_contract_v1_StopOrderStatusOption);
  'exchangeOrderType'?: (_tinkoff_public_invest_api_contract_v1_ExchangeOrderType);
  'exchangeOrderId'?: (string);
  '_exchangeOrderId'?: "exchangeOrderId";
}

export interface StopOrder__Output {
  'stopOrderId': (string);
  'lotsRequested': (string);
  'figi': (string);
  'direction': (_tinkoff_public_invest_api_contract_v1_StopOrderDirection__Output);
  'currency': (string);
  'orderType': (_tinkoff_public_invest_api_contract_v1_StopOrderType__Output);
  'createDate': (_google_protobuf_Timestamp__Output | null);
  'activationDateTime': (_google_protobuf_Timestamp__Output | null);
  'expirationTime': (_google_protobuf_Timestamp__Output | null);
  'price': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'stopPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'instrumentUid': (string);
  'takeProfitType': (_tinkoff_public_invest_api_contract_v1_TakeProfitType__Output);
  'trailingData': (_tinkoff_public_invest_api_contract_v1_StopOrder_TrailingData__Output | null);
  'status': (_tinkoff_public_invest_api_contract_v1_StopOrderStatusOption__Output);
  'exchangeOrderType': (_tinkoff_public_invest_api_contract_v1_ExchangeOrderType__Output);
  'exchangeOrderId'?: (string);
  '_exchangeOrderId': "exchangeOrderId";
}
