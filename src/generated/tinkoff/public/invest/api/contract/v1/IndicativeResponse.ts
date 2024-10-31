// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentType as _tinkoff_public_invest_api_contract_v1_InstrumentType, InstrumentType__Output as _tinkoff_public_invest_api_contract_v1_InstrumentType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentType';

export interface IndicativeResponse {
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'currency'?: (string);
  'instrumentKind'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType);
  'name'?: (string);
  'exchange'?: (string);
  'uid'?: (string);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
}

export interface IndicativeResponse__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'currency': (string);
  'instrumentKind': (_tinkoff_public_invest_api_contract_v1_InstrumentType__Output);
  'name': (string);
  'exchange': (string);
  'uid': (string);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
}
