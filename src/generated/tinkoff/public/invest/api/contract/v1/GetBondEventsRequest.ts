// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

// Original file: investAPI/src/docs/contracts/instruments.proto

export enum _tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType {
  EVENT_TYPE_UNSPECIFIED = 0,
  EVENT_TYPE_CPN = 1,
  EVENT_TYPE_CALL = 2,
  EVENT_TYPE_MTY = 3,
  EVENT_TYPE_CONV = 4,
}

export interface GetBondEventsRequest {
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'instrumentId'?: (string);
  'type'?: (_tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType | keyof typeof _tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType);
  '_from'?: "from";
  '_to'?: "to";
}

export interface GetBondEventsRequest__Output {
  'from'?: (_google_protobuf_Timestamp__Output | null);
  'to'?: (_google_protobuf_Timestamp__Output | null);
  'instrumentId': (string);
  'type': (keyof typeof _tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType);
  '_from': "from";
  '_to': "to";
}
