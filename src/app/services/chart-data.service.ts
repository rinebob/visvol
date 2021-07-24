import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as av from '../common/alphavantage'
import { DataSetting } from '../common/interfaces';
import { Alphavantage_API_KEY } from 'src/secrets/secrets';
import * as alphaUtils from '../common/alphavantage_utils';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }

  getAlphavantageData(settings: DataSetting) {
    // console.log('cDS gAID settings: ', settings);
    const reqString = av.generateRequestString(settings);
    const response = this.http.get(reqString);
    // console.log('cDS gAID data: ', data);

    // const data = alphaUtils.convertIntradayToGenericSeries(response);

    return response;
  }

  getAlphavantageDayData(settings: av.AlphavantageRequest) {
    // console.log('cDS gADD settings: ', settings);

  }

}
