import { GetClosePricesRequest } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { MarketdataClosePrice } from '../types';
import { ClosePricesMapper } from '../mappers';

export interface GetClosePricesInput extends GetClosePricesRequest {}

export interface GetClosePricesOutput {
  closePrices: MarketdataClosePrice[];
}

export class GetClosePricesCommand extends BaseCommand<
  GetClosePricesInput,
  Promise<GetClosePricesOutput>
> {
  public override async call(client: APIService): Promise<GetClosePricesOutput> {
    const response = await client.marketdata.getClosePrices(this.options);

    return {
      closePrices: response.closePrices.map(ClosePricesMapper.map),
    };
  }
}
