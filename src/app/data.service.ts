import { Injectable } from '@angular/core';
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
}
