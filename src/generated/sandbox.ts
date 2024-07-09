import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OperationsServiceClient as _tinkoff_public_invest_api_contract_v1_OperationsServiceClient, OperationsServiceDefinition as _tinkoff_public_invest_api_contract_v1_OperationsServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OperationsService';
import type { OperationsStreamServiceClient as _tinkoff_public_invest_api_contract_v1_OperationsStreamServiceClient, OperationsStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_OperationsStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OperationsStreamService';
import type { OrdersServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersServiceClient, OrdersServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersService';
import type { OrdersStreamServiceClient as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient, OrdersStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OrdersStreamService';
import type { SandboxServiceClient as _tinkoff_public_invest_api_contract_v1_SandboxServiceClient, SandboxServiceDefinition as _tinkoff_public_invest_api_contract_v1_SandboxServiceDefinition } from './tinkoff/public/invest/api/contract/v1/SandboxService';
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
              AccountSubscriptionStatus: MessageTypeDefinition
              AccountType: EnumTypeDefinition
              BrandData: MessageTypeDefinition
              BrokerReport: MessageTypeDefinition
              BrokerReportRequest: MessageTypeDefinition
              BrokerReportResponse: MessageTypeDefinition
              CancelOrderRequest: MessageTypeDefinition
              CancelOrderResponse: MessageTypeDefinition
              CloseSandboxAccountRequest: MessageTypeDefinition
              CloseSandboxAccountResponse: MessageTypeDefinition
              DividendsForeignIssuerReport: MessageTypeDefinition
              ErrorDetail: MessageTypeDefinition
              GenerateBrokerReportRequest: MessageTypeDefinition
              GenerateBrokerReportResponse: MessageTypeDefinition
              GenerateDividendsForeignIssuerReportRequest: MessageTypeDefinition
              GenerateDividendsForeignIssuerReportResponse: MessageTypeDefinition
              GetAccountsRequest: MessageTypeDefinition
              GetAccountsResponse: MessageTypeDefinition
              GetBrokerReportRequest: MessageTypeDefinition
              GetBrokerReportResponse: MessageTypeDefinition
              GetDividendsForeignIssuerReportRequest: MessageTypeDefinition
              GetDividendsForeignIssuerReportResponse: MessageTypeDefinition
              GetDividendsForeignIssuerRequest: MessageTypeDefinition
              GetDividendsForeignIssuerResponse: MessageTypeDefinition
              GetInfoRequest: MessageTypeDefinition
              GetInfoResponse: MessageTypeDefinition
              GetMarginAttributesRequest: MessageTypeDefinition
              GetMarginAttributesResponse: MessageTypeDefinition
              GetMaxLotsRequest: MessageTypeDefinition
              GetMaxLotsResponse: MessageTypeDefinition
              GetOperationsByCursorRequest: MessageTypeDefinition
              GetOperationsByCursorResponse: MessageTypeDefinition
              GetOrderPriceRequest: MessageTypeDefinition
              GetOrderPriceResponse: MessageTypeDefinition
              GetOrderStateRequest: MessageTypeDefinition
              GetOrdersRequest: MessageTypeDefinition
              GetOrdersResponse: MessageTypeDefinition
              GetUserTariffRequest: MessageTypeDefinition
              GetUserTariffResponse: MessageTypeDefinition
              InstrumentType: EnumTypeDefinition
              MoneyValue: MessageTypeDefinition
              OpenSandboxAccountRequest: MessageTypeDefinition
              OpenSandboxAccountResponse: MessageTypeDefinition
              Operation: MessageTypeDefinition
              OperationItem: MessageTypeDefinition
              OperationItemTrade: MessageTypeDefinition
              OperationItemTrades: MessageTypeDefinition
              OperationState: EnumTypeDefinition
              OperationTrade: MessageTypeDefinition
              OperationType: EnumTypeDefinition
              OperationsRequest: MessageTypeDefinition
              OperationsResponse: MessageTypeDefinition
              OperationsService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OperationsServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OperationsServiceDefinition }
              OperationsStreamService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OperationsStreamServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OperationsStreamServiceDefinition }
              OrderDirection: EnumTypeDefinition
              OrderExecutionReportStatus: EnumTypeDefinition
              OrderStage: MessageTypeDefinition
              OrderState: MessageTypeDefinition
              OrderStateStreamRequest: MessageTypeDefinition
              OrderStateStreamResponse: MessageTypeDefinition
              OrderTrade: MessageTypeDefinition
              OrderTrades: MessageTypeDefinition
              OrderType: EnumTypeDefinition
              OrdersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersServiceDefinition }
              OrdersStreamService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_OrdersStreamServiceDefinition }
              Page: MessageTypeDefinition
              PageResponse: MessageTypeDefinition
              Ping: MessageTypeDefinition
              PortfolioPosition: MessageTypeDefinition
              PortfolioRequest: MessageTypeDefinition
              PortfolioResponse: MessageTypeDefinition
              PortfolioStreamRequest: MessageTypeDefinition
              PortfolioStreamResponse: MessageTypeDefinition
              PortfolioSubscriptionResult: MessageTypeDefinition
              PortfolioSubscriptionStatus: EnumTypeDefinition
              PositionData: MessageTypeDefinition
              PositionsAccountSubscriptionStatus: EnumTypeDefinition
              PositionsFutures: MessageTypeDefinition
              PositionsMoney: MessageTypeDefinition
              PositionsOptions: MessageTypeDefinition
              PositionsRequest: MessageTypeDefinition
              PositionsResponse: MessageTypeDefinition
              PositionsSecurities: MessageTypeDefinition
              PositionsStreamRequest: MessageTypeDefinition
              PositionsStreamResponse: MessageTypeDefinition
              PositionsSubscriptionResult: MessageTypeDefinition
              PositionsSubscriptionStatus: MessageTypeDefinition
              PostOrderAsyncRequest: MessageTypeDefinition
              PostOrderAsyncResponse: MessageTypeDefinition
              PostOrderRequest: MessageTypeDefinition
              PostOrderResponse: MessageTypeDefinition
              PriceType: EnumTypeDefinition
              Quotation: MessageTypeDefinition
              ReplaceOrderRequest: MessageTypeDefinition
              ResponseMetadata: MessageTypeDefinition
              ResultSubscriptionStatus: EnumTypeDefinition
              SandboxPayInRequest: MessageTypeDefinition
              SandboxPayInResponse: MessageTypeDefinition
              SandboxService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_SandboxServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_SandboxServiceDefinition }
              SecurityTradingStatus: EnumTypeDefinition
              StreamLimit: MessageTypeDefinition
              SubscriptionResponse: MessageTypeDefinition
              TimeInForceType: EnumTypeDefinition
              TradesStreamRequest: MessageTypeDefinition
              TradesStreamResponse: MessageTypeDefinition
              UnaryLimit: MessageTypeDefinition
              UsersService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_UsersServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_UsersServiceDefinition }
              VirtualPortfolioPosition: MessageTypeDefinition
              WithdrawLimitsRequest: MessageTypeDefinition
              WithdrawLimitsResponse: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

