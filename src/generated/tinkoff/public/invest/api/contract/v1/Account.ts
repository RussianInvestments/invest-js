// Original file: investAPI/src/docs/contracts/users.proto

import type { AccountType as _tinkoff_public_invest_api_contract_v1_AccountType, AccountType__Output as _tinkoff_public_invest_api_contract_v1_AccountType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AccountType';
import type { AccountStatus as _tinkoff_public_invest_api_contract_v1_AccountStatus, AccountStatus__Output as _tinkoff_public_invest_api_contract_v1_AccountStatus__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AccountStatus';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { AccessLevel as _tinkoff_public_invest_api_contract_v1_AccessLevel, AccessLevel__Output as _tinkoff_public_invest_api_contract_v1_AccessLevel__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/AccessLevel';

export interface Account {
  'id'?: (string);
  'type'?: (_tinkoff_public_invest_api_contract_v1_AccountType);
  'name'?: (string);
  'status'?: (_tinkoff_public_invest_api_contract_v1_AccountStatus);
  'openedDate'?: (_google_protobuf_Timestamp | null);
  'closedDate'?: (_google_protobuf_Timestamp | null);
  'accessLevel'?: (_tinkoff_public_invest_api_contract_v1_AccessLevel);
}

export interface Account__Output {
  'id': (string);
  'type': (_tinkoff_public_invest_api_contract_v1_AccountType__Output);
  'name': (string);
  'status': (_tinkoff_public_invest_api_contract_v1_AccountStatus__Output);
  'openedDate': (_google_protobuf_Timestamp__Output | null);
  'closedDate': (_google_protobuf_Timestamp__Output | null);
  'accessLevel': (_tinkoff_public_invest_api_contract_v1_AccessLevel__Output);
}
