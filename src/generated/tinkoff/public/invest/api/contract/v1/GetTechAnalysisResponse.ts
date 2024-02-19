// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface _tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse_TechAnalysisItem {
  'timestamp'?: (_google_protobuf_Timestamp | null);
  'middleBand'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'upperBand'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'lowerBand'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'signal'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'macd'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  '_middleBand'?: "middleBand";
  '_upperBand'?: "upperBand";
  '_lowerBand'?: "lowerBand";
  '_signal'?: "signal";
  '_macd'?: "macd";
}

export interface _tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse_TechAnalysisItem__Output {
  'timestamp': (_google_protobuf_Timestamp__Output | null);
  'middleBand'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'upperBand'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'lowerBand'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'signal'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'macd'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  '_middleBand': "middleBand";
  '_upperBand': "upperBand";
  '_lowerBand': "lowerBand";
  '_signal': "signal";
  '_macd': "macd";
}

export interface GetTechAnalysisResponse {
  'technicalIndicators'?: (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse_TechAnalysisItem)[];
}

export interface GetTechAnalysisResponse__Output {
  'technicalIndicators': (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse_TechAnalysisItem__Output)[];
}
