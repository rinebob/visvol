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

export interface OptionLeg {
  symbol: string;
  direction: Direction;

}

export interface OptionPositionConfig {
  name: string;
  legs: OptionLeg[];
}

export interface OptionPosition {
  underlying: string;
  dateOpened: Date;
  config: OptionPositionConfig;
  data: PositionPricePoint[];

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
























