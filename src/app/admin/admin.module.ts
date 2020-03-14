import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [AdminComponent, AccountComponent, HelpComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
