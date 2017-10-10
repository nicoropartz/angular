import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {AlertTrafic} from '../model/AlertTrafic';
import {Ligne} from '../model/Ligne';


@Pipe ({name:'filterTrafic'})
export class FilterTrafic implements PipeTransform {

    transform(listeAlert:AlertTrafic[], ligne:Ligne) : AlertTrafic[] {
        if (!ligne) return [];
        if (!listeAlert) return [];

        return listeAlert.filter(alert => {
            return alert.nomcourtligne == ligne.nomcourt;
        });
    }
}
