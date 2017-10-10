import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AlertTrafic} from './model/AlertTrafic';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AlertTraficService {

  private url : string = "https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-busmetro-trafic-alertes-tr&facet=niveau&facet=debutvalidite&facet=finvalidite&facet=idligne&facet=nomcourtligne&rows=200";

  constructor(private http:Http) { }

  getAlert() {
    return this.http.get(this.url)
      .map(res =>  <AlertTrafic[]>(<Object[]>res.json()['records']).map(res => res['fields'])) ;
  }
}
