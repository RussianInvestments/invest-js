// Original file: investAPI/src/docs/contracts/users.proto

export const AccountType = {
  ACCOUNT_TYPE_UNSPECIFIED: 'ACCOUNT_TYPE_UNSPECIFIED',
  ACCOUNT_TYPE_TINKOFF: 'ACCOUNT_TYPE_TINKOFF',
  ACCOUNT_TYPE_TINKOFF_IIS: 'ACCOUNT_TYPE_TINKOFF_IIS',
  ACCOUNT_TYPE_INVEST_BOX: 'ACCOUNT_TYPE_INVEST_BOX',
  ACCOUNT_TYPE_INVEST_FUND: 'ACCOUNT_TYPE_INVEST_FUND',
} as const;

export type AccountType =
  | 'ACCOUNT_TYPE_UNSPECIFIED'
  | 0
  | 'ACCOUNT_TYPE_TINKOFF'
  | 1
  | 'ACCOUNT_TYPE_TINKOFF_IIS'
  | 2
  | 'ACCOUNT_TYPE_INVEST_BOX'
  | 3
  | 'ACCOUNT_TYPE_INVEST_FUND'
  | 4

export type AccountType__Output = typeof AccountType[keyof typeof AccountType]
