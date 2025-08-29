import { Decimal } from '@t-tech/invest-shared';
import {
  Candle,
  InstrumentClosePriceResponse,
  LastPrice,
  MarketDataResponse,
  Order,
  OrderBook,
  Trade,
} from '@t-tech/invest-grpc-web';

// reexport types
export { GetTechAnalysisRequest_Smoothing as TechAnalysisSmoothing } from '@t-tech/invest-grpc-web';

// new types

export type MarketdataCandlePricesNames = 'open' | 'high' | 'low' | 'close';

export type MarketdataCandlePrices = {
  open?: Decimal;
  high?: Decimal;
  low?: Decimal;
  close?: Decimal;
};

export type MarketdataCandle = Omit<Candle, MarketdataCandlePricesNames> & MarketdataCandlePrices;

export type MarketdataOrder = Omit<Order, 'price'> & {
  price?: Decimal;
};

export type MarketdataTrade = Omit<Trade, 'price'> & {
  price?: Decimal;
};

export type TechAnalysisDeviation = {
  deviationMultiplier?: Decimal;
};

export type TechAnalysisIndicator = {
  timestamp?: Date;
  middleBand?: Decimal;
  upperBand?: Decimal;
  lowerBand?: Decimal;
  signal?: Decimal;
  macd?: Decimal;
};

export type MarketdataLastPrice = Omit<LastPrice, 'price'> & {
  price?: Decimal;
};

export type MarketdataClosePrice = Omit<InstrumentClosePriceResponse, 'price'> & {
  price?: Decimal;
};

export type MarketdataOrderBookStream = Omit<
  OrderBook,
  'asks' | 'bids' | 'limitUp' | 'limitDown'
> & {
  asks: MarketdataOrder[];
  bids: MarketdataOrder[];
  limitUp?: Decimal;
  limitDown?: Decimal;
};

export type MarketdataStreamItem = Omit<
  MarketDataResponse,
  'candle' | 'trade' | 'orderbook' | 'lastPrice'
> & {
  candle?: MarketdataCandle;
  trade?: MarketdataTrade;
  orderbook?: MarketdataOrderBookStream;
  lastPrice?: MarketdataLastPrice;
};
