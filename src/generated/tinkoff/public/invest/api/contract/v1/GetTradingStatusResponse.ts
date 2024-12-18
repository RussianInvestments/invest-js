// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus, SecurityTradingStatus__Output as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';

export interface GetTradingStatusResponse {
  'figi'?: (string);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'limitOrderAvailableFlag'?: (boolean);
  'marketOrderAvailableFlag'?: (boolean);
  'apiTradeAvailableFlag'?: (boolean);
  'instrumentUid'?: (string);
  'bestpriceOrderAvailableFlag'?: (boolean);
  'onlyBestPrice'?: (boolean);
}

export interface GetTradingStatusResponse__Output {
  'figi': (string);
  'tradingStatus': (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus__Output);
  'limitOrderAvailableFlag': (boolean);
  'marketOrderAvailableFlag': (boolean);
  'apiTradeAvailableFlag': (boolean);
  'instrumentUid': (string);
  'bestpriceOrderAvailableFlag': (boolean);
  'onlyBestPrice': (boolean);
}
