import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { ChartsModule } from './charts/charts.module';
import { MainModule } from './main/main.module';
import { StrategiesModule } from './strategies/strategies.module';
import { ToolsModule } from './tools/tools.module';
import {WelcomeModule } from './welcome/welcome.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
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
	MainModule,
	WelcomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
