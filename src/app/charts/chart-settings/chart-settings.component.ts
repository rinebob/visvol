import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ChartSetting, ChartType, DataSetting, FullSetting, ScaleType, TimeFrame } from '../../common/interfaces';
import * as av from '../../common/alphavantage';
import { Chart } from 'highcharts';

const DEFAULT_SYMBOL = 'TSLA';

const DEFAULT_CHART_SETTING: FullSetting = {
  symbol: DEFAULT_SYMBOL,
  timeFrame: TimeFrame.DAILY,
  slice: av.Slice.YEAR1MONTH1,
  adjusted: av.Adjusted.TRUE,
  outputSize: av.OutputSize.COMPACT,
  dataType: av.DataType.JSON,
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
  readonly destroy = new Subject<void>();

  @Output() chartSettings = new EventEmitter<ChartSetting>();
  @Output() dataSettings = new EventEmitter<DataSetting>();
  
  readonly timeframes = Object.values(TimeFrame);
  readonly chartTypes = Object.values(ChartType);
  readonly scaleTypes = Object.values(ScaleType);
  readonly outputSizes = Object.values(av.OutputSize);
  readonly slices = Object.values(av.Slice);
  readonly adjusted = Object.values(av.Adjusted);
  readonly dataTypes = Object.values(av.DataType);

  readonly settingsForm: FormGroup;
  settingsFormValues: FullSetting = DEFAULT_CHART_SETTING;
  chartRequest: ChartSetting;
  dataRequest: DataSetting;

  symbolControl = new FormControl(DEFAULT_SYMBOL);
  timeFrameControl = new FormControl(TimeFrame.DAILY);
  chartTypeControl = new FormControl(ChartType.LINE);
  scaleTypeControl = new FormControl(ScaleType.LINEAR);
  startDateControl = new FormControl('');
  endDateControl = new FormControl('');
  outputSizeControl = new FormControl(av.OutputSize.COMPACT);
  sliceControl = new FormControl(av.Slice.YEAR1MONTH1);
  adjustedControl = new FormControl(av.Adjusted.TRUE);
  dataTypeControl = new FormControl(av.DataType.JSON);
  
  

  // chartSettings$: Observable<ChartSetting>;

  constructor() { 
    this.settingsForm = new FormGroup({
      symbol: this.symbolControl,
      timeFrame: this.timeFrameControl,
      chartType: this.chartTypeControl,
      scaleType: this.scaleTypeControl,
      startDate: this.startDateControl,
      endDate: this.endDateControl,
      outputSize: this.outputSizeControl,
      slice: this.sliceControl,
      adjusted: this.adjustedControl,
      dataType: this.dataTypeControl,
  
    });
    
    this.settingsForm.valueChanges
    .pipe(takeUntil(this.destroy))
    .subscribe(values => {
      this.settingsFormValues = values;
      console.log('cS ctor t.sFV values: ', this.settingsFormValues);
      this.dataRequest = this.generateDataRequest();
      console.log('cS ctor generated request: ', this.dataRequest);
      
    });
  }

  ngOnInit() {
    this.settingsForm.patchValue({
      'symbol': DEFAULT_CHART_SETTING.symbol,
      'timeFrame': DEFAULT_CHART_SETTING.timeFrame,
      'chartType': DEFAULT_CHART_SETTING.chartType,
      'scaleType': DEFAULT_CHART_SETTING.scaleType,
      'slice': DEFAULT_CHART_SETTING.slice,
      'adjusted': DEFAULT_CHART_SETTING.adjusted,
      'outputSize': DEFAULT_CHART_SETTING.outputSize,
      'dataType': DEFAULT_CHART_SETTING.dataType,

    });
  }

  ngOnDestroy () {
    this.destroy.next();
    this.destroy.complete();
  }

  generateDataRequest() {
    const dataRequest: DataSetting = {
      symbol: this.settingsFormValues.symbol,
      timeFrame: this.settingsFormValues.timeFrame,
      outputSize: this.settingsFormValues.outputSize,
      slice: this.settingsFormValues.slice,
      adjusted: this.settingsFormValues.adjusted,
      dataType: this.settingsFormValues.dataType,
    };

    return dataRequest;

  }

  generateChartReqest() {
    const chartRequest: ChartSetting = {

    }

    return chartRequest;

  }

  submit() {
    // const dataRequest = this.generateDataRequest();
    this.dataSettings.emit(this.dataRequest);
    // console.log('cS submit form submitted.  Data request: ', this.dataRequest);
  }

}
