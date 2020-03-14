import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AddressFormComponent } from './address-form/address-form.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MaterialDragdropComponent } from './material-dragdrop/material-dragdrop.component';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MaterialTreeComponent } from './material-tree/material-tree.component';
import { MaterialComponent } from './material.component';


@NgModule({
  declarations: [
    AddressFormComponent,
    MaterialDashboardComponent,
    MaterialTableComponent,
    MaterialTreeComponent,
    MaterialNavComponent,
    MaterialDragdropComponent,

    MaterialComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
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

})
export class MaterialModule { }
