import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ICustomer } from '../../app/Customer';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { TouchID } from '@ionic-native/touch-id';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { CustomerDetailPage } from '../customer-detail/customer-detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  Customers: ICustomer[] = [];
  Localres: any;

  constructor(
    public alertCtrl: AlertController, 
    private touchId: TouchID, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private APIData: ApiDataProvider,
    public modalCtrl: ModalController) {

    this.getAllCustomers();
    this.APIData.getLocalResoruce("he").subscribe(res => {
      this.Localres = res;
    })
  }

  openModal(characterNum:ICustomer) {
    console.log(characterNum);
    let modal = this.modalCtrl.create(CustomerDetailPage, {'myParams' : characterNum});
    modal.present();
  }
  /**
 * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
 *
 * @param {string} message  The message to display
 * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
 */
  EnterWithTouchID() {
    this.touchId.isAvailable()
      .then(
        res => console.log('TouchID is available!'),
        err => console.error('TouchID is not available', err)
      );

    this.touchId.verifyFingerprint('השתמש בזהוי טביעת אצבע')
      .then(
        res => this.showAlert('Finger is ok Mother Fakka'),
        err => console.error('Error', err)
      );
  };


  /**
   * This method get all customers from a API Server
   * 
   * 
   * 
   *  @returns {ICustomer[]} return a ICustomer Class
   */
  getAllCustomers(){
    this.APIData.GetAllCustomers().subscribe(data => {
      console.log(data);
      this.Customers = data;
    })
  }

  showAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });

    this.navCtrl.push(HomePage);
  }
}
