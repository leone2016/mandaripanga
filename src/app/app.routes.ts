import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './shared/shared.index';


const routes: Routes =[
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes);
