import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { SignalServiceClient as _tinkoff_public_invest_api_contract_v1_SignalServiceClient, SignalServiceDefinition as _tinkoff_public_invest_api_contract_v1_SignalServiceDefinition } from './tinkoff/public/invest/api/contract/v1/SignalService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    api: {
      FieldBehavior: EnumTypeDefinition
    }
    protobuf: {
      DescriptorProto: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
  tinkoff: {
    public: {
      invest: {
        api: {
          contract: {
            v1: {
              BrandData: MessageTypeDefinition
              ErrorDetail: MessageTypeDefinition
              GetSignalsRequest: MessageTypeDefinition
              GetSignalsResponse: MessageTypeDefinition
              GetStrategiesRequest: MessageTypeDefinition
              GetStrategiesResponse: MessageTypeDefinition
              InstrumentType: EnumTypeDefinition
              MoneyValue: MessageTypeDefinition
              Page: MessageTypeDefinition
              PageResponse: MessageTypeDefinition
              Ping: MessageTypeDefinition
              PingDelaySettings: MessageTypeDefinition
              PingRequest: MessageTypeDefinition
              PriceType: EnumTypeDefinition
              Quotation: MessageTypeDefinition
              ResponseMetadata: MessageTypeDefinition
              ResultSubscriptionStatus: EnumTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              Signal: MessageTypeDefinition
              SignalDirection: EnumTypeDefinition
              SignalService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_SignalServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_SignalServiceDefinition }
              SignalState: EnumTypeDefinition
              Strategy: MessageTypeDefinition
              StrategyType: EnumTypeDefinition
            }
          }
        }
      }
    }
  }
}

