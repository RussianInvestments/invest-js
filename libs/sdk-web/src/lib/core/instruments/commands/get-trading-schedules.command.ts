import { TradingSchedulesRequest, TradingSchedulesResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetTradingSchedulesInput extends TradingSchedulesRequest {}

export interface GetTradingSchedulesOutput extends TradingSchedulesResponse {}

export class GetTradingSchedulesCommand extends BaseCommand<
  GetTradingSchedulesInput,
  Promise<GetTradingSchedulesOutput>
> {
  public override call(client: APIService): Promise<GetTradingSchedulesOutput> {
    return client.instruments.tradingSchedules(this.options);
  }
}
