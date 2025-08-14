import { mock } from 'node:test';
import { APIService } from '../../shared';

export const createMockClient = () => {
  const mockClient = {
    instruments: mock.fn(),
    marketdata: mock.fn(),
    marketdataStream: mock.fn(),
    operations: mock.fn(),
    operationsStream: mock.fn(),
    orders: mock.fn(),
    ordersStream: mock.fn(),
    stopOrders: mock.fn(),
    users: mock.fn(),
  };
  return mockClient as unknown as APIService;
};
