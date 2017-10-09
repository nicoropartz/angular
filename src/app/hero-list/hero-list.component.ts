import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',  
  styleUrls: ['./hero-list.component.css'],
  providers : [HeroService]
})

export class HeroListComponent implements OnInit{
  heroTab : Hero[];
  selectHero : Hero;
  @Output()
  change : EventEmitter<Hero>  = new EventEmitter<Hero>();


  constructor(private heroService:HeroService) {};

  ngOnInit(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroTab = heroes);
  }

  onSelect(hero : Hero): void {
    this.change.emit(hero);
    this.selectHero = hero;
  };
}
