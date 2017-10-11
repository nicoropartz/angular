import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {ListeLigneService} from '../liste-ligne.service';
import {Ligne} from '../model/Ligne';
import {AlertTrafic} from '../model/AlertTrafic';
import {FilterPipe} from './filterLigne.pipe';
import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Rx';


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
  observable : Observable<string>;

  constructor(private ligneService : ListeLigneService) { 
    
    this.observable = new Observable((observer) => {
        observer.next();
      } 
    );
  }

  ngOnInit() {
    this.ligneService.getLignes().subscribe(res => this.listeLigne = res);    
  }

  onSelectLigne(ligne : Ligne) : void {

    this.observable.subscribe(() => {
      console.log("Clique");
    });
    
    this.changeLigne.emit(ligne);
    this.selectLigne = ligne;
  }

  clickWithReference() : void {
    console.log("clique with reference");
  }
}
