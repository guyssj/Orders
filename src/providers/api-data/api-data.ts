import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../app/Order';
import { ICustomer } from '../../app/Customer';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Items } from '../../app/Items';

/*
  Generated class for the ApiDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiDataProvider {
  //Dev
  baseUrl:any = "http://localhost:8120/DALOrders/public";

  //Prod
  // baseUrl:any = "http://reptouch.xyz/public";
  constructor(public http: HttpClient) {
    console.log('Hello ApiDataProvider Provider');
  } 

  getLocalResoruce(Lang){
    return this.http.get("assets/Resources/"+Lang+".json")
  }

  GetAllOrders(){
    return this.http.get<Order[]>(this.baseUrl + "/api/GetAllOrders");
  }

  GetAllCustomers(){ 
    return this.http.get<ICustomer[]>(this.baseUrl + "/api/GetAllCustomers")
  }
  getItemsByOrder(id):Observable<Items[]>{
    return this.http.get<Items[]>(this.baseUrl + '/api/GetItemsByOrder/'+id);
  }
}
