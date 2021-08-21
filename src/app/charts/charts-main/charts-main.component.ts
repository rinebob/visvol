import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ChartDataService } from 'src/app/services/chart-data.service';

import { ChartSetting, ChartType, DataSetting, FullSetting, OHLCData, ScaleType, TimeFrame } from '../../common/interfaces';
import * as av from '../../common/alphavantage';
import * as avUtils from '../../common/alphavantage_utils';


@Component({
  selector: 'vz-charts-main',
  templateUrl: './charts-main.component.html',
  styleUrls: ['./charts-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsMainComponent implements OnDestroy, OnInit {
  destroy = new Subject();

  // intradayChartData: av.IntradayChartData[];
  // dayChartData: av.DayChartData;
  chartData$:Observable<OHLCData[]>;

  constructor(private chartDataService: ChartDataService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  updateChartSettings(event: ChartSetting) {
    // dispatch the settings to the store
  }

  updateDataSettings(event: DataSetting) {
    // dispatch the settings to the store
    // call get data to update chartData obs
    this.getData(event);

  }

  getData(event: DataSetting) {
    // console.log('cM gD event: ', event);
    this.chartData$ = this.chartDataService.getAlphavantageOHLCData(event);
  }
}
