// Original file: investAPI/src/docs/contracts/stoporders.proto

import type { StopOrderStatusOption as _tinkoff_public_invest_api_contract_v1_StopOrderStatusOption } from '../../../../../../tinkoff/public/invest/api/contract/v1/StopOrderStatusOption';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface GetStopOrdersRequest {
  'accountId'?: (string);
  'status'?: (_tinkoff_public_invest_api_contract_v1_StopOrderStatusOption | keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderStatusOption);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
}

export interface GetStopOrdersRequest__Output {
  'accountId': (string);
  'status': (keyof typeof _tinkoff_public_invest_api_contract_v1_StopOrderStatusOption);
  'from': (_google_protobuf_Timestamp__Output | null);
  'to': (_google_protobuf_Timestamp__Output | null);
}
