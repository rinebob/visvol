import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { PositionsComponent } from './main/positions/positions.component';
import { OptionChainComponent } from './main/option-chain/option-chain.component';
import { IvRankComponent } from './main/iv-rank/iv-rank.component';
import { StrategiesComponent } from './strategies/strategies/strategies.component';
import { ToolsComponent } from './tools/tools/tools.component';
import { AccountComponent } from './admin/account/account.component';
import { HelpComponent } from './admin/help/help.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { ChartsMainComponent } from './charts/charts-main/charts-main.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	
	// main module
	
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'positions', component: PositionsComponent },
	{ path: 'iv-rank', component: IvRankComponent },
	{ path: 'option-chain', component: OptionChainComponent },
	{ path: 'calendar', component: CalendarComponent },
	{ path: 'charts', component: ChartsMainComponent },
	{ path: 'strategies', component: StrategiesComponent },
	{ path: 'tools', component: ToolsComponent },
	{ path: 'account', component: AccountComponent },
	{ path: 'help', component: HelpComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
	
}
