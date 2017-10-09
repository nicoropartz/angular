import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent  {
  @Input() hero : Hero;
  @Output()
  deleteHero : EventEmitter<Hero> = new EventEmitter<Hero>();

  onDeleteHero() : void {
    this.deleteHero.emit(this.hero);
  }
}
