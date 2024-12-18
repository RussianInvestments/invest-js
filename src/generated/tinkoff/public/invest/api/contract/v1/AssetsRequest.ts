// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentType as _tinkoff_public_invest_api_contract_v1_InstrumentType, InstrumentType__Output as _tinkoff_public_invest_api_contract_v1_InstrumentType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentType';
import type { InstrumentStatus as _tinkoff_public_invest_api_contract_v1_InstrumentStatus, InstrumentStatus__Output as _tinkoff_public_invest_api_contract_v1_InstrumentStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentStatus';

export interface AssetsRequest {
  'instrumentType'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType);
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus);
  '_instrumentType'?: "instrumentType";
  '_instrumentStatus'?: "instrumentStatus";
}

export interface AssetsRequest__Output {
  'instrumentType'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType__Output);
  'instrumentStatus'?: (_tinkoff_public_invest_api_contract_v1_InstrumentStatus__Output);
  '_instrumentType': "instrumentType";
  '_instrumentStatus': "instrumentStatus";
}
