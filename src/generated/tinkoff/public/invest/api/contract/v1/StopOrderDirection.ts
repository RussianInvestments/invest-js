// Original file: investAPI/src/docs/contracts/stoporders.proto

export const StopOrderDirection = {
  STOP_ORDER_DIRECTION_UNSPECIFIED: 'STOP_ORDER_DIRECTION_UNSPECIFIED',
  STOP_ORDER_DIRECTION_BUY: 'STOP_ORDER_DIRECTION_BUY',
  STOP_ORDER_DIRECTION_SELL: 'STOP_ORDER_DIRECTION_SELL',
} as const;

export type StopOrderDirection =
  | 'STOP_ORDER_DIRECTION_UNSPECIFIED'
  | 0
  | 'STOP_ORDER_DIRECTION_BUY'
  | 1
  | 'STOP_ORDER_DIRECTION_SELL'
  | 2

export type StopOrderDirection__Output = typeof StopOrderDirection[keyof typeof StopOrderDirection]
