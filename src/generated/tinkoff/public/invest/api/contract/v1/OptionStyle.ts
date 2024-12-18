// Original file: investAPI/src/docs/contracts/instruments.proto

export const OptionStyle = {
  OPTION_STYLE_UNSPECIFIED: 'OPTION_STYLE_UNSPECIFIED',
  OPTION_STYLE_AMERICAN: 'OPTION_STYLE_AMERICAN',
  OPTION_STYLE_EUROPEAN: 'OPTION_STYLE_EUROPEAN',
} as const;

export type OptionStyle =
  | 'OPTION_STYLE_UNSPECIFIED'
  | 0
  | 'OPTION_STYLE_AMERICAN'
  | 1
  | 'OPTION_STYLE_EUROPEAN'
  | 2

export type OptionStyle__Output = typeof OptionStyle[keyof typeof OptionStyle]
