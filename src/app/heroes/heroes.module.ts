import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';



@NgModule({
  declarations: [
	HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TopHeroesComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
	RouterModule,
	FormsModule
  ]
})
export class HeroesModule { }
