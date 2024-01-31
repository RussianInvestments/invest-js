// Original file: investAPI/src/docs/contracts/orders.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { ResponseMetadata as _tinkoff_public_invest_api_contract_v1_ResponseMetadata, ResponseMetadata__Output as _tinkoff_public_invest_api_contract_v1_ResponseMetadata__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ResponseMetadata';

export interface CancelOrderResponse {
  'time'?: (_google_protobuf_Timestamp | null);
  'responseMetadata'?: (_tinkoff_public_invest_api_contract_v1_ResponseMetadata | null);
}

export interface CancelOrderResponse__Output {
  'time': (_google_protobuf_Timestamp__Output | null);
  'responseMetadata': (_tinkoff_public_invest_api_contract_v1_ResponseMetadata__Output | null);
}
