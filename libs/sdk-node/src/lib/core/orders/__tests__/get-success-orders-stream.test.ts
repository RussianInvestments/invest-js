import { test, describe } from 'node:test';
import assert from 'node:assert';
import { firstValueFrom, take, toArray } from 'rxjs';
import { Decimal } from '@t-tech/invest-shared';
import { Money } from '../../shared/money';
import { APIService } from '../../shared';
import {
  OrderExecutionReportStatus,
  OrderStateStreamRequest,
  OrderStateStreamResponse,
} from '@tinkoff/grpc-node-client';
import type { SuccessOrderStreamItem, OrderTradeInformation } from '../types';
import { createAsyncIterable } from '../../__tests__';
import { GetSuccessOrdersStreamCommand } from '../commands/get-success-orders-stream';
import { createMockOrderState } from './__fixtures__';

describe('GetSuccessOrdersStreamCommand', () => {
  test('должен фильтровать только успешные ордера и преобразовывать поля', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: createMockOrderState(),
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const results: SuccessOrderStreamItem[] = await firstValueFrom(
      resultObservable.pipe(take(1), toArray())
    );

    assert.strictEqual(results.length, 1);
    const output = results[0];
    const orderState = output.orderState;

    assert.strictEqual(orderState?.orderId, 'order-123');
    assert.strictEqual(
      orderState?.executionReportStatus,
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL
    );

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

  test('должен игнорировать ордера с некорректным статусом', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: createMockOrderState({
        executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED,
      }),
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const results: SuccessOrderStreamItem[] = await firstValueFrom(
      resultObservable.pipe(take(1), toArray())
    );

    assert.strictEqual(results.length, 0);
  });

  test('должен обрабатывать отсутствующие поля', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: createMockOrderState({
        initialOrderPrice: undefined,
        orderPrice: undefined,
        amount: undefined,
        executedOrderPrice: undefined,
        trades: [],
      }),
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const results: SuccessOrderStreamItem[] = await firstValueFrom(
      resultObservable.pipe(take(1), toArray())
    );

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

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      {
        orderState: createMockOrderState({
          orderId: 'order-123',
          initialOrderPrice: {
            currency: 'USD',
            units: 100,
            nano: 500000000,
          },
        }),
      },
      {
        orderState: createMockOrderState({
          orderId: 'order-456',
          initialOrderPrice: {
            currency: 'EUR',
            units: 200,
            nano: 0,
          },
        }),
      },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const results: SuccessOrderStreamItem[] = await firstValueFrom(
      resultObservable.pipe(take(2), toArray())
    );

    assert.strictEqual(results.length, 2);
    assert.strictEqual(results[0].orderState?.orderId, 'order-123');
    assert.strictEqual(results[1].orderState?.orderId, 'order-456');
    assert.strictEqual(results[0].orderState?.initialOrderPrice?.decimal.toString(), '100.5');
    assert.strictEqual(results[1].orderState?.initialOrderPrice?.decimal.toString(), '200');
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

    const command = new GetSuccessOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const results: SuccessOrderStreamItem[] = await firstValueFrom(
      resultObservable.pipe(take(1), toArray())
    );

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

    const command = new GetSuccessOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const results: SuccessOrderStreamItem[] = await firstValueFrom(
      resultObservable.pipe(take(1), toArray())
    );

    assert.strictEqual(results.length, 0);
  });

  test('должен обрабатывать ордера со статусом EXECUTION_REPORT_STATUS_PARTIALLYFILL', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponse: OrderStateStreamResponse = {
      orderState: createMockOrderState({
        executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL,
        trades: [
          {
            tradeId: 'trade-partial-1',
            price: { units: 200, nano: 0 },
            quantity: 3,
            dateTime: new Date(),
          },
        ],
        lotsExecuted: 3,
        lotsLeft: 2,
      }),
    };

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable([mockGrpcResponse]),
      },
    } as unknown as APIService;

    const command = new GetSuccessOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const results: SuccessOrderStreamItem[] = await firstValueFrom(
      resultObservable.pipe(take(1), toArray())
    );

    assert.strictEqual(results.length, 1);
    const output = results[0];
    const orderState = output.orderState;

    assert.strictEqual(
      orderState?.executionReportStatus,
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL
    );
    assert.strictEqual(orderState?.trades.length, 1);
    assert.strictEqual(orderState?.trades[0].tradeId, 'trade-partial-1');
    assert.strictEqual(orderState?.trades[0].quantity, 3);
    assert.strictEqual(orderState?.trades[0].price?.toString(), '200');
  });
});
