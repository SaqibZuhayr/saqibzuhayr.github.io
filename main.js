(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account-freelance/account-freelance.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/account-freelance/account-freelance.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-right:2%;\r\n    margin-bottom: 10px;\r\n  }\r\n.gigs-det{\r\n    padding: 5px;\r\n}\r\n.color{\r\n    background-color: #F8F9FA;\r\n}\r\n.margin{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-bottom: 5px;\r\n}\r\n.gig-card{\r\n  margin-top: 10px;\r\n  margin-left: 6.25%;\r\n}\r\n.btn-primary{\r\n  margin-top: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC1mcmVlbGFuY2UvYWNjb3VudC1mcmVlbGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFDRjtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LWZyZWVsYW5jZS9hY2NvdW50LWZyZWVsYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuLmdpZ3MtZGV0e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XHJcbn1cclxuLm1hcmdpbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5naWctY2FyZHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2LjI1JTtcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/account-freelance/account-freelance.component.html":
/*!********************************************************************!*\
  !*** ./src/app/account-freelance/account-freelance.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-7\">\r\n\r\n    <div class=\"row color\">\r\n\r\n      <div class=\"col-sm-10\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addnewgigs()\">Add New Gigs</button>\r\n      </div>\r\n\r\n      <div class=\"card gig-card\" style=\"height: 19rem; width: 16rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/photos/angular.png\" alt=\"Card image\" style=\"width:100%\">\r\n        <h6 class=\"card-title\"><a routerLink=\"gig_details\">Angular</a></h6>\r\n        <p class=\"small\">Angular is a front end javascript framework and goku duzz duzz</p>\r\n        <p>4.2/5.0</p>\r\n      </div>\r\n      <div class=\"card gig-card\" style=\"height: 19rem; width: 16rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/photos/angular.png\" alt=\"Card image\" style=\"width:100%\">\r\n        <h6 class=\"card-title\"><a routerLink=\"gig_details\">Angular</a></h6>\r\n        <p class=\"small\">Angular is a front end javascript framework and goku duzz duzz</p>\r\n        <p>4.2/5.0</p>\r\n      </div>\r\n\r\n      <div class=\"card gig-card\" style=\"height: 19rem; width: 16rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/photos/angular.png\" alt=\"Card image\" style=\"width:100%\">\r\n        <h6 class=\"card-title\"><a routerLink=\"gig_details\">Angular</a></h6>\r\n        <p class=\"small\">Angular is a front end javascript framework and goku duzz duzz</p>\r\n        <p>4.2/5.0</p>\r\n      </div>\r\n      <div class=\"card gig-card\" style=\"height: 19rem; width: 16rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/photos/angular.png\" alt=\"Card image\" style=\"width:100%\">\r\n        <h6 class=\"card-title\"><a routerLink=\"gig_details\">Angular</a></h6>\r\n        <p class=\"small\">Angular is a front end javascript framework and goku duzz duzz</p>\r\n        <p>4.2/5.0</p>\r\n      </div>\r\n      <div class=\"card gig-card\" style=\"height: 19rem; width: 16rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/photos/angular.png\" alt=\"Card image\" style=\"width:100%\">\r\n        <h6 class=\"card-title\"><a routerLink=\"gig_details\">Angular</a></h6>\r\n        <p class=\"small\">Angular is a front end javascript framework and goku duzz duzz</p>\r\n        <p>4.2/5.0</p>\r\n      </div>\r\n      <div class=\"card gig-card\" style=\"height: 19rem; width: 16rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/photos/angular.png\" alt=\"Card image\" style=\"width:100%\">\r\n        <h6 class=\"card-title\"><a routerLink=\"gig_details\">Angular</a></h6>\r\n        <p class=\"small\">Angular is a front end javascript framework and goku duzz duzz</p>\r\n        <p>4.2/5.0</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-5\">\r\n    <div class=\"card color\">\r\n      <div class=\"card-body  col-sm-12\" style=\"width: 25rem;\">\r\n        <div class=\"card-header\">\r\n          Details:\r\n        </div>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\">Total Gigs : <span>15</span></li>\r\n          <li class=\"list-group-item\">Orders Completed : <span>149</span></li>\r\n          <li class=\"list-group-item\">Average Gigs Rating : <span>4.2/5.0</span></li>\r\n          <li class=\"list-group-item\">Questions Posted : <span>14</span></li>\r\n          <li class=\"list-group-item\">Answer Posted : <span>25</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"row\">\r\n  <div class=\"card border-info mb-3 col-sm-11\">\r\n    <div class=\"row tags\">\r\n      <div class=\"col-sm-11\">\r\n        <h4>User Questions</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <p class=\"card-text small question\">User</p>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n          <p>what is php?</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-9 small question\">\r\n          <p>10views</p>\r\n        </div>\r\n        <div class=\"col-sm-2 small\">\r\n          <a href=\"#\" class=\"card-link\">php</a>\r\n          <a href=\"#\" class=\"card-link\">java</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"card col-sm-11\">\r\n    <div class=\"row tags\">\r\n      <div class=\"col-sm-11\">\r\n        <h4>User Questions</h4>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"card border-info mb-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n            <p class=\"card-text small question\">AhmedMeo1997</p>\r\n          </div>\r\n          <div class=\"col-md-9\">\r\n            <p>What is Java?</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <p class=\"card-text small\">jasim1996</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <p>Java is a programming language</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/account-freelance/account-freelance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/account-freelance/account-freelance.component.ts ***!
  \******************************************************************/
/*! exports provided: AccountFreelanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFreelanceComponent", function() { return AccountFreelanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AccountFreelanceComponent = /** @class */ (function () {
    function AccountFreelanceComponent(router) {
        this.router = router;
    }
    AccountFreelanceComponent.prototype.ngOnInit = function () {
    };
    AccountFreelanceComponent.prototype.addnewgigs = function () {
        this.router.navigate(['main/freelance/add-gig']);
    };
    AccountFreelanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-freelance',
            template: __webpack_require__(/*! ./account-freelance.component.html */ "./src/app/account-freelance/account-freelance.component.html"),
            styles: [__webpack_require__(/*! ./account-freelance.component.css */ "./src/app/account-freelance/account-freelance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountFreelanceComponent);
    return AccountFreelanceComponent;
}());



/***/ }),

/***/ "./src/app/add-gigs/add-gigs.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-gigs/add-gigs.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWdpZ3MvYWRkLWdpZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkZC1naWdzL2FkZC1naWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-gigs/add-gigs.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-gigs/add-gigs.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"card col-sm-7\">\r\n    <form class=\"form\" (submit)=\"onAddGig(onAddGigF)\" #onAddGigF=\"ngForm\">\r\n      <button type=\"button\" style=\"background-color: #31708F\" class=\"float-right btn btn-primary\" (click)=\"onBack()\">Back</button>\r\n      <br>\r\n      <h5>Add New Gig</h5>\r\n      <hr>\r\n      <div class=\"form-group balance\">\r\n        <input class=\"form-control\" id=\"gig_title\" placeholder=\"Enter Gig Title\" name=\"gig_title\" autofocus ngModel\r\n               #gig_title=\"ngModel\" required>\r\n        <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n      </div>\r\n      <div *ngIf=\"gig_title.invalid && gig_title.dirty && gig_title.touched\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"gig_title.errors.required\">\r\n          Gig title is required.\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <textarea class=\"form-control\" rows=\"5\" id=\"gig_description\" placeholder=\"Enter Gig Description\"\r\n                    name=\"gig_description\" autofocus ngModel #gig_description=\"ngModel\" required></textarea>\r\n      </div>\r\n      <div *ngIf=\"gig_description.invalid && gig_description.dirty && gig_description.touched\"\r\n           class=\"alert alert-danger\">\r\n        <div *ngIf=\"gig_description.errors.required\">\r\n          Gig Description is required.\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group balance\">\r\n        <div class=\"row\">\r\n          <form [formGroup]=\"nform\">\r\n            <div>\r\n              <button type=\"button\" class=\"btn btn-primary\" style=\"background-color: #31708F; margin-left: 15px;\" (click)=\"filepicker.click()\">Add Image</button>\r\n              <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\" style=\"visibility: hidden;\"\r\n                     accept=\"image/*\">\r\n            </div>\r\n            <div *ngIf=\"imagePreview !== '' && imagePreview && nform.get('image').valid\">\r\n              <img [src]=\"imagePreview\" [alt]=\"nform.value.title\">\r\n            </div>\r\n          </form>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group balance\">\r\n        <input class=\"form-control\" id=\"gig_rate\" placeholder=\"Enter Gig Rate\" name=\"gig_rate\" autofocus ngModel\r\n               #gig_rate=\"ngModel\" required>\r\n        <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n      </div>\r\n      <div *ngIf=\"gig_rate.invalid && gig_rate.dirty && gig_rate.touched\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"gig_rate.errors.required\">\r\n          Gig Rate is required.\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" style=\"background-color: #31708F\" class=\"btn btn-primary\">Submit</button>\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-gigs/add-gigs.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-gigs/add-gigs.component.ts ***!
  \************************************************/
/*! exports provided: AddGigsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGigsComponent", function() { return AddGigsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import {mimeType} from '../questions/mimetype.validator';


var AddGigsComponent = /** @class */ (function () {
    function AddGigsComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    AddGigsComponent.prototype.ngOnInit = function () {
        this.nform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
            // asyncValidators: [mimeType]
            })
        });
    };
    AddGigsComponent.prototype.onAddGig = function (form) {
        if (form.invalid) {
            return;
        }
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        console.log(form.value);
        console.log(this.nform.value.image);
        this.http.post('https://stark-chamber-32733.herokuapp.com/addgig', { 'gig': form.value,
            'image': this.imagePreview,
            'userid': localStorage.getItem('userid'),
            'username': localStorage.getItem('username')
        })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    AddGigsComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.nform.patchValue({ image: file });
        this.nform.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            // @ts-ignore
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    AddGigsComponent.prototype.onBack = function () {
        console.log('asdasd');
        this.router.navigate(['/main/userprofile']);
    };
    AddGigsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-gigs',
            template: __webpack_require__(/*! ./add-gigs.component.html */ "./src/app/add-gigs/add-gigs.component.html"),
            styles: [__webpack_require__(/*! ./add-gigs.component.css */ "./src/app/add-gigs/add-gigs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AddGigsComponent);
    return AddGigsComponent;
}());



/***/ }),

/***/ "./src/app/answercomponent/answercomponent.component.css":
/*!***************************************************************!*\
  !*** ./src/app/answercomponent/answercomponent.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\r\n  margin-bottom: 5px;\r\n\r\n}\r\n\r\n.question {\r\n  margin-left: 5px;\r\n}\r\n\r\n.border-info {\r\n  padding: 5px;\r\n}\r\n\r\n.abc {\r\n  margin-top: 5px;\r\n}\r\n\r\n.image:hover {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n}\r\n\r\n.question {\r\n  margin-left: 5px;\r\n}\r\n\r\n.tags {\r\n  margin: 5px;\r\n}\r\n\r\n.btn-primary {\r\n  margin-top: 5px;\r\n}\r\n\r\n.paginator {\r\n  background: #31708F !important;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.bbc {\r\n  padding: 15px;\r\n}\r\n\r\n.form-control {\r\n\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5zd2VyY29tcG9uZW50L2Fuc3dlcmNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSw0RUFBNEU7O0FBRTlFIiwiZmlsZSI6InNyYy9hcHAvYW5zd2VyY29tcG9uZW50L2Fuc3dlcmNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uYm9yZGVyLWluZm8ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFiYyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uaW1hZ2U6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgYmFja2dyb3VuZDogIzMxNzA4RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmJiYyB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcblxyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/answercomponent/answercomponent.component.html":
/*!****************************************************************!*\
  !*** ./src/app/answercomponent/answercomponent.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <div>\r\n      <button type=\"button\" style=\"background-color: #31708F\" class=\"float-right btn btn-primary\" (click)=\"onBack()\">\r\n        Back\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-7\" *ngIf=\"question\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card\">\r\n            <div class=\"row\" >\r\n              <div class=\"col-md-3\">\r\n                <p class=\"card-text small question\">{{question.askedBy}}</p>\r\n              </div>\r\n\r\n              <div class=\"col-md-9\">\r\n                <p><a href=\"#\" class=\"card-link\">{{question.question}}</a></p>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"question.answers\">\r\n              <div *ngFor=\"let a of question.answers\" class=\"card card-body\"\r\n                   style=\"margin-right: 8px;margin-left: 8px;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-1\" style=\"text-align: center\">\r\n                    <img class=\"image\" src=\"https://img.icons8.com/ios/50/000000/sort-up.png\"\r\n                         (click)=\"addScore(a.answer._id)\">\r\n                    <a>{{a.score}}</a>\r\n                    <img src=\"https://img.icons8.com/color/48/000000/checked-2.png\"\r\n                         *ngIf=\"a.answer.approved; else notShow\"\r\n                         (click)=\"approveAnswer(a.answer._id, a.answer.user_id)\">\r\n\r\n                    <ng-template #notShow>\r\n                      <img src=\"https://img.icons8.com/color/48/000000/unchecked-checkbox.png\"\r\n                           (click)=\"approveAnswer(a.answer._id, a.answer.user_id)\">\r\n                    </ng-template>\r\n                    <img class=\"image\" src=\"https://img.icons8.com/ios/50/000000/sort-down.png\"\r\n                         (click)=\"subScore(a.answer._id)\">\r\n\r\n                  </div>\r\n                  <div class=\"col-md-10\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3\">\r\n                        <p class=\"card-text small\">{{a.answer.answeredBy}}</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <p><a href=\"#\" class=\"card-link\">{{a.answer.answer}}</a></p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--<div class=\"card card-body\">-->\r\n            <!--<div class=\"row\">-->\r\n            <!--<div class=\"col-md-3\">-->\r\n            <!--<p class=\"card-text small\">jasim1996</p>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"row\">-->\r\n            <!--<div class=\"col-md-12\">-->\r\n            <!--<p><a href=\"#\" class=\"card-link\">Php is a server side scripting language.</a></p>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n\r\n\r\n            <!--</div>-->\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-9 small question\">\r\n                <p> &nbsp;&nbsp;&nbsp; {{question.answers.length}} Answers</p>\r\n              </div>\r\n              <div class=\"col-sm-2 small\">\r\n                <a href=\"#\" class=\"card-link\">{{question.category}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <form class=\"form-postAnswer\" (submit)=\"onPostAnswer(onPostAnswerF)\" #onPostAnswerF=\"ngForm\">\r\n              <div class=\"form-group\">\r\n                <textarea class=\"form-control\" rows=\"7\" id=\"comment\" placeholder=\"Enter Answer\" name=\"answer\" autofocus\r\n                          ngModel\r\n                          #answerinput=\"ngModel\" required></textarea>\r\n              </div>\r\n              <div *ngIf=\"answerinput.invalid && answerinput.dirty && answerinput.touched\"\r\n                   class=\"alert alert-danger\">\r\n                <div *ngIf=\"answerinput.errors.required\">\r\n                  Answer is required.\r\n                </div>\r\n              </div>\r\n              <button style=\"background-color: #31708F\" type=\"submit\" class=\"btn btn-primary float-right\">Submit\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-recommeded-question [questionID]=\"questionID\"></app-recommeded-question>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/answercomponent/answercomponent.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/answercomponent/answercomponent.component.ts ***!
  \**************************************************************/
/*! exports provided: AnswercomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswercomponentComponent", function() { return AnswercomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AnswercomponentComponent = /** @class */ (function () {
    function AnswercomponentComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.question = undefined;
        this.userid = ' ';
        this.username = ' ';
    }
    AnswercomponentComponent.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
        this.username = localStorage.getItem('username');
        this.fetchAnswer();
    };
    AnswercomponentComponent.prototype.onPostAnswer = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        if (!localStorage.getItem('userid')) {
            swal("Login Required", "", "error");
            return;
        }
        console.log('answer');
        this.http.post('https://stark-chamber-32733.herokuapp.com/postanswer', {
            'answer': form.value.answer,
            'questionID': this.question['questionid'],
            'userid': this.userid,
            'answeredBy': this.username
        })
            .subscribe(function (data) {
            console.log(data);
            _this.fetchAnswer();
        });
    };
    AnswercomponentComponent.prototype.fetchAnswer = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.questionID = params.id;
            _this.http.post('https://stark-chamber-32733.herokuapp.com/answers', { 'questionID': params.id }).subscribe(function (data) {
                _this.question = data;
                console.log(data);
            });
        });
    };
    AnswercomponentComponent.prototype.onBack = function () {
        // console.log('asdasd');
        this.router.navigate(['/main']);
    };
    AnswercomponentComponent.prototype.addScore = function (answerId) {
        // console.log(answerId, 'answrerrer')
        this.ratingAnswer('add', answerId);
    };
    AnswercomponentComponent.prototype.subScore = function (answerId) {
        this.ratingAnswer('sub', answerId);
    };
    AnswercomponentComponent.prototype.ratingAnswer = function (rate, answerId) {
        var _this = this;
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('https://stark-chamber-32733.herokuapp.com/rateanswer', {
            rate: rate, answerId: answerId, qId: this.questionID,
            userid: this.userid
        })
            .subscribe(function (data) {
            console.log(data);
            if (data['message']) {
                alert('You have already rated this answer');
            }
            _this.fetchAnswer();
        });
    };
    AnswercomponentComponent.prototype.approveAnswer = function (id, userid) {
        var _this = this;
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        if (userid !== this.userid) {
            this.http.post('https://stark-chamber-32733.herokuapp.com/approveAnswer', {
                answerId: id, questionBy: this.userid,
                answeredBy: userid
            })
                .subscribe(function (data) {
                console.log(data);
                _this.fetchAnswer();
            });
        }
    };
    AnswercomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-answercomponent',
            template: __webpack_require__(/*! ./answercomponent.component.html */ "./src/app/answercomponent/answercomponent.component.html"),
            styles: [__webpack_require__(/*! ./answercomponent.component.css */ "./src/app/answercomponent/answercomponent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AnswercomponentComponent);
    return AnswercomponentComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-main/user-main.component */ "./src/app/user-main/user-main.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _answercomponent_answercomponent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./answercomponent/answercomponent.component */ "./src/app/answercomponent/answercomponent.component.ts");
/* harmony import */ var _freelance_main_freelance_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./freelance-main/freelance-main.component */ "./src/app/freelance-main/freelance-main.component.ts");
/* harmony import */ var _gigs_main_gigs_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gigs-main/gigs-main.component */ "./src/app/gigs-main/gigs-main.component.ts");
/* harmony import */ var _gigs_details_gigs_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gigs-details/gigs-details.component */ "./src/app/gigs-details/gigs-details.component.ts");
/* harmony import */ var _postquestion_postquestion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./postquestion/postquestion.component */ "./src/app/postquestion/postquestion.component.ts");
/* harmony import */ var _account_freelance_account_freelance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-freelance/account-freelance.component */ "./src/app/account-freelance/account-freelance.component.ts");
/* harmony import */ var _add_gigs_add_gigs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-gigs/add-gigs.component */ "./src/app/add-gigs/add-gigs.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _post_job_post_job_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post-job/post-job.component */ "./src/app/post-job/post-job.component.ts");
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./job-details/job-details.component */ "./src/app/job-details/job-details.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_details_user_profile_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-profile-details/user-profile-details.component */ "./src/app/user-profile-details/user-profile-details.component.ts");
/* harmony import */ var _questionmain_questionmain_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./questionmain/questionmain.component */ "./src/app/questionmain/questionmain.component.ts");
/* harmony import */ var _myanswer_myanswer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./myanswer/myanswer.component */ "./src/app/myanswer/myanswer.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _request_order_request_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./request-order/request-order.component */ "./src/app/request-order/request-order.component.ts");
/* harmony import */ var _pending_orders_pending_orders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pending-orders/pending-orders.component */ "./src/app/pending-orders/pending-orders.component.ts");
/* harmony import */ var _buyer_order_buyer_order_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./buyer-order/buyer-order.component */ "./src/app/buyer-order/buyer-order.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user-account/user-account.component.ts");
/* harmony import */ var _myjobs_myjobs_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./myjobs/myjobs.component */ "./src/app/myjobs/myjobs.component.ts");
/* harmony import */ var _myjobs_applied_myjobs_applied_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./myjobs-applied/myjobs-applied.component */ "./src/app/myjobs-applied/myjobs-applied.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _gigs_applied_gigs_applied_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gigs-applied/gigs-applied.component */ "./src/app/gigs-applied/gigs-applied.component.ts");































var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    {
        path: 'main', component: _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_5__["UserMainComponent"],
        children: [
            {
                path: '', component: _questionmain_questionmain_component__WEBPACK_IMPORTED_MODULE_19__["QuestionmainComponent"],
                children: [
                    { path: '', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsComponent"] }
                ]
            },
            { path: 'answer/:id', component: _answercomponent_answercomponent_component__WEBPACK_IMPORTED_MODULE_7__["AnswercomponentComponent"] },
            { path: 'postquestion', component: _postquestion_postquestion_component__WEBPACK_IMPORTED_MODULE_11__["PostquestionComponent"] },
            {
                path: 'userprofile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"],
                children: [
                    { path: '', component: _user_profile_details_user_profile_details_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileDetailsComponent"] },
                    {
                        path: 'myquestion', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsComponent"],
                    },
                    { path: 'myanswer', component: _myanswer_myanswer_component__WEBPACK_IMPORTED_MODULE_20__["MyanswerComponent"] },
                    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"] },
                    { path: 'add-gig', component: _add_gigs_add_gigs_component__WEBPACK_IMPORTED_MODULE_13__["AddGigsComponent"] },
                    { path: 'order-requests', component: _request_order_request_order_component__WEBPACK_IMPORTED_MODULE_22__["RequestOrderComponent"] },
                    { path: 'pending-orders', component: _pending_orders_pending_orders_component__WEBPACK_IMPORTED_MODULE_23__["PendingOrdersComponent"] },
                    { path: 'my-orders', component: _buyer_order_buyer_order_component__WEBPACK_IMPORTED_MODULE_24__["BuyerOrderComponent"] },
                    { path: 'account', component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_26__["UserAccountComponent"] },
                    { path: 'payment/:amount/:oid/:gigid', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_25__["PaymentComponent"] },
                    { path: 'myjob/:id', component: _myjobs_myjobs_component__WEBPACK_IMPORTED_MODULE_27__["MyjobsComponent"] },
                    { path: 'myjob-applied/:id', component: _myjobs_applied_myjobs_applied_component__WEBPACK_IMPORTED_MODULE_28__["MyjobsAppliedComponent"] },
                    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_29__["SettingsComponent"] },
                    { path: 'gigs-applied/:id', component: _gigs_applied_gigs_applied_component__WEBPACK_IMPORTED_MODULE_30__["GigsAppliedComponent"] }
                ]
            },
            {
                path: 'jobs',
                children: [
                    { path: '', component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_14__["JobsComponent"] },
                    { path: 'post-job', component: _post_job_post_job_component__WEBPACK_IMPORTED_MODULE_15__["PostJobComponent"] },
                    { path: 'job-details/:id', component: _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_16__["JobDetailsComponent"] }
                ]
            },
            {
                path: 'freelance', component: _freelance_main_freelance_main_component__WEBPACK_IMPORTED_MODULE_8__["FreelanceMainComponent"],
                children: [
                    { path: '', component: _gigs_main_gigs_main_component__WEBPACK_IMPORTED_MODULE_9__["GigsMainComponent"] },
                    { path: 'gig_details/:id', component: _gigs_details_gigs_details_component__WEBPACK_IMPORTED_MODULE_10__["GigsDetailsComponent"] },
                    { path: 'account-freelance', component: _account_freelance_account_freelance_component__WEBPACK_IMPORTED_MODULE_12__["AccountFreelanceComponent"] }
                ]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ask-Freelance';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-auto-scroll */ "./node_modules/ngx-auto-scroll/ngx-auto-scroll.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-main/user-main.component */ "./src/app/user-main/user-main.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _sidebar_question_sidebar_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar-question/sidebar-question.component */ "./src/app/sidebar-question/sidebar-question.component.ts");
/* harmony import */ var _trendingtagsquestion_trendingtagsquestion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trendingtagsquestion/trendingtagsquestion.component */ "./src/app/trendingtagsquestion/trendingtagsquestion.component.ts");
/* harmony import */ var _answercomponent_answercomponent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./answercomponent/answercomponent.component */ "./src/app/answercomponent/answercomponent.component.ts");
/* harmony import */ var _freelance_main_freelance_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./freelance-main/freelance-main.component */ "./src/app/freelance-main/freelance-main.component.ts");
/* harmony import */ var _sidebar_freelance_sidebar_freelance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebar-freelance/sidebar-freelance.component */ "./src/app/sidebar-freelance/sidebar-freelance.component.ts");
/* harmony import */ var _gigs_main_gigs_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gigs-main/gigs-main.component */ "./src/app/gigs-main/gigs-main.component.ts");
/* harmony import */ var _gigs_details_gigs_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gigs-details/gigs-details.component */ "./src/app/gigs-details/gigs-details.component.ts");
/* harmony import */ var _postquestion_postquestion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./postquestion/postquestion.component */ "./src/app/postquestion/postquestion.component.ts");
/* harmony import */ var _account_freelance_account_freelance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./account-freelance/account-freelance.component */ "./src/app/account-freelance/account-freelance.component.ts");
/* harmony import */ var _add_gigs_add_gigs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-gigs/add-gigs.component */ "./src/app/add-gigs/add-gigs.component.ts");
/* harmony import */ var _jobs_sidebar_jobs_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./jobs-sidebar/jobs-sidebar.component */ "./src/app/jobs-sidebar/jobs-sidebar.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _post_job_post_job_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./post-job/post-job.component */ "./src/app/post-job/post-job.component.ts");
/* harmony import */ var _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./job-details/job-details.component */ "./src/app/job-details/job-details.component.ts");
/* harmony import */ var _user_profile_details_user_profile_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-profile-details/user-profile-details.component */ "./src/app/user-profile-details/user-profile-details.component.ts");
/* harmony import */ var _questionmain_questionmain_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./questionmain/questionmain.component */ "./src/app/questionmain/questionmain.component.ts");
/* harmony import */ var _myanswer_myanswer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./myanswer/myanswer.component */ "./src/app/myanswer/myanswer.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _user_profile_sidebar_user_profile_sidebar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user-profile-sidebar/user-profile-sidebar.component */ "./src/app/user-profile-sidebar/user-profile-sidebar.component.ts");
/* harmony import */ var _conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./conversation-list/conversation-list.component */ "./src/app/conversation-list/conversation-list.component.ts");
/* harmony import */ var _pending_orders_pending_orders_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pending-orders/pending-orders.component */ "./src/app/pending-orders/pending-orders.component.ts");
/* harmony import */ var _request_order_request_order_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./request-order/request-order.component */ "./src/app/request-order/request-order.component.ts");
/* harmony import */ var _rightsidebar_user_detail_rightsidebar_user_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./rightsidebar-user-detail/rightsidebar-user-detail.component */ "./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.ts");
/* harmony import */ var _recommeded_question_recommeded_question_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./recommeded-question/recommeded-question.component */ "./src/app/recommeded-question/recommeded-question.component.ts");
/* harmony import */ var _buyer_order_buyer_order_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./buyer-order/buyer-order.component */ "./src/app/buyer-order/buyer-order.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user-account/user-account.component.ts");
/* harmony import */ var _myjobs_myjobs_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./myjobs/myjobs.component */ "./src/app/myjobs/myjobs.component.ts");
/* harmony import */ var _myjobs_applied_myjobs_applied_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./myjobs-applied/myjobs-applied.component */ "./src/app/myjobs-applied/myjobs-applied.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _gigs_applied_gigs_applied_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./gigs-applied/gigs-applied.component */ "./src/app/gigs-applied/gigs-applied.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");

















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _user_main_user_main_component__WEBPACK_IMPORTED_MODULE_12__["UserMainComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_13__["QuestionsComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
                _sidebar_question_sidebar_question_component__WEBPACK_IMPORTED_MODULE_15__["SidebarQuestionComponent"],
                _trendingtagsquestion_trendingtagsquestion_component__WEBPACK_IMPORTED_MODULE_16__["TrendingtagsquestionComponent"],
                _answercomponent_answercomponent_component__WEBPACK_IMPORTED_MODULE_17__["AnswercomponentComponent"],
                _freelance_main_freelance_main_component__WEBPACK_IMPORTED_MODULE_18__["FreelanceMainComponent"],
                _sidebar_freelance_sidebar_freelance_component__WEBPACK_IMPORTED_MODULE_19__["SidebarFreelanceComponent"],
                _gigs_main_gigs_main_component__WEBPACK_IMPORTED_MODULE_20__["GigsMainComponent"],
                _gigs_details_gigs_details_component__WEBPACK_IMPORTED_MODULE_21__["GigsDetailsComponent"],
                _postquestion_postquestion_component__WEBPACK_IMPORTED_MODULE_22__["PostquestionComponent"],
                _account_freelance_account_freelance_component__WEBPACK_IMPORTED_MODULE_23__["AccountFreelanceComponent"],
                _add_gigs_add_gigs_component__WEBPACK_IMPORTED_MODULE_24__["AddGigsComponent"],
                _jobs_sidebar_jobs_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["JobsSidebarComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_26__["JobsComponent"],
                _post_job_post_job_component__WEBPACK_IMPORTED_MODULE_27__["PostJobComponent"],
                _job_details_job_details_component__WEBPACK_IMPORTED_MODULE_28__["JobDetailsComponent"],
                _user_profile_details_user_profile_details_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileDetailsComponent"],
                _questionmain_questionmain_component__WEBPACK_IMPORTED_MODULE_30__["QuestionmainComponent"],
                _myanswer_myanswer_component__WEBPACK_IMPORTED_MODULE_31__["MyanswerComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_32__["ChatComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_33__["MessageComponent"],
                _user_profile_sidebar_user_profile_sidebar_component__WEBPACK_IMPORTED_MODULE_35__["UserProfileSidebarComponent"],
                _conversation_list_conversation_list_component__WEBPACK_IMPORTED_MODULE_36__["ConversationListComponent"],
                _pending_orders_pending_orders_component__WEBPACK_IMPORTED_MODULE_37__["PendingOrdersComponent"],
                _request_order_request_order_component__WEBPACK_IMPORTED_MODULE_38__["RequestOrderComponent"],
                _rightsidebar_user_detail_rightsidebar_user_detail_component__WEBPACK_IMPORTED_MODULE_39__["RightsidebarUserDetailComponent"],
                _recommeded_question_recommeded_question_component__WEBPACK_IMPORTED_MODULE_40__["RecommededQuestionComponent"],
                _buyer_order_buyer_order_component__WEBPACK_IMPORTED_MODULE_41__["BuyerOrderComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_42__["PaymentComponent"],
                _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_43__["UserAccountComponent"],
                _myjobs_myjobs_component__WEBPACK_IMPORTED_MODULE_44__["MyjobsComponent"],
                _myjobs_applied_myjobs_applied_component__WEBPACK_IMPORTED_MODULE_45__["MyjobsAppliedComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_46__["SettingsComponent"],
                _gigs_applied_gigs_applied_component__WEBPACK_IMPORTED_MODULE_47__["GigsAppliedComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_48__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_3__["NgxAutoScrollModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            providers: [_services_message_service__WEBPACK_IMPORTED_MODULE_34__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buyer-order/buyer-order.component.css":
/*!*******************************************************!*\
  !*** ./src/app/buyer-order/buyer-order.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**{*/\r\n  /*margin: 0;*/\r\n  /*padding: 0;*/\r\n  /*}*/\r\n  .rate {\r\n  float: left;\r\n  height: 46px;\r\n  padding: 0 10px;\r\n}\r\n  .rate:not(:checked) > input {\r\n  position:absolute;\r\n  top:-9999px;\r\n}\r\n  .rate:not(:checked) > label {\r\n  float:right;\r\n  width:1em;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  cursor:pointer;\r\n  font-size:30px;\r\n  color:#ccc;\r\n}\r\n  .rate:not(:checked) > label:before {\r\n  content: '★ ';\r\n}\r\n  .rate > input:checked ~ label {\r\n  color: #ffc700;\r\n}\r\n  .rate:not(:checked) > label:hover,\r\n.rate:not(:checked) > label:hover ~ label {\r\n  color: #deb217;\r\n}\r\n  .rate > input:checked + label:hover,\r\n.rate > input:checked + label:hover ~ label,\r\n.rate > input:checked ~ label:hover,\r\n.rate > input:checked ~ label:hover ~ label,\r\n.rate > label:hover ~ input:checked ~ label {\r\n  color: #c59b08;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXItb3JkZXIvYnV5ZXItb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0VBQ0gsYUFBYTtFQUNiLGNBQWM7RUFDaEIsSUFBSTtFQUNKO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0FBQ1o7RUFDQTtFQUNFLGFBQWE7QUFDZjtFQUNBO0VBQ0UsY0FBYztBQUNoQjtFQUNBOztFQUVFLGNBQWM7QUFDaEI7RUFDQTs7Ozs7RUFLRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYnV5ZXItb3JkZXIvYnV5ZXItb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKnsqL1xyXG4gIC8qbWFyZ2luOiAwOyovXHJcbiAgLypwYWRkaW5nOiAwOyovXHJcbi8qfSovXHJcbi5yYXRlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi05OTk5cHg7XHJcbn1cclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsIHtcclxuICBmbG9hdDpyaWdodDtcclxuICB3aWR0aDoxZW07XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBmb250LXNpemU6MzBweDtcclxuICBjb2xvcjojY2NjO1xyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICfimIUgJztcclxufVxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZmM3MDA7XHJcbn1cclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLFxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgY29sb3I6ICNkZWIyMTc7XHJcbn1cclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyIH4gbGFiZWwsXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG4ucmF0ZSA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICBjb2xvcjogI2M1OWIwODtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/buyer-order/buyer-order.component.html":
/*!********************************************************!*\
  !*** ./src/app/buyer-order/buyer-order.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div *ngIf=\"myorders\">\r\n      <div class=\"card col-sm-12\" *ngFor=\"let order of myorders.ordersAccepted\">\r\n          <a class=\"card-link\">\r\n            {{order.title}}\r\n          </a>\r\n        <div class=\"collapse show\">\r\n          <div class=\"card-body\">\r\n            <h6>Order Price: <a>{{order.amount}}</a></h6>\r\n            <hr>\r\n            <h6>Order Description:</h6>\r\n            <p>{{order.description}}</p>\r\n            <hr>\r\n            <h6>Order Delivery Time:</h6>\r\n            <p>{{order.time_limit}}</p>\r\n            <hr>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\"\r\n                    routerLink=\"/main/userprofile/payment/{{order.amount}}/{{order._id}}/{{order.gig_id}}\">Payment\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h5 class=\"card-header\">Orders Received :</h5>\r\n      <div class=\"card\">\r\n        <div *ngFor=\"let order of myorders.ordersReceived\">\r\n          <h6>{{order.orderName}}</h6>\r\n          <a href=\"http://localhost:3000{{order.orderFile}}\">\r\n            <button (click)=\"download(order.orderFile)\">Download</button>\r\n          </a>\r\n          <form class=\"form-review\" (submit)=\"onReview(onloginf, order.gig_id, order.orderid)\" #onloginf=\"ngForm\">\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"text\" id=\"reivew\" class=\"form-control\" name=\"review\" placeholder=\"Write Comment\"\r\n                     aria-describedby=\"basic-addon2\" ngModel\r\n                     #reviewinput=\"ngModel\" [(ngModel)]=\"comment\">\r\n              <div class=\"rate\">\r\n                <input type=\"radio\" id=\"star5\" name=\"rate\" ngModel value=\"5\"/>\r\n                <label for=\"star5\" title=\"text\">5 stars</label>\r\n                <input type=\"radio\" id=\"star4\" name=\"rate\" ngModel value=\"4\"/>\r\n                <label for=\"star4\" title=\"text\">4 stars</label>\r\n                <input type=\"radio\" id=\"star3\" name=\"rate\" ngModel value=\"3\"/>\r\n                <label for=\"star3\" title=\"text\">3 stars</label>\r\n                <input type=\"radio\" id=\"star2\" name=\"rate\" ngModel value=\"2\"/>\r\n                <label for=\"star2\" title=\"text\">2 stars</label>\r\n                <input type=\"radio\" id=\"star1\" name=\"rate\" ngModel value=\"1\"/>\r\n                <label for=\"star1\" title=\"text\">1 star</label>\r\n              </div>\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"submit\">Post</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <!--<div class=\"card col-sm-12\">-->\r\n        <!--<div class=\"card-body\">-->\r\n        <!---->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/buyer-order/buyer-order.component.ts":
/*!******************************************************!*\
  !*** ./src/app/buyer-order/buyer-order.component.ts ***!
  \******************************************************/
/*! exports provided: BuyerOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerOrderComponent", function() { return BuyerOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var BuyerOrderComponent = /** @class */ (function () {
    function BuyerOrderComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.myorders = undefined;
    }
    BuyerOrderComponent.prototype.ngOnInit = function () {
        this.comment = '';
        this.fetchMyOrders();
    };
    BuyerOrderComponent.prototype.fetchMyOrders = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/getMyOrders', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            _this.myorders = data;
            console.log(_this.myorders);
        });
    };
    BuyerOrderComponent.prototype.onReview = function (form, gigid, orderid) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        // console.log(form.value);
        this.http.post('https://stark-chamber-32733.herokuapp.com/addreview', {
            order_id: orderid,
            client_id: localStorage.getItem('userid'),
            reviews_rating: form.value.rate,
            comment: form.value.review,
            gigid: gigid
        })
            .subscribe(function (data) {
            _this.comment = '';
            if (data['message']) {
                alert('Review posted');
            }
        });
    };
    BuyerOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-order',
            template: __webpack_require__(/*! ./buyer-order.component.html */ "./src/app/buyer-order/buyer-order.component.html"),
            styles: [__webpack_require__(/*! ./buyer-order.component.css */ "./src/app/buyer-order/buyer-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuyerOrderComponent);
    return BuyerOrderComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "chat{\r\n  bottom: 0 !important;\r\n  margin-bottom: 0px !important;\r\n  position: relative;\r\n  max-height: 700px !important;\r\n}\r\n.col-sm-2{\r\n  margin-left: 15px;\r\n  margin-right: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNoYXR7XHJcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC1oZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbC1zbS0ye1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-conversation-list></app-conversation-list>\r\n  </div>\r\n  <div class=\"col-sm-8\">\r\n    <div class=\"row chat\">\r\n      <div class=\"col-sm-12\">\r\n        <app-message></app-message>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(route) {
        this.route = route;
    }
    ChatComponent.prototype.ngOnInit = function () {
        //this.tabElement = document.querySelector('');
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        //  this.tabElement.style.display = 'none';
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/conversation-list/conversation-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/conversation-list/conversation-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\r\n  padding-top: 20px !important;\r\n  padding-bottom: 20px !important;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.circle {\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-body {\r\n  border-radius: 15px;\r\n}\r\n\r\n.chat-body {\r\n  margin-top: 10px;\r\n  padding-top: 10px;\r\n  background-color: white;\r\n  border-radius: 15px;\r\n  height: 380px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.chat-body-footer {\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  background-color: white;\r\n  border-radius: 15px;\r\n}\r\n\r\n.chat-bubble {\r\n  border-radius: 10px;\r\n  display: inline-block;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-bottom: 0px !important;\r\n  position: relative;\r\n  max-width: 80%;\r\n}\r\n\r\n.message {\r\n  font-size: 15px;\r\n}\r\n\r\n.chat-bubble.left {\r\n  background: #f1f0f0;\r\n  float: left;\r\n  margin-left: 15px;\r\n}\r\n\r\n.chat-bubble.right {\r\n  background: #64b5f6;\r\n  margin-right: 7px;\r\n  color: white;\r\n  float: right;\r\n\r\n}\r\n\r\n.message-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.left.col-sm-12{\r\n  margin-top: 5px;\r\n}\r\n\r\n.right.col-sm-12{\r\n  margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9uLWxpc3QvY29udmVyc2F0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhdGlvbi1saXN0L2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJvZHkge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBoZWlnaHQ6IDM4MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5jaGF0LWJvZHktZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uY2hhdC1idWJibGUubGVmdCB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjBmMDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLnJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kOiAjNjRiNWY2O1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcblxyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxlZnQuY29sLXNtLTEye1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ucmlnaHQuY29sLXNtLTEye1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/conversation-list/conversation-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/conversation-list/conversation-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"card-body\" style=\"background-color: #31708F !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h5 style=\"text-align: center; color: white\">Conversation</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 chat-body\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\" *ngFor=\"let user of conversations\">\r\n        <div class=\"message-wrapper\" style=\"text-align: center\" >\r\n          <a (click)=\"chat(user._id, user.username)\">{{user.username}}</a>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/conversation-list/conversation-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/conversation-list/conversation-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ConversationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationListComponent", function() { return ConversationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ConversationListComponent = /** @class */ (function () {
    function ConversationListComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    ConversationListComponent.prototype.ngOnInit = function () {
        this.fetchConversations();
    };
    ConversationListComponent.prototype.fetchConversations = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/getConversations', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            _this.conversations = data;
            console.log(data);
        });
    };
    ConversationListComponent.prototype.chat = function (id, username) {
        // console.log(this.receiverid,this.receivername)
        this.router.navigate(['main/userprofile/chat/'], { queryParams: { id: id, name: username } });
    };
    ConversationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conversation-list',
            template: __webpack_require__(/*! ./conversation-list.component.html */ "./src/app/conversation-list/conversation-list.component.html"),
            styles: [__webpack_require__(/*! ./conversation-list.component.css */ "./src/app/conversation-list/conversation-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConversationListComponent);
    return ConversationListComponent;
}());



/***/ }),

/***/ "./src/app/freelance-main/freelance-main.component.css":
/*!*************************************************************!*\
  !*** ./src/app/freelance-main/freelance-main.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWVsYW5jZS1tYWluL2ZyZWVsYW5jZS1tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/freelance-main/freelance-main.component.html":
/*!**************************************************************!*\
  !*** ./src/app/freelance-main/freelance-main.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <div class=\"card\">\r\n      <app-sidebar-freelance></app-sidebar-freelance>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-10\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/freelance-main/freelance-main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/freelance-main/freelance-main.component.ts ***!
  \************************************************************/
/*! exports provided: FreelanceMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceMainComponent", function() { return FreelanceMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FreelanceMainComponent = /** @class */ (function () {
    function FreelanceMainComponent() {
    }
    FreelanceMainComponent.prototype.ngOnInit = function () {
    };
    FreelanceMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freelance-main',
            template: __webpack_require__(/*! ./freelance-main.component.html */ "./src/app/freelance-main/freelance-main.component.html"),
            styles: [__webpack_require__(/*! ./freelance-main.component.css */ "./src/app/freelance-main/freelance-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreelanceMainComponent);
    return FreelanceMainComponent;
}());



/***/ }),

/***/ "./src/app/gigs-applied/gigs-applied.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gigs-applied/gigs-applied.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  padding: 0px !important;\r\n  margin-right:2%;\r\n  margin-bottom: 10px;\r\n  border: hidden;\r\n  margin-left: 0px !important;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.h5{\r\n  margin-left: 7px;\r\n}\r\n.list-group-item{\r\n  border: hidden;\r\n}\r\n.footer{\r\n  margin-top: 25px;\r\n}\r\n.tags{\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n}\r\n.h4{\r\n  margin: 5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lncy1hcHBsaWVkL2dpZ3MtYXBwbGllZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZ2lncy1hcHBsaWVkL2dpZ3MtYXBwbGllZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmg1e1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBib3JkZXI6IGhpZGRlbjtcclxufVxyXG4uZm9vdGVye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnRhZ3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5oNHtcclxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/gigs-applied/gigs-applied.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gigs-applied/gigs-applied.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card row\">\r\n  <div class=\"col-sm-10\">\r\n    <h4>Gigs</h4>\r\n    <div class=\"row tags\">\r\n    <div class=\"col-sm-3\" *ngFor=\"let gig of gigs\">\r\n      <div class=\"card\" style=\"width:15rem;\">\r\n        <img class=\"card-img-top\" src=\"{{gig.photo}}\" alt=\"Card image\">\r\n        <h5 class=\"list-group-item\">Title : {{gig.title}}</h5>\r\n        <p class=\"list-group-item\">Description : {{gig.description}}</p>\r\n        <p class=\"list-group-item\">Rate : {{gig.rate}}</p>\r\n        <p class=\"list-group-item\">Average Rating : {{gig.averageRating}}</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"footer\">\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gigs-applied/gigs-applied.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gigs-applied/gigs-applied.component.ts ***!
  \********************************************************/
/*! exports provided: GigsAppliedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsAppliedComponent", function() { return GigsAppliedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GigsAppliedComponent = /** @class */ (function () {
    function GigsAppliedComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    GigsAppliedComponent.prototype.ngOnInit = function () {
        this.fetchGigs();
    };
    GigsAppliedComponent.prototype.fetchGigs = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // console.log(params.id);
            _this.userid = params.id;
            _this.http.post('https://stark-chamber-32733.herokuapp.com/fetchgigs', { 'userid': _this.userid }).subscribe(function (data) {
                _this.gigs = data;
                console.log(data);
            });
        });
    };
    GigsAppliedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gigs-applied',
            template: __webpack_require__(/*! ./gigs-applied.component.html */ "./src/app/gigs-applied/gigs-applied.component.html"),
            styles: [__webpack_require__(/*! ./gigs-applied.component.css */ "./src/app/gigs-applied/gigs-applied.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GigsAppliedComponent);
    return GigsAppliedComponent;
}());



/***/ }),

/***/ "./src/app/gigs-details/gigs-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gigs-details/gigs-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  padding: 0px !important;\r\n  margin-right:2%;\r\n  margin-bottom: 10px;\r\n  border: hidden;\r\n  margin-left: 0px !important;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.h5{\r\n  margin-left: 7px;\r\n}\r\n.list-group-item{\r\n  border: hidden;\r\n}\r\n.footer{\r\n  margin-top: 25px;\r\n}\r\n.tags{\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n}\r\n.h4{\r\n  margin: 5px !important;\r\n}\r\n.main{\r\n  margin-left: 15px !important;\r\n  margin-top: 15px;\r\n}\r\n.button{\r\n  margin: 15px;\r\n}\r\n.space{\r\n  margin: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lncy1kZXRhaWxzL2dpZ3MtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2dpZ3MtZGV0YWlscy9naWdzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDoyJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogaGlkZGVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbi5oNXtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW17XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbn1cclxuLmZvb3RlcntcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi50YWdze1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uaDR7XHJcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ubWFpbntcclxuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmJ1dHRvbntcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuLnNwYWNle1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/gigs-details/gigs-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gigs-details/gigs-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\" *ngIf=\"Gig\">\r\n      <div class=\"col-sm-4 main\" >\r\n        <img class=\"card-img-top\" style=\"width: 15rem;\" src=\"{{Gig.photo}}\" alt=\"Card image\">\r\n        <div class=\"\">\r\n          <h5 class=\"card-title\"><a routerLink=\"gig_details\">Title: {{Gig.title}}</a></h5>\r\n          <hr>\r\n          <h6>Rate: {{Gig.rate}}</h6>\r\n        </div>\r\n        <h6>Description:</h6>\r\n        <p>{{Gig.description}}</p>\r\n      </div>\r\n      <div class=\"card col-sm-7 main\" *ngIf=\"Gig.reviews\">\r\n        <div style=\"margin-top: 15px; margin-left: 15px\">\r\n          <h5>Reviews:</h5>\r\n          <hr/>\r\n          <div class=\"card\"  *ngFor=\"let review of Gig.reviews | paginate: { itemsPerPage: 4, currentPage: p }\">\r\n            <p style=\"padding-left: 5px;\">{{review.client_id}}&nbsp;&nbsp;{{review.reviews_rating}}/5.0</p>\r\n            <p style=\"padding-left: 5px;\">{{review.comment}}</p>\r\n            <p style=\"padding-left: 5px;\">Rating : </p>\r\n            <hr/>\r\n          </div>\r\n        </div>\r\n        <div align=\"center\" class=\"footer\">\r\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <button type=\"button\" style=\"background: #31708F !important\" class=\"btn btn-primary space\" data-toggle=\"modal\"\r\n                data-target=\"#exampleModal\">\r\n          Create Order\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary space\" style=\"float: right; background: #31708F !important;\"\r\n                (click)=\"chat()\">Chat\r\n        </button>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Order</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form\" (submit)=\"onOrder(Order)\" #Order=\"ngForm\">\r\n          <div class=\"form-group balance\">\r\n            <input class=\"form-control\" id=\"order_name\" placeholder=\"Enter Order Name\" name=\"order_name\" autofocus\r\n                   ngModel\r\n                   #order_name=\"ngModel\" required>\r\n            <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n          </div>\r\n          <div class=\"form-group\">\r\n          <textarea class=\"form-control\" rows=\"5\" id=\"order_description\" placeholder=\"Order Description\"\r\n                    name=\"order_description\" autofocus ngModel #order_description=\"ngModel\" required></textarea>\r\n          </div>\r\n          <div *ngIf=\"order_description.invalid && order_description.touched\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"order_description.errors.required\">\r\n              Order Description is required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group balance\">\r\n            <input type=\"number\" class=\"form-control\" id=\"order_price\" placeholder=\"Order Price\" name=\"order_price\"\r\n                   autofocus ngModel\r\n                   #order_price=\"ngModel\" required>\r\n            <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n          </div>\r\n          <div *ngIf=\"order_price.invalid && order_price.touched\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"order_price.errors.required\">\r\n              Order price is required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group balance\">\r\n            <input class=\"form-control\" id=\"order_delivery_time\" placeholder=\"Order Delivery Time\"\r\n                   name=\"order_delivery_time\" autofocus ngModel\r\n                   #order_delivery_time=\"ngModel\" required>\r\n            <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n          </div>\r\n          <div *ngIf=\"order_delivery_time.invalid && order_delivery_time.touched\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"order_delivery_time.errors.required\">\r\n              Order delivery time is required.\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gigs-details/gigs-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gigs-details/gigs-details.component.ts ***!
  \********************************************************/
/*! exports provided: GigsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsDetailsComponent", function() { return GigsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GigsDetailsComponent = /** @class */ (function () {
    function GigsDetailsComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    GigsDetailsComponent.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
        this.fetchGigDetails();
    };
    GigsDetailsComponent.prototype.fetchGigDetails = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.http.post('https://stark-chamber-32733.herokuapp.com/gigdetail', { 'gigid': params.id }).subscribe(function (data) {
                _this.receiverid = data['userid'];
                _this.receivername = data['username'];
                _this.Gig = data;
            });
        });
    };
    GigsDetailsComponent.prototype.chat = function () {
        // console.log(this.receiverid,this.receivername)
        this.router.navigate(['main/userprofile/chat/'], { queryParams: { id: this.receiverid, name: this.receivername } });
    };
    GigsDetailsComponent.prototype.onOrder = function (form) {
        if (form.invalid) {
            return;
        }
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('http://localhost:3000/submitOrder', { 'order': form.value, 'userid': this.userid,
            'receiverid': this.receiverid, 'gigid': this.Gig._id })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    GigsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gigs-details',
            template: __webpack_require__(/*! ./gigs-details.component.html */ "./src/app/gigs-details/gigs-details.component.html"),
            styles: [__webpack_require__(/*! ./gigs-details.component.css */ "./src/app/gigs-details/gigs-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GigsDetailsComponent);
    return GigsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/gigs-main/gigs-main.component.css":
/*!***************************************************!*\
  !*** ./src/app/gigs-main/gigs-main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  padding: 0px !important;\r\n  margin-right:2%;\r\n  margin-bottom: 10px;\r\n  border: hidden;\r\n  margin-left: 0px !important;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.h5{\r\n  margin-left: 7px;\r\n}\r\n.list-group-item{\r\n  border: hidden;\r\n}\r\n.footer{\r\n  margin-top: 25px;\r\n}\r\n.tags{\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n}\r\n.h4{\r\n  margin: 5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lncy1tYWluL2dpZ3MtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZ2lncy1tYWluL2dpZ3MtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmg1e1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBib3JkZXI6IGhpZGRlbjtcclxufVxyXG4uZm9vdGVye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnRhZ3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5oNHtcclxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/gigs-main/gigs-main.component.html":
/*!****************************************************!*\
  !*** ./src/app/gigs-main/gigs-main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card row\">\r\n  <div class=\"col-sm-12\">\r\n    <h4 >Gigs</h4>\r\n    <div class=\"row\" *ngIf=\"gigs\">\r\n      <div class=\"tags\" align=\"center\" style=\"\" *ngFor=\"let g of gigs | paginate: { itemsPerPage: 9, currentPage: p }\">\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"card\" style=\"width:12rem;\">\r\n            <img class=\"card-img-top\" src=\"{{g.photo}}\" alt=\"Card image\">\r\n            <h5 class=\"list-group-item\"><a routerLink=\"gig_details/{{g._id}}\">{{g.title}}</a></h5>\r\n            <p class=\"list-group-item\">Average Rating : {{g.averageRating}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer\" align=\"center\">\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gigs-main/gigs-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gigs-main/gigs-main.component.ts ***!
  \**************************************************/
/*! exports provided: GigsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsMainComponent", function() { return GigsMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GigsMainComponent = /** @class */ (function () {
    function GigsMainComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    GigsMainComponent.prototype.ngOnInit = function () {
        this.fetchGigs();
    };
    GigsMainComponent.prototype.fetchGigs = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/fetchgigs', {})
            .subscribe(function (data) {
            console.log(data);
            _this.gigs = data;
        });
    };
    GigsMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gigs-main',
            template: __webpack_require__(/*! ./gigs-main.component.html */ "./src/app/gigs-main/gigs-main.component.html"),
            styles: [__webpack_require__(/*! ./gigs-main.component.css */ "./src/app/gigs-main/gigs-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GigsMainComponent);
    return GigsMainComponent;
}());



/***/ }),

/***/ "./src/app/job-details/job-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/job-details/job-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1kZXRhaWxzL2pvYi1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/job-details/job-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/job-details/job-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-jobs-sidebar></app-jobs-sidebar>\r\n\r\n  </div>\r\n  <div class=\"col-sm-9\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 id=\"job_title\">{{job.title}}</h4>\r\n        <h5 id=\"organization_name\"> {{job.organization}}</h5>\r\n        <p id=\"salary\"><span>PKR/.&nbsp;</span>{{job.minSalary}}-{{job.maxSalary}}</p>\r\n      </div>\r\n      <hr>\r\n      <div class=\"card-body\">\r\n        <h5 id=\"job_description\">Job Description:</h5>\r\n        <p> {{job.details}}</p>\r\n        <hr>\r\n        <h5 id=\"qualification\"> Qualification: </h5><span>{{job.degreeLevel}}</span>\r\n        <hr>\r\n        <h5 id=\"skills\">Skills:</h5><span>{{job.skills}}</span>\r\n        <hr>\r\n        <h5>Job Details:</h5>\r\n\r\n        <!--<span><b>Experience Level:</b></span>-->\r\n        <!--<span>2-3 years</span>-->\r\n        <!--<br>-->\r\n\r\n        <!--<span><b>Career Level:&nbsp;</b></span>-->\r\n        <!--<span>Entry Level</span>-->\r\n\r\n        <div col-sm-6>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3 text-left\">\r\n\r\n              <b>Experience Level:</b>\r\n            </div>\r\n            <div class=\"col-sm-6 \">\r\n              <p>{{job.experience}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div col-sm-6>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3 text-left\">\r\n              <b>Career Level:</b>\r\n            </div>\r\n            <div class=\"col-sm-6 \">\r\n              <p>{{job.careerLevel}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <button type=\"button\" style=\"background-color:#31708F \" class=\"float-right btn btn-primary\" (click)=\"apply_job()\">Apply</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/job-details/job-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/job-details/job-details.component.ts ***!
  \******************************************************/
/*! exports provided: JobDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function() { return JobDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var JobDetailsComponent = /** @class */ (function () {
    function JobDetailsComponent(route, http) {
        this.route = route;
        this.http = http;
        this.job = {};
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.http.post('https://stark-chamber-32733.herokuapp.com/jobdetails', { 'jobID': params.id }).subscribe(function (data) {
                console.log(data);
                _this.job = data;
                // console.log(this.answers);
            });
        });
    };
    JobDetailsComponent.prototype.apply_job = function () {
        this.http.post('https://stark-chamber-32733.herokuapp.com/applyjob', { 'jobID': this.job['_id'],
            'userid': localStorage.getItem('userid')
        }).subscribe(function (data) {
            // console.log(data);
            alert(data['message']);
        });
    };
    JobDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-details',
            template: __webpack_require__(/*! ./job-details.component.html */ "./src/app/job-details/job-details.component.html"),
            styles: [__webpack_require__(/*! ./job-details.component.css */ "./src/app/job-details/job-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], JobDetailsComponent);
    return JobDetailsComponent;
}());



/***/ }),

/***/ "./src/app/jobs-sidebar/jobs-sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/jobs-sidebar/jobs-sidebar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.active{\r\n  background: #31708F !important;\r\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy1zaWRlYmFyL2pvYnMtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDhCQUE4QjtHQUM3Qiw0RUFBNEU7QUFDL0UiLCJmaWxlIjoic3JjL2FwcC9qb2JzLXNpZGViYXIvam9icy1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiAjMzE3MDhGICFpbXBvcnRhbnQ7XHJcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/jobs-sidebar/jobs-sidebar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/jobs-sidebar/jobs-sidebar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <h6 class=\"list-group-item active\">Jobs Categories</h6>\r\n  <a *ngFor=\"let j of jobtags\" class=\"list-group-item\">{{j}}</a>\r\n  <a routerLink=\"/main/jobs\" class=\"list-group-item\">View all</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/jobs-sidebar/jobs-sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/jobs-sidebar/jobs-sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: JobsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsSidebarComponent", function() { return JobsSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JobsSidebarComponent = /** @class */ (function () {
    function JobsSidebarComponent(http) {
        this.http = http;
    }
    JobsSidebarComponent.prototype.ngOnInit = function () {
        this.getTrendingJobs();
    };
    JobsSidebarComponent.prototype.getTrendingJobs = function () {
        var _this = this;
        this.http.get('https://stark-chamber-32733.herokuapp.com/getjobtags').subscribe(function (data) {
            _this.jobtags = data;
        });
    };
    JobsSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs-sidebar',
            template: __webpack_require__(/*! ./jobs-sidebar.component.html */ "./src/app/jobs-sidebar/jobs-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./jobs-sidebar.component.css */ "./src/app/jobs-sidebar/jobs-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobsSidebarComponent);
    return JobsSidebarComponent;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tags {\r\n  margin: 5px;\r\n}\r\n\r\n.btn-primary {\r\n  margin-top: 5px;\r\n}\r\n\r\n.btn-margin {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.question {\r\n  margin-left: 5px;\r\n}\r\n\r\n.tags {\r\n  margin: 5px;\r\n}\r\n\r\n.btn-primary {\r\n  margin-top: 5px;\r\n}\r\n\r\n.paginator {\r\n  background: #31708F !important;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.bbc {\r\n  padding: 15px;\r\n}\r\n\r\n.active{\r\n  background-color: #31708F;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvam9icy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhZ3Mge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4udGFncyB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucGFnaW5hdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjMzE3MDhGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uYmJjIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNzA4RjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"card\">\r\n      <div class=\"row tags\">\r\n        <div class=\"col-sm-11\">\r\n          <button type=\"button\" style=\"background-color: #31708F\" class=\"float-right btn btn-primary\"\r\n                  (click)=\"post_job()\">Post Job\r\n          </button>\r\n          <h4>Jobs</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div *ngFor=\"let j of jobs\" class=\"card mb-3 \">\r\n          <div class=\"card \">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <p class=\"card-text small question\">{{j.category}}</p>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p><a class=\"card-link\">{{j.title}}</a></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-11\">\r\n                <p>&nbsp;{{j.details}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-10\"></div>\r\n              <div class=\"col-sm-2 btn-margin\">\r\n                <button style=\"background-color: #31708F; margin-right: 5px;\" routerLink=\"job-details/{{j._id}}\"\r\n                        type=\"button\" class=\"float-right btn btn-primary\">\r\n                  View Details\r\n                </button>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var JobsComponent = /** @class */ (function () {
    function JobsComponent(route, http) {
        this.route = route;
        this.http = http;
        this.jobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.jobTrending();
        this.http.post('https://stark-chamber-32733.herokuapp.com/viewjobs', {}).subscribe(function (data) {
            console.log(data);
            // @ts-ignore
            _this.jobs = data;
        });
    };
    JobsComponent.prototype.post_job = function () {
        this.route.navigate(['main/jobs/post-job']);
    };
    JobsComponent.prototype.view_details = function () {
        this.route.navigate(['main/jobs/job-details']);
    };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/jobs/jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n  margin: 100px auto 0;\r\n  width: 70px;\r\n  text-align: center;\r\n}\r\n\r\n.spinner > div {\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #333;\r\n\r\n  border-radius: 100%;\r\n  display: inline-block;\r\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n}\r\n\r\n.spinner .bounce1 {\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n\r\n.spinner .bounce2 {\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n\r\n@-webkit-keyframes sk-bouncedelay {\r\n  0%, 80%, 100% { -webkit-transform: scale(0) }\r\n  40% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes sk-bouncedelay {\r\n  0%, 80%, 100% {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n  } 40% {\r\n    -webkit-transform: scale(1.0);\r\n    transform: scale(1.0);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjs7RUFFdEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnRUFBZ0U7RUFDaEUsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0IsNEJBQTRCO0VBQzVDLE1BQU0sOEJBQThCO0FBQ3RDOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCLEVBQUU7SUFDQSw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDA7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciA+IGRpdiB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbn1cclxuXHJcbi5zcGlubmVyIC5ib3VuY2UxIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG59XHJcblxyXG4uc3Bpbm5lciAuYm91bmNlMiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAwJSwgODAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIH1cclxuICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9IDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"bounce1\"></div>\n  <div class=\"bounce2\"></div>\n  <div class=\"bounce3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-label-group{\r\n  margin-top: 20px;\r\n}\r\n\r\n.password-space{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-signin{\r\n  margin-: 50px;\r\n}\r\n\r\n.space{\r\n  padding-top: 20px;\r\n}\r\n\r\n.choice{\r\n  margin-top: 20px;\r\n}\r\n\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw0RUFBNEU7QUFDOUUiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWxhYmVsLWdyb3Vwe1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zcGFjZXtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbntcclxuICBtYXJnaW4tOiA1MHB4O1xyXG59XHJcblxyXG4uc3BhY2V7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmNob2ljZXtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin my-5\" style=\"background-color: #EDF5E0\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center space\">User Login</h5>\r\n            <form class=\"form-signin\" (submit)=\"onlogin(onloginf)\" #onloginf=\"ngForm\">\r\n              <div class=\"form-label-group\">\r\n                <input type=\"email\" id=\"inputEmail\" name=\"emailtext\" class=\"form-control\" placeholder=\"Email address\"\r\n                       autofocus ngModel\r\n                       #emailinput=\"ngModel\" required email>\r\n              </div>\r\n              <div *ngIf=\"emailinput.invalid && emailinput.dirty && emailinput.touched\"\r\n                   class=\"alert alert-danger\">\r\n                <div *ngIf=\"emailinput.errors.required\">\r\n                  Email is required.\r\n                </div>\r\n                <div *ngIf=\"emailinput.errors.email\">\r\n                  Email is not valid.\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-label-group password-space\">\r\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"passtext\" placeholder=\"Password\"\r\n                       ngModel\r\n                       #passinput=\"ngModel\" required>\r\n              </div>\r\n              <div *ngIf=\"passinput.invalid && passinput.dirty && passinput.touched\"\r\n                   class=\"alert alert-danger\">\r\n                <div *ngIf=\"passinput.errors.required\">\r\n                  Password is required.\r\n                </div>\r\n              </div>\r\n\r\n              <!--<div class=\"custom-control custom-checkbox mb-3\">-->\r\n              <!--<input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">-->\r\n              <!--<label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>-->\r\n              <!--</div>-->\r\n\r\n              <button type=\"submit\" style=\"background-color: #31708F\" class=\"btn btn-lg btn-info btn-block btn-color\">Login</button>\r\n\r\n              <div class=\"choice\">\r\n                <a routerLink=\"signup\" class=\"password-space\">&nbsp;Signup</a>\r\n                <!--<a style=\"float: right\" routerLink=\"#\">Forgot Password?</a>-->\r\n              </div>\r\n              <div style=\"clear: both\"></div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, user) {
        this.route = route;
        this.user = user;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onlogin = function (form) {
        var _this = this;
        console.log('abc');
        if (form.invalid) {
            return;
        }
        console.log('abc');
        this.user.login(form).subscribe(function (data) {
            var res = [];
            res = data;
            if (res.length > 0) {
                console.log('login sucessfully');
                if (data[0]['_id']) {
                    localStorage.setItem('userid', data[0]['_id']);
                    localStorage.setItem('username', data[0]['username']);
                    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Login:', 'Successful', 'success');
                    _this.route.navigate(['main']);
                }
            }
            else {
                // alert('wrong credentails');
                sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Login:', 'UnSuccessful', 'error');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\r\n  padding-top: 5px !important;\r\n  padding-bottom: 5px !important;\r\n}\r\n\r\n.circle {\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-body {\r\n  border-radius: 15px;\r\n}\r\n\r\n.chat-body {\r\n  margin-top: 10px;\r\n  padding-top: 10px;\r\n  background-color: white;\r\n  border-radius: 15px;\r\n  height: 380px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.chat-body-footer {\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  background-color: white;\r\n  border-radius: 15px;\r\n}\r\n\r\n.chat-bubble {\r\n  border-radius: 10px;\r\n  display: inline-block;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-bottom: 0px !important;\r\n  position: relative;\r\n  max-width: 80%;\r\n}\r\n\r\n.message {\r\n  font-size: 15px;\r\n}\r\n\r\n.chat-bubble.left {\r\n  background: #f1f0f0;\r\n  float: left;\r\n  margin-left: 15px;\r\n}\r\n\r\n.chat-bubble.right {\r\n  background: #64b5f6;\r\n  margin-right: 7px;\r\n  color: white;\r\n  float: right;\r\n\r\n}\r\n\r\n.message-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.left.col-sm-12{\r\n  margin-top: 5px;\r\n}\r\n\r\n.right.col-sm-12{\r\n  margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uY2hhdC1ib2R5IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzODBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uY2hhdC1ib2R5LWZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLmxlZnQge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYwZjA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZS5yaWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzY0YjVmNjtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5sZWZ0LmNvbC1zbS0xMntcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnJpZ2h0LmNvbC1zbS0xMntcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"card-body\" style=\"background: #31708F !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-1\">\r\n            <img src=\"https://via.placeholder.com/60\" class=\"circle\">\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <span style=\"color: white\">{{receivername}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 chat-body\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"message-wrapper\" *ngFor=\"let message of messageArray\">\r\n          <div class=\"row\">\r\n            <div class=\"left col-sm-12\" *ngIf=\"username != receivername && username != message.sendername\">\r\n              <div class=\"chat-bubble left slide-left\">\r\n                <div class=\"message\">\r\n                  <p style=\"border-radius: 50px;\">{{message.body}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"right col-sm-12\" *ngIf=\"username === message.sendername\">\r\n              <div class=\"chat-bubble right slide-right\">\r\n                <div class=\"message\">\r\n                  <p>{{message.body}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"left col-sm-12\" *ngIf= \"typing\">\r\n          <div class=\"chat-bubble left slide-left\">\r\n            <div class=\"message\">\r\n              <p>{{receivername}} is typing</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\">\r\n      <div class=\"chat-body-footer col-sm-12\">\r\n        <div class=\"input\">\r\n          <form (ngSubmit)=\"SendMessage()\">\r\n            <div class=\"row\">\r\n              <div class=\"input field col-sm-10\">\r\n                <input type=\"text\" (keypress)=\"isTyping()\" [(ngModel)]=\"message\" style=\"width:inherit; height: 40px;\"\r\n                       name=\"message\">\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <button type=\"button\" (click)=\"sendMessage()\" class=\"btn btn-primary\" style=\"width: inherit; background-color: #31708F\">Send\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);





var MessageComponent = /** @class */ (function () {
    function MessageComponent(msgService, route) {
        this.msgService = msgService;
        this.route = route;
        this.message = '';
        this.messageArray = [];
        this.typing = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('https://stark-chamber-32733.herokuapp.com');
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('asdasds');
        this.route.queryParams.subscribe(function (params) {
            _this.receivername = params.name;
            _this.receiverid = params.id;
            _this.username = localStorage.getItem('username');
            _this.GetAllMessages(localStorage.getItem('userid'), _this.receiverid);
            _this.socket.on('refreshPage', function () {
                _this.GetAllMessages(localStorage.getItem('userid'), _this.receiverid);
            });
        });
        this.socket.on('is_typing', function (data) {
            if (data.sender === _this.receivername) {
                _this.typing = true;
            }
        });
        this.socket.on('has_stop', function (data) {
            if (data.sender === _this.receivername) {
                _this.typing = false;
            }
        });
    };
    MessageComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.message) {
            this.msgService
                .SendMessage(localStorage.getItem('userid'), localStorage.getItem('username'), this.receiverid, this.receivername, this.message)
                .subscribe(function (data) {
                console.log(data);
                _this.socket.emit('refresh', {});
                _this.message = '';
                _this.tabElement = document.querySelector('input');
                _this.tabElement.text = '';
            });
        }
    };
    MessageComponent.prototype.GetAllMessages = function (senderid, receiverid) {
        var _this = this;
        this.msgService.GetMessage(senderid, receiverid).subscribe(function (data) {
            console.log(data);
            _this.messageArray = data.messages.message;
        });
    };
    MessageComponent.prototype.isTyping = function () {
        var _this = this;
        this.socket.emit('start_typing', {
            sender: localStorage.getItem('username'),
            receiver: this.receivername
        });
        if (this.typingMessage) {
            clearTimeout(this.typingMessage);
        }
        this.typingMessage = setTimeout(function () {
            _this.socket.emit('stop_typing', {
                sender: localStorage.getItem('username'),
                receiver: _this.receivername
            });
        }, 500);
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/myanswer/myanswer.component.css":
/*!*************************************************!*\
  !*** ./src/app/myanswer/myanswer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-answer {\r\n  padding: 10px;\r\n}\r\n\r\n.card-text {\r\n  padding-left: 5px;\r\n  padding-top: 3px;\r\n}\r\n\r\n.h5 {\r\n  padding-left: 15px;\r\n}\r\n\r\n.question {\r\n  margin-left: 5px;\r\n}\r\n\r\n.tags {\r\n  margin: 5px;\r\n}\r\n\r\n.btn-primary {\r\n  margin-top: 5px;\r\n}\r\n\r\n.paginator {\r\n  background: #31708F !important;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.bbc {\r\n  padding: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlhbnN3ZXIvbXlhbnN3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbXlhbnN3ZXIvbXlhbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWFuc3dlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLmg1IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgYmFja2dyb3VuZDogIzMxNzA4RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmJiYyB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/myanswer/myanswer.component.html":
/*!**************************************************!*\
  !*** ./src/app/myanswer/myanswer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5>My Answers</h5>\r\n        <hr>\r\n        <div *ngFor=\"let a of userAnswers\" class=\"card card-answer border-info mb-3\">\r\n          <div class=\"card card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <p class=\"card-text small question\">{{a.questionObj.askedBy}}</p>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p><a href=\"#\" class=\"card-link\">{{a.questionObj.question}}</a></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <hr>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <p class=\"card-text small\">{{a.answerObj.answeredBy}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <p><a href=\"#\" class=\"card-link\">{{a.answerObj.answer}}.</a></p>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n\r\n            </div>\r\n            <div class=\"col-sm-12 small\">\r\n              <a href=\"#\" class=\"card-link float-right\">{{a.questionObj.category}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/myanswer/myanswer.component.ts":
/*!************************************************!*\
  !*** ./src/app/myanswer/myanswer.component.ts ***!
  \************************************************/
/*! exports provided: MyanswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyanswerComponent", function() { return MyanswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MyanswerComponent = /** @class */ (function () {
    function MyanswerComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    MyanswerComponent.prototype.ngOnInit = function () {
        this.fetchUserAnswers();
    };
    MyanswerComponent.prototype.fetchUserAnswers = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/useranswers', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            console.log(data);
            _this.userAnswers = data;
        });
    };
    MyanswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myanswer',
            template: __webpack_require__(/*! ./myanswer.component.html */ "./src/app/myanswer/myanswer.component.html"),
            styles: [__webpack_require__(/*! ./myanswer.component.css */ "./src/app/myanswer/myanswer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyanswerComponent);
    return MyanswerComponent;
}());



/***/ }),

/***/ "./src/app/myjobs-applied/myjobs-applied.component.css":
/*!*************************************************************!*\
  !*** ./src/app/myjobs-applied/myjobs-applied.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215am9icy1hcHBsaWVkL215am9icy1hcHBsaWVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/myjobs-applied/myjobs-applied.component.html":
/*!**************************************************************!*\
  !*** ./src/app/myjobs-applied/myjobs-applied.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-4\" *ngFor=\"let user of applicants\">\r\n    <div class=\"card color\">\r\n      <div class=\"card-body  col-sm-12\" style=\"width: 25rem;\">\r\n        <div class=\"card-header\">\r\n          {{user.username}} Details:\r\n        </div>\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li routerLink=\"/main/userprofile/gigs-applied/{{user._id}}\" class=\"list-group-item\">Total Gigs : <span>{{user.gigs.length}}</span></li>\r\n          <li class=\"list-group-item\">Orders Completed : <span>{{user.ordersAccepted.length}}</span></li>\r\n          <li class=\"list-group-item\">Average Gigs Rating : <span></span></li>\r\n          <li class=\"list-group-item\">Questions Posted : <span>{{user.questions.length}}</span></li>\r\n          <li class=\"list-group-item\">Answer Posted : <span>{{user.answers.length}}</span></li>\r\n          <li class=\"list-group-item\">Email : <span>{{user.email}}</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/myjobs-applied/myjobs-applied.component.ts":
/*!************************************************************!*\
  !*** ./src/app/myjobs-applied/myjobs-applied.component.ts ***!
  \************************************************************/
/*! exports provided: MyjobsAppliedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobsAppliedComponent", function() { return MyjobsAppliedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MyjobsAppliedComponent = /** @class */ (function () {
    function MyjobsAppliedComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    MyjobsAppliedComponent.prototype.ngOnInit = function () {
        this.viewApplications();
    };
    MyjobsAppliedComponent.prototype.viewApplications = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.http.post('https://stark-chamber-32733.herokuapp.com/getapplicants', { 'jobID': params.id }).subscribe(function (data) {
                _this.applicants = data;
                console.log(data);
            });
        });
    };
    MyjobsAppliedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myjobs-applied',
            template: __webpack_require__(/*! ./myjobs-applied.component.html */ "./src/app/myjobs-applied/myjobs-applied.component.html"),
            styles: [__webpack_require__(/*! ./myjobs-applied.component.css */ "./src/app/myjobs-applied/myjobs-applied.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyjobsAppliedComponent);
    return MyjobsAppliedComponent;
}());



/***/ }),

/***/ "./src/app/myjobs/myjobs.component.css":
/*!*********************************************!*\
  !*** ./src/app/myjobs/myjobs.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  padding: 0px !important;\r\n  margin-right:2%;\r\n  margin-bottom: 10px;\r\n  border: hidden;\r\n  margin-left: 0px !important;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.h5{\r\n  margin-left: 7px;\r\n}\r\n.list-group-item{\r\n  border: hidden;\r\n}\r\n.footer{\r\n  margin-top: 25px;\r\n}\r\n.tags{\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n}\r\n.h4{\r\n  margin: 5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlqb2JzL215am9icy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbXlqb2JzL215am9icy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmg1e1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBib3JkZXI6IGhpZGRlbjtcclxufVxyXG4uZm9vdGVye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnRhZ3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5oNHtcclxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/myjobs/myjobs.component.html":
/*!**********************************************!*\
  !*** ./src/app/myjobs/myjobs.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"card\">\r\n      <div class=\"row tags\">\r\n        <div class=\"col-sm-11\">\r\n          <button type=\"button\" style=\"background-color: #31708F\" class=\"float-right btn btn-primary\" (click)=\"post_job()\">Post Job</button>\r\n          <h4>Jobs</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div *ngFor=\"let j of myjobs\" class=\"card border-info mb-3 \">\r\n          <div class=\"card \">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <p class=\"card-text small question\">{{j.category}}</p>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p><a class=\"card-link\">{{j.title}}</a></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-11\">\r\n                <p>{{j.details}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-10\"></div>\r\n              <div class=\"col-sm-2 btn-margin\">\r\n                <button style=\"background-color: #31708F;\" routerLink=\"/main/userprofile/myjob-applied/{{j._id}}\" type=\"button\" class=\"float-right btn btn-primary\">\r\n                  View Applications\r\n                </button>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/myjobs/myjobs.component.ts":
/*!********************************************!*\
  !*** ./src/app/myjobs/myjobs.component.ts ***!
  \********************************************/
/*! exports provided: MyjobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobsComponent", function() { return MyjobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MyjobsComponent = /** @class */ (function () {
    function MyjobsComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    MyjobsComponent.prototype.ngOnInit = function () {
        this.getMyJobs();
    };
    MyjobsComponent.prototype.getMyJobs = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // console.log(params.id);
            _this.http.post('https://stark-chamber-32733.herokuapp.com/myjobs', { 'userid': params.id }).subscribe(function (data) {
                _this.myjobs = data;
                console.log(data);
            });
        });
    };
    MyjobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myjobs',
            template: __webpack_require__(/*! ./myjobs.component.html */ "./src/app/myjobs/myjobs.component.html"),
            styles: [__webpack_require__(/*! ./myjobs.component.css */ "./src/app/myjobs/myjobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyjobsComponent);
    return MyjobsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space{\r\n  margin-left: 2%;\r\n}\r\n.gap{\r\n  margin-left: 1%;\r\n}\r\n.navbar{\r\n  margin-bottom: 15px;\r\n  background: #31708F !important;\r\n  color: red !important;\r\n}\r\n.nav-link{\r\n  color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuLmdhcHtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuLm5hdmJhcntcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMTcwOEYgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light border border-right-0 border-info rounded\">\r\n  <a class=\"navbar-brand\" style=\"color: whitesmoke\" routerLink=\"/main\">Ask and Freelance</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/main\">Question Answer</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"freelance\">Freelance</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0 form-signin\"(submit)=\"onSearch(search)\" #search=\"ngForm\">\r\n      <input class=\"form-control mr-sm-2\" name=\"search\" type=\"text\" ngModel  placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n     <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"signout()\">Sign out</a>\r\n      </li>\r\n      <li *ngIf=\"loggedIn; else notShow\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/main/userprofile\">{{user.username}}</a>\r\n      </li>\r\n       <ng-template #notShow>\r\n         <li class=\"nav-item\">\r\n           <a class=\"nav-link\" routerLink=\"../\">Login</a>\r\n         </li>\r\n       </ng-template>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, location, question, http) {
        this.router = router;
        this.location = location;
        this.question = question;
        this.http = http;
        this.loggedIn = false;
        this.current = '/main/freelance';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userid') != null) {
            this.loggedIn = true;
            this.user = {
                'userid': localStorage.getItem('userid'),
                'username': localStorage.getItem('username')
            };
        }
    };
    NavbarComponent.prototype.signout = function () {
        this.loggedIn = false;
        localStorage.clear();
        this.router.navigate(['login']);
    };
    NavbarComponent.prototype.onSearch = function (form) {
        console.log(form.value);
        if ((location.pathname).toString().substring(0, this.current.length) === this.current) {
            console.log(location.pathname);
            // freelance component
        }
        else {
            console.log(location.pathname + '  else');
            // question component
            // console.log(form.value.search);
            this.question.getQuestions(undefined, undefined, form.value.search);
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form.checkout {\r\n  max-width: 500px;\r\n  margin: 2rem auto;\r\n  text-align: center;\r\n  border: 2px solid #eee;\r\n  border-radius: 8px;\r\n  padding: 1rem 2rem;\r\n  background: white;\r\n\r\n  font-family: monospace;\r\n  color: #525252;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nform.checkout button {\r\n  padding: 0.5rem 1rem;\r\n  color: white;\r\n  background: coral;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin-top: 1rem;\r\n}\r\n\r\nform.checkout button:active {\r\n  background: rgb(165, 76, 43);\r\n}\r\n\r\n.StripeElement {\r\n  margin: 1rem 0 1rem;\r\n  background-color: white;\r\n  padding: 8px 12px;\r\n  border-radius: 4px;\r\n  border: 1px solid transparent;\r\n  box-shadow: 0 1px 3px 0 #e6ebf1;\r\n  transition: box-shadow 150ms ease;\r\n}\r\n\r\n.StripeElement--focus {\r\n  box-shadow: 0 1px 3px 0 #cfd7df;\r\n}\r\n\r\n.StripeElement--invalid {\r\n  border-color: #fa755a;\r\n}\r\n\r\n.StripeElement--webkit-autofill {\r\n  background-color: #fefde5 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7O0VBRWpCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUUvQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0uY2hlY2tvdXQge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBjb2xvcjogIzUyNTI1MjtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuZm9ybS5jaGVja291dCBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBjb3JhbDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbmZvcm0uY2hlY2tvdXQgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE2NSwgNzYsIDQzKTtcclxufVxyXG5cclxuLlN0cmlwZUVsZW1lbnQge1xyXG4gIG1hcmdpbjogMXJlbSAwIDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uU3RyaXBlRWxlbWVudC0tZm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XHJcbn1cclxuXHJcbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNmYTc1NWE7XHJcbn1cclxuXHJcbi5TdHJpcGVFbGVtZW50LS13ZWJraXQtYXV0b2ZpbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZkZTUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <form #checkout=\"ngForm\" (ngSubmit)=\"onSubmit(checkout)\" class=\"checkout\">\r\n      <div class=\"form-row\">\r\n        <label for=\"card-info\">Card Info</label>\r\n        <div id=\"card-info\"class=\"form-control\" #cardInfo></div>\r\n\r\n        <div id=\"card-errors\" role=\"alert\" *ngIf=\"error\">{{ error }}</div>\r\n      </div>\r\n\r\n      <button type=\"submit\">Pay {{amount}} $</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(cd, route, http, router) {
        this.cd = cd;
        this.route = route;
        this.http = http;
        this.router = router;
        this.cardHandler = this.onChange.bind(this);
    }
    PaymentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var style = {
            base: {
                lineHeight: '24px',
                fontFamily: 'monospace',
                fontSmoothing: 'antialiased',
                fontSize: '19px',
                '::placeholder': {
                    color: 'purple'
                }
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
        this.route.params.subscribe(function (params) {
            _this.amount = Number(params.amount);
            _this.orderid = params.oid;
            _this.gigid = params.gigid;
        });
    };
    PaymentComponent.prototype.ngOnDestroy = function () {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    };
    PaymentComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    };
    PaymentComponent.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, token, error;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, stripe.createToken(this.card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            console.log('Something is wrong:', error);
                        }
                        else {
                            console.log('Success!', token);
                            // ...send the token to the your backend to process the charge
                            this.http.post('https://stark-chamber-32733.herokuapp.com/payment', { id: token.id,
                                amount: this.amount,
                                orderid: this.orderid,
                                gigid: this.gigid,
                                userid: localStorage.getItem('userid')
                            })
                                .subscribe(function (data) {
                                console.log(data);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardInfo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentComponent.prototype, "cardInfo", void 0);
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/pending-orders/pending-orders.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pending-orders/pending-orders.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-file-upload {\r\n  border: 1px solid #ccc;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\r\n  margin-left: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVuZGluZy1vcmRlcnMvcGVuZGluZy1vcmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wZW5kaW5nLW9yZGVycy9wZW5kaW5nLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pending-orders/pending-orders.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pending-orders/pending-orders.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"container\">\r\n      <div id=\"accordion\">\r\n        <div class=\"card\" *ngFor=\"let order of pendingOrders\">\r\n          <div class=\"card-header\">\r\n            <a class=\"card-link\">\r\n              {{order.title}}\r\n            </a>\r\n          </div>\r\n          <div class=\"collapse show\" data-parent=\"#accordion\">\r\n            <div class=\"card-body\">\r\n              <h6>Order Price: <a>{{order.amount}}</a></h6>\r\n              <hr>\r\n              <h6>Order Description:</h6>\r\n              <p>{{order.description}}</p>\r\n              <hr>\r\n              <h6>Order Delivery Time:</h6>\r\n              <p>{{order.time_limit}}</p>\r\n              <hr>\r\n              <h6>Order Status:</h6>\r\n              <p>Completed : {{order.completed}}</p>\r\n              <hr>\r\n              <button type=\"button\" class=\"btn btn-primary\" style=\"float: left; background-color: #31708F\" (click)=\"onComplete(order.userid,order._id,order.gig_id)\">Complete</button>\r\n              <input type=\"file\"\r\n                     id=\"file\"\r\n                     class=\"custom-file-upload\"\r\n                     (change)=\"handleFileInput($event.target.files)\">\r\n              <button type=\"button\" class=\"btn btn-primary\" style=\"float: right; background-color: #31708F\" (click)=\"onCancel()\">Cancel Order</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pending-orders/pending-orders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pending-orders/pending-orders.component.ts ***!
  \************************************************************/
/*! exports provided: PendingOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingOrdersComponent", function() { return PendingOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PendingOrdersComponent = /** @class */ (function () {
    function PendingOrdersComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.fileToUpload = null;
    }
    PendingOrdersComponent.prototype.ngOnInit = function () {
        this.getPendingOrders();
    };
    PendingOrdersComponent.prototype.onCancel = function () {
        console.log('asdasd');
    };
    PendingOrdersComponent.prototype.getPendingOrders = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/getPendingOrders', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            _this.pendingOrders = data;
        });
    };
    PendingOrdersComponent.prototype.onComplete = function (id, orderid, gigid) {
        var _this = this;
        if (this.fileToUpload) {
            this.formData.append('userid', id);
            this.formData.append('myid', localStorage.getItem('userid'));
            this.formData.append('orderid', orderid);
            this.formData.append('gigid', gigid);
            this.http.post('https://stark-chamber-32733.herokuapp.com/deliverOrder', this.formData)
                .subscribe(function (data) {
                console.log(data);
                _this.getPendingOrders();
            });
        }
    };
    PendingOrdersComponent.prototype.handleFileInput = function (files) {
        this.formData = new FormData();
        this.fileToUpload = files.item(0);
        this.formData.append('file', this.fileToUpload);
        console.log(this.fileToUpload);
    };
    PendingOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending-orders',
            template: __webpack_require__(/*! ./pending-orders.component.html */ "./src/app/pending-orders/pending-orders.component.html"),
            styles: [__webpack_require__(/*! ./pending-orders.component.css */ "./src/app/pending-orders/pending-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PendingOrdersComponent);
    return PendingOrdersComponent;
}());



/***/ }),

/***/ "./src/app/post-job/post-job.component.css":
/*!*************************************************!*\
  !*** ./src/app/post-job/post-job.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary{\r\n  margin-top: 12px;\r\n  margin-bottom: 12px;\r\n}\r\n.form-signin{\r\n  margin-top: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1qb2IvcG9zdC1qb2IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3Qtam9iL3Bvc3Qtam9iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnl7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbntcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/post-job/post-job.component.html":
/*!**************************************************!*\
  !*** ./src/app/post-job/post-job.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <div class=\"card\">\r\n      <div class=\"list-group\">\r\n        <h6 class=\"list-group-item\">Jobs Categories</h6>\r\n        <a href=\"#\" class=\"list-group-item\">CS</a>\r\n        <a href=\"#\" class=\"list-group-item\">IT</a>\r\n        <a href=\"#\" class=\"list-group-item\">python</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"card col-sm-12\">\r\n      <form class=\"form-signin\"  (submit)=\"onPostJob(onPostJobF)\" #onPostJobF=\"ngForm\">\r\n        <button type=\"button\" style=\"background-color: #31708F\" class=\"float-right btn btn-primary\" (click)=\"onBack()\">Back</button>\r\n      <br>\r\n      <h5>Post Job</h5>\r\n      <hr>\r\n        <div class=\"form-group balance\">\r\n          <input class=\"form-control\" id=\"org\" placeholder=\"Enter Organization name\" name=\"organization\" autofocus\r\n                 ngModel\r\n                 #orginput=\"ngModel\" required>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n        <div *ngIf=\"orginput.invalid && orginput.dirty && orginput.touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"orginput.errors.required\">\r\n            Organization name is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group balance\">\r\n          <input class=\"form-control\" id=\"category\" placeholder=\"Enter Job Category\" name=\"category\" autofocus ngModel\r\n                 #categoryinput=\"ngModel\" required>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n        <div *ngIf=\"categoryinput.invalid && categoryinput.dirty && categoryinput.touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"categoryinput.errors.required\">\r\n            Category is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group balance\">\r\n          <input class=\"form-control\" id=\"title\" placeholder=\"Enter Job Title\" name=\"title\" autofocus ngModel\r\n                 #titleinput=\"ngModel\" required>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n        <div *ngIf=\"titleinput.invalid && titleinput.dirty && titleinput.touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"titleinput.errors.required\">\r\n            Title is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <textarea class=\"form-control\" rows=\"5\" id=\"job_description\" placeholder=\"Enter Job Description\"\r\n                    name=\"details\" autofocus ngModel #jobDescinput=\"ngModel\" required></textarea>\r\n        </div>\r\n        <div *ngIf=\"jobDescinput.invalid && jobDescinput.dirty && jobDescinput.touched\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"job_description.errors.required\">\r\n            Description is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group balance\">\r\n          <input class=\"form-control\" id=\"skills\"\r\n                 placeholder=\"What skills are required for this job?  e.g CSS,PHP,MATLAB\" name=\"skills\" autofocus\r\n                 ngModel\r\n                 #skillsinput=\"ngModel\" required>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n        <div class=\"form-group balance\">\r\n          <input class=\"form-control\" id=\"job_location\" placeholder=\"Enter Job Location\" name=\"location\" autofocus\r\n                 ngModel #jobLocinput=\"ngModel\" required>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n        <div *ngIf=\"jobLocinput.invalid && jobLocinput.dirty && jobLocinput.touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"jobLocinput.errors.required\">\r\n            Title is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group balance\">\r\n          <input class=\"form-control\" id=\"lastdate\" placeholder=\"Last Date to apply\" name=\"lastDate\" autofocus\r\n                 ngModel #lastdateinput=\"ngModel\" required>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n        <div *ngIf=\"lastdateinput.invalid && lastdateinput.dirty && lastdateinput.touched\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"lastdateinput.errors.required\">\r\n            Last Date is required.\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"form-group balance\">-->\r\n        <!--<input class=\"form-control\" id=\"job_location\" placeholder=\"Enter Job Location\" name=\"job_location\" autofocus-->\r\n        <!--ngModel #titleinput=\"ngModel\" required>-->\r\n        <!--&lt;!&ndash;<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>&ndash;&gt;-->\r\n        <!--</div>-->\r\n        <!--<div *ngIf=\"job_location.invalid && job_location.dirty && job_location.touched\" class=\"alert alert-danger\">-->\r\n        <!--<div *ngIf=\"job_location.errors.required\">-->\r\n        <!--Title is required.-->\r\n        <!--</div>-->\r\n        <!--</div>-->\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n\r\n\r\n            <div class=\"form-group balance\">\r\n              <input class=\"form-control\" id=\"salary_min\" placeholder=\"Enter Minimum Salary\" name=\"minSalary\" autofocus\r\n                     ngModel\r\n                     #titleinput=\"ngModel\" required>\r\n              <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group balance\">\r\n              <input class=\"form-control\" id=\"salary_max\" placeholder=\"Enter Maximum Salary\" name=\"maxSalary\"\r\n                     autofocus ngModel\r\n                     #titleinput=\"ngModel\" required>\r\n              <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"career\"></label>\r\n              <select class=\"form-control\" name=\"careerLevel\" id=\"career\" [(ngModel)]=\"career\">\r\n                <option value=\"0\">Choose career level</option>\r\n                <option value=\"Inter/Student\">Intern/Student</option>\r\n                <option value=\"Entry Level\">Entry Level</option>\r\n                <option value=\"Experienced Professional\">Experienced Professional</option>\r\n\r\n              </select>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"degree\"></label>\r\n              <select class=\"form-control\" name=\"degreeLevel\" id=\"degree\" [(ngModel)]=\"degree\">\r\n\r\n                <option value=\"0\">Choose degree level</option>\r\n                <option value=\"Non-Matriculation\">Non-Matriculation</option>\r\n                <option value=\"Matriculation/O-Level\">Matriculation/O-Level</option>\r\n                <option value=\"Intermediate/A-Level\">Intermediate/A-Level</option>\r\n                <option value=\"Diploma\">Diploma</option>\r\n                <option value=\"Bachelor\">Bachelor</option>\r\n                <option value=\"Master\">Master</option>\r\n                <option value=\"PHD/Doctorate\">PHD/Doctorate</option>\r\n              </select>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"experience\"></label>\r\n              <select class=\"form-control\" name=\"experience\" id=\"experience\" [(ngModel)]=\"experience\">\r\n\r\n                <option value=\"0\">Choose experience level</option>\r\n                <option value=\"Fresh\">Fresh</option>\r\n                <option value=\"1 year\">1 Year</option>\r\n                <option value=\"2 year\">2 Year</option>\r\n                <option value=\"3 year\">3 Year</option>\r\n                <option value=\"4 year\">4 Year</option>\r\n                <option value=\"5 year\">5 Year</option>\r\n                <option value=\"6 year\">6 Year</option>\r\n                <option value=\"7 year\">7 Year</option>\r\n                <option value=\"8 year\">8 Year</option>\r\n                <option value=\"9 year\">9 Year</option>\r\n                <option value=\"10 year\">10 Year</option>\r\n                <option value=\"More than 10 years\">More than 10 Years</option>\r\n\r\n              </select>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <button type=\"submit\" style=\"background-color: #31708F\" class=\"btn btn-primary\">Submit</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"card\">\r\n      <div class=\"list-group\">\r\n        <h6 class=\"list-group-item\">Trending Jobs</h6>\r\n        <a href=\"#\" class=\"list-group-item\">CS</a>\r\n        <a href=\"#\" class=\"list-group-item\">IT</a>\r\n        <a href=\"#\" class=\"list-group-item\">python</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post-job/post-job.component.ts":
/*!************************************************!*\
  !*** ./src/app/post-job/post-job.component.ts ***!
  \************************************************/
/*! exports provided: PostJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobComponent", function() { return PostJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





var PostJobComponent = /** @class */ (function () {
    function PostJobComponent(route, http) {
        this.route = route;
        this.http = http;
        this.degree = '0';
        this.career = '0';
        this.experience = '0';
        this.userid = ' ';
    }
    PostJobComponent.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
    };
    PostJobComponent.prototype.onPostJob = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        if (!localStorage.getItem('userid')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Login Required", "", "error");
            return;
        }
        this.http.post('https://stark-chamber-32733.herokuapp.com/postjobs', { 'job': form.value, 'userid': this.userid })
            .subscribe(function (data) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Posted", "Job is posted", "success");
            _this.route.navigate(['main/jobs']);
        });
        console.log(form.value);
    };
    PostJobComponent.prototype.onBack = function () {
        this.route.navigate(['/main/jobs']);
    };
    PostJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-job',
            template: __webpack_require__(/*! ./post-job.component.html */ "./src/app/post-job/post-job.component.html"),
            styles: [__webpack_require__(/*! ./post-job.component.css */ "./src/app/post-job/post-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PostJobComponent);
    return PostJobComponent;
}());



/***/ }),

/***/ "./src/app/postquestion/postquestion.component.css":
/*!*********************************************************!*\
  !*** ./src/app/postquestion/postquestion.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".balance {\r\n  margin-top: 15px;\r\n}\r\n\r\n.btn-primary {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.question {\r\n  margin-left: 5px;\r\n}\r\n\r\n.tags {\r\n  margin: 5px;\r\n}\r\n\r\n.btn-primary {\r\n  margin-top: 5px;\r\n}\r\n\r\n.paginator {\r\n  background: #31708F !important;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.bbc {\r\n  padding: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHF1ZXN0aW9uL3Bvc3RxdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RxdWVzdGlvbi9wb3N0cXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWxhbmNlIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnBhZ2luYXRvciB7XHJcbiAgYmFja2dyb3VuZDogIzMxNzA4RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmJiYyB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/postquestion/postquestion.component.html":
/*!**********************************************************!*\
  !*** ./src/app/postquestion/postquestion.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <button type=\"button\" class=\"float-right btn btn-primary\" style=\"background-color: #31708F\" (click)=\"back()\">Back</button>\r\n  </div>\r\n  <div class=\"col-sm-8\">\r\n    <div class=\"card col-sm-12\">\r\n      <form class=\"form-signin\" (submit)=\"onPostQuestion(onPostQuestionF)\" #onPostQuestionF=\"ngForm\">\r\n        <h5>Ask Question</h5>\r\n        <div class=\"form-group balance\">\r\n          <input class=\"form-control\" id=\"title\" placeholder=\"Enter Title\" name=\"title\" autofocus ngModel\r\n                 #titleinput=\"ngModel\" required>\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\r\n        </div>\r\n        <div *ngIf=\"titleinput.invalid && titleinput.dirty && titleinput.touched\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"titleinput.errors.required\">\r\n            Title is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <textarea class=\"form-control\" rows=\"5\" id=\"comment\" placeholder=\"Enter Question\" name=\"question\" autofocus ngModel\r\n                    #questioninput=\"ngModel\" required></textarea>\r\n        </div>\r\n        <div *ngIf=\"questioninput.invalid && questioninput.dirty && questioninput.touched\"\r\n             class=\"alert alert-danger\">\r\n          <div *ngIf=\"questioninput.errors.required\">\r\n            Question is required.\r\n          </div>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"float-right btn btn-primary\" style=\"background-color: #31708F\">Submit</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/postquestion/postquestion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/postquestion/postquestion.component.ts ***!
  \********************************************************/
/*! exports provided: PostquestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostquestionComponent", function() { return PostquestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






var PostquestionComponent = /** @class */ (function () {
    function PostquestionComponent(route, http, location) {
        this.route = route;
        this.http = http;
        this.location = location;
        this.userid = '';
        this.username = '';
    }
    PostquestionComponent.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
        this.username = localStorage.getItem('username');
    };
    PostquestionComponent.prototype.onPostQuestion = function (form) {
        var _this = this;
        if (form.invalid) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Invalid Values", "", "error");
        }
        if (!localStorage.getItem('userid')) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Login Required", "", "error");
        }
        console.log('postQuestion');
        console.log(this.userid);
        this.http.post('https://stark-chamber-32733.herokuapp.com/postquestion', {
            'category': form.value.title,
            'question': form.value.question, 'userid': this.userid, 'askedBy': this.username
        }).subscribe(function (data) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Question Added", "", "success");
            _this.route.navigate(['main']);
        });
    };
    PostquestionComponent.prototype.back = function () {
        if (location.pathname === '/main') {
            this.route.navigate(['main']);
        }
        else {
            this.route.navigateByUrl('/main/userprofile/myquestion');
        }
    };
    PostquestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postquestion',
            template: __webpack_require__(/*! ./postquestion.component.html */ "./src/app/postquestion/postquestion.component.html"),
            styles: [__webpack_require__(/*! ./postquestion.component.css */ "./src/app/postquestion/postquestion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PostquestionComponent);
    return PostquestionComponent;
}());



/***/ }),

/***/ "./src/app/questionmain/questionmain.component.css":
/*!*********************************************************!*\
  !*** ./src/app/questionmain/questionmain.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubWFpbi9xdWVzdGlvbm1haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questionmain/questionmain.component.html":
/*!**********************************************************!*\
  !*** ./src/app/questionmain/questionmain.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <div class=\"card\" style=\"margin-top: 15px;\">\r\n      <app-trendingtagsquestion></app-trendingtagsquestion>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <app-jobs-sidebar></app-jobs-sidebar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/questionmain/questionmain.component.ts":
/*!********************************************************!*\
  !*** ./src/app/questionmain/questionmain.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionmainComponent", function() { return QuestionmainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionmainComponent = /** @class */ (function () {
    function QuestionmainComponent() {
    }
    QuestionmainComponent.prototype.ngOnInit = function () {
    };
    QuestionmainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questionmain',
            template: __webpack_require__(/*! ./questionmain.component.html */ "./src/app/questionmain/questionmain.component.html"),
            styles: [__webpack_require__(/*! ./questionmain.component.css */ "./src/app/questionmain/questionmain.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionmainComponent);
    return QuestionmainComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question{\r\n  margin-left: 5px;\r\n}\r\n.tags{\r\n  margin: 5px;\r\n}\r\n.btn-primary{\r\n  margin-top: 5px;\r\n}\r\n.paginator{\r\n  background: #31708F !important;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.bbc{\r\n  padding: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb257XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4udGFnc3tcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5wYWdpbmF0b3J7XHJcbiAgYmFja2dyb3VuZDogIzMxNzA4RiAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmJiY3tcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"checkbool\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\" *ngIf=\"loader;\">\r\n    <app-loader></app-loader>\r\n  </div>\r\n  <div class=\"col-sm-7 col-offset-sm-3\" *ngIf=\"!loader\">\r\n    <div class=\"card\">\r\n      <div class=\"row tags\">\r\n        <div class=\"col-sm-12\">\r\n          <button type=\"button\" style=\"background: #31708F !important\" class=\"float-right btn btn-primary\"\r\n                  (click)=\"post_question()\">Ask Question\r\n          </button>\r\n          <h4>My Questions</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\" *ngIf=\"Question\">\r\n        <div *ngFor=\"let q of Question | paginate: { itemsPerPage: 10, currentPage: p }\" class=\"card mb-3\">\r\n          <div class=\"card\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <p class=\"card-text small question\">{{q.user.username}}</p>\r\n              </div>\r\n\r\n              <div class=\"col-md-9\">\r\n                <p><a routerLink=\"{{ans}}{{q.question._id}}\" class=\"card-link\">{{q.question.question}}</a></p>\r\n              </div>\r\n            </div>\r\n            <hr/>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-9 small question\">\r\n                <p>Answers : {{q.question.answer.length}}</p>\r\n              </div>\r\n              <div class=\"col-sm-2 small\">\r\n                <a href=\"#\" class=\"card-link\">{{q.category}}</a>\r\n                <a href=\"#\" class=\"card-link\">{{q.category}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div align=\"center\">\r\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"bool\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"row tags\">\r\n        <div class=\"col-sm-12\">\r\n          <button type=\"button\" style=\"background: #31708F !important; color: white\" class=\"float-right btn\"\r\n                  (click)=\"post_question()\">Ask Question\r\n          </button>\r\n          <h4>Recent Questions</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div *ngFor=\"let q of Question | paginate: { itemsPerPage: 4, currentPage: p }\" class=\"mb-3\">\r\n          <div class=\"card\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <p class=\"card-text small question\">{{q.user.username}}</p>\r\n              </div>\r\n\r\n              <div class=\"col-md-9\">\r\n                <p><a routerLink=\"{{ans}}{{q.question._id}}\" class=\"card-link\">{{q.question.question}}</a></p>\r\n              </div>\r\n            </div>\r\n            <hr/>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-9 small question\">\r\n                <p>Answers : {{q.question.answer.length}}</p>\r\n              </div>\r\n              <div class=\"col-sm-2 small\">\r\n                <a href=\"#\" class=\"card-link\">{{q.category}}</a>\r\n                <a href=\"#\" class=\"card-link\">{{q.category}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div align=\"center\">\r\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");






var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(http, router, question, location) {
        this.http = http;
        this.router = router;
        this.question = question;
        this.location = location;
        this.checkbool = false;
        this.bool = false;
        this.loader = true;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (location.pathname === '/main') {
            this.bool = true;
            // localStorage.setItem('component', 'q/a');
            this.question.getQuestions(undefined, undefined, undefined);
            this.question.questionObservable.subscribe(function (value) {
                _this.Question = value;
                _this.loader = false;
                _this.ans = 'answer/';
            });
        }
        else {
            console.log(location.pathname);
            // yeh user k apnay question hn
            this.checkbool = true;
            this.question.getQuestions(undefined, localStorage.getItem('userid'), undefined);
            this.question.questionObservable.subscribe(function (value) {
                _this.Question = value;
                _this.ans = '../../answer/';
            });
        }
    };
    QuestionsComponent.prototype.post_question = function () {
        console.log('asdasd');
        this.router.navigate(['main/postquestion']);
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/recommeded-question/recommeded-question.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/recommeded-question/recommeded-question.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVkZWQtcXVlc3Rpb24vcmVjb21tZWRlZC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recommeded-question/recommeded-question.component.html":
/*!************************************************************************!*\
  !*** ./src/app/recommeded-question/recommeded-question.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <h6 class=\"list-group-item\">Recommended Questions</h6>\r\n  <div *ngFor=\"let q of suggestedQuestions\">\r\n    <a class=\" list-group-item\" routerLink=\"{{ans}}{{q._id}}\">\r\n      {{q.question}}\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recommeded-question/recommeded-question.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/recommeded-question/recommeded-question.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecommededQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommededQuestionComponent", function() { return RecommededQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RecommededQuestionComponent = /** @class */ (function () {
    function RecommededQuestionComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.ans = '/main/answer/';
    }
    RecommededQuestionComponent.prototype.ngOnInit = function () {
        // console.log(this.questionID);
        this.getSuggestedQuestions();
    };
    RecommededQuestionComponent.prototype.getSuggestedQuestions = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/suggestedQuestions', {
            'questionID': this.questionID
        })
            .subscribe(function (data) {
            console.log(data);
            _this.suggestedQuestions = data;
            // this.fetchedData = data;
            // this.fetchedData.forEach(item => {
            //   item.forEach(q => {
            //     this.suggestedQuestions.push({'qid': q._id, 'question' : q.question});
            //   });
            //
            //
            // });
            // console.log(this.suggestedQuestions)
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RecommededQuestionComponent.prototype, "questionID", void 0);
    RecommededQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommeded-question',
            template: __webpack_require__(/*! ./recommeded-question.component.html */ "./src/app/recommeded-question/recommeded-question.component.html"),
            styles: [__webpack_require__(/*! ./recommeded-question.component.css */ "./src/app/recommeded-question/recommeded-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RecommededQuestionComponent);
    return RecommededQuestionComponent;
}());



/***/ }),

/***/ "./src/app/request-order/request-order.component.css":
/*!***********************************************************!*\
  !*** ./src/app/request-order/request-order.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3Qtb3JkZXIvcmVxdWVzdC1vcmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/request-order/request-order.component.html":
/*!************************************************************!*\
  !*** ./src/app/request-order/request-order.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"container\">\r\n      <div id=\"accordion\">\r\n        <div class=\"card\" *ngFor=\"let order of orderRequests\">\r\n          <div class=\"card-header\">\r\n            <a class=\"card-link\" data-toggle=\"collapse\">\r\n              {{order.title}}\r\n            </a>\r\n          </div>\r\n          <div  class=\"collapse show\" data-parent=\"#accordion\">\r\n            <div class=\"card-body\">\r\n              <h6>Order Price: <a>{{order.amount}}</a></h6>\r\n              <hr>\r\n              <h6>Order Description:</h6>\r\n              <p>{{order.description}}</p>\r\n              <hr>\r\n              <h6>Order Delivery Time:</h6>\r\n              <p>{{order.time_limit}}</p>\r\n              <hr>\r\n\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept(order._id)\">Accept</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" style=\"float: right\" (click)=\"discard(order._id)\">Discard</button>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/request-order/request-order.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/request-order/request-order.component.ts ***!
  \**********************************************************/
/*! exports provided: RequestOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOrderComponent", function() { return RequestOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RequestOrderComponent = /** @class */ (function () {
    function RequestOrderComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    RequestOrderComponent.prototype.ngOnInit = function () {
        this.fetchOrderRequests();
    };
    RequestOrderComponent.prototype.accept = function (id) {
        this.acceptOrDiscardOrder('accept', id);
    };
    RequestOrderComponent.prototype.discard = function (id) {
        this.acceptOrDiscardOrder('discard', id);
    };
    RequestOrderComponent.prototype.fetchOrderRequests = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/getOrderRequests', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            _this.orderRequests = data;
        });
    };
    RequestOrderComponent.prototype.acceptOrDiscardOrder = function (request, orderid) {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/acceptOrder', {
            'userid': localStorage.getItem('userid'),
            'orderid': orderid,
            'requestType': request
        })
            .subscribe(function (data) {
            _this.fetchOrderRequests();
        });
    };
    RequestOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-order',
            template: __webpack_require__(/*! ./request-order.component.html */ "./src/app/request-order/request-order.component.html"),
            styles: [__webpack_require__(/*! ./request-order.component.css */ "./src/app/request-order/request-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RequestOrderComponent);
    return RequestOrderComponent;
}());



/***/ }),

/***/ "./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n  background: #31708F !important;\r\n}\r\n.list-group{\r\n  border-collapse: separate;\r\n  border-radius: 25px !important;\r\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHRzaWRlYmFyLXVzZXItZGV0YWlsL3JpZ2h0c2lkZWJhci11c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0dBQzdCLDRFQUE0RTtBQUMvRSIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0c2lkZWJhci11c2VyLWRldGFpbC9yaWdodHNpZGViYXItdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzMxNzA4RiAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWdyb3Vwe1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <h6 class=\"list-group-item active\">Details:</h6>\r\n  <li class=\"list-group-item\">Total Gigs : {{userDetails.gigs.length}} <span></span></li>\r\n  <li class=\"list-group-item\">Orders Completed : {{userDetails.ordersAccepted.length}}<span></span></li>\r\n  <li class=\"list-group-item\">Average Gigs Rating : <span></span></li>\r\n  <li class=\"list-group-item\">Questions Posted : {{userDetails.questions.length}} <span></span></li>\r\n  <li class=\"list-group-item\">Answer Posted : {{userDetails.answers.length}}<span></span></li>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: RightsidebarUserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightsidebarUserDetailComponent", function() { return RightsidebarUserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RightsidebarUserDetailComponent = /** @class */ (function () {
    function RightsidebarUserDetailComponent(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
    }
    RightsidebarUserDetailComponent.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
        this.getDetails();
    };
    RightsidebarUserDetailComponent.prototype.getDetails = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/userdetails', { 'userid': this.userid })
            .subscribe(function (data) {
            _this.userDetails = data;
        });
    };
    RightsidebarUserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rightsidebar-user-detail',
            template: __webpack_require__(/*! ./rightsidebar-user-detail.component.html */ "./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.html"),
            styles: [__webpack_require__(/*! ./rightsidebar-user-detail.component.css */ "./src/app/rightsidebar-user-detail/rightsidebar-user-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RightsidebarUserDetailComponent);
    return RightsidebarUserDetailComponent;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.SendMessage = function (senderId, senderName, receiverId, receiverName, message) {
        return this.http.post("https://stark-chamber-32733.herokuapp.com/chat", {
            senderId: senderId,
            senderName: senderName,
            receiverId: receiverId,
            receiverName: receiverName,
            message: message
        });
    };
    MessageService.prototype.GetMessage = function (senderId, receiverId) {
        return this.http.post("https://stark-chamber-32733.herokuapp.com/getchat", {
            senderId: senderId,
            receiverId: receiverId,
        });
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.questions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.questionObservable = this.questions.asObservable();
    }
    QuestionService.prototype.getQuestions = function (tag, id, search) {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/questions', { tag: tag, id: id, search: search }).subscribe(function (data) {
            _this.questions.next(data);
            console.log(_this.questions);
        });
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (form) {
        return this.http.post('https://stark-chamber-32733.herokuapp.com/user/auth', {
            'email': form.value.emailtext,
            'password': form.value.passtext,
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"row\">\r\n      <div class=\"card col-sm-12\">\r\n        <h5 style=\"margin-top: 8px;\">Update Profile</h5>\r\n        <form class=\"form-update\" (submit)=\"onupdate(onupdatef)\" #onupdatef=\"ngForm\">\r\n          <div style=\"margin-top: 10px;\" class=\"form-label-group password-space\">\r\n            <input type=\"text\" id=\"firstname\" class=\"form-control\" placeholder=\"First Name\" name=\"firstext\" ngModel\r\n                   #firstinput=\"ngModel\" required [(ngModel)]=\"firstname\">\r\n          </div>\r\n          <div *ngIf=\"firstinput.invalid && firstinput.dirty && firstinput.touched\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"firstinput.errors.required\">\r\n              First Name is required.\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"margin-top: 10px;\" class=\"form-label-group password-space\">\r\n            <input type=\"text\" id=\"lastname\" class=\"form-control\" placeholder=\"Last Name\" name=\"lasttext\" ngModel\r\n                   #lastinput=\"ngModel\" required [(ngModel)]=\"lastname\">\r\n          </div>\r\n          <div *ngIf=\"lastinput.invalid && lastinput.dirty && lastinput.touched\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"lastinput.errors.required\">\r\n              Last Name is required.\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"margin-top: 10px;\" class=\"form-label-group password-space\">\r\n            <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" name=\"usertext\" ngModel\r\n                   #userinput=\"ngModel\" required [(ngModel)]=\"username\">\r\n          </div>\r\n          <div *ngIf=\"userinput.invalid && userinput.dirty && userinput.touched\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"userinput.errors.required\">\r\n              User Name is required.\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"margin-top: 10px;\" class=\"form-label-group password-space\">\r\n            <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"emailtext\" ngModel\r\n                   #emailinput=\"ngModel\" required email [(ngModel)]=\"email\">\r\n          </div>\r\n          <div *ngIf=\"emailinput.invalid && emailinput.dirty && emailinput.touched\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"emailinput.errors.required\">\r\n              Email is required.\r\n            </div>\r\n            <div *ngIf=\"emailinput.errors.email\">\r\n              Email is not valid.\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"margin-top: 10px;\" class=\"form-label-group password-space\">\r\n            <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"passtext\" ngModel\r\n                   #passinput=\"ngModel\" required [(ngModel)]=\"password\">\r\n          </div>\r\n          <div *ngIf=\"passinput.invalid && passinput.dirty && passinput.touched\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"passinput.errors.required\">\r\n              Password is required.\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"margin-top: 10px;\" class=\"form-label-group password-space\">\r\n            <input type=\"password\" id=\"repassword\" class=\"form-control\" placeholder=\"Confirm Password\"\r\n                   name=\"repasstext\" ngModel #repassinput=\"ngModel\" required>\r\n          </div>\r\n          <div *ngIf=\"repassinput.invalid && repassinput.dirty && repassinput.touched\"\r\n               class=\"alert alert-danger\">\r\n            <div *ngIf=\"repassinput.errors.required\">\r\n              Re password is required.\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <button type=\"submit\" class=\"btn btn-lg btn-info float-right btn-color choice\" style=\"margin-top: 10px; margin-bottom: 10px; background-color: #31708F\">Update</button>\r\n\r\n          <div style=\"clear: both\"></div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
        this.getDetails();
    };
    SettingsComponent.prototype.onupdate = function (form) {
        if (form.invalid) {
            return;
        }
        if (form.value.passtext === form.value.repasstext) {
            this.http.post('https://stark-chamber-32733.herokuapp.com/updateprofile', { 'userid': this.userid,
                'userdetail': form.value
            }).subscribe(function (data) {
                if (data['message']) {
                    alert('Updated profile');
                }
            });
        }
        else {
            alert('Password mismatched');
        }
    };
    SettingsComponent.prototype.getDetails = function () {
        var _this = this;
        if (!this.userid) {
            return;
        }
        this.http.post('https://stark-chamber-32733.herokuapp.com/userdetails', { 'userid': localStorage.getItem('userid'),
        }).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            _this.firstname = _this.user.first_name;
            _this.lastname = _this.user.last_name;
            _this.username = _this.user.username;
            _this.email = _this.user.email;
            _this.password = _this.user.password;
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar-freelance/sidebar-freelance.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sidebar-freelance/sidebar-freelance.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n  background: #31708F !important;\r\n}\r\n.list-group{\r\n  border-collapse: separate;\r\n  border-radius: 25px !important;\r\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci1mcmVlbGFuY2Uvc2lkZWJhci1mcmVlbGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtHQUM3Qiw0RUFBNEU7QUFDL0UiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyLWZyZWVsYW5jZS9zaWRlYmFyLWZyZWVsYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiAjMzE3MDhGICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sidebar-freelance/sidebar-freelance.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sidebar-freelance/sidebar-freelance.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <h6 class=\"list-group-item active\">Trending Tags</h6>\r\n  <a *ngFor=\"let f of freelancetags\" style=\"color: #009CDA\"  class=\"list-group-item\">{{f}}</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar-freelance/sidebar-freelance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sidebar-freelance/sidebar-freelance.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarFreelanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarFreelanceComponent", function() { return SidebarFreelanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SidebarFreelanceComponent = /** @class */ (function () {
    function SidebarFreelanceComponent(http) {
        this.http = http;
    }
    SidebarFreelanceComponent.prototype.ngOnInit = function () {
        this.getFreelanceCategories();
    };
    SidebarFreelanceComponent.prototype.getFreelanceCategories = function () {
        var _this = this;
        this.http.get('https://stark-chamber-32733.herokuapp.com/getfreelancetags').subscribe(function (data) {
            _this.freelancetags = data;
        });
    };
    SidebarFreelanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-freelance',
            template: __webpack_require__(/*! ./sidebar-freelance.component.html */ "./src/app/sidebar-freelance/sidebar-freelance.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-freelance.component.css */ "./src/app/sidebar-freelance/sidebar-freelance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SidebarFreelanceComponent);
    return SidebarFreelanceComponent;
}());



/***/ }),

/***/ "./src/app/sidebar-question/sidebar-question.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sidebar-question/sidebar-question.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXItcXVlc3Rpb24vc2lkZWJhci1xdWVzdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar-question/sidebar-question.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sidebar-question/sidebar-question.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <a href=\"#\" class=\"list-group-item\">My Questions</a>\r\n  <a href=\"#\" class=\"list-group-item\">My Answers</a>\r\n  <a href=\"/main/freelance/account-freelance\" class=\"list-group-item\">Account</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar-question/sidebar-question.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sidebar-question/sidebar-question.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarQuestionComponent", function() { return SidebarQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarQuestionComponent = /** @class */ (function () {
    function SidebarQuestionComponent() {
    }
    SidebarQuestionComponent.prototype.ngOnInit = function () {
    };
    SidebarQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-question',
            template: __webpack_require__(/*! ./sidebar-question.component.html */ "./src/app/sidebar-question/sidebar-question.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-question.component.css */ "./src/app/sidebar-question/sidebar-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarQuestionComponent);
    return SidebarQuestionComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-label-group{\r\n  margin-top: 20px;\r\n}\r\n\r\n.password-space{\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.form-signin{\r\n  margin-: 50px;\r\n}\r\n\r\n.space{\r\n  padding-top: 20px;\r\n}\r\n\r\n.choice{\r\n  margin-top: 20px;\r\n}\r\n\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLDRFQUE0RTtBQUM5RSIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1sYWJlbC1ncm91cHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3BhY2V7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbntcclxuICBtYXJnaW4tOiA1MHB4O1xyXG59XHJcblxyXG4uc3BhY2V7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmNob2ljZXtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n      <div class=\"card card-signin my-5\" style=\"background-color: #EDF5E0\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-center space\">User Signup</h5>\r\n          <form class=\"form-signin\" (submit)=\"onsignup(onsignupf)\" #onsignupf=\"ngForm\">\r\n            <div class=\"form-label-group password-space\">\r\n              <input type=\"text\" id=\"firstname\" class=\"form-control\" placeholder=\"First Name\" name=\"firstext\" ngModel\r\n                     #firstinput=\"ngModel\" required>\r\n            </div>\r\n            <div *ngIf=\"firstinput.invalid && firstinput.dirty && firstinput.touched\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"firstinput.errors.required\">\r\n                First Name is required.\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-label-group password-space\">\r\n              <input type=\"text\" id=\"lastname\" class=\"form-control\" placeholder=\"Last Name\" name=\"lasttext\" ngModel\r\n                     #lastinput=\"ngModel\" required>\r\n            </div>\r\n            <div *ngIf=\"lastinput.invalid && lastinput.dirty && lastinput.touched\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"lastinput.errors.required\">\r\n                Last Name is required.\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-label-group password-space\">\r\n              <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" name=\"usertext\" ngModel\r\n                     #userinput=\"ngModel\" required>\r\n            </div>\r\n            <div *ngIf=\"userinput.invalid && userinput.dirty && userinput.touched\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"userinput.errors.required\">\r\n                User Name is required.\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-label-group password-space\">\r\n              <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"emailtext\" ngModel\r\n                     #emailinput=\"ngModel\" required email>\r\n            </div>\r\n            <div *ngIf=\"emailinput.invalid && emailinput.dirty && emailinput.touched\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"emailinput.errors.required\">\r\n                Email is required.\r\n              </div>\r\n              <div *ngIf=\"emailinput.errors.email\">\r\n                Email is not valid.\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-label-group password-space\">\r\n              <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"passtext\" ngModel\r\n                     #passinput=\"ngModel\" required>\r\n            </div>\r\n            <div *ngIf=\"passinput.invalid && passinput.dirty && passinput.touched\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"passinput.errors.required\">\r\n                Password is required.\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-label-group password-space\">\r\n              <input type=\"password\" id=\"repassword\" class=\"form-control\" placeholder=\"Confirm Password\"\r\n                     name=\"repasstext\" ngModel #repassinput=\"ngModel\" required>\r\n            </div>\r\n            <div *ngIf=\"repassinput.invalid && repassinput.dirty && repassinput.touched\"\r\n                 class=\"alert alert-danger\">\r\n              <div *ngIf=\"repassinput.errors.required\">\r\n                Re password is required.\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <button type=\"submit\" style=\"background-color: #31708F\" class=\"btn btn-lg btn-info btn-block btn-color choice\">Sign Up</button>\r\n\r\n            <div class=\"choice\">\r\n              <a routerLink=\"\" class=\"password-space\">&nbsp;Login</a>\r\n            </div>\r\n            <div style=\"clear: both\"></div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onsignup = function (form) {
        var _this = this;
        if (form.invalid) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Signup", "UnSuccessful", "error");
        }
        this.http.post('https://stark-chamber-32733.herokuapp.com/user', {
            'first_name': form.value.firstext,
            'last_name': form.value.lasttext,
            'email': form.value.emailtext,
            'username': form.value.usertext,
            'password': form.value.passtext
        }).subscribe(function (data) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Signup", "Succesful", "success");
            _this.router.navigate(['']);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/trendingtagsquestion/trendingtagsquestion.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/trendingtagsquestion/trendingtagsquestion.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n  background: #31708F !important;\r\n}\r\n.list-group{\r\n  border-collapse: separate;\r\n  border-radius: 25px !important;\r\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmd0YWdzcXVlc3Rpb24vdHJlbmRpbmd0YWdzcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtHQUM3Qiw0RUFBNEU7QUFDL0UiLCJmaWxlIjoic3JjL2FwcC90cmVuZGluZ3RhZ3NxdWVzdGlvbi90cmVuZGluZ3RhZ3NxdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiAjMzE3MDhGICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZ3JvdXB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/trendingtagsquestion/trendingtagsquestion.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/trendingtagsquestion/trendingtagsquestion.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <h6 class=\"list-group-item active\">Trending Tags</h6>\r\n  <a *ngFor=\"let q of questiontags\"  style=\"color: #009CDA\"  class=\"list-group-item\"(click)=\"searchTag(q)\">{{q}}</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trendingtagsquestion/trendingtagsquestion.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/trendingtagsquestion/trendingtagsquestion.component.ts ***!
  \************************************************************************/
/*! exports provided: TrendingtagsquestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingtagsquestionComponent", function() { return TrendingtagsquestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TrendingtagsquestionComponent = /** @class */ (function () {
    function TrendingtagsquestionComponent(question, http) {
        this.question = question;
        this.http = http;
    }
    TrendingtagsquestionComponent.prototype.ngOnInit = function () {
        this.getQuestionCategories();
        this.question.questionObservable.subscribe(function (value) {
            // this.questions = value;
        });
    };
    TrendingtagsquestionComponent.prototype.searchTag = function (tag) {
        this.question.getQuestions(tag, undefined, undefined);
    };
    TrendingtagsquestionComponent.prototype.getQuestionCategories = function () {
        var _this = this;
        this.http.get('https://stark-chamber-32733.herokuapp.com/getquestiontags').subscribe(function (data) {
            _this.questiontags = data;
        });
    };
    TrendingtagsquestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trendingtagsquestion',
            template: __webpack_require__(/*! ./trendingtagsquestion.component.html */ "./src/app/trendingtagsquestion/trendingtagsquestion.component.html"),
            styles: [__webpack_require__(/*! ./trendingtagsquestion.component.css */ "./src/app/trendingtagsquestion/trendingtagsquestion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TrendingtagsquestionComponent);
    return TrendingtagsquestionComponent;
}());



/***/ }),

/***/ "./src/app/user-account/user-account.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-account/user-account.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  padding: 0px !important;\r\n  margin-right:2%;\r\n  margin-bottom: 10px;\r\n  border: hidden;\r\n  margin-left: 0px !important;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.h5{\r\n  margin-left: 7px;\r\n}\r\n.list-group-item{\r\n  border: hidden;\r\n}\r\n.footer{\r\n  margin-top: 25px;\r\n}\r\n.tags{\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n}\r\n.h4{\r\n  margin: 5px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1hY2NvdW50L3VzZXItYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1hY2NvdW50L3VzZXItYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmg1e1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBib3JkZXI6IGhpZGRlbjtcclxufVxyXG4uZm9vdGVye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnRhZ3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5oNHtcclxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-account/user-account.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-account/user-account.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\" >\r\n    <div class=\"accordion\"  id=\"accordionExample\">\r\n      <div  class=\"card\" >\r\n        <div class=\"card-header\" id=\"headingOne\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n              Current Amount\r\n            </button>\r\n          </h5>\r\n        </div>\r\n\r\n        <div id=\"collapseOne\" *ngIf=\"userAccount\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n        {{userAccount.currentAmount}} $\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n              Earnings:\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseTwo\" *ngIf=\"userAccount\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\" *ngFor=\"let earning of userAccount.earnings\">\r\n              <div class=\"col-sm-3\">Date: {{earning.date}}</div>\r\n              <div class=\"col-sm-3\">Amount: {{earning.amount}} $</div>\r\n              <div class=\"col-sm-3\">Gig Name: {{earning.gig_name}}</div>\r\n              <div class=\"col-sm-3\">Client: {{earning.client_id}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingThree\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n              Transactions:\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseThree\" *ngIf=\"userAccount\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\" *ngFor=\"let transaction of userAccount.transactions\">\r\n              <div class=\"col-sm-3\">Date: {{transaction.date}}</div>\r\n              <div class=\"col-sm-3\">Amount: {{transaction.amount}} $</div>\r\n              <div class=\"col-sm-3\">Gig Name: {{transaction.gig_name}}</div>\r\n              <div class=\"col-sm-3\">ClientID: {{transaction.client_id}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-account/user-account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-account/user-account.component.ts ***!
  \********************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserAccountComponent = /** @class */ (function () {
    function UserAccountComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.userAccount = undefined;
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        this.getAccountDetails();
    };
    UserAccountComponent.prototype.getAccountDetails = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/getAccountDetails', {
            'userid': localStorage.getItem('userid')
        })
            .subscribe(function (data) {
            _this.userAccount = data;
            console.log(_this.userAccount);
        });
    };
    UserAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-account',
            template: __webpack_require__(/*! ./user-account.component.html */ "./src/app/user-account/user-account.component.html"),
            styles: [__webpack_require__(/*! ./user-account.component.css */ "./src/app/user-account/user-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserAccountComponent);
    return UserAccountComponent;
}());



/***/ }),

/***/ "./src/app/user-main/user-main.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-main/user-main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  color: #31708F;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYWluL3VzZXItbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tYWluL3VzZXItbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGNvbG9yOiAjMzE3MDhGO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-main/user-main.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-main/user-main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-main/user-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-main/user-main.component.ts ***!
  \**************************************************/
/*! exports provided: UserMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMainComponent", function() { return UserMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserMainComponent = /** @class */ (function () {
    function UserMainComponent() {
    }
    UserMainComponent.prototype.ngOnInit = function () {
    };
    UserMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-main',
            template: __webpack_require__(/*! ./user-main.component.html */ "./src/app/user-main/user-main.component.html"),
            styles: [__webpack_require__(/*! ./user-main.component.css */ "./src/app/user-main/user-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserMainComponent);
    return UserMainComponent;
}());



/***/ }),

/***/ "./src/app/user-profile-details/user-profile-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/user-profile-details/user-profile-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  padding: 0px !important;\r\n  margin-right:2%;\r\n  margin-bottom: 10px;\r\n  border: hidden;\r\n  margin-left: 0px !important;\r\n}\r\n.card{\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.h5{\r\n  margin-left: 7px;\r\n}\r\n.list-group-item{\r\n  border: hidden;\r\n}\r\n.footer{\r\n  margin-top: 25px;\r\n}\r\n.tags{\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n}\r\n.h4{\r\n  margin: 5px !important;\r\n}\r\n.main{\r\n  margin-left: 15px !important;\r\n  margin-top: 15px;\r\n}\r\n.btn-primary{\r\n  margin-top: 15px;\r\n}\r\n.space{\r\n  margin: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlLWRldGFpbHMvdXNlci1wcm9maWxlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDRFQUE0RTtBQUM5RTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUtZGV0YWlscy91c2VyLXByb2ZpbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiBoaWRkZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmg1e1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBib3JkZXI6IGhpZGRlbjtcclxufVxyXG4uZm9vdGVye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnRhZ3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5oNHtcclxuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWlue1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uc3BhY2V7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-profile-details/user-profile-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user-profile-details/user-profile-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <app-user-profile-sidebar></app-user-profile-sidebar>\r\n  </div>\r\n  <div class=\"col-sm-7\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <button style=\"background-color: #31708F; margin-bottom: 12px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"addnewgigs()\">Add New\r\n          Gigs\r\n        </button>\r\n      </div>\r\n      <div *ngFor=\"let g of userGigs\" style=\"margin-bottom: 10px;\" class=\"row tags\">\r\n        <div class=\"col-sm-6\" style=\"margin-right: 10px; margin-left: 10px;\">\r\n          <div class=\"card\" style=\"width:13rem;\">\r\n            <img class=\"card-img-top\" src=\"{{g.photo}}\" alt=\"Card image\">\r\n            <h5 class=\"list-group-item\"><a routerLink=\"gig_details/{{g._id}}\">{{g.title}}</a></h5>\r\n            <p class=\"list-group-item\">4.2/5.0</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <app-rightsidebar-user-detail></app-rightsidebar-user-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile-details/user-profile-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user-profile-details/user-profile-details.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDetailsComponent", function() { return UserProfileDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserProfileDetailsComponent = /** @class */ (function () {
    function UserProfileDetailsComponent(router, http) {
        this.router = router;
        this.http = http;
        this.order_title = '1';
    }
    UserProfileDetailsComponent.prototype.ngOnInit = function () {
        this.fetchUserGigs();
    };
    UserProfileDetailsComponent.prototype.addnewgigs = function () {
        this.router.navigate(['main/userprofile/add-gig']);
    };
    UserProfileDetailsComponent.prototype.fetchUserGigs = function () {
        var _this = this;
        this.http.post('https://stark-chamber-32733.herokuapp.com/fetchgigs', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            console.log(data);
            _this.userGigs = data;
        });
    };
    UserProfileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile-details',
            template: __webpack_require__(/*! ./user-profile-details.component.html */ "./src/app/user-profile-details/user-profile-details.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-details.component.css */ "./src/app/user-profile-details/user-profile-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserProfileDetailsComponent);
    return UserProfileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-profile-sidebar/user-profile-sidebar.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/user-profile-sidebar/user-profile-sidebar.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n  background: #31708F !important;\r\n}\r\n\r\n.list-group {\r\n  border-collapse: separate;\r\n  border-radius: 25px !important;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlLXNpZGViYXIvdXNlci1wcm9maWxlLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsNEVBQTRFO0FBQzlFIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlLXNpZGViYXIvdXNlci1wcm9maWxlLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMzMTcwOEYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user-profile-sidebar/user-profile-sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user-profile-sidebar/user-profile-sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <h6 class=\"list-group-item active\">User Links</h6>\r\n  <a routerLink=\"/main/userprofile/myquestion\" class=\"list-group-item\">My Questions</a>\r\n  <a routerLink=\"/main/userprofile/myanswer\" class=\"list-group-item\">My Answers</a>\r\n  <a routerLink=\"/main/userprofile/chat\" class=\"list-group-item\">Chat</a>\r\n  <a routerLink=\"/main/userprofile/order-requests\" class=\"list-group-item\">Orders Request</a>\r\n  <a routerLink=\"/main/userprofile/my-orders\" class=\"list-group-item\">My Orders</a>\r\n  <a routerLink=\"/main/userprofile/account\" class=\"list-group-item\">My Account</a>\r\n  <a routerLink=\"/main/userprofile/pending-orders\" class=\"list-group-item\">Pending Orders</a>\r\n  <a routerLink=\"/main/userprofile/myjob/{{userid}}\" class=\"list-group-item\">My Jobs</a>\r\n  <a routerLink=\"/main/userprofile/settings\" class=\"list-group-item\">Update Profile</a>\r\n  <!--<a routerLink=\"/main/userprofile/myjob-applied\" class=\"list-group-item\">My Jobs Applied</a>-->\r\n  <a class=\"list-group-item\">Sign out</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile-sidebar/user-profile-sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user-profile-sidebar/user-profile-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileSidebarComponent", function() { return UserProfileSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileSidebarComponent = /** @class */ (function () {
    function UserProfileSidebarComponent() {
    }
    UserProfileSidebarComponent.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
    };
    UserProfileSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile-sidebar',
            template: __webpack_require__(/*! ./user-profile-sidebar.component.html */ "./src/app/user-profile-sidebar/user-profile-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-sidebar.component.css */ "./src/app/user-profile-sidebar/user-profile-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileSidebarComponent);
    return UserProfileSidebarComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-right:2%;\r\n    margin-bottom: 10px;\r\n  }\r\n.gigs-det{\r\n    padding: 5px;\r\n}\r\n.color{\r\n    background-color: #F8F9FA;\r\n}\r\n.margin{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-bottom: 5px;\r\n}\r\n.gig-card{\r\n  margin-top: 10px;\r\n  margin-left: 6.25%;\r\n}\r\n.btn-primary{\r\n  margin-top: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNGO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbi5naWdzLWRldHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZBO1xyXG59XHJcbi5tYXJnaW57XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uZ2lnLWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNi4yNSU7XHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\askandfreelance\askandfreelance\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map