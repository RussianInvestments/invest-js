// Original file: investAPI/src/docs/contracts/marketdata.proto

export const OrderBookType = {
  ORDERBOOK_TYPE_UNSPECIFIED: 'ORDERBOOK_TYPE_UNSPECIFIED',
  ORDERBOOK_TYPE_EXCHANGE: 'ORDERBOOK_TYPE_EXCHANGE',
  ORDERBOOK_TYPE_DEALER: 'ORDERBOOK_TYPE_DEALER',
  ORDERBOOK_TYPE_ALL: 'ORDERBOOK_TYPE_ALL',
} as const;

export type OrderBookType =
  | 'ORDERBOOK_TYPE_UNSPECIFIED'
  | 0
  | 'ORDERBOOK_TYPE_EXCHANGE'
  | 1
  | 'ORDERBOOK_TYPE_DEALER'
  | 2
  | 'ORDERBOOK_TYPE_ALL'
  | 3

export type OrderBookType__Output = typeof OrderBookType[keyof typeof OrderBookType]
