import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpletableComponent } from './simpletable/simpletable.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonFetchTableComponent } from './json-fetch-table/json-fetch-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpletableComponent,
    JsonFetchTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
