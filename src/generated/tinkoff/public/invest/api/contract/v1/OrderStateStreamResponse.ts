// Original file: investAPI/src/docs/contracts/orders.proto

import type { Ping as _tinkoff_public_invest_api_contract_v1_Ping, Ping__Output as _tinkoff_public_invest_api_contract_v1_Ping__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Ping';
import type { SubscriptionResponse as _tinkoff_public_invest_api_contract_v1_SubscriptionResponse, SubscriptionResponse__Output as _tinkoff_public_invest_api_contract_v1_SubscriptionResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionResponse';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { OrderExecutionReportStatus as _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus, OrderExecutionReportStatus__Output as _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderExecutionReportStatus';
import type { OrderDirection as _tinkoff_public_invest_api_contract_v1_OrderDirection, OrderDirection__Output as _tinkoff_public_invest_api_contract_v1_OrderDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderDirection';
import type { TimeInForceType as _tinkoff_public_invest_api_contract_v1_TimeInForceType, TimeInForceType__Output as _tinkoff_public_invest_api_contract_v1_TimeInForceType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TimeInForceType';
import type { OrderType as _tinkoff_public_invest_api_contract_v1_OrderType, OrderType__Output as _tinkoff_public_invest_api_contract_v1_OrderType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderType';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { OrderTrade as _tinkoff_public_invest_api_contract_v1_OrderTrade, OrderTrade__Output as _tinkoff_public_invest_api_contract_v1_OrderTrade__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderTrade';
import type { Long } from '@grpc/proto-loader';

// Original file: investAPI/src/docs/contracts/orders.proto

export const _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_MarkerType = {
  MARKER_UNKNOWN: 'MARKER_UNKNOWN',
  MARKER_BROKER: 'MARKER_BROKER',
  MARKER_CHAT: 'MARKER_CHAT',
  MARKER_PAPER: 'MARKER_PAPER',
  MARKER_MARGIN: 'MARKER_MARGIN',
  MARKER_TKBNM: 'MARKER_TKBNM',
  MARKER_SHORT: 'MARKER_SHORT',
  MARKER_SPECMM: 'MARKER_SPECMM',
  MARKER_PO: 'MARKER_PO',
} as const;

export type _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_MarkerType =
  | 'MARKER_UNKNOWN'
  | 0
  | 'MARKER_BROKER'
  | 1
  | 'MARKER_CHAT'
  | 2
  | 'MARKER_PAPER'
  | 3
  | 'MARKER_MARGIN'
  | 4
  | 'MARKER_TKBNM'
  | 5
  | 'MARKER_SHORT'
  | 6
  | 'MARKER_SPECMM'
  | 7
  | 'MARKER_PO'
  | 8

export type _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_MarkerType__Output = typeof _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_MarkerType[keyof typeof _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_MarkerType]

export interface _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_OrderState {
  'orderId'?: (string);
  'orderRequestId'?: (string);
  'clientCode'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'executionReportStatus'?: (_tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus);
  'statusInfo'?: (_tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_StatusCauseInfo);
  'ticker'?: (string);
  'classCode'?: (string);
  'lotSize'?: (number);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_OrderDirection);
  'timeInForce'?: (_tinkoff_public_invest_api_contract_v1_TimeInForceType);
  'orderType'?: (_tinkoff_public_invest_api_contract_v1_OrderType);
  'accountId'?: (string);
  'initialOrderPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'orderPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'amount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'executedOrderPrice'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'currency'?: (string);
  'lotsRequested'?: (number | string | Long);
  'lotsExecuted'?: (number | string | Long);
  'lotsLeft'?: (number | string | Long);
  'lotsCancelled'?: (number | string | Long);
  'marker'?: (_tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_MarkerType);
  'trades'?: (_tinkoff_public_invest_api_contract_v1_OrderTrade)[];
  'completionTime'?: (_google_protobuf_Timestamp | null);
  'exchange'?: (string);
  'instrumentUid'?: (string);
  '_orderRequestId'?: "orderRequestId";
  '_statusInfo'?: "statusInfo";
  '_amount'?: "amount";
  '_marker'?: "marker";
}

export interface _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_OrderState__Output {
  'orderId': (string);
  'orderRequestId'?: (string);
  'clientCode': (string);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'executionReportStatus': (_tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus__Output);
  'statusInfo'?: (_tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_StatusCauseInfo__Output);
  'ticker': (string);
  'classCode': (string);
  'lotSize': (number);
  'direction': (_tinkoff_public_invest_api_contract_v1_OrderDirection__Output);
  'timeInForce': (_tinkoff_public_invest_api_contract_v1_TimeInForceType__Output);
  'orderType': (_tinkoff_public_invest_api_contract_v1_OrderType__Output);
  'accountId': (string);
  'initialOrderPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'orderPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'amount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'executedOrderPrice': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'currency': (string);
  'lotsRequested': (string);
  'lotsExecuted': (string);
  'lotsLeft': (string);
  'lotsCancelled': (string);
  'marker'?: (_tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_MarkerType__Output);
  'trades': (_tinkoff_public_invest_api_contract_v1_OrderTrade__Output)[];
  'completionTime': (_google_protobuf_Timestamp__Output | null);
  'exchange': (string);
  'instrumentUid': (string);
  '_orderRequestId': "orderRequestId";
  '_statusInfo': "statusInfo";
  '_amount': "amount";
  '_marker': "marker";
}

// Original file: investAPI/src/docs/contracts/orders.proto

export const _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_StatusCauseInfo = {
  CAUSE_UNSPECIFIED: 'CAUSE_UNSPECIFIED',
  CAUSE_CANCELLED_BY_CLIENT: 'CAUSE_CANCELLED_BY_CLIENT',
  CAUSE_CANCELLED_BY_EXCHANGE: 'CAUSE_CANCELLED_BY_EXCHANGE',
  CAUSE_CANCELLED_NOT_ENOUGH_POSITION: 'CAUSE_CANCELLED_NOT_ENOUGH_POSITION',
  CAUSE_CANCELLED_BY_CLIENT_BLOCK: 'CAUSE_CANCELLED_BY_CLIENT_BLOCK',
  CAUSE_REJECTED_BY_BROKER: 'CAUSE_REJECTED_BY_BROKER',
  CAUSE_REJECTED_BY_EXCHANGE: 'CAUSE_REJECTED_BY_EXCHANGE',
  CAUSE_CANCELLED_BY_BROKER: 'CAUSE_CANCELLED_BY_BROKER',
} as const;

export type _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_StatusCauseInfo =
  | 'CAUSE_UNSPECIFIED'
  | 0
  | 'CAUSE_CANCELLED_BY_CLIENT'
  | 15
  | 'CAUSE_CANCELLED_BY_EXCHANGE'
  | 1
  | 'CAUSE_CANCELLED_NOT_ENOUGH_POSITION'
  | 2
  | 'CAUSE_CANCELLED_BY_CLIENT_BLOCK'
  | 3
  | 'CAUSE_REJECTED_BY_BROKER'
  | 4
  | 'CAUSE_REJECTED_BY_EXCHANGE'
  | 5
  | 'CAUSE_CANCELLED_BY_BROKER'
  | 6

export type _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_StatusCauseInfo__Output = typeof _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_StatusCauseInfo[keyof typeof _tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_StatusCauseInfo]

export interface OrderStateStreamResponse {
  'orderState'?: (_tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_OrderState | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping | null);
  'subscription'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionResponse | null);
  'payload'?: "orderState"|"ping"|"subscription";
}

export interface OrderStateStreamResponse__Output {
  'orderState'?: (_tinkoff_public_invest_api_contract_v1_OrderStateStreamResponse_OrderState__Output | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping__Output | null);
  'subscription'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionResponse__Output | null);
  'payload': "orderState"|"ping"|"subscription";
}
