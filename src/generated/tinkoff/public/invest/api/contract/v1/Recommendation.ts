// Original file: investAPI/src/docs/contracts/instruments.proto

export const Recommendation = {
  RECOMMENDATION_UNSPECIFIED: 'RECOMMENDATION_UNSPECIFIED',
  RECOMMENDATION_BUY: 'RECOMMENDATION_BUY',
  RECOMMENDATION_HOLD: 'RECOMMENDATION_HOLD',
  RECOMMENDATION_SELL: 'RECOMMENDATION_SELL',
} as const;

export type Recommendation =
  | 'RECOMMENDATION_UNSPECIFIED'
  | 0
  | 'RECOMMENDATION_BUY'
  | 1
  | 'RECOMMENDATION_HOLD'
  | 2
  | 'RECOMMENDATION_SELL'
  | 3

export type Recommendation__Output = typeof Recommendation[keyof typeof Recommendation]
