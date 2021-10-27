(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_developers_developers_module_ts"],{

/***/ 9055:
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/developers/developers-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevelopersPageRoutingModule": () => (/* binding */ DevelopersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _developers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./developers.page */ 2164);




const routes = [
    {
        path: '',
        component: _developers_page__WEBPACK_IMPORTED_MODULE_0__.DevelopersPage
    }
];
let DevelopersPageRoutingModule = class DevelopersPageRoutingModule {
};
DevelopersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DevelopersPageRoutingModule);



/***/ }),

/***/ 327:
/*!*************************************************************!*\
  !*** ./src/app/pages/users/developers/developers.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevelopersPageModule": () => (/* binding */ DevelopersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _developers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./developers-routing.module */ 9055);
/* harmony import */ var _developers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./developers.page */ 2164);







let DevelopersPageModule = class DevelopersPageModule {
};
DevelopersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _developers_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevelopersPageRoutingModule
        ],
        declarations: [_developers_page__WEBPACK_IMPORTED_MODULE_1__.DevelopersPage]
    })
], DevelopersPageModule);



/***/ }),

/***/ 2164:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/developers/developers.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevelopersPage": () => (/* binding */ DevelopersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_developers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./developers.page.html */ 5943);
/* harmony import */ var _developers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./developers.page.scss */ 4770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);






let DevelopersPage = class DevelopersPage {
    constructor(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    ngOnInit() {
        this.loading = true;
        this.getAllProfiles();
        setTimeout(() => {
            this.loading = false;
        }, 7000);
    }
    getAllProfiles() {
        this._userService.getAllProfile().subscribe(data => {
            this.profiles = data;
            this.loading = false;
        });
    }
    openProfile(val) {
        this._router.navigate([`/profile/${val}`]);
    }
};
DevelopersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
DevelopersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-developers',
        template: _raw_loader_developers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_developers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DevelopersPage);



/***/ }),

/***/ 4770:
/*!*************************************************************!*\
  !*** ./src/app/pages/users/developers/developers.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n}\n\nion-content {\n  position: relative;\n}\n\n.loading {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 48%;\n  translate: -50%, -50%;\n}\n\n.container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.container .section {\n  max-width: 1100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container .section header {\n  width: 100%;\n  margin: 1rem;\n  display: flex;\n  flex-direction: row;\n}\n\n.container .section header ion-icon {\n  align-self: center;\n  margin: 0 1rem;\n  font-size: 2rem;\n}\n\n.container .section header h1 {\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.container .section ion-card {\n  margin: 1.5rem 0;\n}\n\n.container .section ion-card ion-card-content {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.container .section ion-card ion-card-content #image {\n  display: grid;\n  align-items: center;\n}\n\n.container .section ion-card ion-card-content #image img {\n  justify-self: center;\n  border-radius: 50%;\n  width: 80%;\n  padding: 0.5rem 0 1rem 0;\n}\n\n.container .section ion-card ion-card-content #image ion-button {\n  --background: #01497c;\n}\n\n.container .section ion-card ion-card-content #details {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n}\n\n.container .section ion-card ion-card-content #details #info {\n  margin-bottom: 1.5rem;\n}\n\n.container .section ion-card ion-card-content #details #info h1 {\n  font-size: 1.8rem;\n  color: #000;\n}\n\n.container .section ion-card ion-card-content #details #info p {\n  font-size: 1.2rem;\n}\n\n.container .section ion-card ion-card-content #details #skills {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-items: space-evenly;\n}\n\n.container .section ion-card ion-card-content #details #skills #skill {\n  display: flex;\n  flex-direction: row;\n  justify-self: center;\n  margin: 0.2rem;\n}\n\n.container .section ion-card ion-card-content #details #skills #skill ion-icon {\n  align-self: center;\n  font-size: 1rem;\n  color: #01497c;\n  margin-right: 0.1rem;\n}\n\n.container .section ion-card ion-card-content #details #skills #skill p {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 13ch;\n}\n\n@media (max-width: 768px) {\n  .container .section {\n    width: 100%;\n  }\n  .container .section header ion-icon {\n    font-size: 1.7rem;\n    margin: 0 0.7rem;\n  }\n  .container .section header h1 {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n  }\n  .container .section ion-card {\n    width: 100%;\n  }\n  .container .section ion-card ion-card-content {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section ion-card ion-card-content #image {\n    justify-items: center;\n    margin-bottom: 1rem;\n  }\n  .container .section ion-card ion-card-content #image img {\n    width: 30%;\n    padding: 0.5rem 0 1rem 0;\n  }\n  .container .section ion-card ion-card-content #image ion-button {\n    max-width: 45%;\n  }\n  .container .section ion-card ion-card-content #details {\n    align-items: center;\n  }\n  .container .section ion-card ion-card-content #details #info {\n    margin-bottom: 0.8rem;\n  }\n  .container .section ion-card ion-card-content #details #info h1 {\n    text-align: center;\n    font-size: 1.6rem;\n  }\n  .container .section ion-card ion-card-content #details #info p {\n    text-align: center;\n    font-size: 1.1rem;\n  }\n  .container .section ion-card ion-card-content #details #skills {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .container .section ion-card ion-card-content #details #skills #skill p {\n    font-size: 0.9rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .loading {\n    left: 43%;\n  }\n\n  .container .section header {\n    margin: 0.5rem;\n  }\n  .container .section header ion-icon {\n    font-size: 1.5rem;\n    margin-right: 0.3rem;\n    margin-bottom: 1rem;\n  }\n  .container .section header h1 {\n    font-size: 1.5rem;\n    margin-bottom: 0;\n  }\n  .container .section ion-card ion-card-content {\n    padding: 0.5rem;\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section ion-card ion-card-content #image {\n    justify-items: center;\n  }\n  .container .section ion-card ion-card-content #image img {\n    width: 40%;\n  }\n  .container .section ion-card ion-card-content #details {\n    margin: 0.5rem;\n  }\n  .container .section ion-card ion-card-content #details #info h1 {\n    font-size: 1.4rem;\n  }\n  .container .section ion-card ion-card-content #details #info p {\n    font-size: 1rem;\n  }\n  .container .section ion-card ion-card-content #details #skills {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .container .section ion-card ion-card-content #details #skills #skill p {\n    font-size: 0.9rem;\n    max-width: 16ch;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3BlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ047O0FBQU07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRVI7O0FBQ007RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBQ1I7O0FBR0k7RUFDRSxnQkFBQTtBQUROOztBQUVNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQVI7O0FBRVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBVjs7QUFDVTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUFDWjs7QUFDVTtFQUNFLHFCQUFBO0FBQ1o7O0FBR1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRFY7O0FBRVU7RUFDRSxxQkFBQTtBQUFaOztBQUNZO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQ2Q7O0FBQ1k7RUFDRSxpQkFBQTtBQUNkOztBQUVVO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7QUFBWjs7QUFFWTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUFkOztBQUNjO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ2hCOztBQUNjO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ2hCOztBQVNBO0VBRUk7SUFDRSxXQUFBO0VBUEo7RUFTTTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUFQUjtFQVVNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBUlI7RUFZSTtJQUNFLFdBQUE7RUFWTjtFQVdNO0lBQ0UscUNBQUE7RUFUUjtFQVVRO0lBQ0UscUJBQUE7SUFRQSxtQkFBQTtFQWZWO0VBUVU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFOWjtFQVFVO0lBQ0UsY0FBQTtFQU5aO0VBV1E7SUFDRSxtQkFBQTtFQVRWO0VBVVU7SUFDRSxxQkFBQTtFQVJaO0VBU1k7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VBUGQ7RUFTWTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUFQZDtFQVVVO0lBQ0UscUNBQUE7RUFSWjtFQVVjO0lBQ0UsaUJBQUE7RUFSaEI7QUFDRjs7QUFrQkE7RUFDRTtJQUNFLFNBQUE7RUFoQkY7O0VBb0JJO0lBQ0UsY0FBQTtFQWpCTjtFQWtCTTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtFQWhCUjtFQW1CTTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7RUFqQlI7RUFzQk07SUFDRSxlQUFBO0lBQ0EscUNBQUE7RUFwQlI7RUFxQlE7SUFDRSxxQkFBQTtFQW5CVjtFQW9CVTtJQUNFLFVBQUE7RUFsQlo7RUFzQlE7SUFDRSxjQUFBO0VBcEJWO0VBc0JZO0lBQ0UsaUJBQUE7RUFwQmQ7RUFzQlk7SUFDRSxlQUFBO0VBcEJkO0VBdUJVO0lBQ0UscUNBQUE7RUFyQlo7RUF1QmM7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFyQmhCO0FBQ0YiLCJmaWxlIjoiZGV2ZWxvcGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOm5vbmU7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2FkaW5ne1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0OCU7XHJcbiAgdHJhbnNsYXRlOiAoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgLnNlY3Rpb257XHJcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGhlYWRlcntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcblxyXG4gICAgICAgICNpbWFnZXtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAxcmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMTQ5N2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZGV0YWlsc3tcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgI2luZm97XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3NraWxsc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgICAgICAgI3NraWxse1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46ICAwLjJyZW07XHJcbiAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxNDk3YztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4xcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxM2NoO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWFkZXJ7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgICAjaW1hZ2V7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMXJlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICNkZXRhaWxze1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAjaW5mb3tcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc2tpbGxze1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgI3NraWxse1xyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5sb2FkaW5ne1xyXG4gICAgbGVmdDogNDMlO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgIGhlYWRlcntcclxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBoMXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgICAjaW1hZ2V7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICNkZXRhaWxze1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgI2luZm97XHJcbiAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3NraWxsc3tcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgICAgICAgICNza2lsbHtcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE2Y2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAgXHJcbn0iXX0= */");

/***/ }),

/***/ 5943:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/developers/developers.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Developer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"loading\" *ngIf=\"loading\">\n    <img src=\"../../../../assets/output-onlinegiftools.gif\">\n  </div>\n  <div class=\"container\" *ngIf=\"!loading\">\n    <div class=\"section\">\n      <header>\n        <ion-icon name=\"globe-outline\"></ion-icon>\n        <h1>Browse & connect with developers</h1>\n      </header>\n      <ion-card *ngFor=\"let profile of profiles\">\n        <ion-card-content>\n          <section id=\"image\">\n            <img [src]=\"profile.user.avatar\" alt=\"\">\n            <ion-button (click)=\"openProfile(profile.user._id)\">View Profile</ion-button>\n          </section>\n          <section id=\"details\">\n            <div id=\"info\">\n              <h1>{{profile.user.name}}</h1>\n              <p>{{profile.status}}</p>\n            </div>\n            <div id=\"skills\">\n              <div id=\"skill\" *ngFor=\"let skill of profile.skills\">\n                <ion-icon name=\"ribbon-outline\"></ion-icon>\n                <p>{{skill}}</p>\n              </div>\n            </div>\n          </section>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_developers_developers_module_ts.js.map