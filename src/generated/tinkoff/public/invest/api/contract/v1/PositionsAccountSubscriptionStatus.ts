// Original file: investAPI/src/docs/contracts/operations.proto

export const PositionsAccountSubscriptionStatus = {
  POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED: 'POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED',
  POSITIONS_SUBSCRIPTION_STATUS_SUCCESS: 'POSITIONS_SUBSCRIPTION_STATUS_SUCCESS',
  POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND: 'POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND',
  POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR: 'POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR',
} as const;

export type PositionsAccountSubscriptionStatus =
  | 'POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED'
  | 0
  | 'POSITIONS_SUBSCRIPTION_STATUS_SUCCESS'
  | 1
  | 'POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND'
  | 2
  | 'POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR'
  | 3

export type PositionsAccountSubscriptionStatus__Output = typeof PositionsAccountSubscriptionStatus[keyof typeof PositionsAccountSubscriptionStatus]
