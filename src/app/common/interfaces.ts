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
  date: '',
  open: '',
  high: '',
  low: '',
  close: '',
  volume: '',
}

export interface OHLCData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  adjustedClose?: string;
  volume: string;
  dividendAmount?: string;
  splitCoefficient?: string;
}

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

