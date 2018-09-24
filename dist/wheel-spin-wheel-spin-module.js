(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wheel-spin-wheel-spin-module"],{

/***/ "./src/app/wheel-spin/wheel-spin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/wheel-spin/wheel-spin.module.ts ***!
  \*************************************************/
/*! exports provided: WheelspinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelspinModule", function() { return WheelspinModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wheelspin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wheelspin-routing.module */ "./src/app/wheel-spin/wheelspin-routing.module.ts");
/* harmony import */ var _wheel_spinner_wheel_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wheel-spinner/wheel-spinner.component */ "./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _wheel_table_wheel_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wheel-table/wheel-table.component */ "./src/app/wheel-spin/wheel-table/wheel-table.component.ts");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/esm5/angular-draggable-droppable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WheelspinModule = /** @class */ (function () {
    function WheelspinModule() {
    }
    WheelspinModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _wheelspin_routing_module__WEBPACK_IMPORTED_MODULE_2__["WheelSpinRoutingModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"].forRoot()
            ],
            declarations: [_wheel_spinner_wheel_spinner_component__WEBPACK_IMPORTED_MODULE_3__["WheelSpinnerComponent"], _wheel_table_wheel_table_component__WEBPACK_IMPORTED_MODULE_5__["WheelTableComponent"]]
        })
    ], WheelspinModule);
    return WheelspinModule;
}());



/***/ }),

/***/ "./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spin-frame\">\r\n  <div id=\"chart\">\r\n    <span *ngIf=\"spinShow === 'spin'\" class=\"prize\"><a (click)=\"spinFromBtn()\">SPIN</a></span>\r\n    <span *ngIf=\"spinShow ==='reset'\" class=\"prize\"><a (click)=\"newgameSend()\">RESET</a></span>\r\n    <span *ngIf=\"spinShow === 'win'\" class=\"winner pulsate\">{{resultsValue}}</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n#chart {\n  display: flex;\n  width: 400px;\n  height: 400px;\n  text-align: center; }\n.spin-frame {\n  color: gold;\n  background-color: #007000;\n  width: 400px;\n  height: 400px;\n  left: calc(50% + 200px);\n  top: calc(50% + 200px);\n  border-radius: 220px;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.55), 0 0 20px rgba(0, 0, 0, 0.5); }\n#chart .prize {\n  position: absolute;\n  font-family: 'Racing Sans One', cursive;\n  display: table-cell;\n  height: inherit;\n  width: inherit;\n  vertical-align: middle;\n  line-height: 400px;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);\n  font-size: 2.3rem;\n  color: #f2bc14;\n  font-weight: 700; }\n#chart .prize:hover {\n    color: red; }\n#chart .winner {\n  position: absolute;\n  font-family: 'Racing Sans One', cursive;\n  display: table-cell;\n  height: inherit;\n  width: inherit;\n  vertical-align: middle;\n  line-height: 400px;\n  font-size: 3rem;\n  color: red;\n  text-shadow: 1px 1px 4px black, 0 0 35px yellow;\n  font-weight: 700; }\n.pulsate {\n  -webkit-animation: pulsate 1.5s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  opacity: 1; }\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: WheelSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelSpinnerComponent", function() { return WheelSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WheelSpinnerComponent = /** @class */ (function () {
    function WheelSpinnerComponent() {
        this.wheelData = [];
        this.color = ['red', '#000'];
        this.oldpick = [];
        this.resultsValue = 0;
        this.spinShow = 'spin';
        this.spinResultsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.promptNewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.wheelData = [
            { label: '1', value: 1, Prize: '$150' },
            { label: '2', value: 1, Prize: '$50' },
            { label: '3', value: 1, Prize: '$1500' },
            { label: '4', value: 1, Prize: '$50' },
            { label: '5', value: 1, Prize: '$150' },
            { label: '6', value: 1, Prize: '$2500' },
            { label: '7', value: 1, Prize: '$500' },
            { label: '8', value: 1, Prize: '$1500' },
            { label: '9', value: 1, Prize: '$250' },
            { label: '10', value: 1, Prize: '$1500' },
            { label: '11', value: 1, Prize: '$500' },
            { label: '12', value: 1, Prize: '$100' },
            { label: '13', value: 1, Prize: '$1500' },
            { label: '14', value: 1, Prize: '$350' },
            { label: '15', value: 1, Prize: '$250' },
            { label: '16', value: 1, Prize: '$500' },
            { label: '17', value: 1, Prize: '$500' },
            { label: '18', value: 1, Prize: '$100' },
            { label: '19', value: 1, Prize: '$1500' },
            { label: '20', value: 1, Prize: '$350' },
            { label: '21', value: 1, Prize: '$250' },
            { label: '22', value: 1, Prize: '$500' },
            { label: '23', value: 1, Prize: '$250' },
            { label: '24', value: 1, Prize: '$500' },
            { label: '25', value: 1, Prize: '$250' },
            { label: '26', value: 1, Prize: '$500' },
            { label: '27', value: 1, Prize: '$500' },
            { label: '28', value: 1, Prize: '$100' },
            { label: '29', value: 1, Prize: '$1500' },
            { label: '30', value: 1, Prize: '$350' },
            { label: '31', value: 1, Prize: '$250' },
            { label: '32', value: 1, Prize: '$500' },
            { label: '33', value: 1, Prize: '$250' },
            { label: '34', value: 1, Prize: '$500' },
            { label: '35', value: 1, Prize: '$250' },
            { label: '36', value: 1, Prize: '$500' }
        ];
    }
    WheelSpinnerComponent.prototype.ngOnInit = function () {
        this.resetSpinner();
    };
    // From spin button press
    WheelSpinnerComponent.prototype.spinFromBtn = function () {
        this.spin(this);
    };
    WheelSpinnerComponent.prototype.resetSpinner = function () {
        var _this = this;
        this.spinShow = 'spin';
        var padding = { top: 16, right: 16, bottom: 16, left: 16 };
        var w = 400 - padding.left - padding.right;
        var h = 400 - padding.top - padding.bottom;
        var r = Math.min(w, h) / 2;
        this.picked = 100000;
        this.oldpick = [];
        this.rotation = 0;
        this.oldrotation = 0;
        var parent = this;
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#chart')
            .select('svg')
            .remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#chart')
            .append('svg')
            .data([this.wheelData])
            .attr('width', w + padding.left + padding.right)
            .attr('height', h + padding.top + padding.bottom);
        var container = svg
            .append('g')
            .attr('class', 'chartholder')
            .attr('transform', 'translate(' + (w / 2 + padding.left) + ',' + (h / 2 + padding.top) + ')');
        var wheel = container.append('g');
        var pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]()
            .sort(null)
            .value(function (d) {
            return 1;
        });
        // arc generator function
        var arc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .outerRadius(r)
            .innerRadius(r * 0.4)
            .padRadius(100)
            .padAngle(0.0)
            .cornerRadius(0);
        // select paths, use arc generator to draw
        var arcs = wheel
            .selectAll('g.slice')
            .data(pie)
            .enter()
            .append('g')
            .attr('class', 'slice');
        arcs.append('path')
            .attr('fill', function (d, i) {
            if (i % 2) {
                return _this.color[1];
            }
            else {
                return _this.color[0];
            }
        })
            .attr('d', function (d, i) {
            return arc(d);
        });
        var arcBorder = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .innerRadius(r)
            .outerRadius(r);
        arcs.append('path')
            .attr('d', arcBorder)
            .attr('stroke-width', 2)
            .attr('stroke', '#ffc600')
            .attr('stroke-opacity', 1);
        // add the text
        arcs.append('text')
            .attr('transform', function (d) {
            d.innerRadius = 0;
            d.outerRadius = r;
            d.angle = (d.startAngle + d.endAngle) / 2;
            return ('rotate(' +
                ((d.angle * 180) / Math.PI - 90) +
                ')translate(' +
                (d.outerRadius - 10) +
                ')');
        })
            .attr('text-anchor', 'end')
            .attr('dy', '0.35em')
            .text(function (d, i) {
            return d.data.label;
        })
            .style('font-size', '20px')
            .style('fill', 'white')
            .style('font-weight', '600');
        this.wheel = wheel;
        this.container = container;
        // This may be necessary so please leave for now?
        this.container.on('click', function (d) {
            parent.spin(parent);
        });
    };
    // Click Container
    WheelSpinnerComponent.prototype.spin = function (parent) {
        var _this = this;
        var ps = 360 / this.wheelData.length;
        var rng = Math.floor(Math.random() * 1440 + 360);
        this.rotation = Math.round(rng / ps) * ps;
        this.picked = Math.round(this.wheelData.length - (this.rotation % 360) / ps);
        this.picked =
            this.picked >= this.wheelData.length
                ? this.picked % this.wheelData.length
                : this.picked;
        if (this.oldpick.indexOf(this.picked) !== -1) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this).call(this.spin);
            return;
        }
        else {
            this.oldpick.push(this.picked);
        }
        this.rotation += 90 - Math.round(ps / 2);
        this.wheel
            .transition()
            .duration(6000)
            .attrTween('transform', function () {
            parent.rotTween();
        })
            .attrTween('transform', parent.rotTween)
            .on('end', function () {
            _this.resultsValue = _this.wheelData[parent.picked].label;
            _this.spinShow = 'win';
            _this.showResults(_this.resultsValue);
            d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.slice:nth-child(' + (parent.picked + 1) + ') path')
                .style('stroke-width', '4px')
                .attr('stroke', '#0518ff')
                .attr('stroke-opacity', 1);
            setTimeout(function () {
                _this.spinShow = 'reset';
            }, 5000);
        });
    };
    // Call parent function to show winners
    WheelSpinnerComponent.prototype.showResults = function (value) {
        this.spinResultsEvent.next({ value: value });
    };
    WheelSpinnerComponent.prototype.newgameSend = function () {
        this.resetSpinner();
        this.promptNewEvent.next();
    };
    WheelSpinnerComponent.prototype.rotTween = function () {
        var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](0, 1200);
        return function (t) {
            return 'rotate(' + i(t) + ')';
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelSpinnerComponent.prototype, "spinResultsEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelSpinnerComponent.prototype, "promptNewEvent", void 0);
    WheelSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wheel-spinner',
            template: __webpack_require__(/*! ./wheel-spinner.component.html */ "./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.html"),
            styles: [__webpack_require__(/*! ./wheel-spinner.component.scss */ "./src/app/wheel-spin/wheel-spinner/wheel-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WheelSpinnerComponent);
    return WheelSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/wheel-spin/wheel-table/wheel-table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/wheel-spin/wheel-table/wheel-table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\">\r\n  <div class=\"d-flex align-items-center justify-content-between\">\r\n    <div class=\"gameTitle text-center mt-1 mb-2\">Roulette Challenge</div>\r\n    <div class=\"ml-auto\">\r\n      <div class=\"help-button\" (click)=\"openModal();\">?</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex flex-md-column flex-lg-row justify-content-lg-between\">\r\n    <div class=\"table-background-frame borders d-flex align-items-center\">\r\n      <div class=\"chip-frame\">\r\n        <div class=\"chip-shadow-frame\">\r\n          <div class=\"chip-shadow\"></div>\r\n          <div class=\"chip-shadow\"></div>\r\n          <div class=\"chip-shadow\"></div>\r\n          <div class=\"chip-shadow\"></div>\r\n          <div class=\"chip-shadow\"></div>\r\n        </div>\r\n        <div>\r\n          <div class=\"pokerchip magic-yellow\" mwlDraggable dropData=1></div>\r\n          <div class=\"pokerchip magic-red\" mwlDraggable dropData=5></div>\r\n          <div class=\"pokerchip magic-blue\" mwlDraggable dropData=25></div>\r\n          <div class=\"pokerchip magic-green\" mwlDraggable dropData=50></div>\r\n          <div class=\"pokerchip magic-black\" mwlDraggable dropData=100></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-container mr-auto\">\r\n        <div class=\"grid-item-02\">\r\n          <div class=\"d-flex h-100\">\r\n            <div class=\"d-flex flex-column flex-wrap w-100\">\r\n              <div [style.background-color]=\"square.color\"\r\n                   *ngFor=\"let square of numberSquares | slice:0:36; let $idx = index;\"\r\n                   class=\"d-flex flex-column grid-number-cell\"\r\n                   (click)=\"removeBetValue(square)\"\r\n                   mwlDroppable\r\n                   (drop)=\"onDrop($event, square)\">\r\n                <span>{{square.name}}</span>\r\n                <div *ngIf=\"square.directBet > 0\" class=\"cash-drop mt-3\"\r\n                     [style.background-color]=\"square.color == 'red' ? 'black' : 'red'\">${{square.directBet}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"grid-blank grid-item-17\"></div>\r\n        <div class=\"grid-blank grid-item-18\"></div>\r\n        <div [style.background-color]=\"special.color\"\r\n             *ngFor=\"let special of numberSquares | slice:36:48; let $idx = index;\"\r\n             [ngClass]=\"special.item\"\r\n             (click)=\"removeBetValue(special)\"\r\n             mwlDroppable\r\n             (drop)=\"onDrop($event, special)\">\r\n          <span class=\"f-weight-600\">{{special.name}}</span>\r\n          <div *ngIf=\"special.directBet > 0\" [ngClass]=\"special.drop\">${{special.directBet}}</div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <app-wheel-spinner\r\n          (spinResultsEvent)=\"processWinningNumber($event)\"\r\n          (promptNewEvent)=\"removeAllBets()\">\r\n        </app-wheel-spinner>\r\n      </div>\r\n    </div>\r\n    <div class=\"game-state-frame borders\">\r\n      <div class=\"table-state-reveal\">\r\n        <div class=\"category-header display-md f-weight-600 text-white\">MY BANK</div>\r\n        <div class=\"last-ten-frame funds-frame f-weight-600 display-md mb-3\">{{myFunds | currency:'USD'}}</div>\r\n        <button class=\"btn-sm btn-success\" (click)=\"removeAllBets();\">Clear Bets</button>\r\n        <div class=\"category-header display-md text-white f-weight-600 mt-5\">LAST TEN</div>\r\n        <div [style.background-color]=\"digit.color\" *ngFor=\"let digit of lastTenNums;\"\r\n             class=\"last-ten-frame display-sm f-weight-600  text-center\">{{digit.name}}\r\n        </div>\r\n      </div>\r\n      <div class=\"spin-state-reveal d-flex flex-column mr-auto\">\r\n        <div class=\"category-header f-weight-600 display-md\">BETS PLACED</div>\r\n        <div class=\"bet-reveal\">\r\n          <div *ngFor=\"let square of numberSquares; let $idx = index;\">\r\n            <div *ngIf=\"square.directBet\" class=\"display-sm ml-2\"><span *ngIf=\"square.name < 37\">Number </span>{{square.name}}\r\n              = {{square.directBet | currency:'USD' }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"win-reveal\">\r\n          <div class=\"category-header f-weight-600 display-md\">WINNERS</div>\r\n          <div *ngFor=\"let win of displayArray\">\r\n            <div *ngIf=\"win.name\" class=\"display-sm ml-2\"><span *ngIf=\"win.name < 37\">Number </span>{{win.name}} =\r\n              {{win.value | currency:'USD' }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/wheel-spin/wheel-table/wheel-table.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/wheel-spin/wheel-table/wheel-table.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Colors */\n.game-container {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 20px; }\n.btn {\n  padding: 0.84rem 2.14rem;\n  font-size: .91rem; }\n.help-button {\n  color: white;\n  cursor: pointer;\n  text-align: center;\n  font-size: .9rem;\n  font-weight: bold;\n  border-radius: 5px;\n  background-color: blue;\n  border: 2px solid #0000ae;\n  padding: 0.45rem .8rem;\n  box-shadow: 1px 1px 2px black; }\n.help-button:hover {\n    border-color: #FFBB46; }\n.gameTitle {\n  font-family: 'Racing Sans One', cursive;\n  font-size: 4.0rem;\n  letter-spacing: 1px;\n  color: #00b700;\n  text-shadow: 2px 2px 2px #bcff00; }\n[mwlDraggable] {\n  position: relative;\n  z-index: 1;\n  float: left;\n  margin-right: 10px; }\n[mwlDroppable] {\n  background-color: green;\n  position: relative; }\n[mwlDraggable],\n[mwlDroppable] {\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%; }\n.table-background-frame {\n  max-width: calc(0% + 1120px);\n  box-shadow: 0px 0px 46px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  border: 15px solid green;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 220px;\n  border-bottom-right-radius: 220px; }\n.table-utilities {\n  display: flex;\n  flex-direction: row; }\n@media (max-width: 1280px) {\n    .table-utilities {\n      flex-direction: column; } }\n.chip-frame {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100px; }\n.chip-shadow-frame {\n  padding-top: 10px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n.chip-shadow {\n  margin-bottom: 10px;\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.15); }\n.borders {\n  background-color: rgba(14, 137, 49, 0.67);\n  border: 10px solid green; }\n.category-header {\n  margin-bottom: 8px;\n  text-align: center;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5); }\n.game-state-frame {\n  display: flex;\n  flex-direction: row;\n  max-width: calc(0% + 480px);\n  color: white;\n  width: 400px;\n  height: 460px;\n  border-radius: 6px; }\n.game-state-frame .spin-state-reveal {\n    width: 60%;\n    display: flex;\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5), inset 0 0 12px rgba(0, 0, 0, 0.7);\n    flex-direction: column;\n    top: 10px;\n    align-items: center;\n    flex-wrap: nowrap; }\n.game-state-frame .funds-frame {\n    text-align: center;\n    color: black;\n    background-color: white; }\n.game-state-frame .last-ten-frame {\n    width: 98%;\n    box-shadow: inset 3px 0 3px rgba(0, 0, 0, 0.4); }\n.game-state-frame .table-state-reveal {\n    margin: 0 3px 0 2px;\n    width: 40%;\n    display: flex;\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5), inset 0 0 12px rgba(0, 0, 0, 0.7);\n    flex-direction: column;\n    border-right: 7px solid green;\n    top: 10px;\n    align-items: center;\n    flex-wrap: nowrap; }\n.game-state-frame .bet-reveal {\n    display: flex;\n    flex-direction: column;\n    height: calc(100% - 184px);\n    width: 100%;\n    overflow-y: auto;\n    align-items: flex-start;\n    flex-wrap: nowrap;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.49); }\n.game-state-frame .win-reveal {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    top: calc(100% - 306.66666667px);\n    overflow-y: auto;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-wrap: nowrap; }\na {\n  color: #89310F; }\n.pokerchip {\n  margin: .25em;\n  position: relative;\n  display: inline-block;\n  width: 75px;\n  height: 75px;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5), 0 0 3px 0 rgba(0, 0, 0, 0.4) inset;\n  border-radius: 50%;\n  background-size: 151px 151px;\n  background-position: center center;\n  z-index: 100; }\n.pokerchip:before {\n  position: absolute;\n  content: \"\";\n  z-index: 1;\n  width: 67px;\n  height: 67px;\n  border-radius: 50%;\n  top: 4px;\n  left: 4px;\n  background-size: 151px 151px;\n  background-position: center center; }\n.pokerchip:after {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  position: absolute;\n  content: \"25\";\n  text-align: center;\n  font: bold 26px Arial;\n  white-space: pre;\n  width: 57px;\n  height: 57px;\n  border-radius: 50%;\n  top: 9px;\n  left: 9px;\n  text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.3), 1px 1px 0px rgba(255, 255, 255, 0.3); }\n.magic-yellow {\n  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), linear-gradient(120deg, #ffc600 0, #ffc600 97.4304px, #fff 97.4304px, #fff 113.4304px, #ffc600 113.4304px, #ffc600 151px); }\n.magic-yellow:before {\n    border: 3px solid #ffc600;\n    background-image: linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(150deg, #d6a400 0, #d6a400 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, #d6a400 110.7104px, #d6a400 151px); }\n.magic-yellow:after {\n    content: \"1\";\n    background: #ffc600;\n    color: #d6a400; }\n.magic-red {\n  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), linear-gradient(120deg, #800000 0, #800000 97.4304px, #fff 97.4304px, #fff 113.4304px, #800000 113.4304px, #800000 151px); }\n.magic-red:before {\n    border: 3px solid #800000;\n    background-image: linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(150deg, #6C0000 0, #6C0000 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, #6C0000 110.7104px, #6C0000 151px); }\n.magic-red:after {\n    content: \"5\";\n    background: #800000;\n    color: #6C0000; }\n.magic-blue {\n  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), linear-gradient(120deg, #000099 0, #000099 97.4304px, #fff 97.4304px, #fff 113.4304px, #000099 113.4304px, #000099 151px); }\n.magic-blue:before {\n    border: 3px solid #000099;\n    background-image: linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(150deg, #00016C 0, #00016C 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, #00016C 110.7104px, #00016C 151px); }\n.magic-blue:after {\n    content: \"25\";\n    background: #000099;\n    color: #00016C; }\n.magic-green {\n  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), linear-gradient(120deg, #008000 0, #008000 97.4304px, #fff 97.4304px, #fff 113.4304px, #008000 113.4304px, #008000 151px); }\n.magic-green:before {\n    border: 3px solid #008000;\n    background-image: linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(150deg, #016C00 0, #016C00 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, #016C00 110.7104px, #016C00 151px); }\n.magic-green:after {\n    content: \"50\";\n    background: #008000;\n    color: #016C00; }\n.magic-black {\n  background-image: linear-gradient(0deg, transparent 0, transparent 67.5px, #fff 67.5px, #fff 83.5px, transparent 83.5px, transparent 151px), linear-gradient(60deg, transparent 0, transparent 97.4304px, #fff 97.4304px, #fff 113.4304px, transparent 113.4304px, transparent 151px), linear-gradient(120deg, #000000 0, #000000 97.4304px, #fff 97.4304px, #fff 113.4304px, #000000 113.4304px, #000000 151px); }\n.magic-black:before {\n    border: 3px solid #000000;\n    background-image: linear-gradient(30deg, transparent 0, transparent 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, transparent 110.7104px, transparent 151px), linear-gradient(90deg, transparent 0, transparent 69.5px, #EBEBEB 69.5px, #EBEBEB 81.5px, transparent 81.5px, transparent 151px), linear-gradient(150deg, #012500 0, #012500 98.7104px, #EBEBEB 98.7104px, #EBEBEB 110.7104px, #012500 110.7104px, #012500 151px); }\n.magic-black:after {\n    content: \"100\";\n    background: #000000;\n    color: #012500; }\n.grid-container {\n  height: 420px;\n  width: 800px;\n  border: 0 solid white;\n  display: -ms-grid;\n  display: grid;\n  padding: 15px;\n  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr;\n  -ms-grid-rows: 1.5fr 1.5fr 3fr 3fr 3fr 1.5fr 1.5fr;\n      grid-template-rows: 1.5fr 1.5fr 3fr 3fr 3fr 1.5fr 1.5fr; }\n.grid-number-cell {\n  border: 1px solid #ffffff;\n  font-size: 17px;\n  font-weight: 600;\n  color: white;\n  width: 8.33%;\n  height: 33.33%;\n  justify-content: center;\n  align-items: center;\n  transition: -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out; }\n.grid-number-cell:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    border: 2px solid #fbe00b;\n    z-index: 10; }\n.grid-blank {\n  box-sizing: border-box;\n  color: white;\n  border: 1px solid #ffffff;\n  background-color: #008b00; }\n.grid-cell-text {\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  border: 1px solid #ffffff;\n  background-color: #008b00;\n  transition: -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out; }\n.grid-cell-text:hover {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    border: 2px solid yellow;\n    z-index: 10; }\n.cash-drop {\n  position: absolute;\n  padding: 2px 5px 0;\n  font-size: 13px;\n  border-radius: 3px;\n  border: 1px solid white; }\n.grid-item-02 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 6;\n  -ms-grid-row: 3;\n  -ms-grid-row-span: span 3-3;\n  grid-column: 1/7;\n  grid-row: 3/span 3; }\n.grid-item-03 {\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n  text-orientation: upright;\n  -ms-grid-column: 7;\n  -ms-grid-column-span: span 7-7;\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  grid-column: 7/span 7;\n  grid-row: 3/4; }\n.grid-item-04 {\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n  text-orientation: upright;\n  -ms-grid-column: 7;\n  -ms-grid-column-span: span 7-7;\n  -ms-grid-row: 4;\n  -ms-grid-row-span: 1;\n  grid-column: 7/span 7;\n  grid-row: 4/5; }\n.grid-item-05 {\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n  text-orientation: upright;\n  -ms-grid-column: 7;\n  -ms-grid-column-span: span 7-7;\n  -ms-grid-row: 5;\n  -ms-grid-row-span: 1;\n  grid-column: 7/span 7;\n  grid-row: 5/6; }\n.grid-item-06 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  -ms-grid-row: 6;\n  -ms-grid-row-span: 1;\n  grid-column: 1/3;\n  grid-row: 6/7; }\n.grid-item-07 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 3;\n  -ms-grid-column-span: 2;\n  -ms-grid-row: 6;\n  -ms-grid-row-span: 1;\n  grid-column: 3/5;\n  grid-row: 6/7; }\n.grid-item-08 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 5;\n  -ms-grid-column-span: 2;\n  -ms-grid-row: 6;\n  -ms-grid-row-span: 1;\n  grid-column: 5/7;\n  grid-row: 6/7; }\n.grid-item-10 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  -ms-grid-row: 7;\n  -ms-grid-row-span: 1;\n  grid-column: 1/4;\n  grid-row: 7/8; }\n.grid-item-11 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 4;\n  -ms-grid-column-span: 3;\n  -ms-grid-row: 7;\n  -ms-grid-row-span: 1;\n  grid-column: 4/7;\n  grid-row: 7/8; }\n.grid-item-12 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 0;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  grid-column: 1/1;\n  grid-row: 1/2; }\n.grid-item-13 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  grid-column: 1/4;\n  grid-row: 1/2; }\n.grid-item-14 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 4;\n  -ms-grid-column-span: 3;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  grid-column: 4/7;\n  grid-row: 1/2; }\n.grid-item-15 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  grid-column: 1/4;\n  grid-row: 2/3; }\n.grid-item-16 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 4;\n  -ms-grid-column-span: 3;\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  grid-column: 4/7;\n  grid-row: 2/3; }\n.grid-item-17 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 7;\n  -ms-grid-column-span: 1;\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 2;\n  grid-column: 7/8;\n  grid-row: 1/3; }\n.grid-item-18 {\n  -webkit-writing-mode: horizontal-tb;\n      -ms-writing-mode: lr-tb;\n          writing-mode: horizontal-tb;\n  text-orientation: sideways;\n  -ms-grid-column: 7;\n  -ms-grid-column-span: 1;\n  -ms-grid-row: 6;\n  -ms-grid-row-span: 2;\n  grid-column: 7/8;\n  grid-row: 6/8; }\n"

/***/ }),

/***/ "./src/app/wheel-spin/wheel-table/wheel-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/wheel-spin/wheel-table/wheel-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: WheelTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelTableComponent", function() { return WheelTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_ngb_transclude_modal_ngb_transclude_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/ngb-transclude-modal/ngb-transclude-modal.component */ "./src/app/shared/components/ngb-transclude-modal/ngb-transclude-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WheelTableComponent = /** @class */ (function () {
    function WheelTableComponent(modalService) {
        this.modalService = modalService;
        this.numberSquares = [
            { name: 1, value: 35, directBet: 0, contents: [1], color: 'red', row: 1 },
            { name: 2, value: 35, directBet: 0, contents: [2], color: 'black', row: 2 },
            { name: 3, value: 35, directBet: 0, contents: [3], color: 'red', row: 3 },
            { name: 4, value: 35, directBet: 0, contents: [4], color: 'black', row: 1 },
            { name: 5, value: 35, directBet: 0, contents: [5], color: 'red', row: 2 },
            { name: 6, value: 35, directBet: 0, contents: [6], color: 'black', row: 3 },
            { name: 7, value: 35, directBet: 0, contents: [7], color: 'red', row: 1 },
            { name: 8, value: 35, directBet: 0, contents: [8], color: 'black', row: 2 },
            { name: 9, value: 35, directBet: 0, contents: [9], color: 'red', row: 3 },
            { name: 10, value: 35, directBet: 0, contents: [10], color: 'black', row: 1 },
            { name: 11, value: 35, directBet: 0, contents: [11], color: 'black', row: 2 },
            { name: 12, value: 35, directBet: 0, contents: [12], color: 'red', row: 3 },
            { name: 13, value: 35, directBet: 0, contents: [13], color: 'black', row: 1 },
            { name: 14, value: 35, directBet: 0, contents: [14], color: 'red', row: 2 },
            { name: 15, value: 35, directBet: 0, contents: [15], color: 'black', row: 3 },
            { name: 16, value: 35, directBet: 0, contents: [16], color: 'red', row: 1 },
            { name: 17, value: 35, directBet: 0, contents: [17], color: 'black', row: 2 },
            { name: 18, value: 35, directBet: 0, contents: [18], color: 'red', row: 3 },
            { name: 19, value: 35, directBet: 0, contents: [19], color: 'red', row: 1 },
            { name: 20, value: 35, directBet: 0, contents: [20], color: 'black', row: 2 },
            { name: 21, value: 35, directBet: 0, contents: [21], color: 'red', row: 3 },
            { name: 22, value: 35, directBet: 0, contents: [22], color: 'black', row: 1 },
            { name: 23, value: 35, directBet: 0, contents: [23], color: 'red', row: 2 },
            { name: 24, value: 35, directBet: 0, contents: [24], color: 'black', row: 3 },
            { name: 25, value: 35, directBet: 0, contents: [25], color: 'red', row: 1 },
            { name: 26, value: 35, directBet: 0, contents: [26], color: 'black', row: 2 },
            { name: 27, value: 35, directBet: 0, contents: [27], color: 'red', row: 3 },
            { name: 28, value: 35, directBet: 0, contents: [28], color: 'black', row: 1 },
            { name: 29, value: 35, directBet: 0, contents: [29], color: 'black', row: 2 },
            { name: 30, value: 35, directBet: 0, contents: [30], color: 'red', row: 3 },
            { name: 31, value: 35, directBet: 0, contents: [31], color: 'black', row: 1 },
            { name: 32, value: 35, directBet: 0, contents: [32], color: 'red', row: 2 },
            { name: 33, value: 35, directBet: 0, contents: [33], color: 'black', row: 3 },
            { name: 34, value: 35, directBet: 0, contents: [34], color: 'red', row: 1 },
            { name: 35, value: 35, directBet: 0, contents: [35], color: 'black', row: 2 },
            { name: 36, value: 35, directBet: 0, contents: [36], color: 'red', row: 3 },
            // Specialty squares
            // 36
            {
                name: '-1st 12-',
                item: 'grid-cell-text grid-item-06',
                drop: 'cash-drop red ml-5',
                value: 2.5,
                directBet: 0,
                contents: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                color: 'transparent'
            },
            {
                name: '~2nd 12~',
                item: 'grid-cell-text grid-item-07',
                drop: 'cash-drop red ml-5',
                value: 2.5,
                directBet: 0,
                contents: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                color: 'transparent'
            },
            {
                name: '~3rd 12~',
                item: 'grid-cell-text grid-item-08',
                drop: 'cash-drop red ml-5',
                value: 2.5,
                directBet: 0,
                contents: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                color: 'transparent'
            },
            {
                name: '-1 thru 18-',
                item: 'grid-cell-text grid-item-13',
                drop: 'cash-drop red ml-5',
                value: 2,
                directBet: 0,
                contents: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                color: 'transparent'
            },
            {
                name: '-18 thru 36-',
                item: 'grid-cell-text grid-item-14',
                drop: 'cash-drop red ml-5',
                value: 2,
                directBet: 0,
                contents: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                color: 'transparent'
            },
            // Odd/Even 41
            {
                name: 'EVEN',
                item: 'grid-cell-text grid-item-15',
                drop: 'cash-drop red ml-5',
                value: 2,
                directBet: 0,
                contents: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
                color: 'transparent'
            },
            {
                name: 'ODD',
                item: 'grid-cell-text grid-item-16',
                drop: 'cash-drop red ml-5',
                value: 2,
                directBet: 0,
                contents: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
                color: 'transparent'
            },
            // Red/Black 43
            {
                name: 'ALL RED',
                item: 'grid-cell-text grid-item-10',
                drop: 'cash-drop red ml-5',
                value: 2,
                directBet: 0,
                contents: [1, 7, 16, 19, 25, 34, 5, 14, 23, 32, 3, 9, 12, 18, 21, 27, 30, 36],
                color: 'red'
            },
            {
                name: 'ALL BLACK',
                item: 'grid-cell-text grid-item-11',
                drop: 'cash-drop red ml-5',
                value: 2,
                directBet: 0,
                contents: [4, 10, 13, 22, 28, 31, 2, 8, 11, 17, 20, 26, 29, 35, 6, 15, 24, 33],
                color: 'black',
                grid: {
                    'grid-column': 4 / 7,
                    'grid-row': 7 / 8
                }
            },
            // Rows 45
            {
                name: 'ROW',
                item: 'grid-cell-text grid-item-03',
                drop: 'cash-drop red',
                value: 2,
                directBet: 0,
                contents: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
                color: 'transparent'
            },
            {
                name: 'ROW',
                item: 'grid-cell-text grid-item-04',
                drop: 'cash-drop red',
                value: 2,
                directBet: 0,
                contents: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
                color: 'transparent'
            },
            {
                name: 'ROW',
                item: 'grid-cell-text grid-item-05',
                drop: 'cash-drop red',
                value: 2,
                directBet: 0,
                contents: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
                color: 'transparent'
            }
        ];
        this.lastTenNums = [];
        this.winningsPaneActive = false;
        this.displayArray = [];
        this.modalButtons = {
            name: 'Close'
        };
    }
    WheelTableComponent.prototype.ngOnInit = function () {
        this.myFunds = 500;
        this.lastTenNums.push({
            name: 20,
            value: 35,
            directBet: 0,
            color: 'black',
            row: 2
        }, {
            name: 21,
            value: 35,
            directBet: 0,
            color: 'red',
            row: 2
        });
        this.screenInstructions = [
            'Start the Game with $' + this.myFunds,
            'To place bets drag and drop coins on to the betting squares',
            'You can drag multiple chips on betting squares',
            'To remove a bet from a square click the square',
            'When you are finished betting, spin the wheel!'
        ];
    };
    WheelTableComponent.prototype.openModal = function () {
        var modalRef = this.modalService.open(_shared_components_ngb_transclude_modal_ngb_transclude_modal_component__WEBPACK_IMPORTED_MODULE_2__["NgbdTranscludeModalComponent"], {
            size: 'lg',
            windowClass: 'modal-xxl'
        });
        modalRef.componentInstance.modalName = 'Roulette Instructions';
        modalRef.componentInstance.modalContent = this.screenInstructions;
        modalRef.componentInstance.modalButtons = this.modalButtons;
    };
    WheelTableComponent.prototype.checkBets = function () {
        this.numberSquares.forEach(function (d, i) {
            if (d.directBet) {
                console.log('Bets ', d.name, ' amount ', d.directBet);
            }
        });
    };
    WheelTableComponent.prototype.onDrop = function (dropData, element) {
        // console.log('onDrop ', dropData, ' element ', element.directBet, ' $ ', this.myFunds);
        var value = Number(dropData.dropData);
        if (this.myFunds >= Number(dropData.dropData)) {
            element.directBet += value;
            this.myFunds -= value;
        }
    };
    // Determines winning returns
    WheelTableComponent.prototype.processBets = function () {
        var _this = this;
        this.displayArray = [];
        this.numberSquares.forEach(function (d, i) {
            if (d.directBet) {
                if (_this.numberSquares[i].contents.includes(_this.winningNumber)) {
                    console.log('WINNER! ', _this.numberSquares[i].name, ' -', d.directBet * d.value);
                    _this.displayArray.push({
                        name: _this.numberSquares[i].name,
                        value: d.directBet * d.value
                    });
                    _this.myFunds += d.directBet * d.value;
                }
                else {
                    console.log('No Winners!');
                }
            }
        });
    };
    // Clears all bets - Start the betting process over
    WheelTableComponent.prototype.removeAllBets = function () {
        this.numberSquares.forEach(function (d, i) {
            d.directBet = 0;
        });
        this.displayArray = [];
    };
    // Removes bet for single clicked slot
    WheelTableComponent.prototype.removeBetValue = function (e) {
        this.myFunds += e.directBet;
        e.directBet = 0;
        this.myFunds += e.directBet;
        console.log('addBetValue ', e.directBet);
    };
    WheelTableComponent.prototype.processWinningNumber = function (e) {
        this.winningNumber = Number(e.value);
        if (this.lastTenNums.length === 10) {
            this.lastTenNums.shift();
        }
        this.lastTenNums.push(this.numberSquares[this.winningNumber - 1]);
        console.log('this.winningNumber ', e);
        this.processBets();
        // this.removeAllBets();
    };
    WheelTableComponent.prototype.dragEnd = function (event) {
        console.log('Element was dragged', event);
    };
    WheelTableComponent.prototype.displayWinnings = function () {
        this.winningsPaneActive = !this.winningsPaneActive;
    };
    WheelTableComponent.prototype.getRandomColor = function (i) {
        if (i % 2 === 0) {
            return 'black';
        }
        return 'red';
    };
    WheelTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wheel-table',
            template: __webpack_require__(/*! ./wheel-table.component.html */ "./src/app/wheel-spin/wheel-table/wheel-table.component.html"),
            styles: [__webpack_require__(/*! ./wheel-table.component.scss */ "./src/app/wheel-spin/wheel-table/wheel-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], WheelTableComponent);
    return WheelTableComponent;
}());



/***/ }),

/***/ "./src/app/wheel-spin/wheelspin-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/wheel-spin/wheelspin-routing.module.ts ***!
  \********************************************************/
/*! exports provided: WheelSpinRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelSpinRoutingModule", function() { return WheelSpinRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wheel_table_wheel_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wheel-table/wheel-table.component */ "./src/app/wheel-spin/wheel-table/wheel-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _wheel_table_wheel_table_component__WEBPACK_IMPORTED_MODULE_2__["WheelTableComponent"],
    },
];
var WheelSpinRoutingModule = /** @class */ (function () {
    function WheelSpinRoutingModule() {
    }
    WheelSpinRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], WheelSpinRoutingModule);
    return WheelSpinRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=wheel-spin-wheel-spin-module.js.map