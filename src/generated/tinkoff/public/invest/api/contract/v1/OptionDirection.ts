// Original file: investAPI/src/docs/contracts/instruments.proto

export const OptionDirection = {
  OPTION_DIRECTION_UNSPECIFIED: 'OPTION_DIRECTION_UNSPECIFIED',
  OPTION_DIRECTION_PUT: 'OPTION_DIRECTION_PUT',
  OPTION_DIRECTION_CALL: 'OPTION_DIRECTION_CALL',
} as const;

export type OptionDirection =
  | 'OPTION_DIRECTION_UNSPECIFIED'
  | 0
  | 'OPTION_DIRECTION_PUT'
  | 1
  | 'OPTION_DIRECTION_CALL'
  | 2

export type OptionDirection__Output = typeof OptionDirection[keyof typeof OptionDirection]
