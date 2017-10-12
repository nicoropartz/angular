import { Component, OnInit } from '@angular/core';
import {LigneDetailComponent} from '../ligne-detail/ligne-detail.component';
import { LignecontrolServiceService } from '../lignecontrol-service.service';
import { ListeLigneService } from '../liste-ligne.service';
import { Ligne } from '../model/Ligne';

@Component({
  selector: 'app-ligne-control',
  templateUrl: './ligne-control.component.html',
  styleUrls: ['./ligne-control.component.css'],
  providers : [LignecontrolServiceService, ListeLigneService]
  
})
export class LigneControlComponent implements OnInit {

  allStop : boolean;
  allStart : boolean;

  nbrStop : number = 0;
  nbrStart : number = 0;

  listeLigne : Ligne[] = [];

  constructor(private listeLigneService : ListeLigneService, private ligneControlService : LignecontrolServiceService) { 

    this.listeLigneService.getLignes().subscribe(res => this.listeLigne = res); 

    ligneControlService.changeStatusAll$.subscribe(stop => {
            this.allStop = stop; 
            this.allStart = !stop; 
            this.nbrStop = stop ? this.listeLigne.length : 0;      
            this.nbrStart = stop ? 0 : this.listeLigne.length;      
      }
    );

    ligneControlService.changeStatusOne$.subscribe(stop => {
        if (stop) {
          this.nbrStop++;
          this.nbrStart--;
        }
        else {
          this.nbrStop++;
          this.nbrStart--;
        }
    });
  }

  ngOnInit() {
    this.allStop = false;
    this.allStart = true; 
    this.nbrStart = this.listeLigne.length;
  }

  startAll () {
    this.ligneControlService.stopAll(false);
  } 

  stopAll() {
    this.ligneControlService.stopAll(true);
  }

}
