import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "T-Hotel",
      "In the heart of Cagliari",
      "https://cf.bstatic.com/images/hotel/max1024x768/935/9359710.jpg",
      299.99
    ),
    new Place(
      "p2",
      "T-Hotel",
      "Near the beautiful sea of Cagliari",
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/2c/16/c5/hotel-flora.jpg",
      199.99
    ),
    new Place(
      "p3",
      "Palazzo Doglio",
      "Best urban resort in Sardinia",
      "https://cf.bstatic.com/images/hotel/max1024x768/265/265290077.jpg",
      250.00
    )
  ];

  getPlaces() {
    return [...this._places];
  }

  constructor() {}
}
