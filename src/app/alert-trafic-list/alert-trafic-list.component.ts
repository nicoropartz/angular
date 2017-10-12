import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {AlertTraficService} from '../alert-trafic.service';
import {AlertTrafic} from '../model/AlertTrafic';
import {Ligne} from '../model/Ligne';
import { ListligneServiceService } from '../liste-ligne/listligne-service.service';

@Component({
  selector: 'app-alert-trafic-list',
  templateUrl: './alert-trafic-list.component.html',
  styleUrls: ['./alert-trafic-list.component.css'],
  providers : [AlertTraficService]
})
export class AlertTraficListComponent implements OnInit {

  alertTrafic : AlertTrafic[];
  selectAlert : AlertTrafic;
  selectLigne : Ligne;


  @Output()
  changeAlert : EventEmitter<AlertTrafic>  = new EventEmitter();
  @Output()
  loadListAlert : EventEmitter<AlertTrafic[]> = new EventEmitter();


  constructor(private alertService:AlertTraficService, private ligneService : ListligneServiceService) {
    ligneService.changeLigne$.subscribe(ligne => {
        this.selectLigne = ligne;
        if (this.alertTrafic)
          this.onSelectAlert(this.alertTrafic.find(alert => alert.nomcourtligne == ligne.nomcourt));
      }
  );

    this.alertService.getAlert().subscribe(data => {
        this.alertTrafic = data;
        this.loadListAlert.emit(data);
      }
    );

  };

  ngOnInit(): void {
  
  }

  onSelectAlert(alert : AlertTrafic): void {
    this.selectAlert = alert;
    this.changeAlert.emit(alert);
  }
}
