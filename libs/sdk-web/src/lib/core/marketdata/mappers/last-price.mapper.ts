import { LastPrice } from '@t-tech/invest-grpc-web';
import { Decimal } from '@t-tech/invest-shared';
import { MarketdataLastPrice } from '../types';

export class LastPricesMapper {
  public static map(value: LastPrice): MarketdataLastPrice {
    const { price, ...otherLastPriceInfo } = value;

    return {
      ...otherLastPriceInfo,
      price: price ? new Decimal(price) : undefined,
    };
  }
}
