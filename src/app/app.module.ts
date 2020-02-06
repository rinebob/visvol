import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { MessagesComponent } from './messages/messages.component';
import { TableComponent } from './table/table.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    MessagesComponent,
    TableComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
	HttpClientInMemoryWebApiModule.forRoot(
		InMemoryDataService, { dataEncapsulation: false }
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
