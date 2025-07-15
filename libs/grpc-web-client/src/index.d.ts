import { InstrumentsServiceClient } from '../compiled/instruments';
import { OrdersStreamServiceClient, OrdersServiceClient } from '../compiled/orders';
import { OperationsServiceClient, OperationsStreamServiceClient } from '../compiled/operations';
import { MarketDataServiceClient, MarketDataStreamServiceClient } from '../compiled/marketdata';
import { StopOrdersServiceClient } from '../compiled/stoporders';
import { SandboxServiceClient } from '../compiled/sandbox';
import { UsersServiceClient } from '../compiled/users';
export interface TTechAPIClientOptions {
    token: string;
    url?: string;
    metadata?: Record<string, string>;
}
export declare class WebApiClient {
    instruments: InstrumentsServiceClient;
    ordersStream: OrdersStreamServiceClient;
    orders: OrdersServiceClient;
    operations: OperationsServiceClient;
    operationsStream: OperationsStreamServiceClient;
    marketdata: MarketDataServiceClient;
    marketdataStream: MarketDataStreamServiceClient;
    stopOrders: StopOrdersServiceClient;
    users: UsersServiceClient;
    sandbox: SandboxServiceClient;
    constructor(config: TTechAPIClientOptions);
}
export type { InstrumentType, InstrumentStatus, SecurityTradingStatus, PriceType, ResultSubscriptionStatus, MoneyValue, Quotation, } from '../compiled/common';
export type { GetAccountsRequest, GetAccountsResponse } from '../compiled/users';
export type { PositionsRequest, PositionsResponse, OperationsRequest, OperationsResponse, } from '../compiled/operations';
export { OperationState } from '../compiled/operations';
