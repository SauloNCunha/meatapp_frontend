import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurant: Restaurant ;

  constructor() { }

  ngOnInit() {
    this.restaurant.name = "TASTY TREATS";
    this.restaurant.rating = 4.5;
    this.restaurant.category = "Bakery";
    this.restaurant.deliveryEstimate = "40-65m";
    this.restaurant.imagePath = "assets/img/restaurants/tasty.png"
  }

}
