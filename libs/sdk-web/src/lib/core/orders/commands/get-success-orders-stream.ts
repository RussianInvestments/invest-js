import { OrderExecutionReportStatus, OrderStateStreamRequest } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { SuccessOrderStreamItem } from '../types';
import { OrderStateStreamMapper } from '../mappers';
import { filter, from, map, Observable } from 'rxjs';

export interface GetSuccessOrdersStreamInput extends OrderStateStreamRequest {}

export interface GetSuccessOrdersStreamOutput extends Observable<SuccessOrderStreamItem> {}

export class GetSuccessOrdersStreamCommand extends BaseCommand<
  GetSuccessOrdersStreamInput,
  GetSuccessOrdersStreamOutput
> {
  public override call(client: APIService): GetSuccessOrdersStreamOutput {
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
