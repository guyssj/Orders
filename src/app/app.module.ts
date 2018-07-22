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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OrderDetailsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OrderDetailsPage,
    LoginPage
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
