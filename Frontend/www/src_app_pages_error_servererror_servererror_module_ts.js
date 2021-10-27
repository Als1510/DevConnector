(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_error_servererror_servererror_module_ts"],{

/***/ 7382:
/*!***********************************************************************!*\
  !*** ./src/app/pages/error/servererror/servererror-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServererrorPageRoutingModule": () => (/* binding */ ServererrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _servererror_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servererror.page */ 2769);




const routes = [
    {
        path: '',
        component: _servererror_page__WEBPACK_IMPORTED_MODULE_0__.ServererrorPage
    }
];
let ServererrorPageRoutingModule = class ServererrorPageRoutingModule {
};
ServererrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServererrorPageRoutingModule);



/***/ }),

/***/ 5964:
/*!***************************************************************!*\
  !*** ./src/app/pages/error/servererror/servererror.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServererrorPageModule": () => (/* binding */ ServererrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _servererror_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servererror-routing.module */ 7382);
/* harmony import */ var _servererror_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servererror.page */ 2769);







let ServererrorPageModule = class ServererrorPageModule {
};
ServererrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _servererror_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServererrorPageRoutingModule
        ],
        declarations: [_servererror_page__WEBPACK_IMPORTED_MODULE_1__.ServererrorPage]
    })
], ServererrorPageModule);



/***/ }),

/***/ 2769:
/*!*************************************************************!*\
  !*** ./src/app/pages/error/servererror/servererror.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServererrorPage": () => (/* binding */ ServererrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_servererror_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./servererror.page.html */ 8926);
/* harmony import */ var _servererror_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servererror.page.scss */ 6003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ServererrorPage = class ServererrorPage {
    constructor() { }
    ngOnInit() {
    }
};
ServererrorPage.ctorParameters = () => [];
ServererrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-servererror',
        template: _raw_loader_servererror_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_servererror_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServererrorPage);



/***/ }),

/***/ 6003:
/*!***************************************************************!*\
  !*** ./src/app/pages/error/servererror/servererror.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n}\n.container .content h1 {\n  font-size: 4rem;\n  margin: 2rem 0;\n}\n.container .content h1 span {\n  font-size: 5rem;\n  color: red;\n  font-weight: bold;\n}\n.container .content p {\n  font-size: 2rem;\n  width: 80%;\n}\n@media (max-width: 768px) {\n  .container .content h1 {\n    font-size: 3rem;\n    margin: 2rem 0;\n  }\n  .container .content h1 span {\n    font-size: 4rem;\n    color: red;\n    font-weight: bold;\n  }\n  .container .content p {\n    font-size: 1.5rem;\n    width: 90%;\n  }\n}\n@media (max-width: 600px) {\n  .container {\n    flex-direction: column;\n  }\n  .container .content {\n    text-align: center;\n  }\n  .container .content h1 {\n    font-size: 2rem;\n    margin: 1rem 0;\n  }\n  .container .content h1 span {\n    font-size: 3rem;\n    color: red;\n    font-weight: bold;\n  }\n  .container .content p {\n    font-size: 1rem;\n    text-align: center;\n    margin: 0;\n    width: 100%;\n    padding: 0 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlcmVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQVI7QUFJSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBRk47QUFPQTtFQUdNO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFOTjtFQVFNO0lBQ0UsZUFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQU5SO0VBVUk7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUFSTjtBQUNGO0FBYUE7RUFDRTtJQUNFLHNCQUFBO0VBWEY7RUFZRTtJQUNFLGtCQUFBO0VBVko7RUFXSTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VBVE47RUFXTTtJQUNFLGVBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUFUUjtFQWFJO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VBWE47QUFDRiIsImZpbGUiOiJzZXJ2ZXJlcnJvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50e1xyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIFxyXG4gICAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5jb250ZW50e1xyXG4gICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5jb250ZW50e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6MCAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 8926:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/servererror/servererror.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <img src=\"../../../../assets/500-server-background.jpg\">\n    <div class=\"content\">\n      <h1><span>500</span> Server Error</h1>\n      <p>This server encountered an internal error or misconfiguration and was unable to complete your request.</p>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_error_servererror_servererror_module_ts.js.map