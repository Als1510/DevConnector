(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_education_education_module_ts"],{

/***/ 8309:
/*!*******************************************************************!*\
  !*** ./src/app/pages/users/education/education-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationPageRoutingModule": () => (/* binding */ EducationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _education_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education.page */ 5954);




const routes = [
    {
        path: '',
        component: _education_page__WEBPACK_IMPORTED_MODULE_0__.EducationPage
    }
];
let EducationPageRoutingModule = class EducationPageRoutingModule {
};
EducationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EducationPageRoutingModule);



/***/ }),

/***/ 7395:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/education/education.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationPageModule": () => (/* binding */ EducationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _education_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education-routing.module */ 8309);
/* harmony import */ var _education_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education.page */ 5954);







let EducationPageModule = class EducationPageModule {
};
EducationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _education_routing_module__WEBPACK_IMPORTED_MODULE_0__.EducationPageRoutingModule
        ],
        declarations: [_education_page__WEBPACK_IMPORTED_MODULE_1__.EducationPage]
    })
], EducationPageModule);



/***/ }),

/***/ 5954:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/education/education.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationPage": () => (/* binding */ EducationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_education_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./education.page.html */ 7898);
/* harmony import */ var _education_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education.page.scss */ 8283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);








let EducationPage = class EducationPage {
    constructor(_router, _formBuilder, _userService, _alertService) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._userService = _userService;
        this._alertService = _alertService;
        this.check = false;
    }
    ngOnInit() {
        this.loading = false;
        this.educationForm = this._formBuilder.group({
            school: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            degree: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            fieldofstudy: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            from: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            to: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            current: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    checked() {
        this.check = !this.check;
        this.educationForm.get('current').setValue(this.check);
    }
    onSubmit() {
        this.loading = true;
        let school = this.educationForm.get('school').value;
        let degree = this.educationForm.get('degree').value;
        let fieldofstudy = this.educationForm.get('fieldofstudy').value;
        let from = this.educationForm.get('from').value;
        let to = this.educationForm.get('to').value;
        let current = this.educationForm.get('current').value;
        let description = this.educationForm.get('description').value;
        let start = new Date(from);
        let end = new Date(to);
        if (start > end) {
            this.loading = false;
            return this._alertService.presentToast("Selected Date is not valid", "danger");
        }
        this._userService.addUpdateEducation(school, degree, fieldofstudy, from, to, current, description).subscribe(data => {
            this._alertService.presentToast(data['msg'], 'success');
            this.educationForm.reset();
            this.loading = false;
            this._router.navigate(['dashboard']);
        });
        setTimeout(() => {
            this.loading = false;
        }, 7000);
    }
};
EducationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
EducationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-education',
        template: _raw_loader_education_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_education_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EducationPage);



/***/ }),

/***/ 8283:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/education/education.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-back-button {\n  --color: #013a63;\n  --background-hover:#01497c;\n  --background-hover-opacity: 0.05;\n}\n\nion-item {\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n}\n\nion-content {\n  position: relative;\n}\n\n.loading {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 48%;\n  translate: -50%, -50%;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n\n.container .section {\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 1rem;\n}\n\n.container .section header {\n  margin: 1rem 0;\n}\n\n.container .section header h1 {\n  font-size: 2.5rem;\n}\n\n.container .section header p {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n\n.container .section header p ion-icon {\n  font-size: 1.5rem;\n  margin-right: 0.8rem;\n}\n\n.container .section #education-section {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1.5rem;\n}\n\n.container .section #education-section ion-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.container .section #education-section ion-item ion-label {\n  margin-bottom: 0.5rem;\n}\n\n.container .section #education-section ion-item ion-checkbox {\n  margin-right: 1rem;\n}\n\n.container .section #education-section ion-item ion-datetime {\n  padding: 0;\n}\n\n.container .section #submit {\n  margin-top: 1rem;\n}\n\n.container .section #submit ion-button {\n  --background: #01497c;\n}\n\n@media (max-width: 768px) {\n  .container .section {\n    width: 100%;\n  }\n  .container .section header h1 {\n    font-size: 2rem;\n  }\n  .container .section header p ion-icon {\n    font-size: 1.3rem;\n    margin-right: 0.4rem;\n  }\n  .container .section #education-section {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section #education-section ion-item {\n    padding: 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .loading {\n    left: 43%;\n  }\n\n  .container {\n    padding: 1rem;\n  }\n  .container .section header {\n    margin-left: 1.5rem;\n  }\n  .container .section header h1 {\n    font-size: 1.5rem;\n  }\n  .container .section header p {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n  }\n  .container .section header p ion-icon {\n    font-size: 1.5rem;\n    margin-right: 0.8rem;\n  }\n  .container .section #submit {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0k7RUFDRSxjQUFBO0FBQ047O0FBQU07RUFDRSxpQkFBQTtBQUVSOztBQUNNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFBUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFFVjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFETjs7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRFI7O0FBRVE7RUFDRSxxQkFBQTtBQUFWOztBQUVRO0VBQ0Usa0JBQUE7QUFBVjs7QUFFUTtFQUNFLFVBQUE7QUFBVjs7QUFLSTtFQUNFLGdCQUFBO0FBSE47O0FBSU07RUFDRSxxQkFBQTtBQUZSOztBQVNBO0VBRUk7SUFDRSxXQUFBO0VBUEo7RUFTTTtJQUNFLGVBQUE7RUFQUjtFQVVRO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQVJWO0VBYUk7SUFDRSxxQ0FBQTtFQVhOO0VBWU07SUFDRSxVQUFBO0VBVlI7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLFNBQUE7RUFkRjs7RUFnQkE7SUFDRSxhQUFBO0VBYkY7RUFlSTtJQUNFLG1CQUFBO0VBYk47RUFjTTtJQUNFLGlCQUFBO0VBWlI7RUFjTTtJQUNFLGVBQUE7SUFDQSxvQkFBQTtFQVpSO0VBYVE7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VBWFY7RUFnQkk7SUFDRSxnQkFBQTtFQWROO0FBQ0YiLCJmaWxlIjoiZWR1Y2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiAjMDEzYTYzO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjojMDE0OTdjO1xyXG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAwLjA1O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOm5vbmU7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2FkaW5ne1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0OCU7XHJcbiAgdHJhbnNsYXRlOiAoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnNlY3Rpb257XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxuXHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjZWR1Y2F0aW9uLXNlY3Rpb257XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMXJlbTtcclxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVyZW07XHJcblxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNoZWNrYm94e1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tZGF0ZXRpbWV7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDE0OTdjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlYWRlcntcclxuICAgICAgICBoMXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAjZWR1Y2F0aW9uLXNlY3Rpb257XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgLmxvYWRpbmd7XHJcbiAgICBsZWZ0OiA0MyU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgIGhlYWRlcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAjc3VibWl0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 7898:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/education/education.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\" text=\"Back\"\n      icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"loading\" *ngIf=\"loading\">\n    <img src=\"../../../../assets/output-onlinegiftools.gif\">\n  </div>\n  <div class=\"container\">\n    <div class=\"section\" [formGroup]=\"educationForm\">\n      <header>\n        <h1>Add An education</h1>\n        <p><ion-icon name=\"school-outline\"></ion-icon>Add any school, bootcamp, etc that you have attended</p>\n      </header>\n\n      <section id=\"education-section\">\n        <ion-item>\n          <ion-label position=\"floating\">School or Bootcamp</ion-label>\n          <ion-input type=\"text\"name=\"school\" formControlName=\"school\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Degree or Certificate</ion-label>\n          <ion-input type=\"text\" name=\"degree\" formControlName=\"degree\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Field Of Study</ion-label>\n          <ion-input type=\"text\" name=\"fieldofstudy\" formControlName=\"fieldofstudy\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">From Date</ion-label>\n          <ion-datetime displayFormat=\"DD MMM YYYY\" name=\"from\" formControlName=\"from\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label id=\"checkbox-label\">Current</ion-label>\n          <ion-checkbox (click)=\"checked()\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">To Date</ion-label>\n          <ion-datetime displayFormat=\"DD MMM YYYY\" name=\"to\" formControlName=\"to\" max=\"2100\"></ion-datetime>\n        </ion-item>\n      </section>\n      <ion-item>\n        <ion-label position=\"floating\">Program Description</ion-label>\n        <ion-textarea type=\"text\" name=\"description\" formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <section id=\"submit\">\n        <ion-button (click)=\"onSubmit()\">Submit</ion-button>\n      </section>\n    </div>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_education_education_module_ts.js.map