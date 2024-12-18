// Original file: investAPI/src/docs/contracts/marketdata.proto

export const CandleSource = {
  CANDLE_SOURCE_UNSPECIFIED: 'CANDLE_SOURCE_UNSPECIFIED',
  CANDLE_SOURCE_EXCHANGE: 'CANDLE_SOURCE_EXCHANGE',
  CANDLE_SOURCE_DEALER_WEEKEND: 'CANDLE_SOURCE_DEALER_WEEKEND',
} as const;

export type CandleSource =
  | 'CANDLE_SOURCE_UNSPECIFIED'
  | 0
  | 'CANDLE_SOURCE_EXCHANGE'
  | 1
  | 'CANDLE_SOURCE_DEALER_WEEKEND'
  | 2

export type CandleSource__Output = typeof CandleSource[keyof typeof CandleSource]
