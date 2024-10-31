// Original file: investAPI/src/docs/contracts/signals.proto

export const StrategyType = {
  STRATEGY_TYPE_UNSPECIFIED: 'STRATEGY_TYPE_UNSPECIFIED',
  STRATEGY_TYPE_TECHNICAL: 'STRATEGY_TYPE_TECHNICAL',
  STRATEGY_TYPE_FUNDAMENTAL: 'STRATEGY_TYPE_FUNDAMENTAL',
} as const;

export type StrategyType =
  | 'STRATEGY_TYPE_UNSPECIFIED'
  | 0
  | 'STRATEGY_TYPE_TECHNICAL'
  | 1
  | 'STRATEGY_TYPE_FUNDAMENTAL'
  | 2

export type StrategyType__Output = typeof StrategyType[keyof typeof StrategyType]
