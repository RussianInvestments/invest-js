// Original file: investAPI/src/docs/contracts/orders.proto

import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraBond {
  'aciValue'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'nominalConversionRate'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraBond__Output {
  'aciValue': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'nominalConversionRate': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraFuture {
  'initialMargin'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraFuture__Output {
  'initialMargin': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
}

export interface GetOrderPriceResponse {
  'totalOrderAmount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'lotsRequested'?: (number | string | Long);
  'initialOrderAmount'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'executedCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'executedCommissionRub'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'serviceCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'dealCommission'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'extraBond'?: (_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraBond | null);
  'extraFuture'?: (_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraFuture | null);
  'instrumentExtra'?: "extraBond"|"extraFuture";
}

export interface GetOrderPriceResponse__Output {
  'totalOrderAmount': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'lotsRequested': (string);
  'initialOrderAmount': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'executedCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'executedCommissionRub': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'serviceCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'dealCommission': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'extraBond'?: (_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraBond__Output | null);
  'extraFuture'?: (_tinkoff_public_invest_api_contract_v1_GetOrderPriceResponse_ExtraFuture__Output | null);
  'instrumentExtra': "extraBond"|"extraFuture";
}
