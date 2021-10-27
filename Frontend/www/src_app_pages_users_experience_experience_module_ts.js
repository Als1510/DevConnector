(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_experience_experience_module_ts"],{

/***/ 7088:
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/experience/experience-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencePageRoutingModule": () => (/* binding */ ExperiencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _experience_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience.page */ 2213);




const routes = [
    {
        path: '',
        component: _experience_page__WEBPACK_IMPORTED_MODULE_0__.ExperiencePage
    }
];
let ExperiencePageRoutingModule = class ExperiencePageRoutingModule {
};
ExperiencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExperiencePageRoutingModule);



/***/ }),

/***/ 3175:
/*!*************************************************************!*\
  !*** ./src/app/pages/users/experience/experience.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencePageModule": () => (/* binding */ ExperiencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-routing.module */ 7088);
/* harmony import */ var _experience_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.page */ 2213);







let ExperiencePageModule = class ExperiencePageModule {
};
ExperiencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _experience_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperiencePageRoutingModule
        ],
        declarations: [_experience_page__WEBPACK_IMPORTED_MODULE_1__.ExperiencePage]
    })
], ExperiencePageModule);



/***/ }),

/***/ 2213:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/experience/experience.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperiencePage": () => (/* binding */ ExperiencePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_experience_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./experience.page.html */ 7645);
/* harmony import */ var _experience_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.page.scss */ 6459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);








let ExperiencePage = class ExperiencePage {
    constructor(_router, _formBuilder, _userService, _alertService) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._userService = _userService;
        this._alertService = _alertService;
        this.check = false;
    }
    ngOnInit() {
        this.loading = false;
        this.experienceForm = this._formBuilder.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            company: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            from: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            to: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            current: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    checked() {
        this.check = !this.check;
        this.experienceForm.get('current').setValue(this.check);
    }
    onSubmit() {
        this.loading = true;
        let title = this.experienceForm.get('title').value;
        let company = this.experienceForm.get('company').value;
        let location = this.experienceForm.get('location').value;
        let from = this.experienceForm.get('from').value;
        let to = this.experienceForm.get('to').value;
        let current = this.experienceForm.get('current').value;
        let description = this.experienceForm.get('description').value;
        let start = new Date(from);
        let end = new Date(to);
        if (start > end) {
            this.loading = false;
            return this._alertService.presentToast("Selected Date is not valid", "danger");
        }
        this._userService.addUpdateExperience(title, company, location, from, to, current, description).subscribe(data => {
            this._alertService.presentToast(data['msg'], 'success');
            this.experienceForm.reset();
            this._router.navigate(['dashboard']);
            this.loading = false;
        });
        setTimeout(() => {
            this.loading = false;
        }, 7000);
    }
};
ExperiencePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
ExperiencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-experience',
        template: _raw_loader_experience_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_experience_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExperiencePage);



/***/ }),

/***/ 6459:
/*!*************************************************************!*\
  !*** ./src/app/pages/users/experience/experience.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-back-button {\n  --color: #013a63;\n  --background-hover:#01497c;\n  --background-hover-opacity: 0.05;\n}\n\nion-item {\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n}\n\nion-content {\n  position: relative;\n}\n\n.loading {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 48%;\n  translate: -50%, -50%;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n\n.container .section {\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 1rem;\n}\n\n.container .section header {\n  margin: 1rem 0;\n}\n\n.container .section header h1 {\n  font-size: 2.5rem;\n}\n\n.container .section header p {\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n\n.container .section header p ion-icon {\n  font-size: 1.5rem;\n  margin-right: 0.8rem;\n}\n\n.container .section #experience-section {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-row-gap: 1rem;\n  grid-column-gap: 1.5rem;\n}\n\n.container .section #experience-section ion-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.container .section #experience-section ion-item ion-label {\n  margin-bottom: 0.5rem;\n}\n\n.container .section #experience-section ion-item ion-checkbox {\n  margin-right: 1rem;\n}\n\n.container .section #experience-section ion-item ion-datetime {\n  padding: 0;\n}\n\n.container .section #submit {\n  margin-top: 1rem;\n}\n\n.container .section #submit ion-button {\n  --background: #01497c;\n}\n\n@media (max-width: 768px) {\n  .container .section {\n    width: 100%;\n  }\n  .container .section header h1 {\n    font-size: 2rem;\n  }\n  .container .section header p ion-icon {\n    font-size: 1.3rem;\n    margin-right: 0.4rem;\n  }\n  .container .section #experience-section {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section #experience-section ion-item {\n    padding: 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .loading {\n    left: 43%;\n  }\n\n  .container {\n    padding: 1rem;\n  }\n  .container .section header {\n    margin-left: 1.5rem;\n  }\n  .container .section header h1 {\n    font-size: 1.5rem;\n  }\n  .container .section header p {\n    font-size: 1rem;\n    margin-right: 0.5rem;\n  }\n  .container .section header p ion-icon {\n    font-size: 1.5rem;\n    margin-right: 0.8rem;\n  }\n  .container .section #submit {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNJO0VBQ0UsY0FBQTtBQUNOOztBQUFNO0VBQ0UsaUJBQUE7QUFFUjs7QUFDTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQVE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBRVY7O0FBR0k7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBRE47O0FBR007RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURSOztBQUVRO0VBQ0UscUJBQUE7QUFBVjs7QUFFUTtFQUNFLGtCQUFBO0FBQVY7O0FBRVE7RUFDRSxVQUFBO0FBQVY7O0FBS0k7RUFDRSxnQkFBQTtBQUhOOztBQUlNO0VBQ0UscUJBQUE7QUFGUjs7QUFTQTtFQUVJO0lBQ0UsV0FBQTtFQVBKO0VBU007SUFDRSxlQUFBO0VBUFI7RUFVUTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7RUFSVjtFQWFJO0lBQ0UscUNBQUE7RUFYTjtFQVlNO0lBQ0UsVUFBQTtFQVZSO0FBQ0Y7O0FBZ0JBO0VBQ0U7SUFDRSxTQUFBO0VBZEY7O0VBZ0JBO0lBQ0UsYUFBQTtFQWJGO0VBZUk7SUFDRSxtQkFBQTtFQWJOO0VBY007SUFDRSxpQkFBQTtFQVpSO0VBY007SUFDRSxlQUFBO0lBQ0Esb0JBQUE7RUFaUjtFQWFRO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQVhWO0VBZ0JJO0lBQ0UsZ0JBQUE7RUFkTjtBQUNGIiwiZmlsZSI6ImV4cGVyaWVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9ue1xyXG4gIC0tY29sb3I6ICMwMTNhNjM7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiMwMTQ5N2M7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDAuMDU7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6bm9uZTtcclxuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxvYWRpbmd7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDQ4JTtcclxuICB0cmFuc2xhdGU6ICgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuc2VjdGlvbntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG5cclxuICAgIGhlYWRlcntcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNleHBlcmllbmNlLXNlY3Rpb257XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgIGdyaWQtcm93LWdhcDogMXJlbTtcclxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVyZW07XHJcblxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNoZWNrYm94e1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tZGF0ZXRpbWV7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDE0OTdjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlYWRlcntcclxuICAgICAgICBoMXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAjZXhwZXJpZW5jZS1zZWN0aW9ue1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDgwcHgpe1xyXG4gIC5sb2FkaW5ne1xyXG4gICAgbGVmdDogNDMlO1xyXG4gIH0gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgIGhlYWRlcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAjc3VibWl0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 7645:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/experience/experience.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\" text=\"Back\"\n      icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"loading\" *ngIf=\"loading\">\n    <img src=\"../../../../assets/output-onlinegiftools.gif\">\n  </div>\n  <div class=\"container\">\n    <div class=\"section\" [formGroup]=\"experienceForm\">\n      <header>\n        <h1>Add An Experience</h1>\n        <p><ion-icon name=\"git-branch-outline\"></ion-icon>Add any developer/programming positions that you have had in the past</p>\n      </header>\n\n      <section id=\"experience-section\">\n        <ion-item>\n          <ion-label position=\"floating\">Job Title</ion-label>\n          <ion-input type=\"text\"name=\"title\" formControlName=\"title\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Company</ion-label>\n          <ion-input type=\"text\" name=\"company\" formControlName=\"company\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Location</ion-label>\n          <ion-input type=\"text\" name=\"location\" formControlName=\"location\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">From Date</ion-label>\n          <ion-datetime displayFormat=\"DD MMM YYYY\" name=\"from\" formControlName=\"from\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label id=\"checkbox-label\">Current</ion-label>\n          <ion-checkbox (click)=\"checked()\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">To Date</ion-label>\n          <ion-datetime displayFormat=\"DD MMM YYYY\" name=\"to\" formControlName=\"to\" max=\"2100\"></ion-datetime>\n        </ion-item>\n      </section>\n      <ion-item>\n        <ion-label position=\"floating\">Job Description</ion-label>\n        <ion-textarea type=\"text\" name=\"description\" formControlName=\"description\"></ion-textarea>\n      </ion-item>\n\n      <section id=\"submit\">\n        <ion-button (click)=\"onSubmit()\">Submit</ion-button>\n      </section>\n    </div>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_experience_experience_module_ts.js.map