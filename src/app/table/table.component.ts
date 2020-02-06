import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.css' ]
})
export class TableComponent implements OnInit {
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