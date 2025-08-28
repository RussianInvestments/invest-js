import { GetCandlesRequest, HistoricCandle } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';
import { MarketdataCandlePrices, MarketdataCandlePricesNames } from '../types';
import { CandlesMapper } from '../mappers';

export interface GetCandlesInput extends GetCandlesRequest {}

export type MarketdataHistoricCandle = Omit<HistoricCandle, MarketdataCandlePricesNames> &
  MarketdataCandlePrices;

export interface GetCandlesOutput {
  candles: MarketdataHistoricCandle[];
}

export class GetCandlesCommand extends BaseCommand<GetCandlesInput, Promise<GetCandlesOutput>> {
  public override async call(client: APIService): Promise<GetCandlesOutput> {
    const response = await client.marketdata.getCandles(this.options);

    return {
      candles: response.candles.map((value) => {
        const { high, low, close, open, ...candle } = value;

        return {
          ...candle,
          ...CandlesMapper.map({ high, low, close, open }),
        };
      }),
    };
  }
}
