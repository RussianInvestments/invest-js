// Original file: investAPI/src/docs/contracts/common.proto

export const PriceType = {
  PRICE_TYPE_UNSPECIFIED: 'PRICE_TYPE_UNSPECIFIED',
  PRICE_TYPE_POINT: 'PRICE_TYPE_POINT',
  PRICE_TYPE_CURRENCY: 'PRICE_TYPE_CURRENCY',
} as const;

export type PriceType =
  | 'PRICE_TYPE_UNSPECIFIED'
  | 0
  | 'PRICE_TYPE_POINT'
  | 1
  | 'PRICE_TYPE_CURRENCY'
  | 2

export type PriceType__Output = typeof PriceType[keyof typeof PriceType]
