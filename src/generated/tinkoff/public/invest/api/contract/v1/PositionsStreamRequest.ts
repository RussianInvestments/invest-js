// Original file: investAPI/src/docs/contracts/operations.proto

import type { PingDelaySettings as _tinkoff_public_invest_api_contract_v1_PingDelaySettings, PingDelaySettings__Output as _tinkoff_public_invest_api_contract_v1_PingDelaySettings__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PingDelaySettings';

export interface PositionsStreamRequest {
  'accounts'?: (string)[];
  'pingSettings'?: (_tinkoff_public_invest_api_contract_v1_PingDelaySettings | null);
}

export interface PositionsStreamRequest__Output {
  'accounts': (string)[];
  'pingSettings': (_tinkoff_public_invest_api_contract_v1_PingDelaySettings__Output | null);
}
