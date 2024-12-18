// Original file: investAPI/src/docs/contracts/orders.proto

import type { OrderExecutionReportStatus as _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus, OrderExecutionReportStatus__Output as _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderExecutionReportStatus';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { OrderDirection as _tinkoff_public_invest_api_contract_v1_OrderDirection, OrderDirection__Output as _tinkoff_public_invest_api_contract_v1_OrderDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderDirection';
import type { OrderType as _tinkoff_public_invest_api_contract_v1_OrderType, OrderType__Output as _tinkoff_public_invest_api_contract_v1_OrderType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderType';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { ResponseMetadata as _tinkoff_public_invest_api_contract_v1_ResponseMetadata, ResponseMetadata__Output as _tinkoff_public_invest_api_contract_v1_ResponseMetadata__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ResponseMetadata';
import type { Long } from '@grpc/proto-loader';

export interface PostOrderResponse {
  'orderId'?: (string);
  'executionReportStatus'?: (_tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus);
  'lotsRequested'?: (number | string | Long);
  'lotsExecuted'?: (number | string | Long);
  'initialOrderPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'executedOrderPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'totalOrderAmount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'initialCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'executedCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'aciValue'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'figi'?: (string);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_OrderDirection);
  'initialSecurityPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'orderType'?: (_tinkoff_public_invest_api_contract_v1_OrderType);
  'message'?: (string);
  'initialOrderPricePt'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'instrumentUid'?: (string);
  'orderRequestId'?: (string);
  'responseMetadata'?: (_tinkoff_public_invest_api_contract_v1_ResponseMetadata | null);
}

export interface PostOrderResponse__Output {
  'orderId': (string);
  'executionReportStatus': (_tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus__Output);
  'lotsRequested': (string);
  'lotsExecuted': (string);
  'initialOrderPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'executedOrderPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'totalOrderAmount': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'initialCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'executedCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'aciValue': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'figi': (string);
  'direction': (_tinkoff_public_invest_api_contract_v1_OrderDirection__Output);
  'initialSecurityPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'orderType': (_tinkoff_public_invest_api_contract_v1_OrderType__Output);
  'message': (string);
  'initialOrderPricePt': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'instrumentUid': (string);
  'orderRequestId': (string);
  'responseMetadata': (_tinkoff_public_invest_api_contract_v1_ResponseMetadata__Output | null);
}
