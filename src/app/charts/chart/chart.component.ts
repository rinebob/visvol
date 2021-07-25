import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';
import { BehaviorSubject, Observable } from 'rxjs';
import { OHLCData } from 'src/app/common/interfaces';

@Component({
  selector: 'vz-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnChanges {
  @Input() data: OHLCData[] = [];

  chartDataBS = new BehaviorSubject<OHLCData[]>([]);
  chartData$: Observable<OHLCData[]> = this.chartDataBS;
  private svg;
  private margin = { top: 50, right: 50, bottom: 50, left: 50 };
  private width = 1000 - this.margin.left - this.margin.right;
  private height = 700 - this.margin.top - this.margin.bottom;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('c ngOC changes: ', changes);
    if (changes.data) {
      this.chartDataBS.next(changes.data.currentValue);
      console.log('c ngOC input data: ', changes.data.currentValue);
      console.log('c ngOC t.cDBS.v: ', this.chartDataBS.value);
      if (this.chartDataBS.value) {
        this.createSvg();
        this.drawChart(this.chartDataBS.value);

      }

    }

  }

  createSvg() {
    this.svg = d3.select('#chartHost')
    .append('svg')
    .attr('width', this.width + this.margin.left + this.margin.right)
    .attr('height', this.height + this.margin.top + this.margin.bottom)
    .append('g')
    .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

  }

  drawChart(data: any[]) {
    // find data range
    const xMin = d3.min(this.chartDataBS.value, d => {return d['date']});
    const xMax = d3.max(this.chartDataBS.value, d => {return d['date']});
    const yMin = d3.min(this.chartDataBS.value, d => {return d['close']});
    const yMax = d3.max(this.chartDataBS.value, d => {return d['close']});

    // chart scales
    const xScale = d3
    .scaleTime()
    .domain([xMin, xMax])
    .range([0, this.width]);

    const yScale = d3
    .scaleLinear()
    .domain([yMin - 5, yMax])
    .range([this.height, 0]);

    const line = d3
    .line()
    .x(d => {
      return xScale(d['date']);
    })
    .y(d => {
      return yScale(d['close']);
    });

    this.svg
    .append('g')
    .attr('id', 'xAxis')
    .attr('transform', `translate(0, ${this.height})`)
    .call(d3.axisBottom(xScale));

    this.svg
    .append('g')
    .attr('id', 'yAxis')
    .attr('transform', `translate(${this.width}, 0)`)
    .call(d3.axisRight(yScale));

    this.svg
    .append('path')
    .data([this.chartDataBS.value])
    .style('fill', 'none')
    .attr('id', 'priceChart')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', '1.5')
    .attr('d', line);


    
  }

  createColors() {

  }

  

}
