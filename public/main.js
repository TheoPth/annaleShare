(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/matiere/matiere.module": [
		"./src/app/matiere/matiere.module.ts",
		"common",
		"app-matiere-matiere-module"
	],
	"app/monitoring/monitoring.module": [
		"./src/app/monitoring/monitoring.module.ts",
		"app-monitoring-monitoring-module"
	],
	"app/profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"app-profile-profile-module"
	],
	"app/search/search.module": [
		"./src/app/search/search.module.ts",
		"common",
		"app-search-search-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_modules_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/modules/core.module */ "./src/app/shared/modules/core.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/store */ "./src/app/shared/store/index.ts");
/* harmony import */ var _shared_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/store/effects/auth.effects */ "./src/app/shared/store/effects/auth.effects.ts");
/* harmony import */ var _shared_modules_layout_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/modules/layout.module */ "./src/app/shared/modules/layout.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/modules/material.module */ "./src/app/shared/modules/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// modules natifs




// components


// routing

// Modules

// ngrx 








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            // Permet aux autres directives de les voir aussi (pipe ou component)
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["APP_ROUTING"]),
                // forRoot car on est dans le app module, feature pour ajouter les effets ou aciton
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_shared_store__WEBPACK_IMPORTED_MODULE_12__["reducersMap"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_shared_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_13__["AuthEffects"]]),
                // Si grosse appli vaut mieux mettre un nom sinon tout va se retoruver dans le store
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({
                    name: 'Ngrx Photos',
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production
                }),
                _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
                _shared_modules_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _shared_modules_layout_module__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["APP_BASE_HREF"], useValue: '/' }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");



var APP_ROUTING = [
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_0__["SignupComponent"] },
    { path: 'signin', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"] },
    { path: 'profile', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], loadChildren: 'app/profile/profile.module#ProfileModule' },
    { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
    { path: 'matiere', loadChildren: 'app/matiere/matiere.module#MatiereModule' },
    { path: 'monitoring', loadChildren: 'app/monitoring/monitoring.module#MonitoringModule' },
    { path: "**", redirectTo: 'signin' }
];


/***/ }),

/***/ "./src/app/components/signin/signin.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signin/signin.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-wrapper{\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card>\n    <mat-card-title>Connexion</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"form\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n        <mat-form-field>\n          <input formControlName=\"email\" matInput type=\"text\" placeholder=\"email\" />\n        </mat-form-field>\n        <mat-form-field>\n          <input formControlName=\"password\" matInput type=\"password\" placeholder=\"mot de passe\" />\n        </mat-form-field>\n        <div style=\"color:red;\" *ngIf=\"error$ | async; let error\">{{ error }}</div>\n        <button class=\"btn-green\" (click)=\"submit()\" mat-raised-button >Connexion</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n  \n<!-- <div class=\"container\">\n    <div class=\"row\">\n        <object [data]='sanitizer.bypassSecurityTrustResourceUrl(path)' type=\"application/pdf\" width=\"100%\" height=\"400px\" class=\"mt-3\">\n          <p>Alternative text - include a link <a href=\"myfile.pdf\">to the PDF!</a></p>\n        </object>\n    </div>\n  </div>\n\n<input type=\"file\" (change)=fileEvent($event)> \n\n\n<input type=\"text\" [(ngModel)]=\"nomFile\">\n<button (click)=\"telecharge()\"> Change Pdf </button> -->"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_store_action_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/store/action/auth.actions */ "./src/app/shared/store/action/auth.actions.ts");
/* harmony import */ var _shared_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/store/selectors/auth.selectors */ "./src/app/shared/store/selectors/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, router, authService, store) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.store = store;
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            email: [''],
            password: ['']
        });
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_shared_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_6__["errorAuthSelector"]));
        var auth$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_shared_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoggedIn"]));
        auth$.subscribe(function (val) {
            if (val) {
                _this.router.navigateByUrl('/search');
            }
        });
    };
    SigninComponent.prototype.submit = function () {
        this.store.dispatch(new _shared_store_action_auth_actions__WEBPACK_IMPORTED_MODULE_5__["TrySignin"](this.form.value));
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-wrapper{\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card>\n      <mat-card-title>Inscription</mat-card-title>\n      <mat-card-content>\n        <form [formGroup]=\"form\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n          <mat-form-field>\n            <input formControlName=\"email\" matInput type=\"text\" placeholder=\"email\" />\n          </mat-form-field>\n          <mat-form-field>\n              <input formControlName=\"name\" matInput type=\"text\" placeholder=\"nom\" />\n            </mat-form-field>\n            <mat-form-field>\n                <input formControlName=\"firstname\" matInput type=\"text\" placeholder=\"firstname\" />\n              </mat-form-field>\n          <mat-form-field>\n            <input formControlName=\"password\" matInput type=\"password\" placeholder=\"mot de passe\" />\n          </mat-form-field>\n         \n          <div *ngIf=\"error$ | async; let error\">{{ error }}</div>\n          <button class=\"btn-green\" (click)=\"submit()\" mat-raised-button >Inscription</button>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_store_action_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/store/action/auth.actions */ "./src/app/shared/store/action/auth.actions.ts");
/* harmony import */ var _shared_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/store/selectors/auth.selectors */ "./src/app/shared/store/selectors/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authService, router, store) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: [''],
            name: [''],
            firstname: [''],
            password: ['']
        });
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_shared_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_6__["errorAuthSelector"]));
    };
    SignupComponent.prototype.submit = function () {
        this.store.dispatch(new _shared_store_action_auth_actions__WEBPACK_IMPORTED_MODULE_5__["TrySignup"](this.form.value));
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/matiere/shared/store/ressource.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/matiere/shared/store/ressource.actions.ts ***!
  \***********************************************************/
/*! exports provided: FETCH_RESSOURCE, FETCH_RESSOURCE_SUCCESS, FETCH_INIT_TYPE_RESSOURCE, FETCH_INIT_TYPE_RESSOURCE_SUCCESS, SET_TYPE_RESSOURCE, SET_RESSOURCE_SELECTED, ADD_RESSOURCE, ADD_TYPE_RESSOURCE, UPLOAD_FILE, FETCH_RESSOURCE_FILE, FETCH_RESSOURCE_FILE_SUCCESS, DELETE_FILE, FetchRessource, SetTypeRessource, FetchInitTypeRessource, FetchInitTypeRessourceSuccess, SetRessourceSelected, FetchRessourceSuccess, AjoutRessource, AjoutTypeRessource, UploadFile, FetchRessourceFile, FetchRessourceFileSuccess, DeleteFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RESSOURCE", function() { return FETCH_RESSOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RESSOURCE_SUCCESS", function() { return FETCH_RESSOURCE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INIT_TYPE_RESSOURCE", function() { return FETCH_INIT_TYPE_RESSOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_INIT_TYPE_RESSOURCE_SUCCESS", function() { return FETCH_INIT_TYPE_RESSOURCE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TYPE_RESSOURCE", function() { return SET_TYPE_RESSOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RESSOURCE_SELECTED", function() { return SET_RESSOURCE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RESSOURCE", function() { return ADD_RESSOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TYPE_RESSOURCE", function() { return ADD_TYPE_RESSOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FILE", function() { return UPLOAD_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RESSOURCE_FILE", function() { return FETCH_RESSOURCE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RESSOURCE_FILE_SUCCESS", function() { return FETCH_RESSOURCE_FILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FILE", function() { return DELETE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRessource", function() { return FetchRessource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTypeRessource", function() { return SetTypeRessource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchInitTypeRessource", function() { return FetchInitTypeRessource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchInitTypeRessourceSuccess", function() { return FetchInitTypeRessourceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRessourceSelected", function() { return SetRessourceSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRessourceSuccess", function() { return FetchRessourceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutRessource", function() { return AjoutRessource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutTypeRessource", function() { return AjoutTypeRessource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFile", function() { return UploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRessourceFile", function() { return FetchRessourceFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRessourceFileSuccess", function() { return FetchRessourceFileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
var FETCH_RESSOURCE = '[ matiere ] fetch possibility';
var FETCH_RESSOURCE_SUCCESS = '[ matiere ] fetch ressource success';
var FETCH_INIT_TYPE_RESSOURCE = '[ matiere ] fetch init type ressource';
var FETCH_INIT_TYPE_RESSOURCE_SUCCESS = '[ matiere ] fetch init type ressource success';
var SET_TYPE_RESSOURCE = '[ matiere ] set type ressource';
var SET_RESSOURCE_SELECTED = '[ matiere] set ressource selected';
var ADD_RESSOURCE = '[ matiere ] add ressource';
var ADD_TYPE_RESSOURCE = '[ matiere ] add type ressource';
var UPLOAD_FILE = '[ matiere ] upload file';
var FETCH_RESSOURCE_FILE = '[ matiere ] fetch ressource file';
var FETCH_RESSOURCE_FILE_SUCCESS = '[ matiere ]  fetch ressource file success';
var DELETE_FILE = '[ matiere ] delete file';
var FetchRessource = /** @class */ (function () {
    function FetchRessource() {
        this.type = FETCH_RESSOURCE;
    }
    return FetchRessource;
}());

;
var SetTypeRessource = /** @class */ (function () {
    function SetTypeRessource(payload) {
        this.payload = payload;
        this.type = SET_TYPE_RESSOURCE;
    }
    ;
    return SetTypeRessource;
}());

;
var FetchInitTypeRessource = /** @class */ (function () {
    function FetchInitTypeRessource() {
        this.type = FETCH_INIT_TYPE_RESSOURCE;
    }
    return FetchInitTypeRessource;
}());

var FetchInitTypeRessourceSuccess = /** @class */ (function () {
    function FetchInitTypeRessourceSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_INIT_TYPE_RESSOURCE_SUCCESS;
    }
    ;
    return FetchInitTypeRessourceSuccess;
}());

var SetRessourceSelected = /** @class */ (function () {
    function SetRessourceSelected(payload) {
        this.payload = payload;
        this.type = SET_RESSOURCE_SELECTED;
    }
    ;
    return SetRessourceSelected;
}());

var FetchRessourceSuccess = /** @class */ (function () {
    function FetchRessourceSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_RESSOURCE_SUCCESS;
    }
    return FetchRessourceSuccess;
}());

var AjoutRessource = /** @class */ (function () {
    function AjoutRessource(payload) {
        this.payload = payload;
        this.type = ADD_RESSOURCE;
    }
    return AjoutRessource;
}());

var AjoutTypeRessource = /** @class */ (function () {
    function AjoutTypeRessource(payload) {
        this.payload = payload;
        this.type = ADD_TYPE_RESSOURCE;
    }
    return AjoutTypeRessource;
}());

var UploadFile = /** @class */ (function () {
    function UploadFile(payload) {
        this.payload = payload;
        this.type = UPLOAD_FILE;
    }
    return UploadFile;
}());

var FetchRessourceFile = /** @class */ (function () {
    function FetchRessourceFile(payload) {
        this.payload = payload;
        this.type = FETCH_RESSOURCE_FILE;
    }
    return FetchRessourceFile;
}());

var FetchRessourceFileSuccess = /** @class */ (function () {
    function FetchRessourceFileSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_RESSOURCE_FILE_SUCCESS;
    }
    return FetchRessourceFileSuccess;
}());

var DeleteFile = /** @class */ (function () {
    function DeleteFile(payload) {
        this.payload = payload;
        this.type = DELETE_FILE;
    }
    return DeleteFile;
}());



/***/ }),

/***/ "./src/app/matiere/shared/store/ressource.reducers.ts":
/*!************************************************************!*\
  !*** ./src/app/matiere/shared/store/ressource.reducers.ts ***!
  \************************************************************/
/*! exports provided: RessourceReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourceReducer", function() { return RessourceReducer; });
/* harmony import */ var _ressource_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ressource.actions */ "./src/app/matiere/shared/store/ressource.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function RessourceReducer(state, action) {
    switch (action.type) {
        case _ressource_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_INIT_TYPE_RESSOURCE_SUCCESS"]: {
            return __assign({}, state, { typeRessources: action.payload });
        }
        case _ressource_actions__WEBPACK_IMPORTED_MODULE_0__["SET_TYPE_RESSOURCE"]: {
            return __assign({}, state, { typeRessourceSelected: action.payload });
        }
        case _ressource_actions__WEBPACK_IMPORTED_MODULE_0__["SET_RESSOURCE_SELECTED"]: {
            return __assign({}, state, { ressourceSelected: action.payload });
        }
        case _ressource_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_RESSOURCE_SUCCESS"]:
            return __assign({}, state, { ressources: action.payload });
        case _ressource_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_RESSOURCE_FILE_SUCCESS"]:
            return __assign({}, state, { fileRessourceSelected: action.payload });
    }
    return state;
}


/***/ }),

/***/ "./src/app/monitoring/shared/interceptors/spe-interceptor.ts":
/*!*******************************************************************!*\
  !*** ./src/app/monitoring/shared/interceptors/spe-interceptor.ts ***!
  \*******************************************************************/
/*! exports provided: SpeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeInterceptor", function() { return SpeInterceptor; });
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_monitoring_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/monitoring.selectors */ "./src/app/monitoring/shared/store/monitoring.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpeInterceptor = /** @class */ (function () {
    function SpeInterceptor(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_monitoring_selectors__WEBPACK_IMPORTED_MODULE_5__["specialitesSelectedSelector"])).subscribe(function (spe) {
            _this.spe = spe;
        });
    }
    /**
     * inter
     */
    SpeInterceptor.prototype.inter = function (req, next) {
        if (this.spe) {
            var authReq = req.clone({
                headers: req.headers.set('specialiteMonitoring', this.spe.id)
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    SpeInterceptor.prototype.intercept = function (req, next) {
        // Intercept le retour pour l'erreur 401 
        return this.inter(req, next).do(function (event) {
            // Dans tout les autre cas que les erreurs
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 403) {
                    alert("Vous n'avez pas les droits suffisants pour réaliser cette action.");
                }
            }
        });
    };
    SpeInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SpeInterceptor);
    return SpeInterceptor;
}());



/***/ }),

/***/ "./src/app/monitoring/shared/store/monitoring.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/monitoring/shared/store/monitoring.actions.ts ***!
  \***************************************************************/
/*! exports provided: FETCH_SPECIALITE, FETCH_SPECIALITE_SUCCESS, FETCH_MATIERE, FETCH_MATIERE_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS, FETCH_DROIT_USER_SELECTED, FETCH_DROIT_USER_SELECTED_SUCCESS, FETCH_DROIT, FETCH_DROIT_SUCCESS, FETCH_SHARE_LINK, FETCH_SHARE_LINK_SUCCESS, JOIN_SPECIALITE, JoinSpecialite, FetchShareLink, FetchShareLinkSuccess, FetchSpecialite, FetchSpecialiteSuccess, FetchDroit, FetchDroitSuccess, FetchMatiere, FetchMatiereSuccess, FetchUser, FetchUserSuccess, FetchDroitUserSelected, FetchDroitUserSelectedSuccess, SET_DROIT_USER_SELECTED, DELETE_MATIERE, SET_SPECIALITE_SELECTED, SET_USER_SELECTED, UNSET_DROIT_USER_SELECTED, SetDroitUserSelected, UnsetDroitUserSelected, DeleteMatiere, SetSpecialiteSelected, SetUserSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SPECIALITE", function() { return FETCH_SPECIALITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SPECIALITE_SUCCESS", function() { return FETCH_SPECIALITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MATIERE", function() { return FETCH_MATIERE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MATIERE_SUCCESS", function() { return FETCH_MATIERE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER", function() { return FETCH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_SUCCESS", function() { return FETCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DROIT_USER_SELECTED", function() { return FETCH_DROIT_USER_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DROIT_USER_SELECTED_SUCCESS", function() { return FETCH_DROIT_USER_SELECTED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DROIT", function() { return FETCH_DROIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DROIT_SUCCESS", function() { return FETCH_DROIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SHARE_LINK", function() { return FETCH_SHARE_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SHARE_LINK_SUCCESS", function() { return FETCH_SHARE_LINK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_SPECIALITE", function() { return JOIN_SPECIALITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinSpecialite", function() { return JoinSpecialite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchShareLink", function() { return FetchShareLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchShareLinkSuccess", function() { return FetchShareLinkSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSpecialite", function() { return FetchSpecialite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSpecialiteSuccess", function() { return FetchSpecialiteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDroit", function() { return FetchDroit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDroitSuccess", function() { return FetchDroitSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchMatiere", function() { return FetchMatiere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchMatiereSuccess", function() { return FetchMatiereSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchUser", function() { return FetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchUserSuccess", function() { return FetchUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDroitUserSelected", function() { return FetchDroitUserSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDroitUserSelectedSuccess", function() { return FetchDroitUserSelectedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DROIT_USER_SELECTED", function() { return SET_DROIT_USER_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MATIERE", function() { return DELETE_MATIERE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SPECIALITE_SELECTED", function() { return SET_SPECIALITE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_SELECTED", function() { return SET_USER_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSET_DROIT_USER_SELECTED", function() { return UNSET_DROIT_USER_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDroitUserSelected", function() { return SetDroitUserSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsetDroitUserSelected", function() { return UnsetDroitUserSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMatiere", function() { return DeleteMatiere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSpecialiteSelected", function() { return SetSpecialiteSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserSelected", function() { return SetUserSelected; });
// GET DATA
var FETCH_SPECIALITE = '[ monitoring ] fetch specialite';
var FETCH_SPECIALITE_SUCCESS = '[ monitoring ] fetch specialite success';
var FETCH_MATIERE = '[ monitoring ] fetch matiere';
var FETCH_MATIERE_SUCCESS = '[ monitoring ] fetch matiere success';
var FETCH_USER = '[ monitoring ] fetch user';
var FETCH_USER_SUCCESS = '[ monitoring ] fetch user success';
var FETCH_DROIT_USER_SELECTED = '[ monitoring ] fetch droit user selected';
var FETCH_DROIT_USER_SELECTED_SUCCESS = '[ monitoring ] fetch droit user selected success';
var FETCH_DROIT = '[ monitoring ] fetch droit';
var FETCH_DROIT_SUCCESS = '[ monitoring ] fetch droit success';
var FETCH_SHARE_LINK = '[monitoring] fetch share link';
var FETCH_SHARE_LINK_SUCCESS = '[ monitoring ] fetch share link success';
var JOIN_SPECIALITE = '[ monitoring ] join specialite';
var JoinSpecialite = /** @class */ (function () {
    function JoinSpecialite(payload) {
        this.payload = payload;
        this.type = JOIN_SPECIALITE;
    }
    return JoinSpecialite;
}());

;
var FetchShareLink = /** @class */ (function () {
    function FetchShareLink(payload) {
        this.payload = payload;
        this.type = FETCH_SHARE_LINK;
    }
    return FetchShareLink;
}());

;
var FetchShareLinkSuccess = /** @class */ (function () {
    function FetchShareLinkSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_SHARE_LINK_SUCCESS;
    }
    return FetchShareLinkSuccess;
}());

;
var FetchSpecialite = /** @class */ (function () {
    function FetchSpecialite() {
        this.type = FETCH_SPECIALITE;
    }
    return FetchSpecialite;
}());

;
var FetchSpecialiteSuccess = /** @class */ (function () {
    function FetchSpecialiteSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_SPECIALITE_SUCCESS;
    }
    return FetchSpecialiteSuccess;
}());

;
var FetchDroit = /** @class */ (function () {
    function FetchDroit() {
        this.type = FETCH_DROIT;
    }
    return FetchDroit;
}());

;
var FetchDroitSuccess = /** @class */ (function () {
    function FetchDroitSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_DROIT_SUCCESS;
    }
    return FetchDroitSuccess;
}());

;
var FetchMatiere = /** @class */ (function () {
    function FetchMatiere() {
        this.type = FETCH_MATIERE;
    }
    return FetchMatiere;
}());

;
var FetchMatiereSuccess = /** @class */ (function () {
    function FetchMatiereSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_MATIERE_SUCCESS;
    }
    return FetchMatiereSuccess;
}());

;
var FetchUser = /** @class */ (function () {
    function FetchUser() {
        this.type = FETCH_USER;
    }
    return FetchUser;
}());

;
var FetchUserSuccess = /** @class */ (function () {
    function FetchUserSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_USER_SUCCESS;
    }
    return FetchUserSuccess;
}());

;
var FetchDroitUserSelected = /** @class */ (function () {
    function FetchDroitUserSelected() {
        this.type = FETCH_DROIT_USER_SELECTED;
    }
    return FetchDroitUserSelected;
}());

;
var FetchDroitUserSelectedSuccess = /** @class */ (function () {
    function FetchDroitUserSelectedSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_DROIT_USER_SELECTED_SUCCESS;
    }
    return FetchDroitUserSelectedSuccess;
}());

;
// SET DATA
var SET_DROIT_USER_SELECTED = '[ monitoring ] set droit user selected';
var DELETE_MATIERE = '[ monitoring ] delete matiere';
var SET_SPECIALITE_SELECTED = '[ monitoring ] set specialite selected';
var SET_USER_SELECTED = '[ monitoring ] fetch user selected';
var UNSET_DROIT_USER_SELECTED = '[ monitoring ] unset droit user selected';
var SetDroitUserSelected = /** @class */ (function () {
    function SetDroitUserSelected(payload) {
        this.payload = payload;
        this.type = SET_DROIT_USER_SELECTED;
    }
    return SetDroitUserSelected;
}());

;
var UnsetDroitUserSelected = /** @class */ (function () {
    function UnsetDroitUserSelected(payload) {
        this.payload = payload;
        this.type = UNSET_DROIT_USER_SELECTED;
    }
    return UnsetDroitUserSelected;
}());

;
var DeleteMatiere = /** @class */ (function () {
    function DeleteMatiere(payload) {
        this.payload = payload;
        this.type = DELETE_MATIERE;
    }
    return DeleteMatiere;
}());

;
var SetSpecialiteSelected = /** @class */ (function () {
    function SetSpecialiteSelected(payload) {
        this.payload = payload;
        this.type = SET_SPECIALITE_SELECTED;
    }
    return SetSpecialiteSelected;
}());

;
var SetUserSelected = /** @class */ (function () {
    function SetUserSelected(payload) {
        this.payload = payload;
        this.type = SET_USER_SELECTED;
    }
    return SetUserSelected;
}());

;


/***/ }),

/***/ "./src/app/monitoring/shared/store/monitoring.reducers.ts":
/*!****************************************************************!*\
  !*** ./src/app/monitoring/shared/store/monitoring.reducers.ts ***!
  \****************************************************************/
/*! exports provided: MonitoringReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringReducer", function() { return MonitoringReducer; });
/* harmony import */ var _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitoring.actions */ "./src/app/monitoring/shared/store/monitoring.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function MonitoringReducer(state, action) {
    switch (action.type) {
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_SPECIALITE_SUCCESS"]: {
            return __assign({}, state, { specialites: action.payload });
        }
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["SET_SPECIALITE_SELECTED"]: {
            return __assign({}, state, { specialiteSelected: action.payload });
        }
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_DROIT_SUCCESS"]: {
            return __assign({}, state, { droits: action.payload });
        }
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MATIERE_SUCCESS"]: {
            return __assign({}, state, { matieres: action.payload });
        }
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER_SUCCESS"]: {
            return __assign({}, state, { users: action.payload });
        }
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["SET_USER_SELECTED"]: {
            return __assign({}, state, { userSelected: action.payload });
        }
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_DROIT_USER_SELECTED_SUCCESS"]: {
            return __assign({}, state, { droitUserSelected: action.payload });
        }
        case _monitoring_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_SHARE_LINK_SUCCESS"]: {
            return __assign({}, state, { shareLink: action.payload });
        }
    }
    return state;
}
;


/***/ }),

/***/ "./src/app/monitoring/shared/store/monitoring.selectors.ts":
/*!*****************************************************************!*\
  !*** ./src/app/monitoring/shared/store/monitoring.selectors.ts ***!
  \*****************************************************************/
/*! exports provided: moonitoringSelector, specialitesSelector, specialitesSelectedSelector, droitsSelector, matieresSelector, usersSelector, userSelectedSelector, droitUserSelectedSelector, getShareLinkSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moonitoringSelector", function() { return moonitoringSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialitesSelector", function() { return specialitesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialitesSelectedSelector", function() { return specialitesSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "droitsSelector", function() { return droitsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matieresSelector", function() { return matieresSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersSelector", function() { return usersSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSelectedSelector", function() { return userSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "droitUserSelectedSelector", function() { return droitUserSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareLinkSelector", function() { return getShareLinkSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var moonitoringSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('monitoring');
var specialitesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.specialites;
    }
    else {
        return null;
    }
});
var specialitesSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.specialiteSelected;
    }
    else {
        return null;
    }
});
var droitsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.droits;
    }
    else {
        return null;
    }
});
var matieresSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.matieres;
    }
    else {
        return null;
    }
});
var usersSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.users;
    }
    else {
        return null;
    }
});
var userSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.userSelected;
    }
    else {
        return null;
    }
});
var droitUserSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.droitUserSelected;
    }
    else {
        return null;
    }
});
var getShareLinkSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(moonitoringSelector, function (searchState) {
    if (searchState) {
        return searchState.shareLink;
    }
    else {
        return null;
    }
});


/***/ }),

/***/ "./src/app/search/shared/store/search.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/search/shared/store/search.actions.ts ***!
  \*******************************************************/
/*! exports provided: FETCH_ECOLES, FETCH_SPECIALITES, FETCH_MATIERES, FETCH_ECOLES_SUCCESS, FETCH_SPECIALITES_SUCCESS, FETCH_MATIERES_SUCCESS, SET_ECOLE_SELECTED, SET_SPECIALITE_SELECTED, SET_MATIERE_SELECTED, ADD_ECOLE, ADD_MATIERE, ADD_SPECIALITE, FETCH_DROIT, FETCH_DROIT_SUCCESS, FetchEcoles, FetchSpecialites, FetchMatieres, FetchEcolesSuccess, FetchSpecialitesSuccess, FetchMatieresSuccess, SetEcoleSelected, SetSpecialiteSelected, SetMatiereSelected, AddEcole, AddSpecialite, AddMatiere, FetchDroit, FetchDroitSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ECOLES", function() { return FETCH_ECOLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SPECIALITES", function() { return FETCH_SPECIALITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MATIERES", function() { return FETCH_MATIERES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ECOLES_SUCCESS", function() { return FETCH_ECOLES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SPECIALITES_SUCCESS", function() { return FETCH_SPECIALITES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MATIERES_SUCCESS", function() { return FETCH_MATIERES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ECOLE_SELECTED", function() { return SET_ECOLE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SPECIALITE_SELECTED", function() { return SET_SPECIALITE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MATIERE_SELECTED", function() { return SET_MATIERE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ECOLE", function() { return ADD_ECOLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MATIERE", function() { return ADD_MATIERE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SPECIALITE", function() { return ADD_SPECIALITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DROIT", function() { return FETCH_DROIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DROIT_SUCCESS", function() { return FETCH_DROIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchEcoles", function() { return FetchEcoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSpecialites", function() { return FetchSpecialites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchMatieres", function() { return FetchMatieres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchEcolesSuccess", function() { return FetchEcolesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchSpecialitesSuccess", function() { return FetchSpecialitesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchMatieresSuccess", function() { return FetchMatieresSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetEcoleSelected", function() { return SetEcoleSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSpecialiteSelected", function() { return SetSpecialiteSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMatiereSelected", function() { return SetMatiereSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEcole", function() { return AddEcole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpecialite", function() { return AddSpecialite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMatiere", function() { return AddMatiere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDroit", function() { return FetchDroit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDroitSuccess", function() { return FetchDroitSuccess; });
var FETCH_ECOLES = '[ searchPossibility ] fetch ecoles';
var FETCH_SPECIALITES = '[ searchPossibility ] fetch specialites';
var FETCH_MATIERES = '[ searchPossibility ] fetch matieres';
var FETCH_ECOLES_SUCCESS = '[ searchPossibility ] fetch ecoles success';
var FETCH_SPECIALITES_SUCCESS = '[ searchPossibility ] fetch specialites success';
var FETCH_MATIERES_SUCCESS = '[ searchPossibility ] fetch matieres success';
var SET_ECOLE_SELECTED = '[ searchPossibility ] set parent selected';
var SET_SPECIALITE_SELECTED = '[ searchPossibility ] set specialite selected';
var SET_MATIERE_SELECTED = '[ searchPossibility ] set matiere selected';
var ADD_ECOLE = '[ searchPossibility ] add ecole';
var ADD_MATIERE = '[ searchPossibility ] add matiere';
var ADD_SPECIALITE = '[ searchPossibility ] add spcecialite';
var FETCH_DROIT = '[ searchPossibility ] fetch droit';
var FETCH_DROIT_SUCCESS = '[ searchPossibility ] fetch droit success';
var FetchEcoles = /** @class */ (function () {
    function FetchEcoles() {
        this.type = FETCH_ECOLES;
    }
    return FetchEcoles;
}());

var FetchSpecialites = /** @class */ (function () {
    function FetchSpecialites() {
        this.type = FETCH_SPECIALITES;
    }
    return FetchSpecialites;
}());

var FetchMatieres = /** @class */ (function () {
    function FetchMatieres() {
        this.type = FETCH_MATIERES;
    }
    return FetchMatieres;
}());

var FetchEcolesSuccess = /** @class */ (function () {
    function FetchEcolesSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_ECOLES_SUCCESS;
    }
    return FetchEcolesSuccess;
}());

var FetchSpecialitesSuccess = /** @class */ (function () {
    function FetchSpecialitesSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_SPECIALITES_SUCCESS;
    }
    return FetchSpecialitesSuccess;
}());

var FetchMatieresSuccess = /** @class */ (function () {
    function FetchMatieresSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_MATIERES_SUCCESS;
    }
    return FetchMatieresSuccess;
}());

var SetEcoleSelected = /** @class */ (function () {
    function SetEcoleSelected(payload) {
        this.payload = payload;
        this.type = SET_ECOLE_SELECTED;
    }
    return SetEcoleSelected;
}());

var SetSpecialiteSelected = /** @class */ (function () {
    function SetSpecialiteSelected(payload) {
        this.payload = payload;
        this.type = SET_SPECIALITE_SELECTED;
    }
    return SetSpecialiteSelected;
}());

var SetMatiereSelected = /** @class */ (function () {
    function SetMatiereSelected(payload) {
        this.payload = payload;
        this.type = SET_MATIERE_SELECTED;
    }
    return SetMatiereSelected;
}());

var AddEcole = /** @class */ (function () {
    function AddEcole(payload) {
        this.payload = payload;
        this.type = ADD_ECOLE;
    }
    return AddEcole;
}());

var AddSpecialite = /** @class */ (function () {
    function AddSpecialite(payload) {
        this.payload = payload;
        this.type = ADD_SPECIALITE;
    }
    return AddSpecialite;
}());

var AddMatiere = /** @class */ (function () {
    function AddMatiere(payload) {
        this.payload = payload;
        this.type = ADD_MATIERE;
    }
    return AddMatiere;
}());

var FetchDroit = /** @class */ (function () {
    function FetchDroit() {
        this.type = FETCH_DROIT;
    }
    return FetchDroit;
}());

;
var FetchDroitSuccess = /** @class */ (function () {
    function FetchDroitSuccess(payload) {
        this.payload = payload;
        this.type = FETCH_DROIT_SUCCESS;
    }
    return FetchDroitSuccess;
}());

;


/***/ }),

/***/ "./src/app/search/shared/store/search.reducers.ts":
/*!********************************************************!*\
  !*** ./src/app/search/shared/store/search.reducers.ts ***!
  \********************************************************/
/*! exports provided: SearchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchReducer", function() { return SearchReducer; });
/* harmony import */ var _search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.actions */ "./src/app/search/shared/store/search.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function SearchReducer(state, action) {
    switch (action.type) {
        case _search_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_ECOLES_SUCCESS"]: {
            return __assign({}, state, { ecoles: action.payload });
        }
        case _search_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_SPECIALITES_SUCCESS"]: {
            return __assign({}, state, { specialites: action.payload });
        }
        case _search_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MATIERES_SUCCESS"]: {
            return __assign({}, state, { matieres: action.payload });
        }
        case _search_actions__WEBPACK_IMPORTED_MODULE_0__["SET_ECOLE_SELECTED"]: {
            return __assign({}, state, { ecoleSelected: action.payload });
        }
        case _search_actions__WEBPACK_IMPORTED_MODULE_0__["SET_SPECIALITE_SELECTED"]: {
            return __assign({}, state, { specialiteSelected: action.payload });
        }
        case _search_actions__WEBPACK_IMPORTED_MODULE_0__["SET_MATIERE_SELECTED"]: {
            return __assign({}, state, { matiereSelected: action.payload });
        }
        case _search_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_DROIT_SUCCESS"]: {
            return __assign({}, state, { droitsSpeSelected: action.payload });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/shared/components/liste-clickable/liste-clickable.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/liste-clickable/liste-clickable.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/liste-clickable/liste-clickable.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/liste-clickable/liste-clickable.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul size=\"3\" class=\"list-group p-0\" *ngIf=\"liste.length > 0\">\n  <li class=\"list-group-item\" (click)=\"emitPick(pick)\" *ngFor=\"let pick of liste; let i = index\">{{pick.text}}</li>\n</ul>\n\n<div *ngIf=\"!(liste.length > 0)\"> La Liste est vide </div>"

/***/ }),

/***/ "./src/app/shared/components/liste-clickable/liste-clickable.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/liste-clickable/liste-clickable.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListeClickableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeClickableComponent", function() { return ListeClickableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListeClickableComponent = /** @class */ (function () {
    function ListeClickableComponent() {
        this.pickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.liste = [];
        this.listeUntouched = [];
        this.search = "";
    }
    ListeClickableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listePick.subscribe(function (listePick) {
            if (listePick) {
                _this.listeUntouched = listePick;
                _this.liste = _this.listToListPick(listePick, _this.id, _this.args);
                if (_this.liste.length > 0) {
                    _this.picked = _this.liste[0].text;
                }
            }
        });
    };
    ListeClickableComponent.prototype.emitPick = function (pick) {
        var truePick = this.returnPickId(pick.id, this.id, this.listeUntouched);
        this.pickedEvent.emit(truePick);
        this.picked = pick.text;
    };
    ListeClickableComponent.prototype.listToListPick = function (listPick, identifiant, property) {
        // Transforme une liste normale en listPick avec seulement id et property
        var res = [];
        Array.prototype.forEach.call(listPick, function (elem) {
            var elemRes = { id: "", text: "" };
            elemRes.id = elem[identifiant];
            // Création du text à afficher dans les options
            var elemText = "";
            Array.prototype.forEach.call(property, (function (prop, index) {
                if (index >= property.length - 1) {
                    elemText += elem[prop];
                }
                else {
                    elemText += elem[prop] + " ";
                }
            }));
            elemRes.text = elemText;
            res.push(elemRes);
        });
        return res;
    };
    ListeClickableComponent.prototype.returnPickId = function (id, identifiant, listeUntouched) {
        // Recherche dans la liste de base l'id qui correspond
        var pickRes;
        listeUntouched.forEach(function (element) {
            if (element[identifiant] == id) {
                pickRes = element;
            }
        });
        return pickRes;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ListeClickableComponent.prototype, "listePick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListeClickableComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListeClickableComponent.prototype, "args", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListeClickableComponent.prototype, "pickedEvent", void 0);
    ListeClickableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liste-clickable',
            template: __webpack_require__(/*! ./liste-clickable.component.html */ "./src/app/shared/components/liste-clickable/liste-clickable.component.html"),
            styles: [__webpack_require__(/*! ./liste-clickable.component.css */ "./src/app/shared/components/liste-clickable/liste-clickable.component.css")]
        })
        /* Comment utiliser ce petit component de selectiond dans une liste ?
        Passer un nom, et la liste doit etre de la form {'id': id: 'text': text}; */
        ,
        __metadata("design:paramtypes", [])
    ], ListeClickableComponent);
    return ListeClickableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal-ajout/modal-ajout.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/modal-ajout/modal-ajout.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-ajout{\n    padding: 0px;\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/shared/components/modal-ajout/modal-ajout.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/modal-ajout/modal-ajout.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n<button type=\"button btn-ajout\" class=\"btn btn-green mt-1\" data-toggle=\"modal\" [attr.data-target]=\"'#' + idReason\">+</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"{{idReason}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <input [(ngModel)]=\"nomAjout\" placeholder=\"{{placeHolder}}\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">ANNULER</button>\n        <button type=\"button\" (click)=\"emitPick()\" class=\"btn btn-primary\" data-dismiss=\"modal\">CREER</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/modal-ajout/modal-ajout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/modal-ajout/modal-ajout.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalAjoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAjoutComponent", function() { return ModalAjoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalAjoutComponent = /** @class */ (function () {
    function ModalAjoutComponent() {
        this.pickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalAjoutComponent.prototype.ngOnInit = function () {
        this.placeHolder = "";
    };
    ModalAjoutComponent.prototype.emitPick = function () {
        this.pickedEvent.emit(this.nomAjout);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalAjoutComponent.prototype, "idReason", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalAjoutComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalAjoutComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalAjoutComponent.prototype, "pickedEvent", void 0);
    ModalAjoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-ajout',
            template: __webpack_require__(/*! ./modal-ajout.component.html */ "./src/app/shared/components/modal-ajout/modal-ajout.component.html"),
            styles: [__webpack_require__(/*! ./modal-ajout.component.css */ "./src/app/shared/components/modal-ajout/modal-ajout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalAjoutComponent);
    return ModalAjoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/topbar/topbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/topbar/topbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    outline: 0;\n    padding: 3px 20px;\n    font-size: 14px;\n    border-radius: 3px;\n    border: 0px;\n}\n\n.navbar {\n    background-color: #2c3e50;\n    color: white;\n}\n\n.navbar li span{\n    cursor: pointer;\n    padding: 0px 5px;\n    outline-style:none;\n    color: rgba(255,255,255,0.5);\n}\n\nspan.active{\n    color: white !important;\n}\n\n.material-icons{\n    display: inline-flex;\n    vertical-align: middle;\n}"

/***/ }),

/***/ "./src/app/shared/components/topbar/topbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/topbar/topbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\" fxLayoutGap=\"15px\">\n  <span class=\"link\" routerLink=\"/\">Mon logo</span>\n  <span *ngIf=\"!(isLoggedIn$ | async)\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" >\n    <span class=\"link\" routerLink=\"/signin\" >Connexion</span>\n    <span class=\"link\" routerLink=\"/signup\">Inscription</span>\n  </span>\n  <span *ngIf=\"(isLoggedIn$ | async)\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n    <span class=\"link\" routerLink=\"/profile\"> Mon compte </span>\n    <span class=\"link\" (click)=\"logout()\"> deconnexion </span>\n    \n  </span>\n  <span class=\"link\" routerLink=\"/search\">Rechercher</span>\n  <span class=\"link\" routerLink=\"/monitoring\"> Monitoring </span>\n</mat-toolbar> -->\n\n\n<nav class=\"navbar navbar-expand-sm\">\n    <a class=\"navbar-brand\">\n      <i class=\"material-icons pointer\" routerLink=\"/search\">\n        school\n      </i></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"(isLoggedIn$ | async)\" class=\"nav-item\">\n            <span class=\"link\" (click)=\"logout()\">Déconnexion</span>\n        </li>\n        <li *ngIf=\"!(isLoggedIn$ | async)\" class=\"nav-item\">\n            <span class=\"link\" routerLink=\"/signin\" routerLinkActive=\"active\">Connexion</span>\n        </li>\n        <li *ngIf=\"!(isLoggedIn$ | async)\" class=\"nav-item\">\n            <span class=\"link\" routerLink=\"/signup\" routerLinkActive=\"active\">Inscription</span>\n        </li>\n        <li class=\"nav-item\">\n            <span class=\"link\" routerLink=\"/search\" routerLinkActive=\"active\">Rechercher</span>\n        </li>\n        <li class=\"nav-item\">\n            <span class=\"link\" routerLink=\"/monitoring\" routerLinkActive=\"active\"> Monitoring </span>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/shared/components/topbar/topbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/topbar/topbar.component.ts ***!
  \**************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/auth.selectors */ "./src/app/shared/store/selectors/auth.selectors.ts");
/* harmony import */ var _store_action_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/action/auth.actions */ "./src/app/shared/store/action/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["isLoggedIn"]));
    };
    TopbarComponent.prototype.logout = function () {
        this.store.dispatch(new _store_action_auth_actions__WEBPACK_IMPORTED_MODULE_4__["Logout"]());
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/shared/components/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/shared/components/topbar/topbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors/auth.selectors */ "./src/app/shared/store/selectors/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.store.pipe(
        // Pour ne pas ajouter de subscrition
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["isLoggedIn"]));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/auth.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/auth.selectors */ "./src/app/shared/store/selectors/auth.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["authTokenSelector"])).subscribe(function (token) {
            _this.token = token;
        });
    }
    /**
     * inter
     */
    AuthInterceptor.prototype.inter = function (req, next) {
        if (this.token) {
            var authReq = req.clone({
                headers: req.headers.set('authorization', this.token)
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // Intercept le retour pour l'erreur 401 
        return this.inter(req, next).do(function (event) {
            // Dans tout les autre cas que les erreurs
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('/signin');
                }
            }
        });
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/modules/core.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/modules/core.module.ts ***!
  \***********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module */ "./src/app/shared/modules/layout.module.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/topbar/topbar.component */ "./src/app/shared/components/topbar/topbar.component.ts");
/* harmony import */ var _shared_components_modal_ajout_modal_ajout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/modal-ajout/modal-ajout.component */ "./src/app/shared/components/modal-ajout/modal-ajout.component.ts");
/* harmony import */ var _shared_components_liste_clickable_liste_clickable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/liste-clickable/liste-clickable.component */ "./src/app/shared/components/liste-clickable/liste-clickable.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../interceptors/auth.interceptor */ "./src/app/shared/interceptors/auth.interceptor.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _monitoring_shared_interceptors_spe_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../monitoring/shared/interceptors/spe-interceptor */ "./src/app/monitoring/shared/interceptors/spe-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components







// Service 


// Interceptor

// Guard

// Module


var COMPONENTS = [
    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
    _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
    _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__["TopbarComponent"],
    _shared_components_modal_ajout_modal_ajout_component__WEBPACK_IMPORTED_MODULE_7__["ModalAjoutComponent"],
    _shared_components_liste_clickable_liste_clickable_component__WEBPACK_IMPORTED_MODULE_8__["ListeClickableComponent"]
];
// Pas besoin de mettre common module, il est dans layout qui donne aussi material
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
            ],
            exports: COMPONENTS,
            declarations: [
                COMPONENTS
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _monitoring_shared_interceptors_spe_interceptor__WEBPACK_IMPORTED_MODULE_15__["SpeInterceptor"],
                    multi: true
                },
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/shared/modules/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/modules/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Common module est importer partout autant le mettre dans layout module qui lui aussi est importé partout
var MODULE = [
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MODULE,
            exports: MODULE,
            declarations: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/modules/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: MODULES,
            // Permet aux modules qui utilisent ce modules d'utiliser aussi les imports
            exports: MODULES,
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_action_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/action/auth.actions */ "./src/app/shared/store/action/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.jwtToken = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            isAuthenticated: null,
            expireDate: null,
            token: null
        });
        this.initToken();
        //this.subscription = this.initTimer();
    }
    AuthService.prototype.initTimer = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1500000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.store.dispatch(new _store_action_auth_actions__WEBPACK_IMPORTED_MODULE_6__["TryRefreshToken"]()); }));
        //   switchMap(() => {
        //     if (localStorage.getItem('jwt')) {
        //       return this.http.get<string>('/api/auth/refresh-token').pipe(
        //         tap((token: string) => {
        //           this.jwtToken.next({
        //             isAuthenticated: true,
        //             token: token
        //           });
        //           localStorage.setItem('jwt', token);
        //         })
        //       );
        //     } else {
        //       console.log('no token to refresh');
        //       this.subscription.unsubscribe();
        //       return of(null);
        //     }
        //   })
        // ).subscribe(() => {}, err => {
        //   this.jwtToken.next({
        //     isAuthenticated: false,
        //     token: null
        //   });
        //   localStorage.removeItem('jwt');
        //   this.subscription.unsubscribe();
        // });
    };
    AuthService.prototype.initToken = function () {
        var token = localStorage.getItem('jwt');
        if (token) {
            this.jwtToken.next({
                isAuthenticated: true,
                token: token
            });
        }
        else {
            this.jwtToken.next({
                isAuthenticated: false,
                token: null
            });
        }
    };
    AuthService.prototype.signup = function (user) {
        return this.http.post('/api/auth/signup', user);
    };
    AuthService.prototype.signin = function (credentials) {
        return this.http.post('/api/auth/signin', credentials);
    };
    AuthService.prototype.logout = function () {
        this.jwtToken.next({
            isAuthenticated: false,
            token: null
        });
        localStorage.removeItem('jwt');
        this.router.navigate(['/signin']);
    };
    AuthService.prototype.refreshToken = function () {
        return this.http.get('/api/auth/refresh-token');
    };
    AuthService.prototype.test = function (str) {
        return this.http.post('/api/auth/addFile', str);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getCurrentUser = function () {
        return this.http.get('/api/user/current');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/store/action/auth.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/store/action/auth.actions.ts ***!
  \*****************************************************/
/*! exports provided: TRY_SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR, TRY_SIGNIN, SIGNIN_SUCCESS, SIGNIN_ERROR, TRY_FETCH_CURRENT_USER, SET_CURRENT_USER, TRY_REFRESH_TOKEN, LOGOUT, TrySignup, SignupSuccess, SignupError, TrySignin, SigninSuccess, SigninError, TryFetchCurrentUser, SetCurrentUser, TryRefreshToken, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNUP", function() { return TRY_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_ERROR", function() { return SIGNUP_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_SIGNIN", function() { return TRY_SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_SUCCESS", function() { return SIGNIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_ERROR", function() { return SIGNIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_FETCH_CURRENT_USER", function() { return TRY_FETCH_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRY_REFRESH_TOKEN", function() { return TRY_REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignup", function() { return TrySignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupSuccess", function() { return SignupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupError", function() { return SignupError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrySignin", function() { return TrySignin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninSuccess", function() { return SigninSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninError", function() { return SigninError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryFetchCurrentUser", function() { return TryFetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentUser", function() { return SetCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryRefreshToken", function() { return TryRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
// Ici on met toute les actions qui sont reliées à auth
var TRY_SIGNUP = '[ user ] try signup';
var SIGNUP_SUCCESS = '[ user ] signup success';
var SIGNUP_ERROR = '[ user ] signup error';
var TRY_SIGNIN = '[ user ] try signin';
var SIGNIN_SUCCESS = '[ user ] signin success';
var SIGNIN_ERROR = '[ user ] signin error';
var TRY_FETCH_CURRENT_USER = '[ user ] try fetch current user';
var SET_CURRENT_USER = '[ user ] set currrent user';
var TRY_REFRESH_TOKEN = ' [ user ] try refresh token';
var LOGOUT = '[ user ] loggout';
var TrySignup = /** @class */ (function () {
    function TrySignup(payload) {
        this.payload = payload;
        this.type = TRY_SIGNUP;
    }
    return TrySignup;
}());

var SignupSuccess = /** @class */ (function () {
    function SignupSuccess(payload) {
        this.payload = payload;
        this.type = SIGNUP_SUCCESS;
    }
    return SignupSuccess;
}());

// L'erreur est en any car on ne sait aps toujours de quelle type est l'erreur si on ne code pas le back
var SignupError = /** @class */ (function () {
    function SignupError(payload) {
        this.payload = payload;
        this.type = SIGNUP_ERROR;
    }
    return SignupError;
}());

var TrySignin = /** @class */ (function () {
    function TrySignin(payload) {
        this.payload = payload;
        this.type = TRY_SIGNIN;
    }
    return TrySignin;
}());

var SigninSuccess = /** @class */ (function () {
    function SigninSuccess(payload) {
        this.payload = payload;
        this.type = SIGNIN_SUCCESS;
    }
    return SigninSuccess;
}());

var SigninError = /** @class */ (function () {
    function SigninError(payload) {
        this.payload = payload;
        this.type = SIGNIN_ERROR;
    }
    return SigninError;
}());

// On se sert du token du token qui est dans le curretn user
var TryFetchCurrentUser = /** @class */ (function () {
    function TryFetchCurrentUser() {
        this.type = TRY_FETCH_CURRENT_USER;
    }
    return TryFetchCurrentUser;
}());

// Lorsque le back nous renvoie le user cela permet de le mettre dans le store
var SetCurrentUser = /** @class */ (function () {
    function SetCurrentUser(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_USER;
    }
    ;
    return SetCurrentUser;
}());

var TryRefreshToken = /** @class */ (function () {
    function TryRefreshToken() {
        this.type = TRY_REFRESH_TOKEN;
    }
    return TryRefreshToken;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT;
    }
    return Logout;
}());



/***/ }),

/***/ "./src/app/shared/store/effects/auth.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/store/effects/auth.effects.ts ***!
  \******************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _action_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/auth.actions */ "./src/app/shared/store/action/auth.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../selectors/auth.selectors */ "./src/app/shared/store/selectors/auth.selectors.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// Permet d'ajouter des éléments comme Action 
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, router, store, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.userService = userService;
        this.trySignup$ = this.actions$.pipe(
        // Permet de reconnaitre le nom de l'action
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TRY_SIGNUP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), 
        // Permet de limiter à une inscription en même temps
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (user) {
            return _this.authService
                .signup(user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
                _this.router.navigate['/signin'];
                return new _action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SignupSuccess"](user);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SignupError"](error)); }));
        }));
        this.signupSucess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.router.navigate(['/signin']); }));
        this.trySignin$ = this.actions$.pipe(
        // Permet de reconnaitre le nom de l'action
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TRY_SIGNIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), 
        // Permet de limiter à une inscription en meme temps
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (credentials) {
            return _this.authService.signin(credentials);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) {
            localStorage.setItem('token', token);
            return new _action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SigninSuccess"](token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SigninError"](err));
        }));
        // pour que ngRx ne s'attende pas à rencoyer une nouvelle action
        this.signinSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TRY_SIGNIN"]), 
        // Permet de faire un effet de bord lors de l'emission de l'observable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            if (typeof _this.subscription === 'undefined' || _this.subscription.closed) {
                _this.subscription = _this.authService.initTimer().subscribe();
                _this.router.navigateByUrl('/');
            }
        }));
        this.TryRefreshToken = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TRY_REFRESH_TOKEN"]), 
        // Permet de faire la selection que si la valeur prec était null
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_8__["authTokenSelector"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var action = _a[0], token = _a[1];
            if (token && token != null) {
                return _this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) {
                    // On garde la sub pour pouvoir la couper si le token est pas bon ou si y a déconnection
                    localStorage.setItem('token', token);
                    return new _action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SigninSuccess"](token);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                    if (_this.subscription) {
                        _this.subscription.unsubscribe();
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
            }
        }));
        this.logout$ = this.actions$.pipe(
        // Permet de reconnaitre le nom de l'action
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"]), 
        // Permet de faire un effet de bord lors de l'emission de l'obeservable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
            }
            localStorage.removeItem('token');
            _this.router.navigateByUrl('/signin');
        }));
        this.tryFetchCurrentUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["TRY_FETCH_CURRENT_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.userService.getCurrentUser();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return new _action_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SetCurrentUser"](user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log('error fetch current user');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["empty"])();
        }));
    }
    ;
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "trySignup$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "signupSucess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "trySignin$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "signinSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "TryRefreshToken", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "tryFetchCurrentUser$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/shared/store/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/store/index.ts ***!
  \***************************************/
/*! exports provided: reducersMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducersMap", function() { return reducersMap; });
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/auth.reducer */ "./src/app/shared/store/reducers/auth.reducer.ts");
/* harmony import */ var _search_shared_store_search_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search/shared/store/search.reducers */ "./src/app/search/shared/store/search.reducers.ts");
/* harmony import */ var _matiere_shared_store_ressource_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../matiere/shared/store/ressource.reducers */ "./src/app/matiere/shared/store/ressource.reducers.ts");
/* harmony import */ var _monitoring_shared_store_monitoring_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../monitoring/shared/store/monitoring.reducers */ "./src/app/monitoring/shared/store/monitoring.reducers.ts");




var reducersMap = {
    auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    search: _search_shared_store_search_reducers__WEBPACK_IMPORTED_MODULE_1__["SearchReducer"],
    matiere: _matiere_shared_store_ressource_reducers__WEBPACK_IMPORTED_MODULE_2__["RessourceReducer"],
    monitoring: _monitoring_shared_store_monitoring_reducers__WEBPACK_IMPORTED_MODULE_3__["MonitoringReducer"],
};


/***/ }),

/***/ "./src/app/shared/store/reducers/auth.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/store/reducers/auth.reducer.ts ***!
  \*******************************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _action_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/auth.actions */ "./src/app/shared/store/action/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

;
var initialState = {
    user: null,
    token: localStorage.getItem('token'),
    error: null,
    isLoggedIn: false
};
// Fonction qui est pure on ne pas modifier les parametres
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _action_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_ERROR"]: {
            return __assign({}, state, { 
                // On set l'erreur si elle arrive
                error: action.payload });
        }
        case _action_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNUP_ERROR"]: {
            return __assign({}, state, { 
                // On set l'erreur si elle arrive
                error: action.payload });
        }
        case _action_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGNIN_SUCCESS"]: {
            return __assign({}, state, { token: action.payload, isLoggedIn: true, error: null });
        }
        case _action_auth_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]: {
            return __assign({}, state, { user: null, token: null, isLoggedIn: false, error: null });
        }
        case _action_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"]: {
            return __assign({}, state, { user: action.payload });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/shared/store/selectors/auth.selectors.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/store/selectors/auth.selectors.ts ***!
  \**********************************************************/
/*! exports provided: authSelector, errorAuthSelector, authTokenSelector, isLoggedIn, currentUserSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSelector", function() { return authSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorAuthSelector", function() { return errorAuthSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authTokenSelector", function() { return authTokenSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserSelector", function() { return currentUserSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

/* Permet de sélectionner une partie du state général
Le auth state est dans le state général */
// le auth match avec le nom dans le state général. feature c'est parce qu'on est dnas le général et on
// récup un store
var authSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var errorAuthSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, function (authState) {
    if (authState) {
        return authState.error;
    }
    else {
        return null;
    }
});
var authTokenSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, function (authState) {
    if (authState) {
        return authState.token;
    }
    else {
        return null;
    }
});
var isLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, function (authState) {
    if (authState) {
        return authState.isLoggedIn;
    }
    else {
        return null;
    }
});
var currentUserSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authSelector, function (authState) {
    if (authState) {
        return authState.user;
    }
    else {
        return null;
    }
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ponthieu/Documents/projetsAngular5/mean-auth/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map