import { InstrumentClosePriceResponse } from '@t-tech/invest-grpc-web';
import { Decimal } from '@t-tech/invest-shared';
import { MarketdataClosePrice } from '../types';

export class ClosePricesMapper {
  public static map(value: InstrumentClosePriceResponse): MarketdataClosePrice {
    const { price, ...otherClosePriceInfo } = value;

    return {
      ...otherClosePriceInfo,
      price: price ? new Decimal(price) : undefined,
    };
  }
}
