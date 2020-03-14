import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PositionsComponent } from './positions/positions.component';
import { IvRankComponent } from './iv-rank/iv-rank.component';
import { OptionChainComponent } from './option-chain/option-chain.component';
import { MainComponent } from './main/main.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [DashboardComponent, PositionsComponent, IvRankComponent, OptionChainComponent, MainComponent, CalendarComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
