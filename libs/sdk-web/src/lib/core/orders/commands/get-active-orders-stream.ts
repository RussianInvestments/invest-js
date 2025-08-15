import { OrderStateStreamRequest } from '@t-tech/invest-grpc-web';
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      groupBy((item) => item.orderState!.orderId)
    );
  }
}
