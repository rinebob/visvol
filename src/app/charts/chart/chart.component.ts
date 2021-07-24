import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'vz-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnChanges, OnInit {
  @Input() chartData;

  data;
  svg;
  margin;
  width;
  height;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnInit() {
    this.createSvg();
    this.drawBars(this.data);
    this.createSvg();
  }

  createSvg() {

  }

  drawBars(data: any[]) {

  }

  createColors() {

  }

  

}
