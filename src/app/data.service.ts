import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
	  this.messageService.add('friggin HeroService: fetched the effin heroes dude...');
	  return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
	  this.messageService.add(`HeroService: fetched hero with id: ${id}`);
	  return of(HEROES.find(hero => hero.id === id));
  }
}
