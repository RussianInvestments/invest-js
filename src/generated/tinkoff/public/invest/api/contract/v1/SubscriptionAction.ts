// Original file: investAPI/src/docs/contracts/marketdata.proto

export const SubscriptionAction = {
  SUBSCRIPTION_ACTION_UNSPECIFIED: 'SUBSCRIPTION_ACTION_UNSPECIFIED',
  SUBSCRIPTION_ACTION_SUBSCRIBE: 'SUBSCRIPTION_ACTION_SUBSCRIBE',
  SUBSCRIPTION_ACTION_UNSUBSCRIBE: 'SUBSCRIPTION_ACTION_UNSUBSCRIBE',
} as const;

export type SubscriptionAction =
  | 'SUBSCRIPTION_ACTION_UNSPECIFIED'
  | 0
  | 'SUBSCRIPTION_ACTION_SUBSCRIBE'
  | 1
  | 'SUBSCRIPTION_ACTION_UNSUBSCRIBE'
  | 2

export type SubscriptionAction__Output = typeof SubscriptionAction[keyof typeof SubscriptionAction]
