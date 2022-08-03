import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];

  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
