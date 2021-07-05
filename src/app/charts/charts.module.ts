import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { ChartComponent } from './chart/chart.component';
import { ChartSettingsComponent } from './chart-settings/chart-settings.component';
import { TickerListComponent } from './ticker-list/ticker-list.component';
import { ChartsMainComponent } from './charts-main/charts-main.component';



@NgModule({
  declarations: [
    ChartComponent,
    ChartSettingsComponent,
    TickerListComponent,
    ChartsMainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ChartsModule { }
