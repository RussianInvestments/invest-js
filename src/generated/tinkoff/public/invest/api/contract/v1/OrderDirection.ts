// Original file: investAPI/src/docs/contracts/orders.proto

export const OrderDirection = {
  ORDER_DIRECTION_UNSPECIFIED: 'ORDER_DIRECTION_UNSPECIFIED',
  ORDER_DIRECTION_BUY: 'ORDER_DIRECTION_BUY',
  ORDER_DIRECTION_SELL: 'ORDER_DIRECTION_SELL',
} as const;

export type OrderDirection =
  | 'ORDER_DIRECTION_UNSPECIFIED'
  | 0
  | 'ORDER_DIRECTION_BUY'
  | 1
  | 'ORDER_DIRECTION_SELL'
  | 2

export type OrderDirection__Output = typeof OrderDirection[keyof typeof OrderDirection]
