import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { SignalServiceClient as _tinkoff_public_invest_api_contract_v1_SignalServiceClient, SignalServiceDefinition as _tinkoff_public_invest_api_contract_v1_SignalServiceDefinition } from './tinkoff/public/invest/api/contract/v1/SignalService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  tinkoff: {
    public: {
      invest: {
        api: {
          contract: {
            v1: {
              GetSignalsRequest: MessageTypeDefinition
              GetSignalsResponse: MessageTypeDefinition
              GetStrategiesRequest: MessageTypeDefinition
              GetStrategiesResponse: MessageTypeDefinition
              Signal: MessageTypeDefinition
              SignalService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_SignalServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_SignalServiceDefinition }
              Strategy: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

