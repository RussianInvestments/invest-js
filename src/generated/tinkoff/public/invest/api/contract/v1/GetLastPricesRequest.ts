// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { LastPriceType as _tinkoff_public_invest_api_contract_v1_LastPriceType } from '../../../../../../tinkoff/public/invest/api/contract/v1/LastPriceType';

export interface GetLastPricesRequest {
  'figi'?: (string)[];
  'instrumentId'?: (string)[];
  'lastPriceType'?: (_tinkoff_public_invest_api_contract_v1_LastPriceType | keyof typeof _tinkoff_public_invest_api_contract_v1_LastPriceType);
}

export interface GetLastPricesRequest__Output {
  'figi': (string)[];
  'instrumentId': (string)[];
  'lastPriceType': (keyof typeof _tinkoff_public_invest_api_contract_v1_LastPriceType);
}
