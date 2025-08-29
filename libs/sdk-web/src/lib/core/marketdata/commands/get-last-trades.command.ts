import { GetLastTradesRequest } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { MarketdataTrade } from '../types';
import { TradesMapper } from '../mappers';

export interface GetLastTradesInput extends GetLastTradesRequest {}

export interface GetLastTradesOutput {
  trades: MarketdataTrade[];
}

export class GetLastTradesCommand extends BaseCommand<
  GetLastTradesInput,
  Promise<GetLastTradesOutput>
> {
  public override async call(client: APIService): Promise<GetLastTradesOutput> {
    const response = await client.marketdata.getLastTrades(this.options);

    return {
      trades: response.trades.map(TradesMapper.map),
    };
  }
}
