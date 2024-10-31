// Original file: investAPI/src/docs/contracts/marketdata.proto

export const LastPriceType = {
  LAST_PRICE_UNSPECIFIED: 'LAST_PRICE_UNSPECIFIED',
  LAST_PRICE_EXCHANGE: 'LAST_PRICE_EXCHANGE',
  LAST_PRICE_DEALER: 'LAST_PRICE_DEALER',
} as const;

export type LastPriceType =
  | 'LAST_PRICE_UNSPECIFIED'
  | 0
  | 'LAST_PRICE_EXCHANGE'
  | 1
  | 'LAST_PRICE_DEALER'
  | 2

export type LastPriceType__Output = typeof LastPriceType[keyof typeof LastPriceType]
