// Original file: investAPI/src/docs/contracts/instruments.proto

export const OptionSettlementType = {
  OPTION_EXECUTION_TYPE_UNSPECIFIED: 'OPTION_EXECUTION_TYPE_UNSPECIFIED',
  OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY: 'OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY',
  OPTION_EXECUTION_TYPE_CASH_SETTLEMENT: 'OPTION_EXECUTION_TYPE_CASH_SETTLEMENT',
} as const;

export type OptionSettlementType =
  | 'OPTION_EXECUTION_TYPE_UNSPECIFIED'
  | 0
  | 'OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY'
  | 1
  | 'OPTION_EXECUTION_TYPE_CASH_SETTLEMENT'
  | 2

export type OptionSettlementType__Output = typeof OptionSettlementType[keyof typeof OptionSettlementType]
