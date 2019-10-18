import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.index';
import {HomeComponent} from './home/home.component';
import {AvailabilityComponent} from './availability/availability.component';
import {ReservesComponent} from './reserves/reserves.component';
import {AboutComponent} from './about/about.component';


const pagesRoutes : Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'home', component: HomeComponent },
      {path: 'availability', component: AvailabilityComponent },
      {path: 'reserves', component: ReservesComponent },
      {path: 'about', component: AboutComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUtES = RouterModule.forChild(pagesRoutes)
//forRoot se usa cuando es la ruta principal
//forChild se usa cuando se tiene un router outlet dentro de otro router outlet
