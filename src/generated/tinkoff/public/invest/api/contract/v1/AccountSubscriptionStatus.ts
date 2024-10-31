// Original file: investAPI/src/docs/contracts/operations.proto

import type { PortfolioSubscriptionStatus as _tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionStatus, PortfolioSubscriptionStatus__Output as _tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioSubscriptionStatus';

export interface AccountSubscriptionStatus {
  'accountId'?: (string);
  'subscriptionStatus'?: (_tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionStatus);
}

export interface AccountSubscriptionStatus__Output {
  'accountId': (string);
  'subscriptionStatus': (_tinkoff_public_invest_api_contract_v1_PortfolioSubscriptionStatus__Output);
}
