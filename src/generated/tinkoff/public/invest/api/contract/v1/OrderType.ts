// Original file: investAPI/src/docs/contracts/orders.proto

export const OrderType = {
  ORDER_TYPE_UNSPECIFIED: 'ORDER_TYPE_UNSPECIFIED',
  ORDER_TYPE_LIMIT: 'ORDER_TYPE_LIMIT',
  ORDER_TYPE_MARKET: 'ORDER_TYPE_MARKET',
  ORDER_TYPE_BESTPRICE: 'ORDER_TYPE_BESTPRICE',
} as const;

export type OrderType =
  | 'ORDER_TYPE_UNSPECIFIED'
  | 0
  | 'ORDER_TYPE_LIMIT'
  | 1
  | 'ORDER_TYPE_MARKET'
  | 2
  | 'ORDER_TYPE_BESTPRICE'
  | 3

export type OrderType__Output = typeof OrderType[keyof typeof OrderType]
