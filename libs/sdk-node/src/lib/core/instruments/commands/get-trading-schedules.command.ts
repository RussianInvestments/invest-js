import { TradingSchedulesRequest, TradingSchedulesResponse } from '@tinkoff/grpc-node-client';
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
