// Original file: investAPI/src/docs/contracts/instruments.proto

export const OptionPaymentType = {
  OPTION_PAYMENT_TYPE_UNSPECIFIED: 'OPTION_PAYMENT_TYPE_UNSPECIFIED',
  OPTION_PAYMENT_TYPE_PREMIUM: 'OPTION_PAYMENT_TYPE_PREMIUM',
  OPTION_PAYMENT_TYPE_MARGINAL: 'OPTION_PAYMENT_TYPE_MARGINAL',
} as const;

export type OptionPaymentType =
  | 'OPTION_PAYMENT_TYPE_UNSPECIFIED'
  | 0
  | 'OPTION_PAYMENT_TYPE_PREMIUM'
  | 1
  | 'OPTION_PAYMENT_TYPE_MARGINAL'
  | 2

export type OptionPaymentType__Output = typeof OptionPaymentType[keyof typeof OptionPaymentType]
