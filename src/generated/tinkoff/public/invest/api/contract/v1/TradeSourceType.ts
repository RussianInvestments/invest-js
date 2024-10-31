// Original file: investAPI/src/docs/contracts/marketdata.proto

export const TradeSourceType = {
  TRADE_SOURCE_UNSPECIFIED: 'TRADE_SOURCE_UNSPECIFIED',
  TRADE_SOURCE_EXCHANGE: 'TRADE_SOURCE_EXCHANGE',
  TRADE_SOURCE_DEALER: 'TRADE_SOURCE_DEALER',
  TRADE_SOURCE_ALL: 'TRADE_SOURCE_ALL',
} as const;

export type TradeSourceType =
  | 'TRADE_SOURCE_UNSPECIFIED'
  | 0
  | 'TRADE_SOURCE_EXCHANGE'
  | 1
  | 'TRADE_SOURCE_DEALER'
  | 2
  | 'TRADE_SOURCE_ALL'
  | 3

export type TradeSourceType__Output = typeof TradeSourceType[keyof typeof TradeSourceType]
