// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionStatus as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionStatus';

export interface TradeSubscription {
  'figi'?: (string);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
  'instrumentUid'?: (string);
  'streamId'?: (string);
  'subscriptionId'?: (string);
}

export interface TradeSubscription__Output {
  'figi': (string);
  'subscriptionStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
  'instrumentUid': (string);
  'streamId': (string);
  'subscriptionId': (string);
}
