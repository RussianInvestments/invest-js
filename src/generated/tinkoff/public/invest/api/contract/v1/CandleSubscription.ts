// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionInterval as _tinkoff_public_invest_api_contract_v1_SubscriptionInterval, SubscriptionInterval__Output as _tinkoff_public_invest_api_contract_v1_SubscriptionInterval__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionInterval';
import type { SubscriptionStatus as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus, SubscriptionStatus__Output as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionStatus';
import type { _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource, _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetCandlesRequest';

export interface CandleSubscription {
  'figi'?: (string);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
  'instrumentUid'?: (string);
  'waitingClose'?: (boolean);
  'streamId'?: (string);
  'subscriptionId'?: (string);
  'candleSourceType'?: (_tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource);
  '_candleSourceType'?: "candleSourceType";
}

export interface CandleSubscription__Output {
  'figi': (string);
  'interval': (_tinkoff_public_invest_api_contract_v1_SubscriptionInterval__Output);
  'subscriptionStatus': (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus__Output);
  'instrumentUid': (string);
  'waitingClose': (boolean);
  'streamId': (string);
  'subscriptionId': (string);
  'candleSourceType'?: (_tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource__Output);
  '_candleSourceType': "candleSourceType";
}
