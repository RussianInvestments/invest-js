// Original file: investAPI/src/docs/contracts/stoporders.proto

export const TrailingValueType = {
  TRAILING_VALUE_UNSPECIFIED: 'TRAILING_VALUE_UNSPECIFIED',
  TRAILING_VALUE_ABSOLUTE: 'TRAILING_VALUE_ABSOLUTE',
  TRAILING_VALUE_RELATIVE: 'TRAILING_VALUE_RELATIVE',
} as const;

export type TrailingValueType =
  | 'TRAILING_VALUE_UNSPECIFIED'
  | 0
  | 'TRAILING_VALUE_ABSOLUTE'
  | 1
  | 'TRAILING_VALUE_RELATIVE'
  | 2

export type TrailingValueType__Output = typeof TrailingValueType[keyof typeof TrailingValueType]
