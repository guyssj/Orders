import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { Order } from '../../app/Order';
import { OrderDetailsPage } from '../order-details/order-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Orders:Order[] = [];
  Localres:any;
  constructor(public navCtrl: NavController , private myService:ApiDataProvider) {
    this.getAllOrders();
    this.myService.getLocalResoruce("he").subscribe(datalocal => {
      debugger;
      this.Localres = datalocal;
    })
  }

  goToDetails(id){
    console.log(id);
    this.navCtrl.push(OrderDetailsPage,{
      id : id
    });
  };

  doRefresh(event){
    console.log('Begin async operation', event);
    this.getAllOrders();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  };

  getAllOrders(){
    this.myService.GetAllOrders().subscribe(data => {
      console.log(data);
      debugger;
      this.Orders = data;
      for (var i = 0; i < this.Orders.length; i++) {
        this.Orders[i].OrderDate = new Date(this.Orders[i].OrderDate.replace(/-/g, "/"));
        //this.Orders[i].OrderDate = this.Orders[i].OrderDate.getTime();
    }
    });
  }
}
