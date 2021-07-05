import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ChartSetting, ChartType, ScaleType, TimeFrame } from '../../common/interfaces';

@Component({
  selector: 'vz-charts-main',
  templateUrl: './charts-main.component.html',
  styleUrls: ['./charts-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateChart(event: ChartSetting) {
    console.log('cM uC event: ', event);
  }

}
