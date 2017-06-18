import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
        MdInputModule,
        MdCardModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdDialogModule,
        MdProgressBarModule } from '@angular/material';


import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';


@NgModule({
  declarations: [
    AppComponent,
    GoogleChart
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
