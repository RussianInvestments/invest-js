// Original file: investAPI/src/docs/contracts/signals.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetSignalsRequest as _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, GetSignalsRequest__Output as _tinkoff_public_invest_api_contract_v1_GetSignalsRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetSignalsRequest';
import type { GetSignalsResponse as _tinkoff_public_invest_api_contract_v1_GetSignalsResponse, GetSignalsResponse__Output as _tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetSignalsResponse';
import type { GetStrategiesRequest as _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, GetStrategiesRequest__Output as _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetStrategiesRequest';
import type { GetStrategiesResponse as _tinkoff_public_invest_api_contract_v1_GetStrategiesResponse, GetStrategiesResponse__Output as _tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetStrategiesResponse';

export interface SignalServiceClient extends grpc.Client {
  GetSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  GetSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  GetSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  GetSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  getSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  getSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  getSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  getSignals(argument: _tinkoff_public_invest_api_contract_v1_GetSignalsRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>): grpc.ClientUnaryCall;
  
  GetStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  GetStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  GetStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  GetStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  getStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  getStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  getStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  getStrategies(argument: _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, callback: grpc.requestCallback<_tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SignalServiceHandlers extends grpc.UntypedServiceImplementation {
  GetSignals: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetSignalsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetSignalsResponse>;
  
  GetStrategies: grpc.handleUnaryCall<_tinkoff_public_invest_api_contract_v1_GetStrategiesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetStrategiesResponse>;
  
}

export interface SignalServiceDefinition extends grpc.ServiceDefinition {
  GetSignals: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetSignalsRequest, _tinkoff_public_invest_api_contract_v1_GetSignalsResponse, _tinkoff_public_invest_api_contract_v1_GetSignalsRequest__Output, _tinkoff_public_invest_api_contract_v1_GetSignalsResponse__Output>
  GetStrategies: MethodDefinition<_tinkoff_public_invest_api_contract_v1_GetStrategiesRequest, _tinkoff_public_invest_api_contract_v1_GetStrategiesResponse, _tinkoff_public_invest_api_contract_v1_GetStrategiesRequest__Output, _tinkoff_public_invest_api_contract_v1_GetStrategiesResponse__Output>
}
