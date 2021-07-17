export interface ChartSetting {
    ticker: string;
    timeframe?: TimeFrame;
    chartType?: ChartType;
    scaleType?: ScaleType;
    startDate?: Date;
    endDate?: Date;
  
  }

   // intraday intervals
   export enum TimeFrame {
    ONE_MINUTE = '1min',
    FIVE_MINUTE = '5min',
    FIFTEEN_MINUTE = '15min',
    THIRTY_MINUTE = '30min',
    SIXTY_MINUTE = '60m',
    ONE_DAY = '1d',
    ONE_WEEK = '1w',
    ONE_MONTH = '1m',
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