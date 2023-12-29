// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Page as _tinkoff_public_invest_api_contract_v1_Page, Page__Output as _tinkoff_public_invest_api_contract_v1_Page__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Page';

export interface GetConsensusForecastsRequest {
  'paging'?: (_tinkoff_public_invest_api_contract_v1_Page | null);
  '_paging'?: "paging";
}

export interface GetConsensusForecastsRequest__Output {
  'paging'?: (_tinkoff_public_invest_api_contract_v1_Page__Output | null);
  '_paging': "paging";
}
