/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})

export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Empanadas',
      'Para comer',
      'https://picsum.photos/200/100',
      149.99
    ),
    new Place(
      'p2',
      'Pizza',
      'Para comer',
      'https://picsum.photos/200/100',
      99.99
    ),
  ];

  get places() {
  return [...this._places];
  }
}
