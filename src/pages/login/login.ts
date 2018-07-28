import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Login Page
 *  
 * 
 * All copyright save to Guy Goldboim and for Reptouch Software.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  User: any = {
    Email: '',
    Password: ''
  }

  constructor(public navCtrl: NavController, private menu: MenuController, public navParams: NavParams, private afAuth: AngularFireAuth,public alertCtrl: AlertController) {
  }

  /**
 * Sign in with Email and Password using 
 *
 */
  signin() {
    this.afAuth.auth.signInWithEmailAndPassword(this.User.Email, this.User.Password).then(data => {
      console.log(data);
      this.success(data.user);
    },error => {
      this.fail(error)
    })
  }
  /**
 * Register with Email and password method
 *
 */
  signup() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.User.Email, this.User.Password)
    .then(user => {
      console.log(user);
      this.success(user.user);
    })
  }

  success(user){
    this.showAlert("Hi! "+user.email,"Success!");
    this.navCtrl.setRoot(HomePage);
  }

  fail(error){
    this.showAlert(error.message,error.code);
  }

    /**
 * Pop Alet message
 * @param message Message show in Alert Popup
 * @param title Title show in alert popup
 */
  showAlert(message,title) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    return alert.present();
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.swipeEnable(false);
  }

}
