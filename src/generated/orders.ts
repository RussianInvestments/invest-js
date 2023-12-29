import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrdersServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersServiceClient, OrdersServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersService';
import type { OrdersStreamServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient, OrdersStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersStreamService';

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
              CancelOrderRequest: MessageTypeDefinition
              CancelOrderResponse: MessageTypeDefinition
              GetMaxLotsRequest: MessageTypeDefinition
              GetMaxLotsResponse: MessageTypeDefinition
              GetOrderPriceRequest: MessageTypeDefinition
              GetOrderPriceResponse: MessageTypeDefinition
              GetOrderStateRequest: MessageTypeDefinition
              GetOrdersRequest: MessageTypeDefinition
              GetOrdersResponse: MessageTypeDefinition
              InstrumentType: EnumTypeDefinition
              MoneyValue: MessageTypeDefinition
              OrderDirection: EnumTypeDefinition
              OrderExecutionReportStatus: EnumTypeDefinition
              OrderStage: MessageTypeDefinition
              OrderState: MessageTypeDefinition
              OrderTrade: MessageTypeDefinition
              OrderTrades: MessageTypeDefinition
              OrderType: EnumTypeDefinition
              OrdersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition }
              OrdersStreamService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition }
              Page: MessageTypeDefinition
              PageResponse: MessageTypeDefinition
              Ping: MessageTypeDefinition
              PostOrderRequest: MessageTypeDefinition
              PostOrderResponse: MessageTypeDefinition
              PriceType: EnumTypeDefinition
              Quotation: MessageTypeDefinition
              ReplaceOrderRequest: MessageTypeDefinition
              ResponseMetadata: MessageTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
              TimeInForceType: EnumTypeDefinition
              TradesStreamRequest: MessageTypeDefinition
              TradesStreamResponse: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

