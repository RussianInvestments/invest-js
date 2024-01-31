// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface _tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse_StatisticResponse {
  'assetUid'?: (string);
  'currency'?: (string);
  'marketCapitalization'?: (number | string);
  'highPriceLast_52Weeks'?: (number | string);
  'lowPriceLast_52Weeks'?: (number | string);
  'averageDailyVolumeLast_10Days'?: (number | string);
  'averageDailyVolumeLast_4Weeks'?: (number | string);
  'beta'?: (number | string);
  'freeFloat'?: (number | string);
  'forwardAnnualDividendYield'?: (number | string);
  'sharesOutstanding'?: (number | string);
  'revenueTtm'?: (number | string);
  'ebitdaTtm'?: (number | string);
  'netIncomeTtm'?: (number | string);
  'epsTtm'?: (number | string);
  'dilutedEpsTtm'?: (number | string);
  'freeCashFlowTtm'?: (number | string);
  'fiveYearAnnualRevenueGrowthRate'?: (number | string);
  'threeYearAnnualRevenueGrowthRate'?: (number | string);
  'peRatioTtm'?: (number | string);
  'priceToSalesTtm'?: (number | string);
  'priceToBookTtm'?: (number | string);
  'priceToFreeCashFlowTtm'?: (number | string);
  'totalEnterpriseValueMrq'?: (number | string);
  'evToEbitdaMrq'?: (number | string);
  'netMarginMrq'?: (number | string);
  'netInterestMarginMrq'?: (number | string);
  'roe'?: (number | string);
  'roa'?: (number | string);
  'roic'?: (number | string);
  'totalDebtMrq'?: (number | string);
  'totalDebtToEquityMrq'?: (number | string);
  'totalDebtToEbitdaMrq'?: (number | string);
  'freeCashFlowToPrice'?: (number | string);
  'netDebtToEbitda'?: (number | string);
  'currentRatioMrq'?: (number | string);
  'fixedChargeCoverageRatioFy'?: (number | string);
  'dividendYieldDailyTtm'?: (number | string);
  'dividendRateTtm'?: (number | string);
  'dividendsPerShare'?: (number | string);
  'fiveYearsAverageDividendYield'?: (number | string);
  'fiveYearAnnualDividendGrowthRate'?: (number | string);
  'dividendPayoutRatioFy'?: (number | string);
  'buyBackTtm'?: (number | string);
  'oneYearAnnualRevenueGrowthRate'?: (number | string);
  'domicileIndicatorCode'?: (string);
  'adrToCommonShareRatio'?: (number | string);
  'numberOfEmployees'?: (number | string);
  'exDividendDate'?: (_google_protobuf_Timestamp | null);
  'fiscalPeriodStartDate'?: (_google_protobuf_Timestamp | null);
  'fiscalPeriodEndDate'?: (_google_protobuf_Timestamp | null);
  'revenueChangeFiveYears'?: (number | string);
  'epsChangeFiveYears'?: (number | string);
  'ebitdaChangeFiveYears'?: (number | string);
  'totalDebtChangeFiveYears'?: (number | string);
  'evToSales'?: (number | string);
}

export interface _tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse_StatisticResponse__Output {
  'assetUid': (string);
  'currency': (string);
  'marketCapitalization': (number);
  'highPriceLast_52Weeks': (number);
  'lowPriceLast_52Weeks': (number);
  'averageDailyVolumeLast_10Days': (number);
  'averageDailyVolumeLast_4Weeks': (number);
  'beta': (number);
  'freeFloat': (number);
  'forwardAnnualDividendYield': (number);
  'sharesOutstanding': (number);
  'revenueTtm': (number);
  'ebitdaTtm': (number);
  'netIncomeTtm': (number);
  'epsTtm': (number);
  'dilutedEpsTtm': (number);
  'freeCashFlowTtm': (number);
  'fiveYearAnnualRevenueGrowthRate': (number);
  'threeYearAnnualRevenueGrowthRate': (number);
  'peRatioTtm': (number);
  'priceToSalesTtm': (number);
  'priceToBookTtm': (number);
  'priceToFreeCashFlowTtm': (number);
  'totalEnterpriseValueMrq': (number);
  'evToEbitdaMrq': (number);
  'netMarginMrq': (number);
  'netInterestMarginMrq': (number);
  'roe': (number);
  'roa': (number);
  'roic': (number);
  'totalDebtMrq': (number);
  'totalDebtToEquityMrq': (number);
  'totalDebtToEbitdaMrq': (number);
  'freeCashFlowToPrice': (number);
  'netDebtToEbitda': (number);
  'currentRatioMrq': (number);
  'fixedChargeCoverageRatioFy': (number);
  'dividendYieldDailyTtm': (number);
  'dividendRateTtm': (number);
  'dividendsPerShare': (number);
  'fiveYearsAverageDividendYield': (number);
  'fiveYearAnnualDividendGrowthRate': (number);
  'dividendPayoutRatioFy': (number);
  'buyBackTtm': (number);
  'oneYearAnnualRevenueGrowthRate': (number);
  'domicileIndicatorCode': (string);
  'adrToCommonShareRatio': (number);
  'numberOfEmployees': (number);
  'exDividendDate': (_google_protobuf_Timestamp__Output | null);
  'fiscalPeriodStartDate': (_google_protobuf_Timestamp__Output | null);
  'fiscalPeriodEndDate': (_google_protobuf_Timestamp__Output | null);
  'revenueChangeFiveYears': (number);
  'epsChangeFiveYears': (number);
  'ebitdaChangeFiveYears': (number);
  'totalDebtChangeFiveYears': (number);
  'evToSales': (number);
}

export interface GetAssetFundamentalsResponse {
  'fundamentals'?: (_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse_StatisticResponse)[];
}

export interface GetAssetFundamentalsResponse__Output {
  'fundamentals': (_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse_StatisticResponse__Output)[];
}
