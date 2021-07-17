// Alphavantage endpoint parameters
export enum AlphavantageEnpointParams {
    FUNCTION = 'function',
    SYMBOL = 'symbol',
    INTERVAL = 'interval',
    SLICE = 'slice',
    ADJUSTED = 'adjusted',
    OUTPUTSIZE = 'output_size',
    DATATYPE = 'datatype',
    APIKEY = 'apikey',
  }
  
  // Alphavantage intraday intervals
  export enum AlphavantageTimeFrame {
    ONE_MINUTE = '1min',
    FIVE_MINUTE = '5min',
    FIFTEEN_MINUTE = '15min',
    THIRTY_MINUTE = '30min',
    SIXTY_MINUTE = '60m',
  }

  // Alphavantage time series functions
  export enum TimeSeriesFunction {
    TIME_SERIES_INTRADAY = 'Intraday',
    TIME_SERIES_INTRADAY_EXTENDED = 'Intraday extended',
    TIME_SERIES_DAILY = 'Daily',
    TIME_SERIES_DAILY_ADJUSTED = 'Daily adjusted',
    TIME_SERIES_WEEKLY = 'Weekly',
    TIME_SERIES_WEEKLY_ADJUSTED = 'Weekly adjusted',
    TIME_SERIES_MONTHLY = 'Monthly',
    TIME_SERIES_MONTHLY_ADJUSTED = 'Monthly adjusted',
    GLOBAL_QUOTE = 'Quote',
    SYMBOL_SEARCH = 'Symbol search',
  }

  // Alphavantage 'Output size'
  // By default, outputsize=compact. Strings compact and full are accepted with the following specifications: compact returns only the latest 100 data points; full returns the full-length time series of 20+ years of historical data. The "compact" option is recommended if you would like to reduce the data size of each API call.
  export enum OutputSize {
    COMPACT = 'Compact',  // default - 100 data points
    FULL = 'Full',     // twenty years of historical data
  }

  // Alphavantage 'slice' (time slice)
  // Two years of minute-level intraday data contains over 2 million data points, which can take up to Gigabytes of memory. To ensure optimal API response speed, the trailing 2 years of intraday data is evenly divided into 24 "slices" - year1month1, year1month2, year1month3, ..., year1month11, year1month12, year2month1, year2month2, year2month3, ..., year2month11, year2month12. Each slice is a 30-day window, with year1month1 being the most recent and year2month12 being the farthest from today. By default, slice=year1month1.
  export enum Slice {
    YEAR1MONTH1 = 'Year 1 month 1',
    YEAR1MONTH2 = 'Year 1 month 2',
    YEAR1MONTH3 = 'Year 1 month 3',
    YEAR1MONTH4 = 'Year 1 month 4',
    YEAR1MONTH5 = 'Year 1 month 5',
    YEAR1MONTH6 = 'Year 1 month 6',
    YEAR1MONTH7 = 'Year 1 month 7',
    YEAR1MONTH8 = 'Year 1 month 8',
    YEAR1MONTH9 = 'Year 1 month 9',
    YEAR1MONTH10 = 'Year 1 month 10',
    YEAR1MONTH11 = 'Year 1 month 11',
    YEAR1MONTH12 = 'Year 1 month 12',
    YEAR2MONTH1 = 'Year 2 month 1',
    YEAR2MONTH2 = 'Year 2 month 2',
    YEAR2MONTH3 = 'Year 2 month 3',
    YEAR2MONTH4 = 'Year 2 month 4',
    YEAR2MONTH5 = 'Year 2 month 5',
    YEAR2MONTH6 = 'Year 2 month 6',
    YEAR2MONTH7 = 'Year 2 month 7',
    YEAR2MONTH8 = 'Year 2 month 8',
    YEAR2MONTH9 = 'Year 2 month 9',
    YEAR2MONTH10 = 'Year 2 month 10',
    YEAR2MONTH11 = 'Year 2 month 11',
    YEAR2MONTH12 = 'Year 2 month 12',

  }

  // Alphavantage adjusted
  export enum Adjusted {
    TRUE = 'Adjusted',   // adjusted data
    FALSE = 'As traded',  // as-traded data
  }

  // Alphavantage 'data type'
  export enum DataType {
    JSON = 'JSON',   // default
    CSV = 'CSV',
  }