import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CreateIncidentComponent } from './create-incident/create-incident.component';
import { RouterModule, Routes} from '@angular/router';


const appRoutes : Routes = [
  { path : 'ligne-control', component : LigneControlComponent },
  { path : 'ligne-create', component : CreateIncidentComponent },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path:'**', component : CreateIncidentComponent
  }
];
  


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
    LigneDetailComponent,
    CreateIncidentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing : true}),
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
