import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { ChartSettingsComponent } from './chart-settings/chart-settings.component';
import { TickerListComponent } from './ticker-list/ticker-list.component';
import { ChartsMainComponent } from './charts-main/charts-main.component';



@NgModule({
  declarations: [ChartComponent, ChartSettingsComponent, TickerListComponent, ChartsMainComponent],
  imports: [
    CommonModule
  ]
})
export class ChartsModule { }
