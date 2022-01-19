import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { IconCatComponent } from './movie-icons/icon-cat.component';
import { IconShipComponent } from './movie-icons/icon-ship.component';
import { IconSpiderComponent } from './movie-icons/icon-spider.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RentalListComponent, MovieTileComponent, IconCatComponent, IconShipComponent, IconSpiderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
