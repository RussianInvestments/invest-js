// Original file: investAPI/src/docs/contracts/operations.proto


// Original file: investAPI/src/docs/contracts/operations.proto

export const _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
} as const;

export type _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest =
  | 'RUB'
  | 0
  | 'USD'
  | 1
  | 'EUR'
  | 2

export type _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest__Output = typeof _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest[keyof typeof _tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest]

export interface PortfolioRequest {
  'accountId'?: (string);
  'currency'?: (_tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest);
  '_currency'?: "currency";
}

export interface PortfolioRequest__Output {
  'accountId': (string);
  'currency'?: (_tinkoff_public_invest_api_contract_v1_PortfolioRequest_CurrencyRequest__Output);
  '_currency': "currency";
}
