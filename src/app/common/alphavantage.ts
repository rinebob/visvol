import { DataSetting, FullSetting } from "./interfaces"
// Alphavantage API endpoint URL
import { Alphavantage_API_KEY } from 'src/secrets/secrets';
export const AV_URL = 'https://www.alphavantage.co'

// Alphavantage endpoint parameters
export enum Params {
    FUNCTION = 'function',
    SYMBOL = 'symbol',
    INTERVAL = 'interval',
    SLICE = 'slice',
    ADJUSTED = 'adjusted',
    OUTPUTSIZE = 'output_size',
    DATATYPE = 'datatype',
    APIKEY = 'apikey',
  }

export interface Metadata {
    information: string;
    symbol: string;
    last_refreshed: string;
    output_size: string;
    time_zone: string;
}

export interface DayChartData {
    open: string;
    high: string;
    low: string;
    close: string;
    adjusted_close: string;
    volume: string;
    dividend_amount: string;
    split_coefficient: string;

}

export interface DayTimeSeries {
    [key:string] : DayChartData;
}

export interface DayResponse {
    metadata: Metadata;
    time_series: DayTimeSeries;
}

export interface IntradayChartData {
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
}

// shape of request
  export interface AlphavantageRequest {
    function: TimeSeriesFunction;
    symbol: string;
    interval?: Interval;
    slice?: Slice;
    adjusted?: Adjusted;
    outputsize?: OutputSize;
    datatype?: DataType;
    apikey: string;
}

const intradayTimes = ['1min', '5min', '15min', '30min', '60min'];

function generateTimeType(timeFrame: string) {
    const timeType = 
        intradayTimes.includes(timeFrame) ? 'INTRADAY'
        : timeFrame === 'Daily' ? 'DAILY' 
        : timeFrame === 'Weekly' ? 'WEEKLY' 
        : 'MONTHLY';

    // console.log('aV gTT timeType: ', timeType);

    return timeType;
}

function generateFunctionString(req: DataSetting) {
    const timeType = generateTimeType(req.timeFrame);
    const func = `TIME_SERIES_${timeType}`;
    const slice = req.slice.split(' ').join('').toLowerCase();

    let funcString = '';
    if (timeType === 'INTRADAY') {
        funcString = slice === 'year1month1' ? func : `${func}_EXTENDED`;

    } else if (timeType === 'DAILY') { 
        funcString = req.adjusted ? `${func}_ADJUSTED` : func;
    }

    // console.log('aV gFS funcString: ', funcString);

    return funcString;
}

export function generateRequestString (req: DataSetting) {

    // console.log('aV cR input request: ', req);

    
    const funcString = generateFunctionString(req);
    const symbol = req.symbol;
    const interval = req.timeFrame;
    const slice = req.slice.split(' ').join('').toLowerCase();
    const extended = slice !== 'year1month1' ? '_EXTENDED' : '';
    const adjusted = req.adjusted === 'Adjusted' ? true : false;
    const outputSize = req.outputSize.toLowerCase(); 
    const dataType = req.dataType; 

    // console.log('av cR funcString: ', funcString);
    // console.log('av cR symbol: ', symbol);
    // console.log('av cR interval: ', interval);
    // console.log('av cR extended: ', extended);
    // console.log('av cR slice: ', slice);
    // console.log('av cR adjusted: ', adjusted);
    // console.log('av cR : outputSize', outputSize);
    // console.log('av cR : dataType', dataType);

    // let funcString = '';
    let reqString = '';

    // const requestInfo = {funcString, symbol, interval, extended, slice, adjusted, outputSize, dataType};

    const timeType = generateTimeType(req.timeFrame);

    switch(timeType) {
        case 'INTRADAY':
            if (slice === 'year1month1') {
                // console.log('aV gRS intraday');
                reqString = 
                    AV_URL + 
                    '/query?' + 
                    'function=' + generateFunctionString(req) + 
                    '&symbol=' + symbol + 
                    '&interval=' + interval + 
                    '&adjusted=' + adjusted +
                    '&outputsize=' + OutputSize +
                    '&datatype=' + dataType + 
                    '&apikey=' + Alphavantage_API_KEY;
            } else {
                // console.log('aV gRS intraday extended');
                reqString = 
                    AV_URL + 
                    '/query?' + 
                    'function=' + generateFunctionString(req) + 
                    '&symbol=' + symbol + 
                    '&interval=' + interval + 
                    '&slice=' + slice +
                    '&adjusted=' + adjusted + 
                    '&apikey=' + Alphavantage_API_KEY;
            }
          
            break;
        case 'DAILY':
            // console.log('aV gRS daily');
            reqString = 
                AV_URL + 
                '/query?' + 
                'function=' + generateFunctionString(req) + 
                '&symbol=' + symbol + 
                '&outputsize=' + outputSize + 
                '&datatype=' + dataType + 
                '&apikey=' + Alphavantage_API_KEY;
          
            break;
        case 'WEEKLY':
            // console.log('aV gRS weekly');
            reqString = 
                AV_URL + 
                '/query?' + 
                'function=' + 'TIME_SERIES_WEEKLY' + 
                '&symbol=' + symbol + 
                '&datatype=' + dataType + 
                '&apikey=' + Alphavantage_API_KEY;
          
          break;
        case 'MONTHLY':
            // console.log('aV gRS monthly');
            reqString = 
                AV_URL +
                '/query?' +
                'function=' + 'TIME_SERIES_MONTHLY' +
                '&symbol=' + symbol +
                '&datatype=' + dataType +
                '&apikey=' + Alphavantage_API_KEY;

          break;
        default: 'Did not match timeframe (wtf???)';
          
      }

      console.log('aV eRI request string: ', reqString);


    return reqString;

    

}

export interface DayRequest {
    function: TimeSeriesFunction;
    symbol: string;
    outputsize?: OutputSize;
    datatype?: DataType;
    apikey: string;
}

export interface IntradayRequest {
    function: TimeSeriesFunction;
    symbol: string;
    interval?: Interval;
    slice?: Slice;
    adjusted?: Adjusted;
    outputsize?: OutputSize;
    datatype?: DataType;
    apikey: string;
}

  // Alphavantage intraday intervals
  export enum Interval {
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
    FULL = 'Full',        // twenty years of historical data
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

 