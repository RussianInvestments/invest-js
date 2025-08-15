import {
  OrderExecutionReportStatus,
  OrderStateStreamResponse_OrderState,
} from '@tinkoff/grpc-node-client';

export function createMockOrderState(
  params: Partial<OrderStateStreamResponse_OrderState> = {}
): OrderStateStreamResponse_OrderState {
  return {
    orderId: 'order-123',
    executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL,
    initialOrderPrice: {
      currency: 'USD',
      units: 100,
      nano: 500000000,
    },
    orderPrice: {
      currency: 'USD',
      units: 100,
      nano: 250000000,
    },
    amount: {
      currency: 'USD',
      units: 500,
      nano: 0,
    },
    executedOrderPrice: {
      currency: 'USD',
      units: 100,
      nano: 500000000,
    },
    trades: [
      {
        tradeId: 'trade-1',
        price: { units: 100, nano: 500000000 },
        quantity: 5,
        dateTime: new Date(),
      },
    ],
    clientCode: 'client-123',
    createdAt: new Date('2025-01-01T00:00:00Z'),
    statusInfo: undefined,
    ticker: 'TCSG',
    classCode: 'TQBR',
    lotSize: 1,
    direction: 0,
    timeInForce: 0,
    orderType: 0,
    accountId: 'account-123',
    currency: 'USD',
    lotsRequested: 5,
    lotsExecuted: 5,
    lotsLeft: 0,
    lotsCancelled: 0,
    completionTime: new Date('2025-01-01T00:01:00Z'),
    exchange: 'MOEX',
    instrumentUid: 'instrument-123',
    marker: undefined,
    ...params,
  };
}
