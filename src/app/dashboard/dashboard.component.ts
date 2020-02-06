import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Hero } from '../hero';
import { DataService } from '../data.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[];
	
	constructor(private dataService: DataService,
				private messageService: MessageService) { }

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.dataService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	add(name: string): void {
	name = name.trim();
	if (!name) { return; }
	this.dataService.addHero({ name } as Hero)
		.subscribe(hero => {
			this.heroes.push(hero);
		});
	}

	delete(hero: Hero): void {
		this.heroes = this.heroes.filter(h => h !== hero);
		this.dataService.deleteHero(hero).subscribe();
	}

	logClick(): void {
		this.messageService.add('clicked the link');
	}

}
