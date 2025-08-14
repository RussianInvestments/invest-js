import { PostOrderRequest, PostOrderResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { Decimal } from '@t-tech/invest-shared';

export interface CreateOrderInput extends Omit<PostOrderRequest, 'price'> {
  price?: Decimal;
}

export interface CreateOrderOutput extends PostOrderResponse {}

export class CreateOrderCommand extends BaseCommand<CreateOrderInput, Promise<CreateOrderOutput>> {
  public override call(client: APIService): Promise<CreateOrderOutput> {
    const { price, ...otherOptions } = this.options;

    return client.orders.postOrder({
      ...otherOptions,
      ...(price ? { price: price.toPrimitives() } : {}),
    });
  }
}
