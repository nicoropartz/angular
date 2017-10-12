import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {ListeLigneService} from '../liste-ligne.service';
import {Ligne} from '../model/Ligne';
import {AlertTrafic} from '../model/AlertTrafic';
import {FilterPipe} from './filterLigne.pipe';
import {ListligneServiceService} from './listligne-service.service';


@Component({
  selector: 'app-liste-ligne',
  templateUrl: './liste-ligne.component.html',
  styleUrls: ['./liste-ligne.component.css'],
  providers : [ListeLigneService]
})
export class ListeLigneComponent implements OnInit {

  
  listeLigne : Ligne[];
  selectLigne : Ligne;
  @Output()
  changeLigne : EventEmitter<Ligne> = new EventEmitter();
  @Input('listAlert')
  listAlert : AlertTrafic[]; 

  constructor(private ligneService : ListeLigneService, private ligneServiceObs : ListligneServiceService) { }

  ngOnInit() {
    this.ligneService.getLignes().subscribe(res => this.listeLigne = res);    
  }

  onSelectLigne(ligne : Ligne) : void {
    this.ligneServiceObs.selectLigne(ligne);
    this.selectLigne = ligne;
  }

  clickWithReference() : void {
    console.log("clique with reference");
  }
}
