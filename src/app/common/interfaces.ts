export interface ChartSetting {
    ticker: string;
    timeframe?: TimeFrame;
    chartType?: ChartType;
    scaleType?: ScaleType;
    startDate?: Date;
    endDate?: Date;
  
  }
  
  export enum TimeFrame {
    ONE_MINUTE = '1m',
    FIVE_MINUTE = '5m',
    TEN_MINUTE = '10m',
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