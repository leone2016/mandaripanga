import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatToolbarModule,
  MatDividerModule, MatListModule, MatCardModule,
  MatInputModule, MatSelectModule, MatTabsModule,
  MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
})
export class MaterialAModule { }
