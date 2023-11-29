// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentType as _tinkoff_public_invest_api_contract_v1_InstrumentType } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentType';

export interface FindInstrumentRequest {
  'query'?: (string);
  'instrumentKind'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType | keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
  'apiTradeAvailableFlag'?: (boolean);
  '_instrumentKind'?: "instrumentKind";
  '_apiTradeAvailableFlag'?: "apiTradeAvailableFlag";
}

export interface FindInstrumentRequest__Output {
  'query': (string);
  'instrumentKind'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_InstrumentType);
  'apiTradeAvailableFlag'?: (boolean);
  '_instrumentKind': "instrumentKind";
  '_apiTradeAvailableFlag': "apiTradeAvailableFlag";
}
