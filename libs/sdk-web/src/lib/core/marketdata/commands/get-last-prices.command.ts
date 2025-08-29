import { GetLastPricesRequest } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { MarketdataLastPrice } from '../types';
import { LastPricesMapper } from '../mappers';

export interface GetLastPricesInput extends GetLastPricesRequest {}

export interface GetLastPricesOutput {
  lastPrices: MarketdataLastPrice[];
}

export class GetLastPricesCommand extends BaseCommand<
  GetLastPricesInput,
  Promise<GetLastPricesOutput>
> {
  public override async call(client: APIService): Promise<GetLastPricesOutput> {
    const response = await client.marketdata.getLastPrices(this.options);

    return {
      lastPrices: response.lastPrices.map(LastPricesMapper.map),
    };
  }
}
