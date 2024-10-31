// Original file: investAPI/src/docs/contracts/instruments.proto

export const BondType = {
  BOND_TYPE_UNSPECIFIED: 'BOND_TYPE_UNSPECIFIED',
  BOND_TYPE_REPLACED: 'BOND_TYPE_REPLACED',
} as const;

export type BondType =
  | 'BOND_TYPE_UNSPECIFIED'
  | 0
  | 'BOND_TYPE_REPLACED'
  | 1

export type BondType__Output = typeof BondType[keyof typeof BondType]
