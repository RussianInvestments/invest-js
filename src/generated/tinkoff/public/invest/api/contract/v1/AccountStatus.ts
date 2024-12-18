// Original file: investAPI/src/docs/contracts/users.proto

export const AccountStatus = {
  ACCOUNT_STATUS_UNSPECIFIED: 'ACCOUNT_STATUS_UNSPECIFIED',
  ACCOUNT_STATUS_NEW: 'ACCOUNT_STATUS_NEW',
  ACCOUNT_STATUS_OPEN: 'ACCOUNT_STATUS_OPEN',
  ACCOUNT_STATUS_CLOSED: 'ACCOUNT_STATUS_CLOSED',
  ACCOUNT_STATUS_ALL: 'ACCOUNT_STATUS_ALL',
} as const;

export type AccountStatus =
  | 'ACCOUNT_STATUS_UNSPECIFIED'
  | 0
  | 'ACCOUNT_STATUS_NEW'
  | 1
  | 'ACCOUNT_STATUS_OPEN'
  | 2
  | 'ACCOUNT_STATUS_CLOSED'
  | 3
  | 'ACCOUNT_STATUS_ALL'
  | 4

export type AccountStatus__Output = typeof AccountStatus[keyof typeof AccountStatus]
