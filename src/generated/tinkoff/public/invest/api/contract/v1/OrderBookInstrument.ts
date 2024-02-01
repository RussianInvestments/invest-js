// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { OrderBookType as _tinkoff_public_invest_api_contract_v1_OrderBookType } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderBookType';

export interface OrderBookInstrument {
  'figi'?: (string);
  'depth'?: (number);
  'instrumentId'?: (string);
  'orderBookType'?: (_tinkoff_public_invest_api_contract_v1_OrderBookType | keyof typeof _tinkoff_public_invest_api_contract_v1_OrderBookType);
}

export interface OrderBookInstrument__Output {
  'figi': (string);
  'depth': (number);
  'instrumentId': (string);
  'orderBookType': (keyof typeof _tinkoff_public_invest_api_contract_v1_OrderBookType);
}
