import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ChartDataService } from 'src/app/services/chart-data.service';

import { ChartSetting, ChartType, DataSetting, FullSetting, ScaleType, TimeFrame } from '../../common/interfaces';
import * as av from '../../common/alphavantage';


@Component({
  selector: 'vz-charts-main',
  templateUrl: './charts-main.component.html',
  styleUrls: ['./charts-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsMainComponent implements OnDestroy, OnInit {
  destroy = new Subject();

  intradayChartData: av.IntradayChartData[];
  dayChartData: av.DayChartData;

  constructor(private chartDataService: ChartDataService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  updateChart(event: ChartSetting) {

  }

  getData(event: DataSetting) {
    console.log('cM gD event: ', event);

    this.chartDataService.getAlphavantageData(event)
    .pipe(takeUntil(this.destroy))
    .subscribe(
      data => console.log('cM gD response: ', data)
    );


    

  }

  
  generateIntradayRequest(settings: DataSetting) {

    // const {funcString, symbol, interval, extended, slice, adjusted, outputSize, dataType} = av.extractRequestInfo(settings);

    // const func = settings.slice ? av.TimeSeriesFunction.TIME_SERIES_INTRADAY_EXTENDED : av.TimeSeriesFunction.TIME_SERIES_INTRADAY;
    // const interval = Object.values(TimeFrame).find(item => item === settings.timeFrame) as av.Interval;
    // const request: av.IntradayRequest = {
    // function: func,
    // symbol: settings.symbol,
    // interval,
    // slice: ,
    // adjusted: ,
    // outputsize: ,
    // datatype: ,
    // }

  }

  generateDayrequest(settings: DataSetting) {

  }

}
