// Original file: investAPI/src/docs/contracts/common.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface ResponseMetadata {
  'trackingId'?: (string);
  'serverTime'?: (_google_protobuf_Timestamp | null);
}

export interface ResponseMetadata__Output {
  'trackingId': (string);
  'serverTime': (_google_protobuf_Timestamp__Output | null);
}
