// Original file: investAPI/src/docs/contracts/marketdata.proto

export const TradeDirection = {
  TRADE_DIRECTION_UNSPECIFIED: 'TRADE_DIRECTION_UNSPECIFIED',
  TRADE_DIRECTION_BUY: 'TRADE_DIRECTION_BUY',
  TRADE_DIRECTION_SELL: 'TRADE_DIRECTION_SELL',
} as const;

export type TradeDirection =
  | 'TRADE_DIRECTION_UNSPECIFIED'
  | 0
  | 'TRADE_DIRECTION_BUY'
  | 1
  | 'TRADE_DIRECTION_SELL'
  | 2

export type TradeDirection__Output = typeof TradeDirection[keyof typeof TradeDirection]
