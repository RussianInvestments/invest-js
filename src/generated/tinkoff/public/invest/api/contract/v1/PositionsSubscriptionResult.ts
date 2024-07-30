// Original file: investAPI/src/docs/contracts/operations.proto

import type { PositionsSubscriptionStatus as _tinkoff_public_invest_api_contract_v1_PositionsSubscriptionStatus, PositionsSubscriptionStatus__Output as _tinkoff_public_invest_api_contract_v1_PositionsSubscriptionStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsSubscriptionStatus';

export interface PositionsSubscriptionResult {
  'accounts'?: (_tinkoff_public_invest_api_contract_v1_PositionsSubscriptionStatus)[];
  'trackingId'?: (string);
  'streamId'?: (string);
}

export interface PositionsSubscriptionResult__Output {
  'accounts': (_tinkoff_public_invest_api_contract_v1_PositionsSubscriptionStatus__Output)[];
  'trackingId': (string);
  'streamId': (string);
}
