import { OrderExecutionReportStatus, OrderStateStreamRequest } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';
import { SuccessOrderStreamItem } from '../types';
import { OrderStateStreamMapper } from '../mappers';
import { filter, map } from 'ix/asynciterable/operators';
import { from } from 'ix/asynciterable';

export interface GetSuccessOrdersInput extends OrderStateStreamRequest {}

export interface GetSuccessOrdersOutput extends AsyncIterable<SuccessOrderStreamItem> {}

export class GetSuccessOrdersCommand extends BaseCommand<
  GetSuccessOrdersInput,
  GetSuccessOrdersOutput
> {
  public override call(client: APIService): GetSuccessOrdersOutput {
    const asyncIterable = client.ordersStream.orderStateStream(this.options);

    return from(asyncIterable).pipe(
      filter((value) => {
        return (
          value.orderState?.executionReportStatus ===
            OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL ||
          value.orderState?.executionReportStatus ===
            OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL
        );
      }),
      map(OrderStateStreamMapper.map)
    );
  }
}
