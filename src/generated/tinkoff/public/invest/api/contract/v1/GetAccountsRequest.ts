// Original file: investAPI/src/docs/contracts/users.proto

import type { AccountStatus as _tinkoff_public_invest_api_contract_v1_AccountStatus } from '../../../../../../tinkoff/public/invest/api/contract/v1/AccountStatus';

export interface GetAccountsRequest {
  'status'?: (_tinkoff_public_invest_api_contract_v1_AccountStatus | keyof typeof _tinkoff_public_invest_api_contract_v1_AccountStatus);
  '_status'?: "status";
}

export interface GetAccountsRequest__Output {
  'status'?: (keyof typeof _tinkoff_public_invest_api_contract_v1_AccountStatus);
  '_status': "status";
}
