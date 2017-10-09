import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {MockHeroes} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(MockHeroes);
  };


  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  deleteOneHeroes() : Promise<Hero[]> {
    return null;
  }

}
