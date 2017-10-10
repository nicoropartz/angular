import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {AlertTrafic} from '../model/AlertTrafic';
import {Ligne} from '../model/Ligne';


@Pipe ({name:'filterPipe'})
export class FilterPipe implements PipeTransform {

    transform(listeLigne:Ligne[], listeAlert:AlertTrafic[]) : Ligne[] {
        if (!listeLigne) return [];
        if (!listeAlert) return [];

        return listeLigne.filter(ligne => {
            //return true;
            return listeAlert.findIndex(incident => incident.nomcourtligne == ligne.nomcourt) != -1;
        });
    }
}
