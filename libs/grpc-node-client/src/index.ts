import { createChannel, createClientFactory, ChannelCredentials, Metadata } from 'nice-grpc';
import { InstrumentsServiceClient, InstrumentsServiceDefinition } from '../compiled/instruments';
import {
  OrdersStreamServiceClient,
  OrdersStreamServiceDefinition,
  OrdersServiceClient,
  OrdersServiceDefinition,
} from '../compiled/orders';
import {
  OperationsServiceClient,
  OperationsServiceDefinition,
  OperationsStreamServiceClient,
  OperationsStreamServiceDefinition,
} from '../compiled/operations';
import {
  MarketDataServiceClient,
  MarketDataServiceDefinition,
  MarketDataStreamServiceClient,
  MarketDataStreamServiceDefinition,
} from '../compiled/marketdata';
import { StopOrdersServiceClient, StopOrdersServiceDefinition } from '../compiled/stoporders';
import { UsersServiceClient, UsersServiceDefinition } from '../compiled/users';

export interface TTechAPIClientOptions {
  token: string;
  url?: string;
  metadata?: Record<string, string>;
}

export class NodeApiClient {
  instruments: InstrumentsServiceClient;
  ordersStream: OrdersStreamServiceClient;
  orders: OrdersServiceClient;
  operations: OperationsServiceClient;
  operationsStream: OperationsStreamServiceClient;
  marketdata: MarketDataServiceClient;
  marketdataStream: MarketDataStreamServiceClient;
  stopOrders: StopOrdersServiceClient;
  users: UsersServiceClient;

  constructor(config: TTechAPIClientOptions) {
    const token = config.token;
    const url = config.url || 'https://invest-public-api.tinkoff.ru';

    // const providedMetadata = config.metadata || {};

    const clientFactory = createClientFactory().use((call, options) =>
      call.next(call.request, {
        ...options,
        metadata: Metadata(options.metadata).set('Authorization', `Bearer ${token}`),
      })
    );

    const channel = createChannel(url, ChannelCredentials.createSsl());

    this.instruments = clientFactory.create(InstrumentsServiceDefinition, channel);
    this.ordersStream = clientFactory.create(OrdersStreamServiceDefinition, channel);
    this.orders = clientFactory.create(OrdersServiceDefinition, channel);
    this.operations = clientFactory.create(OperationsServiceDefinition, channel);
    this.operationsStream = clientFactory.create(OperationsStreamServiceDefinition, channel);
    this.marketdata = clientFactory.create(MarketDataServiceDefinition, channel);
    this.marketdataStream = clientFactory.create(MarketDataStreamServiceDefinition, channel);
    this.stopOrders = clientFactory.create(StopOrdersServiceDefinition, channel);
    this.users = clientFactory.create(UsersServiceDefinition, channel);
  }
}

export type {
  InstrumentType,
  InstrumentStatus,
  SecurityTradingStatus,
  MoneyValue,
  Quotation,
  ErrorDetail,
  Ping,
} from '../compiled/common';

export { PriceType, ResultSubscriptionStatus } from '../compiled/common';

export type { GetAccountsRequest, GetAccountsResponse } from '../compiled/users';

export type {
  OrderState,
  GetOrdersRequest,
  GetOrdersResponse,
  PostOrderRequest,
  PostOrderResponse,
  PostOrderAsyncRequest,
  PostOrderAsyncResponse,
  OrderStateStreamRequest,
  OrderStateStreamResponse,
  TradesStreamRequest,
  TradesStreamResponse,
  SubscriptionResponse,
  OrderStateStreamResponse_OrderState,
} from '../compiled/orders';

export {
  OrderDirection,
  OrderType,
  TimeInForceType,
  OrderExecutionReportStatus,
  OrderStateStreamResponse_StatusCauseInfo,
  OrderStateStreamResponse_MarkerType,
  OrderTrade,
} from '../compiled/orders';

export type {
  PositionsRequest,
  PositionsResponse,
  OperationsRequest,
  OperationsResponse,
} from '../compiled/operations';

export { OperationState } from '../compiled/operations';
