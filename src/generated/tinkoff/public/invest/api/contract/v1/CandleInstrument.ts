// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionInterval as _tinkoff_public_invest_api_contract_v1_SubscriptionInterval, SubscriptionInterval__Output as _tinkoff_public_invest_api_contract_v1_SubscriptionInterval__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionInterval';

export interface CandleInstrument {
  'figi'?: (string);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionInterval);
  'instrumentId'?: (string);
}

export interface CandleInstrument__Output {
  'figi': (string);
  'interval': (_tinkoff_public_invest_api_contract_v1_SubscriptionInterval__Output);
  'instrumentId': (string);
}
