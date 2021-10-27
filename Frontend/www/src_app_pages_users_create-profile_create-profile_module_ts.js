(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_create-profile_create-profile_module_ts"],{

/***/ 2000:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/users/create-profile/create-profile-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProfilePageRoutingModule": () => (/* binding */ CreateProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _create_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-profile.page */ 9538);




const routes = [
    {
        path: '',
        component: _create_profile_page__WEBPACK_IMPORTED_MODULE_0__.CreateProfilePage
    }
];
let CreateProfilePageRoutingModule = class CreateProfilePageRoutingModule {
};
CreateProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateProfilePageRoutingModule);



/***/ }),

/***/ 6206:
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/create-profile/create-profile.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProfilePageModule": () => (/* binding */ CreateProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _create_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-profile-routing.module */ 2000);
/* harmony import */ var _create_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-profile.page */ 9538);







let CreateProfilePageModule = class CreateProfilePageModule {
};
CreateProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _create_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateProfilePageRoutingModule
        ],
        declarations: [_create_profile_page__WEBPACK_IMPORTED_MODULE_1__.CreateProfilePage]
    })
], CreateProfilePageModule);



/***/ }),

/***/ 9538:
/*!*******************************************************************!*\
  !*** ./src/app/pages/users/create-profile/create-profile.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProfilePage": () => (/* binding */ CreateProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_create_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-profile.page.html */ 2476);
/* harmony import */ var _create_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-profile.page.scss */ 8532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);








let CreateProfilePage = class CreateProfilePage {
    constructor(_router, _formBuilder, _userService, _alertService) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._userService = _userService;
        this._alertService = _alertService;
        this.dataLoaded = false;
    }
    ngOnInit() {
        this.hide();
        this.profileForm = this._formBuilder.group({
            company: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            website: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            bio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            githubusername: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            skills: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            youtube: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            facebook: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            twitter: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            instagram: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            linkedin: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.getMyProfile();
        setTimeout(() => {
            this.dataLoaded = true;
        }, 5000);
    }
    show() {
        document.getElementById('social-links').style.display = '';
    }
    hide() {
        document.getElementById('social-links').style.display = 'none';
    }
    getMyProfile() {
        this._userService.getLoggedInProfile().subscribe(data => {
            this.profileForm.get('company').setValue(data['company']);
            this.profileForm.get('website').setValue(data['website']);
            this.profileForm.get('location').setValue(data['location']);
            this.profileForm.get('bio').setValue(data['bio']);
            this.profileForm.get('status').setValue(data['status']);
            this.profileForm.get('githubusername').setValue(data['githubusername']);
            this.profileForm.get('skills').setValue(data['skills']);
            this.profileForm.get('youtube').setValue(data['social'].youtube);
            this.profileForm.get('facebook').setValue(data['social'].facebook);
            this.profileForm.get('twitter').setValue(data['social'].twitter);
            this.profileForm.get('instagram').setValue(data['social'].instagram);
            this.profileForm.get('linkedin').setValue(data['social'].linkedin);
            this.dataLoaded = true;
        });
    }
    onSubmit() {
        this.dataLoaded = false;
        let company = this.profileForm.get('company').value;
        let website = this.profileForm.get('website').value;
        let location = this.profileForm.get('location').value;
        let bio = this.profileForm.get('bio').value;
        let status = this.profileForm.get('status').value;
        let githubusername = this.profileForm.get('githubusername').value;
        let skills = this.profileForm.get('skills').value;
        let youtube = this.profileForm.get('youtube').value;
        let facebook = this.profileForm.get('facebook').value;
        let twitter = this.profileForm.get('twitter').value;
        let instagram = this.profileForm.get('instagram').value;
        let linkedin = this.profileForm.get('linkedin').value;
        this._userService.createUpdateProfile(company, website, location, bio, status, githubusername, skills, youtube, facebook, twitter, instagram, linkedin).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.dataLoaded = true;
            yield this._alertService.presentToast(data['msg'], 'success');
            yield this.getMyProfile();
        }));
        setTimeout(() => {
            this.dataLoaded = false;
        }, 7000);
    }
};
CreateProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
CreateProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-create-profile',
        template: _raw_loader_create_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateProfilePage);



/***/ }),

/***/ 8532:
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/create-profile/create-profile.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n}\n\nion-back-button {\n  --color: #013a63;\n  --background-hover:#01497c;\n  --background-hover-opacity: 0.05;\n}\n\nion-content {\n  position: relative;\n}\n\n.loading {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 48%;\n  translate: -50%, -50%;\n}\n\n.container {\n  z-index: 3 !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n\n.container .section {\n  z-index: 4 !important;\n  max-width: 1100px;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 1rem;\n}\n\n.container .section header {\n  margin: 1rem 0;\n}\n\n.container .section header h1 {\n  font-size: 2.5rem;\n}\n\n.container .section header p {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n\n.container .section header p ion-icon {\n  font-size: 1.5rem;\n  margin-right: 0.8rem;\n}\n\n.container .section #profile-section {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1.5rem;\n}\n\n.container .section #profile-section ion-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.container .section #profile-section ion-item ion-label {\n  margin-bottom: 0.5rem;\n}\n\n.container .section #social-buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.container .section #social-buttons ion-button {\n  --background: #01497c;\n}\n\n.container .section #social-buttons ion-label {\n  margin-left: 0.5rem;\n  font-size: 0.8rem;\n}\n\n.container .section #social-links ion-item {\n  display: flex;\n  position: relative;\n}\n\n.container .section #social-links ion-item #twitter {\n  color: #00acee;\n}\n\n.container .section #social-links ion-item #facebook {\n  color: #3b5998;\n}\n\n.container .section #social-links ion-item #youtube {\n  color: #c4302b;\n}\n\n.container .section #social-links ion-item #linkedin {\n  color: #0e76a8;\n}\n\n.container .section #social-links ion-item #instagram {\n  color: #8a3ab9;\n}\n\n.container .section #social-links ion-item ion-icon {\n  position: absolute;\n  left: 0%;\n  top: 30%;\n}\n\n.container .section #social-links ion-item #links {\n  width: 100%;\n  margin-left: 2.3rem;\n}\n\n.container .section #submit {\n  margin-top: 1rem;\n}\n\n.container .section #submit ion-button {\n  --background: #01497c;\n}\n\n@media (max-width: 1000px) {\n  .container .section header h1 {\n    font-size: 2.5rem;\n  }\n  .container .section header p ion-icon {\n    font-size: 1.5rem;\n    margin-right: 0.8rem;\n  }\n  .container .section #profile-section {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section #profile-section ion-item ion-label {\n    margin-bottom: 0.5rem;\n  }\n  .container .section #social-buttons ion-label {\n    margin-left: 0.5rem;\n    font-size: 0.8rem;\n  }\n  .container .section #social-links ion-item ion-icon {\n    left: 0%;\n    top: 30%;\n  }\n  .container .section #social-links ion-item #links {\n    margin-left: 2.3rem;\n  }\n  .container .section #submit {\n    margin-top: 1rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .container .section header h1 {\n    font-size: 2rem;\n  }\n  .container .section header p ion-icon {\n    font-size: 1.3rem;\n    margin-right: 0.4rem;\n  }\n  .container .section #social-buttons ion-label {\n    margin-left: 0.5rem;\n    font-size: 0.8rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .loading {\n    top: 46%;\n    left: 43%;\n  }\n\n  .container {\n    padding: 0.5rem;\n  }\n  .container .section header {\n    margin-left: 1.5rem;\n  }\n  .container .section header h1 {\n    font-size: 1.5rem;\n  }\n  .container .section header p {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n  }\n  .container .section header p ion-icon {\n    font-size: 1.5rem;\n    margin-right: 0.8rem;\n  }\n  .container .section #profile-section {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section #profile-section ion-item {\n    padding: 0;\n  }\n  .container .section #social-buttons ion-label {\n    margin-left: 0.5rem;\n    font-size: 0.8rem;\n  }\n  .container .section #social-links ion-item ion-icon {\n    left: 0%;\n    top: 30%;\n  }\n  .container .section #social-links ion-item #links {\n    margin-left: 2.3rem;\n  }\n  .container .section #submit {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNJO0VBQ0UsY0FBQTtBQUNOOztBQUFNO0VBQ0UsaUJBQUE7QUFFUjs7QUFDTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQVE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBRVY7O0FBR0k7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBRE47O0FBR007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFEUjs7QUFFUTtFQUNFLHFCQUFBO0FBQVY7O0FBS0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUhOOztBQUtNO0VBQ0UscUJBQUE7QUFIUjs7QUFLTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFIUjs7QUFRTTtFQWdCRSxhQUFBO0VBQ0Esa0JBQUE7QUFyQlI7O0FBS1E7RUFDRSxjQUFBO0FBSFY7O0FBS1E7RUFDRSxjQUFBO0FBSFY7O0FBS1E7RUFDRSxjQUFBO0FBSFY7O0FBS1E7RUFDRSxjQUFBO0FBSFY7O0FBS1E7RUFDRSxjQUFBO0FBSFY7O0FBT1E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBTFY7O0FBT1E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFMVjs7QUFVSTtFQUNFLGdCQUFBO0FBUk47O0FBU007RUFDRSxxQkFBQTtBQVBSOztBQWFBO0VBSVE7SUFDRSxpQkFBQTtFQWJSO0VBZ0JRO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQWRWO0VBbUJJO0lBQ0UscUNBQUE7RUFqQk47RUFtQlE7SUFDRSxxQkFBQTtFQWpCVjtFQXVCTTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUFyQlI7RUEyQlE7SUFDRSxRQUFBO0lBQ0EsUUFBQTtFQXpCVjtFQTJCUTtJQUNFLG1CQUFBO0VBekJWO0VBOEJJO0lBQ0UsZ0JBQUE7RUE1Qk47QUFDRjs7QUFpQ0E7RUFJUTtJQUNFLGVBQUE7RUFsQ1I7RUFxQ1E7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VBbkNWO0VBeUNNO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtFQXZDUjtBQUNGOztBQTZDQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFNBQUE7RUEzQ0Y7O0VBNkNBO0lBQ0UsZUFBQTtFQTFDRjtFQTRDSTtJQUNFLG1CQUFBO0VBMUNOO0VBMkNNO0lBQ0UsaUJBQUE7RUF6Q1I7RUEyQ007SUFDRSxlQUFBO0lBQ0Esb0JBQUE7RUF6Q1I7RUEwQ1E7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VBeENWO0VBNkNJO0lBQ0UscUNBQUE7RUEzQ047RUE0Q007SUFDRSxVQUFBO0VBMUNSO0VBK0NNO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtFQTdDUjtFQW1EUTtJQUNFLFFBQUE7SUFDQSxRQUFBO0VBakRWO0VBbURRO0lBQ0UsbUJBQUE7RUFqRFY7RUFzREk7SUFDRSxnQkFBQTtFQXBETjtBQUNGIiwiZmlsZSI6ImNyZWF0ZS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6bm9uZTtcclxuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiAjMDEzYTYzO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjojMDE0OTdjO1xyXG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjA1O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2FkaW5ne1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0OCU7XHJcbiAgdHJhbnNsYXRlOiAoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgei1pbmRleDogMyAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5zZWN0aW9ue1xyXG4gICAgei1pbmRleDogNCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG5cclxuICAgIGhlYWRlcntcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNwcm9maWxlLXNlY3Rpb257XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMXJlbTtcclxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVyZW07XHJcblxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzb2NpYWwtYnV0dG9uc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDE0OTdjO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3NvY2lhbC1saW5rc3tcclxuICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgI3R3aXR0ZXJ7XHJcbiAgICAgICAgICBjb2xvcjojMDBhY2VlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZmFjZWJvb2t7XHJcbiAgICAgICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3lvdXR1YmV7XHJcbiAgICAgICAgICBjb2xvcjogI2M0MzAyYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2xpbmtlZGlue1xyXG4gICAgICAgICAgY29sb3I6ICMwZTc2YTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNpbnN0YWdyYW17XHJcbiAgICAgICAgICBjb2xvcjogIzhhM2FiOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgIHRvcDogMzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbGlua3N7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdHtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMTQ5N2M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICBoZWFkZXJ7XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAjcHJvZmlsZS1zZWN0aW9ue1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzb2NpYWwtYnV0dG9uc3tcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAjc29jaWFsLWxpbmtze1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNsaW5rc3tcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzdWJtaXR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgaGVhZGVye1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzb2NpYWwtYnV0dG9uc3tcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgLmxvYWRpbmd7XHJcbiAgICB0b3A6IDQ2JTtcclxuICAgIGxlZnQ6IDQzJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICBoZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgI3Byb2ZpbGUtc2VjdGlvbntcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzb2NpYWwtYnV0dG9uc3tcclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAjc29jaWFsLWxpbmtze1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNsaW5rc3tcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzdWJtaXR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 2476:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/create-profile/create-profile.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\" text=\"Back\"\n      icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"loading\" *ngIf=\"!dataLoaded\">\n    <img src=\"../../../../assets/output-onlinegiftools.gif\">\n  </div>\n  <div class=\"container\">\n    <div class=\"section\" [formGroup]=\"profileForm\">\n      <header>\n        <h1>Create/Edit Your Profile</h1>\n        <p><ion-icon name=\"person\"></ion-icon>Let's get some information to make your profile stand out</p>\n      </header>\n\n      <section id=\"profile-section\">\n        <ion-item>\n          <ion-label position=\"stacked\">Give us an idea of where you are at in your career</ion-label>\n          <ion-select placeholder=\"Select Professional Status\" name=\"status\" formControlName=\"status\">\n            <ion-select-option value=\"Developer\">Developer</ion-select-option>\n            <ion-select-option value=\"Junior Developer\">Junior Developer</ion-select-option>\n            <ion-select-option value=\"Senior Developer\">Senior Developer</ion-select-option>\n            <ion-select-option value=\"Manager\">Manager</ion-select-option>\n            <ion-select-option value=\"Student or Learning\">Student or Learning</ion-select-option>\n            <ion-select-option value='Instructor or Teacher'>Instructor or Teacher</ion-select-option>\n            <ion-select-option value=\"Intern\">Intern</ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Could be your own company or one you work for</ion-label>\n          <ion-input type=\"text\" placeholder=\"Company\" name=\"company\" formControlName=\"company\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Could be your own or a company website</ion-label>\n          <ion-input type=\"text\" placeholder=\"Website\" name=\"website\" formControlName=\"website\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">City & state (eg. Indore, Madhya Pradesh)</ion-label>\n          <ion-input type=\"text\" placeholder=\"Location\" name=\"location\" formControlName=\"location\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Use comma separated values (eg. HTML,CSS,JavaScript,PHP)</ion-label>\n          <ion-input type=\"text\" placeholder=\"Skills\" name=\"skills\" formControlName=\"skills\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">If you want your latest repos and a Github link, include your username</ion-label>\n          <ion-input type=\"text\" placeholder=\"Github Username\" name=\"githubusername\" formControlName=\"githubusername\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\" >Tell us a little about yourself</ion-label>\n          <ion-textarea type=\"text\" placeholder=\"A short bio of yourself\" name=\"bio\" formControlName=\"bio\"></ion-textarea>\n        </ion-item>\n      </section>\n      \n      <section id=\"social-buttons\">\n        <ion-button (click)=\"show()\">Add Social Network Links</ion-button>\n        <ion-label><ion-text color=\"danger\">*</ion-text>\n          Optional</ion-label>\n      </section>\n\n      <section id=\"social-links\">\n        <ion-item>\n          <ion-icon id=\"twitter\" name=\"logo-twitter\"></ion-icon>\n          <div id=\"links\">\n            <ion-label position=\"floating\">Twitter URL</ion-label>\n            <ion-input type=\"text\" placeholder=\"https://twitter.com/\" name=\"twitter\" formControlName=\"twitter\"></ion-input>\n          </div>\n        </ion-item>\n        <ion-item>\n          <ion-icon id=\"facebook\" name=\"logo-facebook\"></ion-icon>\n          <div id=\"links\">\n            <ion-label position=\"floating\">Facebook URL</ion-label>\n            <ion-input type=\"text\" placeholder=\"https://facebook.com/\" name=\"facebook\" formControlName=\"facebook\"></ion-input>\n          </div>\n        </ion-item>\n        <ion-item>\n          <ion-icon id=\"youtube\" name=\"logo-youtube\"></ion-icon>\n          <div id=\"links\">\n            <ion-label position=\"floating\">Youtube URL</ion-label>\n            <ion-input type=\"text\" placeholder=\"https://youtube.com/channel/\" name=\"youtube\" formControlName=\"youtube\"></ion-input>\n          </div>\n        </ion-item>\n        <ion-item>\n          <ion-icon id=\"linkedin\" name=\"logo-linkedin\"></ion-icon>\n          <div id=\"links\">\n            <ion-label position=\"floating\">Linkedin URL</ion-label>\n            <ion-input type=\"text\" placeholder=\"https://linkedin.com/in/\" name=\"linkedin\" formControlName=\"linkedin\"></ion-input>\n          </div>\n        </ion-item>\n        <ion-item>\n          <ion-icon id=\"instagram\" name=\"logo-instagram\"></ion-icon>\n          <div id=\"links\">\n            <ion-label position=\"floating\">Instagram URL</ion-label>\n            <ion-input type=\"text\" placeholder=\"https://instagram.com/\" name=\"instagram\" formControlName=\"instagram\"></ion-input>\n          </div>\n        </ion-item>\n      </section>\n      <section id=\"submit\">\n        <ion-button (click)=\"onSubmit()\">Submit</ion-button>\n      </section>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_create-profile_create-profile_module_ts.js.map