import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import { Ligne } from '../model/Ligne';

@Injectable()
export class ListligneServiceService {

  private changeLigne = new Subject<Ligne>();

  constructor() { }

  changeLigne$ = this.changeLigne.asObservable();

  selectLigne (ligne : Ligne) {
     console.log("selectiLigne");
     this.changeLigne.next(ligne);
  }
}
