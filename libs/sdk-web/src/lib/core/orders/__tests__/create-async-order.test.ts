/* eslint-disable @typescript-eslint/no-explicit-any */
import { test, describe } from 'node:test';
import assert from 'node:assert';
import { Decimal } from '@t-tech/invest-shared';
import { APIService } from '../../shared';
import { CreateAsyncOrderCommand, CreateAsyncOrderInput } from '../commands/create-async-order';
import { OrderDirection, OrderType, PriceType, TimeInForceType } from '@t-tech/invest-grpc-web';

describe('CreateAsyncOrderCommand', () => {
  test('должен вызвать postOrderAsync без price', async () => {
    const expectedRequest: CreateAsyncOrderInput = {
      instrumentId: 'instrument-123',
      quantity: 5,
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      accountId: 'account-123',
      orderType: OrderType.ORDER_TYPE_LIMIT,
      orderId: 'order-123',
      confirmMarginTrade: false,
    };

    const mockAPIService = {
      orders: {
        postOrderAsync: async (request: any) => {
          assert.deepStrictEqual(request, expectedRequest);
          return {
            orderRequestId: 'mock-id',
            executionReportStatus: 'EXECUTION_REPORT_STATUS_FILL',
          };
        },
      },
    } as unknown as APIService;

    const options: CreateAsyncOrderInput = {
      ...expectedRequest,
    };

    const command = new CreateAsyncOrderCommand(options);
    const result = await command.call(mockAPIService);

    assert.strictEqual(result.orderRequestId, 'mock-id');
    assert.strictEqual(result.executionReportStatus, 'EXECUTION_REPORT_STATUS_FILL');
  });

  test('должен вызвать postOrderAsync с price, преобразованной через toPrimitives', async () => {
    const priceDecimal = new Decimal('100.50');
    const pricePrimitives = { units: '100', nano: 500000000 };

    const originalToPrimitives = priceDecimal.toPrimitives;
    (priceDecimal as any).toPrimitives = () => pricePrimitives;

    const expectedRequest = {
      instrumentId: 'instrument-123',
      quantity: 5,
      price: pricePrimitives,
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      accountId: 'account-123',
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: 'order-123',
      confirmMarginTrade: false,
    };

    const mockAPIService = {
      orders: {
        postOrderAsync: async (request: any) => {
          assert.deepStrictEqual(request, expectedRequest);
          return {
            orderRequestId: 'mock-id',
            executionReportStatus: 'EXECUTION_REPORT_STATUS_FILL',
          };
        },
      },
    } as unknown as APIService;

    const options: CreateAsyncOrderInput = {
      instrumentId: 'instrument-123',
      quantity: 5,
      price: priceDecimal,
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      accountId: 'account-123',
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: 'order-123',
      confirmMarginTrade: false,
    };

    const command = new CreateAsyncOrderCommand(options);
    const result = await command.call(mockAPIService);

    assert.strictEqual(result.orderRequestId, 'mock-id');
    assert.strictEqual(result.executionReportStatus, 'EXECUTION_REPORT_STATUS_FILL');

    (priceDecimal as any).toPrimitives = originalToPrimitives;
  });

  test('должен передать все дополнительные параметры', async () => {
    const expectedRequest = {
      instrumentId: 'instrument-123',
      quantity: 5,
      direction: OrderDirection.ORDER_DIRECTION_UNSPECIFIED,
      accountId: 'account-123',
      orderType: OrderType.ORDER_TYPE_BESTPRICE,
      orderId: 'order-123',
      timeInForce: TimeInForceType.TIME_IN_FORCE_DAY,
      priceType: PriceType.PRICE_TYPE_CURRENCY,
      confirmMarginTrade: true,
    };

    const mockAPIService = {
      orders: {
        postOrderAsync: async (request: any) => {
          assert.deepStrictEqual(request, expectedRequest);
          return {
            orderRequestId: 'mock-id',
            executionReportStatus: 'EXECUTION_REPORT_STATUS_FILL',
          };
        },
      },
    } as unknown as APIService;

    const options: CreateAsyncOrderInput = {
      instrumentId: 'instrument-123',
      quantity: 5,
      direction: OrderDirection.ORDER_DIRECTION_UNSPECIFIED,
      accountId: 'account-123',
      orderType: OrderType.ORDER_TYPE_BESTPRICE,
      orderId: 'order-123',
      timeInForce: TimeInForceType.TIME_IN_FORCE_DAY,
      priceType: PriceType.PRICE_TYPE_CURRENCY,
      confirmMarginTrade: true,
    };

    const command = new CreateAsyncOrderCommand(options);
    const result = await command.call(mockAPIService);

    assert.strictEqual(result.orderRequestId, 'mock-id');
    assert.strictEqual(result.executionReportStatus, 'EXECUTION_REPORT_STATUS_FILL');
  });
});
