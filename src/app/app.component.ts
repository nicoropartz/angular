import { Component, ViewChild } from '@angular/core';
import { AlertTraficListComponent } from './alert-trafic-list/alert-trafic-list.component';
import { AlertTrafic } from './model/AlertTrafic';
import { Ligne } from './model/Ligne';
import { TraficMapComponent } from './trafic-map/trafic-map.component';
import { ListeLigneComponent } from './liste-ligne/liste-ligne.component';
import { LigneControlComponent } from './ligne-control/ligne-control.component';
import {CreateIncidentComponent} from './create-incident/create-incident.component';
import {ListligneServiceService} from './liste-ligne/listligne-service.service';



@Component({ 
  selector: 'app-root',
  templateUrl: 'app.component.html',   
  styleUrls: ['./app.component.css'],
  providers : [ListligneServiceService]
})

export class AppComponent {
  selectAlert : AlertTrafic; 
  listAlert : AlertTrafic[];

  constructor() { }

  loadListAlert(event) : void {
    this.listAlert = event;
  }

  changeAlert(event) : void {
    this.selectAlert = event;
  }
}
