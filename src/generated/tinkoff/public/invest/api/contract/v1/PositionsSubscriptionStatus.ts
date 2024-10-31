// Original file: investAPI/src/docs/contracts/operations.proto

import type { PositionsAccountSubscriptionStatus as _tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus, PositionsAccountSubscriptionStatus__Output as _tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsAccountSubscriptionStatus';

export interface PositionsSubscriptionStatus {
  'accountId'?: (string);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus);
}

export interface PositionsSubscriptionStatus__Output {
  'accountId': (string);
  'subscriptionStatus': (_tinkoff_public_invest_api_contract_v1_PositionsAccountSubscriptionStatus__Output);
}
