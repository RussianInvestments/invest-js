// Original file: investAPI/src/docs/contracts/stoporders.proto

export const StopOrderExpirationType = {
  STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED: 'STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED',
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL: 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL',
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE: 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE',
} as const;

export type StopOrderExpirationType =
  | 'STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED'
  | 0
  | 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL'
  | 1
  | 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE'
  | 2

export type StopOrderExpirationType__Output = typeof StopOrderExpirationType[keyof typeof StopOrderExpirationType]
