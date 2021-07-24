import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';
import { BehaviorSubject, Observable } from 'rxjs';
import { OHLCData } from 'src/app/common/interfaces';

@Component({
  selector: 'vz-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnChanges, OnInit {
  @Input() data: OHLCData[] = [];

  chartDataBS = new BehaviorSubject<OHLCData[]>([]);
  chartData$: Observable<OHLCData[]> = this.chartDataBS;
  // svg;
  // margin;
  // width;
  // height;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('c ngOC changes: ', changes);
    if (changes.data) {
      this.chartDataBS.next(changes.data.currentValue);
      console.log('c ngOC input data: ', this.data)
    }

  }

  ngOnInit() {
    // this.createSvg();
    // this.drawBars(this.data);
    // this.createSvg();
  }

  createSvg() {

  }

  drawBars(data: any[]) {

  }

  createColors() {

  }

  

}
