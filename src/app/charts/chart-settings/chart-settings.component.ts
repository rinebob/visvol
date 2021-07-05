import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ChartSetting, ChartType, ScaleType, TimeFrame } from '../../common/interfaces';


const defaultChartSetting = {
  ticker: 'TSLA',
  timeFrame: TimeFrame.ONE_DAY,
  chartType: ChartType.LINE,
  scaleType: ScaleType.LINEAR,
  startDate: new Date(),
  endDate: new Date(),

};

@Component({
  selector: 'vz-chart-settings',
  templateUrl: './chart-settings.component.html',
  styleUrls: ['./chart-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartSettingsComponent implements OnInit, OnDestroy {
  @Output() chartSettings = new EventEmitter<ChartSetting>();
  readonly destroy = new Subject<void>();
  readonly timeframes = Object.values(TimeFrame);
  readonly chartTypes = Object.values(ChartType);
  readonly scaleTypes = Object.values(ScaleType);
  readonly settingsForm: FormGroup;
  settingsFormValues: ChartSetting = defaultChartSetting;

  // chartSettings$: Observable<ChartSetting>;

  constructor() { 
    this.settingsForm = new FormGroup({
      tickerControl: new FormControl('TSLA'),
      timeframeControl: new FormControl(TimeFrame.ONE_DAY),
      chartTypeControl: new FormControl(ChartType.LINE),
      scaleTypeControl: new FormControl(ScaleType.LINEAR),
      // tickerControl: new FormControl(''),
      // timeframeControl: new FormControl(''),
      // chartTypeControl: new FormControl(''),
      // scaleTypeControl: new FormControl(''),
      // startDateControl: new FormControl(''),
      // endDateControl: new FormControl(''),
  
    });
    
    this.settingsForm.valueChanges.pipe(
      takeUntil(this.destroy)
    ).subscribe(values => {
      this.settingsFormValues = values;
      console.log('cS ctor t.sFV values: ', values);
      this.chartSettings.emit(values);
    });
  }

  ngOnInit() {
    // this.settingsForm.patchValue({
    //   'tickerControl': defaultChartSetting.ticker,
    //   'timeframeControl': defaultChartSetting.timeFrame,
    //   'chartTypeControl': defaultChartSetting.chartType,
    //   'scaleTypeControl': defaultChartSetting.scaleType,

    // });
  }

  ngOnDestroy () {
    this.destroy.next();
    this.destroy.complete();
  }

  submit() {
    console.log('c s form submitted');
  }

}
