import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../app/Order';
import { ICustomer } from '../../app/Customer';

/*
  Generated class for the ApiDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiDataProvider Provider');
  }
  GetAllOrders(){
    return this.http.get<Order[]>("http://reptouch.xyz/public/api/GetAllRepairs");
  }

  GetAllCustomers(){ 
    return this.http.get<ICustomer[]>("http://reptouch.xyz/public/api/GetAllCustomers")
  }
}
