// Original file: investAPI/src/docs/contracts/sandbox.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CancelOrderRequest as _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, CancelOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelOrderRequest';
import type { CancelOrderResponse as _tinkoff_public_invest_api_contract_v1_CancelOrderResponse, CancelOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CancelOrderResponse';
import type { CloseSandboxAccountRequest as _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, CloseSandboxAccountRequest__Output as _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CloseSandboxAccountRequest';
import type { CloseSandboxAccountResponse as _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse, CloseSandboxAccountResponse__Output as _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/CloseSandboxAccountResponse';
import type { GetAccountsRequest as _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, GetAccountsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetAccountsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetAccountsRequest';
import type { GetAccountsResponse as _tinkoff_public_invest_api_contract_v1_GetAccountsResponse, GetAccountsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetAccountsResponse';
import type { GetOrderStateRequest as _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, GetOrderStateRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrderStateRequest';
import type { GetOrdersRequest as _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, GetOrdersRequest__Output as _tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrdersRequest';
import type { GetOrdersResponse as _tinkoff_public_invest_api_contract_v1_GetOrdersResponse, GetOrdersResponse__Output as _tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetOrdersResponse';
import type { OpenSandboxAccountRequest as _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, OpenSandboxAccountRequest__Output as _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OpenSandboxAccountRequest';
import type { OpenSandboxAccountResponse as _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse, OpenSandboxAccountResponse__Output as _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OpenSandboxAccountResponse';
import type { OperationsRequest as _tinkoff_public_invest_api_contract_v1_OperationsRequest, OperationsRequest__Output as _tinkoff_public_invest_api_contract_v1_OperationsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationsRequest';
import type { OperationsResponse as _tinkoff_public_invest_api_contract_v1_OperationsResponse, OperationsResponse__Output as _tinkoff_public_invest_api_contract_v1_OperationsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OperationsResponse';
import type { OrderState as _tinkoff_public_invest_api_contract_v1_OrderState, OrderState__Output as _tinkoff_public_invest_api_contract_v1_OrderState__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/OrderState';
import type { PortfolioRequest as _tinkoff_public_invest_api_contract_v1_PortfolioRequest, PortfolioRequest__Output as _tinkoff_public_invest_api_contract_v1_PortfolioRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioRequest';
import type { PortfolioResponse as _tinkoff_public_invest_api_contract_v1_PortfolioResponse, PortfolioResponse__Output as _tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PortfolioResponse';
import type { PositionsRequest as _tinkoff_public_invest_api_contract_v1_PositionsRequest, PositionsRequest__Output as _tinkoff_public_invest_api_contract_v1_PositionsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsRequest';
import type { PositionsResponse as _tinkoff_public_invest_api_contract_v1_PositionsResponse, PositionsResponse__Output as _tinkoff_public_invest_api_contract_v1_PositionsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PositionsResponse';
import type { PostOrderRequest as _tinkoff_public_invest_api_contract_v1_PostOrderRequest, PostOrderRequest__Output as _tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderRequest';
import type { PostOrderResponse as _tinkoff_public_invest_api_contract_v1_PostOrderResponse, PostOrderResponse__Output as _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PostOrderResponse';
import type { SandboxPayInRequest as _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, SandboxPayInRequest__Output as _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SandboxPayInRequest';
import type { SandboxPayInResponse as _tinkoff_public_invest_api_contract_v1_SandboxPayInResponse, SandboxPayInResponse__Output as _tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SandboxPayInResponse';

export interface SandboxServiceClient extends grpc.Client {
  CancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  CancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  cancelSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_CancelOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>): grpc.ClientUnaryCall;
  
  CloseSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  CloseSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  CloseSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  CloseSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  closeSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  closeSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  closeSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  closeSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  
  GetSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxAccounts(argument: _tinkoff_public_invest_api_contract_v1_GetAccountsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>): grpc.ClientUnaryCall;
  
  GetSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOperations(argument: _tinkoff_public_invest_api_contract_v1_OperationsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>): grpc.ClientUnaryCall;
  
  GetSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  GetSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  getSandboxOrderState(argument: _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OrderState__Output>): grpc.ClientUnaryCall;
  
  GetSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  getSandboxOrders(argument: _tinkoff_public_invest_api_contract_v1_GetOrdersRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>): grpc.ClientUnaryCall;
  
  GetSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPortfolio(argument: _tinkoff_public_invest_api_contract_v1_PortfolioRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>): grpc.ClientUnaryCall;
  
  GetSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  GetSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  getSandboxPositions(argument: _tinkoff_public_invest_api_contract_v1_PositionsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>): grpc.ClientUnaryCall;
  
  OpenSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  OpenSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  OpenSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  OpenSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  openSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  openSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  openSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  openSandboxAccount(argument: _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>): grpc.ClientUnaryCall;
  
  PostSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  PostSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  postSandboxOrder(argument: _tinkoff_public_invest_api_contract_v1_PostOrderRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>): grpc.ClientUnaryCall;
  
  SandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  SandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  SandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  SandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  sandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  sandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  sandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  sandboxPayIn(argument: _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SandboxServiceHandlers extends grpc.UntypedServiceImplementation {
  CancelSandboxOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse>;
  
  CloseSandboxAccount: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest__Output, _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse>;
  
  GetSandboxAccounts: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetAccountsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetAccountsResponse>;
  
  GetSandboxOperations: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_OperationsRequest__Output, _tinkoff_public_invest_api_contract_v1_OperationsResponse>;
  
  GetSandboxOrderState: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output, _tinkoff_public_invest_api_contract_v1_OrderState>;
  
  GetSandboxOrders: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse>;
  
  GetSandboxPortfolio: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PortfolioRequest__Output, _tinkoff_public_invest_api_contract_v1_PortfolioResponse>;
  
  GetSandboxPositions: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PositionsRequest__Output, _tinkoff_public_invest_api_contract_v1_PositionsResponse>;
  
  OpenSandboxAccount: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest__Output, _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse>;
  
  PostSandboxOrder: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse>;
  
  SandboxPayIn: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_SandboxPayInRequest__Output, _tinkoff_public_invest_api_contract_v1_SandboxPayInResponse>;
  
}

export interface SandboxServiceDefinition extends grpc.ServiceDefinition {
  CancelSandboxOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_CancelOrderRequest, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse, _tinkoff_public_invest_api_contract_v1_CancelOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_CancelOrderResponse__Output>
  CloseSandboxAccount: MethodDefinition<_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest, _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse, _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest__Output, _tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse__Output>
  GetSandboxAccounts: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetAccountsRequest, _tinkoff_public_invest_api_contract_v1_GetAccountsResponse, _tinkoff_public_invest_api_contract_v1_GetAccountsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetAccountsResponse__Output>
  GetSandboxOperations: MethodDefinition<_tinkoff_public_invest_api_contract_v1_OperationsRequest, _tinkoff_public_invest_api_contract_v1_OperationsResponse, _tinkoff_public_invest_api_contract_v1_OperationsRequest__Output, _tinkoff_public_invest_api_contract_v1_OperationsResponse__Output>
  GetSandboxOrderState: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest, _tinkoff_public_invest_api_contract_v1_OrderState, _tinkoff_public_invest_api_contract_v1_GetOrderStateRequest__Output, _tinkoff_public_invest_api_contract_v1_OrderState__Output>
  GetSandboxOrders: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetOrdersRequest, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse, _tinkoff_public_invest_api_contract_v1_GetOrdersRequest__Output, _tinkoff_public_invest_api_contract_v1_GetOrdersResponse__Output>
  GetSandboxPortfolio: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PortfolioRequest, _tinkoff_public_invest_api_contract_v1_PortfolioResponse, _tinkoff_public_invest_api_contract_v1_PortfolioRequest__Output, _tinkoff_public_invest_api_contract_v1_PortfolioResponse__Output>
  GetSandboxPositions: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PositionsRequest, _tinkoff_public_invest_api_contract_v1_PositionsResponse, _tinkoff_public_invest_api_contract_v1_PositionsRequest__Output, _tinkoff_public_invest_api_contract_v1_PositionsResponse__Output>
  OpenSandboxAccount: MethodDefinition<_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest, _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse, _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest__Output, _tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse__Output>
  PostSandboxOrder: MethodDefinition<_tinkoff_public_invest_api_contract_v1_PostOrderRequest, _tinkoff_public_invest_api_contract_v1_PostOrderResponse, _tinkoff_public_invest_api_contract_v1_PostOrderRequest__Output, _tinkoff_public_invest_api_contract_v1_PostOrderResponse__Output>
  SandboxPayIn: MethodDefinition<_tinkoff_public_invest_api_contract_v1_SandboxPayInRequest, _tinkoff_public_invest_api_contract_v1_SandboxPayInResponse, _tinkoff_public_invest_api_contract_v1_SandboxPayInRequest__Output, _tinkoff_public_invest_api_contract_v1_SandboxPayInResponse__Output>
}
