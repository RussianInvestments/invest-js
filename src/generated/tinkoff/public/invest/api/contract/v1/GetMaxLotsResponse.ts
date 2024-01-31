// Original file: investAPI/src/docs/contracts/orders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_BuyLimitsView {
  'buyMoneyAmount'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'buyMaxLots'?: (number | string | Long);
  'buyMaxMarketLots'?: (number | string | Long);
}

export interface _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_BuyLimitsView__Output {
  'buyMoneyAmount': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'buyMaxLots': (string);
  'buyMaxMarketLots': (string);
}

export interface _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_SellLimitsView {
  'sellMaxLots'?: (number | string | Long);
}

export interface _tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_SellLimitsView__Output {
  'sellMaxLots': (string);
}

export interface GetMaxLotsResponse {
  'currency'?: (string);
  'buyLimits'?: (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_BuyLimitsView | null);
  'buyMarginLimits'?: (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_BuyLimitsView | null);
  'sellLimits'?: (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_SellLimitsView | null);
  'sellMarginLimits'?: (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_SellLimitsView | null);
}

export interface GetMaxLotsResponse__Output {
  'currency': (string);
  'buyLimits': (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_BuyLimitsView__Output | null);
  'buyMarginLimits': (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_BuyLimitsView__Output | null);
  'sellLimits': (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_SellLimitsView__Output | null);
  'sellMarginLimits': (_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse_SellLimitsView__Output | null);
}
