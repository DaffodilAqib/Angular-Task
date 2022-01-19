import { Component } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  rentalList = []
  flopData;

  constructor(private titleService: Title) {
    this.flopData = FLOP_DATA
    titleService.setTitle('Flopbox')
  }



  onRentMovie(movie) {
    console.log('movie rented' + movie.title);
    this.rentalList.push(movie)
  }

  onClearRentalList() {
    this.rentalList = []
  }
}
