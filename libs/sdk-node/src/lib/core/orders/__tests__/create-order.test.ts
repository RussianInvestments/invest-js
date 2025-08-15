/* eslint-disable @typescript-eslint/no-explicit-any */
import { test, describe } from 'node:test';
import assert from 'node:assert';
import { Decimal } from '@t-tech/invest-shared';
import { APIService } from '../../shared';
import { OrderDirection, OrderType, PriceType, TimeInForceType } from '@tinkoff/grpc-node-client';
import { CreateOrderCommand, CreateOrderInput } from '../commands';

describe('CreateOrderCommand', () => {
  test('должен вызвать postOrder без price', async () => {
    const postOrderMock = async (request: any) => {
      assert.deepStrictEqual(request, {
        instrumentId: 'instrument-123',
        quantity: 5,
        direction: OrderDirection.ORDER_DIRECTION_BUY,
        accountId: 'account-123',
        orderType: OrderType.ORDER_TYPE_LIMIT,
        orderId: 'order-123',
        timeInForce: TimeInForceType.TIME_IN_FORCE_DAY,
        priceType: PriceType.PRICE_TYPE_CURRENCY,
        confirmMarginTrade: false,
      });
      return {
        orderId: 'test-order-id',
        executionReportStatus: 'EXECUTION_REPORT_STATUS_FILL',
        lotsRequested: 5,
        lotsExecuted: 5,
        orderRequestId: 'mock-id',
      };
    };

    const mockAPIService = {
      orders: {
        postOrder: postOrderMock,
      },
    } as unknown as APIService;

    const options: CreateOrderInput = {
      instrumentId: 'instrument-123',
      quantity: 5,
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      accountId: 'account-123',
      orderType: OrderType.ORDER_TYPE_LIMIT,
      orderId: 'order-123',
      timeInForce: TimeInForceType.TIME_IN_FORCE_DAY,
      priceType: PriceType.PRICE_TYPE_CURRENCY,
      confirmMarginTrade: false,
    };

    const command = new CreateOrderCommand(options);
    const result = await command.call(mockAPIService);

    assert.strictEqual(result.orderId, 'test-order-id');
    assert.strictEqual(result.executionReportStatus, 'EXECUTION_REPORT_STATUS_FILL');
  });

  test('должен вызвать postOrder с price, преобразованной через toPrimitives', async () => {
    const priceDecimal = new Decimal('100.50');
    const pricePrimitives = { units: '100', nano: 500000000 };

    const originalToPrimitives = priceDecimal.toPrimitives;
    (priceDecimal as any).toPrimitives = () => pricePrimitives;

    const postOrderMock = async (request: any) => {
      assert.deepStrictEqual(request, {
        instrumentId: 'instrument-123',
        quantity: 5,
        price: pricePrimitives,
        direction: OrderDirection.ORDER_DIRECTION_SELL,
        accountId: 'account-123',
        orderType: OrderType.ORDER_TYPE_MARKET,
        orderId: 'order-123',
        timeInForce: TimeInForceType.TIME_IN_FORCE_FILL_AND_KILL,
        priceType: PriceType.PRICE_TYPE_POINT,
        confirmMarginTrade: true,
      });
      return {
        orderId: 'test-order-id',
        executionReportStatus: 'EXECUTION_REPORT_STATUS_FILL',
        lotsRequested: 5,
        lotsExecuted: 5,
        orderRequestId: 'mock-id',
      };
    };

    const mockAPIService = {
      orders: {
        postOrder: postOrderMock,
      },
    } as unknown as APIService;

    const options: CreateOrderInput = {
      instrumentId: 'instrument-123',
      quantity: 5,
      price: priceDecimal,
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      accountId: 'account-123',
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: 'order-123',
      timeInForce: TimeInForceType.TIME_IN_FORCE_FILL_AND_KILL,
      priceType: PriceType.PRICE_TYPE_POINT,
      confirmMarginTrade: true,
    };

    const command = new CreateOrderCommand(options);
    const result = await command.call(mockAPIService);

    assert.strictEqual(result.orderId, 'test-order-id');

    (priceDecimal as any).toPrimitives = originalToPrimitives;
  });

  test('должен передать все дополнительные поля', async () => {
    const postOrderMock = async (request: any) => {
      assert.deepStrictEqual(request, {
        instrumentId: 'instrument-123',
        quantity: 5,
        direction: OrderDirection.ORDER_DIRECTION_UNSPECIFIED,
        accountId: 'account-123',
        orderType: OrderType.ORDER_TYPE_BESTPRICE,
        orderId: 'order-123',
        timeInForce: TimeInForceType.TIME_IN_FORCE_DAY,
        priceType: PriceType.PRICE_TYPE_CURRENCY,
        confirmMarginTrade: true,
      });
      return {
        orderId: 'test-order-id',
        executionReportStatus: 'EXECUTION_REPORT_STATUS_FILL',
        lotsRequested: 5,
        lotsExecuted: 5,
        orderRequestId: 'mock-id',
      };
    };

    const mockAPIService = {
      orders: {
        postOrder: postOrderMock,
      },
    } as unknown as APIService;

    const options: CreateOrderInput = {
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

    const command = new CreateOrderCommand(options);
    const result = await command.call(mockAPIService);

    assert.strictEqual(result.orderId, 'test-order-id');
  });
});
