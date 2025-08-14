import { PostOrderAsyncRequest, PostOrderAsyncResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { Decimal } from '@t-tech/invest-shared';

export interface CreateAsyncOrderInput extends Omit<PostOrderAsyncRequest, 'price'> {
  price?: Decimal;
}

export interface CreateAsyncOrderOutput extends PostOrderAsyncResponse {}

export class CreateAsyncOrderCommand extends BaseCommand<
  CreateAsyncOrderInput,
  Promise<CreateAsyncOrderOutput>
> {
  public override call(client: APIService): Promise<CreateAsyncOrderOutput> {
    const { price, ...otherOptions } = this.options;

    return client.orders.postOrderAsync({
      ...otherOptions,
      ...(price ? { price: price.toPrimitives() } : {}),
    });
  }
}
