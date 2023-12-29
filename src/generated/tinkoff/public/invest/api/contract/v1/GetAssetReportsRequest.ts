// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface GetAssetReportsRequest {
  'instrumentId'?: (string);
  'from'?: (_google_protobuf_Timestamp | null);
  'to'?: (_google_protobuf_Timestamp | null);
  '_from'?: "from";
  '_to'?: "to";
}

export interface GetAssetReportsRequest__Output {
  'instrumentId': (string);
  'from'?: (_google_protobuf_Timestamp__Output | null);
  'to'?: (_google_protobuf_Timestamp__Output | null);
  '_from': "from";
  '_to': "to";
}
