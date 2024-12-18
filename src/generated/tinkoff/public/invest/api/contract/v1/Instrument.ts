// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { SecurityTradingStatus as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus, SecurityTradingStatus__Output as _tinkoff_public_invest_api_contract_v1_SecurityTradingStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SecurityTradingStatus';
import type { RealExchange as _tinkoff_public_invest_api_contract_v1_RealExchange, RealExchange__Output as _tinkoff_public_invest_api_contract_v1_RealExchange__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/RealExchange';
import type { InstrumentType as _tinkoff_public_invest_api_contract_v1_InstrumentType, InstrumentType__Output as _tinkoff_public_invest_api_contract_v1_InstrumentType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InstrumentType';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { BrandData as _tinkoff_public_invest_api_contract_v1_BrandData, BrandData__Output as _tinkoff_public_invest_api_contract_v1_BrandData__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/BrandData';

export interface Instrument {
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
  'countryOfRisk'?: (string);
  'countryOfRiskName'?: (string);
  'instrumentType'?: (string);
  'tradingStatus'?: (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus);
  'otcFlag'?: (boolean);
  'buyAvailableFlag'?: (boolean);
  'sellAvailableFlag'?: (boolean);
  'minPriceIncrement'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'apiTradeAvailableFlag'?: (boolean);
  'uid'?: (string);
  'realExchange'?: (_tinkoff_public_invest_api_contract_v1_RealExchange);
  'positionUid'?: (string);
  'assetUid'?: (string);
  'forIisFlag'?: (boolean);
  'forQualInvestorFlag'?: (boolean);
  'weekendFlag'?: (boolean);
  'blockedTcaFlag'?: (boolean);
  'instrumentKind'?: (_tinkoff_public_invest_api_contract_v1_InstrumentType);
  'first_1minCandleDate'?: (_google_protobuf_Timestamp | null);
  'first_1dayCandleDate'?: (_google_protobuf_Timestamp | null);
  'brand'?: (_tinkoff_public_invest_api_contract_v1_BrandData | null);
}

export interface Instrument__Output {
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
  'countryOfRisk': (string);
  'countryOfRiskName': (string);
  'instrumentType': (string);
  'tradingStatus': (_tinkoff_public_invest_api_contract_v1_SecurityTradingStatus__Output);
  'otcFlag': (boolean);
  'buyAvailableFlag': (boolean);
  'sellAvailableFlag': (boolean);
  'minPriceIncrement': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'apiTradeAvailableFlag': (boolean);
  'uid': (string);
  'realExchange': (_tinkoff_public_invest_api_contract_v1_RealExchange__Output);
  'positionUid': (string);
  'assetUid': (string);
  'forIisFlag': (boolean);
  'forQualInvestorFlag': (boolean);
  'weekendFlag': (boolean);
  'blockedTcaFlag': (boolean);
  'instrumentKind': (_tinkoff_public_invest_api_contract_v1_InstrumentType__Output);
  'first_1minCandleDate': (_google_protobuf_Timestamp__Output | null);
  'first_1dayCandleDate': (_google_protobuf_Timestamp__Output | null);
  'brand': (_tinkoff_public_invest_api_contract_v1_BrandData__Output | null);
}
