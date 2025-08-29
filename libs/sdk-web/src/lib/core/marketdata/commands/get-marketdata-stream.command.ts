import { MarketDataServerSideStreamRequest } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { from, map, Observable } from 'rxjs';
import { MarketDataStreamMapper } from '../mappers';
import { MarketdataStreamItem } from '../types';

export interface GetMarketdataStreamInput extends MarketDataServerSideStreamRequest {}

export interface GetMarketdataStreamOutput extends Observable<MarketdataStreamItem> {}

export class GetMarketdataStreamCommand extends BaseCommand<
  GetMarketdataStreamInput,
  Promise<GetMarketdataStreamOutput>
> {
  public override async call(client: APIService): Promise<GetMarketdataStreamOutput> {
    const asyncIterable = await client.marketdataStream.marketDataServerSideStream(this.options);

    return from(asyncIterable).pipe(map(MarketDataStreamMapper.map));
  }
}
