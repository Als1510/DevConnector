(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_posts_posts_module_ts"],{

/***/ 5862:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/posts/posts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageRoutingModule": () => (/* binding */ PostsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page */ 7911);




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_0__.PostsPage
    }
];
let PostsPageRoutingModule = class PostsPageRoutingModule {
};
PostsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostsPageRoutingModule);



/***/ }),

/***/ 1598:
/*!***************************************************!*\
  !*** ./src/app/pages/users/posts/posts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageModule": () => (/* binding */ PostsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-routing.module */ 5862);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page */ 7911);







let PostsPageModule = class PostsPageModule {
};
PostsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostsPageRoutingModule
        ],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_1__.PostsPage]
    })
], PostsPageModule);



/***/ }),

/***/ 7911:
/*!*************************************************!*\
  !*** ./src/app/pages/users/posts/posts.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPage": () => (/* binding */ PostsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./posts.page.html */ 9656);
/* harmony import */ var _posts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page.scss */ 876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);








let PostsPage = class PostsPage {
    constructor(_router, _userService, _formBuilder, _tokenService) {
        this._router = _router;
        this._userService = _userService;
        this._formBuilder = _formBuilder;
        this._tokenService = _tokenService;
    }
    ngOnInit() {
        this.loading = true;
        this.user_id = this._tokenService.getId();
        this.postsForm = this._formBuilder.group({
            text: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        this.getAllPosts();
    }
    getAllPosts() {
        this._userService.getAllPosts().subscribe(data => {
            this.posts = data;
            this.posts.forEach(element => {
                let date = this.reverseString(element.date.split('T')[0]);
                element['date'] = date;
            });
            this.loading = false;
        });
    }
    openPost(val) {
        this._router.navigate([`/post/${val}`]);
    }
    onSubmit() {
        this.loading = true;
        this._userService.createPost(this.postsForm.get('text').value).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAllPosts();
            this.postsForm.reset();
        }));
    }
    deletePost(val) {
        this.loading = true;
        this._userService.deletePostById(val).subscribe(data => {
            this.getAllPosts();
        });
    }
    likePost(val) {
        this._userService.likePostBydId(val).subscribe(data => {
            this.getAllPosts();
        });
    }
    unlikePost(val) {
        this._userService.unlikePostBydId(val).subscribe(data => {
            this.getAllPosts();
        });
    }
    reverseString(str) {
        return str.split('-').reverse().join('-');
    }
};
PostsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__.TokenstorageService }
];
PostsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-posts',
        template: _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostsPage);



/***/ }),

/***/ 876:
/*!***************************************************!*\
  !*** ./src/app/pages/users/posts/posts.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n}\n\nion-content {\n  position: relative;\n}\n\n.loading {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 48%;\n  translate: -50%, -50%;\n}\n\n.container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.container .section {\n  max-width: 1100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container .section header {\n  width: 100%;\n  padding: 0 0.5rem;\n}\n\n.container .section header h1 {\n  display: flex;\n  align-items: center;\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.container .section header h1 ion-icon {\n  margin-right: 1rem;\n}\n\n.container .section header p {\n  margin: 0.5rem 0;\n  font-size: 1.5rem;\n}\n\n.container .section header ion-button {\n  margin: 1rem 0;\n  --background: #01497c;\n}\n\n.container .section #cards ion-card {\n  margin: 1.5rem 0;\n}\n\n.container .section #cards ion-card ion-card-content {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.container .section #cards ion-card ion-card-content #user {\n  display: grid;\n  align-items: center;\n}\n\n.container .section #cards ion-card ion-card-content #user img {\n  justify-self: center;\n  border-radius: 50%;\n  width: 80%;\n  padding: 0.5rem 0 1rem 0;\n}\n\n.container .section #cards ion-card ion-card-content #user h1 {\n  text-align: center;\n  font-size: 1.5rem;\n  color: #000;\n}\n\n.container .section #cards ion-card ion-card-content #comment {\n  display: grid;\n  align-items: center;\n  padding: 0.3rem 0.5rem;\n}\n\n.container .section #cards ion-card ion-card-content #comment h4 {\n  font-size: 1.1rem;\n}\n\n.container .section #cards ion-card ion-card-content #comment p {\n  margin-bottom: 0;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons ion-button {\n  margin: 0 0.4rem;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons #response {\n  --background: #002855;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons #response ion-icon {\n  margin-right: 0.3rem;\n  font-size: 1.5rem;\n  color: #ff0a54;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons #discuss {\n  --background:#0b090a;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons #discuss ion-icon {\n  margin-right: 0.1rem;\n  color: #fff;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons #discuss span {\n  margin-left: 0.3rem;\n}\n\n.container .section #cards ion-card ion-card-content #comment #buttons #delete {\n  --background:#d90429;\n}\n\n@media (max-width: 768px) {\n  .container .section header h1 {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n  }\n  .container .section header p {\n    font-size: 1.3rem;\n  }\n  .container .section #cards ion-card {\n    margin: 1.5rem 0;\n  }\n  .container .section #cards ion-card ion-card-content {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section #cards ion-card ion-card-content #user {\n    margin-bottom: 1.3rem;\n  }\n  .container .section #cards ion-card ion-card-content #user img {\n    width: 30%;\n  }\n  .container .section #cards ion-card ion-card-content #user h1 {\n    font-size: 1.5rem;\n  }\n  .container .section #cards ion-card ion-card-content #comment {\n    padding: 0.3rem 1rem;\n  }\n  .container .section #cards ion-card ion-card-content #comment h4 {\n    font-size: 1.1rem;\n    margin: 0.4rem 0;\n    text-align: center;\n  }\n  .container .section #cards ion-card ion-card-content #comment p {\n    text-align: center;\n    margin: 0.5rem 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .loading {\n    left: 43%;\n  }\n\n  .container {\n    padding: 0.5rem;\n  }\n  .container .section header {\n    margin-left: 4rem;\n  }\n  .container .section header h1 {\n    font-size: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .container .section header h1 ion-icon {\n    margin-right: 0.3rem;\n  }\n  .container .section header p {\n    margin: 0.5rem 0;\n    font-size: 1rem;\n  }\n  .container .section #cards ion-card {\n    margin: 1.5rem 0;\n  }\n  .container .section #cards ion-card ion-card-content #user {\n    margin-bottom: 1rem;\n  }\n  .container .section #cards ion-card ion-card-content #user img {\n    width: 40%;\n  }\n  .container .section #cards ion-card ion-card-content #user h1 {\n    font-size: 1.5rem;\n  }\n  .container .section #cards ion-card ion-card-content #comment {\n    margin: 0.3rem;\n  }\n  .container .section #cards ion-card ion-card-content #comment h4 {\n    font-size: 1rem;\n  }\n  .container .section #cards ion-card ion-card-content #comment #buttons ion-button {\n    margin: 0 0.2rem;\n    font-size: 0.8rem;\n  }\n  .container .section #cards ion-card ion-card-content #comment #buttons #response {\n    --background: #002855;\n  }\n  .container .section #cards ion-card ion-card-content #comment #buttons #response ion-icon {\n    margin-right: 0.2rem;\n    font-size: 1.2rem;\n    color: #ff0a54;\n  }\n  .container .section #cards ion-card ion-card-content #comment #buttons #discuss {\n    --background:#0b090a;\n  }\n  .container .section #cards ion-card ion-card-content #comment #buttons #discuss ion-icon {\n    margin-right: 0.1rem;\n    color: #fff;\n  }\n  .container .section #cards ion-card ion-card-content #comment #buttons #discuss span {\n    margin-left: 0.3rem;\n  }\n  .container .section #cards ion-card ion-card-content #comment #buttons #delete {\n    --background:#d90429;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDUjs7QUFBUTtFQUNFLGtCQUFBO0FBRVY7O0FBQ007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBQ007RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDUjs7QUFJTTtFQUNFLGdCQUFBO0FBRlI7O0FBR1E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFEVjs7QUFHVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURaOztBQUVZO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUFkOztBQUVZO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFBZDs7QUFJVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRlo7O0FBR1k7RUFDRSxpQkFBQTtBQURkOztBQUdZO0VBQ0UsZ0JBQUE7QUFEZDs7QUFHWTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFEZDs7QUFHYztFQUNFLGdCQUFBO0FBRGhCOztBQUljO0VBQ0UscUJBQUE7QUFGaEI7O0FBR2dCO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFEbEI7O0FBSWM7RUFDRSxvQkFBQTtBQUZoQjs7QUFHZ0I7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUFEbEI7O0FBR2dCO0VBQ0UsbUJBQUE7QUFEbEI7O0FBSWM7RUFDRSxvQkFBQTtBQUZoQjs7QUFZQTtFQUlRO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQVpSO0VBY007SUFDRSxpQkFBQTtFQVpSO0VBaUJNO0lBQ0UsZ0JBQUE7RUFmUjtFQWdCUTtJQUNFLHFDQUFBO0VBZFY7RUFlVTtJQUNFLHFCQUFBO0VBYlo7RUFjWTtJQUNFLFVBQUE7RUFaZDtFQWNZO0lBQ0UsaUJBQUE7RUFaZDtFQWdCVTtJQUNFLG9CQUFBO0VBZFo7RUFlWTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQWJkO0VBZVk7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VBYmQ7QUFDRjs7QUFzQkE7RUFDRTtJQUNFLFNBQUE7RUFwQkY7O0VBc0JBO0lBQ0UsZUFBQTtFQW5CRjtFQXFCSTtJQUNFLGlCQUFBO0VBbkJOO0VBb0JNO0lBQ0UsaUJBQUE7SUFDQSxxQkFBQTtFQWxCUjtFQW1CUTtJQUNFLG9CQUFBO0VBakJWO0VBb0JNO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBbEJSO0VBdUJNO0lBQ0UsZ0JBQUE7RUFyQlI7RUF1QlU7SUFDRSxtQkFBQTtFQXJCWjtFQXNCWTtJQUNFLFVBQUE7RUFwQmQ7RUFzQlk7SUFDRSxpQkFBQTtFQXBCZDtFQXdCVTtJQUNFLGNBQUE7RUF0Qlo7RUF1Qlk7SUFDRSxlQUFBO0VBckJkO0VBd0JjO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQXRCaEI7RUF5QmM7SUFDRSxxQkFBQTtFQXZCaEI7RUF3QmdCO0lBQ0Usb0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUF0QmxCO0VBeUJjO0lBQ0Usb0JBQUE7RUF2QmhCO0VBd0JnQjtJQUNFLG9CQUFBO0lBQ0EsV0FBQTtFQXRCbEI7RUF3QmdCO0lBQ0UsbUJBQUE7RUF0QmxCO0VBeUJjO0lBQ0Usb0JBQUE7RUF2QmhCO0FBQ0YiLCJmaWxlIjoicG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDpub25lO1xyXG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG9hZGluZ3tcclxuICB6LWluZGV4OiAxMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNDglO1xyXG4gIHRyYW5zbGF0ZTogKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIC5zZWN0aW9ue1xyXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuXHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAxNDk3YztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNjYXJkc3tcclxuICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcclxuXHJcbiAgICAgICAgICAjdXNlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwIDFyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAjY29tbWVudHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNidXR0b25ze1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNHJlbTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNyZXNwb25zZXtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwMjg1NTtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZjBhNTQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNkaXNjdXNze1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiMwYjA5MGE7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZGVsZXRle1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiNkOTA0Mjk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXJ7ICAgIFxyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgIGhlYWRlcntcclxuICAgICAgICBoMXtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjY2FyZHN7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgICAgICAgICAgI3VzZXJ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjY29tbWVudHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxuICAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjRyZW0gMDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5sb2FkaW5ne1xyXG4gICAgbGVmdDogNDMlO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgLnNlY3Rpb257XHJcbiAgICAgIGhlYWRlcntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHJlbTtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgI2NhcmRze1xyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICN1c2Vye1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgI2NvbW1lbnR7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNidXR0b25ze1xyXG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAjcmVzcG9uc2V7XHJcbiAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzAwMjg1NTtcclxuICAgICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6I2ZmMGE1NDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2Rpc2N1c3N7XHJcbiAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDojMGIwOTBhO1xyXG4gICAgICAgICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2RlbGV0ZXtcclxuICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiNkOTA0Mjk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAgXHJcbn0iXX0= */");

/***/ }),

/***/ 9656:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/posts/posts.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Posts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"loading\" *ngIf=\"loading\">\n    <img src=\"../../../../assets/output-onlinegiftools.gif\">\n  </div>\n  <div class=\"container\" *ngIf=\"!loading\">\n    <div class=\"section\">\n      <header>\n        <h1><ion-icon name=\"people-outline\"></ion-icon>Welcome to the community!</h1>\n        <p>Say Something....</p>\n        <ion-item [formGroup]=\"postsForm\">\n          <ion-textarea placeholder=\"Create a post\" name=\"text\" formControlName=\"text\"></ion-textarea>\n        </ion-item>\n        <ion-button (click)=\"onSubmit()\">Submit</ion-button>\n      </header>\n\n      <section id=\"cards\">\n        <ion-card *ngFor=\"let post of posts\">\n          <ion-card-content>\n            <div id=\"user\">\n              <img [src]=\"post.avatar\">\n              <h1>{{post.name}}</h1>\n            </div>\n            <div id=\"comment\">\n              <h4>{{post.text}}</h4>\n              <p>Posted on {{post.date}}</p>\n              <div id=\"buttons\">\n                <ion-button id=\"response\" (click)=\"likePost(post._id)\"><ion-icon name=\"heart\"></ion-icon>{{post.likes.length}}</ion-button>\n                <ion-button id=\"response\" (click)=\"unlikePost(post._id)\"><ion-icon name=\"heart-dislike\"></ion-icon></ion-button>\n                <ion-button id=\"discuss\" (click)=\"openPost(post._id)\"><ion-icon name=\"chatbubbles\"></ion-icon>Discussion <span>{{post.comments.length}}</span></ion-button>\n                <ion-button id=\"delete\" *ngIf=\"user_id === post.user\" (click)=\"deletePost(post._id)\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </section>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_posts_posts_module_ts.js.map