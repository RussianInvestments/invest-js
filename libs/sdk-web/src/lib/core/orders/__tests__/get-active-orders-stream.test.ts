import { test, describe } from 'node:test';
import assert from 'node:assert';
import { firstValueFrom, take, toArray, mergeMap } from 'rxjs';
import { Decimal } from '@t-tech/invest-shared';
import { Money } from '../../shared/money';
import { APIService } from '../../shared';
import { OrderStateStreamRequest, OrderStateStreamResponse } from '@t-tech/invest-grpc-web';
import type { OrderStreamItem } from '../types';
import { createAsyncIterable } from '../../__tests__';
import { GetActiveOrdersStreamCommand } from '../commands';
import { createMockOrderState } from './__fixtures__';

describe('GetActiveOrdersStreamCommand', () => {
  test('должен возвращать Observable<Observable<OrderStreamItem>> и корректно группировать по orderId', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      { orderState: createMockOrderState({ orderId: 'order-123' }) },
      { orderState: createMockOrderState({ orderId: 'order-123' }) },
      { orderState: createMockOrderState({ orderId: 'order-456' }) },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const groupResults: OrderStreamItem[][] = await firstValueFrom(
      resultObservable.pipe(
        mergeMap((inner$) => inner$.pipe(toArray())),
        take(2),
        toArray()
      )
    );

    assert.strictEqual(groupResults.length, 2);
    assert.strictEqual(groupResults[0].length, 2);
    assert.strictEqual(groupResults[1].length, 1);
    assert.strictEqual(groupResults[0][0].orderState?.orderId, 'order-123');
    assert.strictEqual(groupResults[0][1].orderState?.orderId, 'order-123');
    assert.strictEqual(groupResults[1][0].orderState?.orderId, 'order-456');
  });

  test('должен игнорировать ping и subscription в OrderStateStreamResponse', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      {
        orderState: undefined,
        ping: {
          time: new Date(),
          streamId: 'stream-123',
        },
      },
      {
        orderState: undefined,
        subscription: {
          trackingId: 'tracking-123',
          status: 0,
          streamId: 'stream-123',
          accounts: ['account-123'],
        },
      },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const groupResults: OrderStreamItem[][] = await firstValueFrom(
      resultObservable.pipe(
        mergeMap((inner$) => inner$.pipe(toArray())),
        take(1),
        toArray()
      )
    );

    assert.strictEqual(groupResults.length, 0);
  });

  test('должен обрабатывать пустой orderState', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      {
        orderState: undefined,
      },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const groupResults: OrderStreamItem[][] = await firstValueFrom(
      resultObservable.pipe(
        mergeMap((inner$) => inner$.pipe(toArray())),
        take(1),
        toArray()
      )
    );

    assert.strictEqual(groupResults.length, 0);
  });

  test('должен корректно маппить поля orderState в OrderStreamItem', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      {
        orderState: createMockOrderState({
          orderId: 'order-123',
          executionReportStatus: 1,
          trades: [
            {
              tradeId: 'trade-1',
              price: { units: 100, nano: 500000000 },
              quantity: 5,
              dateTime: new Date(),
            },
          ],
        }),
      },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const groupResults: OrderStreamItem[][] = await firstValueFrom(
      resultObservable.pipe(
        mergeMap((inner$) => inner$.pipe(toArray())),
        take(1),
        toArray()
      )
    );

    const items = groupResults[0];
    assert.strictEqual(items.length, 1);

    const output = items[0];
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
    const trade = orderState?.trades[0];
    assert.strictEqual(trade.tradeId, 'trade-1');
    assert.strictEqual(trade.quantity, 5);
    assert.ok(trade.price instanceof Decimal);
    assert.strictEqual(trade.price.toString(), '100.5');
  });

  test('должен обрабатывать отсутствующие опциональные поля', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      {
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
      },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const groupResults: OrderStreamItem[][] = await firstValueFrom(
      resultObservable.pipe(
        mergeMap((inner$) => inner$.pipe(toArray())),
        take(1),
        toArray()
      )
    );

    const items = groupResults[0];
    assert.strictEqual(items.length, 1);

    const output = items[0];
    const orderState = output.orderState;

    assert.strictEqual(orderState?.initialOrderPrice, undefined);
    assert.strictEqual(orderState?.orderPrice, undefined);
    assert.strictEqual(orderState?.amount, undefined);
    assert.strictEqual(orderState?.executedOrderPrice, undefined);
    assert.strictEqual(orderState?.trades.length, 0);
  });

  test('должен обрабатывать несколько обновлений одного ордера', async () => {
    const mockRequest: OrderStateStreamRequest = {
      accounts: ['account-123'],
    };

    const mockGrpcResponses: OrderStateStreamResponse[] = [
      { orderState: createMockOrderState({ orderId: 'order-123', lotsExecuted: 1 }) },
      { orderState: createMockOrderState({ orderId: 'order-123', lotsExecuted: 2 }) },
      { orderState: createMockOrderState({ orderId: 'order-123', lotsExecuted: 3 }) },
    ];

    const mockAPIService = {
      ordersStream: {
        orderStateStream: () => createAsyncIterable(mockGrpcResponses),
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersStreamCommand(mockRequest);
    const resultObservable = command.call(mockAPIService);

    const groupResults: OrderStreamItem[][] = await firstValueFrom(
      resultObservable.pipe(
        mergeMap((inner$) => inner$.pipe(toArray())),
        take(1),
        toArray()
      )
    );

    const items = groupResults[0];
    assert.strictEqual(items.length, 3);
    assert.strictEqual(items[0].orderState?.lotsExecuted, 1);
    assert.strictEqual(items[1].orderState?.lotsExecuted, 2);
    assert.strictEqual(items[2].orderState?.lotsExecuted, 3);
  });
});
