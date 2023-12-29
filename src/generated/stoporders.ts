import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { StopOrdersServiceClient as _tinkoff_public_invest_api_contract_v1_StopOrdersServiceClient, StopOrdersServiceDefinition as _tinkoff_public_invest_api_contract_v1_StopOrdersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/StopOrdersService';

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
              CancelStopOrderRequest: MessageTypeDefinition
              CancelStopOrderResponse: MessageTypeDefinition
              ExchangeOrderType: EnumTypeDefinition
              GetStopOrdersRequest: MessageTypeDefinition
              GetStopOrdersResponse: MessageTypeDefinition
              InstrumentType: EnumTypeDefinition
              MoneyValue: MessageTypeDefinition
              Page: MessageTypeDefinition
              PageResponse: MessageTypeDefinition
              Ping: MessageTypeDefinition
              PostStopOrderRequest: MessageTypeDefinition
              PostStopOrderResponse: MessageTypeDefinition
              PriceType: EnumTypeDefinition
              Quotation: MessageTypeDefinition
              ResponseMetadata: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              StopOrder: MessageTypeDefinition
              StopOrderDirection: EnumTypeDefinition
              StopOrderExpirationType: EnumTypeDefinition
              StopOrderStatusOption: EnumTypeDefinition
              StopOrderType: EnumTypeDefinition
              StopOrdersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_StopOrdersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_StopOrdersServiceDefinition }
              TakeProfitType: EnumTypeDefinition
              TrailingStopStatus: EnumTypeDefinition
              TrailingValueType: EnumTypeDefinition
            }
          }
        }
      }
    }
  }
}

