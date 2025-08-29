import { OrderStateStreamRequest } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';
import { OrderStreamItem } from '../types';
import { OrderStateStreamMapper } from '../mappers';
import { filter, from, groupBy, map, Observable } from 'rxjs';

export interface GetActiveOrdersStreamInput extends OrderStateStreamRequest {}

export interface GetActiveOrdersStreamOutput extends Observable<Observable<OrderStreamItem>> {}

export class GetActiveOrdersStreamCommand extends BaseCommand<
  GetActiveOrdersStreamInput,
  GetActiveOrdersStreamOutput
> {
  public override call(client: APIService): GetActiveOrdersStreamOutput {
    const asyncIterable = client.ordersStream.orderStateStream(this.options);

    return from(asyncIterable).pipe(
      filter((item) => !!item.orderState),
      map((value) => OrderStateStreamMapper.map(value)),
      // TODO: придумать как можно избавиться от !, так как выше есть фильтр
      // @ts-expect-error Выше есть фильтр
      groupBy((item) => item.orderState.orderId)
    );
  }
}
