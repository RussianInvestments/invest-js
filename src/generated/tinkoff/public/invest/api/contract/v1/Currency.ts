// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus, SecurityTradingStatus__Output as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';
import type { RealExchange as _tinkoff_public_invest_api_contract_v1_RealExchange, RealExchange__Output as _tinkoff_public_invest_api_contract_v1_RealExchange__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/RealExchange';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { BrandData as _tinkoff_public_invest_api_contract_v1_BrandData, BrandData__Output as _tinkoff_public_invest_api_contract_v1_BrandData__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/BrandData';

export interface Currency {
  'figi'?: (string);
  'ticker'?: (string);
  'classCode'?: (string);
  'isin'?: (string);
  'lot'?: (number);
  'currency'?: (string);
  'klong'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'kshort'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dlong'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dshort'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dlongMin'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dshortMin'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'shortEnabledFlag'?: (boolean);
  'name'?: (string);
  'exchange'?: (string);
  'nominal'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'isoCurrencyName'?: (string);
  'minPriceIncrement'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'apiTradeAvailableFlag'?: (boolean);
  'uid'?: (string);
  'realExchange'?: (_tinkoff_public_invest_api_contract_v1_RealExchange);
  'positionUid'?: (string);
  'forIisFlag'?: (boolean);
  'forQualInvestorFlag'?: (boolean);
  'weekendFlag'?: (boolean);
  'blockedTcaFlag'?: (boolean);
  'first_1minCandleDate'?: (_google_protobuf_Timestamp | null);
  'first_1dayCandleDate'?: (_google_protobuf_Timestamp | null);
  'brand'?: (_tinkoff_public_invest_api_contract_v1_BrandData | null);
  'dlongClient'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'dshortClient'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface Currency__Output {
  'figi': (string);
  'ticker': (string);
  'classCode': (string);
  'isin': (string);
  'lot': (number);
  'currency': (string);
  'klong': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'kshort': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dlong': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dshort': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dlongMin': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dshortMin': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'shortEnabledFlag': (boolean);
  'name': (string);
  'exchange': (string);
  'nominal': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'tradingStatus': (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus__Output);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'isoCurrencyName': (string);
  'minPriceIncrement': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'apiTradeAvailableFlag': (boolean);
  'uid': (string);
  'realExchange': (_tinkoff_public_invest_api_contract_v1_RealExchange__Output);
  'positionUid': (string);
  'forIisFlag': (boolean);
  'forQualInvestorFlag': (boolean);
  'weekendFlag': (boolean);
  'blockedTcaFlag': (boolean);
  'first_1minCandleDate': (_google_protobuf_Timestamp__Output | null);
  'first_1dayCandleDate': (_google_protobuf_Timestamp__Output | null);
  'brand': (_tinkoff_public_invest_api_contract_v1_BrandData__Output | null);
  'dlongClient': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'dshortClient': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}
