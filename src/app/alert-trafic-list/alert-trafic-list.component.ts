import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {AlertTraficService} from '../alert-trafic.service';
import {AlertTrafic} from '../model/AlertTrafic';
import {Ligne} from '../model/Ligne';

@Component({
  selector: 'app-alert-trafic-list',
  templateUrl: './alert-trafic-list.component.html',
  styleUrls: ['./alert-trafic-list.component.css'],
  providers : [AlertTraficService]
})
export class AlertTraficListComponent implements OnInit {

  alertTrafic : AlertTrafic[];
  selectAlert : AlertTrafic;
  private _selectLigne : Ligne;

  @Input('selectLigne') set selectLigne(ligne : Ligne) {
    this._selectLigne = ligne;

    if (this.alertTrafic)
      this.onSelectAlert(this.alertTrafic.find(alert => alert.nomcourtligne == ligne.nomcourt));
  }

  @Output()
  changeAlert : EventEmitter<AlertTrafic>  = new EventEmitter();
  @Output()
  loadListAlert : EventEmitter<AlertTrafic[]> = new EventEmitter();


  constructor(private alertService:AlertTraficService) {};

  ngOnInit(): void {
    this.alertService.getAlert().subscribe(data => {
        this.alertTrafic = data;
        this.loadListAlert.emit(data);
      }
    );
  }


  onSelectAlert(alert : AlertTrafic): void {
    this.selectAlert = alert;
    this.changeAlert.emit(alert);
  }
}
