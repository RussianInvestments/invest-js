// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { TradeSubscription as _tinkoff_public_invest_api_contract_v1_TradeSubscription, TradeSubscription__Output as _tinkoff_public_invest_api_contract_v1_TradeSubscription__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeSubscription';
import type { TradeSourceType as _tinkoff_public_invest_api_contract_v1_TradeSourceType } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeSourceType';

export interface SubscribeTradesResponse {
  'trackingId'?: (string);
  'tradeSubscriptions'?: (_tinkoff_public_invest_api_contract_v1_TradeSubscription)[];
  'tradeSource'?: (_tinkoff_public_invest_api_contract_v1_TradeSourceType | keyof typeof _tinkoff_public_invest_api_contract_v1_TradeSourceType);
}

export interface SubscribeTradesResponse__Output {
  'trackingId': (string);
  'tradeSubscriptions': (_tinkoff_public_invest_api_contract_v1_TradeSubscription__Output)[];
  'tradeSource': (keyof typeof _tinkoff_public_invest_api_contract_v1_TradeSourceType);
}
