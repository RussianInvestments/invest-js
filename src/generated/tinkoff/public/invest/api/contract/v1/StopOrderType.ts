// Original file: investAPI/src/docs/contracts/stoporders.proto

export const StopOrderType = {
  STOP_ORDER_TYPE_UNSPECIFIED: 'STOP_ORDER_TYPE_UNSPECIFIED',
  STOP_ORDER_TYPE_TAKE_PROFIT: 'STOP_ORDER_TYPE_TAKE_PROFIT',
  STOP_ORDER_TYPE_STOP_LOSS: 'STOP_ORDER_TYPE_STOP_LOSS',
  STOP_ORDER_TYPE_STOP_LIMIT: 'STOP_ORDER_TYPE_STOP_LIMIT',
} as const;

export type StopOrderType =
  | 'STOP_ORDER_TYPE_UNSPECIFIED'
  | 0
  | 'STOP_ORDER_TYPE_TAKE_PROFIT'
  | 1
  | 'STOP_ORDER_TYPE_STOP_LOSS'
  | 2
  | 'STOP_ORDER_TYPE_STOP_LIMIT'
  | 3

export type StopOrderType__Output = typeof StopOrderType[keyof typeof StopOrderType]
