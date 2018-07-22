import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { Order } from '../../app/Order';
import { Items } from '../../app/Items';

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'orders/:id',
  name:'orderdetails'
})

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  OrderId:number;
  Orders:Order[] = [];
  Order:Order;
  Items:Items[] = [];
  Localres:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private DataAPI:ApiDataProvider) {
    this.DataAPI.getLocalResoruce("he").subscribe(dataLocal =>{
      this.Localres = dataLocal;
    })
  }

  getOrderByID(id){
    this.DataAPI.GetAllOrders().subscribe(data =>{
      this.Orders = data;
      this.Order = data.find(Order => Order.OrderID === id);
      this.Order.OrderDate = new Date(this.Order.OrderDate.replace(/-/g, "/"));
      console.log(this.Order);
    })
  }

  getItemsByID(id){
    this.DataAPI.getItemsByOrder(id).subscribe(dataItems =>{
      this.Items = dataItems;
      console.log(this.Items);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
    this.OrderId = this.navParams.get('id');
    debugger;
    this.getOrderByID(this.OrderId);
    this.getItemsByID(this.OrderId);
  }

}
