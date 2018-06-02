(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/search/shared/store/search.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/search/shared/store/search.selectors.ts ***!
  \*********************************************************/
/*! exports provided: searchSelector, getEcolesSelector, getSpecialitesSelector, getMatieresSelector, getEcoleSelectedSelector, getMatiereSelectedSelector, getSpecialiteSelectedSelector, getDroitsSpeSelectedSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSelector", function() { return searchSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEcolesSelector", function() { return getEcolesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialitesSelector", function() { return getSpecialitesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatieresSelector", function() { return getMatieresSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEcoleSelectedSelector", function() { return getEcoleSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatiereSelectedSelector", function() { return getMatiereSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialiteSelectedSelector", function() { return getSpecialiteSelectedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDroitsSpeSelectedSelector", function() { return getDroitsSpeSelectedSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var searchSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('search');
var getEcolesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(searchSelector, function (searchState) {
    if (searchState) {
        return searchState.ecoles;
    }
    else {
        return null;
    }
});
var getSpecialitesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(searchSelector, function (searchState) {
    if (searchState) {
        return searchState.specialites;
    }
    else {
        return null;
    }
});
var getMatieresSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(searchSelector, function (searchState) {
    if (searchState) {
        return searchState.matieres;
    }
    else {
        return null;
    }
});
var getEcoleSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(searchSelector, function (searchState) {
    if (searchState) {
        return searchState.ecoleSelected;
    }
    else {
        return null;
    }
});
var getMatiereSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(searchSelector, function (searchState) {
    if (searchState) {
        return searchState.matiereSelected;
    }
    else {
        return null;
    }
});
var getSpecialiteSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(searchSelector, function (searchState) {
    if (searchState) {
        return searchState.specialiteSelected;
    }
    else {
        return null;
    }
});
var getDroitsSpeSelectedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(searchSelector, function (searchState) {
    if (searchState) {
        return searchState.droitsSpeSelected;
    }
    else {
        return null;
    }
});


/***/ })

}]);
//# sourceMappingURL=common.js.map