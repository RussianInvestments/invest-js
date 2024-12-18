// Original file: investAPI/src/docs/contracts/operations.proto

import type { PositionsSubscriptionResult as _tinkoff_public_invest_api_contract_v1_PositionsSubscriptionResult, PositionsSubscriptionResult__Output as _tinkoff_public_invest_api_contract_v1_PositionsSubscriptionResult__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsSubscriptionResult';
import type { PositionData as _tinkoff_public_invest_api_contract_v1_PositionData, PositionData__Output as _tinkoff_public_invest_api_contract_v1_PositionData__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionData';
import type { Ping as _tinkoff_public_invest_api_contract_v1_Ping, Ping__Output as _tinkoff_public_invest_api_contract_v1_Ping__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Ping';
import type { PositionsResponse as _tinkoff_public_invest_api_contract_v1_PositionsResponse, PositionsResponse__Output as _tinkoff_public_invest_api_contract_v1_PositionsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsResponse';

export interface PositionsStreamResponse {
  'subscriptions'?: (_tinkoff_public_invest_api_contract_v1_PositionsSubscriptionResult | null);
  'position'?: (_tinkoff_public_invest_api_contract_v1_PositionData | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping | null);
  'initialPositions'?: (_tinkoff_public_invest_api_contract_v1_PositionsResponse | null);
  'payload'?: "subscriptions"|"position"|"ping"|"initialPositions";
}

export interface PositionsStreamResponse__Output {
  'subscriptions'?: (_tinkoff_public_invest_api_contract_v1_PositionsSubscriptionResult__Output | null);
  'position'?: (_tinkoff_public_invest_api_contract_v1_PositionData__Output | null);
  'ping'?: (_tinkoff_public_invest_api_contract_v1_Ping__Output | null);
  'initialPositions'?: (_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output | null);
  'payload': "subscriptions"|"position"|"ping"|"initialPositions";
}
