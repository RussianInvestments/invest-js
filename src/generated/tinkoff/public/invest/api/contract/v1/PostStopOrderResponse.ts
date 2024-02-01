// Original file: investAPI/src/docs/contracts/stoporders.proto

import type { ResponseMetadata as _tinkoff_public_invest_api_contract_v1_ResponseMetadata, ResponseMetadata__Output as _tinkoff_public_invest_api_contract_v1_ResponseMetadata__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ResponseMetadata';

export interface PostStopOrderResponse {
  'stopOrderId'?: (string);
  'orderRequestId'?: (string);
  'responseMetadata'?: (_tinkoff_public_invest_api_contract_v1_ResponseMetadata | null);
}

export interface PostStopOrderResponse__Output {
  'stopOrderId': (string);
  'orderRequestId': (string);
  'responseMetadata': (_tinkoff_public_invest_api_contract_v1_ResponseMetadata__Output | null);
}
