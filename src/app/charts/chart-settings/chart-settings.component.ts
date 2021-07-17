import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ChartSetting, ChartType, ScaleType, TimeFrame } from '../../common/interfaces';
import * as av from '../../common/alphavantage';


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
  readonly outputSizes = Object.values(av.OutputSize);
  readonly slices = Object.values(av.Slice);
  readonly adjusted = Object.values(av.Adjusted);
  readonly dataTypes = Object.values(av.DataType);






  readonly settingsForm: FormGroup;
  tickerControl = new FormControl('TSLA');
  timeframeControl = new FormControl(TimeFrame.ONE_DAY);
  chartTypeControl = new FormControl(ChartType.LINE);
  scaleTypeControl = new FormControl(ScaleType.LINEAR);
  startDateControl = new FormControl('');
  endDateControl = new FormControl('');
  outputSizeControl = new FormControl(av.OutputSize.COMPACT);
  sliceControl = new FormControl(av.Slice.YEAR1MONTH1);
  adjustedControl = new FormControl(av.Adjusted.TRUE);
  dataTypeControl = new FormControl(av.DataType.JSON);
  
  
  settingsFormValues: ChartSetting = defaultChartSetting;

  // chartSettings$: Observable<ChartSetting>;

  constructor() { 
    this.settingsForm = new FormGroup({
      tickerControl: this.tickerControl,
      timeframeControl: this.timeframeControl,
      chartTypeControl: this.chartTypeControl,
      scaleTypeControl: this.scaleTypeControl,
      startDateControl: this.startDateControl,
      endDateControl: this.endDateControl,
      outputSizeControl: this.outputSizeControl,
      sliceControl: this.sliceControl,
      adjustedControl: this.adjustedControl,
      dataTypeControl: this.dataTypeControl,
  
    });
    
    this.settingsForm.valueChanges
    .pipe(takeUntil(this.destroy))
    .subscribe(values => {
      this.settingsFormValues = values;
      console.log('cS ctor t.sFV values: ', values);
      
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
    this.chartSettings.emit(this.settingsFormValues);
    console.log('c s form submitted');
  }

}
