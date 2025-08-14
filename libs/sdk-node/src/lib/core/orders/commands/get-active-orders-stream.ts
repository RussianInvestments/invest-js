import { OrderStateStreamRequest } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';
import { OrderStreamItem } from '../types';
import { map, groupBy, filter } from 'ix/asynciterable/operators';
import { from } from 'ix/asynciterable';
import { OrderStateStreamMapper } from '../mappers';

export interface GetActiveOrdersInput extends OrderStateStreamRequest {}

export interface GetActiveOrdersOutput extends AsyncIterable<AsyncIterable<OrderStreamItem>> {}

export class GetActiveOrdersCommand extends BaseCommand<
  GetActiveOrdersInput,
  GetActiveOrdersOutput
> {
  public override call(client: APIService): GetActiveOrdersOutput {
    const asyncIterable = client.ordersStream.orderStateStream(this.options);

    const mappedStream = from(asyncIterable).pipe(map(OrderStateStreamMapper.map));

    return mappedStream.pipe(
      filter((item) => !!item.orderState),
      groupBy((item) => item.orderState.orderId)
    );
  }
}
