import { Candle, MarketDataResponse, OrderBook } from '@t-tech/invest-grpc-web';
import { Decimal } from '@t-tech/invest-shared';
import { MarketdataCandle, MarketdataOrderBookStream, MarketdataStreamItem } from '../types';
import { OrdersMapper } from './order.mapper';
import { CandlesMapper } from './candles-prices.mapper';
import { LastPricesMapper } from './last-price.mapper';
import { TradesMapper } from './trades.mapper';

export class MarketDataStreamMapper {
  public static map(value: MarketDataResponse): MarketdataStreamItem {
    const { candle, lastPrice, orderbook, trade, ...otherMarketdataStreamItem } = value;

    return {
      ...otherMarketdataStreamItem,
      lastPrice: lastPrice ? LastPricesMapper.map(lastPrice) : undefined,
      orderbook: orderbook ? this.mapOrderBookStream(orderbook) : undefined,
      trade: trade ? TradesMapper.map(trade) : undefined,
      candle: candle ? this.mapCandle(candle) : undefined,
    };
  }

  private static mapCandle(value: Candle): MarketdataCandle {
    const { high, low, open, close, ...otherCandleInfo } = value;

    return {
      ...otherCandleInfo,
      ...CandlesMapper.map({ high, low, close, open }),
    };
  }

  private static mapOrderBookStream(value: OrderBook): MarketdataOrderBookStream {
    const { asks, bids, limitDown, limitUp, ...otherOrderBookInfo } = value;

    return {
      ...otherOrderBookInfo,
      asks: asks.map(OrdersMapper.map),
      bids: bids.map(OrdersMapper.map),
      limitUp: limitUp ? new Decimal(limitUp) : undefined,
      limitDown: limitDown ? new Decimal(limitDown) : undefined,
    };
  }
}
