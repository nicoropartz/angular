import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

@Injectable()
export class LignecontrolServiceService {

  constructor() { }

  private changeStatusAllSource = new Subject<boolean>();

  private changeStatusOneSource = new Subject<boolean>();
  

  changeStatusAll$ = this.changeStatusAllSource.asObservable();
  changeStatusOne$ = this.changeStatusOneSource.asObservable();

  stopOne(stop : boolean) {
    this.changeStatusOneSource.next(stop);
  }

  stopAll(stop : boolean) {
    this.changeStatusAllSource.next(stop);
  } 
}
