import { Component, OnInit, Input } from '@angular/core';
import { LignecontrolServiceService } from '../lignecontrol-service.service';

@Component({
  selector: 'app-ligne-detail',
  templateUrl: './ligne-detail.component.html',
  styleUrls: ['./ligne-detail.component.css']
})
export class LigneDetailComponent implements OnInit {

  @Input()
  numeroLigne : string;

  nbrIncident : number;

  status : string;

  constructor(private ligneControlService : LignecontrolServiceService) {
      ligneControlService.changeStatusAll$.subscribe(stop => {
        this.status = stop ? "stop" : "start";
      });
   }

  ngOnInit() {
    this.status = "Start";
    this.nbrIncident = 0;
  }

}
