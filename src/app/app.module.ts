import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { MessagesComponent } from './messages/messages.component';
import { TableComponent } from './table/table.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AddressFormComponent } from './address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialTreeComponent } from './material-tree/material-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MaterialDragdropComponent } from './material-dragdrop/material-dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    MessagesComponent,
    TableComponent,
    HeroSearchComponent,
    AddressFormComponent,
    MaterialDashboardComponent,
    MaterialTableComponent,
    MaterialTreeComponent,
    MaterialNavComponent,
    MaterialDragdropComponent
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
	MatSliderModule,
	MatInputModule,
	MatButtonModule,
	MatSelectModule,
	MatRadioModule,
	MatCardModule,
	ReactiveFormsModule,
	MatGridListModule,
	MatMenuModule,
	MatIconModule,
	LayoutModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatTreeModule,
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
