// Original file: investAPI/src/docs/contracts/common.proto

export const ResultSubscriptionStatus = {
  RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED: 'RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED',
  RESULT_SUBSCRIPTION_STATUS_OK: 'RESULT_SUBSCRIPTION_STATUS_OK',
  RESULT_SUBSCRIPTION_STATUS_ERROR: 'RESULT_SUBSCRIPTION_STATUS_ERROR',
} as const;

export type ResultSubscriptionStatus =
  | 'RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED'
  | 0
  | 'RESULT_SUBSCRIPTION_STATUS_OK'
  | 1
  | 'RESULT_SUBSCRIPTION_STATUS_ERROR'
  | 13

export type ResultSubscriptionStatus__Output = typeof ResultSubscriptionStatus[keyof typeof ResultSubscriptionStatus]
