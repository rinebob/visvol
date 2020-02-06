import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'
import { DataService } from "../data.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(
	  private route: ActivatedRoute,
	  private dataService: DataService,
	  private location: Location
  ) { }

  hero: Hero;

  ngOnInit(): void {
	  this.getHero();
  }

  getHero(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.dataService.getHero(id)
	  	.subscribe(hero => this.hero = hero);
  }

  save(): void {
   this.dataService.updateHero(this.hero)
     .subscribe(() => this.goBack());
 }

  goBack() {
	  this.location.back();
  }

}
