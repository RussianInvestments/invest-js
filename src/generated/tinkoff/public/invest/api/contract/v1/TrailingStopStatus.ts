// Original file: investAPI/src/docs/contracts/stoporders.proto

export const TrailingStopStatus = {
  TRAILING_STOP_UNSPECIFIED: 'TRAILING_STOP_UNSPECIFIED',
  TRAILING_STOP_ACTIVE: 'TRAILING_STOP_ACTIVE',
  TRAILING_STOP_ACTIVATED: 'TRAILING_STOP_ACTIVATED',
} as const;

export type TrailingStopStatus =
  | 'TRAILING_STOP_UNSPECIFIED'
  | 0
  | 'TRAILING_STOP_ACTIVE'
  | 1
  | 'TRAILING_STOP_ACTIVATED'
  | 2

export type TrailingStopStatus__Output = typeof TrailingStopStatus[keyof typeof TrailingStopStatus]
