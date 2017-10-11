import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {AmexioWidgetModule, CommonHttpService} from 'amexio-ng-extensions';

import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './liste-ligne/filterLigne.pipe';
import { FilterTrafic } from './alert-trafic-list/filterTrafic.pipe';
import { AlertTraficListComponent } from './alert-trafic-list/alert-trafic-list.component';
import { AlertTraficDetailComponent } from './alert-trafic-detail/alert-trafic-detail.component';
import { TraficMapComponent } from './trafic-map/trafic-map.component';
import { ListeLigneComponent } from './liste-ligne/liste-ligne.component';
import { RechercheComponent } from './recherche/recherche.component';
import { LigneControlComponent } from './ligne-control/ligne-control.component';
import { LigneDetailComponent } from './ligne-detail/ligne-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FilterTrafic,
    AlertTraficListComponent,
    AlertTraficDetailComponent,
    TraficMapComponent,
    ListeLigneComponent,
    RechercheComponent,
    LigneControlComponent,
    LigneDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,
    HttpClientModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
