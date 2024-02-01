// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionStatus as _tinkoff_public_invest_api_contract_v1_SubscriptionStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionStatus';
import type { OrderBookType as _tinkoff_public_invest_api_contract_v1_OrderBookType } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderBookType';

export interface OrderBookSubscription {
  'figi'?: (string);
  'depth'?: (number);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
  'instrumentUid'?: (string);
  'streamId'?: (string);
  'subscriptionId'?: (string);
  'orderBookType'?: (_tinkoff_public_invest_api_contract_v1_OrderBookType | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderBookType);
}

export interface OrderBookSubscription__Output {
  'figi': (string);
  'depth': (number);
  'subscriptionStatus': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionStatus);
  'instrumentUid': (string);
  'streamId': (string);
  'subscriptionId': (string);
  'orderBookType': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderBookType);
}
