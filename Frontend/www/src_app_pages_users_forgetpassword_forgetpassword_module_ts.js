(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_forgetpassword_forgetpassword_module_ts"],{

/***/ 9138:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/users/forgetpassword/forgetpassword-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetpasswordPageRoutingModule": () => (/* binding */ ForgetpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgetpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpassword.page */ 3355);




const routes = [
    {
        path: '',
        component: _forgetpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgetpasswordPage
    }
];
let ForgetpasswordPageRoutingModule = class ForgetpasswordPageRoutingModule {
};
ForgetpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetpasswordPageRoutingModule);



/***/ }),

/***/ 9546:
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/forgetpassword/forgetpassword.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetpasswordPageModule": () => (/* binding */ ForgetpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forgetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpassword-routing.module */ 9138);
/* harmony import */ var _forgetpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpassword.page */ 3355);







let ForgetpasswordPageModule = class ForgetpasswordPageModule {
};
ForgetpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _forgetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetpasswordPageRoutingModule
        ],
        declarations: [_forgetpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgetpasswordPage]
    })
], ForgetpasswordPageModule);



/***/ }),

/***/ 3355:
/*!*******************************************************************!*\
  !*** ./src/app/pages/users/forgetpassword/forgetpassword.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetpasswordPage": () => (/* binding */ ForgetpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forgetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgetpassword.page.html */ 6802);
/* harmony import */ var _forgetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpassword.page.scss */ 749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);









let ForgetpasswordPage = class ForgetpasswordPage {
    constructor(_authService, _router, _formBuilder, _alertService, _alertController) {
        this._authService = _authService;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._alertService = _alertService;
        this._alertController = _alertController;
        this.loading1 = false;
        this.loading2 = false;
        this.hide = false;
    }
    ngOnInit() {
        this.loading1 = false;
        this.loading2 = false;
        this.showCard('con1');
        this.hideCard('con2');
        this.resetPasswordForm = this._formBuilder.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            otp: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    presentAlert(msg, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: `Dear ${name}`,
                message: `${msg}`,
            });
            yield alert.present();
            setTimeout(() => {
                alert.dismiss();
            }, 3000);
        });
    }
    showCard(id) {
        document.getElementById(id).style.display = '';
    }
    hideCard(id) {
        document.getElementById(id).style.display = 'none';
    }
    eye() {
        this.hide = !this.hide;
    }
    back() {
        this.showCard('con1');
        this.hideCard('con2');
    }
    submitEmail() {
        this.loading1 = true;
        let email = this.resetPasswordForm.get('email').value.toLowerCase();
        this._authService.requestOtp(email).subscribe(data => {
            this.loading1 = false;
            this.presentAlert(data['msg'], data['name']);
            this.hideCard('con1');
            this.showCard('con2');
        });
        setTimeout(() => {
            this.loading1 = false;
        }, 7000);
    }
    resetPassword() {
        this.loading2 = true;
        let email = this.resetPasswordForm.get('email').value.toLowerCase();
        let otp = this.resetPasswordForm.get('otp').value;
        let password = this.resetPasswordForm.get('password').value;
        let confirmPassword = this.resetPasswordForm.get('confirmPassword').value;
        if (password !== confirmPassword) {
            this.loading2 = false;
            this._alertService.presentToast("Password does not match", 'danger');
            return;
        }
        this._authService.resetPassword(email, otp, password).subscribe(data => {
            this.loading2 = false;
            this._alertService.presentToast(data['msg'], 'success');
            this._router.navigate(['login']);
        });
        setTimeout(() => {
            this.loading2 = false;
        }, 5000);
    }
};
ForgetpasswordPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ForgetpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-forgetpassword',
        template: _raw_loader_forgetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgetpasswordPage);



/***/ }),

/***/ 749:
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/forgetpassword/forgetpassword.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pic {\n  height: 100vh;\n  width: 100%;\n  background: url('background.jpg');\n  background-position: 30%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.background-filter {\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.shape1 {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 13%, 0 52%);\n          clip-path: polygon(0 0, 100% 0, 100% 13%, 0 52%);\n  background-color: #013a63;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  height: 50%;\n  width: 100%;\n  left: 0;\n}\n\n.shape2 {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 41%, 62% 0);\n          clip-path: polygon(0 0, 100% 0, 100% 41%, 62% 0);\n  background-color: #2c7da0;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  height: 50%;\n  width: 100%;\n  left: 0;\n}\n\nion-card {\n  margin-top: 150px;\n  background: transparent;\n  box-shadow: none;\n  text-align: center;\n}\n\nion-card ion-card-title {\n  color: #242020;\n  font-size: 30px;\n  font-weight: 400;\n}\n\nion-card ion-card-subtitle {\n  color: #979696;\n  font-size: 14px;\n  font-weight: 400;\n  display: inline-block;\n  max-width: 140px;\n}\n\nion-card ion-card-subtitle strong {\n  text-decoration: none;\n  font-weight: bold;\n  color: #01497c;\n  font-size: 15px;\n}\n\nion-card ion-card-content {\n  margin-top: 30px;\n}\n\nion-card ion-card-content .spinner1 {\n  position: absolute;\n  top: 32%;\n  left: 42%;\n  z-index: 4;\n  width: 45px;\n}\n\nion-card ion-card-content .spinner2 {\n  position: absolute;\n  top: 62%;\n  left: 42%;\n  z-index: 4;\n  width: 45px;\n}\n\nion-card ion-card-content ion-item {\n  --ion-item-background: transparent;\n  --border-width: 0;\n  --inner-border-width: 0;\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-content ion-item ion-input {\n  width: 247px;\n  height: 42px;\n  border-radius: 15px;\n  border: 1px solid #01497c;\n  font-size: 14px;\n  font-weight: 300;\n  color: #555B5B;\n  --padding-start: 30px;\n}\n\nion-card ion-card-content ion-item ion-icon {\n  z-index: 5;\n  padding-left: 1rem;\n  position: absolute;\n  right: 25px;\n  cursor: pointer;\n}\n\nion-card ion-card-content a {\n  text-decoration: none;\n  color: #01497c;\n  font-weight: 300;\n  font-size: 13px;\n}\n\nion-card .bottom-section {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card .bottom-section ion-button {\n  height: 53px;\n  width: 90%;\n  font-size: 14px;\n  text-decoration: none;\n  --background: #01497c;\n  font-weight: 300;\n  --border-radius: 15px !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0RBQUE7VUFBQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3REFBQTtVQUFBLGdEQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ047O0FBRUU7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUVNO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQVY7O0FBSUU7RUFDSSxnQkFBQTtBQUZOOztBQUlNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRlI7O0FBS007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFIUjs7QUFNTTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUpWOztBQU1VO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBSmQ7O0FBT1U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTFo7O0FBU007RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQVjs7QUFXRTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVROOztBQVdNO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBVFYiLCJmaWxlIjoiZm9yZ2V0cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhY2tncm91bmQtcGlje1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1maWx0ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaGFwZTF7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEzJSwgMCA1MiUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTNhNjM7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDowO1xyXG4gIHotaW5kZXg6MztcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2hhcGUye1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA0MSUsIDYyJSAwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3ZGEwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6MDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgY29sb3I6ICMyNDIwMjA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1heC13aWR0aDogMTQwcHg7XHJcblxyXG4gICAgICBzdHJvbmd7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMDE0OTdjO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgICAgLnNwaW5uZXIxe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MzIlO1xyXG4gICAgICAgIGxlZnQ6NDIlO1xyXG4gICAgICAgIHotaW5kZXg6NDtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXIye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6NjIlO1xyXG4gICAgICAgIGxlZnQ6NDIlO1xyXG4gICAgICAgIHotaW5kZXg6NDtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICAgICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6bm9uZTtcclxuICAgICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgaW9uLWlucHV0e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNDdweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDE0OTdjO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTU1QjVCO1xyXG4gICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgei1pbmRleDo1O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYXtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDE0OTdjO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1zZWN0aW9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAxNDk3YztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 6802:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/forgetpassword/forgetpassword.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"background-pic\">\n    <div class=\"background-filter\">\n      <div class=\"shape1\">\n      </div>\n      <div class=\"shape2\">\n      </div>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Forgot Password!</ion-card-title>\n\n          <ion-card-subtitle>Enter you <strong>Email</strong> to reset</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content id=\"con1\">\n          <div *ngIf=\"loading1\" class=\"spinner1\">\n            <img src=\"../../../../assets/output-onlinegiftools.gif\">\n          </div>\n\n          <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"submitEmail()\">\n            <ion-item>\n              <ion-input placeholder=\"Email Address\" name=\"email\" type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            \n            <div class=\"bottom-section\">\n              <ion-button type=\"submit\">Reset Password</ion-button>\n            </div>\n          </form>\n        </ion-card-content>\n\n        <ion-card-content id=\"con2\">\n          <div *ngIf=\"loading2\" class=\"spinner2\">\n            <img src=\"../../../../assets/output-onlinegiftools.gif\">\n          </div>\n          <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPassword()\">\n            <ion-item>\n              <ion-input placeholder=\"Enter Otp\" type=\"number\" name=\"otp\" formControlName=\"otp\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input placeholder=\"Enter New password\" name=\"password\" formControlName=\"password\" type=\"{{ hide ? 'text' : 'password' }}\"></ion-input>\n              <ion-icon *ngIf=\"hide\" title=\"Show\" name=\"eye-outline\" (click)=\"eye()\"></ion-icon>\n              <ion-icon *ngIf=\"!hide\" name=\"eye-off-outline\" (click)=\"eye()\"></ion-icon>\n            </ion-item>\n\n            <ion-item>\n              <ion-input placeholder=\"Confirm password\" type=\"{{ hide ? 'text' : 'password' }}\" name=\"confirmPassword\" formControlName=\"confirmPassword\"></ion-input>\n              <ion-icon *ngIf=\"hide\" title=\"Show\" name=\"eye-outline\" (click)=\"eye()\"></ion-icon>\n              <ion-icon *ngIf=\"!hide\" name=\"eye-off-outline\" (click)=\"eye()\"></ion-icon>\n            </ion-item>\n\n            <div class=\"bottom-section\">\n              <ion-button (click)=\"back()\">Back</ion-button>\n              <ion-button type=\"submit\">Submit</ion-button>\n            </div>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_forgetpassword_forgetpassword_module_ts.js.map