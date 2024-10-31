// Original file: investAPI/src/docs/contracts/signals.proto

import type { StrategyType as _tinkoff_public_invest_api_contract_v1_StrategyType } from '../../../../../../tinkoff/public/invest/api/contract/v1/StrategyType';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Long } from '@grpc/proto-loader';

export interface Strategy {
  'strategyId'?: (string);
  'strategyName'?: (string);
  'strategyDescription'?: (string);
  'strategyUrl'?: (string);
  'strategyType'?: (_tinkoff_public_invest_api_contract_v1_StrategyType | keyof typeof _tinkoff_public_invest_api_contract_v1_StrategyType);
  'activeSignals'?: (number);
  'totalSignals'?: (number);
  'timeInPosition'?: (number | string | Long);
  'averageSignalYield'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'averageSignalYieldYear'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'yield'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'yieldYear'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  '_strategyDescription'?: "strategyDescription";
  '_strategyUrl'?: "strategyUrl";
}

export interface Strategy__Output {
  'strategyId': (string);
  'strategyName': (string);
  'strategyDescription'?: (string);
  'strategyUrl'?: (string);
  'strategyType': (keyof typeof _tinkoff_public_invest_api_contract_v1_StrategyType);
  'activeSignals': (number);
  'totalSignals': (number);
  'timeInPosition': (string);
  'averageSignalYield': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'averageSignalYieldYear': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'yield': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'yieldYear': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  '_strategyDescription': "strategyDescription";
  '_strategyUrl': "strategyUrl";
}
