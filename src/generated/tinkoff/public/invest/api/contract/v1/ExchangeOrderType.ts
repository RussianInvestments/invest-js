// Original file: investAPI/src/docs/contracts/stoporders.proto

export const ExchangeOrderType = {
  EXCHANGE_ORDER_TYPE_UNSPECIFIED: 'EXCHANGE_ORDER_TYPE_UNSPECIFIED',
  EXCHANGE_ORDER_TYPE_MARKET: 'EXCHANGE_ORDER_TYPE_MARKET',
  EXCHANGE_ORDER_TYPE_LIMIT: 'EXCHANGE_ORDER_TYPE_LIMIT',
} as const;

export type ExchangeOrderType =
  | 'EXCHANGE_ORDER_TYPE_UNSPECIFIED'
  | 0
  | 'EXCHANGE_ORDER_TYPE_MARKET'
  | 1
  | 'EXCHANGE_ORDER_TYPE_LIMIT'
  | 2

export type ExchangeOrderType__Output = typeof ExchangeOrderType[keyof typeof ExchangeOrderType]
