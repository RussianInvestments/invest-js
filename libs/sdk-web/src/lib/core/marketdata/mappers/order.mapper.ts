import { Order } from '@t-tech/invest-grpc-web';
import { Decimal } from '@t-tech/invest-shared';
import { MarketdataOrder } from '../types';

export class OrdersMapper {
  public static map(value: Order): MarketdataOrder {
    const { price, ...otherOrderInfo } = value;

    return {
      ...otherOrderInfo,
      price: price ? new Decimal(price) : undefined,
    };
  }
}
