import { GetTradingStatusesResponse, GetTradingStatusesRequest } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';

export interface GetTradingStatusesInput extends GetTradingStatusesRequest {}

export interface GetTradingStatusesOutput extends GetTradingStatusesResponse {}

export class GetTradingStatusesCommand extends BaseCommand<
  GetTradingStatusesInput,
  Promise<GetTradingStatusesOutput>
> {
  public override async call(client: APIService): Promise<GetTradingStatusesOutput> {
    return client.marketdata.getTradingStatuses(this.options);
  }
}
