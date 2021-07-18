import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as av from '../common/alphavantage'
import { DataSetting } from '../common/interfaces';
import { Alphavantage_API_KEY } from 'src/secrets/secrets';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }

  getAlphavantageData(settings: DataSetting) {
    console.log('cDS gAID settings: ', settings);
    const reqString = av.generateRequestString(settings);
    const data = this.http.get(reqString);
    // console.log('cDS gAID data: ', data);

    return data;
  }

  getAlphavantageDayData(settings: av.AlphavantageRequest) {
    console.log('cDS gADD settings: ', settings);

  }

}
