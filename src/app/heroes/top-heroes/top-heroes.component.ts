import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './top-heroes.component.html',
  styleUrls: [ './top-heroes.component.css' ]
})
export class TopHeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.dataService.getHeroes()
      .subscribe(heroes => {
		  this.heroes = heroes.slice(1, 5);
		  console.log('sliced some heroes');
	  });
  }
}