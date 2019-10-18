import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PasswordModule} from 'primeng/password';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  exports: [
    TableModule
  ],
  providers: [],
})
export class PrimengModule { }
