// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionAction as _tinkoff_public_invest_api_contract_v1_SubscriptionAction } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionAction';
import type { CandleInstrument as _tinkoff_public_invest_api_contract_v1_CandleInstrument, CandleInstrument__Output as _tinkoff_public_invest_api_contract_v1_CandleInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CandleInstrument';
import type { _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetCandlesRequest';

export interface SubscribeCandlesRequest {
  'subscriptionAction'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionAction | keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_CandleInstrument)[];
  'waitingClose'?: (boolean);
  'candleSourceType'?: (_tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource | keyof typeof _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource);
  '_candleSourceType'?: "candleSourceType";
}

export interface SubscribeCandlesRequest__Output {
  'subscriptionAction': (keyof typeof _tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments': (_tinkoff_public_invest_api_contract_v1_CandleInstrument__Output)[];
  'waitingClose': (boolean);
  'candleSourceType'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_GetCandlesRequest_CandleSource);
  '_candleSourceType': "candleSourceType";
}
