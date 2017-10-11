import { Component, OnInit } from '@angular/core';
import {LigneDetailComponent} from '../ligne-detail/ligne-detail.component';
import { LignecontrolServiceService } from '../lignecontrol-service.service';


@Component({
  selector: 'app-ligne-control',
  templateUrl: './ligne-control.component.html',
  styleUrls: ['./ligne-control.component.css'],
  providers : [LignecontrolServiceService]
})
export class LigneControlComponent implements OnInit {

  allStop : boolean;
  allStart : boolean;

  nbrStop : number = 0;
  nbrStart : number = 0;

  ligneUnderControl = ["C1", "C2", "C3"];
  
  constructor(private ligneControlService : LignecontrolServiceService) { 

    ligneControlService.changeStatusAll$.subscribe(stop => {
        console.log("ligneControlService " + stop);
            this.allStop = stop; 
            this.allStart = !stop; 
            this.nbrStop = stop ? this.ligneUnderControl.length : 0;      
            this.nbrStart = stop ? 0 : this.ligneUnderControl.length;      
      }
    );
  }

  ngOnInit() {
    this.allStop = false;
    this.allStart = true; 
    this.nbrStart = this.ligneUnderControl.length;
  }

  startAll () {
    this.ligneControlService.stopAll(false);
  } 

  stopAll() {
    this.ligneControlService.stopAll(true);
  }

}
