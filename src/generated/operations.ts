import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OperationsServiceClient as _tinkoff_public_invest_api_contract_v1_OperationsServiceClient, OperationsServiceDefinition as _tinkoff_public_invest_api_contract_v1_OperationsServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OperationsService';
import type { OperationsStreamServiceClient as _tinkoff_public_invest_api_contract_v1_OperationsStreamServiceClient, OperationsStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_OperationsStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/OperationsStreamService';

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
              AccountSubscriptionStatus: MessageTypeDefinition
              BrandData: MessageTypeDefinition
              BrokerReport: MessageTypeDefinition
              BrokerReportRequest: MessageTypeDefinition
              BrokerReportResponse: MessageTypeDefinition
              ChildOperationItem: MessageTypeDefinition
              DividendsForeignIssuerReport: MessageTypeDefinition
              ErrorDetail: MessageTypeDefinition
              GenerateBrokerReportRequest: MessageTypeDefinition
              GenerateBrokerReportResponse: MessageTypeDefinition
              GenerateDividendsForeignIssuerReportRequest: MessageTypeDefinition
              GenerateDividendsForeignIssuerReportResponse: MessageTypeDefinition
              GetBrokerReportRequest: MessageTypeDefinition
              GetBrokerReportResponse: MessageTypeDefinition
              GetDividendsForeignIssuerReportRequest: MessageTypeDefinition
              GetDividendsForeignIssuerReportResponse: MessageTypeDefinition
              GetDividendsForeignIssuerRequest: MessageTypeDefinition
              GetDividendsForeignIssuerResponse: MessageTypeDefinition
              GetOperationsByCursorRequest: MessageTypeDefinition
              GetOperationsByCursorResponse: MessageTypeDefinition
              InstrumentType: EnumTypeDefinition
              MoneyValue: MessageTypeDefinition
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
              Page: MessageTypeDefinition
              PageResponse: MessageTypeDefinition
              Ping: MessageTypeDefinition
              PingDelaySettings: MessageTypeDefinition
              PingRequest: MessageTypeDefinition
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
              PriceType: EnumTypeDefinition
              Quotation: MessageTypeDefinition
              ResponseMetadata: MessageTypeDefinition
              ResultSubscriptionStatus: EnumTypeDefinition
              SecurityTradingStatus: EnumTypeDefinition
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

