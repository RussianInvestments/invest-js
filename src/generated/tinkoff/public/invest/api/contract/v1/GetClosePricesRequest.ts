// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { InstrumentClosePriceRequest as _tinkoff_public_invest_api_contract_v1_InstrumentClosePriceRequest, InstrumentClosePriceRequest__Output as _tinkoff_public_invest_api_contract_v1_InstrumentClosePriceRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentClosePriceRequest';
import type { InstrumentStatus as _tinkoff_public_invest_api_contract_v1_InstrumentStatus, InstrumentStatus__Output as _tinkoff_public_invest_api_contract_v1_InstrumentStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentStatus';

export interface GetClosePricesRequest {
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_InstrumentClosePriceRequest)[];
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus);
  '_instrumentStatus'?: "instrumentStatus";
}

export interface GetClosePricesRequest__Output {
  'instruments': (_tinkoff_public_invest_api_contract_v1_InstrumentClosePriceRequest__Output)[];
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus__Output);
  '_instrumentStatus': "instrumentStatus";
}
