// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionStatus as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus, SubscriptionStatus__Output as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionStatus';

export interface LastPriceSubscription {
  'figi'?: (string);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
  'instrumentUid'?: (string);
  'streamId'?: (string);
  'subscriptionId'?: (string);
}

export interface LastPriceSubscription__Output {
  'figi': (string);
  'subscriptionStatus': (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus__Output);
  'instrumentUid': (string);
  'streamId': (string);
  'subscriptionId': (string);
}
