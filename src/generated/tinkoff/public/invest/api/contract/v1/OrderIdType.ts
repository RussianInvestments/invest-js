// Original file: investAPI/src/docs/contracts/orders.proto

export const OrderIdType = {
  ORDER_ID_TYPE_UNSPECIFIED: 'ORDER_ID_TYPE_UNSPECIFIED',
  ORDER_ID_TYPE_EXCHANGE: 'ORDER_ID_TYPE_EXCHANGE',
  ORDER_ID_TYPE_REQUEST: 'ORDER_ID_TYPE_REQUEST',
} as const;

export type OrderIdType =
  | 'ORDER_ID_TYPE_UNSPECIFIED'
  | 0
  | 'ORDER_ID_TYPE_EXCHANGE'
  | 1
  | 'ORDER_ID_TYPE_REQUEST'
  | 2

export type OrderIdType__Output = typeof OrderIdType[keyof typeof OrderIdType]
