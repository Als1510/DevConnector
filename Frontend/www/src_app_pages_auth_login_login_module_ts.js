(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 5221:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 7412);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9456:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5221);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 7412);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 7412:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 2898);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);








let LoginPage = class LoginPage {
    constructor(_formBuilder, _router, _authService, _tokenService) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._authService = _authService;
        this._tokenService = _tokenService;
        this.loading = false;
        this.hide = false;
    }
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    eye() {
        this.hide = !this.hide;
    }
    onSubmit() {
        let email = this.loginForm.get('email').value.toLowerCase();
        let password = this.loginForm.get('password').value;
        this.loading = true;
        this._authService.login(email, password).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this._tokenService.saveUserNameAndId(data['name'], data['id']);
            yield this._tokenService.setToken(data['token']);
            setTimeout(() => {
                this._router.navigate(['dashboard']);
            }, 1500);
            this.loading = false;
        }));
        this.loginForm.reset();
        setTimeout(() => {
            this.loading = false;
        }, 7000);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenstorageService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 6934:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pic {\n  height: 100vh;\n  width: 100%;\n  background: url('background.jpg');\n  background-position: 30%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.background-filter {\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.shape1 {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 13%, 0 52%);\n          clip-path: polygon(0 0, 100% 0, 100% 13%, 0 52%);\n  background-color: #013a63;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  height: 50%;\n  width: 100%;\n  left: 0;\n}\n\n.shape2 {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 41%, 62% 0);\n          clip-path: polygon(0 0, 100% 0, 100% 41%, 62% 0);\n  background-color: #2c7da0;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  height: 50%;\n  width: 100%;\n  left: 0;\n}\n\nion-card {\n  position: relative;\n  margin-top: 130px;\n  background: transparent;\n  box-shadow: none;\n  text-align: center;\n}\n\nion-card ion-card-title {\n  color: #242020;\n  margin-top: 1rem;\n  font-size: 40px;\n}\n\nion-card ion-card-subtitle {\n  color: #979696;\n  font-size: 14px;\n  font-weight: 400;\n}\n\nion-card ion-card-subtitle a {\n  text-decoration: none;\n  font-weight: bold;\n  color: #01497c;\n  font-size: 15px;\n}\n\nion-card ion-card-content {\n  margin-top: 30px;\n}\n\nion-card ion-card-content .spinner {\n  position: absolute;\n  top: 49%;\n  left: 42%;\n  z-index: 4;\n  width: 45px;\n}\n\nion-card ion-card-content ion-item {\n  --ion-item-background: transparent;\n  --border-width: 0;\n  --inner-border-width: 0;\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-content ion-item ion-input {\n  width: 247px;\n  height: 42px;\n  border-radius: 15px;\n  border: 1px solid #01497c;\n  font-size: 14px;\n  font-weight: 300;\n  color: #555B5B;\n  --padding-start: 30px;\n}\n\nion-card ion-card-content ion-item ion-icon {\n  z-index: 5;\n  padding-left: 1rem;\n  position: absolute;\n  right: 25px;\n  cursor: pointer;\n}\n\nion-card ion-card-content a {\n  text-decoration: none;\n  color: #01497c;\n  font-weight: 300;\n  font-size: 13px;\n}\n\nion-card .bottom-section {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-card .bottom-section ion-button {\n  height: 53px;\n  width: 247px;\n  font-size: 14px;\n  text-decoration: none;\n  --background: #014f86;\n  font-weight: 300;\n  --border-radius: 15px !important;\n  color: #fff;\n}\n\nion-card .bottom-section span {\n  margin-top: 20px;\n  font-weight: 330;\n}\n\nion-card .bottom-section span a {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0RBQUE7VUFBQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3REFBQTtVQUFBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUlFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZOOztBQUtJO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSE47O0FBS007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFIUjs7QUFNTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFKUjs7QUFRSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU5SOztBQVVFO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJOOztBQVVNO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBUlY7O0FBV007RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBVFY7O0FBV1U7RUFDSSxnQkFBQTtBQVRkIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXBpY3tcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJhY2tncm91bmQtZmlsdGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2hhcGUxe1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMyUsIDAgNTIlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzYTYzO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6MDtcclxuICB6LWluZGV4OjM7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnNoYXBlMntcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgNDElLCA2MiUgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjN2RhMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOjA7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICBjb2xvcjogIzI0MjAyMDtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMwMTQ5N2M7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgIC5zcGlubmVye1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDo0OSU7XHJcbiAgICAgIGxlZnQ6NDIlO1xyXG4gICAgICB6LWluZGV4OjQ7XHJcbiAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtLWJvcmRlci13aWR0aDogMDtcclxuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6bm9uZTtcclxuICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAyNDdweDtcclxuICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDE0OTdjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1QjVCO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgei1pbmRleDo1O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMTQ5N2M7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXNlY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgIGhlaWdodDogNTNweDtcclxuICAgICAgICAgIHdpZHRoOiAyNDdweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAxNGY4NjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzMwO1xyXG5cclxuICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 2898:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"background-pic\">\n    <div class=\"background-filter\">\n      <div class=\"shape1\">\n      </div>\n      <div class=\"shape2\">\n      </div>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Welcome!</ion-card-title>\n\n          <ion-card-subtitle>Time to Explore, Let's <a routerLink=\"/login\">Sign in</a></ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          <div *ngIf=\"loading\" class=\"spinner\">\n            <img src=\"../../../../assets/output-onlinegiftools.gif\">\n          </div>\n          \n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <ion-item>\n              <ion-input placeholder=\"Email Address\" name=\"email\" type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input placeholder=\"Password\" type=\"{{ hide ? 'text' : 'password' }}\" name=\"password\"  formControlName=\"password\"></ion-input>\n              <ion-icon *ngIf=\"hide\" title=\"Show\" name=\"eye-outline\" (click)=\"eye()\"></ion-icon>\n              <ion-icon *ngIf=\"!hide\" name=\"eye-off-outline\" (click)=\"eye()\"></ion-icon>\n            </ion-item>\n            \n            <a routerLink=\"/forgetpassword\">Forget Password</a>\n            \n            <div class=\"bottom-section\">\n              <ion-button type=\"submit\">Sign In</ion-button>\n              <span>\n                Dont't have an account ? <a routerLink=\"/register\">Sign Up</a>\n              </span>\n            </div>\n          </form>\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map