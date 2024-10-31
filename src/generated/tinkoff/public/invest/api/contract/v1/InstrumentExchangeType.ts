// Original file: investAPI/src/docs/contracts/instruments.proto

export const InstrumentExchangeType = {
  INSTRUMENT_EXCHANGE_UNSPECIFIED: 'INSTRUMENT_EXCHANGE_UNSPECIFIED',
  INSTRUMENT_EXCHANGE_DEALER: 'INSTRUMENT_EXCHANGE_DEALER',
} as const;

export type InstrumentExchangeType =
  | 'INSTRUMENT_EXCHANGE_UNSPECIFIED'
  | 0
  | 'INSTRUMENT_EXCHANGE_DEALER'
  | 1

export type InstrumentExchangeType__Output = typeof InstrumentExchangeType[keyof typeof InstrumentExchangeType]
