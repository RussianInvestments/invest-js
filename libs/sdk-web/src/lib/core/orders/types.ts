import {
  OrderExecutionReportStatus,
  OrderState,
  OrderStateStreamResponse,
  OrderStateStreamResponse_OrderState,
  OrderTrade,
} from '@t-tech/invest-grpc-web';
import { Money } from '../shared/money';
import { Decimal } from '@t-tech/invest-shared';

export type OrderInformation = Omit<
  OrderState,
  | 'initialOrderPrice'
  | 'executedOrderPrice'
  | 'totalOrderAmount'
  | 'averagePositionPrice'
  | 'initialCommission'
  | 'executedCommission'
  | 'initialSecurityPrice'
  | 'serviceCommission'
> & {
  initialOrderPrice: Money | undefined;
  executedOrderPrice: Money | undefined;
  totalOrderAmount: Money | undefined;
  averagePositionPrice: Money | undefined;
  initialCommission: Money | undefined;
  executedCommission: Money | undefined;
  initialSecurityPrice: Money | undefined;
  serviceCommission: Money | undefined;
};

export type OrderTradeInformation = Omit<OrderTrade, 'price'> & {
  price?: Decimal;
};

export type OrderStreamState = Omit<
  OrderStateStreamResponse_OrderState,
  'initialOrderPrice' | 'orderPrice' | 'amount' | 'executedOrderPrice' | 'trades'
> & {
  initialOrderPrice?: Money;
  orderPrice?: Money;
  amount?: Money;
  executedOrderPrice?: Money;
  trades: OrderTradeInformation[];
};

export type OrderStreamItem = Omit<OrderStateStreamResponse, 'orderState'> & {
  orderState?: OrderStreamState;
};

export type SuccessOrderStreamState = Omit<OrderStreamState, 'executionReportStatus'> & {
  executionReportStatus:
    | OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL
    | OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL;
};

export type SuccessOrderStreamItem = Omit<OrderStateStreamResponse, 'orderState'> & {
  orderState?: OrderStreamState;
};
