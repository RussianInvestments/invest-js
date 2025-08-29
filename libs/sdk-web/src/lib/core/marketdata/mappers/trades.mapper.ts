import { Trade } from '@t-tech/invest-grpc-web';
import { Decimal } from '@t-tech/invest-shared';
import { MarketdataTrade } from '../types';

export class TradesMapper {
  public static map(value: Trade): MarketdataTrade {
    const { price, ...otherTradeInfo } = value;

    return {
      ...otherTradeInfo,
      price: price ? new Decimal(price) : undefined,
    };
  }
}
