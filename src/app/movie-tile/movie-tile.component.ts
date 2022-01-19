import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: [ './movie-tile.component.css' ]
})
export class MovieTileComponent  {
  @Input() movie;
  @Output() rentClick = new EventEmitter();

  ngOnInit() {
    
  }

  onClick() {
    this.rentClick.emit(this.movie);
  }

}