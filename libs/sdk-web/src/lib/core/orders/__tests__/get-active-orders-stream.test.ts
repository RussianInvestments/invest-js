import { test, describe } from 'node:test';
import assert from 'node:assert';
import { Decimal } from '@t-tech/invest-shared';
import { Money } from '../../shared/money';
import { APIService } from '../../shared';
import {
  OrderStateStreamRequest,
  OrderStateStreamResponse,
  OrderStateStreamResponse_OrderState,
} from '@t-tech/invest-grpc-web';
import type { OrderStreamItem, OrderTradeInformation } from '../types';
import { GetActiveOrdersCommand } from '../commands/get-active-orders-stream';
import { createAsyncIterable } from '../../__tests__';

describe('GetActiveOrdersCommand', () => {
  test('должен возвращать сгруппированные ордера по orderId', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockOrderState1: OrderStateStreamResponse_OrderState = {
      orderId: 'order-123',
      executionReportStatus: 1,
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
      orderId: 'order-123',
      executionReportStatus: 1,
      initialOrderPrice: {
        currency: 'USD',
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
      currency: 'USD',
      lotsRequested: 10,
      lotsExecuted: 10,
      lotsLeft: 0,
      lotsCancelled: 0,
      completionTime: new Date('2025-01-01T00:01:00Z'),
      exchange: 'MOEX',
      instrumentUid: 'instrument-456',
      marker: undefined,
    };

    const mockOrderState3: OrderStateStreamResponse_OrderState = {
      orderId: 'order-456',
      executionReportStatus: 1,
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
      { orderState: mockOrderState3 },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[][] = [];

    for await (const group of resultAsyncIterable) {
      const items: OrderStreamItem[] = [];
      for await (const item of group) {
        items.push(item);
      }
      results.push(items);
    }

    assert.strictEqual(results.length, 2);
    assert.strictEqual(results[0].length, 2);
    assert.strictEqual(results[1].length, 1);
    assert.strictEqual(results[0][0].orderState?.orderId, 'order-123');
    assert.strictEqual(results[0][1].orderState?.orderId, 'order-123');
    assert.strictEqual(results[1][0].orderState?.orderId, 'order-456');
  });

  test('должен корректно маппить поля orderState в OrderStreamItem', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockOrderState: OrderStateStreamResponse_OrderState = {
      orderId: 'order-123',
      executionReportStatus: 1,
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

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: mockOrderState,
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[][] = [];

    for await (const group of resultAsyncIterable) {
      const items: OrderStreamItem[] = [];
      for await (const item of group) {
        items.push(item);
      }
      results.push(items);
    }

    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].length, 1);

    const output = results[0][0];
    const orderState = output.orderState;

    assert.strictEqual(orderState?.orderId, 'order-123');
    assert.strictEqual(orderState?.executionReportStatus, 1);

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

    assert.strictEqual(orderState?.trades.length, 1);
    const trade: OrderTradeInformation = orderState?.trades[0];
    assert.strictEqual(trade.tradeId, 'trade-1');
    assert.strictEqual(trade.quantity, 5);
    assert.ok(trade.price instanceof Decimal);
    assert.strictEqual(trade.price.toString(), '100.5');
  });

  test('должен обрабатывать пустой stream', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([]),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[][] = [];

    for await (const group of resultAsyncIterable) {
      const items: OrderStreamItem[] = [];
      for await (const item of group) {
        items.push(item);
      }
      results.push(items);
    }

    assert.strictEqual(results.length, 0);
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

    const command = new GetActiveOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[][] = [];

    for await (const group of resultAsyncIterable) {
      const items: OrderStreamItem[] = [];
      for await (const item of group) {
        items.push(item);
      }
      results.push(items);
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

    const command = new GetActiveOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[][] = [];

    for await (const group of resultAsyncIterable) {
      const items: OrderStreamItem[] = [];
      for await (const item of group) {
        items.push(item);
      }
      results.push(items);
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
        executionReportStatus: 1,
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

    const command = new GetActiveOrdersCommand(mockRequest);
    const resultAsyncIterable = command.call(mockAPIService);

    const results: OrderStreamItem[][] = [];

    for await (const group of resultAsyncIterable) {
      const items: OrderStreamItem[] = [];
      for await (const item of group) {
        items.push(item);
      }
      results.push(items);
    }

    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].length, 1);

    const output = results[0][0];
    const orderState = output.orderState;

    assert.strictEqual(orderState?.initialOrderPrice, undefined);
    assert.strictEqual(orderState?.orderPrice, undefined);
    assert.strictEqual(orderState?.amount, undefined);
    assert.strictEqual(orderState?.executedOrderPrice, undefined);
    assert.strictEqual(orderState?.trades.length, 0);
  });
});
