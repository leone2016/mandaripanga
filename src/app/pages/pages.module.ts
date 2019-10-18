import {PAGES_ROUtES} from './pages.routes';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {PagesComponent} from './pages.index';
import { HomeComponent } from './home/home.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ReservesComponent } from './reserves/reserves.component';
import { AboutComponent } from './about/about.component';
import {MaterialAModule} from '../material-a.module';
import { MonthComponent } from './availability/month/month.component';
import {PrimengModule} from '../primeng.module';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AvailabilityComponent,
    ReservesComponent,
    AboutComponent,
    MonthComponent,

  ],
  exports:[
    PagesComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUtES,
    FormsModule,
    BrowserModule,
    MaterialAModule,
    PrimengModule
  ]

})
export class PagesModule{}
