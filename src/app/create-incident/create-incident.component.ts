import { Component, OnInit } from '@angular/core';
import {AlertTrafic} from '../model/AlertTrafic';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './forbiddenNameValidator';
import { ListeLigneComponent } from '../liste-ligne/liste-ligne.component';
import { ListligneServiceService } from '../liste-ligne/listligne-service.service';
import { Ligne } from '../model/Ligne';
import { Bus } from '../model/Bus';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent {

  public newAlert : AlertTrafic = new AlertTrafic();
  public incidentForm : FormGroup;

  constructor(private fb : FormBuilder, private ligneService : ListligneServiceService) {
    ligneService.changeLigne$.subscribe(ligne => {
      this.setLigne(ligne);
    });
    this.createForm();
   }
    
   createForm() {
    this.incidentForm = this.fb.group({
      couleurligne : this.fb.control(""), 
      couleurtexteligne : this.fb.control(""),
      nomcourt : this.fb.control(""),
      nomlong : this.fb.control(""),
      id : this.fb.control(""),
      bus : this.fb.array([])
    });
  }

  public get titre() { return this.incidentForm.get('titre'); }

  onSubmit () { }

  setLigne (ligne : Ligne) {

      var bus : Bus = new Bus();
      bus.numero = "51";
      bus.vehicule = "1bus";
      var busArray : Bus[] = [bus];

      this.incidentForm.reset();
      this.incidentForm.setValue({
        couleurligne : ligne.couleurligne,
        couleurtexteligne : ligne.couleurtexteligne,
        nomcourt : ligne.nomcourt,
        nomlong : ligne.nomlong,
        id : ligne.id,
        bus : []
      });
  }

  get getBus() : FormArray {
    return this.incidentForm.get('bus') as FormArray;
  }

  addBus () {
    var bus : Bus = new Bus();
    bus.numero = "51";
    bus.vehicule = "1bus";
    var busArray : Bus[] = [bus];

    this.getBus.push(this.fb.group(bus));

    this.incidentForm.patchValue({id : this.getBus.length.toString()});
  }

  revert() {
    this.incidentForm.reset();
  }
}
