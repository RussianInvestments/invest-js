// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

// Original file: investAPI/src/docs/contracts/instruments.proto

export enum _tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_AssetReportPeriodType {
  PERIOD_TYPE_UNSPECIFIED = 0,
  PERIOD_TYPE_QUARTER = 1,
  PERIOD_TYPE_SEMIANNUAL = 2,
  PERIOD_TYPE_ANNUAL = 3,
}

export interface _tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_GetAssetReportsEvent {
  'instrumentId'?: (string);
  'reportDate'?: (_google_protobuf_Timestamp | null);
  'periodYear'?: (number);
  'periodNum'?: (number);
  'periodType'?: (_tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_AssetReportPeriodType | keyof typeof _tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_AssetReportPeriodType);
  'createdAt'?: (_google_protobuf_Timestamp | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_GetAssetReportsEvent__Output {
  'instrumentId': (string);
  'reportDate': (_google_protobuf_Timestamp__Output | null);
  'periodYear': (number);
  'periodNum': (number);
  'periodType': (keyof typeof _tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_AssetReportPeriodType);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
}

export interface GetAssetReportsResponse {
  'events'?: (_tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_GetAssetReportsEvent)[];
}

export interface GetAssetReportsResponse__Output {
  'events': (_tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse_GetAssetReportsEvent__Output)[];
}
