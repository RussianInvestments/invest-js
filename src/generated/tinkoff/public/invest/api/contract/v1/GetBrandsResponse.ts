// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Brand as _tinkoff_public_invest_api_contract_v1_Brand, Brand__Output as _tinkoff_public_invest_api_contract_v1_Brand__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Brand';
import type { PageResponse as _tinkoff_public_invest_api_contract_v1_PageResponse, PageResponse__Output as _tinkoff_public_invest_api_contract_v1_PageResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PageResponse';

export interface GetBrandsResponse {
  'brands'?: (_tinkoff_public_invest_api_contract_v1_Brand)[];
  'paging'?: (_tinkoff_public_invest_api_contract_v1_PageResponse | null);
}

export interface GetBrandsResponse__Output {
  'brands': (_tinkoff_public_invest_api_contract_v1_Brand__Output)[];
  'paging': (_tinkoff_public_invest_api_contract_v1_PageResponse__Output | null);
}
