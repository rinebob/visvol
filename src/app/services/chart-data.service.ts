import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators'

import * as av from '../common/alphavantage'
import { DataSetting, OHLCData } from '../common/interfaces';
import { Alphavantage_API_KEY } from 'src/secrets/secrets';
import * as alphaUtils from '../common/alphavantage_utils';
import {TSLA_D} from '../services/TSLA_Daily'

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

  getAlphavantageOHLCData(settings: DataSetting): Observable<OHLCData[]> {
    const reqString = av.generateRequestString(settings);

    //=============================
    // working code - DO NOT DELETE
    // note: alpha vantage rate limits to 5 req/min and 500 req/day
    // use return of(data) as replacement to limit calls
    return this.http.get<OHLCData[]>(reqString).pipe(
      map(resp => {
        console.log('cDS gAOD response: ', resp);
        const data = alphaUtils.convertAvToVz(resp);
        console.log('cDS gAOD data: ', data);
        return data;
      })
    );
    //=============================

    // return of(TSLA_D).pipe(
    //   map(resp => {
    //     const data = alphaUtils.convertAvToVz(resp);
    //     console.log('cDS gAOD data: ', data);
    //     return data;
    //   })
    // );

  }

}
