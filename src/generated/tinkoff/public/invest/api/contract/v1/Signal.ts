// Original file: investAPI/src/docs/contracts/signals.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { Long } from '@grpc/proto-loader';

export interface Signal {
  'signalId'?: (string);
  'strategyId'?: (string);
  'instrumentUid'?: (string);
  'createDt'?: (_google_protobuf_Timestamp | null);
  'lifetime'?: (number | string | Long);
  'direction'?: (string);
  'price'?: (number | string);
  'profit'?: (number | string);
  'info'?: (string);
}

export interface Signal__Output {
  'signalId': (string);
  'strategyId': (string);
  'instrumentUid': (string);
  'createDt': (_google_protobuf_Timestamp__Output | null);
  'lifetime': (string);
  'direction': (string);
  'price': (number);
  'profit': (number);
  'info': (string);
}
