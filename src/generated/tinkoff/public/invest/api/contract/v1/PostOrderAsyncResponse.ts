// Original file: investAPI/src/docs/contracts/orders.proto

import type { OrderExecutionReportStatus as _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus, OrderExecutionReportStatus__Output as _tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderExecutionReportStatus';

export interface PostOrderAsyncResponse {
  'orderRequestId'?: (string);
  'executionReportStatus'?: (_tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus);
  'tradeIntentId'?: (string);
  '_tradeIntentId'?: "tradeIntentId";
}

export interface PostOrderAsyncResponse__Output {
  'orderRequestId': (string);
  'executionReportStatus': (_tinkoff_public_invest_api_contract_v1_OrderExecutionReportStatus__Output);
  'tradeIntentId'?: (string);
  '_tradeIntentId': "tradeIntentId";
}
