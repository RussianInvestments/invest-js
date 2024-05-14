// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentStatus as _tinkoff_public_invest_api_contract_v1_InstrumentStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentStatus';
import type { InstrumentExchangeType as _tinkoff_public_invest_api_contract_v1_InstrumentExchangeType } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentExchangeType';

export interface InstrumentsRequest {
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentStatus);
  'instrumentExchange'?: (_tinkoff_public_invest_api_contract_v1_InstrumentExchangeType | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentExchangeType);
  '_instrumentStatus'?: "instrumentStatus";
  '_instrumentExchange'?: "instrumentExchange";
}

export interface InstrumentsRequest__Output {
  'instrumentStatus'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentStatus);
  'instrumentExchange'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentExchangeType);
  '_instrumentStatus': "instrumentStatus";
  '_instrumentExchange': "instrumentExchange";
}
