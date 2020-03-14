import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopHeroesComponent } from './heroes/top-heroes/top-heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
// import { DashboardComponent } from './heroes/heroes/heroes.component';
import { MaterialComponent } from './material/material.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { MainComponent } from './main/main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { PositionsComponent } from './main/positions/positions.component';
import { OptionChainComponent } from './main/option-chain/option-chain.component';
import { IvRankComponent } from './main/iv-rank/iv-rank.component';
import { ChartsComponent } from './charts/charts/charts.component';
import { StrategiesComponent } from './strategies/strategies/strategies.component';
import { ToolsComponent } from './tools/tools/tools.component';
import { AccountComponent } from './admin/account/account.component';
import { HelpComponent } from './admin/help/help.component';
import { CalendarComponent } from './main/calendar/calendar.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	
	// main module
	
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'positions', component: PositionsComponent },
	{ path: 'iv-rank', component: IvRankComponent },
	{ path: 'option-chain', component: OptionChainComponent },
	{ path: 'calendar', component: CalendarComponent },
	{ path: 'charts', component: ChartsComponent },
	{ path: 'strategies', component: StrategiesComponent },
	{ path: 'tools', component: ToolsComponent },
	{ path: 'account', component: AccountComponent },
	{ path: 'help', component: HelpComponent },

	
	
	
	
	
	
	
	
	
	
	
	{ path: 'heroes', component: HeroesComponent, children: [
		{ path: 'top-heroes', component: TopHeroesComponent },
		{ path: 'detail/:id', component: HeroDetailComponent },
	] },
	{ path: 'material', component: MaterialComponent },
	{ path: 'welcome', component: WelcomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
	
}
