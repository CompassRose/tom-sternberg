(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["family-family-module"],{

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        console.log('getUsers');
        return this.http.get('/api/users').map(function (result) { return (_this.result = result); });
    };
    DataService.prototype.getPictures = function () {
        var _this = this;
        console.log('getPictures');
        return this.http.get('/api/pictures').map(function (result) { return (_this.pictures = result); });
    };
    DataService.prototype.postPictures = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        // const newPictureData = req.body;
        //  return this.http.post('/api/pictures');
        console.log('New Invite Name ');
        return this.http.post('/api/pictures', { name: '2' }, { headers: headers });
    };
    DataService.prototype.processResponse = function (values) {
        console.log('processResponse ', this.result);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/family/family-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/family/family-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FamilyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyRoutingModule", function() { return FamilyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _family_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./family.component */ "./src/app/family/family.component.ts");
/* harmony import */ var _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/pictures.component */ "./src/app/family/pictures/pictures.component.ts");
/* harmony import */ var _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./family-tree/family-tree.component */ "./src/app/family/family-tree/family-tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FamilyRoutingModule = /** @class */ (function () {
    function FamilyRoutingModule() {
    }
    FamilyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: 'family-routes',
                        component: _family_component__WEBPACK_IMPORTED_MODULE_2__["FamilyComponent"],
                        children: [
                            { path: 'pictures', component: _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_3__["PicturesComponent"] },
                            { path: 'familyTree', component: _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_4__["FamilyTreeComponent"] }
                        ]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FamilyRoutingModule);
    return FamilyRoutingModule;
}());



/***/ }),

/***/ "./src/app/family/family-tree/family-tree.component.html":
/*!***************************************************************!*\
  !*** ./src/app/family/family-tree/family-tree.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center\">\r\n  <div *ngFor=\"let node of treeData\">\r\n    <div class=\"family-node-styling d-flex flex-column align-items-center mr-5\">\r\n      <div class=\"d-flex align-items-center mb-4 text-white\">\r\n        <a class=\"parent-node-styling d-flex flex-column justify-content-center align-items-center mr-3\">\r\n          <div>{{node.member.firstname}} {{node.member.lastname}}</div>\r\n          <img height=\"70\" width=\"70\" [src]=\"'src/app/family/people/' +node.member.image\"/>\r\n        </a>\r\n        <a class=\"parent-node-styling  d-flex flex-column justify-content-center align-items-center\">\r\n          <div>{{node.partner.firstname}} {{node.partner.lastname}}</div>\r\n          <img height=\"70\" width=\"70\" [src]=\"'src/app/family/people/' + node.partner.image\"/>\r\n        </a>\r\n      </div>\r\n      <div class=\"child-group-styling d-flex align-items-center\">\r\n        <div *ngFor=\"let kid of node.children\">\r\n          <div class=\"child-node-styling d-flex flex-column justify-content-center align-items-center mr-3\">\r\n            <div class=\"display-sm\">{{kid.member.firstname}} {{kid.member.lastname}}</div>\r\n            <img height=\"50\" width=\"50\" [src]=\"'src/app/family/people/' +node.member.image\"/>\r\n          </div>\r\n          <!--<div *ngIf=\"kid.member.children\" class=\"child-group-styling d-flex align-items-center\">-->\r\n            <!--<div *ngFor=\"let kidChild of kid.member.children\">-->\r\n              <!--<div class=\"child-child-node-styling d-flex flex-column justify-content-center align-items-center mr-3\">-->\r\n                <!--<div class=\"display-sm\">{{kidChild.firstname}} {{kidChild.lastname}}</div>-->\r\n                <!--<img height=\"50\" width=\"50\" [src]=\"'src/app/family/people/' +kidChild.image\"/>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/family/family-tree/family-tree.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/family/family-tree/family-tree.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".family-node-styling {\n  background-color: rgba(0, 0, 0, 0.05);\n  padding: 20px; }\n\n.parent-node-styling {\n  min-width: 150px;\n  padding: 10px;\n  background-color: rgba(0, 0, 255, 0.27); }\n\n.child-group-styling {\n  padding: 20px;\n  border: 1px solid white;\n  border-bottom-color: transparent; }\n\n.child-node-styling {\n  min-width: 140px;\n  color: white;\n  padding: 10px;\n  background-color: blue; }\n\n.child-child-node-styling {\n  margin-top: 200px;\n  min-width: 140px;\n  color: white;\n  padding: 10px;\n  background-color: red; }\n"

/***/ }),

/***/ "./src/app/family/family-tree/family-tree.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/family/family-tree/family-tree.component.ts ***!
  \*************************************************************/
/*! exports provided: FamilyTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyTreeComponent", function() { return FamilyTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/picture.service */ "./src/app/family/services/picture.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FamilyTreeComponent = /** @class */ (function () {
    function FamilyTreeComponent(_pictureService) {
        this._pictureService = _pictureService;
        this.testData = [];
        this.getSternbergCollection();
    }
    FamilyTreeComponent.prototype.ngOnInit = function () {
        console.log('Family Tree Yay!');
    };
    FamilyTreeComponent.prototype.getSternbergCollection = function () {
        var _this = this;
        this._pictureService.getFamilyContents().subscribe(function (data) {
            // this.treeData = data.map(d => {
            //     console.log('getFamilyContents ', d);
            //     return d;
            // });
            _this.treeData = data.Sternberg;
            _this.testData.push(data.Sternberg);
            console.log('getFamilyContents ', _this.treeData);
        });
    };
    FamilyTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-family-tree',
            template: __webpack_require__(/*! ./family-tree.component.html */ "./src/app/family/family-tree/family-tree.component.html"),
            styles: [__webpack_require__(/*! ./family-tree.component.scss */ "./src/app/family/family-tree/family-tree.component.scss")],
            providers: [_services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"]]
        }),
        __metadata("design:paramtypes", [_services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"]])
    ], FamilyTreeComponent);
    return FamilyTreeComponent;
}());



/***/ }),

/***/ "./src/app/family/family.component.html":
/*!**********************************************!*\
  !*** ./src/app/family/family.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"topheader\">\r\n  <div class=\"d-flex w-100 py-4\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"active\"><a routerLink=\"pictures\" href=\"#home\">Pictures<span class=\"sr-only\">(current)</span></a></li>\r\n      <li><a routerLink=\"familyTree\" href=\"#page1\">Family Tree</a></li>\r\n    </ul>\r\n    <button class=\"btn btn-sm help btn-primary display-md f-weight-600\" (click)=\"openModal();\">?</button>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!--<app-read></app-read>-->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/family/family.component.scss":
/*!**********************************************!*\
  !*** ./src/app/family/family.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn.btn-sm.help {\n  font-size: .9rem;\n  padding: 0.1rem 0.7rem; }\n"

/***/ }),

/***/ "./src/app/family/family.component.ts":
/*!********************************************!*\
  !*** ./src/app/family/family.component.ts ***!
  \********************************************/
/*! exports provided: FamilyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyComponent", function() { return FamilyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/pictures.component */ "./src/app/family/pictures/pictures.component.ts");
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/picture.service */ "./src/app/family/services/picture.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/custom-tooltip/custom-tooltip.component */ "./src/app/shared/components/custom-tooltip/custom-tooltip.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_ngb_transclude_modal_ngb_transclude_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/ngb-transclude-modal/ngb-transclude-modal.component */ "./src/app/shared/components/ngb-transclude-modal/ngb-transclude-modal.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FamilyComponent = /** @class */ (function () {
    function FamilyComponent(picturesComponent, tooltipComponent, _pictureService, _dataService, modalService) {
        this.picturesComponent = picturesComponent;
        this.tooltipComponent = tooltipComponent;
        this._pictureService = _pictureService;
        this._dataService = _dataService;
        this.modalService = modalService;
        this.pictures = [];
        this.selectedIdx = 1;
        this.modalButtons = {
            name: 'Close'
        };
        this.screenInstructions = [
            'The Inspector screen shows sales information by Sales Person, Billing Mode and Time Period.',
            'Hover over chart elements for detailed information',
            'Click on one or more chart elements and filter for more specific details',
            'View your filters in the Search Criteria window',
            'Press Disk button to save filter groups to Saved Searches',
            'Load or delete Saved Searches',
            'Details and Map tabs reflect filtered values'
        ];
    }
    FamilyComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__('#topheader .navbar-nav a').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__('#topheader .navbar-nav')
                .find('li.active')
                .removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this)
                .parent('li')
                .addClass('active');
        });
        this.getUserCollection();
        this.getPictureCollection();
        // this._dataService.getUsers().subscribe(res => (this.users = res));
        // console.log('this.users ', this.users);
    };
    FamilyComponent.prototype.getUserCollection = function () {
        this._dataService.getUsers().subscribe(function (data) {
            console.log('getUserContents ', data);
        });
    };
    FamilyComponent.prototype.getPictureCollection = function () {
        this._dataService.getPictures().subscribe(function (data) {
            console.log('getPictureContents ', data);
        });
    };
    FamilyComponent.prototype.postPictureCollection = function () {
        this._dataService.postPictures();
    };
    FamilyComponent.prototype.openModal = function () {
        console.log('Family Instructions');
        this.postPictureCollection();
        var modalRef = this.modalService.open(_shared_components_ngb_transclude_modal_ngb_transclude_modal_component__WEBPACK_IMPORTED_MODULE_6__["NgbdTranscludeModalComponent"], {
            size: 'lg',
            windowClass: 'modal-xxl'
        });
        modalRef.componentInstance.modalName = 'Inspector Instructions';
        modalRef.componentInstance.modalContent = this.screenInstructions;
        modalRef.componentInstance.modalButtons = this.modalButtons;
    };
    FamilyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-family',
            template: __webpack_require__(/*! ./family.component.html */ "./src/app/family/family.component.html"),
            styles: [__webpack_require__(/*! ./family.component.scss */ "./src/app/family/family.component.scss")],
            providers: [_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_1__["PicturesComponent"], _services_picture_service__WEBPACK_IMPORTED_MODULE_2__["PictureService"], _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["CustomTooltipComponent"]]
        }),
        __metadata("design:paramtypes", [_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_1__["PicturesComponent"],
            _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["CustomTooltipComponent"],
            _services_picture_service__WEBPACK_IMPORTED_MODULE_2__["PictureService"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], FamilyComponent);
    return FamilyComponent;
}());



/***/ }),

/***/ "./src/app/family/family.module.ts":
/*!*****************************************!*\
  !*** ./src/app/family/family.module.ts ***!
  \*****************************************/
/*! exports provided: FamilyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyModule", function() { return FamilyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _family_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./family-routing.module */ "./src/app/family/family-routing.module.ts");
/* harmony import */ var _family_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./family.component */ "./src/app/family/family.component.ts");
/* harmony import */ var _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pictures/pictures.component */ "./src/app/family/pictures/pictures.component.ts");
/* harmony import */ var _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./family-tree/family-tree.component */ "./src/app/family/family-tree/family-tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FamilyModule = /** @class */ (function () {
    function FamilyModule() {
    }
    FamilyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _family_routing_module__WEBPACK_IMPORTED_MODULE_4__["FamilyRoutingModule"]],
            declarations: [_family_component__WEBPACK_IMPORTED_MODULE_5__["FamilyComponent"], _pictures_pictures_component__WEBPACK_IMPORTED_MODULE_6__["PicturesComponent"], _family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_7__["FamilyTreeComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], FamilyModule);
    return FamilyModule;
}());



/***/ }),

/***/ "./src/app/family/pictures/pictures.component.html":
/*!*********************************************************!*\
  !*** ./src/app/family/pictures/pictures.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"showTip\">\r\n  <app-custom-tooltip\r\n    [tiptitle]=\"toolTitle\"\r\n    [tipvalues]=\"toolValues\"\r\n    [tipPositionX]=\"tooltipPositionX\"\r\n    [tipPositionY]=\"tooltipPositionY\">\r\n  </app-custom-tooltip>\r\n</ng-container>\r\n<div class=\"selection-frame d-flex\">\r\n  <div *ngFor=\"let category of pictureCategories\" class=\"d-flex align-items-center ml-4\">\r\n    <input type='checkbox'\r\n           [(ngModel)]=\"category.checked\"\r\n           (click)=\"filterTriage($event, category.name)\">\r\n    <label class=\"ml-1 mt-2 text-white\">{{category.name }}</label>\r\n  </div>\r\n</div>\r\n<div class=\"master-container d-flex flex-wrap\">\r\n  <div *ngFor=\"let picture of activePictures; let $idx = index;\"\r\n       class=\"thumbnail\"\r\n       (mouseenter)=\"onMouseOver($event, picture)\"\r\n       (mouseleave)=\"onMouseLeave($event, picture)\"\r\n       (click)=\"openModal($idx);\">\r\n    <img [src]=\"picture.image + '_tn.jpg' | defaultPicture: 'default_tn.jpg'\">\r\n  </div>\r\n</div>\r\n<h1>{{observable | async}}</h1>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/family/pictures/pictures.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/family/pictures/pictures.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n.selection-frame {\n  border: 1px solid gold; }\n.master-container {\n  margin-top: 3rem;\n  display: flex;\n  justify-content: flex-start; }\n.thumbnail {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);\n  margin: 5px 5px 0 0;\n  border: 1px solid rgba(237, 200, 19, 0.8);\n  transition: -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out; }\n.thumbnail img {\n    width: 120px;\n    height: 120px; }\n.thumbnail:hover {\n    -webkit-transform: scale(1.03);\n            transform: scale(1.03); }\n.picture-frame {\n  width: 1000px; }\n.modal-title {\n  font-family: Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  text-transform: uppercase; }\n.modalImage {\n  width: 640px;\n  height: auto; }\n.next, .prev {\n  color: #eace4b;\n  font-size: 50px;\n  cursor: pointer; }\n.next:hover, .prev:hover {\n    color: red; }\n"

/***/ }),

/***/ "./src/app/family/pictures/pictures.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/family/pictures/pictures.component.ts ***!
  \*******************************************************/
/*! exports provided: PicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesComponent", function() { return PicturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_picture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/picture.service */ "./src/app/family/services/picture.service.ts");
/* harmony import */ var _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/custom-tooltip/custom-tooltip.component */ "./src/app/shared/components/custom-tooltip/custom-tooltip.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_ngb_modal_ngb_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/ngb-modal/ngb-modal.component */ "./src/app/shared/components/ngb-modal/ngb-modal.component.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PicturesComponent = /** @class */ (function () {
    function PicturesComponent(_pictureService, modalService) {
        this._pictureService = _pictureService;
        this.modalService = modalService;
        this.pictures = [];
        this.activeCategory = [];
        this.pictureCategories = [];
        this.activeFilters = [];
        this.showTip = false;
        this.PICTURE_PATH = '../assets/img/pictureCollection/';
        this.getPictureCollection();
        this.observable = this.getObservable();
    }
    PicturesComponent_1 = PicturesComponent;
    // First char Upper rest Lower
    PicturesComponent.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    PicturesComponent.prototype.getObservable = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].interval(1000)
            .take(3)
            .map(function (v) { return v * v; });
    };
    PicturesComponent.prototype.getPictureCollection = function () {
        var _this = this;
        this._pictureService.getPictureContents().subscribe(function (data) {
            console.log('getPictureContents ', data);
            _this.pictures = data.pictures;
            _this.activePictures = _this.pictures.map(function (d) {
                if (d.image === '' || d.image === undefined) {
                    d.image = '';
                }
                else {
                    d.image = _this.PICTURE_PATH + d.image;
                }
                return d;
            });
            _this.pictureCategories[0] = { name: 'All', checked: true };
            _this.addFilter('All');
            _this.pictureCategories[0].checked = true;
        });
    };
    // Decides to add or remove filters and acts accordingly
    PicturesComponent.prototype.filterTriage = function (e, cat) {
        if (e.target.checked) {
            this.addFilter(cat);
        }
        else {
            this.removeFilter(cat);
        }
    };
    // Splices from the filter collection and draws list
    PicturesComponent.prototype.removeFilter = function (cat) {
        var index = this.activeFilters.indexOf(cat);
        this.activeFilters.splice(index);
        this.drawPictureList();
    };
    // Adds to the filter collection and calls draw
    PicturesComponent.prototype.addFilter = function (cat) {
        if (cat === 'All') {
            this.resetAll();
            this.activeFilters = [];
            this.activeFilters.push(cat);
        }
        else {
            if (this.activeFilters[0] === 'All') {
                this.activeFilters = [];
                this.pictureCategories[0].checked = false;
            }
            this.activeFilters.push(cat);
        }
        this.drawPictureList();
    };
    PicturesComponent.prototype.resetAll = function () {
        this.pictureCategories.forEach(function (item) {
            item.checked = false;
        });
    };
    // Draws selected picture categories
    PicturesComponent.prototype.drawPictureList = function () {
        var _this = this;
        this.activePictures = [];
        this.pictures.forEach(function (d, i) {
            if (_this.activeFilters[0] === 'All' || !_this.activeFilters[0]) {
                _this.activePictures.push(d);
            }
            else {
                _this.activeFilters.forEach(function (c) {
                    if (d.keyword === c) {
                        _this.activePictures.push(d);
                    }
                });
            }
            //  console.log('this.activeFilters.forEach ', this.activeFilters);
            _this.filterByCategory(d);
        });
    };
    // Sets up category list and capitalizes
    PicturesComponent.prototype.filterByCategory = function (picture) {
        if (!this.activeCategory.includes(picture.keyword)) {
            this.activeCategory.push(picture.keyword);
            this.pictureCategories.push({
                name: PicturesComponent_1.toTitleCase(picture.keyword),
                checked: false
            });
        }
    };
    // custom tooltip called
    PicturesComponent.prototype.onMouseOver = function (e, pic) {
        this.showTip = true;
        this.toolTitle = pic.name;
        this.toolValues = pic.description;
        this.tooltipPositionX = e.clientX + 80;
        this.tooltipPositionY = e.clientY;
    };
    PicturesComponent.prototype.onMouseLeave = function () {
        this.showTip = false;
    };
    PicturesComponent.prototype.openModal = function (e) {
        console.log(e);
        var modalRef = this.modalService.open(_shared_components_ngb_modal_ngb_modal_component__WEBPACK_IMPORTED_MODULE_4__["NgbdModalComponent"], {
            size: 'lg',
            windowClass: 'modal-xxl'
        });
        modalRef.componentInstance.activeIndex = e;
        modalRef.componentInstance.modalGroup = this.activePictures;
    };
    PicturesComponent = PicturesComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-pictures',
            template: __webpack_require__(/*! ./pictures.component.html */ "./src/app/family/pictures/pictures.component.html"),
            styles: [__webpack_require__(/*! ./pictures.component.scss */ "./src/app/family/pictures/pictures.component.scss")],
            providers: [
                _services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"],
                _shared_components_custom_tooltip_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["CustomTooltipComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
                _shared_components_ngb_modal_ngb_modal_component__WEBPACK_IMPORTED_MODULE_4__["NgbdModalComponent"]
            ]
        }),
        __metadata("design:paramtypes", [_services_picture_service__WEBPACK_IMPORTED_MODULE_1__["PictureService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], PicturesComponent);
    return PicturesComponent;
    var PicturesComponent_1;
}());



/***/ }),

/***/ "./src/app/family/services/picture.service.ts":
/*!****************************************************!*\
  !*** ./src/app/family/services/picture.service.ts ***!
  \****************************************************/
/*! exports provided: PictureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureService", function() { return PictureService; });
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





var BASE_PICTURE_URL = '../assets/data-collections/allPictures.json';
var BASE_FAMILY_URL = '../../../assets/data-collections/familyTreeCollection.json';
var HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
var PictureService = /** @class */ (function () {
    function PictureService(http) {
        this.http = http;
    }
    PictureService.prototype.getPictureContents = function () {
        return this.http
            .get(BASE_PICTURE_URL)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    PictureService.prototype.getFamilyContents = function () {
        return this.http
            .get(BASE_FAMILY_URL)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    PictureService.prototype.handleError = function (error) {
        var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + " - " + error.statusText
                : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    PictureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PictureService);
    return PictureService;
}());



/***/ })

}]);
//# sourceMappingURL=family-family-module.js.map