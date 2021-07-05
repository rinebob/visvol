import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


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

const defaultChartSetting = {
  ticker: 'TSLA',
  timeFrame: TimeFrame.ONE_DAY,
  chartType: ChartType.LINE,
  scaleType: ScaleType.LINEAR,
  // startDate: new Date(),
  // endDate: new Date(),

};




@Component({
  selector: 'vz-chart-settings',
  templateUrl: './chart-settings.component.html',
  styleUrls: ['./chart-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartSettingsComponent implements OnInit, OnDestroy {
  readonly destroy = new Subject<void>();
  readonly timeframes = Object.values(TimeFrame);
  readonly settingsForm: FormGroup;

  chartSettings$: Observable<ChartSetting>;

  constructor() { 
    this.settingsForm = new FormGroup({
      tickerControl: new FormControl('TSLA'),
      // timeframeControl: new FormControl(TimeFrame.ONE_DAY),
      // chartTypeControl: new FormControl(ChartType.LINE),
      timeframeControl: new FormControl('1D'),
      chartTypeControl: new FormControl('line'),
      // startDateControl: new FormControl(''),
      // endDateControl: new FormControl(''),
  
    });
    
    this.chartSettings$ = this.settingsForm.valueChanges.pipe(
      takeUntil(this.destroy)
    )
  }

  ngOnInit() {
    this.settingsForm.patchValue({
      'tickerControl': defaultChartSetting.ticker,
      'timeframeControl': defaultChartSetting.timeFrame,
      'chartTypeControl': defaultChartSetting.chartType,
      'scaleTypeControl': defaultChartSetting.scaleType,

    });
  }

  ngOnDestroy () {
    this.destroy.next();
    this.destroy.complete();
  }

  submit() {
    console.log('c s form submitted');
  }

}
