import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Arturo' },
      { id: 2, name: 'Adrian' },
      { id: 3, name: 'Luis' },
      { id: 4, name: 'Manuel' },
      { id: 5, name: 'Jose' },
      { id: 6, name: 'Maria' },
      { id: 7, name: 'Felipe' },
      { id: 8, name: 'Leonardo' },
      { id: 9, name: 'Pedro' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
