import { Component, ViewChild } from '@angular/core';
import {AlertTraficListComponent} from './alert-trafic-list/alert-trafic-list.component';
import {AlertTrafic} from './model/AlertTrafic';
import {Ligne} from './model/Ligne';
import {TraficMapComponent} from './trafic-map/trafic-map.component';
import {ListeLigneComponent} from './liste-ligne/liste-ligne.component';

@Component({ 
  selector: 'app-root',
  templateUrl: 'app.component.html',   
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectAlert : AlertTrafic; 
  selectLigne : Ligne;
  listAlert : AlertTrafic[];

  loadListAlert(event) : void {
    this.listAlert = event;
  }

  changeAlert(event) : void {
    this.selectAlert = event;
  }

  changeLigne(event) : void {
    this.selectLigne = event;
  }
}
