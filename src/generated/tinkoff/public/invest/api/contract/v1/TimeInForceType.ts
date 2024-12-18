// Original file: investAPI/src/docs/contracts/orders.proto

export const TimeInForceType = {
  TIME_IN_FORCE_UNSPECIFIED: 'TIME_IN_FORCE_UNSPECIFIED',
  TIME_IN_FORCE_DAY: 'TIME_IN_FORCE_DAY',
  TIME_IN_FORCE_FILL_AND_KILL: 'TIME_IN_FORCE_FILL_AND_KILL',
  TIME_IN_FORCE_FILL_OR_KILL: 'TIME_IN_FORCE_FILL_OR_KILL',
} as const;

export type TimeInForceType =
  | 'TIME_IN_FORCE_UNSPECIFIED'
  | 0
  | 'TIME_IN_FORCE_DAY'
  | 1
  | 'TIME_IN_FORCE_FILL_AND_KILL'
  | 2
  | 'TIME_IN_FORCE_FILL_OR_KILL'
  | 3

export type TimeInForceType__Output = typeof TimeInForceType[keyof typeof TimeInForceType]
