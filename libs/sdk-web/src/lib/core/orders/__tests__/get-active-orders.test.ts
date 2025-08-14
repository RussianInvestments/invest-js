import { test, describe } from 'node:test';
import assert from 'node:assert';
import { APIService } from '../../shared';
import { Money } from '../../shared/money';
import { GetOrdersRequest, OrderExecutionReportStatus } from '@t-tech/invest-grpc-web';
import { OrderDirection, OrderType } from '@t-tech/invest-grpc-web';
import type { OrderInformation } from '../types';
import { GetActiveOrdersCommand } from '../commands';

describe('GetActiveOrdersCommand', () => {
  test('должен корректно преобразовать все поля в Money и вернуть список ордеров', async () => {
    const mockRequest: GetOrdersRequest = {
      accountId: 'account-123',
    };

    const mockGrpcOrderState = {
      orderId: 'order-123',
      executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL,
      lotsRequested: 5,
      lotsExecuted: 5,
      initialOrderPrice: {
        currency: 'USD',
        units: 100,
        nano: 500000000,
      },
      executedOrderPrice: {
        currency: 'USD',
        units: 100,
        nano: 500000000,
      },
      totalOrderAmount: {
        currency: 'USD',
        units: 500,
        nano: 0,
      },
      averagePositionPrice: {
        currency: 'USD',
        units: 100,
        nano: 250000000,
      },
      initialCommission: {
        currency: 'USD',
        units: 1,
        nano: 0,
      },
      executedCommission: {
        currency: 'USD',
        units: 1,
        nano: 0,
      },
      initialSecurityPrice: {
        currency: 'USD',
        units: 100,
        nano: 0,
      },
      serviceCommission: {
        currency: 'USD',
        units: 0,
        nano: 50000000,
      },
      figi: 'figi-123',
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      accountId: 'account-123',
      message: '',
      initialOrderPricePt: undefined,
      instrumentUid: 'instrument-123',
      orderRequestId: 'request-123',
      responseMetadata: undefined,
    };

    const mockGrpcResponse = {
      orders: [mockGrpcOrderState],
    };

    // Мокаем APIService
    const mockAPIService = {
      orders: {
        getOrders: async (request: GetOrdersRequest) => {
          assert.deepStrictEqual(request, mockRequest);
          return mockGrpcResponse;
        },
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersCommand(mockRequest);
    const result = await command.call(mockAPIService);

    assert.strictEqual(result.orders.length, 1);
    const order: OrderInformation = result.orders[0];

    assert.strictEqual(order.orderId, 'order-123');
    assert.strictEqual(
      order.executionReportStatus,
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL
    );
    assert.strictEqual(order.lotsRequested, 5);
    assert.strictEqual(order.lotsExecuted, 5);
    assert.strictEqual(order.figi, 'figi-123');
    assert.strictEqual(order.direction, OrderDirection.ORDER_DIRECTION_BUY);
    assert.strictEqual(order.orderType, OrderType.ORDER_TYPE_LIMIT);

    // Проверяем преобразование в Money
    assert.ok(order.initialOrderPrice instanceof Money);
    assert.strictEqual(order.initialOrderPrice?.currency, 'USD');
    assert.strictEqual(order.initialOrderPrice?.decimal.toString(), '100.5');

    assert.ok(order.executedOrderPrice instanceof Money);
    assert.strictEqual(order.executedOrderPrice?.currency, 'USD');
    assert.strictEqual(order.executedOrderPrice?.decimal.toString(), '100.5');

    assert.ok(order.totalOrderAmount instanceof Money);
    assert.strictEqual(order.totalOrderAmount?.currency, 'USD');
    assert.strictEqual(order.totalOrderAmount?.decimal.toString(), '500');

    assert.ok(order.averagePositionPrice instanceof Money);
    assert.strictEqual(order.averagePositionPrice?.currency, 'USD');
    assert.strictEqual(order.averagePositionPrice?.decimal.toString(), '100.25');

    assert.ok(order.initialCommission instanceof Money);
    assert.strictEqual(order.initialCommission?.currency, 'USD');
    assert.strictEqual(order.initialCommission?.decimal.toString(), '1');

    assert.ok(order.executedCommission instanceof Money);
    assert.strictEqual(order.executedCommission?.currency, 'USD');
    assert.strictEqual(order.executedCommission?.decimal.toString(), '1');

    assert.ok(order.initialSecurityPrice instanceof Money);
    assert.strictEqual(order.initialSecurityPrice?.currency, 'USD');
    assert.strictEqual(order.initialSecurityPrice?.decimal.toString(), '100');

    assert.ok(order.serviceCommission instanceof Money);
    assert.strictEqual(order.serviceCommission?.currency, 'USD');
    assert.strictEqual(order.serviceCommission?.decimal.toString(), '0.05');
  });

  test('должен корректно обрабатывать отсутствующие поля Money', async () => {
    const mockRequest: GetOrdersRequest = {
      accountId: 'account-123',
    };

    const mockGrpcOrderState = {
      orderId: 'order-123',
      executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL,
      lotsRequested: 5,
      lotsExecuted: 5,
      initialOrderPrice: undefined,
      executedOrderPrice: undefined,
      totalOrderAmount: undefined,
      averagePositionPrice: undefined,
      initialCommission: undefined,
      executedCommission: undefined,
      initialSecurityPrice: undefined,
      serviceCommission: undefined,
      figi: 'figi-123',
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      accountId: 'account-123',
      message: '',
      initialOrderPricePt: undefined,
      instrumentUid: 'instrument-123',
      orderRequestId: 'request-123',
      responseMetadata: undefined,
    };

    const mockAPIService = {
      orders: {
        getOrders: async (_request: GetOrdersRequest) => {
          return {
            orders: [mockGrpcOrderState],
          };
        },
      },
    } as unknown as APIService;

    const command = new GetActiveOrdersCommand(mockRequest);
    const result = await command.call(mockAPIService);

    const order: OrderInformation = result.orders[0];

    assert.strictEqual(order.initialOrderPrice, undefined);
    assert.strictEqual(order.executedOrderPrice, undefined);
    assert.strictEqual(order.totalOrderAmount, undefined);
    assert.strictEqual(order.averagePositionPrice, undefined);
    assert.strictEqual(order.initialCommission, undefined);
    assert.strictEqual(order.executedCommission, undefined);
    assert.strictEqual(order.initialSecurityPrice, undefined);
    assert.strictEqual(order.serviceCommission, undefined);
  });
});
