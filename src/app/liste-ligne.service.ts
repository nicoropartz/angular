import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Ligne} from './model/Ligne';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListeLigneService {

  private url : string = "https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-bus-topologie-lignes-td&facet=nomfamillecommerciale&rows=200";

  constructor(private http : Http) { }

  getLignes() {
    return this.http.get(this.url).
      map(res =>  <Ligne[]>(<Object[]>res.json()['records']).map(res => res['fields'])) ;
  }

}
