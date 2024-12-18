// Original file: investAPI/src/docs/contracts/common.proto

export const InstrumentStatus = {
  INSTRUMENT_STATUS_UNSPECIFIED: 'INSTRUMENT_STATUS_UNSPECIFIED',
  INSTRUMENT_STATUS_BASE: 'INSTRUMENT_STATUS_BASE',
  INSTRUMENT_STATUS_ALL: 'INSTRUMENT_STATUS_ALL',
} as const;

export type InstrumentStatus =
  | 'INSTRUMENT_STATUS_UNSPECIFIED'
  | 0
  | 'INSTRUMENT_STATUS_BASE'
  | 1
  | 'INSTRUMENT_STATUS_ALL'
  | 2

export type InstrumentStatus__Output = typeof InstrumentStatus[keyof typeof InstrumentStatus]
