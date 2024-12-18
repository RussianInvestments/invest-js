import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


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
              BrandData: MessageTypeDefinition
              ErrorDetail: MessageTypeDefinition
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
            }
          }
        }
      }
    }
  }
}

