// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Recommendation as _tinkoff_public_invest_api_contract_v1_Recommendation } from '../../../../../../tinkoff/public/invest/api/contract/v1/Recommendation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface _tinkoff_public_invest_api_contract_v1_GetForecastResponse_ConsensusItem {
  'uid'?: (string);
  'ticker'?: (string);
  'recommendation'?: (_tinkoff_public_invest_api_contract_v1_Recommendation | keyof typeof _tinkoff_public_invest_api_contract_v1_Recommendation);
  'currency'?: (string);
  'currentPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'consensus'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'minTarget'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'maxTarget'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'priceChange'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'priceChangeRel'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetForecastResponse_ConsensusItem__Output {
  'uid': (string);
  'ticker': (string);
  'recommendation': (keyof typeof _tinkoff_public_invest_api_contract_v1_Recommendation);
  'currency': (string);
  'currentPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'consensus': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'minTarget': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'maxTarget': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'priceChange': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'priceChangeRel': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetForecastResponse_TargetItem {
  'uid'?: (string);
  'ticker'?: (string);
  'company'?: (string);
  'recommendation'?: (_tinkoff_public_invest_api_contract_v1_Recommendation | keyof typeof _tinkoff_public_invest_api_contract_v1_Recommendation);
  'recommendationDate'?: (_google_protobuf_Timestamp | null);
  'currency'?: (string);
  'currentPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'targetPrice'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'priceChange'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'priceChangeRel'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'showName'?: (string);
}

export interface _tinkoff_public_invest_api_contract_v1_GetForecastResponse_TargetItem__Output {
  'uid': (string);
  'ticker': (string);
  'company': (string);
  'recommendation': (keyof typeof _tinkoff_public_invest_api_contract_v1_Recommendation);
  'recommendationDate': (_google_protobuf_Timestamp__Output | null);
  'currency': (string);
  'currentPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'targetPrice': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'priceChange': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'priceChangeRel': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'showName': (string);
}

export interface GetForecastResponse {
  'targets'?: (_tinkoff_public_invest_api_contract_v1_GetForecastResponse_TargetItem)[];
  'consensus'?: (_tinkoff_public_invest_api_contract_v1_GetForecastResponse_ConsensusItem | null);
}

export interface GetForecastResponse__Output {
  'targets': (_tinkoff_public_invest_api_contract_v1_GetForecastResponse_TargetItem__Output)[];
  'consensus': (_tinkoff_public_invest_api_contract_v1_GetForecastResponse_ConsensusItem__Output | null);
}
