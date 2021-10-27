(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_dashboard_dashboard_module_ts"],{

/***/ 9309:
/*!*******************************************************************!*\
  !*** ./src/app/pages/users/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 2090);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 3121:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 9309);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 2090);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 2090:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/dashboard/dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 5288);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);








let DashboardPage = class DashboardPage {
    constructor(_userService, _router, _alertController, _tokenService) {
        this._userService = _userService;
        this._router = _router;
        this._alertController = _alertController;
        this._tokenService = _tokenService;
        this.educationCredentials = [];
        this.experienceCredentials = [];
        this.profileValue = 0;
    }
    ngOnInit() {
        this.getProfile();
        this.username = this._tokenService.getName();
        setInterval(() => {
            this.getProfile();
        }, 7000);
    }
    calculateProfile(profile) {
        this.profileValue = 0;
        if (profile['status']) {
            this.profileValue += 0.1;
        }
        if (profile['bio']) {
            this.profileValue += 0.1;
        }
        if (profile['education'].length > 0) {
            this.profileValue += 0.2;
        }
        if (profile['experience'].length > 0) {
            this.profileValue += 0.2;
        }
        if (profile['skills'].length > 0) {
            this.profileValue += 0.2;
        }
        if (profile['githubusername']) {
            this.profileValue += 0.1;
        }
        if (profile['location']) {
            this.profileValue += 0.1;
        }
        if (this.profileValue === 1) {
            document.getElementById('profile-message').style.display = 'none';
        }
        else {
            document.getElementById('profile-message').style.display = '';
        }
    }
    getProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this._userService.getLoggedInProfile().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.calculateProfile(data);
                this.educationCredentials = data['education'];
                this.experienceCredentials = data['experience'];
                this.calculateYear();
            }));
        });
    }
    deleteEducation(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this._userService.deleteEducation(id).subscribe();
            yield this.getProfile();
        });
    }
    deleteExperience(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this._userService.deleteExperience(id).subscribe();
            yield this.getProfile();
        });
    }
    presentAlert(msg, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: `Dear ${name},`,
                message: `${msg}`,
            });
            yield alert.present();
            setTimeout(() => {
                alert.dismiss();
                this._router.navigate(['/login']);
            }, 3000);
        });
    }
    deleteAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: 'Delete account',
                message: 'Are you sure you want to delete your account? This will permanently erase your account.',
                buttons: [
                    {
                        text: 'Cancel',
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this._userService.deleteAccount().subscribe(data => {
                                this.presentAlert(data['msg'], data['name']);
                                this._tokenService.logout();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    logout() {
        this._tokenService.logout();
    }
    reverseString(str) {
        return str
            .split('-')
            .reverse()
            .join('-');
    }
    calculateYear() {
        this.educationCredentials.forEach(element => {
            let fromDate = element.from.split('T')[0];
            fromDate = this.reverseString(fromDate);
            if (element.current == false) {
                let toDate = element.to.split('T')[0];
                toDate = this.reverseString(toDate);
                element['year'] = fromDate + ' - ' + toDate;
            }
            else {
                element['year'] = fromDate + ' - Current';
            }
        });
        this.experienceCredentials.forEach(element => {
            let fromDate = element.from.split('T')[0];
            fromDate = this.reverseString(fromDate);
            if (element.current == false) {
                let toDate = element.to.split('T')[0];
                toDate = this.reverseString(toDate);
                element['year'] = fromDate + ' - ' + toDate;
            }
            else {
                element['year'] = fromDate + ' - Current';
            }
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenstorageService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 6466:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/dashboard/dashboard.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css2?family=Recursive:wght@700&family=Signika:wght@500;600&display=swap\");\n#logout {\n  --background: #01497c;\n  margin-right: 0.5rem;\n}\n#logout ion-icon {\n  font-size: 1.3rem;\n}\n.container {\n  position: relative;\n  width: 100%;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.container h1 {\n  font-size: 3rem;\n  font-weight: 1000;\n  margin-top: 2rem;\n  margin-left: 2rem;\n  color: #012a4a;\n  font-family: \"Recursive\", sans-serif;\n}\n.container #profile-message {\n  position: absolute;\n  right: 2%;\n  top: 3%;\n}\n.container #profile-message ion-progress-bar {\n  margin-top: 0.5rem;\n  padding: 0.2rem;\n  border-radius: 5px;\n}\n.container .content-button {\n  display: flex;\n  flex-direction: row;\n  margin: 2rem;\n}\n.container .content-button ion-button {\n  --background: #01497c;\n}\n.container .content-button ion-button a {\n  color: #fff;\n  text-decoration: none;\n}\n.container .card {\n  width: 90%;\n  align-self: center;\n  display: grid;\n}\n.container .card ion-card {\n  padding: 0.5rem;\n}\n.container .card ion-card ion-card-title {\n  font-size: 1.3rem;\n  margin: 1rem;\n  font-weight: 700;\n}\n.container .card ion-card ion-card-content {\n  display: grid;\n  grid-gap: 0.5rem;\n}\n.container .card ion-card ion-card-content .header {\n  display: grid;\n  color: #fff;\n  text-align: center;\n  background: #1d2d44;\n  font-size: 1.1rem;\n  border-radius: 10px;\n  font-weight: 500;\n  grid-template-columns: 1fr 1fr 1.5fr;\n  padding: 0 3rem 0 1rem;\n  align-items: center;\n  justify-content: space-between;\n}\n.container .card ion-card ion-card-content .content {\n  position: relative;\n  display: grid;\n  color: #fff;\n  text-align: center;\n  background: #748cab;\n  font-size: 1.1rem;\n  border-radius: 10px;\n  grid-template-columns: 1fr 1fr 1.5fr;\n  padding: 0 3rem 0 1rem;\n  align-items: center;\n  justify-content: space-between;\n}\n.container .card ion-card ion-card-content .content ion-icon {\n  position: absolute;\n  right: 15px;\n  color: #fff;\n}\n.container .card #delete {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 1rem 0 1rem 0.8rem;\n}\n.container .card #delete ion-icon {\n  margin-right: 0.5rem;\n}\n@media (max-width: 768px) {\n  .container h1 {\n    font-size: 2.5rem;\n    margin-left: 1rem;\n  }\n  .container .content-button {\n    display: flex;\n    margin: 1rem;\n  }\n  .container .content-button ion-button a {\n    font-size: 0.8rem;\n  }\n  .container .card {\n    width: 95%;\n    padding: 0.3rem;\n  }\n  .container .card ion-card ion-card-title {\n    font-size: 1.3rem;\n    margin: 0.5rem;\n  }\n  .container .card ion-card ion-card-content {\n    grid-gap: 0.4rem;\n    padding: 0.5rem;\n  }\n  .container .card ion-card ion-card-content .header {\n    font-size: 1rem;\n    font-weight: 400;\n    grid-template-columns: 1fr 1fr 1.5fr;\n    padding: 0.3rem 1.7rem 0 0.5rem;\n  }\n  .container .card ion-card ion-card-content .content {\n    font-size: 1rem;\n    grid-template-columns: 1fr 1fr 1.5fr;\n    padding: 0.3rem 1.7rem 0 0.5rem;\n  }\n  .container .card #delete {\n    margin-left: 0.7rem;\n    margin-top: 1rem;\n  }\n  .container .card #delete ion-icon {\n    margin-right: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .container {\n    align-items: center;\n  }\n  .container h1 {\n    font-size: 2rem;\n    margin-left: 1rem;\n  }\n  .container #profile-message {\n    position: relative;\n    width: 90%;\n  }\n  .container .content-button {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem;\n  }\n  .container .content-button ion-button {\n    width: -moz-fit-content;\n    width: fit-content;\n    align-self: center;\n  }\n  .container .content-button ion-button a {\n    font-size: 0.7rem;\n  }\n  .container .card {\n    width: 97%;\n  }\n  .container .card ion-card {\n    padding: 0.3rem;\n  }\n  .container .card ion-card ion-card-title {\n    font-size: 1rem;\n    margin: 0.5rem;\n  }\n  .container .card ion-card ion-card-content {\n    grid-gap: 0.4rem;\n    padding: 0.3rem;\n  }\n  .container .card ion-card ion-card-content .header {\n    font-size: 0.9rem;\n    font-weight: 550;\n    grid-gap: 0.2rem;\n    grid-template-columns: 1fr 1fr;\n    padding: 0.2rem 1.7rem 0 0.5rem;\n  }\n  .container .card ion-card ion-card-content .header .year {\n    display: none;\n  }\n  .container .card ion-card ion-card-content .content {\n    font-size: 0.9rem;\n    grid-gap: 0.2rem;\n    grid-template-columns: 1fr 1fr;\n    padding: 0.2rem 1.7rem 0 0.5rem;\n  }\n  .container .card ion-card ion-card-content .content .year {\n    display: none;\n  }\n  .container .card ion-card ion-card-content .content ion-icon {\n    font-size: 0.9rem;\n  }\n  .container .card #delete {\n    margin-left: 0.8rem;\n    margin-top: 1rem;\n    justify-self: center;\n  }\n  .container .card #delete P {\n    font-size: 0.8rem;\n  }\n  .container .card #delete ion-icon {\n    margin-right: 0.5rem;\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QkFBQTtFQXJDWjtFQTJDSTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQXpDTjtFQTJDTTtJQUNFLGlCQUFBO0VBekNSO0VBNENPO0lBQ0Msb0JBQUE7SUFDQSxpQkFBQTtFQTFDUjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SZWN1cnNpdmU6d2dodEA3MDAmZmFtaWx5PVNpZ25pa2E6d2dodEA1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbiNsb2dvdXR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDE0OTdjO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgY29sb3I6ICMwMTJhNGE7XHJcbiAgICBmb250LWZhbWlseTogJ1JlY3Vyc2l2ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAjcHJvZmlsZS1tZXNzYWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIlO1xyXG4gICAgdG9wOiAzJTtcclxuICAgIGlvbi1wcm9ncmVzcy1iYXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogMnJlbTtcclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMwMTQ5N2M7XHJcblxyXG4gICAgICBhe1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgcGFkZGluZzogMC41cmVtOyBcclxuICAgICAgXHJcbiAgICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDAuNXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFkMmQ0NDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMS41ZnI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDNyZW0gMCAxcmVtO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzQ4Y2FiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDEuNWZyO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzcmVtIDAgMXJlbTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgI2RlbGV0ZXtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDAuOHJlbTtcclxuICAgICAgXHJcbiAgICAgICBpb24taWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtYnV0dG9ue1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgXHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBwYWRkaW5nOiAwLjNyZW07IFxyXG4gICAgICBcclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDAuNHJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxLjVmcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4zcmVtIDEuN3JlbSAwIDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDEuNWZyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMS43cmVtIDAgMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAjZGVsZXRle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2ZpbGUtbWVzc2FnZXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVudC1idXR0b257XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICBcclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHtcclxuICAgICAgd2lkdGg6IDk3JTtcclxuXHJcbiAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbTsgXHJcblxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICBncmlkLWdhcDogMC40cmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDAuMnJlbTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMS43cmVtIDAgMC41cmVtO1xyXG4gICAgICAgICAgICAueWVhciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAwLjJyZW07XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDEuN3JlbSAwIDAuNXJlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC55ZWFyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgI2RlbGV0ZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIFB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 5288:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/dashboard/dashboard.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>DevConnector</ion-title>\n    <ion-button id=\"logout\" slot=\"end\" (click)=\"logout()\" routerLink=\"/login\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <h1>\n      Welcome, {{username}}\n    </h1>\n\n    <div class=\"content-button\">\n      <ion-button>\n        <a routerLink=\"/create-profile\">Edit Profile</a>\n      </ion-button>\n      <ion-button>\n        <a routerLink=\"/experience\">Add Experience</a>\n      </ion-button>\n      <ion-button>\n        <a routerLink=\"/education\">Add Education</a>\n      </ion-button>\n    </div>\n\n    <div id=\"profile-message\">\n      <ion-card>\n        <ion-card-content>\n          <h2>Complete Your Profile</h2>\n          <ion-progress-bar [value]=\"profileValue\"></ion-progress-bar>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div class=\"card\">\n      <ion-card *ngIf=\"experienceCredentials.length > 0\">\n        <ion-card-title>Experience Credentials</ion-card-title>\n\n        <ion-card-content>\n          <ion-list class=\"header\">\n            <ion-label>Company</ion-label>\n            <ion-label>Title</ion-label>\n            <ion-label class=\"year\">Years</ion-label>\n          </ion-list>\n          \n          <ion-list class=\"content\" *ngFor=\"let experience of experienceCredentials\">\n            <ion-label>{{experience.company}}</ion-label>\n            <ion-label>{{experience.title}}</ion-label>\n            <ion-label class=\"year\">{{experience.year}}</ion-label>\n            <ion-icon name=\"trash-outline\" (click)=\"deleteExperience(experience._id)\"></ion-icon>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"educationCredentials.length > 0\">\n        <ion-card-title>Education Credentials</ion-card-title>\n        \n        <ion-card-content>\n          <ion-list class=\"header\">\n            <ion-label>School</ion-label>\n            <ion-label>Degree</ion-label>\n            <ion-label class=\"year\">Years</ion-label>\n          </ion-list>\n\n          <ion-list class=\"content\" *ngFor=\"let education of educationCredentials\">\n            <ion-label>{{education.school}}</ion-label>\n            <ion-label>{{education.degree}}</ion-label>\n            <ion-label class=\"year\">{{education.year}}</ion-label>\n            <ion-icon name=\"trash-outline\" (click)=\"deleteEducation(education._id)\"></ion-icon>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n      \n      <ion-button color=\"danger\" id=\"delete\" (click)=\"deleteAccount()\">\n        <ion-icon name=\"person\"></ion-icon>\n        <p>Delete My Account</p>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_dashboard_dashboard_module_ts.js.map