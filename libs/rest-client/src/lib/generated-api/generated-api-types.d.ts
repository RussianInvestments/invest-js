/* eslint-disable */
export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type InstrumentsServiceBondByRequest = {
  'idType': 'INSTRUMENT_ID_UNSPECIFIED' | 'INSTRUMENT_ID_TYPE_FIGI' | 'INSTRUMENT_ID_TYPE_TICKER' | 'INSTRUMENT_ID_TYPE_UID' | 'INSTRUMENT_ID_TYPE_POSITION_UID';
  'classCode': string;
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceBondByResponseOK = { 'instrument'?: { 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'couponQuantityPerYear'?: number; 'maturityDate'?: string; 'nominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialNominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'stateRegDate'?: string; 'placementDate'?: string; 'placementPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'aciValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'issueKind'?: string; 'issueSize'?: string; 'issueSizePlan'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'floatingCouponFlag'?: boolean; 'perpetualFlag'?: boolean; 'amortizationFlag'?: boolean; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'subordinatedFlag'?: boolean; 'liquidityFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string; 'riskLevel'?: 'RISK_LEVEL_UNSPECIFIED' | 'RISK_LEVEL_LOW' | 'RISK_LEVEL_MODERATE' | 'RISK_LEVEL_HIGH' } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceBondBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceBondByResponses =
  InstrumentsServiceBondByResponseOK
  | InstrumentsServiceBondBydefaultResponse

export type InstrumentsServiceBondsRequest = {
  'instrumentStatus': 'INSTRUMENT_STATUS_UNSPECIFIED' | 'INSTRUMENT_STATUS_BASE' | 'INSTRUMENT_STATUS_ALL';
}

/**
 * A successful response.
 */
export type InstrumentsServiceBondsResponseOK = { 'instruments'?: Array<{ 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'couponQuantityPerYear'?: number; 'maturityDate'?: string; 'nominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialNominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'stateRegDate'?: string; 'placementDate'?: string; 'placementPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'aciValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'issueKind'?: string; 'issueSize'?: string; 'issueSizePlan'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'floatingCouponFlag'?: boolean; 'perpetualFlag'?: boolean; 'amortizationFlag'?: boolean; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'subordinatedFlag'?: boolean; 'liquidityFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string; 'riskLevel'?: 'RISK_LEVEL_UNSPECIFIED' | 'RISK_LEVEL_LOW' | 'RISK_LEVEL_MODERATE' | 'RISK_LEVEL_HIGH' }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceBondsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceBondsResponses =
  InstrumentsServiceBondsResponseOK
  | InstrumentsServiceBondsdefaultResponse

export type InstrumentsServiceCurrenciesRequest = {
  'instrumentStatus': 'INSTRUMENT_STATUS_UNSPECIFIED' | 'INSTRUMENT_STATUS_BASE' | 'INSTRUMENT_STATUS_ALL';
}

/**
 * A successful response.
 */
export type InstrumentsServiceCurrenciesResponseOK = { 'instruments'?: Array<{ 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'nominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'isoCurrencyName'?: string; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceCurrenciesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceCurrenciesResponses =
  InstrumentsServiceCurrenciesResponseOK
  | InstrumentsServiceCurrenciesdefaultResponse

export type InstrumentsServiceCurrencyByRequest = {
  'idType': 'INSTRUMENT_ID_UNSPECIFIED' | 'INSTRUMENT_ID_TYPE_FIGI' | 'INSTRUMENT_ID_TYPE_TICKER' | 'INSTRUMENT_ID_TYPE_UID' | 'INSTRUMENT_ID_TYPE_POSITION_UID';
  'classCode': string;
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceCurrencyByResponseOK = { 'instrument'?: { 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'nominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'isoCurrencyName'?: string; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceCurrencyBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceCurrencyByResponses =
  InstrumentsServiceCurrencyByResponseOK
  | InstrumentsServiceCurrencyBydefaultResponse

export type InstrumentsServiceEditFavoritesRequest = {
  'instruments': Array<{ 'figi'?: string }>;
  'actionType': 'EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED' | 'EDIT_FAVORITES_ACTION_TYPE_ADD' | 'EDIT_FAVORITES_ACTION_TYPE_DEL';
}

/**
 * A successful response.
 */
export type InstrumentsServiceEditFavoritesResponseOK = { 'favoriteInstruments'?: Array<{ 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'instrumentType'?: string; 'otcFlag'?: boolean; 'apiTradeAvailableFlag'?: boolean; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE' }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceEditFavoritesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceEditFavoritesResponses =
  InstrumentsServiceEditFavoritesResponseOK
  | InstrumentsServiceEditFavoritesdefaultResponse

export type InstrumentsServiceEtfByRequest = {
  'idType': 'INSTRUMENT_ID_UNSPECIFIED' | 'INSTRUMENT_ID_TYPE_FIGI' | 'INSTRUMENT_ID_TYPE_TICKER' | 'INSTRUMENT_ID_TYPE_UID' | 'INSTRUMENT_ID_TYPE_POSITION_UID';
  'classCode': string;
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceEtfByResponseOK = { 'instrument'?: { 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'fixedCommission'?: { 'units'?: string; 'nano'?: number }; 'focusType'?: string; 'releasedDate'?: string; 'numShares'?: { 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'rebalancingFreq'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'liquidityFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceEtfBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceEtfByResponses =
  InstrumentsServiceEtfByResponseOK
  | InstrumentsServiceEtfBydefaultResponse

export type InstrumentsServiceEtfsRequest = {
  'instrumentStatus': 'INSTRUMENT_STATUS_UNSPECIFIED' | 'INSTRUMENT_STATUS_BASE' | 'INSTRUMENT_STATUS_ALL';
}

/**
 * A successful response.
 */
export type InstrumentsServiceEtfsResponseOK = { 'instruments'?: Array<{ 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'fixedCommission'?: { 'units'?: string; 'nano'?: number }; 'focusType'?: string; 'releasedDate'?: string; 'numShares'?: { 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'rebalancingFreq'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'liquidityFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceEtfsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceEtfsResponses =
  InstrumentsServiceEtfsResponseOK
  | InstrumentsServiceEtfsdefaultResponse

export type InstrumentsServiceFindInstrumentRequest = {
  'query': string;
  'instrumentKind': 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE';
  'apiTradeAvailableFlag': boolean;
}

/**
 * A successful response.
 */
export type InstrumentsServiceFindInstrumentResponseOK = { 'instruments'?: Array<{ 'isin'?: string; 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'instrumentType'?: string; 'name'?: string; 'uid'?: string; 'positionUid'?: string; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE'; 'apiTradeAvailableFlag'?: boolean; 'forIisFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceFindInstrumentdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceFindInstrumentResponses =
  InstrumentsServiceFindInstrumentResponseOK
  | InstrumentsServiceFindInstrumentdefaultResponse

export type InstrumentsServiceFutureByRequest = {
  'idType': 'INSTRUMENT_ID_UNSPECIFIED' | 'INSTRUMENT_ID_TYPE_FIGI' | 'INSTRUMENT_ID_TYPE_TICKER' | 'INSTRUMENT_ID_TYPE_UID' | 'INSTRUMENT_ID_TYPE_POSITION_UID';
  'classCode': string;
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceFutureByResponseOK = { 'instrument'?: { 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'firstTradeDate'?: string; 'lastTradeDate'?: string; 'futuresType'?: string; 'assetType'?: string; 'basicAsset'?: string; 'basicAssetSize'?: { 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'expirationDate'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'basicAssetPositionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceFutureBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceFutureByResponses =
  InstrumentsServiceFutureByResponseOK
  | InstrumentsServiceFutureBydefaultResponse

export type InstrumentsServiceFuturesRequest = {
  'instrumentStatus': 'INSTRUMENT_STATUS_UNSPECIFIED' | 'INSTRUMENT_STATUS_BASE' | 'INSTRUMENT_STATUS_ALL';
}

/**
 * A successful response.
 */
export type InstrumentsServiceFuturesResponseOK = { 'instruments'?: Array<{ 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'firstTradeDate'?: string; 'lastTradeDate'?: string; 'futuresType'?: string; 'assetType'?: string; 'basicAsset'?: string; 'basicAssetSize'?: { 'units'?: string; 'nano'?: number }; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'expirationDate'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'basicAssetPositionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceFuturesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceFuturesResponses =
  InstrumentsServiceFuturesResponseOK
  | InstrumentsServiceFuturesdefaultResponse

export type InstrumentsServiceGetAccruedInterestsRequest = {
  'figi': string;
  'from': string | Date;
  'to': string | Date;
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetAccruedInterestsResponseOK = { 'accruedInterests'?: Array<{ 'date'?: string; 'value'?: { 'units'?: string; 'nano'?: number }; 'valuePercent'?: { 'units'?: string; 'nano'?: number }; 'nominal'?: { 'units'?: string; 'nano'?: number } }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetAccruedInterestsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetAccruedInterestsResponses =
  InstrumentsServiceGetAccruedInterestsResponseOK
  | InstrumentsServiceGetAccruedInterestsdefaultResponse

export type InstrumentsServiceGetAssetByRequest = {
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetAssetByResponseOK = { 'asset'?: { 'uid'?: string; 'type'?: 'ASSET_TYPE_UNSPECIFIED' | 'ASSET_TYPE_CURRENCY' | 'ASSET_TYPE_COMMODITY' | 'ASSET_TYPE_INDEX' | 'ASSET_TYPE_SECURITY'; 'name'?: string; 'nameBrief'?: string; 'description'?: string; 'deletedAt'?: string; 'requiredTests'?: Array<string>; 'currency'?: { 'baseCurrency'?: string }; 'security'?: { 'isin'?: string; 'type'?: string; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE'; 'share'?: { 'type'?: 'SHARE_TYPE_UNSPECIFIED' | 'SHARE_TYPE_COMMON' | 'SHARE_TYPE_PREFERRED' | 'SHARE_TYPE_ADR' | 'SHARE_TYPE_GDR' | 'SHARE_TYPE_MLP' | 'SHARE_TYPE_NY_REG_SHRS' | 'SHARE_TYPE_CLOSED_END_FUND' | 'SHARE_TYPE_REIT'; 'issueSize'?: { 'units'?: string; 'nano'?: number }; 'nominal'?: { 'units'?: string; 'nano'?: number }; 'nominalCurrency'?: string; 'primaryIndex'?: string; 'dividendRate'?: { 'units'?: string; 'nano'?: number }; 'preferredShareType'?: string; 'ipoDate'?: string; 'registryDate'?: string; 'divYieldFlag'?: boolean; 'issueKind'?: string; 'placementDate'?: string; 'represIsin'?: string; 'issueSizePlan'?: { 'units'?: string; 'nano'?: number }; 'totalFloat'?: { 'units'?: string; 'nano'?: number } }; 'bond'?: { 'currentNominal'?: { 'units'?: string; 'nano'?: number }; 'borrowName'?: string; 'issueSize'?: { 'units'?: string; 'nano'?: number }; 'nominal'?: { 'units'?: string; 'nano'?: number }; 'nominalCurrency'?: string; 'issueKind'?: string; 'interestKind'?: string; 'couponQuantityPerYear'?: number; 'indexedNominalFlag'?: boolean; 'subordinatedFlag'?: boolean; 'collateralFlag'?: boolean; 'taxFreeFlag'?: boolean; 'amortizationFlag'?: boolean; 'floatingCouponFlag'?: boolean; 'perpetualFlag'?: boolean; 'maturityDate'?: string; 'returnCondition'?: string; 'stateRegDate'?: string; 'placementDate'?: string; 'placementPrice'?: { 'units'?: string; 'nano'?: number }; 'issueSizePlan'?: { 'units'?: string; 'nano'?: number } }; 'sp'?: { 'borrowName'?: string; 'nominal'?: { 'units'?: string; 'nano'?: number }; 'nominalCurrency'?: string; 'type'?: 'SP_TYPE_UNSPECIFIED' | 'SP_TYPE_DELIVERABLE' | 'SP_TYPE_NON_DELIVERABLE'; 'logicPortfolio'?: string; 'assetType'?: 'ASSET_TYPE_UNSPECIFIED' | 'ASSET_TYPE_CURRENCY' | 'ASSET_TYPE_COMMODITY' | 'ASSET_TYPE_INDEX' | 'ASSET_TYPE_SECURITY'; 'basicAsset'?: string; 'safetyBarrier'?: { 'units'?: string; 'nano'?: number }; 'maturityDate'?: string; 'issueSizePlan'?: { 'units'?: string; 'nano'?: number }; 'issueSize'?: { 'units'?: string; 'nano'?: number }; 'placementDate'?: string; 'issueKind'?: string }; 'etf'?: { 'totalExpense'?: { 'units'?: string; 'nano'?: number }; 'hurdleRate'?: { 'units'?: string; 'nano'?: number }; 'performanceFee'?: { 'units'?: string; 'nano'?: number }; 'fixedCommission'?: { 'units'?: string; 'nano'?: number }; 'paymentType'?: string; 'watermarkFlag'?: boolean; 'buyPremium'?: { 'units'?: string; 'nano'?: number }; 'sellDiscount'?: { 'units'?: string; 'nano'?: number }; 'rebalancingFlag'?: boolean; 'rebalancingFreq'?: string; 'managementType'?: string; 'primaryIndex'?: string; 'focusType'?: string; 'leveragedFlag'?: boolean; 'numShare'?: { 'units'?: string; 'nano'?: number }; 'ucitsFlag'?: boolean; 'releasedDate'?: string; 'description'?: string; 'primaryIndexDescription'?: string; 'primaryIndexCompany'?: string; 'indexRecoveryPeriod'?: { 'units'?: string; 'nano'?: number }; 'inavCode'?: string; 'divYieldFlag'?: boolean; 'expenseCommission'?: { 'units'?: string; 'nano'?: number }; 'primaryIndexTrackingError'?: { 'units'?: string; 'nano'?: number }; 'rebalancingPlan'?: string; 'taxRate'?: string; 'rebalancingDates'?: Array<string>; 'issueKind'?: string; 'nominal'?: { 'units'?: string; 'nano'?: number }; 'nominalCurrency'?: string }; 'clearingCertificate'?: { 'nominal'?: { 'units'?: string; 'nano'?: number }; 'nominalCurrency'?: string } }; 'gosRegCode'?: string; 'cfi'?: string; 'codeNsd'?: string; 'status'?: string; 'brand'?: { 'uid'?: string; 'name'?: string; 'description'?: string; 'info'?: string; 'company'?: string; 'sector'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string }; 'updatedAt'?: string; 'brCode'?: string; 'brCodeName'?: string; 'instruments'?: Array<{ 'uid'?: string; 'figi'?: string; 'instrumentType'?: string; 'ticker'?: string; 'classCode'?: string; 'links'?: Array<{ 'type'?: string; 'instrumentUid'?: string }>; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE'; 'positionUid'?: string }> } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetAssetBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetAssetByResponses =
  InstrumentsServiceGetAssetByResponseOK
  | InstrumentsServiceGetAssetBydefaultResponse

export type InstrumentsServiceGetAssetsRequest = {
  'instrumentType': 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE';
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetAssetsResponseOK = { 'assets'?: Array<{ 'uid'?: string; 'type'?: 'ASSET_TYPE_UNSPECIFIED' | 'ASSET_TYPE_CURRENCY' | 'ASSET_TYPE_COMMODITY' | 'ASSET_TYPE_INDEX' | 'ASSET_TYPE_SECURITY'; 'name'?: string; 'instruments'?: Array<{ 'uid'?: string; 'figi'?: string; 'instrumentType'?: string; 'ticker'?: string; 'classCode'?: string; 'links'?: Array<{ 'type'?: string; 'instrumentUid'?: string }>; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE'; 'positionUid'?: string }> }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetAssetsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetAssetsResponses =
  InstrumentsServiceGetAssetsResponseOK
  | InstrumentsServiceGetAssetsdefaultResponse

export type InstrumentsServiceGetBondCouponsRequest = {
  'figi': string;
  'from': string | Date;
  'to': string | Date;
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetBondCouponsResponseOK = { 'events'?: Array<{ 'figi'?: string; 'couponDate'?: string; 'couponNumber'?: string; 'fixDate'?: string; 'payOneBond'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'couponType'?: 'COUPON_TYPE_UNSPECIFIED' | 'COUPON_TYPE_CONSTANT' | 'COUPON_TYPE_FLOATING' | 'COUPON_TYPE_DISCOUNT' | 'COUPON_TYPE_MORTGAGE' | 'COUPON_TYPE_FIX' | 'COUPON_TYPE_VARIABLE' | 'COUPON_TYPE_OTHER'; 'couponStartDate'?: string; 'couponEndDate'?: string; 'couponPeriod'?: number }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetBondCouponsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetBondCouponsResponses =
  InstrumentsServiceGetBondCouponsResponseOK
  | InstrumentsServiceGetBondCouponsdefaultResponse

export type InstrumentsServiceGetBrandByRequest = {
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetBrandByResponseOK = { 'uid'?: string; 'name'?: string; 'description'?: string; 'info'?: string; 'company'?: string; 'sector'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetBrandBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetBrandByResponses =
  InstrumentsServiceGetBrandByResponseOK
  | InstrumentsServiceGetBrandBydefaultResponse

export type InstrumentsServiceGetBrandsRequest = {
  
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetBrandsResponseOK = { 'brands'?: Array<{ 'uid'?: string; 'name'?: string; 'description'?: string; 'info'?: string; 'company'?: string; 'sector'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetBrandsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetBrandsResponses =
  InstrumentsServiceGetBrandsResponseOK
  | InstrumentsServiceGetBrandsdefaultResponse

export type InstrumentsServiceGetCountriesRequest = {
  
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetCountriesResponseOK = { 'countries'?: Array<{ 'alfaTwo'?: string; 'alfaThree'?: string; 'name'?: string; 'nameBrief'?: string }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetCountriesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetCountriesResponses =
  InstrumentsServiceGetCountriesResponseOK
  | InstrumentsServiceGetCountriesdefaultResponse

export type InstrumentsServiceGetDividendsRequest = {
  'figi': string;
  'from': string | Date;
  'to': string | Date;
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetDividendsResponseOK = { 'dividends'?: Array<{ 'dividendNet'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'paymentDate'?: string; 'declaredDate'?: string; 'lastBuyDate'?: string; 'dividendType'?: string; 'recordDate'?: string; 'regularity'?: string; 'closePrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yieldValue'?: { 'units'?: string; 'nano'?: number }; 'createdAt'?: string }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetDividendsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetDividendsResponses =
  InstrumentsServiceGetDividendsResponseOK
  | InstrumentsServiceGetDividendsdefaultResponse

export type InstrumentsServiceGetFavoritesRequest = {
  
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetFavoritesResponseOK = { 'favoriteInstruments'?: Array<{ 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'instrumentType'?: string; 'otcFlag'?: boolean; 'apiTradeAvailableFlag'?: boolean; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE' }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetFavoritesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetFavoritesResponses =
  InstrumentsServiceGetFavoritesResponseOK
  | InstrumentsServiceGetFavoritesdefaultResponse

export type InstrumentsServiceGetFuturesMarginRequest = {
  'figi': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetFuturesMarginResponseOK = { 'initialMarginOnBuy'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialMarginOnSell'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'minPriceIncrementAmount'?: { 'units'?: string; 'nano'?: number } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetFuturesMargindefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetFuturesMarginResponses =
  InstrumentsServiceGetFuturesMarginResponseOK
  | InstrumentsServiceGetFuturesMargindefaultResponse

export type InstrumentsServiceGetInstrumentByRequest = {
  'idType': 'INSTRUMENT_ID_UNSPECIFIED' | 'INSTRUMENT_ID_TYPE_FIGI' | 'INSTRUMENT_ID_TYPE_TICKER' | 'INSTRUMENT_ID_TYPE_UID' | 'INSTRUMENT_ID_TYPE_POSITION_UID';
  'classCode': string;
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceGetInstrumentByResponseOK = { 'instrument'?: { 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'instrumentType'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE'; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceGetInstrumentBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceGetInstrumentByResponses =
  InstrumentsServiceGetInstrumentByResponseOK
  | InstrumentsServiceGetInstrumentBydefaultResponse

export type InstrumentsServiceOptionByRequest = {
  'idType': 'INSTRUMENT_ID_UNSPECIFIED' | 'INSTRUMENT_ID_TYPE_FIGI' | 'INSTRUMENT_ID_TYPE_TICKER' | 'INSTRUMENT_ID_TYPE_UID' | 'INSTRUMENT_ID_TYPE_POSITION_UID';
  'classCode': string;
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceOptionByResponseOK = { 'instrument'?: { 'uid'?: string; 'positionUid'?: string; 'ticker'?: string; 'classCode'?: string; 'basicAssetPositionUid'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'direction'?: 'OPTION_DIRECTION_UNSPECIFIED' | 'OPTION_DIRECTION_PUT' | 'OPTION_DIRECTION_CALL'; 'paymentType'?: 'OPTION_PAYMENT_TYPE_UNSPECIFIED' | 'OPTION_PAYMENT_TYPE_PREMIUM' | 'OPTION_PAYMENT_TYPE_MARGINAL'; 'style'?: 'OPTION_STYLE_UNSPECIFIED' | 'OPTION_STYLE_AMERICAN' | 'OPTION_STYLE_EUROPEAN'; 'settlementType'?: 'OPTION_EXECUTION_TYPE_UNSPECIFIED' | 'OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY' | 'OPTION_EXECUTION_TYPE_CASH_SETTLEMENT'; 'name'?: string; 'currency'?: string; 'settlementCurrency'?: string; 'assetType'?: string; 'basicAsset'?: string; 'exchange'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'lot'?: number; 'basicAssetSize'?: { 'units'?: string; 'nano'?: number }; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'strikePrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expirationDate'?: string; 'firstTradeDate'?: string; 'lastTradeDate'?: string; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string; 'shortEnabledFlag'?: boolean; 'forIisFlag'?: boolean; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'apiTradeAvailableFlag'?: boolean } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceOptionBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceOptionByResponses =
  InstrumentsServiceOptionByResponseOK
  | InstrumentsServiceOptionBydefaultResponse

export type InstrumentsServiceOptionsRequest = {
  'instrumentStatus': 'INSTRUMENT_STATUS_UNSPECIFIED' | 'INSTRUMENT_STATUS_BASE' | 'INSTRUMENT_STATUS_ALL';
}

/**
 * A successful response.
 */
export type InstrumentsServiceOptionsResponseOK = { 'instruments'?: Array<{ 'uid'?: string; 'positionUid'?: string; 'ticker'?: string; 'classCode'?: string; 'basicAssetPositionUid'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'direction'?: 'OPTION_DIRECTION_UNSPECIFIED' | 'OPTION_DIRECTION_PUT' | 'OPTION_DIRECTION_CALL'; 'paymentType'?: 'OPTION_PAYMENT_TYPE_UNSPECIFIED' | 'OPTION_PAYMENT_TYPE_PREMIUM' | 'OPTION_PAYMENT_TYPE_MARGINAL'; 'style'?: 'OPTION_STYLE_UNSPECIFIED' | 'OPTION_STYLE_AMERICAN' | 'OPTION_STYLE_EUROPEAN'; 'settlementType'?: 'OPTION_EXECUTION_TYPE_UNSPECIFIED' | 'OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY' | 'OPTION_EXECUTION_TYPE_CASH_SETTLEMENT'; 'name'?: string; 'currency'?: string; 'settlementCurrency'?: string; 'assetType'?: string; 'basicAsset'?: string; 'exchange'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'lot'?: number; 'basicAssetSize'?: { 'units'?: string; 'nano'?: number }; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'strikePrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expirationDate'?: string; 'firstTradeDate'?: string; 'lastTradeDate'?: string; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string; 'shortEnabledFlag'?: boolean; 'forIisFlag'?: boolean; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'apiTradeAvailableFlag'?: boolean }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceOptionsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceOptionsResponses =
  InstrumentsServiceOptionsResponseOK
  | InstrumentsServiceOptionsdefaultResponse

export type InstrumentsServiceOptionsByRequest = {
  'basicAssetUid': string;
  'basicAssetPositionUid': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceOptionsByResponseOK = { 'instruments'?: Array<{ 'uid'?: string; 'positionUid'?: string; 'ticker'?: string; 'classCode'?: string; 'basicAssetPositionUid'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'direction'?: 'OPTION_DIRECTION_UNSPECIFIED' | 'OPTION_DIRECTION_PUT' | 'OPTION_DIRECTION_CALL'; 'paymentType'?: 'OPTION_PAYMENT_TYPE_UNSPECIFIED' | 'OPTION_PAYMENT_TYPE_PREMIUM' | 'OPTION_PAYMENT_TYPE_MARGINAL'; 'style'?: 'OPTION_STYLE_UNSPECIFIED' | 'OPTION_STYLE_AMERICAN' | 'OPTION_STYLE_EUROPEAN'; 'settlementType'?: 'OPTION_EXECUTION_TYPE_UNSPECIFIED' | 'OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY' | 'OPTION_EXECUTION_TYPE_CASH_SETTLEMENT'; 'name'?: string; 'currency'?: string; 'settlementCurrency'?: string; 'assetType'?: string; 'basicAsset'?: string; 'exchange'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'lot'?: number; 'basicAssetSize'?: { 'units'?: string; 'nano'?: number }; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'strikePrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expirationDate'?: string; 'firstTradeDate'?: string; 'lastTradeDate'?: string; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string; 'shortEnabledFlag'?: boolean; 'forIisFlag'?: boolean; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'apiTradeAvailableFlag'?: boolean }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceOptionsBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceOptionsByResponses =
  InstrumentsServiceOptionsByResponseOK
  | InstrumentsServiceOptionsBydefaultResponse

export type InstrumentsServiceShareByRequest = {
  'idType': 'INSTRUMENT_ID_UNSPECIFIED' | 'INSTRUMENT_ID_TYPE_FIGI' | 'INSTRUMENT_ID_TYPE_TICKER' | 'INSTRUMENT_ID_TYPE_UID' | 'INSTRUMENT_ID_TYPE_POSITION_UID';
  'classCode': string;
  'id': string;
}

/**
 * A successful response.
 */
export type InstrumentsServiceShareByResponseOK = { 'instrument'?: { 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'ipoDate'?: string; 'issueSize'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'issueSizePlan'?: string; 'nominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'divYieldFlag'?: boolean; 'shareType'?: 'SHARE_TYPE_UNSPECIFIED' | 'SHARE_TYPE_COMMON' | 'SHARE_TYPE_PREFERRED' | 'SHARE_TYPE_ADR' | 'SHARE_TYPE_GDR' | 'SHARE_TYPE_MLP' | 'SHARE_TYPE_NY_REG_SHRS' | 'SHARE_TYPE_CLOSED_END_FUND' | 'SHARE_TYPE_REIT'; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'liquidityFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string } }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceShareBydefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceShareByResponses =
  InstrumentsServiceShareByResponseOK
  | InstrumentsServiceShareBydefaultResponse

export type InstrumentsServiceSharesRequest = {
  'instrumentStatus': 'INSTRUMENT_STATUS_UNSPECIFIED' | 'INSTRUMENT_STATUS_BASE' | 'INSTRUMENT_STATUS_ALL';
}

/**
 * A successful response.
 */
export type InstrumentsServiceSharesResponseOK = { 'instruments'?: Array<{ 'figi'?: string; 'ticker'?: string; 'classCode'?: string; 'isin'?: string; 'lot'?: number; 'currency'?: string; 'klong'?: { 'units'?: string; 'nano'?: number }; 'kshort'?: { 'units'?: string; 'nano'?: number }; 'dlong'?: { 'units'?: string; 'nano'?: number }; 'dshort'?: { 'units'?: string; 'nano'?: number }; 'dlongMin'?: { 'units'?: string; 'nano'?: number }; 'dshortMin'?: { 'units'?: string; 'nano'?: number }; 'shortEnabledFlag'?: boolean; 'name'?: string; 'exchange'?: string; 'ipoDate'?: string; 'issueSize'?: string; 'countryOfRisk'?: string; 'countryOfRiskName'?: string; 'sector'?: string; 'issueSizePlan'?: string; 'nominal'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'otcFlag'?: boolean; 'buyAvailableFlag'?: boolean; 'sellAvailableFlag'?: boolean; 'divYieldFlag'?: boolean; 'shareType'?: 'SHARE_TYPE_UNSPECIFIED' | 'SHARE_TYPE_COMMON' | 'SHARE_TYPE_PREFERRED' | 'SHARE_TYPE_ADR' | 'SHARE_TYPE_GDR' | 'SHARE_TYPE_MLP' | 'SHARE_TYPE_NY_REG_SHRS' | 'SHARE_TYPE_CLOSED_END_FUND' | 'SHARE_TYPE_REIT'; 'minPriceIncrement'?: { 'units'?: string; 'nano'?: number }; 'apiTradeAvailableFlag'?: boolean; 'uid'?: string; 'realExchange'?: 'REAL_EXCHANGE_UNSPECIFIED' | 'REAL_EXCHANGE_MOEX' | 'REAL_EXCHANGE_RTS' | 'REAL_EXCHANGE_OTC'; 'positionUid'?: string; 'forIisFlag'?: boolean; 'forQualInvestorFlag'?: boolean; 'weekendFlag'?: boolean; 'blockedTcaFlag'?: boolean; 'liquidityFlag'?: boolean; 'first1minCandleDate'?: string; 'first1dayCandleDate'?: string }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceSharesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceSharesResponses =
  InstrumentsServiceSharesResponseOK
  | InstrumentsServiceSharesdefaultResponse

export type InstrumentsServiceTradingSchedulesRequest = {
  'exchange': string;
  'from': string | Date;
  'to': string | Date;
}

/**
 * A successful response.
 */
export type InstrumentsServiceTradingSchedulesResponseOK = { 'exchanges'?: Array<{ 'exchange'?: string; 'days'?: Array<{ 'date'?: string; 'isTradingDay'?: boolean; 'startTime'?: string; 'endTime'?: string; 'openingAuctionStartTime'?: string; 'closingAuctionEndTime'?: string; 'eveningOpeningAuctionStartTime'?: string; 'eveningStartTime'?: string; 'eveningEndTime'?: string; 'clearingStartTime'?: string; 'clearingEndTime'?: string; 'premarketStartTime'?: string; 'premarketEndTime'?: string; 'closingAuctionStartTime'?: string; 'openingAuctionEndTime'?: string }> }> }
/**
 * An unexpected error response.
 */
export type InstrumentsServiceTradingSchedulesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type InstrumentsServiceTradingSchedulesResponses =
  InstrumentsServiceTradingSchedulesResponseOK
  | InstrumentsServiceTradingSchedulesdefaultResponse

export type MarketDataServiceGetCandlesRequest = {
  'figi': string;
  'from': string | Date;
  'to': string | Date;
  'interval': 'CANDLE_INTERVAL_UNSPECIFIED' | 'CANDLE_INTERVAL_1_MIN' | 'CANDLE_INTERVAL_5_MIN' | 'CANDLE_INTERVAL_15_MIN' | 'CANDLE_INTERVAL_HOUR' | 'CANDLE_INTERVAL_DAY' | 'CANDLE_INTERVAL_2_MIN' | 'CANDLE_INTERVAL_3_MIN' | 'CANDLE_INTERVAL_10_MIN' | 'CANDLE_INTERVAL_30_MIN' | 'CANDLE_INTERVAL_2_HOUR' | 'CANDLE_INTERVAL_4_HOUR' | 'CANDLE_INTERVAL_WEEK' | 'CANDLE_INTERVAL_MONTH';
  'instrumentId': string;
}

/**
 * A successful response.
 */
export type MarketDataServiceGetCandlesResponseOK = { 'candles'?: Array<{ 'open'?: { 'units'?: string; 'nano'?: number }; 'high'?: { 'units'?: string; 'nano'?: number }; 'low'?: { 'units'?: string; 'nano'?: number }; 'close'?: { 'units'?: string; 'nano'?: number }; 'volume'?: string; 'time'?: string; 'isComplete'?: boolean }> }
/**
 * An unexpected error response.
 */
export type MarketDataServiceGetCandlesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataServiceGetCandlesResponses =
  MarketDataServiceGetCandlesResponseOK
  | MarketDataServiceGetCandlesdefaultResponse

export type MarketDataServiceGetClosePricesRequest = {
  'instruments': Array<{ 'instrumentId'?: string }>;
}

/**
 * A successful response.
 */
export type MarketDataServiceGetClosePricesResponseOK = { 'closePrices'?: Array<{ 'figi'?: string; 'instrumentUid'?: string; 'price'?: { 'units'?: string; 'nano'?: number }; 'time'?: string }> }
/**
 * An unexpected error response.
 */
export type MarketDataServiceGetClosePricesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataServiceGetClosePricesResponses =
  MarketDataServiceGetClosePricesResponseOK
  | MarketDataServiceGetClosePricesdefaultResponse

export type MarketDataServiceGetLastPricesRequest = {
  'figi': Array<string>;
  'instrumentId': Array<string>;
}

/**
 * A successful response.
 */
export type MarketDataServiceGetLastPricesResponseOK = { 'lastPrices'?: Array<{ 'figi'?: string; 'price'?: { 'units'?: string; 'nano'?: number }; 'time'?: string; 'instrumentUid'?: string }> }
/**
 * An unexpected error response.
 */
export type MarketDataServiceGetLastPricesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataServiceGetLastPricesResponses =
  MarketDataServiceGetLastPricesResponseOK
  | MarketDataServiceGetLastPricesdefaultResponse

export type MarketDataServiceGetLastTradesRequest = {
  'figi': string;
  'from': string | Date;
  'to': string | Date;
  'instrumentId': string;
}

/**
 * A successful response.
 */
export type MarketDataServiceGetLastTradesResponseOK = { 'trades'?: Array<{ 'figi'?: string; 'direction'?: 'TRADE_DIRECTION_UNSPECIFIED' | 'TRADE_DIRECTION_BUY' | 'TRADE_DIRECTION_SELL'; 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'time'?: string; 'instrumentUid'?: string }> }
/**
 * An unexpected error response.
 */
export type MarketDataServiceGetLastTradesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataServiceGetLastTradesResponses =
  MarketDataServiceGetLastTradesResponseOK
  | MarketDataServiceGetLastTradesdefaultResponse

export type MarketDataServiceGetOrderBookRequest = {
  'figi': string;
  'depth': number;
  'instrumentId': string;
}

/**
 * A successful response.
 */
export type MarketDataServiceGetOrderBookResponseOK = { 'figi'?: string; 'depth'?: number; 'bids'?: Array<{ 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string }>; 'asks'?: Array<{ 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string }>; 'lastPrice'?: { 'units'?: string; 'nano'?: number }; 'closePrice'?: { 'units'?: string; 'nano'?: number }; 'limitUp'?: { 'units'?: string; 'nano'?: number }; 'limitDown'?: { 'units'?: string; 'nano'?: number }; 'lastPriceTs'?: string; 'closePriceTs'?: string; 'orderbookTs'?: string; 'instrumentUid'?: string }
/**
 * An unexpected error response.
 */
export type MarketDataServiceGetOrderBookdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataServiceGetOrderBookResponses =
  MarketDataServiceGetOrderBookResponseOK
  | MarketDataServiceGetOrderBookdefaultResponse

export type MarketDataServiceGetTradingStatusRequest = {
  'figi': string;
  'instrumentId': string;
}

/**
 * A successful response.
 */
export type MarketDataServiceGetTradingStatusResponseOK = { 'figi'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'limitOrderAvailableFlag'?: boolean; 'marketOrderAvailableFlag'?: boolean; 'apiTradeAvailableFlag'?: boolean; 'instrumentUid'?: string }
/**
 * An unexpected error response.
 */
export type MarketDataServiceGetTradingStatusdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataServiceGetTradingStatusResponses =
  MarketDataServiceGetTradingStatusResponseOK
  | MarketDataServiceGetTradingStatusdefaultResponse

export type MarketDataServiceGetTradingStatusesRequest = {
  'instrumentId': Array<string>;
}

/**
 * A successful response.
 */
export type MarketDataServiceGetTradingStatusesResponseOK = { 'tradingStatuses'?: Array<{ 'figi'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'limitOrderAvailableFlag'?: boolean; 'marketOrderAvailableFlag'?: boolean; 'apiTradeAvailableFlag'?: boolean; 'instrumentUid'?: string }> }
/**
 * An unexpected error response.
 */
export type MarketDataServiceGetTradingStatusesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataServiceGetTradingStatusesResponses =
  MarketDataServiceGetTradingStatusesResponseOK
  | MarketDataServiceGetTradingStatusesdefaultResponse

export type MarketDataStreamServiceMarketDataServerSideStreamRequest = {
  'subscribeCandlesRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'interval'?: 'SUBSCRIPTION_INTERVAL_UNSPECIFIED' | 'SUBSCRIPTION_INTERVAL_ONE_MINUTE' | 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES'; 'instrumentId'?: string }>; 'waitingClose'?: boolean };
  'subscribeOrderBookRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'depth'?: number; 'instrumentId'?: string }> };
  'subscribeTradesRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'instrumentId'?: string }> };
  'subscribeInfoRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'instrumentId'?: string }> };
  'subscribeLastPriceRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'instrumentId'?: string }> };
}

/**
 * A successful response.(streaming responses)
 */
export type MarketDataStreamServiceMarketDataServerSideStreamResponseOK = { 'result'?: { 'subscribeCandlesResponse'?: { 'trackingId'?: string; 'candlesSubscriptions'?: Array<{ 'figi'?: string; 'interval'?: 'SUBSCRIPTION_INTERVAL_UNSPECIFIED' | 'SUBSCRIPTION_INTERVAL_ONE_MINUTE' | 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES'; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'subscribeOrderBookResponse'?: { 'trackingId'?: string; 'orderBookSubscriptions'?: Array<{ 'figi'?: string; 'depth'?: number; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'subscribeTradesResponse'?: { 'trackingId'?: string; 'tradeSubscriptions'?: Array<{ 'figi'?: string; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'subscribeInfoResponse'?: { 'trackingId'?: string; 'infoSubscriptions'?: Array<{ 'figi'?: string; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'candle'?: { 'figi'?: string; 'interval'?: 'SUBSCRIPTION_INTERVAL_UNSPECIFIED' | 'SUBSCRIPTION_INTERVAL_ONE_MINUTE' | 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES'; 'open'?: { 'units'?: string; 'nano'?: number }; 'high'?: { 'units'?: string; 'nano'?: number }; 'low'?: { 'units'?: string; 'nano'?: number }; 'close'?: { 'units'?: string; 'nano'?: number }; 'volume'?: string; 'time'?: string; 'lastTradeTs'?: string; 'instrumentUid'?: string }; 'trade'?: { 'figi'?: string; 'direction'?: 'TRADE_DIRECTION_UNSPECIFIED' | 'TRADE_DIRECTION_BUY' | 'TRADE_DIRECTION_SELL'; 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'time'?: string; 'instrumentUid'?: string }; 'orderbook'?: { 'figi'?: string; 'depth'?: number; 'isConsistent'?: boolean; 'bids'?: Array<{ 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string }>; 'asks'?: Array<{ 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string }>; 'time'?: string; 'limitUp'?: { 'units'?: string; 'nano'?: number }; 'limitDown'?: { 'units'?: string; 'nano'?: number }; 'instrumentUid'?: string }; 'tradingStatus'?: { 'figi'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'time'?: string; 'limitOrderAvailableFlag'?: boolean; 'marketOrderAvailableFlag'?: boolean; 'instrumentUid'?: string }; 'ping'?: { 'time'?: string }; 'subscribeLastPriceResponse'?: { 'trackingId'?: string; 'lastPriceSubscriptions'?: Array<{ 'figi'?: string; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'lastPrice'?: { 'figi'?: string; 'price'?: { 'units'?: string; 'nano'?: number }; 'time'?: string; 'instrumentUid'?: string } }; 'error'?: { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> } }
/**
 * An unexpected error response.
 */
export type MarketDataStreamServiceMarketDataServerSideStreamdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataStreamServiceMarketDataServerSideStreamResponses =
  MarketDataStreamServiceMarketDataServerSideStreamResponseOK
  | MarketDataStreamServiceMarketDataServerSideStreamdefaultResponse

export type MarketDataStreamServiceMarketDataStreamRequest = {
  'subscribeCandlesRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'interval'?: 'SUBSCRIPTION_INTERVAL_UNSPECIFIED' | 'SUBSCRIPTION_INTERVAL_ONE_MINUTE' | 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES'; 'instrumentId'?: string }>; 'waitingClose'?: boolean };
  'subscribeOrderBookRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'depth'?: number; 'instrumentId'?: string }> };
  'subscribeTradesRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'instrumentId'?: string }> };
  'subscribeInfoRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'instrumentId'?: string }> };
  'subscribeLastPriceRequest': { 'subscriptionAction'?: 'SUBSCRIPTION_ACTION_UNSPECIFIED' | 'SUBSCRIPTION_ACTION_SUBSCRIBE' | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'; 'instruments'?: Array<{ 'figi'?: string; 'instrumentId'?: string }> };
  /**
   * Запрос активных подписок.
   */
  'getMySubscriptions': object;
}

/**
 * A successful response.(streaming responses)
 */
export type MarketDataStreamServiceMarketDataStreamResponseOK = { 'result'?: { 'subscribeCandlesResponse'?: { 'trackingId'?: string; 'candlesSubscriptions'?: Array<{ 'figi'?: string; 'interval'?: 'SUBSCRIPTION_INTERVAL_UNSPECIFIED' | 'SUBSCRIPTION_INTERVAL_ONE_MINUTE' | 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES'; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'subscribeOrderBookResponse'?: { 'trackingId'?: string; 'orderBookSubscriptions'?: Array<{ 'figi'?: string; 'depth'?: number; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'subscribeTradesResponse'?: { 'trackingId'?: string; 'tradeSubscriptions'?: Array<{ 'figi'?: string; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'subscribeInfoResponse'?: { 'trackingId'?: string; 'infoSubscriptions'?: Array<{ 'figi'?: string; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'candle'?: { 'figi'?: string; 'interval'?: 'SUBSCRIPTION_INTERVAL_UNSPECIFIED' | 'SUBSCRIPTION_INTERVAL_ONE_MINUTE' | 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES'; 'open'?: { 'units'?: string; 'nano'?: number }; 'high'?: { 'units'?: string; 'nano'?: number }; 'low'?: { 'units'?: string; 'nano'?: number }; 'close'?: { 'units'?: string; 'nano'?: number }; 'volume'?: string; 'time'?: string; 'lastTradeTs'?: string; 'instrumentUid'?: string }; 'trade'?: { 'figi'?: string; 'direction'?: 'TRADE_DIRECTION_UNSPECIFIED' | 'TRADE_DIRECTION_BUY' | 'TRADE_DIRECTION_SELL'; 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'time'?: string; 'instrumentUid'?: string }; 'orderbook'?: { 'figi'?: string; 'depth'?: number; 'isConsistent'?: boolean; 'bids'?: Array<{ 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string }>; 'asks'?: Array<{ 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string }>; 'time'?: string; 'limitUp'?: { 'units'?: string; 'nano'?: number }; 'limitDown'?: { 'units'?: string; 'nano'?: number }; 'instrumentUid'?: string }; 'tradingStatus'?: { 'figi'?: string; 'tradingStatus'?: 'SECURITY_TRADING_STATUS_UNSPECIFIED' | 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING' | 'SECURITY_TRADING_STATUS_OPENING_PERIOD' | 'SECURITY_TRADING_STATUS_CLOSING_PERIOD' | 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_CLOSING_AUCTION' | 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION' | 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION' | 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD' | 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE' | 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED' | 'SECURITY_TRADING_STATUS_SESSION_CLOSE' | 'SECURITY_TRADING_STATUS_SESSION_OPEN' | 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING' | 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING'; 'time'?: string; 'limitOrderAvailableFlag'?: boolean; 'marketOrderAvailableFlag'?: boolean; 'instrumentUid'?: string }; 'ping'?: { 'time'?: string }; 'subscribeLastPriceResponse'?: { 'trackingId'?: string; 'lastPriceSubscriptions'?: Array<{ 'figi'?: string; 'subscriptionStatus'?: 'SUBSCRIPTION_STATUS_UNSPECIFIED' | 'SUBSCRIPTION_STATUS_SUCCESS' | 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND' | 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID' | 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID' | 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID' | 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED' | 'SUBSCRIPTION_STATUS_INTERNAL_ERROR' | 'SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS'; 'instrumentUid'?: string }> }; 'lastPrice'?: { 'figi'?: string; 'price'?: { 'units'?: string; 'nano'?: number }; 'time'?: string; 'instrumentUid'?: string } }; 'error'?: { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> } }
/**
 * An unexpected error response.
 */
export type MarketDataStreamServiceMarketDataStreamdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type MarketDataStreamServiceMarketDataStreamResponses =
  MarketDataStreamServiceMarketDataStreamResponseOK
  | MarketDataStreamServiceMarketDataStreamdefaultResponse

export type OperationsServiceGetBrokerReportRequest = {
  'generateBrokerReportRequest': { 'accountId'?: string; 'from'?: string | Date; 'to'?: string | Date };
  'getBrokerReportRequest': { 'taskId'?: string; 'page'?: number };
}

/**
 * A successful response.
 */
export type OperationsServiceGetBrokerReportResponseOK = { 'generateBrokerReportResponse'?: { 'taskId'?: string }; 'getBrokerReportResponse'?: { 'brokerReport'?: Array<{ 'tradeId'?: string; 'orderId'?: string; 'figi'?: string; 'executeSign'?: string; 'tradeDatetime'?: string; 'exchange'?: string; 'classCode'?: string; 'direction'?: string; 'name'?: string; 'ticker'?: string; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'orderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'aciValue'?: { 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'brokerCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'exchangeCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'exchangeClearingCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'repoRate'?: { 'units'?: string; 'nano'?: number }; 'party'?: string; 'clearValueDate'?: string; 'secValueDate'?: string; 'brokerStatus'?: string; 'separateAgreementType'?: string; 'separateAgreementNumber'?: string; 'separateAgreementDate'?: string; 'deliveryType'?: string }>; 'itemsCount'?: number; 'pagesCount'?: number; 'page'?: number } }
/**
 * An unexpected error response.
 */
export type OperationsServiceGetBrokerReportdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsServiceGetBrokerReportResponses =
  OperationsServiceGetBrokerReportResponseOK
  | OperationsServiceGetBrokerReportdefaultResponse

export type OperationsServiceGetDividendsForeignIssuerRequest = {
  'generateDivForeignIssuerReport': { 'accountId'?: string; 'from'?: string | Date; 'to'?: string | Date };
  'getDivForeignIssuerReport': { 'taskId'?: string; 'page'?: number };
}

/**
 * A successful response.
 */
export type OperationsServiceGetDividendsForeignIssuerResponseOK = { 'generateDivForeignIssuerReportResponse'?: { 'taskId'?: string }; 'divForeignIssuerReport'?: { 'dividendsForeignIssuerReport'?: Array<{ 'recordDate'?: string; 'paymentDate'?: string; 'securityName'?: string; 'isin'?: string; 'issuerCountry'?: string; 'quantity'?: string; 'dividend'?: { 'units'?: string; 'nano'?: number }; 'externalCommission'?: { 'units'?: string; 'nano'?: number }; 'dividendGross'?: { 'units'?: string; 'nano'?: number }; 'tax'?: { 'units'?: string; 'nano'?: number }; 'dividendAmount'?: { 'units'?: string; 'nano'?: number }; 'currency'?: string }>; 'itemsCount'?: number; 'pagesCount'?: number; 'page'?: number } }
/**
 * An unexpected error response.
 */
export type OperationsServiceGetDividendsForeignIssuerdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsServiceGetDividendsForeignIssuerResponses =
  OperationsServiceGetDividendsForeignIssuerResponseOK
  | OperationsServiceGetDividendsForeignIssuerdefaultResponse

export type OperationsServiceGetOperationsRequest = {
  'accountId': string;
  'from': string | Date;
  'to': string | Date;
  'state': 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS';
  'figi': string;
}

/**
 * A successful response.
 */
export type OperationsServiceGetOperationsResponseOK = { 'operations'?: Array<{ 'id'?: string; 'parentOperationId'?: string; 'currency'?: string; 'payment'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'state'?: 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS'; 'quantity'?: string; 'quantityRest'?: string; 'figi'?: string; 'instrumentType'?: string; 'date'?: string; 'type'?: string; 'operationType'?: 'OPERATION_TYPE_UNSPECIFIED' | 'OPERATION_TYPE_INPUT' | 'OPERATION_TYPE_BOND_TAX' | 'OPERATION_TYPE_OUTPUT_SECURITIES' | 'OPERATION_TYPE_OVERNIGHT' | 'OPERATION_TYPE_TAX' | 'OPERATION_TYPE_BOND_REPAYMENT_FULL' | 'OPERATION_TYPE_SELL_CARD' | 'OPERATION_TYPE_DIVIDEND_TAX' | 'OPERATION_TYPE_OUTPUT' | 'OPERATION_TYPE_BOND_REPAYMENT' | 'OPERATION_TYPE_TAX_CORRECTION' | 'OPERATION_TYPE_SERVICE_FEE' | 'OPERATION_TYPE_BENEFIT_TAX' | 'OPERATION_TYPE_MARGIN_FEE' | 'OPERATION_TYPE_BUY' | 'OPERATION_TYPE_BUY_CARD' | 'OPERATION_TYPE_INPUT_SECURITIES' | 'OPERATION_TYPE_SELL_MARGIN' | 'OPERATION_TYPE_BROKER_FEE' | 'OPERATION_TYPE_BUY_MARGIN' | 'OPERATION_TYPE_DIVIDEND' | 'OPERATION_TYPE_SELL' | 'OPERATION_TYPE_COUPON' | 'OPERATION_TYPE_SUCCESS_FEE' | 'OPERATION_TYPE_DIVIDEND_TRANSFER' | 'OPERATION_TYPE_ACCRUING_VARMARGIN' | 'OPERATION_TYPE_WRITING_OFF_VARMARGIN' | 'OPERATION_TYPE_DELIVERY_BUY' | 'OPERATION_TYPE_DELIVERY_SELL' | 'OPERATION_TYPE_TRACK_MFEE' | 'OPERATION_TYPE_TRACK_PFEE' | 'OPERATION_TYPE_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE' | 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO' | 'OPERATION_TYPE_TAX_REPO_HOLD' | 'OPERATION_TYPE_TAX_REPO_REFUND' | 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE' | 'OPERATION_TYPE_DIV_EXT' | 'OPERATION_TYPE_TAX_CORRECTION_COUPON' | 'OPERATION_TYPE_CASH_FEE' | 'OPERATION_TYPE_OUT_FEE' | 'OPERATION_TYPE_OUT_STAMP_DUTY' | 'OPERATION_TYPE_OUTPUT_SWIFT' | 'OPERATION_TYPE_INPUT_SWIFT' | 'OPERATION_TYPE_OUTPUT_ACQUIRING' | 'OPERATION_TYPE_INPUT_ACQUIRING' | 'OPERATION_TYPE_OUTPUT_PENALTY' | 'OPERATION_TYPE_ADVICE_FEE' | 'OPERATION_TYPE_TRANS_IIS_BS' | 'OPERATION_TYPE_TRANS_BS_BS' | 'OPERATION_TYPE_OUT_MULTI' | 'OPERATION_TYPE_INP_MULTI' | 'OPERATION_TYPE_OVER_PLACEMENT' | 'OPERATION_TYPE_OVER_COM' | 'OPERATION_TYPE_OVER_INCOME' | 'OPERATION_TYPE_OPTION_EXPIRATION'; 'trades'?: Array<{ 'tradeId'?: string; 'dateTime'?: string; 'quantity'?: string; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }>; 'assetUid'?: string; 'positionUid'?: string; 'instrumentUid'?: string }> }
/**
 * An unexpected error response.
 */
export type OperationsServiceGetOperationsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsServiceGetOperationsResponses =
  OperationsServiceGetOperationsResponseOK
  | OperationsServiceGetOperationsdefaultResponse

export type OperationsServiceGetOperationsByCursorRequest = {
  'accountId': string;
  'instrumentId': string;
  'from': string | Date;
  'to': string | Date;
  'cursor': string;
  'limit': number;
  'operationTypes': Array<'OPERATION_TYPE_UNSPECIFIED' | 'OPERATION_TYPE_INPUT' | 'OPERATION_TYPE_BOND_TAX' | 'OPERATION_TYPE_OUTPUT_SECURITIES' | 'OPERATION_TYPE_OVERNIGHT' | 'OPERATION_TYPE_TAX' | 'OPERATION_TYPE_BOND_REPAYMENT_FULL' | 'OPERATION_TYPE_SELL_CARD' | 'OPERATION_TYPE_DIVIDEND_TAX' | 'OPERATION_TYPE_OUTPUT' | 'OPERATION_TYPE_BOND_REPAYMENT' | 'OPERATION_TYPE_TAX_CORRECTION' | 'OPERATION_TYPE_SERVICE_FEE' | 'OPERATION_TYPE_BENEFIT_TAX' | 'OPERATION_TYPE_MARGIN_FEE' | 'OPERATION_TYPE_BUY' | 'OPERATION_TYPE_BUY_CARD' | 'OPERATION_TYPE_INPUT_SECURITIES' | 'OPERATION_TYPE_SELL_MARGIN' | 'OPERATION_TYPE_BROKER_FEE' | 'OPERATION_TYPE_BUY_MARGIN' | 'OPERATION_TYPE_DIVIDEND' | 'OPERATION_TYPE_SELL' | 'OPERATION_TYPE_COUPON' | 'OPERATION_TYPE_SUCCESS_FEE' | 'OPERATION_TYPE_DIVIDEND_TRANSFER' | 'OPERATION_TYPE_ACCRUING_VARMARGIN' | 'OPERATION_TYPE_WRITING_OFF_VARMARGIN' | 'OPERATION_TYPE_DELIVERY_BUY' | 'OPERATION_TYPE_DELIVERY_SELL' | 'OPERATION_TYPE_TRACK_MFEE' | 'OPERATION_TYPE_TRACK_PFEE' | 'OPERATION_TYPE_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE' | 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO' | 'OPERATION_TYPE_TAX_REPO_HOLD' | 'OPERATION_TYPE_TAX_REPO_REFUND' | 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE' | 'OPERATION_TYPE_DIV_EXT' | 'OPERATION_TYPE_TAX_CORRECTION_COUPON' | 'OPERATION_TYPE_CASH_FEE' | 'OPERATION_TYPE_OUT_FEE' | 'OPERATION_TYPE_OUT_STAMP_DUTY' | 'OPERATION_TYPE_OUTPUT_SWIFT' | 'OPERATION_TYPE_INPUT_SWIFT' | 'OPERATION_TYPE_OUTPUT_ACQUIRING' | 'OPERATION_TYPE_INPUT_ACQUIRING' | 'OPERATION_TYPE_OUTPUT_PENALTY' | 'OPERATION_TYPE_ADVICE_FEE' | 'OPERATION_TYPE_TRANS_IIS_BS' | 'OPERATION_TYPE_TRANS_BS_BS' | 'OPERATION_TYPE_OUT_MULTI' | 'OPERATION_TYPE_INP_MULTI' | 'OPERATION_TYPE_OVER_PLACEMENT' | 'OPERATION_TYPE_OVER_COM' | 'OPERATION_TYPE_OVER_INCOME' | 'OPERATION_TYPE_OPTION_EXPIRATION'>;
  'state': 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS';
  'withoutCommissions': boolean;
  'withoutTrades': boolean;
  'withoutOvernights': boolean;
}

/**
 * A successful response.
 */
export type OperationsServiceGetOperationsByCursorResponseOK = { 'hasNext'?: boolean; 'nextCursor'?: string; 'items'?: Array<{ 'cursor'?: string; 'brokerAccountId'?: string; 'id'?: string; 'parentOperationId'?: string; 'name'?: string; 'date'?: string; 'type'?: 'OPERATION_TYPE_UNSPECIFIED' | 'OPERATION_TYPE_INPUT' | 'OPERATION_TYPE_BOND_TAX' | 'OPERATION_TYPE_OUTPUT_SECURITIES' | 'OPERATION_TYPE_OVERNIGHT' | 'OPERATION_TYPE_TAX' | 'OPERATION_TYPE_BOND_REPAYMENT_FULL' | 'OPERATION_TYPE_SELL_CARD' | 'OPERATION_TYPE_DIVIDEND_TAX' | 'OPERATION_TYPE_OUTPUT' | 'OPERATION_TYPE_BOND_REPAYMENT' | 'OPERATION_TYPE_TAX_CORRECTION' | 'OPERATION_TYPE_SERVICE_FEE' | 'OPERATION_TYPE_BENEFIT_TAX' | 'OPERATION_TYPE_MARGIN_FEE' | 'OPERATION_TYPE_BUY' | 'OPERATION_TYPE_BUY_CARD' | 'OPERATION_TYPE_INPUT_SECURITIES' | 'OPERATION_TYPE_SELL_MARGIN' | 'OPERATION_TYPE_BROKER_FEE' | 'OPERATION_TYPE_BUY_MARGIN' | 'OPERATION_TYPE_DIVIDEND' | 'OPERATION_TYPE_SELL' | 'OPERATION_TYPE_COUPON' | 'OPERATION_TYPE_SUCCESS_FEE' | 'OPERATION_TYPE_DIVIDEND_TRANSFER' | 'OPERATION_TYPE_ACCRUING_VARMARGIN' | 'OPERATION_TYPE_WRITING_OFF_VARMARGIN' | 'OPERATION_TYPE_DELIVERY_BUY' | 'OPERATION_TYPE_DELIVERY_SELL' | 'OPERATION_TYPE_TRACK_MFEE' | 'OPERATION_TYPE_TRACK_PFEE' | 'OPERATION_TYPE_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE' | 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO' | 'OPERATION_TYPE_TAX_REPO_HOLD' | 'OPERATION_TYPE_TAX_REPO_REFUND' | 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE' | 'OPERATION_TYPE_DIV_EXT' | 'OPERATION_TYPE_TAX_CORRECTION_COUPON' | 'OPERATION_TYPE_CASH_FEE' | 'OPERATION_TYPE_OUT_FEE' | 'OPERATION_TYPE_OUT_STAMP_DUTY' | 'OPERATION_TYPE_OUTPUT_SWIFT' | 'OPERATION_TYPE_INPUT_SWIFT' | 'OPERATION_TYPE_OUTPUT_ACQUIRING' | 'OPERATION_TYPE_INPUT_ACQUIRING' | 'OPERATION_TYPE_OUTPUT_PENALTY' | 'OPERATION_TYPE_ADVICE_FEE' | 'OPERATION_TYPE_TRANS_IIS_BS' | 'OPERATION_TYPE_TRANS_BS_BS' | 'OPERATION_TYPE_OUT_MULTI' | 'OPERATION_TYPE_INP_MULTI' | 'OPERATION_TYPE_OVER_PLACEMENT' | 'OPERATION_TYPE_OVER_COM' | 'OPERATION_TYPE_OVER_INCOME' | 'OPERATION_TYPE_OPTION_EXPIRATION'; 'description'?: string; 'state'?: 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS'; 'instrumentUid'?: string; 'figi'?: string; 'instrumentType'?: string; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE'; 'positionUid'?: string; 'payment'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'commission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yield'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yieldRelative'?: { 'units'?: string; 'nano'?: number }; 'accruedInt'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'quantityRest'?: string; 'quantityDone'?: string; 'cancelDateTime'?: string; 'cancelReason'?: string; 'tradesInfo'?: { 'trades'?: Array<{ 'num'?: string; 'date'?: string; 'quantity'?: string; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yield'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yieldRelative'?: { 'units'?: string; 'nano'?: number } }> }; 'assetUid'?: string }> }
/**
 * An unexpected error response.
 */
export type OperationsServiceGetOperationsByCursordefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsServiceGetOperationsByCursorResponses =
  OperationsServiceGetOperationsByCursorResponseOK
  | OperationsServiceGetOperationsByCursordefaultResponse

export type OperationsServiceGetPortfolioRequest = {
  'accountId': string;
  'currency': 'RUB' | 'USD' | 'EUR';
}

/**
 * A successful response.
 */
export type OperationsServiceGetPortfolioResponseOK = { 'totalAmountShares'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountBonds'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountEtf'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountCurrencies'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountFutures'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'positions'?: Array<{ 'figi'?: string; 'instrumentType'?: string; 'quantity'?: { 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'currentNkd'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPricePt'?: { 'units'?: string; 'nano'?: number }; 'currentPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPriceFifo'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantityLots'?: { 'units'?: string; 'nano'?: number }; 'blocked'?: boolean; 'blockedLots'?: { 'units'?: string; 'nano'?: number }; 'positionUid'?: string; 'instrumentUid'?: string; 'varMargin'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYieldFifo'?: { 'units'?: string; 'nano'?: number } }>; 'accountId'?: string; 'totalAmountOptions'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountSp'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountPortfolio'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'virtualPositions'?: Array<{ 'positionUid'?: string; 'instrumentUid'?: string; 'figi'?: string; 'instrumentType'?: string; 'quantity'?: { 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'expectedYieldFifo'?: { 'units'?: string; 'nano'?: number }; 'expireDate'?: string; 'currentPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPriceFifo'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }> }
/**
 * An unexpected error response.
 */
export type OperationsServiceGetPortfoliodefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsServiceGetPortfolioResponses =
  OperationsServiceGetPortfolioResponseOK
  | OperationsServiceGetPortfoliodefaultResponse

export type OperationsServiceGetPositionsRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type OperationsServiceGetPositionsResponseOK = { 'money'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'blocked'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'securities'?: Array<{ 'figi'?: string; 'blocked'?: string; 'balance'?: string; 'positionUid'?: string; 'instrumentUid'?: string; 'exchangeBlocked'?: boolean; 'instrumentType'?: string }>; 'limitsLoadingInProgress'?: boolean; 'futures'?: Array<{ 'figi'?: string; 'blocked'?: string; 'balance'?: string; 'positionUid'?: string; 'instrumentUid'?: string }>; 'options'?: Array<{ 'positionUid'?: string; 'instrumentUid'?: string; 'blocked'?: string; 'balance'?: string }> }
/**
 * An unexpected error response.
 */
export type OperationsServiceGetPositionsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsServiceGetPositionsResponses =
  OperationsServiceGetPositionsResponseOK
  | OperationsServiceGetPositionsdefaultResponse

export type OperationsServiceGetWithdrawLimitsRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type OperationsServiceGetWithdrawLimitsResponseOK = { 'money'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'blocked'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'blockedGuarantee'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }> }
/**
 * An unexpected error response.
 */
export type OperationsServiceGetWithdrawLimitsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsServiceGetWithdrawLimitsResponses =
  OperationsServiceGetWithdrawLimitsResponseOK
  | OperationsServiceGetWithdrawLimitsdefaultResponse

export type OperationsStreamServicePortfolioStreamRequest = {
  'accounts': Array<string>;
}

/**
 * A successful response.(streaming responses)
 */
export type OperationsStreamServicePortfolioStreamResponseOK = { 'result'?: { 'subscriptions'?: { 'accounts'?: Array<{ 'accountId'?: string; 'subscriptionStatus'?: 'PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED' | 'PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS' | 'PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND' | 'PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR' }> }; 'portfolio'?: { 'totalAmountShares'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountBonds'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountEtf'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountCurrencies'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountFutures'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'positions'?: Array<{ 'figi'?: string; 'instrumentType'?: string; 'quantity'?: { 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'currentNkd'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPricePt'?: { 'units'?: string; 'nano'?: number }; 'currentPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPriceFifo'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantityLots'?: { 'units'?: string; 'nano'?: number }; 'blocked'?: boolean; 'blockedLots'?: { 'units'?: string; 'nano'?: number }; 'positionUid'?: string; 'instrumentUid'?: string; 'varMargin'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYieldFifo'?: { 'units'?: string; 'nano'?: number } }>; 'accountId'?: string; 'totalAmountOptions'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountSp'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountPortfolio'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'virtualPositions'?: Array<{ 'positionUid'?: string; 'instrumentUid'?: string; 'figi'?: string; 'instrumentType'?: string; 'quantity'?: { 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'expectedYieldFifo'?: { 'units'?: string; 'nano'?: number }; 'expireDate'?: string; 'currentPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPriceFifo'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }> }; 'ping'?: { 'time'?: string } }; 'error'?: { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> } }
/**
 * An unexpected error response.
 */
export type OperationsStreamServicePortfolioStreamdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsStreamServicePortfolioStreamResponses =
  OperationsStreamServicePortfolioStreamResponseOK
  | OperationsStreamServicePortfolioStreamdefaultResponse

export type OperationsStreamServicePositionsStreamRequest = {
  'accounts': Array<string>;
}

/**
 * A successful response.(streaming responses)
 */
export type OperationsStreamServicePositionsStreamResponseOK = { 'result'?: { 'subscriptions'?: { 'accounts'?: Array<{ 'accountId'?: string; 'subscriptionStatus'?: 'POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED' | 'POSITIONS_SUBSCRIPTION_STATUS_SUCCESS' | 'POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND' | 'POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR' }> }; 'position'?: { 'accountId'?: string; 'money'?: Array<{ 'availableValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'blockedValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }>; 'securities'?: Array<{ 'figi'?: string; 'blocked'?: string; 'balance'?: string; 'positionUid'?: string; 'instrumentUid'?: string; 'exchangeBlocked'?: boolean; 'instrumentType'?: string }>; 'futures'?: Array<{ 'figi'?: string; 'blocked'?: string; 'balance'?: string; 'positionUid'?: string; 'instrumentUid'?: string }>; 'options'?: Array<{ 'positionUid'?: string; 'instrumentUid'?: string; 'blocked'?: string; 'balance'?: string }>; 'date'?: string }; 'ping'?: { 'time'?: string } }; 'error'?: { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> } }
/**
 * An unexpected error response.
 */
export type OperationsStreamServicePositionsStreamdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OperationsStreamServicePositionsStreamResponses =
  OperationsStreamServicePositionsStreamResponseOK
  | OperationsStreamServicePositionsStreamdefaultResponse

export type OrdersServiceCancelOrderRequest = {
  'accountId': string;
  'orderId': string;
}

/**
 * A successful response.
 */
export type OrdersServiceCancelOrderResponseOK = { 'time'?: string }
/**
 * An unexpected error response.
 */
export type OrdersServiceCancelOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OrdersServiceCancelOrderResponses =
  OrdersServiceCancelOrderResponseOK
  | OrdersServiceCancelOrderdefaultResponse

export type OrdersServiceGetOrderStateRequest = {
  'accountId': string;
  'orderId': string;
}

/**
 * A successful response.
 */
export type OrdersServiceGetOrderStateResponseOK = { 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'stages'?: Array<{ 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'tradeId'?: string }>; 'serviceCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'currency'?: string; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'orderDate'?: string; 'instrumentUid'?: string; 'orderRequestId'?: string }
/**
 * An unexpected error response.
 */
export type OrdersServiceGetOrderStatedefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OrdersServiceGetOrderStateResponses =
  OrdersServiceGetOrderStateResponseOK
  | OrdersServiceGetOrderStatedefaultResponse

export type OrdersServiceGetOrdersRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type OrdersServiceGetOrdersResponseOK = { 'orders'?: Array<{ 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'stages'?: Array<{ 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'tradeId'?: string }>; 'serviceCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'currency'?: string; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'orderDate'?: string; 'instrumentUid'?: string; 'orderRequestId'?: string }> }
/**
 * An unexpected error response.
 */
export type OrdersServiceGetOrdersdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OrdersServiceGetOrdersResponses =
  OrdersServiceGetOrdersResponseOK
  | OrdersServiceGetOrdersdefaultResponse

export type OrdersServicePostOrderRequest = {
  'figi': string;
  'quantity': string;
  'price': { 'units'?: string; 'nano'?: number };
  'direction': 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL';
  'accountId': string;
  'orderType': 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE';
  'orderId': string;
  'instrumentId': string;
}

/**
 * A successful response.
 */
export type OrdersServicePostOrderResponseOK = { 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'aciValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'message'?: string; 'initialOrderPricePt'?: { 'units'?: string; 'nano'?: number }; 'instrumentUid'?: string }
/**
 * An unexpected error response.
 */
export type OrdersServicePostOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OrdersServicePostOrderResponses =
  OrdersServicePostOrderResponseOK
  | OrdersServicePostOrderdefaultResponse

export type OrdersServiceReplaceOrderRequest = {
  'accountId': string;
  'orderId': string;
  'idempotencyKey': string;
  'quantity': string;
  'price': { 'units'?: string; 'nano'?: number };
  'priceType': 'PRICE_TYPE_UNSPECIFIED' | 'PRICE_TYPE_POINT' | 'PRICE_TYPE_CURRENCY';
}

/**
 * A successful response.
 */
export type OrdersServiceReplaceOrderResponseOK = { 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'aciValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'message'?: string; 'initialOrderPricePt'?: { 'units'?: string; 'nano'?: number }; 'instrumentUid'?: string }
/**
 * An unexpected error response.
 */
export type OrdersServiceReplaceOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OrdersServiceReplaceOrderResponses =
  OrdersServiceReplaceOrderResponseOK
  | OrdersServiceReplaceOrderdefaultResponse

export type OrdersStreamServiceTradesStreamRequest = {
  'accounts': Array<string>;
}

/**
 * A successful response.(streaming responses)
 */
export type OrdersStreamServiceTradesStreamResponseOK = { 'result'?: { 'orderTrades'?: { 'orderId'?: string; 'createdAt'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'figi'?: string; 'trades'?: Array<{ 'dateTime'?: string; 'price'?: { 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'tradeId'?: string }>; 'accountId'?: string; 'instrumentUid'?: string }; 'ping'?: { 'time'?: string } }; 'error'?: { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> } }
/**
 * An unexpected error response.
 */
export type OrdersStreamServiceTradesStreamdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type OrdersStreamServiceTradesStreamResponses =
  OrdersStreamServiceTradesStreamResponseOK
  | OrdersStreamServiceTradesStreamdefaultResponse

export type SandboxServiceCancelSandboxOrderRequest = {
  'accountId': string;
  'orderId': string;
}

/**
 * A successful response.
 */
export type SandboxServiceCancelSandboxOrderResponseOK = { 'time'?: string }
/**
 * An unexpected error response.
 */
export type SandboxServiceCancelSandboxOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceCancelSandboxOrderResponses =
  SandboxServiceCancelSandboxOrderResponseOK
  | SandboxServiceCancelSandboxOrderdefaultResponse

export type SandboxServiceCloseSandboxAccountRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type SandboxServiceCloseSandboxAccountResponseOK = object
/**
 * An unexpected error response.
 */
export type SandboxServiceCloseSandboxAccountdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceCloseSandboxAccountResponses =
  SandboxServiceCloseSandboxAccountResponseOK
  | SandboxServiceCloseSandboxAccountdefaultResponse

export type SandboxServiceGetSandboxAccountsRequest = {
  
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxAccountsResponseOK = { 'accounts'?: Array<{ 'id'?: string; 'type'?: 'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_TINKOFF' | 'ACCOUNT_TYPE_TINKOFF_IIS' | 'ACCOUNT_TYPE_INVEST_BOX'; 'name'?: string; 'status'?: 'ACCOUNT_STATUS_UNSPECIFIED' | 'ACCOUNT_STATUS_NEW' | 'ACCOUNT_STATUS_OPEN' | 'ACCOUNT_STATUS_CLOSED'; 'openedDate'?: string; 'closedDate'?: string; 'accessLevel'?: 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED' | 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS' | 'ACCOUNT_ACCESS_LEVEL_READ_ONLY' | 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS' }> }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxAccountsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxAccountsResponses =
  SandboxServiceGetSandboxAccountsResponseOK
  | SandboxServiceGetSandboxAccountsdefaultResponse

export type SandboxServiceGetSandboxOperationsRequest = {
  'accountId': string;
  'from': string | Date;
  'to': string | Date;
  'state': 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS';
  'figi': string;
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxOperationsResponseOK = { 'operations'?: Array<{ 'id'?: string; 'parentOperationId'?: string; 'currency'?: string; 'payment'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'state'?: 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS'; 'quantity'?: string; 'quantityRest'?: string; 'figi'?: string; 'instrumentType'?: string; 'date'?: string; 'type'?: string; 'operationType'?: 'OPERATION_TYPE_UNSPECIFIED' | 'OPERATION_TYPE_INPUT' | 'OPERATION_TYPE_BOND_TAX' | 'OPERATION_TYPE_OUTPUT_SECURITIES' | 'OPERATION_TYPE_OVERNIGHT' | 'OPERATION_TYPE_TAX' | 'OPERATION_TYPE_BOND_REPAYMENT_FULL' | 'OPERATION_TYPE_SELL_CARD' | 'OPERATION_TYPE_DIVIDEND_TAX' | 'OPERATION_TYPE_OUTPUT' | 'OPERATION_TYPE_BOND_REPAYMENT' | 'OPERATION_TYPE_TAX_CORRECTION' | 'OPERATION_TYPE_SERVICE_FEE' | 'OPERATION_TYPE_BENEFIT_TAX' | 'OPERATION_TYPE_MARGIN_FEE' | 'OPERATION_TYPE_BUY' | 'OPERATION_TYPE_BUY_CARD' | 'OPERATION_TYPE_INPUT_SECURITIES' | 'OPERATION_TYPE_SELL_MARGIN' | 'OPERATION_TYPE_BROKER_FEE' | 'OPERATION_TYPE_BUY_MARGIN' | 'OPERATION_TYPE_DIVIDEND' | 'OPERATION_TYPE_SELL' | 'OPERATION_TYPE_COUPON' | 'OPERATION_TYPE_SUCCESS_FEE' | 'OPERATION_TYPE_DIVIDEND_TRANSFER' | 'OPERATION_TYPE_ACCRUING_VARMARGIN' | 'OPERATION_TYPE_WRITING_OFF_VARMARGIN' | 'OPERATION_TYPE_DELIVERY_BUY' | 'OPERATION_TYPE_DELIVERY_SELL' | 'OPERATION_TYPE_TRACK_MFEE' | 'OPERATION_TYPE_TRACK_PFEE' | 'OPERATION_TYPE_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE' | 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO' | 'OPERATION_TYPE_TAX_REPO_HOLD' | 'OPERATION_TYPE_TAX_REPO_REFUND' | 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE' | 'OPERATION_TYPE_DIV_EXT' | 'OPERATION_TYPE_TAX_CORRECTION_COUPON' | 'OPERATION_TYPE_CASH_FEE' | 'OPERATION_TYPE_OUT_FEE' | 'OPERATION_TYPE_OUT_STAMP_DUTY' | 'OPERATION_TYPE_OUTPUT_SWIFT' | 'OPERATION_TYPE_INPUT_SWIFT' | 'OPERATION_TYPE_OUTPUT_ACQUIRING' | 'OPERATION_TYPE_INPUT_ACQUIRING' | 'OPERATION_TYPE_OUTPUT_PENALTY' | 'OPERATION_TYPE_ADVICE_FEE' | 'OPERATION_TYPE_TRANS_IIS_BS' | 'OPERATION_TYPE_TRANS_BS_BS' | 'OPERATION_TYPE_OUT_MULTI' | 'OPERATION_TYPE_INP_MULTI' | 'OPERATION_TYPE_OVER_PLACEMENT' | 'OPERATION_TYPE_OVER_COM' | 'OPERATION_TYPE_OVER_INCOME' | 'OPERATION_TYPE_OPTION_EXPIRATION'; 'trades'?: Array<{ 'tradeId'?: string; 'dateTime'?: string; 'quantity'?: string; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }>; 'assetUid'?: string; 'positionUid'?: string; 'instrumentUid'?: string }> }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxOperationsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxOperationsResponses =
  SandboxServiceGetSandboxOperationsResponseOK
  | SandboxServiceGetSandboxOperationsdefaultResponse

export type SandboxServiceGetSandboxOperationsByCursorRequest = {
  'accountId': string;
  'instrumentId': string;
  'from': string | Date;
  'to': string | Date;
  'cursor': string;
  'limit': number;
  'operationTypes': Array<'OPERATION_TYPE_UNSPECIFIED' | 'OPERATION_TYPE_INPUT' | 'OPERATION_TYPE_BOND_TAX' | 'OPERATION_TYPE_OUTPUT_SECURITIES' | 'OPERATION_TYPE_OVERNIGHT' | 'OPERATION_TYPE_TAX' | 'OPERATION_TYPE_BOND_REPAYMENT_FULL' | 'OPERATION_TYPE_SELL_CARD' | 'OPERATION_TYPE_DIVIDEND_TAX' | 'OPERATION_TYPE_OUTPUT' | 'OPERATION_TYPE_BOND_REPAYMENT' | 'OPERATION_TYPE_TAX_CORRECTION' | 'OPERATION_TYPE_SERVICE_FEE' | 'OPERATION_TYPE_BENEFIT_TAX' | 'OPERATION_TYPE_MARGIN_FEE' | 'OPERATION_TYPE_BUY' | 'OPERATION_TYPE_BUY_CARD' | 'OPERATION_TYPE_INPUT_SECURITIES' | 'OPERATION_TYPE_SELL_MARGIN' | 'OPERATION_TYPE_BROKER_FEE' | 'OPERATION_TYPE_BUY_MARGIN' | 'OPERATION_TYPE_DIVIDEND' | 'OPERATION_TYPE_SELL' | 'OPERATION_TYPE_COUPON' | 'OPERATION_TYPE_SUCCESS_FEE' | 'OPERATION_TYPE_DIVIDEND_TRANSFER' | 'OPERATION_TYPE_ACCRUING_VARMARGIN' | 'OPERATION_TYPE_WRITING_OFF_VARMARGIN' | 'OPERATION_TYPE_DELIVERY_BUY' | 'OPERATION_TYPE_DELIVERY_SELL' | 'OPERATION_TYPE_TRACK_MFEE' | 'OPERATION_TYPE_TRACK_PFEE' | 'OPERATION_TYPE_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE' | 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO' | 'OPERATION_TYPE_TAX_REPO_HOLD' | 'OPERATION_TYPE_TAX_REPO_REFUND' | 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE' | 'OPERATION_TYPE_DIV_EXT' | 'OPERATION_TYPE_TAX_CORRECTION_COUPON' | 'OPERATION_TYPE_CASH_FEE' | 'OPERATION_TYPE_OUT_FEE' | 'OPERATION_TYPE_OUT_STAMP_DUTY' | 'OPERATION_TYPE_OUTPUT_SWIFT' | 'OPERATION_TYPE_INPUT_SWIFT' | 'OPERATION_TYPE_OUTPUT_ACQUIRING' | 'OPERATION_TYPE_INPUT_ACQUIRING' | 'OPERATION_TYPE_OUTPUT_PENALTY' | 'OPERATION_TYPE_ADVICE_FEE' | 'OPERATION_TYPE_TRANS_IIS_BS' | 'OPERATION_TYPE_TRANS_BS_BS' | 'OPERATION_TYPE_OUT_MULTI' | 'OPERATION_TYPE_INP_MULTI' | 'OPERATION_TYPE_OVER_PLACEMENT' | 'OPERATION_TYPE_OVER_COM' | 'OPERATION_TYPE_OVER_INCOME' | 'OPERATION_TYPE_OPTION_EXPIRATION'>;
  'state': 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS';
  'withoutCommissions': boolean;
  'withoutTrades': boolean;
  'withoutOvernights': boolean;
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxOperationsByCursorResponseOK = { 'hasNext'?: boolean; 'nextCursor'?: string; 'items'?: Array<{ 'cursor'?: string; 'brokerAccountId'?: string; 'id'?: string; 'parentOperationId'?: string; 'name'?: string; 'date'?: string; 'type'?: 'OPERATION_TYPE_UNSPECIFIED' | 'OPERATION_TYPE_INPUT' | 'OPERATION_TYPE_BOND_TAX' | 'OPERATION_TYPE_OUTPUT_SECURITIES' | 'OPERATION_TYPE_OVERNIGHT' | 'OPERATION_TYPE_TAX' | 'OPERATION_TYPE_BOND_REPAYMENT_FULL' | 'OPERATION_TYPE_SELL_CARD' | 'OPERATION_TYPE_DIVIDEND_TAX' | 'OPERATION_TYPE_OUTPUT' | 'OPERATION_TYPE_BOND_REPAYMENT' | 'OPERATION_TYPE_TAX_CORRECTION' | 'OPERATION_TYPE_SERVICE_FEE' | 'OPERATION_TYPE_BENEFIT_TAX' | 'OPERATION_TYPE_MARGIN_FEE' | 'OPERATION_TYPE_BUY' | 'OPERATION_TYPE_BUY_CARD' | 'OPERATION_TYPE_INPUT_SECURITIES' | 'OPERATION_TYPE_SELL_MARGIN' | 'OPERATION_TYPE_BROKER_FEE' | 'OPERATION_TYPE_BUY_MARGIN' | 'OPERATION_TYPE_DIVIDEND' | 'OPERATION_TYPE_SELL' | 'OPERATION_TYPE_COUPON' | 'OPERATION_TYPE_SUCCESS_FEE' | 'OPERATION_TYPE_DIVIDEND_TRANSFER' | 'OPERATION_TYPE_ACCRUING_VARMARGIN' | 'OPERATION_TYPE_WRITING_OFF_VARMARGIN' | 'OPERATION_TYPE_DELIVERY_BUY' | 'OPERATION_TYPE_DELIVERY_SELL' | 'OPERATION_TYPE_TRACK_MFEE' | 'OPERATION_TYPE_TRACK_PFEE' | 'OPERATION_TYPE_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE' | 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE' | 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO' | 'OPERATION_TYPE_TAX_REPO_HOLD' | 'OPERATION_TYPE_TAX_REPO_REFUND' | 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE' | 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE' | 'OPERATION_TYPE_DIV_EXT' | 'OPERATION_TYPE_TAX_CORRECTION_COUPON' | 'OPERATION_TYPE_CASH_FEE' | 'OPERATION_TYPE_OUT_FEE' | 'OPERATION_TYPE_OUT_STAMP_DUTY' | 'OPERATION_TYPE_OUTPUT_SWIFT' | 'OPERATION_TYPE_INPUT_SWIFT' | 'OPERATION_TYPE_OUTPUT_ACQUIRING' | 'OPERATION_TYPE_INPUT_ACQUIRING' | 'OPERATION_TYPE_OUTPUT_PENALTY' | 'OPERATION_TYPE_ADVICE_FEE' | 'OPERATION_TYPE_TRANS_IIS_BS' | 'OPERATION_TYPE_TRANS_BS_BS' | 'OPERATION_TYPE_OUT_MULTI' | 'OPERATION_TYPE_INP_MULTI' | 'OPERATION_TYPE_OVER_PLACEMENT' | 'OPERATION_TYPE_OVER_COM' | 'OPERATION_TYPE_OVER_INCOME' | 'OPERATION_TYPE_OPTION_EXPIRATION'; 'description'?: string; 'state'?: 'OPERATION_STATE_UNSPECIFIED' | 'OPERATION_STATE_EXECUTED' | 'OPERATION_STATE_CANCELED' | 'OPERATION_STATE_PROGRESS'; 'instrumentUid'?: string; 'figi'?: string; 'instrumentType'?: string; 'instrumentKind'?: 'INSTRUMENT_TYPE_UNSPECIFIED' | 'INSTRUMENT_TYPE_BOND' | 'INSTRUMENT_TYPE_SHARE' | 'INSTRUMENT_TYPE_CURRENCY' | 'INSTRUMENT_TYPE_ETF' | 'INSTRUMENT_TYPE_FUTURES' | 'INSTRUMENT_TYPE_SP' | 'INSTRUMENT_TYPE_OPTION' | 'INSTRUMENT_TYPE_CLEARING_CERTIFICATE'; 'positionUid'?: string; 'payment'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'commission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yield'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yieldRelative'?: { 'units'?: string; 'nano'?: number }; 'accruedInt'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'quantityRest'?: string; 'quantityDone'?: string; 'cancelDateTime'?: string; 'cancelReason'?: string; 'tradesInfo'?: { 'trades'?: Array<{ 'num'?: string; 'date'?: string; 'quantity'?: string; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yield'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'yieldRelative'?: { 'units'?: string; 'nano'?: number } }> }; 'assetUid'?: string }> }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxOperationsByCursordefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxOperationsByCursorResponses =
  SandboxServiceGetSandboxOperationsByCursorResponseOK
  | SandboxServiceGetSandboxOperationsByCursordefaultResponse

export type SandboxServiceGetSandboxOrderStateRequest = {
  'accountId': string;
  'orderId': string;
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxOrderStateResponseOK = { 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'stages'?: Array<{ 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'tradeId'?: string }>; 'serviceCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'currency'?: string; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'orderDate'?: string; 'instrumentUid'?: string; 'orderRequestId'?: string }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxOrderStatedefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxOrderStateResponses =
  SandboxServiceGetSandboxOrderStateResponseOK
  | SandboxServiceGetSandboxOrderStatedefaultResponse

export type SandboxServiceGetSandboxOrdersRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxOrdersResponseOK = { 'orders'?: Array<{ 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'stages'?: Array<{ 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantity'?: string; 'tradeId'?: string }>; 'serviceCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'currency'?: string; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'orderDate'?: string; 'instrumentUid'?: string; 'orderRequestId'?: string }> }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxOrdersdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxOrdersResponses =
  SandboxServiceGetSandboxOrdersResponseOK
  | SandboxServiceGetSandboxOrdersdefaultResponse

export type SandboxServiceGetSandboxPortfolioRequest = {
  'accountId': string;
  'currency': 'RUB' | 'USD' | 'EUR';
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxPortfolioResponseOK = { 'totalAmountShares'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountBonds'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountEtf'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountCurrencies'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountFutures'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'positions'?: Array<{ 'figi'?: string; 'instrumentType'?: string; 'quantity'?: { 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'currentNkd'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPricePt'?: { 'units'?: string; 'nano'?: number }; 'currentPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPriceFifo'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'quantityLots'?: { 'units'?: string; 'nano'?: number }; 'blocked'?: boolean; 'blockedLots'?: { 'units'?: string; 'nano'?: number }; 'positionUid'?: string; 'instrumentUid'?: string; 'varMargin'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYieldFifo'?: { 'units'?: string; 'nano'?: number } }>; 'accountId'?: string; 'totalAmountOptions'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountSp'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalAmountPortfolio'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'virtualPositions'?: Array<{ 'positionUid'?: string; 'instrumentUid'?: string; 'figi'?: string; 'instrumentType'?: string; 'quantity'?: { 'units'?: string; 'nano'?: number }; 'averagePositionPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'expectedYield'?: { 'units'?: string; 'nano'?: number }; 'expectedYieldFifo'?: { 'units'?: string; 'nano'?: number }; 'expireDate'?: string; 'currentPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'averagePositionPriceFifo'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }> }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxPortfoliodefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxPortfolioResponses =
  SandboxServiceGetSandboxPortfolioResponseOK
  | SandboxServiceGetSandboxPortfoliodefaultResponse

export type SandboxServiceGetSandboxPositionsRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxPositionsResponseOK = { 'money'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'blocked'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'securities'?: Array<{ 'figi'?: string; 'blocked'?: string; 'balance'?: string; 'positionUid'?: string; 'instrumentUid'?: string; 'exchangeBlocked'?: boolean; 'instrumentType'?: string }>; 'limitsLoadingInProgress'?: boolean; 'futures'?: Array<{ 'figi'?: string; 'blocked'?: string; 'balance'?: string; 'positionUid'?: string; 'instrumentUid'?: string }>; 'options'?: Array<{ 'positionUid'?: string; 'instrumentUid'?: string; 'blocked'?: string; 'balance'?: string }> }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxPositionsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxPositionsResponses =
  SandboxServiceGetSandboxPositionsResponseOK
  | SandboxServiceGetSandboxPositionsdefaultResponse

export type SandboxServiceGetSandboxWithdrawLimitsRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type SandboxServiceGetSandboxWithdrawLimitsResponseOK = { 'money'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'blocked'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }>; 'blockedGuarantee'?: Array<{ 'currency'?: string; 'units'?: string; 'nano'?: number }> }
/**
 * An unexpected error response.
 */
export type SandboxServiceGetSandboxWithdrawLimitsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceGetSandboxWithdrawLimitsResponses =
  SandboxServiceGetSandboxWithdrawLimitsResponseOK
  | SandboxServiceGetSandboxWithdrawLimitsdefaultResponse

export type SandboxServiceOpenSandboxAccountRequest = {
  
}

/**
 * A successful response.
 */
export type SandboxServiceOpenSandboxAccountResponseOK = { 'accountId'?: string }
/**
 * An unexpected error response.
 */
export type SandboxServiceOpenSandboxAccountdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceOpenSandboxAccountResponses =
  SandboxServiceOpenSandboxAccountResponseOK
  | SandboxServiceOpenSandboxAccountdefaultResponse

export type SandboxServicePostSandboxOrderRequest = {
  'figi': string;
  'quantity': string;
  'price': { 'units'?: string; 'nano'?: number };
  'direction': 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL';
  'accountId': string;
  'orderType': 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE';
  'orderId': string;
  'instrumentId': string;
}

/**
 * A successful response.
 */
export type SandboxServicePostSandboxOrderResponseOK = { 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'aciValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'message'?: string; 'initialOrderPricePt'?: { 'units'?: string; 'nano'?: number }; 'instrumentUid'?: string }
/**
 * An unexpected error response.
 */
export type SandboxServicePostSandboxOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServicePostSandboxOrderResponses =
  SandboxServicePostSandboxOrderResponseOK
  | SandboxServicePostSandboxOrderdefaultResponse

export type SandboxServiceReplaceSandboxOrderRequest = {
  'accountId': string;
  'orderId': string;
  'idempotencyKey': string;
  'quantity': string;
  'price': { 'units'?: string; 'nano'?: number };
  'priceType': 'PRICE_TYPE_UNSPECIFIED' | 'PRICE_TYPE_POINT' | 'PRICE_TYPE_CURRENCY';
}

/**
 * A successful response.
 */
export type SandboxServiceReplaceSandboxOrderResponseOK = { 'orderId'?: string; 'executionReportStatus'?: 'EXECUTION_REPORT_STATUS_UNSPECIFIED' | 'EXECUTION_REPORT_STATUS_FILL' | 'EXECUTION_REPORT_STATUS_REJECTED' | 'EXECUTION_REPORT_STATUS_CANCELLED' | 'EXECUTION_REPORT_STATUS_NEW' | 'EXECUTION_REPORT_STATUS_PARTIALLYFILL'; 'lotsRequested'?: string; 'lotsExecuted'?: string; 'initialOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedOrderPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'totalOrderAmount'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'initialCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'executedCommission'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'aciValue'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'figi'?: string; 'direction'?: 'ORDER_DIRECTION_UNSPECIFIED' | 'ORDER_DIRECTION_BUY' | 'ORDER_DIRECTION_SELL'; 'initialSecurityPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'orderType'?: 'ORDER_TYPE_UNSPECIFIED' | 'ORDER_TYPE_LIMIT' | 'ORDER_TYPE_MARKET' | 'ORDER_TYPE_BESTPRICE'; 'message'?: string; 'initialOrderPricePt'?: { 'units'?: string; 'nano'?: number }; 'instrumentUid'?: string }
/**
 * An unexpected error response.
 */
export type SandboxServiceReplaceSandboxOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceReplaceSandboxOrderResponses =
  SandboxServiceReplaceSandboxOrderResponseOK
  | SandboxServiceReplaceSandboxOrderdefaultResponse

export type SandboxServiceSandboxPayInRequest = {
  'accountId': string;
  'amount': { 'currency'?: string; 'units'?: string; 'nano'?: number };
}

/**
 * A successful response.
 */
export type SandboxServiceSandboxPayInResponseOK = { 'balance'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }
/**
 * An unexpected error response.
 */
export type SandboxServiceSandboxPayIndefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type SandboxServiceSandboxPayInResponses =
  SandboxServiceSandboxPayInResponseOK
  | SandboxServiceSandboxPayIndefaultResponse

export type StopOrdersServiceCancelStopOrderRequest = {
  'accountId': string;
  'stopOrderId': string;
}

/**
 * A successful response.
 */
export type StopOrdersServiceCancelStopOrderResponseOK = { 'time'?: string }
/**
 * An unexpected error response.
 */
export type StopOrdersServiceCancelStopOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type StopOrdersServiceCancelStopOrderResponses =
  StopOrdersServiceCancelStopOrderResponseOK
  | StopOrdersServiceCancelStopOrderdefaultResponse

export type StopOrdersServiceGetStopOrdersRequest = {
  'accountId': string;
}

/**
 * A successful response.
 */
export type StopOrdersServiceGetStopOrdersResponseOK = { 'stopOrders'?: Array<{ 'stopOrderId'?: string; 'lotsRequested'?: string; 'figi'?: string; 'direction'?: 'STOP_ORDER_DIRECTION_UNSPECIFIED' | 'STOP_ORDER_DIRECTION_BUY' | 'STOP_ORDER_DIRECTION_SELL'; 'currency'?: string; 'orderType'?: 'STOP_ORDER_TYPE_UNSPECIFIED' | 'STOP_ORDER_TYPE_TAKE_PROFIT' | 'STOP_ORDER_TYPE_STOP_LOSS' | 'STOP_ORDER_TYPE_STOP_LIMIT'; 'createDate'?: string; 'activationDateTime'?: string; 'expirationTime'?: string; 'price'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'stopPrice'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'instrumentUid'?: string }> }
/**
 * An unexpected error response.
 */
export type StopOrdersServiceGetStopOrdersdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type StopOrdersServiceGetStopOrdersResponses =
  StopOrdersServiceGetStopOrdersResponseOK
  | StopOrdersServiceGetStopOrdersdefaultResponse

export type StopOrdersServicePostStopOrderRequest = {
  'figi': string;
  'quantity': string;
  'price': { 'units'?: string; 'nano'?: number };
  'stopPrice': { 'units'?: string; 'nano'?: number };
  'direction': 'STOP_ORDER_DIRECTION_UNSPECIFIED' | 'STOP_ORDER_DIRECTION_BUY' | 'STOP_ORDER_DIRECTION_SELL';
  'accountId': string;
  'expirationType': 'STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED' | 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL' | 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE';
  'stopOrderType': 'STOP_ORDER_TYPE_UNSPECIFIED' | 'STOP_ORDER_TYPE_TAKE_PROFIT' | 'STOP_ORDER_TYPE_STOP_LOSS' | 'STOP_ORDER_TYPE_STOP_LIMIT';
  'expireDate': string | Date;
  'instrumentId': string;
}

/**
 * A successful response.
 */
export type StopOrdersServicePostStopOrderResponseOK = { 'stopOrderId'?: string }
/**
 * An unexpected error response.
 */
export type StopOrdersServicePostStopOrderdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type StopOrdersServicePostStopOrderResponses =
  StopOrdersServicePostStopOrderResponseOK
  | StopOrdersServicePostStopOrderdefaultResponse

export type UsersServiceGetAccountsRequest = {
  
}

/**
 * A successful response.
 */
export type UsersServiceGetAccountsResponseOK = { 'accounts'?: Array<{ 'id'?: string; 'type'?: 'ACCOUNT_TYPE_UNSPECIFIED' | 'ACCOUNT_TYPE_TINKOFF' | 'ACCOUNT_TYPE_TINKOFF_IIS' | 'ACCOUNT_TYPE_INVEST_BOX'; 'name'?: string; 'status'?: 'ACCOUNT_STATUS_UNSPECIFIED' | 'ACCOUNT_STATUS_NEW' | 'ACCOUNT_STATUS_OPEN' | 'ACCOUNT_STATUS_CLOSED'; 'openedDate'?: string; 'closedDate'?: string; 'accessLevel'?: 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED' | 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS' | 'ACCOUNT_ACCESS_LEVEL_READ_ONLY' | 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS' }> }
/**
 * An unexpected error response.
 */
export type UsersServiceGetAccountsdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type UsersServiceGetAccountsResponses =
  UsersServiceGetAccountsResponseOK
  | UsersServiceGetAccountsdefaultResponse

export type UsersServiceGetInfoRequest = {
  
}

/**
 * A successful response.
 */
export type UsersServiceGetInfoResponseOK = { 'premStatus'?: boolean; 'qualStatus'?: boolean; 'qualifiedForWorkWith'?: Array<string>; 'tariff'?: string }
/**
 * An unexpected error response.
 */
export type UsersServiceGetInfodefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type UsersServiceGetInfoResponses =
  UsersServiceGetInfoResponseOK
  | UsersServiceGetInfodefaultResponse

export type UsersServiceGetMarginAttributesRequest = {
  /**
   * Идентификатор счёта пользователя.
   */
  'accountId': string;
}

/**
 * A successful response.
 */
export type UsersServiceGetMarginAttributesResponseOK = { 'liquidPortfolio'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'startingMargin'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'minimalMargin'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'fundsSufficiencyLevel'?: { 'units'?: string; 'nano'?: number }; 'amountOfMissingFunds'?: { 'currency'?: string; 'units'?: string; 'nano'?: number }; 'correctedMargin'?: { 'currency'?: string; 'units'?: string; 'nano'?: number } }
/**
 * An unexpected error response.
 */
export type UsersServiceGetMarginAttributesdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type UsersServiceGetMarginAttributesResponses =
  UsersServiceGetMarginAttributesResponseOK
  | UsersServiceGetMarginAttributesdefaultResponse

export type UsersServiceGetUserTariffRequest = {
  
}

/**
 * A successful response.
 */
export type UsersServiceGetUserTariffResponseOK = { 'unaryLimits'?: Array<{ 'limitPerMinute'?: number; 'methods'?: Array<string> }>; 'streamLimits'?: Array<{ 'limit'?: number; 'streams'?: Array<string>; 'open'?: number }> }
/**
 * An unexpected error response.
 */
export type UsersServiceGetUserTariffdefaultResponse = { 'code'?: number; 'message'?: string; 'details'?: Array<{ 'typeUrl'?: string; 'value'?: string }> }
export type UsersServiceGetUserTariffResponses =
  UsersServiceGetUserTariffResponseOK
  | UsersServiceGetUserTariffdefaultResponse



export interface GeneratedApi {
  setBaseUrl(newUrl: string): void;
  setDefaultHeaders(headers: object): void;
  setDefaultFetchParams(fetchParams: RequestInit): void;
  /**
   * Метод получения облигации по её идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceBondBy(req: InstrumentsServiceBondByRequest): Promise<InstrumentsServiceBondByResponses>;
  /**
   * Метод получения списка облигаций.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceBonds(req: InstrumentsServiceBondsRequest): Promise<InstrumentsServiceBondsResponses>;
  /**
   * Метод получения списка валют.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceCurrencies(req: InstrumentsServiceCurrenciesRequest): Promise<InstrumentsServiceCurrenciesResponses>;
  /**
   * Метод получения валюты по её идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceCurrencyBy(req: InstrumentsServiceCurrencyByRequest): Promise<InstrumentsServiceCurrencyByResponses>;
  /**
   * Метод редактирования списка избранных инструментов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceEditFavorites(req: InstrumentsServiceEditFavoritesRequest): Promise<InstrumentsServiceEditFavoritesResponses>;
  /**
   * Метод получения инвестиционного фонда по его идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceEtfBy(req: InstrumentsServiceEtfByRequest): Promise<InstrumentsServiceEtfByResponses>;
  /**
   * Метод получения списка инвестиционных фондов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceEtfs(req: InstrumentsServiceEtfsRequest): Promise<InstrumentsServiceEtfsResponses>;
  /**
   * Метод поиска инструмента.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceFindInstrument(req: InstrumentsServiceFindInstrumentRequest): Promise<InstrumentsServiceFindInstrumentResponses>;
  /**
   * Метод получения фьючерса по его идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceFutureBy(req: InstrumentsServiceFutureByRequest): Promise<InstrumentsServiceFutureByResponses>;
  /**
   * Метод получения списка фьючерсов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceFutures(req: InstrumentsServiceFuturesRequest): Promise<InstrumentsServiceFuturesResponses>;
  /**
   * Метод получения накопленного купонного дохода по облигации.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetAccruedInterests(req: InstrumentsServiceGetAccruedInterestsRequest): Promise<InstrumentsServiceGetAccruedInterestsResponses>;
  /**
   * Метод получения актива по его идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetAssetBy(req: InstrumentsServiceGetAssetByRequest): Promise<InstrumentsServiceGetAssetByResponses>;
  /**
   * Метод получения списка активов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetAssets(req: InstrumentsServiceGetAssetsRequest): Promise<InstrumentsServiceGetAssetsResponses>;
  /**
   * Метод получения графика выплат купонов по облигации.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetBondCoupons(req: InstrumentsServiceGetBondCouponsRequest): Promise<InstrumentsServiceGetBondCouponsResponses>;
  /**
   * Метод получения бренда по его идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetBrandBy(req: InstrumentsServiceGetBrandByRequest): Promise<InstrumentsServiceGetBrandByResponses>;
  /**
   * Метод получения списка брендов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetBrands(req: InstrumentsServiceGetBrandsRequest): Promise<InstrumentsServiceGetBrandsResponses>;
  /**
   * Метод получения списка стран.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetCountries(req: InstrumentsServiceGetCountriesRequest): Promise<InstrumentsServiceGetCountriesResponses>;
  /**
   * Метод для получения событий выплаты дивидендов по инструменту.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetDividends(req: InstrumentsServiceGetDividendsRequest): Promise<InstrumentsServiceGetDividendsResponses>;
  /**
   * Метод получения списка избранных инструментов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetFavorites(req: InstrumentsServiceGetFavoritesRequest): Promise<InstrumentsServiceGetFavoritesResponses>;
  /**
   * Метод получения размера гарантийного обеспечения по фьючерсам.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetFuturesMargin(req: InstrumentsServiceGetFuturesMarginRequest): Promise<InstrumentsServiceGetFuturesMarginResponses>;
  /**
   * Метод получения основной информации об инструменте.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceGetInstrumentBy(req: InstrumentsServiceGetInstrumentByRequest): Promise<InstrumentsServiceGetInstrumentByResponses>;
  /**
   * Метод получения опциона по его идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceOptionBy(req: InstrumentsServiceOptionByRequest): Promise<InstrumentsServiceOptionByResponses>;
  /**
   * Deprecated Метод получения списка опционов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceOptions(req: InstrumentsServiceOptionsRequest): Promise<InstrumentsServiceOptionsResponses>;
  /**
   * Метод получения списка опционов.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceOptionsBy(req: InstrumentsServiceOptionsByRequest): Promise<InstrumentsServiceOptionsByResponses>;
  /**
   * Метод получения акции по её идентификатору.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceShareBy(req: InstrumentsServiceShareByRequest): Promise<InstrumentsServiceShareByResponses>;
  /**
   * Метод получения списка акций.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceShares(req: InstrumentsServiceSharesRequest): Promise<InstrumentsServiceSharesResponses>;
  /**
   * Метод получения расписания торгов торговых площадок.
   * @param req - request parameters object
   * @returns the API response body
   */
  instrumentsServiceTradingSchedules(req: InstrumentsServiceTradingSchedulesRequest): Promise<InstrumentsServiceTradingSchedulesResponses>;
  /**
   * Метод запроса исторических свечей по инструменту.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataServiceGetCandles(req: MarketDataServiceGetCandlesRequest): Promise<MarketDataServiceGetCandlesResponses>;
  /**
   * Метод запроса цен закрытия торговой сессии по инструментам.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataServiceGetClosePrices(req: MarketDataServiceGetClosePricesRequest): Promise<MarketDataServiceGetClosePricesResponses>;
  /**
   * Метод запроса цен последних сделок по инструментам.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataServiceGetLastPrices(req: MarketDataServiceGetLastPricesRequest): Promise<MarketDataServiceGetLastPricesResponses>;
  /**
   * Метод запроса обезличенных сделок за последний час.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataServiceGetLastTrades(req: MarketDataServiceGetLastTradesRequest): Promise<MarketDataServiceGetLastTradesResponses>;
  /**
   * Метод получения стакана по инструменту.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataServiceGetOrderBook(req: MarketDataServiceGetOrderBookRequest): Promise<MarketDataServiceGetOrderBookResponses>;
  /**
   * Метод запроса статуса торгов по инструментам.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataServiceGetTradingStatus(req: MarketDataServiceGetTradingStatusRequest): Promise<MarketDataServiceGetTradingStatusResponses>;
  /**
   * Метод запроса статуса торгов по инструментам.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataServiceGetTradingStatuses(req: MarketDataServiceGetTradingStatusesRequest): Promise<MarketDataServiceGetTradingStatusesResponses>;
  /**
   * Server-side стрим предоставления биржевой информации.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataStreamServiceMarketDataServerSideStream(req: MarketDataStreamServiceMarketDataServerSideStreamRequest): Promise<MarketDataStreamServiceMarketDataServerSideStreamResponses>;
  /**
   * Bi-directional стрим предоставления биржевой информации.
   * @param req - request parameters object
   * @returns the API response body
   */
  marketDataStreamServiceMarketDataStream(req: MarketDataStreamServiceMarketDataStreamRequest): Promise<MarketDataStreamServiceMarketDataStreamResponses>;
  /**
   * Метод получения брокерского отчёта.
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsServiceGetBrokerReport(req: OperationsServiceGetBrokerReportRequest): Promise<OperationsServiceGetBrokerReportResponses>;
  /**
   * Метод получения отчёта "Справка о доходах за пределами РФ".
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsServiceGetDividendsForeignIssuer(req: OperationsServiceGetDividendsForeignIssuerRequest): Promise<OperationsServiceGetDividendsForeignIssuerResponses>;
  /**
   * Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
   * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsServiceGetOperations(req: OperationsServiceGetOperationsRequest): Promise<OperationsServiceGetOperationsResponses>;
  /**
   * Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
   * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsServiceGetOperationsByCursor(req: OperationsServiceGetOperationsByCursorRequest): Promise<OperationsServiceGetOperationsByCursorResponses>;
  /**
   * Метод получения портфеля по счёту.
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsServiceGetPortfolio(req: OperationsServiceGetPortfolioRequest): Promise<OperationsServiceGetPortfolioResponses>;
  /**
   * Метод получения списка позиций по счёту.
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsServiceGetPositions(req: OperationsServiceGetPositionsRequest): Promise<OperationsServiceGetPositionsResponses>;
  /**
   * Метод получения доступного остатка для вывода средств.
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsServiceGetWithdrawLimits(req: OperationsServiceGetWithdrawLimitsRequest): Promise<OperationsServiceGetWithdrawLimitsResponses>;
  /**
   * Server-side stream обновлений портфеля
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsStreamServicePortfolioStream(req: OperationsStreamServicePortfolioStreamRequest): Promise<OperationsStreamServicePortfolioStreamResponses>;
  /**
   * Server-side stream обновлений информации по изменению позиций портфеля
   * @param req - request parameters object
   * @returns the API response body
   */
  operationsStreamServicePositionsStream(req: OperationsStreamServicePositionsStreamRequest): Promise<OperationsStreamServicePositionsStreamResponses>;
  /**
   * Метод отмены биржевой заявки.
   * @param req - request parameters object
   * @returns the API response body
   */
  ordersServiceCancelOrder(req: OrdersServiceCancelOrderRequest): Promise<OrdersServiceCancelOrderResponses>;
  /**
   * Метод получения статуса торгового поручения.
   * @param req - request parameters object
   * @returns the API response body
   */
  ordersServiceGetOrderState(req: OrdersServiceGetOrderStateRequest): Promise<OrdersServiceGetOrderStateResponses>;
  /**
   * Метод получения списка активных заявок по счёту.
   * @param req - request parameters object
   * @returns the API response body
   */
  ordersServiceGetOrders(req: OrdersServiceGetOrdersRequest): Promise<OrdersServiceGetOrdersResponses>;
  /**
   * Метод выставления заявки.
   * @param req - request parameters object
   * @returns the API response body
   */
  ordersServicePostOrder(req: OrdersServicePostOrderRequest): Promise<OrdersServicePostOrderResponses>;
  /**
   * Метод изменения выставленной заявки.
   * @param req - request parameters object
   * @returns the API response body
   */
  ordersServiceReplaceOrder(req: OrdersServiceReplaceOrderRequest): Promise<OrdersServiceReplaceOrderResponses>;
  /**
   * Stream сделок пользователя
   * @param req - request parameters object
   * @returns the API response body
   */
  ordersStreamServiceTradesStream(req: OrdersStreamServiceTradesStreamRequest): Promise<OrdersStreamServiceTradesStreamResponses>;
  /**
   * Метод отмены торгового поручения в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceCancelSandboxOrder(req: SandboxServiceCancelSandboxOrderRequest): Promise<SandboxServiceCancelSandboxOrderResponses>;
  /**
   * Метод закрытия счёта в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceCloseSandboxAccount(req: SandboxServiceCloseSandboxAccountRequest): Promise<SandboxServiceCloseSandboxAccountResponses>;
  /**
   * Метод получения счетов в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxAccounts(req: SandboxServiceGetSandboxAccountsRequest): Promise<SandboxServiceGetSandboxAccountsResponses>;
  /**
   * Метод получения операций в песочнице по номеру счёта.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxOperations(req: SandboxServiceGetSandboxOperationsRequest): Promise<SandboxServiceGetSandboxOperationsResponses>;
  /**
   * Метод получения операций в песочнице по номеру счета с пагинацией.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxOperationsByCursor(req: SandboxServiceGetSandboxOperationsByCursorRequest): Promise<SandboxServiceGetSandboxOperationsByCursorResponses>;
  /**
   * Метод получения статуса заявки в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxOrderState(req: SandboxServiceGetSandboxOrderStateRequest): Promise<SandboxServiceGetSandboxOrderStateResponses>;
  /**
   * Метод получения списка активных заявок по счёту в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxOrders(req: SandboxServiceGetSandboxOrdersRequest): Promise<SandboxServiceGetSandboxOrdersResponses>;
  /**
   * Метод получения портфолио в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxPortfolio(req: SandboxServiceGetSandboxPortfolioRequest): Promise<SandboxServiceGetSandboxPortfolioResponses>;
  /**
   * Метод получения позиций по виртуальному счёту песочницы.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxPositions(req: SandboxServiceGetSandboxPositionsRequest): Promise<SandboxServiceGetSandboxPositionsResponses>;
  /**
   * Метод получения доступного остатка для вывода средств в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceGetSandboxWithdrawLimits(req: SandboxServiceGetSandboxWithdrawLimitsRequest): Promise<SandboxServiceGetSandboxWithdrawLimitsResponses>;
  /**
   * Метод регистрации счёта в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceOpenSandboxAccount(req: SandboxServiceOpenSandboxAccountRequest): Promise<SandboxServiceOpenSandboxAccountResponses>;
  /**
   * Метод выставления торгового поручения в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServicePostSandboxOrder(req: SandboxServicePostSandboxOrderRequest): Promise<SandboxServicePostSandboxOrderResponses>;
  /**
   * Метод изменения выставленной заявки.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceReplaceSandboxOrder(req: SandboxServiceReplaceSandboxOrderRequest): Promise<SandboxServiceReplaceSandboxOrderResponses>;
  /**
   * Метод пополнения счёта в песочнице.
   * @param req - request parameters object
   * @returns the API response body
   */
  sandboxServiceSandboxPayIn(req: SandboxServiceSandboxPayInRequest): Promise<SandboxServiceSandboxPayInResponses>;
  /**
   * Метод отмены стоп-заявки.
   * @param req - request parameters object
   * @returns the API response body
   */
  stopOrdersServiceCancelStopOrder(req: StopOrdersServiceCancelStopOrderRequest): Promise<StopOrdersServiceCancelStopOrderResponses>;
  /**
   * Метод получения списка активных стоп заявок по счёту.
   * @param req - request parameters object
   * @returns the API response body
   */
  stopOrdersServiceGetStopOrders(req: StopOrdersServiceGetStopOrdersRequest): Promise<StopOrdersServiceGetStopOrdersResponses>;
  /**
   * Метод выставления стоп-заявки.
   * @param req - request parameters object
   * @returns the API response body
   */
  stopOrdersServicePostStopOrder(req: StopOrdersServicePostStopOrderRequest): Promise<StopOrdersServicePostStopOrderResponses>;
  /**
   * Метод получения счетов пользователя.
   * @param req - request parameters object
   * @returns the API response body
   */
  usersServiceGetAccounts(req: UsersServiceGetAccountsRequest): Promise<UsersServiceGetAccountsResponses>;
  /**
   * Метод получения информации о пользователе.
   * @param req - request parameters object
   * @returns the API response body
   */
  usersServiceGetInfo(req: UsersServiceGetInfoRequest): Promise<UsersServiceGetInfoResponses>;
  /**
   * Расчёт маржинальных показателей по счёту.
   * @param req - request parameters object
   * @returns the API response body
   */
  usersServiceGetMarginAttributes(req: UsersServiceGetMarginAttributesRequest): Promise<UsersServiceGetMarginAttributesResponses>;
  /**
   * Запрос тарифа пользователя.
   * @param req - request parameters object
   * @returns the API response body
   */
  usersServiceGetUserTariff(req: UsersServiceGetUserTariffRequest): Promise<UsersServiceGetUserTariffResponses>;
}
type PlatformaticFrontendClient = Omit<GeneratedApi, 'setBaseUrl'>
type BuildOptions = {
  headers?: object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient
