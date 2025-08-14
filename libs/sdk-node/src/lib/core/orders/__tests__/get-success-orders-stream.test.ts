/* eslint-disable @typescript-eslint/no-explicit-any */
import { test, describe } from 'node:test';
import assert from 'node:assert';
import { Decimal } from '@t-tech/invest-shared';
import { Money } from '../../shared/money';
import { APIService } from '../../shared';
import {
  OrderExecutionReportStatus,
  OrderStateStreamRequest,
  OrderStateStreamResponse,
  OrderStateStreamResponse_OrderState,
} from '@tinkoff/grpc-node-client';
import type { OrderStreamItem, OrderTradeInformation } from '../types';
import { GetSuccessOrdersCommand } from '../commands/get-success-orders-stream';
import { createAsyncIterable } from '../../__tests__';

describe('GetSuccessOrdersCommand', () => {
  test('должен фильтровать только успешные ордера и преобразовывать поля', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockOrderState: OrderStateStreamResponse_OrderState = {
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
          price: {
            units: 100,
            nano: 500000000,
          },
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
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: mockOrderState,
      ping: undefined,
      subscription: undefined,
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[] = [];
    for await (const result of resultAsyncIterable) {
      results.push(result);
    }

    assert.strictEqual(results.length, 1);
    const output = results[0];
    const orderState = output.orderState;

    assert.strictEqual(orderState?.orderId, 'order-123');
    assert.strictEqual(
      orderState?.executionReportStatus,
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL
    );

    // Проверяем Money поля
    assert.ok(orderState?.initialOrderPrice instanceof Money);
    assert.strictEqual(orderState?.initialOrderPrice?.currency, 'USD');
    assert.strictEqual(orderState?.initialOrderPrice?.decimal.toString(), '100.5');

    assert.ok(orderState?.orderPrice instanceof Money);
    assert.strictEqual(orderState?.orderPrice?.currency, 'USD');
    assert.strictEqual(orderState?.orderPrice?.decimal.toString(), '100.25');

    assert.ok(orderState?.amount instanceof Money);
    assert.strictEqual(orderState?.amount?.currency, 'USD');
    assert.strictEqual(orderState?.amount?.decimal.toString(), '500');

    assert.ok(orderState?.executedOrderPrice instanceof Money);
    assert.strictEqual(orderState?.executedOrderPrice?.currency, 'USD');
    assert.strictEqual(orderState?.executedOrderPrice?.decimal.toString(), '100.5');

    // Проверяем trades
    assert.strictEqual(orderState?.trades.length, 1);
    const trade: OrderTradeInformation = orderState?.trades[0];
    assert.strictEqual(trade.tradeId, 'trade-1');
    assert.strictEqual(trade.quantity, 5);
    assert.ok(trade.price instanceof Decimal);
    assert.strictEqual(trade.price.toString(), '100.5');
  });

  test('должен игнорировать ордера, не соответствующие статусу EXECUTION_REPORT_STATUS_FILL', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: {
        orderId: 'order-456',
        executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED,
        trades: [],
        direction: 0,
        timeInForce: 0,
        orderType: 0,
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
        executedOrderPrice: {
          currency: 'USD',
          units: 100,
          nano: 500000000,
        },
        accountId: 'account-123',
        ticker: 'SBER',
        classCode: 'TQBR',
        lotSize: 1,
        createdAt: new Date(),
        statusInfo: undefined,
        currency: 'USD',
        lotsRequested: 10,
        lotsExecuted: 0,
        lotsLeft: 10,
        lotsCancelled: 0,
        completionTime: undefined,
        exchange: 'MOEX',
        instrumentUid: 'instrument-456',
        clientCode: 'client-456',
        marker: undefined,
      },
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: any[] = [];
    for await (const result of resultAsyncIterable) {
      results.push(result);
    }

    assert.strictEqual(results.length, 0);
  });

  test('должен корректно обрабатывать отсутствующие поля', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: {
        orderId: 'order-789',
        executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL,
        trades: [],
        direction: 0,
        timeInForce: 0,
        orderType: 0,
        accountId: 'account-123',
        ticker: 'SBER',
        classCode: 'TQBR',
        lotSize: 1,
        createdAt: new Date(),
        statusInfo: undefined,
        currency: 'USD',
        lotsRequested: 10,
        lotsExecuted: 10,
        lotsLeft: 0,
        lotsCancelled: 0,
        completionTime: new Date(),
        exchange: 'MOEX',
        instrumentUid: 'instrument-789',
        clientCode: 'client-789',
        marker: undefined,
        // Все опциональные поля отсутствуют
        initialOrderPrice: undefined,
        orderPrice: undefined,
        amount: undefined,
        executedOrderPrice: undefined,
      },
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: { orderState?: any }[] = [];
    for await (const result of resultAsyncIterable) {
      results.push(result);
    }

    assert.strictEqual(results.length, 1);
    const output = results[0];
    const orderState = output.orderState;

    assert.strictEqual(orderState?.initialOrderPrice, undefined);
    assert.strictEqual(orderState?.orderPrice, undefined);
    assert.strictEqual(orderState?.amount, undefined);
    assert.strictEqual(orderState?.executedOrderPrice, undefined);
    assert.strictEqual(orderState?.trades.length, 0);
  });

  test('должен обрабатывать несколько ордеров', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockOrderState1: OrderStateStreamResponse_OrderState = {
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
          price: {
            units: 100,
            nano: 500000000,
          },
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
    };

    const mockOrderState2: OrderStateStreamResponse_OrderState = {
      orderId: 'order-456',
      executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL,
      initialOrderPrice: {
        currency: 'EUR',
        units: 200,
        nano: 0,
      },
      orderPrice: undefined,
      amount: undefined,
      executedOrderPrice: undefined,
      trades: [],
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
      currency: 'EUR',
      lotsRequested: 10,
      lotsExecuted: 10,
      lotsLeft: 0,
      lotsCancelled: 0,
      completionTime: new Date('2025-01-01T00:01:00Z'),
      exchange: 'MOEX',
      instrumentUid: 'instrument-456',
      marker: undefined,
    };

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      { orderState: mockOrderState1 },
      { orderState: mockOrderState2 },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[] = [];
    for await (const result of resultAsyncIterable) {
      results.push(result);
    }

    assert.strictEqual(results.length, 2);

    const [order1, order2] = results;

    assert.strictEqual(order1.orderState?.orderId, 'order-123');
    assert.strictEqual(order2.orderState?.orderId, 'order-456');
    assert.strictEqual(order1.orderState?.initialOrderPrice?.currency, 'USD');
    assert.strictEqual(order1.orderState?.initialOrderPrice?.decimal.toString(), '100.5');
    assert.strictEqual(order2.orderState?.initialOrderPrice?.currency, 'EUR');
    assert.strictEqual(order2.orderState?.initialOrderPrice?.decimal.toString(), '200');
  });

  test('должен игнорировать ping и subscription в OrderStateStreamResponse', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: undefined,
      ping: {
        time: new Date(),
        streamId: 'stream-123',
      },
      subscription: {
        trackingId: 'tracking-123',
        status: 0,
        streamId: 'stream-123',
        accounts: ['account-123'],
      },
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: any[] = [];
    for await (const result of resultAsyncIterable) {
      results.push(result);
    }

    assert.strictEqual(results.length, 0);
  });

  test('должен корректно обрабатывать пустой orderState', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: undefined,
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: any[] = [];
    for await (const result of resultAsyncIterable) {
      results.push(result);
    }

    assert.strictEqual(results.length, 0);
  });

  test('должен обрабатывать ордера со статусом EXECUTION_REPORT_STATUS_PARTIALLYFILL', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockOrderState: OrderStateStreamResponse_OrderState = {
      orderId: 'order-partial-1',
      executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL,
      initialOrderPrice: {
        currency: 'USD',
        units: 200,
        nano: 0,
      },
      orderPrice: {
        currency: 'USD',
        units: 200,
        nano: 0,
      },
      amount: {
        currency: 'USD',
        units: 1000,
        nano: 0,
      },
      executedOrderPrice: {
        currency: 'USD',
        units: 200,
        nano: 0,
      },
      trades: [
        {
          tradeId: 'trade-partial-1',
          price: {
            units: 200,
            nano: 0,
          },
          quantity: 3,
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
      lotsExecuted: 3,
      lotsLeft: 2,
      lotsCancelled: 0,
      completionTime: undefined,
      exchange: 'MOEX',
      instrumentUid: 'instrument-123',
      marker: undefined,
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: mockOrderState,
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[] = [];
    for await (const result of resultAsyncIterable) {
      results.push(result);
    }

    assert.strictEqual(results.length, 1);
    const output = results[0];
    const orderState = output.orderState;

    assert.strictEqual(orderState?.orderId, 'order-partial-1');
    assert.strictEqual(
      orderState?.executionReportStatus,
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL
    );

    // Проверяем Money поля
    assert.ok(orderState?.initialOrderPrice instanceof Money);
    assert.strictEqual(orderState?.initialOrderPrice?.currency, 'USD');
    assert.strictEqual(orderState?.initialOrderPrice?.decimal.toString(), '200');

    assert.ok(orderState?.executedOrderPrice instanceof Money);
    assert.strictEqual(orderState?.executedOrderPrice?.currency, 'USD');
    assert.strictEqual(orderState?.executedOrderPrice?.decimal.toString(), '200');

    // Проверяем trades
    assert.strictEqual(orderState?.trades.length, 1);
    const trade: OrderTradeInformation = orderState?.trades[0];
    assert.strictEqual(trade.tradeId, 'trade-partial-1');
    assert.strictEqual(trade.quantity, 3);
    assert.ok(trade.price instanceof Decimal);
    assert.strictEqual(trade.price.toString(), '200');
  });
});
