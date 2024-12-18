// Original file: investAPI/src/docs/contracts/signals.proto

export const SignalDirection = {
  SIGNAL_DIRECTION_UNSPECIFIED: 'SIGNAL_DIRECTION_UNSPECIFIED',
  SIGNAL_DIRECTION_BUY: 'SIGNAL_DIRECTION_BUY',
  SIGNAL_DIRECTION_SELL: 'SIGNAL_DIRECTION_SELL',
} as const;

export type SignalDirection =
  | 'SIGNAL_DIRECTION_UNSPECIFIED'
  | 0
  | 'SIGNAL_DIRECTION_BUY'
  | 1
  | 'SIGNAL_DIRECTION_SELL'
  | 2

export type SignalDirection__Output = typeof SignalDirection[keyof typeof SignalDirection]
