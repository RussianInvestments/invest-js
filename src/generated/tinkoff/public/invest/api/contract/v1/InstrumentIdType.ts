// Original file: investAPI/src/docs/contracts/instruments.proto

export const InstrumentIdType = {
  INSTRUMENT_ID_UNSPECIFIED: 'INSTRUMENT_ID_UNSPECIFIED',
  INSTRUMENT_ID_TYPE_FIGI: 'INSTRUMENT_ID_TYPE_FIGI',
  INSTRUMENT_ID_TYPE_TICKER: 'INSTRUMENT_ID_TYPE_TICKER',
  INSTRUMENT_ID_TYPE_UID: 'INSTRUMENT_ID_TYPE_UID',
  INSTRUMENT_ID_TYPE_POSITION_UID: 'INSTRUMENT_ID_TYPE_POSITION_UID',
} as const;

export type InstrumentIdType =
  | 'INSTRUMENT_ID_UNSPECIFIED'
  | 0
  | 'INSTRUMENT_ID_TYPE_FIGI'
  | 1
  | 'INSTRUMENT_ID_TYPE_TICKER'
  | 2
  | 'INSTRUMENT_ID_TYPE_UID'
  | 3
  | 'INSTRUMENT_ID_TYPE_POSITION_UID'
  | 4

export type InstrumentIdType__Output = typeof InstrumentIdType[keyof typeof InstrumentIdType]
