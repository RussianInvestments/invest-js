// Original file: investAPI/src/docs/contracts/instruments.proto

import type { InstrumentIdType as _tinkoff_public_invest_api_contract_v1_InstrumentIdType, InstrumentIdType__Output as _tinkoff_public_invest_api_contract_v1_InstrumentIdType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentIdType';

export interface InstrumentRequest {
  'idType'?: (_tinkoff_public_invest_api_contract_v1_InstrumentIdType);
  'classCode'?: (string);
  'id'?: (string);
  '_classCode'?: "classCode";
}

export interface InstrumentRequest__Output {
  'idType': (_tinkoff_public_invest_api_contract_v1_InstrumentIdType__Output);
  'classCode'?: (string);
  'id': (string);
  '_classCode': "classCode";
}
