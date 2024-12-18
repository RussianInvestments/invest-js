// Original file: investAPI/src/docs/contracts/signals.proto

export const SignalState = {
  SIGNAL_STATE_UNSPECIFIED: 'SIGNAL_STATE_UNSPECIFIED',
  SIGNAL_STATE_ACTIVE: 'SIGNAL_STATE_ACTIVE',
  SIGNAL_STATE_CLOSED: 'SIGNAL_STATE_CLOSED',
  SIGNAL_STATE_ALL: 'SIGNAL_STATE_ALL',
} as const;

export type SignalState =
  | 'SIGNAL_STATE_UNSPECIFIED'
  | 0
  | 'SIGNAL_STATE_ACTIVE'
  | 1
  | 'SIGNAL_STATE_CLOSED'
  | 2
  | 'SIGNAL_STATE_ALL'
  | 3

export type SignalState__Output = typeof SignalState[keyof typeof SignalState]
