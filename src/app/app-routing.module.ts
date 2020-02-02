import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
	{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
	{ path: 'detail/:id', component: ChartComponent },
	{ path: 'heroes', component: DashboardComponent },
	{ path: 'dashboard', component: TableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
	
}
