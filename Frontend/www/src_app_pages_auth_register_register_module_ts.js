(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_auth_register_register_module_ts"],{

/***/ 917:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 9413);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6029:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 917);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 9413);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 9413:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 2403);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 2912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);









let RegisterPage = class RegisterPage {
    constructor(_formBuilder, _router, _authService, _tokenService, _alertController) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._authService = _authService;
        this._tokenService = _tokenService;
        this._alertController = _alertController;
        this.loading = false;
        this.hide = false;
    }
    ngOnInit() {
        this.registerForm = this._formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    eye() {
        this.hide = !this.hide;
    }
    presentAlert(msg, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: `Dear ${name},`,
                message: `${msg}`,
            });
            yield alert.present();
            setTimeout(() => {
                alert.dismiss();
            }, 3000);
        });
    }
    onSubmit() {
        let name = this.registerForm.get('name').value;
        let email = this.registerForm.get('email').value.toLowerCase();
        let password = this.registerForm.get('password').value;
        this.loading = true;
        this._authService.register(name, email, password).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.presentAlert(data['msg'], data['name']);
            yield this._tokenService.setToken(data['token']);
            yield this._router.navigate(['login']);
            this.loading = false;
        }));
        setTimeout(() => {
            this.loading = false;
        }, 7000);
        this.registerForm.reset();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenstorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 2912:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pic {\n  height: 100vh;\n  width: 100%;\n  background: url('background.jpg');\n  background-position: 30%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.background-filter {\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.shape1 {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 13%, 0 52%);\n          clip-path: polygon(0 0, 100% 0, 100% 13%, 0 52%);\n  background-color: #013a63;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  height: 50%;\n  width: 100%;\n  left: 0;\n}\n\n.shape2 {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 41%, 62% 0);\n          clip-path: polygon(0 0, 100% 0, 100% 41%, 62% 0);\n  background-color: #2c7da0;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  height: 50%;\n  width: 100%;\n  left: 0;\n}\n\nion-card {\n  margin-top: 130px;\n  background: transparent;\n  box-shadow: none;\n  text-align: center;\n}\n\nion-card ion-card-title {\n  color: #242020;\n  font-size: 30px;\n  font-weight: 400;\n  margin-top: 1rem;\n}\n\nion-card ion-card-subtitle {\n  color: #979696;\n  font-size: 14px;\n  font-weight: 400;\n  max-width: 200px;\n  display: inline-block;\n}\n\nion-card ion-card-subtitle strong {\n  text-decoration: none;\n  font-weight: bold;\n  color: #01497c;\n  font-size: 15px;\n}\n\nion-card ion-card-content {\n  margin-top: 30px;\n  position: relative;\n}\n\nion-card ion-card-content .spinner {\n  position: absolute;\n  top: 52%;\n  left: 43%;\n  z-index: 4;\n  width: 45px;\n}\n\nion-card ion-card-content ion-item {\n  --ion-item-background: transparent;\n  --border-width: 0;\n  --inner-border-width: 0;\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-content ion-item ion-input {\n  position: relative;\n  width: 247px;\n  height: 42px;\n  border-radius: 15px;\n  border: 1px solid #01497c;\n  font-size: 14px;\n  font-weight: 300;\n  color: #555B5B;\n  --padding-start: 30px;\n}\n\nion-card ion-card-content ion-item ion-icon {\n  z-index: 5;\n  padding-left: 1rem;\n  position: absolute;\n  right: 25px;\n  cursor: pointer;\n}\n\nion-card ion-card-content a {\n  text-decoration: none;\n  color: #01497c;\n  font-weight: 300;\n  font-size: 13px;\n}\n\nion-card .bottom-section {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-card .bottom-section ion-button {\n  height: 53px;\n  width: 247px;\n  font-size: 14px;\n  text-decoration: none;\n  --background: #01497c;\n  font-weight: 300;\n  --border-radius: 15px !important;\n  color: #fff;\n}\n\nion-card .bottom-section span {\n  margin-top: 20px;\n  font-weight: 330;\n}\n\nion-card .bottom-section span a {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0RBQUE7VUFBQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3REFBQTtVQUFBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDTjs7QUFFRTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQU47O0FBRU07RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBVjs7QUFJRTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZSOztBQUtNO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSFI7O0FBS1E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUhWOztBQU1RO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpWOztBQVFNO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTlY7O0FBVUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBVUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFSUjs7QUFXSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUTjs7QUFXTTtFQUNFLGdCQUFBO0FBVFIiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhY2tncm91bmQtcGlje1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvL2JhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmJhY2tncm91bmQtZmlsdGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2hhcGUxe1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMyUsIDAgNTIlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzYTYzO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6MDtcclxuICB6LWluZGV4OjM7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnNoYXBlMntcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgNDElLCA2MiUgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjN2RhMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOjA7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgIGNvbG9yOiAjMjQyMDIwO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgY29sb3I6ICM5Nzk2OTY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgc3Ryb25ne1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzAxNDk3YztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgLnNwaW5uZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDo1MiU7XHJcbiAgICAgICAgbGVmdDo0MyU7XHJcbiAgICAgICAgei1pbmRleDo0O1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6bm9uZTtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDI0N3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMTQ5N2M7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgY29sb3I6ICM1NTVCNUI7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgIHotaW5kZXg6NTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYXtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDE0OTdjO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICAgICAgd2lkdGg6IDI0N3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDE0OTdjO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMzA7XHJcblxyXG4gICAgICBhe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 2403:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"background-pic\">\n    <div class=\"background-filter\">\n      <div class=\"shape1\">\n      </div>\n      <div class=\"shape2\">\n      </div>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Sign Up!</ion-card-title>\n\n          <ion-card-subtitle>Create you <strong> account </strong> by filling up the form</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          <div *ngIf=\"loading\" class=\"spinner\">\n            <img src=\"../../../../assets/output-onlinegiftools.gif\">\n          </div>\n\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <ion-item>\n              <ion-input placeholder=\"Full Name\" type=\"text\" name=\"name\"  formControlName=\"name\"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input placeholder=\"Email\" type=\"email\" name=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n      \n            <ion-item>\n              <ion-input placeholder=\"Password\" type=\"{{ hide ? 'text' : 'password' }}\" name=\"password\"  formControlName=\"password\"></ion-input>\n              <ion-icon *ngIf=\"hide\" title=\"Show\" name=\"eye-outline\" (click)=\"eye()\"></ion-icon>\n              <ion-icon *ngIf=\"!hide\" name=\"eye-off-outline\" (click)=\"eye()\"></ion-icon>\n            </ion-item>\n            \n            <div class=\"bottom-section\">\n              <ion-button type=\"submit\">Sign Up</ion-button>\n              <span>\n                Already have an account ? <a routerLink=\"/login\">Sign In</a>\n              </span>\n            </div>\n          </form>\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_register_register_module_ts.js.map