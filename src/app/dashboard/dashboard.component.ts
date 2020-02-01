import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Hero } from '../hero';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	dude = 'rinebob';
	heroes: Hero[];
	selectedHero: Hero;

	hero: Hero = {
		id: 1,
		name: 'Windbag'
	};

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.dataService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	onSelect(hero) {
		this.selectedHero = hero;
	}

}
