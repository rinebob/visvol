import {OHLCData, OHLC_INITIALIZER, TimeFrame } from './interfaces';
import {IntradayChartData} from './alphavantage';

// method to convert Alphavantage intraday data into VisVol specific intraday data series
export function convertAvToVz(data: any):OHLCData[] {
    // console.log('aU cITGS input data: ', data);

    const dataKeys = Object.keys(data);
    // console.log('aU cITGS data keys: ', dataKeys);

    // Metadata extraction
    const metaData = data[dataKeys[0]];
    // console.log('aU meta data: ', metaData);
    
    // Time series extraction
    const timeSeries = data[dataKeys[1]];
    // console.log('aU cITGS time series: ', timeSeries);
    const timeSeriesArray = (Object.entries(timeSeries)).reverse();
    // console.log('aU cITGS timeSeriesArray: ', timeSeriesArray);

    // Metadata info extraction
    const info = metaData['1. Information'];
    // console.log('aU info: ', info);

    // Determine whether input data is daily or non-daily
    const daily = info.includes(TimeFrame.DAILY);
    // console.log('aU info contains daily: ', daily);
    
    if (daily) {
        // console.log('aU daily conversion');
        const dailyData: OHLCData[] = convertToDailyFormat(timeSeriesArray);
        // console.log('aU daily data: ', dailyData);

        return dailyData;
        
    } else {
        // console.log('aU non-daily conversion');
        const nonDailyData: OHLCData[] = convertToNonDailyFormat(timeSeriesArray);
        // console.log('aU non daily data: ', nonDailyData);

        return nonDailyData;
    }
}


function convertToDailyFormat(timeSeriesArray: any): OHLCData[] {
    // console.log('aU cTDF input timeSeries: ', timeSeriesArray);
    const dayOHLCData: OHLCData[] = [];
    timeSeriesArray.forEach(
        value => {
            // console.log('aU cITGS input value: ', value);
            const dataPoint: OHLCData = OHLC_INITIALIZER;
            dataPoint.date = value[0];
            dataPoint.open = value[1]['1. open'];
            dataPoint.high = value[1]['2. high'];
            dataPoint.low = value[1]['3. low'];
            dataPoint.close = value[1]['4. close'];
            dataPoint.adjustedClose = value[1]['5. adjusted close'];
            dataPoint.volume = value[1]['6. volume'];
            dataPoint.dividendAmount = value[1]['7. dividend amount'];
            dataPoint.splitCoefficient = value[1]['8. split coefficient'];

            dayOHLCData.push({...dataPoint});


            // console.log('aU cITGS dataPoint: ', dataPoint);
        }
    );

    return dayOHLCData;
}

// methods to convert object {key: [date: string], value: {o:string, h: string, l:string, c:string, v:string}} to
// array of objects [{date, open, high, low, close, volume},]
function convertToNonDailyFormat(timeSeriesArray: any): OHLCData[] {
    // console.log('aU cTNDF input timeSeries: ', timeSeriesArray);
    const nonDayOHLCData: OHLCData[] = [];
    timeSeriesArray.forEach(
        value => {
            // console.log('aU cITGS input value: ', value);
            const dataPoint: OHLCData = OHLC_INITIALIZER;
            dataPoint.date = value[0];
            dataPoint.open = value[1]['1. open'];
            dataPoint.high = value[1]['2. high'];
            dataPoint.low = value[1]['3. low'];
            dataPoint.close = value[1]['4. close'];
            dataPoint.volume = value[1]['5. volume'];

            nonDayOHLCData.push({...dataPoint});


            // console.log('aU cITGS dataPoint: ', dataPoint);
        }
    );

    return nonDayOHLCData;

}

