(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_post_post_module_ts"],{

/***/ 925:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/post/post-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageRoutingModule": () => (/* binding */ PostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.page */ 961);




const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_0__.PostPage
    }
];
let PostPageRoutingModule = class PostPageRoutingModule {
};
PostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostPageRoutingModule);



/***/ }),

/***/ 6299:
/*!*************************************************!*\
  !*** ./src/app/pages/users/post/post.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageModule": () => (/* binding */ PostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-routing.module */ 925);
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.page */ 961);







let PostPageModule = class PostPageModule {
};
PostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _post_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostPageRoutingModule
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_1__.PostPage]
    })
], PostPageModule);



/***/ }),

/***/ 961:
/*!***********************************************!*\
  !*** ./src/app/pages/users/post/post.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPage": () => (/* binding */ PostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post.page.html */ 1535);
/* harmony import */ var _post_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.page.scss */ 1252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);








let PostPage = class PostPage {
    constructor(_activatedRoute, _userService, _formBuilder, _tokenService) {
        this._activatedRoute = _activatedRoute;
        this._userService = _userService;
        this._formBuilder = _formBuilder;
        this._tokenService = _tokenService;
    }
    ngOnInit() {
        this.loading = true;
        this.user_id = this._tokenService.getId();
        this.post_id = this._activatedRoute.snapshot.params['post_id'];
        this.postForm = this._formBuilder.group({
            text: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        this.getPost();
    }
    getPost() {
        this._userService.getPostById(this.post_id).subscribe(data => {
            this.post = data;
            let date = this.reverseString(this.post.date.split('T')[0]);
            this.post['date'] = date;
            this.post.comments.forEach(element => {
                let Commenteddate = this.reverseString(element.date.split('T')[0]);
                element['date'] = Commenteddate;
            });
            this.loading = false;
        });
    }
    deleteComment(val) {
        this._userService.deleteComment(this.post_id, val).subscribe(data => {
            this.getPost();
        });
    }
    onSubmit() {
        this.loading = true;
        this._userService.commentById(this.post_id, this.postForm.get('text').value).subscribe(data => {
            this.getPost();
            this.postForm.reset();
        });
    }
    reverseString(str) {
        return str.split('-').reverse().join('-');
    }
};
PostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__.TokenstorageService }
];
PostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-post',
        template: _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostPage);



/***/ }),

/***/ 1252:
/*!*************************************************!*\
  !*** ./src/app/pages/users/post/post.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-back-button {\n  --color: #013a63;\n  --background-hover:#01497c;\n  --background-hover-opacity: 0.05;\n}\n\nion-item {\n  --highlight-color-focused:none;\n  --highlight-height: 0;\n}\n\nion-content {\n  position: relative;\n}\n\n.loading {\n  z-index: 10;\n  position: fixed;\n  top: 50%;\n  left: 48%;\n  translate: -50%, -50%;\n}\n\n.container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n\n.container .section {\n  max-width: 1100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container .section header h3 {\n  margin: 2rem 0 0.8rem 0;\n  font-size: 1.5rem;\n}\n\n.container .section header ion-button {\n  margin: 1rem 0;\n  --background: #01497c;\n}\n\n.container .section .cards ion-card {\n  margin: 1.5rem 0;\n}\n\n.container .section .cards ion-card ion-card-content {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.container .section .cards ion-card ion-card-content .user {\n  display: grid;\n  align-items: center;\n}\n\n.container .section .cards ion-card ion-card-content .user img {\n  justify-self: center;\n  border-radius: 50%;\n  width: 80%;\n  padding: 0.5rem 0 1rem 0;\n}\n\n.container .section .cards ion-card ion-card-content .user h1 {\n  text-align: center;\n  font-size: 1.5rem;\n  color: #000;\n}\n\n.container .section .cards ion-card ion-card-content .comment {\n  display: grid;\n  align-items: center;\n  padding: 0.3rem 0.5rem;\n}\n\n.container .section .cards ion-card ion-card-content .comment h4 {\n  font-size: 1.1rem;\n}\n\n.container .section .cards ion-card ion-card-content ion-button {\n  position: absolute;\n  left: 90%;\n  bottom: 3%;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background: #d90429;\n  --background-activated: #d90429;\n}\n\n@media (max-width: 768px) {\n  .container .section {\n    padding: 0 1rem;\n    width: 100%;\n  }\n  .container .section header {\n    width: 100%;\n  }\n  .container .section header h3 {\n    margin-left: 1rem;\n    font-size: 1.3rem;\n  }\n  .container .section header ion-button {\n    margin-left: 0.5rem;\n  }\n  .container .section .cards {\n    width: 100%;\n  }\n  .container .section .cards ion-card {\n    margin: 1.5rem 0;\n  }\n  .container .section .cards ion-card ion-card-content {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  .container .section .cards ion-card ion-card-content .user {\n    margin-bottom: 1.3rem;\n  }\n  .container .section .cards ion-card ion-card-content .user img {\n    width: 30%;\n  }\n  .container .section .cards ion-card ion-card-content .user h1 {\n    font-size: 1.5rem;\n  }\n  .container .section .cards ion-card ion-card-content .comment {\n    padding: 0 0.5rem;\n  }\n  .container .section .cards ion-card ion-card-content .comment h4 {\n    font-size: 1.1rem;\n    margin: 0.4rem 0;\n    text-align: center;\n  }\n  .container .section .cards ion-card ion-card-content .comment p {\n    text-align: center;\n    margin: 0.9rem 0 0 0;\n  }\n  .container .section .cards ion-card ion-card-content ion-button {\n    padding-right: 2rem;\n    left: 85%;\n    bottom: 3%;\n  }\n}\n\n@media (max-width: 480px) {\n  .loading {\n    left: 43%;\n  }\n\n  .container {\n    padding: 0.5rem;\n  }\n  .container .section header h3 {\n    font-size: 1rem;\n  }\n  .container .section .cards ion-card {\n    margin: 1.5rem 0;\n  }\n  .container .section .cards ion-card ion-card-content .user {\n    margin-bottom: 1rem;\n  }\n  .container .section .cards ion-card ion-card-content .user img {\n    width: 40%;\n  }\n  .container .section .cards ion-card ion-card-content .user h1 {\n    font-size: 1.5rem;\n  }\n  .container .section .cards ion-card ion-card-content .comment {\n    margin: 0.3rem;\n  }\n  .container .section .cards ion-card ion-card-content .comment h4 {\n    font-size: 1rem;\n  }\n  .container .section .cards ion-card ion-card-content ion-button {\n    left: 80%;\n    bottom: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVNO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQUFSOztBQUVNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBQVI7O0FBS007RUFDRSxnQkFBQTtBQUhSOztBQUlRO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFGVjs7QUFJVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZaOztBQUdZO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQURkOztBQUdZO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFEZDs7QUFLVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSFo7O0FBSVk7RUFDRSxpQkFBQTtBQUZkOztBQUtVO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBSFo7O0FBV0E7RUFFSTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBVEo7RUFVSTtJQUNFLFdBQUE7RUFSTjtFQVNNO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQVBSO0VBU007SUFDRSxtQkFBQTtFQVBSO0VBV0k7SUFDRSxXQUFBO0VBVE47RUFVTTtJQUNFLGdCQUFBO0VBUlI7RUFTUTtJQUNFLHFDQUFBO0VBUFY7RUFRVTtJQUNFLHFCQUFBO0VBTlo7RUFPWTtJQUNFLFVBQUE7RUFMZDtFQU9ZO0lBQ0UsaUJBQUE7RUFMZDtFQVNVO0lBQ0UsaUJBQUE7RUFQWjtFQVFZO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBTmQ7RUFRWTtJQUNFLGtCQUFBO0lBQ0Esb0JBQUE7RUFOZDtFQVNVO0lBQ0UsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQVBaO0FBQ0Y7O0FBZUE7RUFDRTtJQUNFLFNBQUE7RUFiRjs7RUFlQTtJQUNFLGVBQUE7RUFaRjtFQWVNO0lBQ0UsZUFBQTtFQWJSO0VBa0JNO0lBQ0UsZ0JBQUE7RUFoQlI7RUFrQlU7SUFDRSxtQkFBQTtFQWhCWjtFQWlCWTtJQUNFLFVBQUE7RUFmZDtFQWlCWTtJQUNFLGlCQUFBO0VBZmQ7RUFtQlU7SUFDRSxjQUFBO0VBakJaO0VBa0JZO0lBQ0UsZUFBQTtFQWhCZDtFQW1CVTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBakJaO0FBQ0YiLCJmaWxlIjoicG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogIzAxM2E2MztcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IzAxNDk3YztcclxuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC4wNTtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDpub25lO1xyXG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG9hZGluZ3tcclxuICB6LWluZGV4OiAxMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNDglO1xyXG4gIHRyYW5zbGF0ZTogKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIC5zZWN0aW9ue1xyXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgIGgze1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwIDAuOHJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDE0OTdjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRze1xyXG4gICAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG5cclxuICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMXJlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb21tZW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMyU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZDkwNDI5O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDkwNDI5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyeyAgICBcclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWFkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jYXJkc3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICAgICAgICAudXNlcntcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb21tZW50e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNHJlbSAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjlyZW0gMCAwIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiA4NSU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubG9hZGluZ3tcclxuICAgIGxlZnQ6IDQzJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICBoZWFkZXJ7XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jYXJkc3tcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAudXNlcntcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5jb21tZW50e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMC4zcmVtO1xyXG4gICAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDgwJTtcclxuICAgICAgICAgICAgICBib3R0b206IDIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAgXHJcbn0iXX0= */");

/***/ }),

/***/ 1535:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/post/post.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"posts\" text=\"Back\"\n      icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"loading\" *ngIf=\"loading\">\n    <img src=\"../../../../assets/output-onlinegiftools.gif\">\n  </div>\n  <div class=\"container\" *ngIf=\"!loading\">\n    <div class=\"section\">\n      <header class=\"cards\">\n        <ion-card>\n          <ion-card-content>\n            <div class=\"user\">\n              <img [src]=\"post.avatar\">\n              <h1>{{post.name}}</h1>\n            </div>\n            <div class=\"comment\">\n              <h4>{{post.text}}</h4>\n              <p>Posted on {{post.date}}</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        <h3>Say Something....</h3>\n        <ion-item [formGroup]=\"postForm\">\n          <ion-textarea placeholder=\"Comment on this post\" name=\"text\" formControlName=\"text\"></ion-textarea>\n        </ion-item>\n        <ion-button (click)=\"onSubmit()\">Submit</ion-button>\n      </header>\n\n      <section class=\"cards\">\n        <ion-card *ngFor=\"let comment of post.comments\">\n          <ion-card-content>\n            <div class=\"user\">\n              <img [src]=\"comment.avatar\">\n              <h1>{{comment.name}}</h1>\n            </div>\n            <div class=\"comment\">\n              <h4>{{comment.text}}</h4>\n              <p>Posted on {{comment.date}}</p>\n            </div>\n            <ion-button *ngIf=\"user_id === comment.user\" (click)=\"deleteComment(comment._id)\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n          </ion-card-content>\n        </ion-card>        \n      </section>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_post_post_module_ts.js.map