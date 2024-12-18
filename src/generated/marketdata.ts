import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { MarketDataServiceClient as _tinkoff_public_invest_api_contract_v1_MarketDataServiceClient, MarketDataServiceDefinition as _tinkoff_public_invest_api_contract_v1_MarketDataServiceDefinition } from './tinkoff/public/invest/api/contract/v1/MarketDataService';
import type { MarketDataStreamServiceClient as _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceClient, MarketDataStreamServiceDefinition as _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceDefinition } from './tinkoff/public/invest/api/contract/v1/MarketDataStreamService';

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
              Candle: MessageTypeDefinition
              CandleInstrument: MessageTypeDefinition
              CandleInterval: EnumTypeDefinition
              CandleSource: EnumTypeDefinition
              CandleSubscription: MessageTypeDefinition
              ErrorDetail: MessageTypeDefinition
              GetCandlesRequest: MessageTypeDefinition
              GetCandlesResponse: MessageTypeDefinition
              GetClosePricesRequest: MessageTypeDefinition
              GetClosePricesResponse: MessageTypeDefinition
              GetLastPricesRequest: MessageTypeDefinition
              GetLastPricesResponse: MessageTypeDefinition
              GetLastTradesRequest: MessageTypeDefinition
              GetLastTradesResponse: MessageTypeDefinition
              GetMySubscriptions: MessageTypeDefinition
              GetOrderBookRequest: MessageTypeDefinition
              GetOrderBookResponse: MessageTypeDefinition
              GetTechAnalysisRequest: MessageTypeDefinition
              GetTechAnalysisResponse: MessageTypeDefinition
              GetTradingStatusRequest: MessageTypeDefinition
              GetTradingStatusResponse: MessageTypeDefinition
              GetTradingStatusesRequest: MessageTypeDefinition
              GetTradingStatusesResponse: MessageTypeDefinition
              HistoricCandle: MessageTypeDefinition
              InfoInstrument: MessageTypeDefinition
              InfoSubscription: MessageTypeDefinition
              InstrumentClosePriceRequest: MessageTypeDefinition
              InstrumentClosePriceResponse: MessageTypeDefinition
              InstrumentStatus: EnumTypeDefinition
              InstrumentType: EnumTypeDefinition
              LastPrice: MessageTypeDefinition
              LastPriceInstrument: MessageTypeDefinition
              LastPriceSubscription: MessageTypeDefinition
              LastPriceType: EnumTypeDefinition
              MarketDataRequest: MessageTypeDefinition
              MarketDataResponse: MessageTypeDefinition
              MarketDataServerSideStreamRequest: MessageTypeDefinition
              MarketDataService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_MarketDataServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_MarketDataServiceDefinition }
              MarketDataStreamService: SubtypeConstructor<typeof grpc.Client, _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceClient> & { service: _tinkoff_public_invest_api_contract_v1_MarketDataStreamServiceDefinition }
              MoneyValue: MessageTypeDefinition
              Order: MessageTypeDefinition
              OrderBook: MessageTypeDefinition
              OrderBookInstrument: MessageTypeDefinition
              OrderBookSubscription: MessageTypeDefinition
              OrderBookType: EnumTypeDefinition
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
              SubscribeCandlesRequest: MessageTypeDefinition
              SubscribeCandlesResponse: MessageTypeDefinition
              SubscribeInfoRequest: MessageTypeDefinition
              SubscribeInfoResponse: MessageTypeDefinition
              SubscribeLastPriceRequest: MessageTypeDefinition
              SubscribeLastPriceResponse: MessageTypeDefinition
              SubscribeOrderBookRequest: MessageTypeDefinition
              SubscribeOrderBookResponse: MessageTypeDefinition
              SubscribeTradesRequest: MessageTypeDefinition
              SubscribeTradesResponse: MessageTypeDefinition
              SubscriptionAction: EnumTypeDefinition
              SubscriptionInterval: EnumTypeDefinition
              SubscriptionStatus: EnumTypeDefinition
              Trade: MessageTypeDefinition
              TradeDirection: EnumTypeDefinition
              TradeInstrument: MessageTypeDefinition
              TradeSourceType: EnumTypeDefinition
              TradeSubscription: MessageTypeDefinition
              TradingStatus: MessageTypeDefinition
            }
          }
        }
      }
    }
  }
}

