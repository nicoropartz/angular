import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import {AmexioWidgetModule, CommonHttpService} from 'amexio-ng-extensions';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
