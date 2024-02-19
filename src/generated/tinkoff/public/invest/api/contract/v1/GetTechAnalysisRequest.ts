// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';

export interface _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Deviation {
  'deviationMultiplier'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Deviation__Output {
  'deviationMultiplier': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}

// Original file: investAPI/src/docs/contracts/marketdata.proto

export enum _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorInterval {
  INDICATOR_INTERVAL_UNSPECIFIED = 0,
  INDICATOR_INTERVAL_ONE_MINUTE = 1,
  INDICATOR_INTERVAL_FIVE_MINUTES = 2,
  INDICATOR_INTERVAL_FIFTEEN_MINUTES = 3,
  INDICATOR_INTERVAL_ONE_HOUR = 4,
  INDICATOR_INTERVAL_ONE_DAY = 5,
  INDICATOR_INTERVAL_2_MIN = 6,
  INDICATOR_INTERVAL_3_MIN = 7,
  INDICATOR_INTERVAL_10_MIN = 8,
  INDICATOR_INTERVAL_30_MIN = 9,
  INDICATOR_INTERVAL_2_HOUR = 10,
  INDICATOR_INTERVAL_4_HOUR = 11,
  INDICATOR_INTERVAL_WEEK = 12,
  INDICATOR_INTERVAL_MONTH = 13,
}

// Original file: investAPI/src/docs/contracts/marketdata.proto

export enum _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorType {
  INDICATOR_TYPE_UNSPECIFIED = 0,
  INDICATOR_TYPE_BB = 1,
  INDICATOR_TYPE_EMA = 2,
  INDICATOR_TYPE_RSI = 3,
  INDICATOR_TYPE_MACD = 4,
  INDICATOR_TYPE_SMA = 5,
}

export interface _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Smoothing {
  'fastLength'?: (number);
  'slowLength'?: (number);
  'signalSmoothing'?: (number);
}

export interface _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Smoothing__Output {
  'fastLength': (number);
  'slowLength': (number);
  'signalSmoothing': (number);
}

// Original file: investAPI/src/docs/contracts/marketdata.proto

export enum _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_TypeOfPrice {
  TYPE_OF_PRICE_UNSPECIFIED = 0,
  TYPE_OF_PRICE_CLOSE = 1,
  TYPE_OF_PRICE_OPEN = 2,
  TYPE_OF_PRICE_HIGH = 3,
  TYPE_OF_PRICE_LOW = 4,
  TYPE_OF_PRICE_AVG = 5,
}

export interface GetTechAnalysisRequest {
  'indicatorType'?: (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorType | keyof typeof _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorType);
  'instrumentUid'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'interval'?: (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorInterval | keyof typeof _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorInterval);
  'typeOfPrice'?: (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_TypeOfPrice | keyof typeof _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_TypeOfPrice);
  'length'?: (number);
  'deviation'?: (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Deviation | null);
  'smoothing'?: (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Smoothing | null);
}

export interface GetTechAnalysisRequest__Output {
  'indicatorType': (keyof typeof _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorType);
  'instrumentUid': (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
  'interval': (keyof typeof _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_IndicatorInterval);
  'typeOfPrice': (keyof typeof _tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_TypeOfPrice);
  'length': (number);
  'deviation': (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Deviation__Output | null);
  'smoothing': (_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest_Smoothing__Output | null);
}
