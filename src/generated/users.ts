import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UsersServiceClient as _tinkoff_public_invest_api_contract_v1_UsersServiceClient, UsersServiceDefinition as _tinkoff_public_invest_api_contract_v1_UsersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/UsersService';

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
              AccessLevel: EnumTypeDefinition
              Account: MessageTypeDefinition
              AccountStatus: EnumTypeDefinition
              AccountType: EnumTypeDefinition
              BrandData: MessageTypeDefinition
              ErrorDetail: MessageTypeDefinition
              GetAccountsRequest: MessageTypeDefinition
              GetAccountsResponse: MessageTypeDefinition
              GetInfoRequest: MessageTypeDefinition
              GetInfoResponse: MessageTypeDefinition
              GetMarginAttributesRequest: MessageTypeDefinition
              GetMarginAttributesResponse: MessageTypeDefinition
              GetUserTariffRequest: MessageTypeDefinition
              GetUserTariffResponse: MessageTypeDefinition
              InstrumentStatus: EnumTypeDefinition
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
              StreamLimit: MessageTypeDefinition
              UnaryLimit: MessageTypeDefinition
              UsersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_UsersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_UsersServiceDefinition }
            }
          }
        }
      }
    }
  }
}

