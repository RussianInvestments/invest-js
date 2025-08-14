import { GetOrdersRequest } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { OrderInformation } from '../types';
import { Money } from '../../shared/money';

export interface GetActiveOrdersInput extends GetOrdersRequest {}

export interface GetActiveOrdersOutput {
  orders: OrderInformation[];
}

export class GetActiveOrdersCommand extends BaseCommand<
  GetActiveOrdersInput,
  Promise<GetActiveOrdersOutput>
> {
  public override async call(client: APIService): Promise<GetActiveOrdersOutput> {
    const result = await client.orders.getOrders(this.options);
    const mappedOrders = result.orders.map((order) => {
      return {
        ...order,
        initialOrderPrice: order.initialOrderPrice ? new Money(order.initialOrderPrice) : undefined,
        executedOrderPrice: order.executedOrderPrice
          ? new Money(order.executedOrderPrice)
          : undefined,
        totalOrderAmount: order.totalOrderAmount ? new Money(order.totalOrderAmount) : undefined,
        averagePositionPrice: order.averagePositionPrice
          ? new Money(order.averagePositionPrice)
          : undefined,
        initialCommission: order.initialCommission ? new Money(order.initialCommission) : undefined,
        executedCommission: order.executedCommission
          ? new Money(order.executedCommission)
          : undefined,
        initialSecurityPrice: order.initialSecurityPrice
          ? new Money(order.initialSecurityPrice)
          : undefined,
        serviceCommission: order.serviceCommission ? new Money(order.serviceCommission) : undefined,
      };
    });

    return {
      orders: mappedOrders,
    };
  }
}
