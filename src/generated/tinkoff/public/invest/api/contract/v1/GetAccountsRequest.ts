// Original file: investAPI/src/docs/contracts/users.proto

import type { AccountStatus as _tinkoff_public_invest_api_contract_v1_AccountStatus, AccountStatus__Output as _tinkoff_public_invest_api_contract_v1_AccountStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AccountStatus';

export interface GetAccountsRequest {
  'status'?: (_tinkoff_public_invest_api_contract_v1_AccountStatus);
  '_status'?: "status";
}

export interface GetAccountsRequest__Output {
  'status'?: (_tinkoff_public_invest_api_contract_v1_AccountStatus__Output);
  '_status': "status";
}
