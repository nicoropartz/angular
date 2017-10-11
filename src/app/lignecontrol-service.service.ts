import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

@Injectable()
export class LignecontrolServiceService {

  constructor() { }

  private changeStatusAllSource = new Subject<boolean>();

  changeStatusAll$ = this.changeStatusAllSource.asObservable();

  stopAll(stop : boolean) {
    this.changeStatusAllSource.next(stop);
  }

}
