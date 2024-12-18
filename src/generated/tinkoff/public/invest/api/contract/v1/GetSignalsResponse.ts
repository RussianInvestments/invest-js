// Original file: investAPI/src/docs/contracts/signals.proto

import type { Signal as _tinkoff_public_invest_api_contract_v1_Signal, Signal__Output as _tinkoff_public_invest_api_contract_v1_Signal__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Signal';
import type { PageResponse as _tinkoff_public_invest_api_contract_v1_PageResponse, PageResponse__Output as _tinkoff_public_invest_api_contract_v1_PageResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PageResponse';

export interface GetSignalsResponse {
  'signals'?: (_tinkoff_public_invest_api_contract_v1_Signal)[];
  'paging'?: (_tinkoff_public_invest_api_contract_v1_PageResponse | null);
}

export interface GetSignalsResponse__Output {
  'signals': (_tinkoff_public_invest_api_contract_v1_Signal__Output)[];
  'paging': (_tinkoff_public_invest_api_contract_v1_PageResponse__Output | null);
}
