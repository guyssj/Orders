import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { Order } from '../../app/Order';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Orders:Order[] = [];
  constructor(public navCtrl: NavController , private myService:ApiDataProvider) {
    this.myService.GetAllOrders().subscribe(data => {
      console.log(data);
      debugger;
      this.Orders = data;
    })
  }
}
