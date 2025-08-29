import { GetOrderBookRequest, GetOrderBookResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';
import { MarketdataOrder } from '../types';
import { Decimal } from '@t-tech/invest-shared';
import { OrdersMapper } from '../mappers';

export interface GetOrderBookInput extends GetOrderBookRequest {}

export interface GetOrderBookOutput
  extends Omit<
    GetOrderBookResponse,
    'bids' | 'asks' | 'lastPrice' | 'closePrice' | 'limitUp' | 'limitDown'
  > {
  bids: MarketdataOrder[];
  asks: MarketdataOrder[];
  lastPrice?: Decimal;
  closePrice?: Decimal;
  limitUp?: Decimal;
  limitDown?: Decimal;
}

export class GetOrderBookCommand extends BaseCommand<
  GetOrderBookInput,
  Promise<GetOrderBookOutput>
> {
  public override async call(client: APIService): Promise<GetOrderBookOutput> {
    const { asks, bids, lastPrice, limitDown, closePrice, limitUp, ...otherOrderBookInfo } =
      await client.marketdata.getOrderBook(this.options);

    return {
      ...otherOrderBookInfo,
      asks: asks.map(OrdersMapper.map),
      bids: bids.map(OrdersMapper.map),
      lastPrice: lastPrice ? new Decimal(lastPrice) : undefined,
      closePrice: closePrice ? new Decimal(closePrice) : undefined,
      limitUp: limitUp ? new Decimal(limitUp) : undefined,
      limitDown: limitDown ? new Decimal(limitDown) : undefined,
    };
  }
}
