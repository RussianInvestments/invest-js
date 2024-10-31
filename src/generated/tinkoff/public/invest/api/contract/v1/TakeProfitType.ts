// Original file: investAPI/src/docs/contracts/stoporders.proto

export const TakeProfitType = {
  TAKE_PROFIT_TYPE_UNSPECIFIED: 'TAKE_PROFIT_TYPE_UNSPECIFIED',
  TAKE_PROFIT_TYPE_REGULAR: 'TAKE_PROFIT_TYPE_REGULAR',
  TAKE_PROFIT_TYPE_TRAILING: 'TAKE_PROFIT_TYPE_TRAILING',
} as const;

export type TakeProfitType =
  | 'TAKE_PROFIT_TYPE_UNSPECIFIED'
  | 0
  | 'TAKE_PROFIT_TYPE_REGULAR'
  | 1
  | 'TAKE_PROFIT_TYPE_TRAILING'
  | 2

export type TakeProfitType__Output = typeof TakeProfitType[keyof typeof TakeProfitType]
