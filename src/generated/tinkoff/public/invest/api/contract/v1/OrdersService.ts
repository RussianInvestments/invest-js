// Original file: investAPI/src/docs/contracts/orders.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CancelOrderRequest as _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, CancelOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelOrderRequest';
import type { CancelOrderResponse as _tinkoff_public_invest_api_contract_v1_CancelOrderResponse, CancelOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelOrderResponse';
import type { GetMaxLotsRequest as _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, GetMaxLotsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetMaxLotsRequest';
import type { GetMaxLotsResponse as _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse, GetMaxLotsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetMaxLotsResponse';
import type { GetOrderPriceRequest as _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, GetOrderPriceRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrderPriceRequest';
import type { GetOrderPriceResponse as _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse, GetOrderPriceResponse__Output as _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrderPriceResponse';
import type { GetOrderStateRequest as _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, GetOrderStateRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrderStateRequest';
import type { GetOrdersRequest as _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, GetOrdersRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrdersRequest';
import type { GetOrdersResponse as _tinkoff_public_invest_api_contract_v1_GetOrdersResponse, GetOrdersResponse__Output as _tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrdersResponse';
import type { OrderState as _tinkoff_public_invest_api_contract_v1_OrderState, OrderState__Output as _tinkoff_public_invest_api_contract_v1_OrderState__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderState';
import type { PostOrderAsyncRequest as _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, PostOrderAsyncRequest__Output as _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderAsyncRequest';
import type { PostOrderAsyncResponse as _tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse, PostOrderAsyncResponse__Output as _tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderAsyncResponse';
import type { PostOrderRequest as _tinkoff_public_invest_api_contract_v1_PostOrderRequest, PostOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderRequest';
import type { PostOrderResponse as _tinkoff_public_invest_api_contract_v1_PostOrderResponse, PostOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderResponse';
import type { ReplaceOrderRequest as _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, ReplaceOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/ReplaceOrderRequest';

export interface OrdersServiceClient extends grpc.Client {
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  
  GetMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  GetMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  GetMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  GetMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  getMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  getMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  getMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  getMaxLots(argument: _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>): grpc.ClientUnaryCall;
  
  GetOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  GetOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  GetOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  GetOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  getOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  getOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  getOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  getOrderPrice(argument: _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>): grpc.ClientUnaryCall;
  
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  
  PostOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  PostOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  PostOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  PostOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  postOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  postOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  postOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  postOrderAsync(argument: _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>): grpc.ClientUnaryCall;
  
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  ReplaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  replaceOrder(argument: _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface OrdersServiceHandlers extends grpc.UntypedServiceImplementation {
  CancelOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse>;
  
  GetMaxLots: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse>;
  
  GetOrderPrice: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse>;
  
  GetOrderState: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output, _tinkoff_public_invest_api_contract_v1_OrderState>;
  
  GetOrders: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse>;
  
  PostOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse>;
  
  PostOrderAsync: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse>;
  
  ReplaceOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse>;
  
}

export interface OrdersServiceDefinition extends grpc.ServiceDefinition {
  CancelOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_CancelOrderRequest, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse, _tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>
  GetMaxLots: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest, _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse, _tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse__Output>
  GetOrderPrice: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest, _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse, _tinkoff_public_invest_api_contract_v1_GetOrderPriceRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse__Output>
  GetOrderState: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, _tinkoff_public_invest_api_contract_v1_OrderState, _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output, _tinkoff_public_invest_api_contract_v1_OrderState__Output>
  GetOrders: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrdersRequest, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse, _tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>
  PostOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PostOrderRequest, _tinkoff_public_invest_api_contract_v1_PostOrderResponse, _tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>
  PostOrderAsync: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest, _tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse, _tinkoff_public_invest_api_contract_v1_PostOrderAsyncRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderAsyncResponse__Output>
  ReplaceOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest, _tinkoff_public_invest_api_contract_v1_PostOrderResponse, _tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>
}
