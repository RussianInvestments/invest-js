// Original file: investAPI/src/docs/contracts/instruments.proto

import type { PageResponse as _tinkoff_public_invest_api_contract_v1_PageResponse, PageResponse__Output as _tinkoff_public_invest_api_contract_v1_PageResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PageResponse';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Recommendation as _tinkoff_public_invest_api_contract_v1_Recommendation, Recommendation__Output as _tinkoff_public_invest_api_contract_v1_Recommendation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Recommendation';

export interface _tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse_ConsensusForecastsItem {
  'uid'?: (string);
  'assetUid'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'bestTargetPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'bestTargetLow'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'bestTargetHigh'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'totalBuyRecommend'?: (number);
  'totalHoldRecommend'?: (number);
  'totalSellRecommend'?: (number);
  'currency'?: (string);
  'consensus'?: (_tinkoff_public_invest_api_contract_v1_Recommendation);
  'prognosisDate'?: (_google_protobuf_Timestamp | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse_ConsensusForecastsItem__Output {
  'uid': (string);
  'assetUid': (string);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'bestTargetPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'bestTargetLow': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'bestTargetHigh': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'totalBuyRecommend': (number);
  'totalHoldRecommend': (number);
  'totalSellRecommend': (number);
  'currency': (string);
  'consensus': (_tinkoff_public_invest_api_contract_v1_Recommendation__Output);
  'prognosisDate': (_google_protobuf_Timestamp__Output | null);
}

export interface GetConsensusForecastsResponse {
  'items'?: (_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse_ConsensusForecastsItem)[];
  'page'?: (_tinkoff_public_invest_api_contract_v1_PageResponse | null);
}

export interface GetConsensusForecastsResponse__Output {
  'items': (_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse_ConsensusForecastsItem__Output)[];
  'page': (_tinkoff_public_invest_api_contract_v1_PageResponse__Output | null);
}
