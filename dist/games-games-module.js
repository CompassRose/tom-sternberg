(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"],{

/***/ "./src/app/games/games-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/games/games-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GamesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesRoutingModule", function() { return GamesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games.component */ "./src/app/games/games.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _games_component__WEBPACK_IMPORTED_MODULE_2__["GamesComponent"]
    }
];
var GamesRoutingModule = /** @class */ (function () {
    function GamesRoutingModule() {
    }
    GamesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GamesRoutingModule);
    return GamesRoutingModule;
}());



/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column m-auto\">\n<div>\n  <button  class=\"btn btn-indigo waves-light\" type=\"button\" href=\"./game-files/Spacer.html\">Play Game</button>\n</div>\n <div>\n   <img class=\"image\" src=\"assets/img/splash.png\" alt='Photo of game' />\n </div>\n\n\n  <!--<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0\" width=\"480\" height=\"430\" id=\"move3\" align=\"middle\">-->\n    <!--<param name=\"allowScriptAccess\" value=\"sameDomain\" />-->\n    <!--<param name=\"movie\" value=\"./Spacer.swf\" />-->\n    <!--<param name=\"quality\" value=\"high\" />-->\n    <!--<param name=\"bgcolor\" value=\"#989866\" />-->\n    <!--<embed src=\"./Spacer.swf\"-->\n           <!--quality=\"high\"-->\n           <!--bgcolor=\"#989866\"-->\n           <!--width=\"480\"-->\n           <!--height=\"430\"-->\n           <!--name=\"move3\"-->\n           <!--align=\"middle\"-->\n           <!--allowscriptaccess=\"sameDomain\"-->\n           <!--type=\"application/x-shockwave-flash\"-->\n           <!--pluginspage=\"http://www.macromedia.com/go/getflashplayer\"-->\n    <!--/>-->\n  <!--</object>-->\n\n  <!--<div id=\"flashContent\">-->\n    <!--<p>-->\n      <!--To view this page ensure that Adobe Flash Player version-->\n      <!--11.1.0 or greater is installed.-->\n    <!--</p>-->\n    <!--<script type=\"text/javascript\">--\n      <!--var pageHost = ((document.location.protocol == \"https:\") ? \"https://\" : \"http://\");-->\n      <!--document.write(\"<a href='http://www.adobe.com/go/getflashplayer'><img src='\"-->\n        <!--+ pageHost + \"www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>\");-->\n    <!--</script>-->\n    <!--<script type=\"text/javascript\" src=\"../game-files/swfobject.js\"></script>-->\n\n    <!--<script type=\"text/javascript\">-->\n      <!--// For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection.-->\n      <!--var swfVersionStr = \"11.1.0\";-->\n      <!--// To use express install, set to playerProductInstall.swf, otherwise the empty string.-->\n      <!--var xiSwfUrlStr = \"\";-->\n      <!--var flashvars = {};-->\n      <!--var params = {};-->\n      <!--params.quality = \"high\";-->\n      <!--params.bgcolor = \"#000000\";-->\n      <!--params.allowscriptaccess = \"sameDomain\";-->\n      <!--params.allowfullscreen = \"true\";-->\n      <!--var attributes = {};-->\n      <!--params.wmode = \"direct\";-->\n      <!--attributes.id = \"Spacer\";-->\n      <!--attributes.name = \"Spacer\";-->\n      <!--attributes.align = \"middle\";-->\n      <!--swfobject.embedSWF(-->\n        <!--\"./Spacer.swf\", \"flashContent\",-->\n        <!--\"800\", \"800\",-->\n        <!--swfVersionStr, xiSwfUrlStr,-->\n        <!--flashvars, params, attributes);-->\n      <!--// JavaScript enabled so display the flashContent div in case it is not replaced with a swf object.-->\n      <!--swfobject.createCSS(\"#flashContent\", \"display:block;text-align:left;\");-->\n    <!--</script>-->\n  <!--</div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/games/games.component.scss":
/*!********************************************!*\
  !*** ./src/app/games/games.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
        console.log('GamesComponent');
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.scss */ "./src/app/games/games.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/games/games.module.ts":
/*!***************************************!*\
  !*** ./src/app/games/games.module.ts ***!
  \***************************************/
/*! exports provided: GamesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesModule", function() { return GamesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games-routing.module */ "./src/app/games/games-routing.module.ts");
/* harmony import */ var _games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games.component */ "./src/app/games/games.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GamesModule = /** @class */ (function () {
    function GamesModule() {
    }
    GamesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _games_routing_module__WEBPACK_IMPORTED_MODULE_3__["GamesRoutingModule"]
            ],
            declarations: [_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"]]
        })
    ], GamesModule);
    return GamesModule;
}());



/***/ })

}]);
//# sourceMappingURL=games-games-module.js.map