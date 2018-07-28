import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ICustomer } from '../../app/Customer';
import { ApiDataProvider } from '../../providers/api-data/api-data';

@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})

export class CustomerDetailPage {
  
  Customer:ICustomer;
  Localres:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl:ViewController,
    private APIData:ApiDataProvider) {
      this.APIData.getLocalResoruce("he").subscribe(res=> {
        this.Localres = res;
      });
      this.Customer = this.navParams.get('myParams');
  }
  /**
   * 
   * Cancel Button used
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDetailPage');
  }

}
