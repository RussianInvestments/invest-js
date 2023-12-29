// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentType as _tinkoff_public_invest_api_contract_v1_InstrumentType } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentType';

export interface AssetsRequest {
  'instrumentType'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
  '_instrumentType'?: "instrumentType";
}

export interface AssetsRequest__Output {
  'instrumentType'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
  '_instrumentType': "instrumentType";
}
