// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface GetDividendsRequest {
  'figi'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  'instrumentId'?: (string);
  '_from'?: "from";
  '_to'?: "to";
}

export interface GetDividendsRequest__Output {
  'figi': (string);
  'from'?: (_google_protobuf_Timestamp__Output | null);
  'to'?: (_google_protobuf_Timestamp__Output | null);
  'instrumentId': (string);
  '_from': "from";
  '_to': "to";
}
