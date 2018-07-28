import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { Order } from '../../app/Order';
import { OrderDetailsPage } from '../order-details/order-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Orders: Order[] = [];
  Localres: any;
  filterd: Order[] = [];
  constructor(private menu: MenuController, public navCtrl: NavController, private myService: ApiDataProvider) {
    this.menu.swipeEnable(true);
    this.myService.getLocalResoruce("he").subscribe(datalocal => {
      this.Localres = datalocal;
    })
  }

  ionViewDidLoad() {
    this.filterd = this.getAllOrders();
  }

  goToDetails(id) {
    console.log(id);
    this.navCtrl.push(OrderDetailsPage, {
      id: id
    });
  };

  doRefresh(event) {
    console.log('Begin async operation', event);
    this.getAllOrders();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  };

  getAllOrders() {
    this.myService.GetAllOrders().subscribe(data => {
      this.Orders = data;
      for (var i = 0; i < this.Orders.length; i++) {
        this.Orders[i].OrderDate = new Date(this.Orders[i].OrderDate.replace(/-/g, "/"));
        //this.Orders[i].OrderDate = this.Orders[i].OrderDate.getTime();
      }
    });
    return this.Orders;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.filterd = this.getAllOrders();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filterd = this.Orders.filter((item) => {
        return (item.CollectionTypeName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
