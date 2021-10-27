(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_error_pagenotfound_pagenotfound_module_ts"],{

/***/ 3078:
/*!*************************************************************************!*\
  !*** ./src/app/pages/error/pagenotfound/pagenotfound-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPageRoutingModule": () => (/* binding */ PagenotfoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound.page */ 8409);




const routes = [
    {
        path: '',
        component: _pagenotfound_page__WEBPACK_IMPORTED_MODULE_0__.PagenotfoundPage
    }
];
let PagenotfoundPageRoutingModule = class PagenotfoundPageRoutingModule {
};
PagenotfoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagenotfoundPageRoutingModule);



/***/ }),

/***/ 2118:
/*!*****************************************************************!*\
  !*** ./src/app/pages/error/pagenotfound/pagenotfound.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPageModule": () => (/* binding */ PagenotfoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound-routing.module */ 3078);
/* harmony import */ var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound.page */ 8409);







let PagenotfoundPageModule = class PagenotfoundPageModule {
};
PagenotfoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagenotfoundPageRoutingModule
        ],
        declarations: [_pagenotfound_page__WEBPACK_IMPORTED_MODULE_1__.PagenotfoundPage]
    })
], PagenotfoundPageModule);



/***/ }),

/***/ 8409:
/*!***************************************************************!*\
  !*** ./src/app/pages/error/pagenotfound/pagenotfound.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPage": () => (/* binding */ PagenotfoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pagenotfound_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pagenotfound.page.html */ 9158);
/* harmony import */ var _pagenotfound_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound.page.scss */ 7348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PagenotfoundPage = class PagenotfoundPage {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundPage.ctorParameters = () => [];
PagenotfoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pagenotfound',
        template: _raw_loader_pagenotfound_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pagenotfound_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagenotfoundPage);



/***/ }),

/***/ 7348:
/*!*****************************************************************!*\
  !*** ./src/app/pages/error/pagenotfound/pagenotfound.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n.container h1 {\n  font-size: 10rem;\n  background: url('400-page-background.jpg') repeat;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  font-weight: 1000;\n}\n.container .content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container .content h2 {\n  font-size: 3rem;\n  font-weight: bold;\n}\n.container .content p {\n  font-size: 1rem;\n  width: 70%;\n  text-align: center;\n}\n.container .content ion-button {\n  margin-top: 1rem;\n  --ion-color: #012a4a;\n  border-radius: 1.5rem;\n}\n.container .content ion-button a {\n  color: #fff;\n  text-decoration: none;\n}\n@media (max-width: 768px) {\n  .container h1 {\n    font-size: 8rem;\n  }\n  .container .content h2 {\n    font-size: 2rem;\n  }\n  .container .content p {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .container h1 {\n    font-size: 6rem;\n  }\n  .container .content h2 {\n    font-size: 1.5rem;\n  }\n  .container .content p {\n    font-size: 0.8rem;\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Vub3Rmb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQU47QUFHSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRk47QUFJTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUZSO0FBUUE7RUFFSTtJQUNFLGVBQUE7RUFOSjtFQVVJO0lBQ0UsZUFBQTtFQVJOO0VBV0k7SUFDRSxlQUFBO0VBVE47QUFDRjtBQWNBO0VBRUk7SUFDRSxlQUFBO0VBYko7RUFpQkk7SUFDRSxpQkFBQTtFQWZOO0VBa0JJO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0VBaEJOO0FBQ0YiLCJmaWxlIjoicGFnZW5vdGZvdW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy80MDAtcGFnZS1iYWNrZ3JvdW5kLmpwZycpIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBoMntcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIC0taW9uLWNvbG9yOiAjMDEyYTRhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcblxyXG4gICAgICBhe1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50e1xyXG4gICAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50e1xyXG4gICAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 9158:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/pagenotfound/pagenotfound.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <h1>Oops!</h1>\n    <div class=\"content\">\n      <h2>404 - PAGE NOT FOUND</h2>\n      <p>The page you are lookign for might have been removed had its name changed or is temporarily unavailable.</p>\n      <ion-button style=\"--background:#01497c\">\n        <a routerLink=\"/login\">GO TO HOMEPAGE</a>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_error_pagenotfound_pagenotfound_module_ts.js.map