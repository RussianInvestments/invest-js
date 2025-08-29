import { GetTradingStatusesResponse, GetTradingStatusesRequest } from '@t-tech/invest-grpc-web';
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
