import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TouchID } from '@ionic-native/touch-id';
import { ApiDataProvider } from '../providers/api-data/api-data';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { LoginPage } from '../pages/login/login'
import { firebaseConfig } from '../environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CustomerDetailPage } from '../pages/customer-detail/customer-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OrderDetailsPage,
    LoginPage,
    CustomerDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OrderDetailsPage,
    LoginPage,
    CustomerDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiDataProvider,
    TouchID,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
