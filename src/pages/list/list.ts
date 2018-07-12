import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ICustomer } from '../../app/Customer';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { TouchID } from '@ionic-native/touch-id';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  Customers: ICustomer[] = [];

  constructor(public alertCtrl: AlertController, private touchId: TouchID, public navCtrl: NavController, public navParams: NavParams, public APIData: ApiDataProvider) {
    this.APIData.GetAllCustomers().subscribe(data => {
      console.log(data);
      this.Customers = data;
    })
  }
  /**
 * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
 *
 * @param {string} message  The message to display
 * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
 */
  test() {
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
