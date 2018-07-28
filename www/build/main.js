webpackJsonp([1],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/order-details/order-details.module": [
		694,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_touch_id__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_detail_customer_detail__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPage = /** @class */ (function () {
    function ListPage(alertCtrl, touchId, navCtrl, navParams, APIData, modalCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.touchId = touchId;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.APIData = APIData;
        this.modalCtrl = modalCtrl;
        this.Customers = [];
        this.getAllCustomers();
        this.APIData.getLocalResoruce("he").subscribe(function (res) {
            _this.Localres = res;
        });
    }
    ListPage.prototype.openModal = function (characterNum) {
        console.log(characterNum);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__customer_detail_customer_detail__["a" /* CustomerDetailPage */], { 'myParams': characterNum });
        modal.present();
    };
    /**
   * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
   *
   * @param {string} message  The message to display
   * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
   */
    ListPage.prototype.EnterWithTouchID = function () {
        var _this = this;
        this.touchId.isAvailable()
            .then(function (res) { return console.log('TouchID is available!'); }, function (err) { return console.error('TouchID is not available', err); });
        this.touchId.verifyFingerprint('השתמש בזהוי טביעת אצבע')
            .then(function (res) { return _this.showAlert('Finger is ok Mother Fakka'); }, function (err) { return console.error('Error', err); });
    };
    ;
    /**
     * This method get all customers from a API Server
     *
     *
     *
     *  @returns {ICustomer[]} return a ICustomer Class
     */
    ListPage.prototype.getAllCustomers = function () {
        var _this = this;
        this.APIData.GetAllCustomers().subscribe(function (data) {
            console.log(data);
            _this.Customers = data;
        });
    };
    ListPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        // this.navCtrl.push(ListPage, {
        //   item: item
        // });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/guy/Orders/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="mycolor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{Localres?.Customers}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #e9ecef">\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of Customers">\n      <ion-item (click)="openModal(item)">\n          <ion-icon name="contact" item-start></ion-icon>\n        <h2>{{item.CompanyName}}</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="call"></ion-icon>\n          Text\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/guy/Orders/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_touch_id__["a" /* TouchID */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailPage = /** @class */ (function () {
    function CustomerDetailPage(navCtrl, navParams, viewCtrl, APIData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.APIData = APIData;
        this.APIData.getLocalResoruce("he").subscribe(function (res) {
            _this.Localres = res;
        });
        this.Customer = this.navParams.get('myParams');
    }
    /**
     *
     * Cancel Button used
     */
    CustomerDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CustomerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerDetailPage');
    };
    CustomerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer-detail',template:/*ion-inline-start:"/Users/guy/Orders/src/pages/customer-detail/customer-detail.html"*/'<!--\n  Generated template for the CustomerDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="mycolor">\n    <ion-title>{{Localres?.Customer}}: {{Customer.CustomerID}}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="light" showWhen="ios">{{Localres?.Cancel}}</span>\n        <ion-icon name="close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background-color: #e9ecef">\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="">\n      </ion-avatar>\n      <h2>{{Localres?.Customer}} - {{Customer?.CompanyName}}</h2>\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        {{Customer?.Cellphone}}\n      </ion-note>\n      {{Localres?.PhoneNumber}}:\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        {{Customer?.EmailAddress}}\n      </ion-note>\n      {{Localres?.EmailAddress}}:\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        {{Customer?.DateCreated | date:\'dd/MM/yyyy\'}}\n      </ion-note>\n      {{Localres?.Date}}:\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        {{Customer?.Address}}\n      </ion-note>\n      {{Localres?.Address}}:\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/guy/Orders/src/pages/customer-detail/customer-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], CustomerDetailPage);
    return CustomerDetailPage;
}());

//# sourceMappingURL=customer-detail.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_touch_id__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_data_api_data__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_order_details_order_details__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environment__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_customer_detail_customer_detail__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'orderdetails', segment: 'orders/:id', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__environment__["a" /* firebaseConfig */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_api_data_api_data__["a" /* ApiDataProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_touch_id__["a" /* TouchID */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_order_details_order_details__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], photo: 'home' },
            { title: 'Customers', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], photo: 'contact' },
            { title: 'New Order', component: __WEBPACK_IMPORTED_MODULE_6__pages_order_details_order_details__["a" /* OrderDetailsPage */], photo: 'add-circle' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#34495e');
            _this.statusBar.show();
            _this.splashScreen.show();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/guy/Orders/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="mycolor">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines>\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button> -->\n      <ion-item *ngFor="let p of pages">\n\n        <button menuClose ion-item (click)="openPage(p)">{{p.title}}\n            <ion-icon name="{{p.photo}}" item-start></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/guy/Orders/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Login Page
 *
 *
 * All copyright save to Guy Goldboim and for Reptouch Software.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menu, navParams, afAuth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.User = {
            Email: '',
            Password: ''
        };
    }
    /**
   * Sign in with Email and Password using
   *
   */
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.User.Email, this.User.Password).then(function (data) {
            console.log(data);
            _this.success(data.user);
        }, function (error) {
            _this.fail(error);
        });
    };
    /**
   * Register with Email and password method
   *
   */
    LoginPage.prototype.signup = function () {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(this.User.Email, this.User.Password)
            .then(function (user) {
            console.log(user);
            _this.success(user.user);
        });
    };
    LoginPage.prototype.success = function (user) {
        this.showAlert("Hi! " + user.email, "Success!");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.fail = function (error) {
        this.showAlert(error.message, error.code);
    };
    /**
 * Pop Alet message
 * @param message Message show in Alert Popup
 * @param title Title show in alert popup
 */
    LoginPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        return alert.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.menu.swipeEnable(false);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/guy/Orders/src/pages/login/login.html"*/'<!--\n All copyright to Guy Goldboim\n-->\n<ion-content padding class="backgroundpage">\n\n  <ion-card>\n    <ion-card-header>\n      ברוכים הבאים\n      <i>\n          <div class="imglogo">\n              <img src="../assets/imgs/LogoOrderTouch.png" class="">\n            </div>\n      </i>\n    </ion-card-header>\n \n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-input type="text" placeholder="Username" [(ngModel)]="User.Email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="User.Password"></ion-input>\n        </ion-item>\n        <p style="text-align: center;">\n          לא רשום? אנא פנה למנהל המערכת\n        </p>\n        <button ion-button block color="mycolor" (click)="signin()">התחבר\n          <ion-icon name="log-in"></ion-icon>\n        </button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/guy/Orders/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiDataProvider = /** @class */ (function () {
    //Prod
    // baseUrl:any = "http://reptouch.xyz/public";
    function ApiDataProvider(http) {
        this.http = http;
        //Dev
        this.baseUrl = "http://localhost:8120/DALOrders/public";
        console.log('Hello ApiDataProvider Provider');
    }
    ApiDataProvider.prototype.getLocalResoruce = function (Lang) {
        return this.http.get("assets/Resources/" + Lang + ".json");
    };
    ApiDataProvider.prototype.GetAllOrders = function () {
        return this.http.get(this.baseUrl + "/api/GetAllOrders");
    };
    ApiDataProvider.prototype.GetAllCustomers = function () {
        return this.http.get(this.baseUrl + "/api/GetAllCustomers");
    };
    ApiDataProvider.prototype.getItemsByOrder = function (id) {
        return this.http.get(this.baseUrl + '/api/GetItemsByOrder/' + id);
    };
    ApiDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiDataProvider);
    return ApiDataProvider;
}());

//# sourceMappingURL=api-data.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyC3Wn-g15Q6kDaTKyVZGdrRuDDtnhmHYZI",
    authDomain: "ordertouch-7dce5.firebaseapp.com",
    databaseURL: "https://ordertouch-7dce5.firebaseio.com",
    projectId: "ordertouch-7dce5",
    storageBucket: "ordertouch-7dce5.appspot.com",
    messagingSenderId: "565956861788"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(menu, navCtrl, myService) {
        var _this = this;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.myService = myService;
        this.Orders = [];
        this.filterd = [];
        this.menu.swipeEnable(true);
        this.myService.getLocalResoruce("he").subscribe(function (datalocal) {
            _this.Localres = datalocal;
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.filterd = this.getAllOrders();
    };
    HomePage.prototype.goToDetails = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_details_order_details__["a" /* OrderDetailsPage */], {
            id: id
        });
    };
    ;
    HomePage.prototype.doRefresh = function (event) {
        console.log('Begin async operation', event);
        this.getAllOrders();
        setTimeout(function () {
            console.log('Async operation has ended');
            event.complete();
        }, 2000);
    };
    ;
    HomePage.prototype.getAllOrders = function () {
        var _this = this;
        this.myService.GetAllOrders().subscribe(function (data) {
            _this.Orders = data;
            for (var i = 0; i < _this.Orders.length; i++) {
                _this.Orders[i].OrderDate = new Date(_this.Orders[i].OrderDate.replace(/-/g, "/"));
                //this.Orders[i].OrderDate = this.Orders[i].OrderDate.getTime();
            }
        });
        return this.Orders;
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.filterd = this.getAllOrders();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.filterd = this.Orders.filter(function (item) {
                return (item.CollectionTypeName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/guy/Orders/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="mycolor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>מסך בית</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #e9ecef">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Pull to refresh"\n        refreshingText="Refreshing...">></ion-refresher-content>\n      </ion-refresher>\n        <ion-searchbar (ionInput)="getItems($event)" ></ion-searchbar>\n      <ion-list>\n          <ion-item (click)="goToDetails(order.OrderID)" *ngFor="let order of filterd">\n            <ion-avatar item-start>\n              <img src="assets/imgs/reps.png">\n            </ion-avatar>\n            <h2>{{Localres.OrderID}} : {{order.OrderID}}</h2>\n            <h3>{{Localres.Customer}} : {{order.CompanyName}}</h3>\n            <p>{{Localres.CollectionType}} : {{order.CollectionTypeName}}</p>\n            <p>{{order.OrderDate | date:\'dd/MM/yyyy\' }}</p>\n          </ion-item>\n        </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/guy/Orders/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(navCtrl, navParams, DataAPI) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DataAPI = DataAPI;
        this.Orders = [];
        this.Items = [];
        this.DataAPI.getLocalResoruce("he").subscribe(function (dataLocal) {
            _this.Localres = dataLocal;
        });
    }
    OrderDetailsPage.prototype.getOrderByID = function (id) {
        var _this = this;
        this.DataAPI.GetAllOrders().subscribe(function (data) {
            _this.Orders = data;
            _this.Order = data.find(function (Order) { return Order.OrderID === id; });
            _this.Order.OrderDate = new Date(_this.Order.OrderDate.replace(/-/g, "/"));
            console.log(_this.Order);
        });
    };
    OrderDetailsPage.prototype.getItemsByID = function (id) {
        var _this = this;
        this.DataAPI.getItemsByOrder(id).subscribe(function (dataItems) {
            _this.Items = dataItems;
            console.log(_this.Items);
        });
    };
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailsPage');
        this.OrderId = this.navParams.get('id');
        debugger;
        this.getOrderByID(this.OrderId);
        this.getItemsByID(this.OrderId);
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"/Users/guy/Orders/src/pages/order-details/order-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>orderDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="">\n      </ion-avatar>\n      <h2>{{Localres?.Customer}} - {{Order?.CompanyName}}</h2>\n      <p>{{Order?.OrderDate | date:\'dd/MM/yyyy\'}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-note item-end>\n        {{Order?.ProfileName}}\n      </ion-note>\n      {{Localres?.ProfileName}}:\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        {{Order?.Cellphone}}\n      </ion-note>\n      {{Localres?.PhoneNumber}}:\n    </ion-item>\n    <ion-item>\n      <ion-note item-end>\n        {{Order?.CollectionTypeName}}\n      </ion-note>\n      {{Localres?.CollectionType}}:\n    </ion-item>\n  </ion-list>\n  <ion-list>\n      <ion-list-header>\n        {{Localres?.Items}}\n      </ion-list-header>\n      <ion-item *ngFor="let item of Items">\n        <h2>{{item.ProductName}}</h2>\n        <p>כמות :{{item.Quantity}}</p>\n        <p>{{item.Price | currency: "&#8362;"}}</p>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/guy/Orders/src/pages/order-details/order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map