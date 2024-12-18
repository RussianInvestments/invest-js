// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentStatus as _tinkoff_public_invest_api_contract_v1_InstrumentStatus, InstrumentStatus__Output as _tinkoff_public_invest_api_contract_v1_InstrumentStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentStatus';
import type { InstrumentExchangeType as _tinkoff_public_invest_api_contract_v1_InstrumentExchangeType, InstrumentExchangeType__Output as _tinkoff_public_invest_api_contract_v1_InstrumentExchangeType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentExchangeType';

export interface InstrumentsRequest {
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus);
  'instrumentExchange'?: (_tinkoff_public_invest_api_contract_v1_InstrumentExchangeType);
  '_instrumentStatus'?: "instrumentStatus";
  '_instrumentExchange'?: "instrumentExchange";
}

export interface InstrumentsRequest__Output {
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus__Output);
  'instrumentExchange'?: (_tinkoff_public_invest_api_contract_v1_InstrumentExchangeType__Output);
  '_instrumentStatus': "instrumentStatus";
  '_instrumentExchange': "instrumentExchange";
}
