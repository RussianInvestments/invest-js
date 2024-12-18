// Original file: investAPI/src/docs/contracts/users.proto

export const AccessLevel = {
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED: 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED',
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS: 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS',
  ACCOUNT_ACCESS_LEVEL_READ_ONLY: 'ACCOUNT_ACCESS_LEVEL_READ_ONLY',
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS: 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS',
} as const;

export type AccessLevel =
  | 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED'
  | 0
  | 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS'
  | 1
  | 'ACCOUNT_ACCESS_LEVEL_READ_ONLY'
  | 2
  | 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS'
  | 3

export type AccessLevel__Output = typeof AccessLevel[keyof typeof AccessLevel]
