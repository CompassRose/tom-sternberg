(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-resume-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/Observable.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Observable.js ***!
  \******************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/catch.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/catch */ "./node_modules/rxjs-compat/_esm5/operator/catch.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/map.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/map.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm5/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/catch.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/catch.js ***!
  \**********************************************************/
/*! exports provided: _catch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_catch", function() { return _catch; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function _catch(selector) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(selector)(this);
}
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/map.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/map.js ***!
  \********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/resume/carousel/carousel.component.html":
/*!*********************************************************!*\
  !*** ./src/app/resume/carousel/carousel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"width-container d-flex flex-column justify-content-center\">\r\n  <div class=\"d-flex align-items-center overlay w-100\">\r\n    <div (click)=\"setOriginBack(36);\" class=\"next mr-auto ml-5\"><i class=\"fa fa-arrow-circle-o-left\"></i></div>\r\n    <div class=\"carousel-container\">\r\n      <div class=\"carousel\" *ngIf=\"projectValues$.length\" [ngStyle]=\"{'transform': getCurrentPosition()}\">\r\n        <div *ngFor=\"let game of projectValues$; let $idx = index;\">\r\n          <div (click)=\"openModal($idx);  videoPlayer = true\"\r\n               [ngClass]=\"game.order\">\r\n            <div class=\"mt-1 p-1\">{{game.projectName}}</div>\r\n            <img class=\"box-image\" [src]=\"IMG_PATH+game.boxImage\"/>\r\n            <div class=\"description-area\">\r\n              <div class=\"game-type\">{{game.projectPlatform}}</div>\r\n              <div class=\"game-desc\">{{game.projectRole}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div (click)=\"setOriginForward(36)\" class=\"prev ml-auto mr-5\"><i class=\"fa fa-arrow-circle-o-right\"></i></div>\r\n  </div>\r\n</div>\r\n<ngbd-video-modal-component></ngbd-video-modal-component>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/resume/carousel/carousel.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/resume/carousel/carousel.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n.width-container {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 20px; }\n.width-container .carousel-container {\n    opacity: 1;\n    z-index: 10;\n    margin: 50px auto;\n    width: 250px;\n    height: 360px;\n    -webkit-perspective: 2000px;\n            perspective: 2000px; }\n.width-container .carousel-container .carousel {\n      height: 100%;\n      position: relative;\n      -webkit-transform-style: preserve-3d;\n              transform-style: preserve-3d;\n      transition: -webkit-transform 0.4s ease-in-out;\n      transition: transform 0.4s ease-in-out;\n      transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out; }\n.overlay {\n  height: 540px;\n  background-color: rgba(0, 0, 60, 0.9); }\n.item {\n  font-weight: 600;\n  font-family: 'Montserrat', sans-serif;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #FFBB46;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 7px;\n  padding: 0 7px;\n  background: rgba(26, 62, 85, 0.92);\n  border: 1px solid #3c6d82;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);\n  text-shadow: 1px 1px 2px black; }\n.item .box-image {\n    width: 175px;\n    border: 1px solid #213343;\n    margin: 10px;\n    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.65); }\n.item .description-area {\n    min-height: 70px;\n    width: 220px; }\n.item .description-area .game-type {\n      font-weight: normal;\n      padding: 0 10px;\n      font-size: 14px;\n      color: #FFBB46; }\n.item .description-area .game-desc {\n      font-weight: normal;\n      padding: 0 10px;\n      font-size: 13px;\n      color: white; }\n.item:hover {\n    border: 1px solid #FFBB46; }\n.a {\n  -webkit-transform: rotateY(0deg) translateZ(400px);\n          transform: rotateY(0deg) translateZ(400px); }\n.b {\n  -webkit-transform: rotateY(36deg) translateZ(400px);\n          transform: rotateY(36deg) translateZ(400px); }\n.c {\n  -webkit-transform: rotateY(72deg) translateZ(400px);\n          transform: rotateY(72deg) translateZ(400px); }\n.d {\n  -webkit-transform: rotateY(108deg) translateZ(400px);\n          transform: rotateY(108deg) translateZ(400px); }\n.e {\n  -webkit-transform: rotateY(144deg) translateZ(400px);\n          transform: rotateY(144deg) translateZ(400px); }\n.f {\n  -webkit-transform: rotateY(180deg) translateZ(400px);\n          transform: rotateY(180deg) translateZ(400px); }\n.g {\n  -webkit-transform: rotateY(216deg) translateZ(400px);\n          transform: rotateY(216deg) translateZ(400px); }\n.h {\n  -webkit-transform: rotateY(252deg) translateZ(400px);\n          transform: rotateY(252deg) translateZ(400px); }\n.i {\n  -webkit-transform: rotateY(288deg) translateZ(400px);\n          transform: rotateY(288deg) translateZ(400px); }\n.j {\n  -webkit-transform: rotateY(324deg) translateZ(400px);\n          transform: rotateY(324deg) translateZ(400px); }\n.next, .prev {\n  color: #eace4b;\n  font-size: 50px;\n  cursor: pointer; }\n.next:hover, .prev:hover {\n    color: red; }\n"

/***/ }),

/***/ "./src/app/resume/carousel/carousel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/resume/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_ngb_video_modal_ngb_video_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/ngb-video-modal/ngb-video-modal.component */ "./src/app/shared/components/ngb-video-modal/ngb-video-modal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(modalService, http) {
        this.modalService = modalService;
        this.http = http;
        this.currdeg1 = 0;
        this.aggregate = 0;
        this.menuOpen = false;
        this.videoPlayer = true;
        this.IMG_PATH = '../../assets/img/vgames/';
    }
    CarouselComponent.prototype.ngOnChanges = function () {
        this.projectValues$ = this.historyValues;
    };
    CarouselComponent.prototype.openModal = function (e) {
        console.log('openModal ', e);
        var modalRef = this.modalService.open(_shared_components_ngb_video_modal_ngb_video_modal_component__WEBPACK_IMPORTED_MODULE_2__["NgbdVideoModalComponent"], {
            size: 'lg'
        });
        modalRef.componentInstance.modalName = this.projectValues$[e].video;
        modalRef.componentInstance.modalGroup = this.projectValues$[e].projectName;
        modalRef.componentInstance.description = this.projectValues$[e];
    };
    CarouselComponent.prototype.setOriginBack = function (value) {
        this.currdeg1 -= value;
        this.aggregate -= value;
        if (this.aggregate === -360) {
            this.aggregate = 0;
        }
        this.getCurrentPosition();
    };
    CarouselComponent.prototype.setOriginForward = function (value) {
        this.currdeg1 += value;
        this.aggregate += value;
        if (this.aggregate === 360) {
            this.aggregate = 0;
        }
        this.getCurrentPosition();
    };
    CarouselComponent.prototype.getCurrentPosition = function () {
        return 'rotateY(' + this.currdeg1 + 'deg)';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "historyValues", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/resume/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/resume/carousel/carousel.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/resume/resume-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ResumeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeRoutingModule", function() { return ResumeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume.component */ "./src/app/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"]
    }
];
var ResumeRoutingModule = /** @class */ (function () {
    function ResumeRoutingModule() {
    }
    ResumeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResumeRoutingModule);
    return ResumeRoutingModule;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel\r\n[historyValues]=\"gameHistoryValues$\">\r\n</app-carousel>\r\n\r\n<!--<div class=\"cover-letter visible d-flex flex-column text-white p-3\">-->\r\n  <!--<h2 class=\"text-left\">Font Localization Test</h2>-->\r\n  <!--<br>-->\r\n  <!--<p class=\"text-left header-sm\">-->\r\n    <!--Лорем ипсум долор сит амет, пер цлита поссит ех, ат мунере фабулас петентиум сит. Иус цу цибо саперет сцрипсерит,-->\r\n    <!--нец виси муциус лабитур ид. Ет хис нонумес нолуиссе дигниссим-->\r\n  <!--</p>-->\r\n  <!--<p class=\"text-left header-sm\">-->\r\n    <!--ים מועמדים של, דת דפים מאמרשיחהצפה זאת. אתה דת שונה כלשהו, גם אחר ליום בשפות, או ניווט פולנית לחיבור ארץ. ויש בקלות-->\r\n    <!--ואמנות אירועים או, אל אינו כלכלה שתי.-->\r\n  <!--</p>-->\r\n  <!--<p class=\"text-left\">-->\r\n    <!--पढाए हिंदी रहारुप अनुवाद कार्यलय मुख्य संस्था सोफ़तवेर निरपेक्ष उनका आपके बाटते आशाआपस मुख्यतह उशकी करता। शुरुआत-->\r\n    <!--संस्था कुशलता मेंभटृ-->\r\n  <!--</p>-->\r\n\r\n  <!--<p class=\"text-left\"> 側経意責家方家閉討店暖育田庁載社転線宇。得君新術治温抗添代話考振投員殴大闘北裁-->\r\n  <!--</p>-->\r\n  <!--<p class=\"text-left\"> واستمر العصبة ضرب قد. وباءت الأمريكي الأوربيين هو به،, هو العالم، الثقيلة بال. مع وايرلندا-->\r\n    <!--الأوروبيّون كان, قد بحق أسابيع-->\r\n  <!--</p>-->\r\n  <!--<br>-->\r\n  <!--<br>-->\r\n  <!--<br>-->\r\n  <!--<div class=\"pr-5 pl-5\">-->\r\n    <!--<img class=\"w-50\" src=\"../../../assets/img/splashScreen4.png\"/>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/game-history.service */ "./src/app/resume/services/game-history.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(http, gameHistory) {
        this.http = http;
        this.gameHistory = gameHistory;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        this.retrieveHistory();
    };
    ResumeComponent.prototype.retrieveHistory = function () {
        var _this = this;
        this.gameHistory.getHistoryContents().subscribe(function (data) {
            _this.gameHistoryValues$ = data;
        });
    };
    ResumeComponent.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + " - " + error.statusText
                : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")],
            providers: [_services_game_history_service__WEBPACK_IMPORTED_MODULE_1__["GameHistoryService"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_game_history_service__WEBPACK_IMPORTED_MODULE_1__["GameHistoryService"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.module.ts":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _resume_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume-routing.module */ "./src/app/resume/resume-routing.module.ts");
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/resume/carousel/carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ResumeModule = /** @class */ (function () {
    function ResumeModule() {
    }
    ResumeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _resume_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResumeRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot()
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            declarations: [
                _resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"]
            ]
        })
    ], ResumeModule);
    return ResumeModule;
}());



/***/ }),

/***/ "./src/app/resume/services/game-history.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/resume/services/game-history.service.ts ***!
  \*********************************************************/
/*! exports provided: GameHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameHistoryService", function() { return GameHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASE_URL = '../assets/data-collections/experience.json';
var GameHistoryService = /** @class */ (function () {
    function GameHistoryService(http) {
        this.http = http;
    }
    GameHistoryService.prototype.getHistoryContents = function () {
        return this.http
            .get(BASE_URL)
            .map(function (response) { return response[1].projects; })
            .catch(this.handleError);
    };
    GameHistoryService.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + " - " + error.statusText
                : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    GameHistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameHistoryService);
    return GameHistoryService;
}());



/***/ })

}]);
//# sourceMappingURL=resume-resume-module.js.map