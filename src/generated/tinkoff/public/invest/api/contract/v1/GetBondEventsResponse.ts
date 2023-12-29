// Original file: investAPI/src/docs/contracts/instruments.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { _tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType } from '../../../../../../tinkoff/public/invest/api/contract/v1/GetBondEventsRequest';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { MoneyValue as _tinkoff_public_invest_api_contract_v1_MoneyValue, MoneyValue__Output as _tinkoff_public_invest_api_contract_v1_MoneyValue__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/MoneyValue';

export interface _tinkoff_public_invest_api_contract_v1_GetBondEventsResponse_BondEvent {
  'instrumentId'?: (string);
  'eventNumber'?: (number);
  'eventDate'?: (_google_protobuf_Timestamp | null);
  'eventType'?: (_tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType | keyof typeof _tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType);
  'eventTotalVol'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'fixDate'?: (_google_protobuf_Timestamp | null);
  'rateDate'?: (_google_protobuf_Timestamp | null);
  'defaultDate'?: (_google_protobuf_Timestamp | null);
  'realPayDate'?: (_google_protobuf_Timestamp | null);
  'payDate'?: (_google_protobuf_Timestamp | null);
  'payOneBond'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'moneyFlowVal'?: (_tinkoff_public_invest_api_contract_v1_MoneyValue | null);
  'execution'?: (string);
  'operationType'?: (string);
  'value'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'note'?: (string);
  'convertToFinToolId'?: (string);
  'couponStartDate'?: (_google_protobuf_Timestamp | null);
  'couponEndDate'?: (_google_protobuf_Timestamp | null);
  'couponPeriod'?: (number);
  'couponInterestRate'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
}

export interface _tinkoff_public_invest_api_contract_v1_GetBondEventsResponse_BondEvent__Output {
  'instrumentId': (string);
  'eventNumber': (number);
  'eventDate': (_google_protobuf_Timestamp__Output | null);
  'eventType': (keyof typeof _tinkoff_public_invest_api_contract_v1_GetBondEventsRequest_EventType);
  'eventTotalVol': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'fixDate': (_google_protobuf_Timestamp__Output | null);
  'rateDate': (_google_protobuf_Timestamp__Output | null);
  'defaultDate': (_google_protobuf_Timestamp__Output | null);
  'realPayDate': (_google_protobuf_Timestamp__Output | null);
  'payDate': (_google_protobuf_Timestamp__Output | null);
  'payOneBond': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'moneyFlowVal': (_tinkoff_public_invest_api_contract_v1_MoneyValue__Output | null);
  'execution': (string);
  'operationType': (string);
  'value': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'note': (string);
  'convertToFinToolId': (string);
  'couponStartDate': (_google_protobuf_Timestamp__Output | null);
  'couponEndDate': (_google_protobuf_Timestamp__Output | null);
  'couponPeriod': (number);
  'couponInterestRate': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
}

export interface GetBondEventsResponse {
  'events'?: (_tinkoff_public_invest_api_contract_v1_GetBondEventsResponse_BondEvent)[];
}

export interface GetBondEventsResponse__Output {
  'events': (_tinkoff_public_invest_api_contract_v1_GetBondEventsResponse_BondEvent__Output)[];
}
