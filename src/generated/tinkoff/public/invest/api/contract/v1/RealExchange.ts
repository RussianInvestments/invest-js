// Original file: investAPI/src/docs/contracts/instruments.proto

export const RealExchange = {
  REAL_EXCHANGE_UNSPECIFIED: 'REAL_EXCHANGE_UNSPECIFIED',
  REAL_EXCHANGE_MOEX: 'REAL_EXCHANGE_MOEX',
  REAL_EXCHANGE_RTS: 'REAL_EXCHANGE_RTS',
  REAL_EXCHANGE_OTC: 'REAL_EXCHANGE_OTC',
  REAL_EXCHANGE_DEALER: 'REAL_EXCHANGE_DEALER',
} as const;

export type RealExchange =
  | 'REAL_EXCHANGE_UNSPECIFIED'
  | 0
  | 'REAL_EXCHANGE_MOEX'
  | 1
  | 'REAL_EXCHANGE_RTS'
  | 2
  | 'REAL_EXCHANGE_OTC'
  | 3
  | 'REAL_EXCHANGE_DEALER'
  | 4

export type RealExchange__Output = typeof RealExchange[keyof typeof RealExchange]
