(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-matiere-matiere-module"],{

/***/ "./src/app/matiere/matiere.module.ts":
/*!*******************************************!*\
  !*** ./src/app/matiere/matiere.module.ts ***!
  \*******************************************/
/*! exports provided: MatiereModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereModule", function() { return MatiereModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matiere_matiere_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matiere/matiere.component */ "./src/app/matiere/matiere/matiere.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _shared_store_ressource_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/store/ressource.reducers */ "./src/app/matiere/shared/store/ressource.reducers.ts");
/* harmony import */ var _shared_store_ressource_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/store/ressource.effect */ "./src/app/matiere/shared/store/ressource.effect.ts");
/* harmony import */ var _matiere_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matiere.route */ "./src/app/matiere/matiere.route.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_ressources_ressources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/ressources/ressources.component */ "./src/app/matiere/shared/components/ressources/ressources.component.ts");
/* harmony import */ var _shared_components_aff_ressource_aff_ressource_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/aff-ressource/aff-ressource.component */ "./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.ts");
/* harmony import */ var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/safe.pipe */ "./src/app/matiere/shared/pipes/safe.pipe.ts");
/* harmony import */ var _shared_modules_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/modules/core.module */ "./src/app/shared/modules/core.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








;






var MatiereModule = /** @class */ (function () {
    function MatiereModule() {
    }
    MatiereModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                _shared_modules_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_matiere_route__WEBPACK_IMPORTED_MODULE_7__["MATIERE_ROUTES"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('matiere', _shared_store_ressource_reducers__WEBPACK_IMPORTED_MODULE_5__["RessourceReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_shared_store_ressource_effect__WEBPACK_IMPORTED_MODULE_6__["RessourceEffects"]]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            declarations: [
                _matiere_matiere_component__WEBPACK_IMPORTED_MODULE_1__["MatiereComponent"],
                _shared_components_ressources_ressources_component__WEBPACK_IMPORTED_MODULE_9__["RessourcesComponent"],
                _shared_components_aff_ressource_aff_ressource_component__WEBPACK_IMPORTED_MODULE_10__["AffRessourceComponent"],
                _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_11__["SafePipe"]
            ]
        })
    ], MatiereModule);
    return MatiereModule;
}());



/***/ }),

/***/ "./src/app/matiere/matiere.route.ts":
/*!******************************************!*\
  !*** ./src/app/matiere/matiere.route.ts ***!
  \******************************************/
/*! exports provided: MATIERE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATIERE_ROUTES", function() { return MATIERE_ROUTES; });
/* harmony import */ var _matiere_matiere_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matiere/matiere.component */ "./src/app/matiere/matiere/matiere.component.ts");
/* harmony import */ var _shared_components_ressources_ressources_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/ressources/ressources.component */ "./src/app/matiere/shared/components/ressources/ressources.component.ts");
/* harmony import */ var _shared_components_aff_ressource_aff_ressource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/aff-ressource/aff-ressource.component */ "./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.ts");



// Routes marche avec un s à la fin ou simplement un tableau 
var MATIERE_ROUTES = [
    { path: '', component: _matiere_matiere_component__WEBPACK_IMPORTED_MODULE_0__["MatiereComponent"], children: [
            { path: 'ressources', component: _shared_components_ressources_ressources_component__WEBPACK_IMPORTED_MODULE_1__["RessourcesComponent"] },
            { path: 'affRessource', component: _shared_components_aff_ressource_aff_ressource_component__WEBPACK_IMPORTED_MODULE_2__["AffRessourceComponent"] }
        ] },
];


/***/ }),

/***/ "./src/app/matiere/matiere/matiere.component.css":
/*!*******************************************************!*\
  !*** ./src/app/matiere/matiere/matiere.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-ajout{\n    padding: 0px;\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/matiere/matiere/matiere.component.html":
/*!********************************************************!*\
  !*** ./src/app/matiere/matiere/matiere.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-white\">\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-4 pt-2\">\n      <app-modal-ajout *ngIf=\"possedeDroit('Ajouter')\" class=\"btn\" [idReason]=\"'ajoutRessource'\" [title]=\"'Ajouter un type de ressoure ?' \" (pickedEvent)=\"addTypeRessource($event)\"></app-modal-ajout>\n      <app-liste-clickable [listePick]=\"ressourceType$\" [args]=\"['name']\" [id]=\"'idTypeRessource'\" (pickedEvent)=\"pickTypeRessource($event)\"></app-liste-clickable>\n    </div>\n\n    <div class=\"col-12 col-sm-8\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/matiere/matiere/matiere.component.ts":
/*!******************************************************!*\
  !*** ./src/app/matiere/matiere/matiere.component.ts ***!
  \******************************************************/
/*! exports provided: MatiereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereComponent", function() { return MatiereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_store_ressource_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/store/ressource.actions */ "./src/app/matiere/shared/store/ressource.actions.ts");
/* harmony import */ var _shared_store_ressource_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/store/ressource.selectors */ "./src/app/matiere/shared/store/ressource.selectors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_shared_store_search_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../search/shared/store/search.selectors */ "./src/app/search/shared/store/search.selectors.ts");
/* harmony import */ var _search_shared_store_search_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../search/shared/store/search.actions */ "./src/app/search/shared/store/search.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MatiereComponent = /** @class */ (function () {
    function MatiereComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.ressourceType$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_shared_store_ressource_selectors__WEBPACK_IMPORTED_MODULE_3__["ressourceTypeSelector"]));
        var matiere$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_search_shared_store_search_selectors__WEBPACK_IMPORTED_MODULE_5__["getMatiereSelectedSelector"]));
        matiere$.subscribe(function (val) { return _this.matiere = val; });
    }
    MatiereComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _shared_store_ressource_actions__WEBPACK_IMPORTED_MODULE_2__["FetchInitTypeRessource"]());
        this.droitsUser$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_search_shared_store_search_selectors__WEBPACK_IMPORTED_MODULE_5__["getDroitsSpeSelectedSelector"]));
        this.droitsUser$.subscribe(function (droits) {
            _this.droitUser = droits;
        });
        // Récupération des droits du user sur cette spécialité
        this.store.dispatch(new _search_shared_store_search_actions__WEBPACK_IMPORTED_MODULE_6__["FetchDroit"]());
    };
    MatiereComponent.prototype.pickTypeRessource = function (ressource) {
        this.store.dispatch(new _shared_store_ressource_actions__WEBPACK_IMPORTED_MODULE_2__["SetTypeRessource"](ressource));
        this.router.navigateByUrl('/matiere/ressources');
    };
    MatiereComponent.prototype.addTypeRessource = function (nomTypeRessource) {
        this.store.dispatch(new _shared_store_ressource_actions__WEBPACK_IMPORTED_MODULE_2__["AjoutTypeRessource"]({ idTypeRessource: -1,
            name: nomTypeRessource,
            idMatiere: this.matiere.id }));
    };
    // Vérifie que l'utilisateur a bien les droits pour ajouter
    MatiereComponent.prototype.possedeDroit = function (nomDroit) {
        var possedeDroit = false;
        if (this.droitUser) {
            this.droitUser.forEach(function (droit) {
                if (droit.intitule == nomDroit) {
                    possedeDroit = droit.estAcquis;
                }
            });
        }
        return possedeDroit;
    };
    MatiereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matiere',
            template: __webpack_require__(/*! ./matiere.component.html */ "./src/app/matiere/matiere/matiere.component.html"),
            styles: [__webpack_require__(/*! ./matiere.component.css */ "./src/app/matiere/matiere/matiere.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MatiereComponent);
    return MatiereComponent;
}());



/***/ }),

/***/ "./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{ressource.nom}}</h2>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12\" *ngFor=\"let file of ressourceFile$ | async \">\n      <span>{{file.name}}</span>\n      <i class=\"material-icons float-right\" (click)=\"deleteFile(file)\" style=\"color :red\">\n        delete\n      </i>\n      <object [data]='(\"/api/file/downloadFile/\" + file.link) | safe' type=\"application/pdf\" width=\"100%\" height=\"400px\" class=\"mt-3\">\n        <p>Alternative text - include a link\n          <a href=\"myfile.pdf\">to the PDF!</a>\n        </p>\n      </object>\n    </div>\n  </div>\n</div>\n\n<input type=\"file\" (change)=fileEvent($event)>"

/***/ }),

/***/ "./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.ts ***!
  \************************************************************************************/
/*! exports provided: AffRessourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffRessourceComponent", function() { return AffRessourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_ressource_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/ressource.selectors */ "./src/app/matiere/shared/store/ressource.selectors.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_matiere_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/matiere.service */ "./src/app/matiere/shared/services/matiere.service.ts");
/* harmony import */ var _store_ressource_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/ressource.actions */ "./src/app/matiere/shared/store/ressource.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AffRessourceComponent = /** @class */ (function () {
    function AffRessourceComponent(store, sanitizer, matiereService, router) {
        this.store = store;
        this.sanitizer = sanitizer;
        this.matiereService = matiereService;
        this.router = router;
        this.ressource$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_ressource_selectors__WEBPACK_IMPORTED_MODULE_2__["ressourceSelectedSelector"]));
        this.ressourceFile$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_ressource_selectors__WEBPACK_IMPORTED_MODULE_2__["ressourceFileSelector"]));
    }
    AffRessourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ressource$.subscribe(function (res) {
            _this.ressource = res;
            // Get all link for ressources
            _this.store.dispatch(new _store_ressource_actions__WEBPACK_IMPORTED_MODULE_5__["FetchRessourceFile"](res.idRessource));
        });
        this.ressourceFile$.subscribe(function (val) {
            _this.ressourceFile = val;
        });
    };
    AffRessourceComponent.prototype.fileEvent = function ($event) {
        var fileSelected = $event.target.files[0];
        this.store.dispatch(new _store_ressource_actions__WEBPACK_IMPORTED_MODULE_5__["UploadFile"]({ file: fileSelected, idRessource: this.ressource.idRessource }));
        this.router.navigateByUrl('/matiere/ressources');
    };
    AffRessourceComponent.prototype.getSafeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    AffRessourceComponent.prototype.deleteFile = function (file) {
        this.store.dispatch(new _store_ressource_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteFile"](file));
        this.router.navigateByUrl('/matiere/ressources');
    };
    AffRessourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aff-ressource',
            template: __webpack_require__(/*! ./aff-ressource.component.html */ "./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.html"),
            styles: [__webpack_require__(/*! ./aff-ressource.component.css */ "./src/app/matiere/shared/components/aff-ressource/aff-ressource.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_matiere_service__WEBPACK_IMPORTED_MODULE_4__["MatiereService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AffRessourceComponent);
    return AffRessourceComponent;
}());



/***/ }),

/***/ "./src/app/matiere/shared/components/ressources/ressources.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/matiere/shared/components/ressources/ressources.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matiere/shared/components/ressources/ressources.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/matiere/shared/components/ressources/ressources.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{typeRessourceSelected.name}}</h1>\n\n<app-liste-clickable [listePick]=\"ressources$\" [args]=\"['nom']\" [id]=\"'idRessource'\" (pickedEvent)=\"pickRessource($event)\"></app-liste-clickable>\n\n<app-modal-ajout [idReason]=\"'AjoutTypeRessource'\" [title]=\"'Ajouter : ' + typeRessourceSelected?.name + ' ?' \" (pickedEvent)=\"addRessource($event)\"></app-modal-ajout>"

/***/ }),

/***/ "./src/app/matiere/shared/components/ressources/ressources.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/matiere/shared/components/ressources/ressources.component.ts ***!
  \******************************************************************************/
/*! exports provided: RessourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourcesComponent", function() { return RessourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_ressource_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/ressource.selectors */ "./src/app/matiere/shared/store/ressource.selectors.ts");
/* harmony import */ var _store_ressource_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/ressource.actions */ "./src/app/matiere/shared/store/ressource.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RessourcesComponent = /** @class */ (function () {
    function RessourcesComponent(store, router) {
        this.store = store;
        this.router = router;
        this.ressources$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_ressource_selectors__WEBPACK_IMPORTED_MODULE_2__["ressourceSelector"]));
        this.typeRessourceSelected$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_ressource_selectors__WEBPACK_IMPORTED_MODULE_2__["ressourceTypeSelectedSelector"]));
    }
    RessourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_ressource_actions__WEBPACK_IMPORTED_MODULE_3__["FetchRessource"]());
        this.typeRessourceSelected$.subscribe(function (val) {
            _this.typeRessourceSelected = val;
        });
    };
    RessourcesComponent.prototype.pickRessource = function (choix) {
        this.store.dispatch(new _store_ressource_actions__WEBPACK_IMPORTED_MODULE_3__["SetRessourceSelected"](choix));
        this.router.navigateByUrl('/matiere/affRessource');
    };
    RessourcesComponent.prototype.ajoutTypeRessource = function () {
        document.getElementById("openModalButton3").click();
    };
    RessourcesComponent.prototype.addRessource = function (nomRessource) {
        this.store.dispatch(new _store_ressource_actions__WEBPACK_IMPORTED_MODULE_3__["AjoutRessource"]({ idRessource: -1,
            nom: nomRessource,
            idTypeRessource: this.typeRessourceSelected.idTypeRessource }));
    };
    RessourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ressources',
            template: __webpack_require__(/*! ./ressources.component.html */ "./src/app/matiere/shared/components/ressources/ressources.component.html"),
            styles: [__webpack_require__(/*! ./ressources.component.css */ "./src/app/matiere/shared/components/ressources/ressources.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RessourcesComponent);
    return RessourcesComponent;
}());



/***/ }),

/***/ "./src/app/matiere/shared/pipes/safe.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/matiere/shared/pipes/safe.pipe.ts ***!
  \***************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/matiere/shared/services/matiere.service.ts":
/*!************************************************************!*\
  !*** ./src/app/matiere/shared/services/matiere.service.ts ***!
  \************************************************************/
/*! exports provided: MatiereService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereService", function() { return MatiereService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatiereService = /** @class */ (function () {
    function MatiereService(http) {
        this.http = http;
    }
    ;
    MatiereService.prototype.getTypeRessourceFromMatiere = function (matiereSelected) {
        return this.http.post("/api/matiere/getTypeRessourceFromMatiere", matiereSelected).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (sPos) {
            return sPos.map(function (r) { return ({ idTypeRessource: r.idTypeRessource, name: r.name, idMatiere: r.idMatiere }); });
        }));
    };
    MatiereService.prototype.getRessourceFromTypeRessource = function (ressourceTypeSelected) {
        return this.http.get("/api/matiere/getRessourceFromTypeRessource/" + ressourceTypeSelected.idTypeRessource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (sPos) {
            return sPos.map(function (r) { return ({ idRessource: r.idRessource,
                lienPdf: r.lienPdf,
                nom: r.nom,
                idTypeRessource: r.idTypeRessource }); });
        }));
    };
    MatiereService.prototype.addRessource = function (ressource) {
        return this.http.post("/api/matiere/addRessource", ressource);
    };
    MatiereService.prototype.addTypeRessource = function (typeRessource) {
        return this.http.post("/api/matiere/addTypeRessource", typeRessource);
    };
    MatiereService.prototype.uploadFile = function (file) {
        var _formData = new FormData();
        _formData.append('file', file.file, file.file.name);
        _formData.append('idRessource', JSON.stringify(file.idRessource));
        _formData.append('type', "pdf");
        return this.http.post('/api/file/addFile', _formData);
    };
    MatiereService.prototype.downloadFile = function (idFile) {
        return this.http.get('/api/file/downloadFile/' + idFile, { responseType: 'text' });
    };
    // Get all ressources File of a ressource
    MatiereService.prototype.downloadRessourceFile = function (idRessource) {
        return this.http.get('/api/file/downloadFilesRessource/' + idRessource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (sPos) {
            return sPos.map(function (r) { return ({ type: r.type,
                link: r.idFile,
                idRessource: r.idRessource,
                name: r.name
            }); });
        }));
        ;
    };
    MatiereService.prototype.deleteFile = function (linkFile) {
        return this.http.delete('/api/file/deleteFile/' + linkFile);
    };
    MatiereService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MatiereService);
    return MatiereService;
}());



/***/ }),

/***/ "./src/app/matiere/shared/store/ressource.effect.ts":
/*!**********************************************************!*\
  !*** ./src/app/matiere/shared/store/ressource.effect.ts ***!
  \**********************************************************/
/*! exports provided: RessourceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourceEffects", function() { return RessourceEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ressource_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ressource.actions */ "./src/app/matiere/shared/store/ressource.actions.ts");
/* harmony import */ var _services_matiere_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/matiere.service */ "./src/app/matiere/shared/services/matiere.service.ts");
/* harmony import */ var _search_shared_store_search_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../search/shared/store/search.selectors */ "./src/app/search/shared/store/search.selectors.ts");
/* harmony import */ var _ressource_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ressource.selectors */ "./src/app/matiere/shared/store/ressource.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RessourceEffects = /** @class */ (function () {
    function RessourceEffects(action$, store, matiereService) {
        var _this = this;
        this.action$ = action$;
        this.store = store;
        this.matiereService = matiereService;
        this.initRessourceType$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_INIT_TYPE_RESSOURCE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_search_shared_store_search_selectors__WEBPACK_IMPORTED_MODULE_6__["getMatiereSelectedSelector"]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (matiereSelected) {
            return _this.matiereService.getTypeRessourceFromMatiere(matiereSelected);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new _ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FetchInitTypeRessourceSuccess"](response);
        }));
        this.fetchRessources$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_RESSOURCE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_ressource_selectors__WEBPACK_IMPORTED_MODULE_7__["ressourceTypeSelectedSelector"]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (ressourceTypeSelected) {
            return _this.matiereService.getRessourceFromTypeRessource(ressourceTypeSelected);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new _ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FetchRessourceSuccess"](response);
        }));
        this.ajoutRessource$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ressource_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_RESSOURCE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.matiereService.addRessource(action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new _ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FetchRessource"]();
        }));
        this.ajoutTypeRessource$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ressource_actions__WEBPACK_IMPORTED_MODULE_4__["ADD_TYPE_RESSOURCE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.matiereService.addTypeRessource(action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new _ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FetchInitTypeRessource"]();
        }));
        this.uploadFile$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ressource_actions__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_FILE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.matiereService.uploadFile(action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return null;
        }));
        this.fetchRessourceFile$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_RESSOURCE_FILE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.matiereService.downloadRessourceFile(action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new _ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FetchRessourceFileSuccess"](response);
        }));
        this.deleteFile$ = this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ressource_actions__WEBPACK_IMPORTED_MODULE_4__["DELETE_FILE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (action) {
            return _this.matiereService.deleteFile(action.payload.link);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return new _ressource_actions__WEBPACK_IMPORTED_MODULE_4__["FetchRessourceFileSuccess"](response);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], RessourceEffects.prototype, "initRessourceType$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], RessourceEffects.prototype, "fetchRessources$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], RessourceEffects.prototype, "ajoutRessource$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], RessourceEffects.prototype, "ajoutTypeRessource$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RessourceEffects.prototype, "uploadFile$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], RessourceEffects.prototype, "fetchRessourceFile$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", Object)
    ], RessourceEffects.prototype, "deleteFile$", void 0);
    RessourceEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _services_matiere_service__WEBPACK_IMPORTED_MODULE_5__["MatiereService"]])
    ], RessourceEffects);
    return RessourceEffects;
}());



/***/ }),

/***/ "./src/app/matiere/shared/store/ressource.selectors.ts":
/*!*************************************************************!*\
  !*** ./src/app/matiere/shared/store/ressource.selectors.ts ***!
  \*************************************************************/
/*! exports provided: matiereSelector, ressourceSelectedSelector, ressourceTypeSelectedSelector, ressourceTypeSelector, ressourceSelector, ressourceFileSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matiereSelector", function() { return matiereSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ressourceSelectedSelector", function() { return ressourceSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ressourceTypeSelectedSelector", function() { return ressourceTypeSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ressourceTypeSelector", function() { return ressourceTypeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ressourceSelector", function() { return ressourceSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ressourceFileSelector", function() { return ressourceFileSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var matiereSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('matiere');
var ressourceSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(matiereSelector, function (searchState) {
    if (searchState) {
        return searchState.ressourceSelected;
    }
    else {
        return null;
    }
});
var ressourceTypeSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(matiereSelector, function (searchState) {
    if (searchState) {
        return searchState.typeRessourceSelected;
    }
    else {
        return null;
    }
});
var ressourceTypeSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(matiereSelector, function (searchState) {
    if (searchState) {
        return searchState.typeRessources;
    }
    else {
        return null;
    }
});
var ressourceSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(matiereSelector, function (searchState) {
    if (searchState) {
        return searchState.ressources;
    }
    else {
        return null;
    }
});
var ressourceFileSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(matiereSelector, function (searchState) {
    if (searchState) {
        return searchState.fileRessourceSelected;
    }
    else {
        return null;
    }
});


/***/ })

}]);
//# sourceMappingURL=app-matiere-matiere-module.js.map