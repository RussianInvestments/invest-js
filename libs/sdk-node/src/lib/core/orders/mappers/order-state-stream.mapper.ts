import { OrderStateStreamResponse } from '@tinkoff/grpc-node-client';
import { OrderStreamItem, OrderTradeInformation } from '../types';
import { Money } from '../../shared/money';
import { Decimal } from '@t-tech/invest-shared';

export class OrderStateStreamMapper {
  public static map(value: OrderStateStreamResponse): OrderStreamItem {
    const { orderState, ...otherData } = value;
    if (typeof orderState === 'undefined') {
      return {
        ...otherData,
        orderState: undefined,
      };
    }

    const {
      initialOrderPrice,
      orderPrice,
      amount,
      executedOrderPrice,
      trades,
      ...otherOrderState
    } = orderState;

    return {
      ...otherData,
      orderState: {
        ...otherOrderState,
        initialOrderPrice: initialOrderPrice ? new Money(initialOrderPrice) : undefined,
        orderPrice: orderPrice ? new Money(orderPrice) : undefined,
        amount: amount ? new Money(amount) : undefined,
        executedOrderPrice: executedOrderPrice ? new Money(executedOrderPrice) : undefined,
        trades: trades.map((trade): OrderTradeInformation => {
          const { price, ...otherTrade } = trade;
          return {
            ...otherTrade,
            price: price ? new Decimal(price) : undefined,
          };
        }),
      },
    };
  }
}
