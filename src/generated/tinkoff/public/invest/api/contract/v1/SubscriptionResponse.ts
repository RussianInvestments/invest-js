// Original file: investAPI/src/docs/contracts/orders.proto

import type { ResultSubscriptionStatus as _tinkoff_public_invest_api_contract_v1_ResultSubscriptionStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/ResultSubscriptionStatus';
import type { ErrorDetail as _tinkoff_public_invest_api_contract_v1_ErrorDetail, ErrorDetail__Output as _tinkoff_public_invest_api_contract_v1_ErrorDetail__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ErrorDetail';

export interface SubscriptionResponse {
  'trackingId'?: (string);
  'status'?: (_tinkoff_public_invest_api_contract_v1_ResultSubscriptionStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_ResultSubscriptionStatus);
  'streamId'?: (string);
  'accounts'?: (string)[];
  'error'?: (_tinkoff_public_invest_api_contract_v1_ErrorDetail | null);
  '_error'?: "error";
}

export interface SubscriptionResponse__Output {
  'trackingId': (string);
  'status': (keyof typeof _tinkoff_public_invest_api_contract_v1_ResultSubscriptionStatus);
  'streamId': (string);
  'accounts': (string)[];
  'error'?: (_tinkoff_public_invest_api_contract_v1_ErrorDetail__Output | null);
  '_error': "error";
}
