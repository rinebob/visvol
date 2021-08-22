import { Type } from '@angular/core';
import * as av from './alphavantage'
export interface FullSetting {
  symbol: string;
  timeFrame?: TimeFrame;
  slice: av.Slice;
  adjusted: av.Adjusted;
  outputSize: av.OutputSize;
  dataType: av.DataType;
  chartType?: ChartType;
  scaleType?: ScaleType;
  startDate?: Date;
  endDate?: Date;
  
}

export interface ChartSetting {
  chartType?: ChartType;
  scaleType?: ScaleType;
  startDate?: Date;
  endDate?: Date;
  
}

export interface DataSetting {
  symbol: string;
  timeFrame: TimeFrame;
  slice?: av.Slice;
  adjusted?: av.Adjusted;
  outputSize?: av.OutputSize;
  dataType?: av.DataType;
}

export interface IntradayDataSetting {
  symbol: string;
  timeFrame?: TimeFrame;
  slice: av.Slice;
  adjusted: av.Adjusted;
  outputSize: av.OutputSize;
  dataType: av.DataType;
}

// export interface NonDayOHLCData {
//   date: string;
//   open: string;
//   high: string;
//   low: string;
//   close: string;
//   volume: string;
// }

export const OHLC_INITIALIZER: OHLCData = {
  date: new Date(Date.now()),
  stringDate: '',
  open: 0,
  high: 0,
  low: 0,
  close: 0,
  volume: 0,
}

export interface OHLCData {
  date: Date;
  stringDate?: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adjustedClose?: number;
  volume: number;
  dividendAmount?: number;
  splitCoefficient?: number;
}

// export const OHLC_INITIALIZER: OHLCData = {
//   date: new Date(Date.now()),
//   stringDate: '',
//   open: '',
//   high: '',
//   low: '',
//   close: '',
//   volume: '',
// }

// export interface OHLCData {
//   date: Date;
//   stringDate?: string;
//   open: string;
//   high: string;
//   low: string;
//   close: string;
//   adjustedClose?: string;
//   volume: string;
//   dividendAmount?: string;
//   splitCoefficient?: string;
// }

// export const DAY_OHLC_INITIALIZER: DayOHLCData = {
//   date: '',
//   open: '',
//   high: '',
//   low: '',
//   close: '',
//   adjustedClose: '',
//   volume: '',
//   dividendAmount: '',
//   splitCoefficient: '',
  
// }



  // intraday intervals
export enum TimeFrame {
  ONE_MINUTE = '1min',
  FIVE_MINUTE = '5min',
  FIFTEEN_MINUTE = '15min',
  THIRTY_MINUTE = '30min',
  SIXTY_MINUTE = '60min',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
}

export enum ChartType {
  LINE = 'line',
  BAR = 'bar',
  CANDLESTICK = 'candlestick',
}

export enum ScaleType {
  LINEAR = 'linear',
  LOG = 'log',
}


// ex: LongOneAtmCall, ShortTwoOtm2Put
export interface OptionLeg {
  type: OptionType;
  moneyness: MoneynessUnit;
  direction: Direction;
  ratio: number;
}

// ex: 20 Delta Short Strangle
// [ShortOneOtm3Call, ShortOneOtmPut]
export interface OptionSpreadConfig {
  name: string;
  legs: OptionLeg[];
}

export interface OptionPosition {
  underlying: string;   // todo - put underlying data in an object
  underlyingPrice: number,
  underlyingIv: number,
  dateOpened: Date;
  config: OptionSpreadConfig;
  symbols: string[];
  data: PositionPricePoint[];

}

export interface OptionQuote {
  open: number | string;
  high: number | string;
  low: number | string;
  close: number | string;
  volume: number | string;
  date: Date;
}

export interface Option {
  symbol: string;
  type: OptionType;
  underlying: string;
  strike: number;
  expiration: Date;
  exchange: Exchange;
}

export interface OptionSymbolData {
  symbol: string;
  data: OptionQuote[];
}

export interface PositionPricePoint {
  date: Date;
  price: number;
}

export type Direction = 'LONG' | 'SHORT';
export type OptionType = 'CALL' | 'PUT';

export enum Exchange {
  CHICAGO_BOARD_OPTIONS_EXCHANGE = 'CBOE',
}

export enum MoneynessUnit {
  AT_THE_MONEY = 'ATM',
  OUT_OF_THE_MONEY_ONE = 'OTM-1',
  OUT_OF_THE_MONEY_TWO = 'OTM-2',
  OUT_OF_THE_MONEY_THREE = 'OTM-3',
}

const moneynessFactors:[string,number][] = [
  [MoneynessUnit.AT_THE_MONEY, 0],
  [MoneynessUnit.OUT_OF_THE_MONEY_ONE, 0.05],
  [MoneynessUnit.OUT_OF_THE_MONEY_TWO, 0.10],
  [MoneynessUnit.OUT_OF_THE_MONEY_THREE, 0.20],
];

export const moneynessMap = new Map(moneynessFactors);
























