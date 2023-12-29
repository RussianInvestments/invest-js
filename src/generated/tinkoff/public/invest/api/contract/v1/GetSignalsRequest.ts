// Original file: investAPI/src/docs/contracts/signals.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface GetSignalsRequest {
  'strategyId'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'instrumentUid'?: (string);
  'to'?: (_google_protobuf_Timestamp | null);
  'archive'?: (boolean);
}

export interface GetSignalsRequest__Output {
  'strategyId': (string);
  'from': (_google_protobuf_Timestamp__Output | null);
  'instrumentUid': (string);
  'to': (_google_protobuf_Timestamp__Output | null);
  'archive': (boolean);
}
