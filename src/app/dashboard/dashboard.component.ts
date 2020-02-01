import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	dude = 'rinebob';
	heroes = HEROES;
	selectedHero: Hero;

	hero: Hero = {
		id: 1,
		name: 'Windbag'
	};

	constructor() { }

	ngOnInit() {
	}

	onSelect(hero) {
		this.selectedHero = hero;
	}

}
