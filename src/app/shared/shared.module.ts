import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {NgModule} from '@angular/core';
import {PagenotfoundComponent, FooterComponent, HeaderComponent} from './shared.index';
import {MaterialAModule} from '../material-a.module';



@NgModule({
  declarations:[
  PagenotfoundComponent,
  HeaderComponent,
  FooterComponent
  ],
  imports:[
    RouterModule,
    CommonModule,
    MaterialAModule
  ],
  exports:[
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}
