import { Component, Input } from '@angular/core';
import {AlertTrafic} from '../model/AlertTrafic'

@Component({
  selector: 'app-alert-trafic-detail',
  templateUrl: './alert-trafic-detail.component.html',
  styleUrls: ['./alert-trafic-detail.component.css']
})
export class AlertTraficDetailComponent {

  @Input('selectAlertTrafic')
  selectAlertTrafic : AlertTrafic;  

}
