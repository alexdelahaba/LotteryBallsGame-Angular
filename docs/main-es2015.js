(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_ball_selector_ball_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ball-selector/ball-selector.component */ "./src/app/components/ball-selector/ball-selector.component.ts");
/* harmony import */ var _components_bet_slip_bet_slip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bet-slip/bet-slip.component */ "./src/app/components/bet-slip/bet-slip.component.ts");





class AppComponent {
    constructor() {
        this.value = 1;
    }
    emitValue(value) {
        console.log(value);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-md-8", "col-xs-12"], [1, "col-md-4", "col-xs-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ball-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-bet-slip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_ball_selector_ball_selector_component__WEBPACK_IMPORTED_MODULE_2__["BallSelectorComponent"], _components_bet_slip_bet_slip_component__WEBPACK_IMPORTED_MODULE_3__["BetSlipComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_ball_selector_ball_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ball-selector/ball-selector.component */ "./src/app/components/ball-selector/ball-selector.component.ts");
/* harmony import */ var _components_bet_slip_bet_slip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bet-slip/bet-slip.component */ "./src/app/components/bet-slip/bet-slip.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_ball_selector_ball_selector_component__WEBPACK_IMPORTED_MODULE_8__["BallSelectorComponent"],
        _components_bet_slip_bet_slip_component__WEBPACK_IMPORTED_MODULE_9__["BetSlipComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_ball_selector_ball_selector_component__WEBPACK_IMPORTED_MODULE_8__["BallSelectorComponent"],
                    _components_bet_slip_bet_slip_component__WEBPACK_IMPORTED_MODULE_9__["BetSlipComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/balls.data.ts":
/*!*******************************!*\
  !*** ./src/app/balls.data.ts ***!
  \*******************************/
/*! exports provided: balls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balls", function() { return balls; });
const balls = [
    { classColor: '#43AABA', number: 1, chosen: false },
    { classColor: '#3B95A3', number: 2, chosen: false },
    { classColor: '#2A6A74', number: 3, chosen: false },
    { classColor: '#194046', number: 4, chosen: false },
    { classColor: '#3B63A3', number: 5, chosen: false },
    { classColor: '#2A4774', number: 6, chosen: false },
    { classColor: '#192A46', number: 7, chosen: false },
    { classColor: '#523BA3', number: 8, chosen: false },
    { classColor: '#3B2A74', number: 9, chosen: false },
    { classColor: '#2F225D', number: 10, chosen: false },
];


/***/ }),

/***/ "./src/app/components/ball-selector/ball-selector.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ball-selector/ball-selector.component.ts ***!
  \*********************************************************************/
/*! exports provided: BallSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallSelectorComponent", function() { return BallSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _balls_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../balls.data */ "./src/app/balls.data.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_ball_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ball.service */ "./src/app/services/ball.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







const _c0 = function (a0) { return { backgroundColor: a0 }; };
const _c1 = function (a0) { return { "chosen": a0 }; };
function BallSelectorComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BallSelectorComponent_div_0_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ball_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.chooseBallToPlay(ball_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ball_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ball_r3.classColor))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ball_r3.chosen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ball_r3.number, "");
} }
function BallSelectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your ball");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BallSelectorComponent_div_0_div_4_Template, 3, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ballData);
} }
function BallSelectorComponent_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You win: ", ctx_r7.ballService.betMade * 1.5, "\u20AC !!");
} }
function BallSelectorComponent_div_1_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You loose :( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BallSelectorComponent_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have run out of funds. Please, add funds with the button in the header.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BallSelectorComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BallSelectorComponent_div_1_div_5_div_1_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BallSelectorComponent_div_1_div_5_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BallSelectorComponent_div_1_div_5_div_3_Template, 3, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BallSelectorComponent_div_1_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.resetGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reset game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.win && ctx_r6.ballService.currentFunds === 0);
} }
function BallSelectorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BallSelectorComponent_div_1_div_5_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.winnerBall.classColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.winnerBall.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showResult);
} }
class BallSelectorComponent {
    constructor(ballService) {
        this.ballService = ballService;
        this.ballData = _balls_data__WEBPACK_IMPORTED_MODULE_1__["balls"];
        this.playingGame = false;
        this.win = false;
        this.showResult = false;
    }
    ngOnInit() {
        this.listenToPlaceBet();
    }
    chooseBallToPlay(ball) {
        this.ballService.changeSelection(ball);
    }
    listenToPlaceBet() {
        this.ballService.observableChosenBall
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((value) => value === true))
            .subscribe((resp) => {
            this.showResult = false;
            console.log(resp);
            this.playingGame = true;
            this.randomizeSelection();
        });
    }
    randomizeSelection() {
        this.winnerBall = this.ballData[Math.floor(Math.random() * 10)];
        const interval = setInterval(() => {
            this.winnerBall = this.ballData[Math.floor(Math.random() * 10)];
        }, 50);
        setTimeout(() => {
            clearInterval(interval);
            this.showResult = true;
            if (this.winnerBall === this.ballService.chosenBall) {
                this.win = true;
                this.ballService.currentFunds += this.ballService.betMade * 1.5;
            }
        }, 3000);
    }
    resetGame() {
        this.playingGame = false;
        this.win = false;
        this.showResult = false;
    }
}
BallSelectorComponent.ɵfac = function BallSelectorComponent_Factory(t) { return new (t || BallSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ball_service__WEBPACK_IMPORTED_MODULE_3__["BallService"])); };
BallSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BallSelectorComponent, selectors: [["app-ball-selector"]], decls: 2, vars: 2, consts: [["class", "container ", 4, "ngIf"], ["class", "container mb-5", 4, "ngIf"], [1, "container"], [1, "text-center"], [1, "row"], ["class", "ball col d-flex justify-content-center ", 3, "ngStyle", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ball", "col", "d-flex", "justify-content-center", 3, "ngStyle", "ngClass", "click"], [1, "align-self-center", "text-white"], [1, "container", "mb-5"], [1, "superBall", "col-8", "d-flex", "justify-content-center", "animate__animated", "animate__heartBeat", "animate__slower", 3, "ngStyle"], ["class", "col ", 4, "ngIf"], [1, "col"], ["class", "alert alert-success ", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger ", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning ", "role", "alert", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-warning"]], template: function BallSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BallSelectorComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BallSelectorComponent_div_1_Template, 6, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playingGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playingGame);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".chosen[_ngcontent-%COMP%] {\n  border: 5px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYWxsLXNlbGVjdG9yL0M6XFxVc2Vyc1xcQWxlamFuZHJvXFxEZXNrdG9wXFxDdXJzb3MgRnJvbnRcXDEuIFByb3llY3RvcyBBY3R1YWxlc1xcTG90dGVyeUJhbGxzR2FtZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYmFsbC1zZWxlY3RvclxcYmFsbC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9iYWxsLXNlbGVjdG9yL2JhbGwtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYWxsLXNlbGVjdG9yL2JhbGwtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvc2VuIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XHJcbn1cclxuIiwiLmNob3NlbiB7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BallSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ball-selector',
                templateUrl: './ball-selector.component.html',
                styleUrls: ['./ball-selector.component.scss'],
            }]
    }], function () { return [{ type: _services_ball_service__WEBPACK_IMPORTED_MODULE_3__["BallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/bet-slip/bet-slip.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/bet-slip/bet-slip.component.ts ***!
  \***********************************************************/
/*! exports provided: BetSlipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetSlipComponent", function() { return BetSlipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_ball_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ball.service */ "./src/app/services/ball.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










const _c0 = function (a0) { return { backgroundColor: a0 }; };
function BetSlipComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chosen ball");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.chosenBall.classColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.chosenBall.number, "");
} }
function BetSlipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please, choose a ball.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetSlipComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please, enter number higher than 5\u20AC and lower than ", ctx_r3.ballService.currentFunds, "\u20AC. ");
} }
class BetSlipComponent {
    constructor(ballService, fb) {
        this.ballService = ballService;
        this.fb = fb;
        this.playing = false;
        this.maxValue = 0;
        this.betForm = this.fb.group({
            stake: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.ballService.currentFunds),
                ],
            ],
        });
    }
    ngOnInit() {
        this.listenToBallChanges();
        this.maxValue = this.ballService.currentFunds;
    }
    playGame(betForm) {
        this.playing = true;
        if (betForm.status === 'VALID' && this.chosenBall) {
            if (betForm.value.stake <= this.ballService.currentFunds &&
                this.playing) {
                this.ballService.currentFunds -= betForm.value.stake;
                this.ballService.betMade = betForm.value.stake;
                this.ballService.observableChosenBall.next(true);
            }
        }
        setTimeout(() => {
            this.playing = false;
        }, 3000);
    }
    listenToBallChanges() {
        this.ballService.observableChosenBall
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((value) => value !== true))
            .subscribe((resp) => {
            this.chosenBall = resp;
        });
    }
}
BetSlipComponent.ɵfac = function BetSlipComponent_Factory(t) { return new (t || BetSlipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ball_service__WEBPACK_IMPORTED_MODULE_3__["BallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
BetSlipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetSlipComponent, selectors: [["app-bet-slip"]], decls: 18, vars: 6, consts: [["class", "ml-2 ", 4, "ngIf"], ["class", "alert alert-warning ml-2", "role", "alert", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], [1, "ml-2"], ["matInput", "", "type", "number", "formControlName", "stake", "placeholder", "Stake of the bet", 1, "text-center"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "mt-3", "ml-2", "btn-block", 3, "disabled"], [1, "ball", "col", "d-flex", "justify-content-center", 3, "ngStyle"], [1, "align-self-center", "text-white"], ["role", "alert", 1, "alert", "alert-warning", "ml-2"]], template: function BetSlipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BetSlipComponent_div_0_Template, 6, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BetSlipComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BetSlipComponent_Template_form_ngSubmit_2_listener() { return ctx.playGame(ctx.betForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BetSlipComponent_mat_error_8_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Enter a bet, minimum: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", maximum: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Place bet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chosenBall);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.chosenBall);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.betForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.betForm.controls.stake.touched && ctx.betForm.controls.stake.status === "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ballService.currentFunds, "\u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.betForm.controls.stake.status === "INVALID" || ctx.betForm.value.stake > ctx.ballService.currentFunds || !ctx.chosenBall || ctx.playing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmV0LXNsaXAvYmV0LXNsaXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetSlipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet-slip',
                templateUrl: './bet-slip.component.html',
                styleUrls: ['./bet-slip.component.scss'],
            }]
    }], function () { return [{ type: _services_ball_service__WEBPACK_IMPORTED_MODULE_3__["BallService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_ball_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ball.service */ "./src/app/services/ball.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class HeaderComponent {
    constructor(ballService) {
        this.ballService = ballService;
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ball_service__WEBPACK_IMPORTED_MODULE_1__["BallService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 1, consts: [["color", "primary"], [1, "spacer"], [1, "d-none", "d-sm-block"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon", 1, "ml-3", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Super Ball Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.ballService.currentFunds = ctx.ballService.currentFunds + 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "plus_one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u20AC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current funds: ", ctx.ballService.currentFunds, "\u20AC");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxBbGVqYW5kcm9cXERlc2t0b3BcXEN1cnNvcyBGcm9udFxcMS4gUHJveWVjdG9zIEFjdHVhbGVzXFxMb3R0ZXJ5QmFsbHNHYW1lL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuIiwiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _services_ball_service__WEBPACK_IMPORTED_MODULE_1__["BallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/ball.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/ball.service.ts ***!
  \******************************************/
/*! exports provided: BallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallService", function() { return BallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _balls_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../balls.data */ "./src/app/balls.data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class BallService {
    constructor() {
        this.ballData = _balls_data__WEBPACK_IMPORTED_MODULE_1__["balls"];
        this.observableChosenBall = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chosenBall = {};
        this.currentFunds = 50;
        this.betMade = 0;
    }
    changeSelection(ball) {
        this.ballData.forEach((ball) => (ball.chosen = false));
        ball.chosen = !ball.chosen;
        this.chosenBall = ball;
        this.observableChosenBall.next(ball);
    }
}
BallService.ɵfac = function BallService_Factory(t) { return new (t || BallService)(); };
BallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BallService, factory: BallService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/angular-material/angular-material.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/angular-material/angular-material.module.ts ***!
  \********************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");










class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        ],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]], exports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                ],
                exports: [
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                ],
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alejandro\Desktop\Cursos Front\1. Proyectos Actuales\LotteryBallsGame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map