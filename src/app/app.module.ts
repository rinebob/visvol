import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heroes/in-memory-data.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { ChartsModule } from './charts/charts.module';
import { HeroesModule } from './heroes/heroes.module';
import { MainModule } from './main/main.module';
import { MaterialModule } from './material/material.module';
import { StrategiesModule } from './strategies/strategies.module';
import { ToolsModule } from './tools/tools.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExpComponent } from './exp/exp.component';


@NgModule({
  declarations: [
    AppComponent,



    ExpComponent,
	WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
	HttpClientInMemoryWebApiModule.forRoot(
		InMemoryDataService, { dataEncapsulation: false }
	),
	BrowserAnimationsModule,
	ReactiveFormsModule,
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	MatMenuModule,
	MatIconModule,
	LayoutModule,
	AdminModule,
	ChartsModule,
	StrategiesModule,
	ToolsModule,
	MaterialModule,
	HeroesModule,
	MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
