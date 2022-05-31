/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@benbraide/inlinejs-alert/lib/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-alert/lib/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertMagicHandler": () => (/* reexport safe */ _magic_alert__WEBPACK_IMPORTED_MODULE_1__.AlertMagicHandler),
/* harmony export */   "AlertMagicHandlerCompact": () => (/* reexport safe */ _magic_alert__WEBPACK_IMPORTED_MODULE_1__.AlertMagicHandlerCompact),
/* harmony export */   "AlertMagicName": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_0__.AlertMagicName)
/* harmony export */ });
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./names */ "./node_modules/@benbraide/inlinejs-alert/lib/esm/names.js");
/* harmony import */ var _magic_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./magic/alert */ "./node_modules/@benbraide/inlinejs-alert/lib/esm/magic/alert.js");




/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-alert/lib/esm/magic/alert.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-alert/lib/esm/magic/alert.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertMagicHandler": () => (/* binding */ AlertMagicHandler),
/* harmony export */   "AlertMagicHandlerCompact": () => (/* binding */ AlertMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-alert/lib/esm/names.js");


let AlertConceptName = '';
let AlertHandler = null;
function TransformNotifyOptions(options) {
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(options)) {
        options['icon'] = (options['icon'] || (options['error'] ? 'error' : (options['type'] || options['code'] || 'success')));
        options['text'] = (options['text'] || options['message']);
        options['toast'] = (!!options['toast'] || !!options['asToast']);
        options['position'] = (options['position'] || (options['toast'] ? 'top-end' : 'center'));
        options['timer'] = (options['timer'] || ((typeof options['duration'] === 'number') ? options['duration'] : ((options['duration'] === false) ? undefined : 5000)));
    }
    else {
        options = {
            icon: 'info',
            title: 'Information',
            text: options,
            position: 'center',
        };
    }
    return options;
}
function TransformConfirmOptions(options) {
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(options)) {
        options['icon'] = (options['icon'] || 'warning');
        options['title'] = (options['title'] || 'Please confirm your action');
        options['text'] = (options['text'] || options['message']);
        options['confirmButtonText'] = (options['confirmButtonText'] || 'Yes, continue');
        options['position'] = (options['position'] || 'center');
        options['toast'] = false;
        options['timer'] = undefined;
    }
    else {
        options = {
            icon: 'warning',
            title: 'Please confirm your action',
            text: options,
            confirmButtonText: 'Yes, continue',
            position: 'center',
        };
    }
    return options;
}
function TransformPromptOptions(options) {
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(options)) {
        options['icon'] = (options['icon'] || 'info');
        options['title'] = (options['title'] || 'Please enter details below');
        options['text'] = (options['text'] || options['message']);
        options['confirmButtonText'] = (options['confirmButtonText'] || 'Submit');
        options['position'] = (options['position'] || 'center');
        options['input'] = (options['input'] || options['type'] || 'text');
        options['toast'] = false;
        options['timer'] = undefined;
    }
    else {
        options = {
            icon: 'info',
            title: 'Please enter details below',
            text: options,
            confirmButtonText: 'Submit',
            position: 'center',
            input: 'text',
        };
    }
    return options;
}
function CreateAlertProxy() {
    const getConcept = () => (AlertConceptName ? (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(AlertConceptName) : null);
    let methods = {
        setConceptName: (name) => (AlertConceptName = name),
        setHandler: (handler) => (AlertHandler = handler),
        notify: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Notify(TransformNotifyOptions(options)); },
        confirm: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Confirm(TransformConfirmOptions(options)); },
        prompt: (options) => { var _a; return (_a = (AlertHandler || getConcept())) === null || _a === void 0 ? void 0 : _a.Prompt(TransformPromptOptions(options)); },
    };
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateReadonlyProxy)(methods);
}
const AlertProxy = CreateAlertProxy();
const AlertMagicHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateMagicHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.AlertMagicName, () => AlertProxy);
function AlertMagicHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddMagicHandler)(AlertMagicHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-alert/lib/esm/names.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-alert/lib/esm/names.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertMagicName": () => (/* binding */ AlertMagicName)
/* harmony export */ });
const AlertMagicName = 'alert';


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAnimationActor": () => (/* binding */ AddAnimationActor)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

function AddAnimationActor(handler) {
    var _a, _b;
    let name = '', callback = null;
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(handler)) { //Details provided
        ({ name, callback } = handler);
        if (name && callback) {
            (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Add(callback, name);
        }
    }
    else { //Instance provided
        (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept('animation')) === null || _b === void 0 ? void 0 : _b.GetActorCollection().Add(handler);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/call.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/call.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallAnimationActor": () => (/* binding */ CallAnimationActor)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

function CallAnimationActor(handler, params) {
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(handler)) { //Details provided
        return handler.callback(params);
    }
    return ((typeof handler === 'function') ? handler(params) : handler.Handle(params));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAnimationActorCallback": () => (/* binding */ CreateAnimationActorCallback)
/* harmony export */ });
function CreateAnimationActorCallback(name, callback) {
    return { name, callback };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/default.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/default.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultAnimationActor": () => (/* binding */ DefaultAnimationActor),
/* harmony export */   "DefaultAnimationActorCompact": () => (/* binding */ DefaultAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _opacity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opacity */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/opacity.js");


const DefaultAnimationActor = { name: 'default', callback: _opacity__WEBPACK_IMPORTED_MODULE_1__.OpacityAnimationActor.callback };
function DefaultAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(DefaultAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/null.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/null.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullAnimationActor": () => (/* binding */ NullAnimationActor),
/* harmony export */   "NullAnimationActorCompact": () => (/* binding */ NullAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js");


const NullAnimationActor = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationActorCallback)('null', () => { });
function NullAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(NullAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/opacity.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/opacity.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpacityAnimationActor": () => (/* binding */ OpacityAnimationActor),
/* harmony export */   "OpacityAnimationActorCompact": () => (/* binding */ OpacityAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js");


const OpacityAnimationActor = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationActorCallback)('opacity', ({ fraction, target }) => (target.style.opacity = fraction.toString()));
function OpacityAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(OpacityAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/flip.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/flip.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlipAnimationActor": () => (/* binding */ FlipAnimationActor),
/* harmony export */   "FlipAnimationActorCompact": () => (/* binding */ FlipAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/generic.js");


const FlipAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateRotateAnimationActor)({ name: 'flip', axis: 'y' });
function FlipAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(FlipAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/generic.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/generic.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateRotateAnimationActor": () => (/* binding */ CreateRotateAnimationActor),
/* harmony export */   "CreateRotateAnimationCallback": () => (/* binding */ CreateRotateAnimationCallback),
/* harmony export */   "DefaultRotateAnimationActorFactor": () => (/* binding */ DefaultRotateAnimationActorFactor),
/* harmony export */   "DefaultRotateAnimationActorUnit": () => (/* binding */ DefaultRotateAnimationActorUnit)
/* harmony export */ });
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const DefaultRotateAnimationActorFactor = 360;
const DefaultRotateAnimationActorUnit = 'deg';
function CreateRotateAnimationCallback({ axis = 'z', origin, factor, unit } = {}) {
    let translateOrigin = (value) => ((value !== 'center') ? ((value === 'end') ? '100%' : '0%') : '50%');
    let translatedOrigin = `${translateOrigin((origin === null || origin === void 0 ? void 0 : origin.x) || 'center')} ${translateOrigin((origin === null || origin === void 0 ? void 0 : origin.y) || 'center')}`;
    let validFactor = (factor ? factor : DefaultRotateAnimationActorFactor), validUnit = (unit ? unit : DefaultRotateAnimationActorUnit);
    return ({ fraction, target, stage }) => {
        if (stage === 'start') {
            target.style.transformOrigin = translatedOrigin;
        }
        let delta = ((validFactor < 0) ? (validFactor + (-validFactor * fraction)) : (validFactor - (validFactor * fraction))), axisList = {
            x: ((axis === 'x' || axis === 'all') ? 1 : 0),
            y: ((axis === 'y' || axis === 'all') ? 1 : 0),
            z: ((!axis || axis === 'z' || axis === 'all') ? 1 : 0),
        };
        target.style.transform = target.style.transform.replace(/[ ]*rotate([XYZ]|3d)?\(.+?\)/g, '');
        target.style.transform += ` rotate3d(${axisList.x},${axisList.y},${axisList.z},${delta}${validUnit})`;
    };
}
function CreateRotateAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0,_callback__WEBPACK_IMPORTED_MODULE_0__.CreateAnimationActorCallback)(name, CreateRotateAnimationCallback(rest));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/spin.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/spin.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinAnimationActor": () => (/* binding */ SpinAnimationActor),
/* harmony export */   "SpinAnimationActorCompact": () => (/* binding */ SpinAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/generic.js");


const SpinAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateRotateAnimationActor)({ name: 'spin', axis: 'z' });
function SpinAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(SpinAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/toss.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/toss.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TossAnimationActor": () => (/* binding */ TossAnimationActor),
/* harmony export */   "TossAnimationActorCompact": () => (/* binding */ TossAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/generic.js");


const TossAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateRotateAnimationActor)({ name: 'toss', axis: 'x' });
function TossAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(TossAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/generic.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/generic.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateScaleAnimationActor": () => (/* binding */ CreateScaleAnimationActor),
/* harmony export */   "CreateScaleAnimationCallback": () => (/* binding */ CreateScaleAnimationCallback)
/* harmony export */ });
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function CreateScaleAnimationCallback({ axis, origin, factor } = {}) {
    let translateOrigin = (value) => ((value !== 'center') ? ((value === 'end') ? '100%' : '0%') : '50%');
    let translatedOrigin = `${translateOrigin((origin === null || origin === void 0 ? void 0 : origin.x) || 'center')} ${translateOrigin((origin === null || origin === void 0 ? void 0 : origin.y) || 'center')}`, validFactor = ((factor && factor > 0) ? factor : 1);
    return ({ fraction, target, stage }) => {
        if (stage === 'start') {
            target.style.transformOrigin = translatedOrigin;
        }
        fraction = ((validFactor != 1) ? ((validFactor < 1) ? (1 - (validFactor * (1 - fraction))) : (((validFactor - 1) - ((validFactor - 1) * fraction)) + 1)) : fraction);
        let value = ((axis !== 'x') ? ((axis === 'y') ? `scaleY(${fraction})` : `scale(${fraction}, ${fraction})`) : `scaleX(${fraction})`);
        target.style.transform = target.style.transform.replace(/[ ]*scale[XY]?\(.+?\)/g, '');
        target.style.transform += ` ${value}`;
    };
}
function CreateScaleAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0,_callback__WEBPACK_IMPORTED_MODULE_0__.CreateAnimationActorCallback)(name, CreateScaleAnimationCallback(rest));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/height.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/height.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeightAnimationActor": () => (/* binding */ HeightAnimationActor),
/* harmony export */   "HeightAnimationActorCompact": () => (/* binding */ HeightAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/generic.js");


const HeightAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateScaleAnimationActor)({ name: 'height', axis: 'y', origin: { x: 'center', y: 'start' } });
function HeightAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(HeightAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/width.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/width.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidthAnimationActor": () => (/* binding */ WidthAnimationActor),
/* harmony export */   "WidthAnimationActorCompact": () => (/* binding */ WidthAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/generic.js");


const WidthAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateScaleAnimationActor)({ name: 'width', axis: 'x', origin: { x: 'start', y: 'center' } });
function WidthAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(WidthAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/zoom.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/zoom.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomAnimationActor": () => (/* binding */ ZoomAnimationActor),
/* harmony export */   "ZoomAnimationActorCompact": () => (/* binding */ ZoomAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/generic.js");


const ZoomAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateScaleAnimationActor)({ name: 'zoom', axis: 'both', origin: { x: 'center', y: 'center' } });
function ZoomAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(ZoomAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyRange": () => (/* binding */ ApplyRange),
/* harmony export */   "ApplyRangeAndTransform": () => (/* binding */ ApplyRangeAndTransform),
/* harmony export */   "ApplyTransform": () => (/* binding */ ApplyTransform),
/* harmony export */   "CreateSceneAnimationActor": () => (/* binding */ CreateSceneAnimationActor),
/* harmony export */   "CreateSceneAnimationCallback": () => (/* binding */ CreateSceneAnimationCallback),
/* harmony export */   "FormatValue": () => (/* binding */ FormatValue)
/* harmony export */ });
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function CreateSceneAnimationCallback({ frames, origin: { x = 'center', y = 'center' } = {} }) {
    let flatFrames = frames.reduce((prev, { actor, checkpoint }) => {
        return (((Array.isArray(checkpoint) ? prev.push(...checkpoint.map(c => ({ actor, checkpoint: c }))) : prev.push({ actor, checkpoint })) && false) || prev);
    }, new Array()).sort((first, second) => ((first.checkpoint <= second.checkpoint) ? ((first.checkpoint < second.checkpoint) ? -1 : 0) : 1));
    let computeFrameExtent = (index) => ((index < flatFrames.length) ? flatFrames[index].checkpoint : null);
    let optimizedFrames = flatFrames.map(({ actor, checkpoint }, index) => ({ actor, range: { from: checkpoint, to: computeFrameExtent(index + 1) } }));
    let translateOrigin = (value) => ((value !== 'center') ? ((value === 'end') ? '100%' : '0%') : '50%');
    let translatedOrigin = `${translateOrigin(x)} ${translateOrigin(y)}`;
    let checkpointIsInFrame = (frame, checkpoint) => (frame.range.from <= checkpoint && (frame.range.to === null || checkpoint < frame.range.to));
    let currentFrame = null, findFrame = (checkpoint) => optimizedFrames.find(frame => checkpointIsInFrame(frame, checkpoint));
    let callActor = (actor, params) => ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
    return ({ fraction, target, stage }) => {
        if (stage === 'start') {
            currentFrame = null;
            translatedOrigin && (target.style.transformOrigin = translatedOrigin);
        }
        let checkpoint = (fraction * 100);
        if (!currentFrame || !checkpointIsInFrame(currentFrame, checkpoint)) {
            currentFrame = (findFrame(checkpoint) || null);
        }
        if (currentFrame) {
            let rangeDelta = ((currentFrame.range.to || 100) - currentFrame.range.from);
            callActor(currentFrame.actor, { fraction: ((rangeDelta == 0) ? 0 : ((checkpoint - currentFrame.range.from) / rangeDelta)), target, stage });
        }
    };
}
function CreateSceneAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0,_callback__WEBPACK_IMPORTED_MODULE_0__.CreateAnimationActorCallback)(name, CreateSceneAnimationCallback(rest));
}
function ApplyRange(fraction, from, to) {
    return (((to - from) * fraction) + from);
}
function ApplyTransform(target, name, value) {
    target.style.transform = target.style.transform.replace(new RegExp(`[ ]*${name}([XYZ]|3d)?\\(.+?\\)`, 'g'), '');
    target.style.transform += (value ? ` ${name}(${value})` : ` ${name}`);
}
function FormatValue(value, count) {
    return ((count && count > 1) ? Array.from({ length: count }).map(i => value).join(',') : value);
}
function ApplyRangeAndTransform(target, name, fraction, from, to, unit, count) {
    ApplyTransform(target, name, FormatValue(`${ApplyRange(fraction, from, to)}${unit ? unit : ''}`, count));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/heartbeat.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/heartbeat.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeartbeatAnimationActor": () => (/* binding */ HeartbeatAnimationActor),
/* harmony export */   "HeartbeatAnimationActorCompact": () => (/* binding */ HeartbeatAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");


const HeartbeatAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateSceneAnimationActor)({
    name: 'heartbeat',
    frames: [
        { checkpoint: 0, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
        { checkpoint: [1, 28], actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1.26, '', 2) },
        { checkpoint: [14, 42], actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1.26, 1, '', 2) },
        { checkpoint: 70, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
    ],
});
function HeartbeatAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(HeartbeatAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/pulse.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/pulse.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PulseAnimationActor": () => (/* binding */ PulseAnimationActor),
/* harmony export */   "PulseAnimationActorCompact": () => (/* binding */ PulseAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");


const PulseAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateSceneAnimationActor)({
    name: 'pulse',
    frames: [
        { checkpoint: 0, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
        { checkpoint: 1, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1.26, '', 2) },
        { checkpoint: 50, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1.26, 1, '', 2) },
        { checkpoint: 100, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
    ],
});
function PulseAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(PulseAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/shake.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/shake.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShakeAnimationActor": () => (/* binding */ ShakeAnimationActor),
/* harmony export */   "ShakeAnimationActorCompact": () => (/* binding */ ShakeAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");


const ShakeAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateSceneAnimationActor)({
    name: 'shake',
    frames: [
        { checkpoint: 0, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, 'px') },
        { checkpoint: 1, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 10, 'px') },
        { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'translateX', fraction, -10, 10, 'px') },
        { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'translateX', fraction, 10, -10, 'px') },
        { checkpoint: 90, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'translateX', fraction, -10, 0, 'px') },
        { checkpoint: 100, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, 'px') },
    ],
});
function ShakeAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(ShakeAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/vibrate.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/vibrate.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VibrateAnimationActor": () => (/* binding */ VibrateAnimationActor),
/* harmony export */   "VibrateAnimationActorCompact": () => (/* binding */ VibrateAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");


const VibrateAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateSceneAnimationActor)({
    name: 'vibrate',
    frames: [
        { checkpoint: 0, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'rotateZ', fraction, 0, 0, 'deg') },
        { checkpoint: 1, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'rotateZ', fraction, 0, 4, 'deg') },
        { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'rotateZ', fraction, -4, 4, 'deg') },
        { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'rotateZ', fraction, 4, -4, 'deg') },
        { checkpoint: 90, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'rotateZ', fraction, -4, 0, 'deg') },
        { checkpoint: 100, actor: ({ target, fraction }) => (0,_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform)(target, 'rotateZ', fraction, 0, 0, 'deg') },
    ],
});
function VibrateAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(VibrateAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTranslateAnimationActor": () => (/* binding */ CreateTranslateAnimationActor),
/* harmony export */   "CreateTranslateAnimationCallback": () => (/* binding */ CreateTranslateAnimationCallback),
/* harmony export */   "DefaultTranslateAnimationActorFactor": () => (/* binding */ DefaultTranslateAnimationActorFactor),
/* harmony export */   "DefaultTranslateAnimationActorUnit": () => (/* binding */ DefaultTranslateAnimationActorUnit)
/* harmony export */ });
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const DefaultTranslateAnimationActorFactor = 9999;
const DefaultTranslateAnimationActorUnit = 'px';
function CreateTranslateAnimationCallback({ axis, factor, unit } = {}) {
    let validFactor = (factor ? factor : DefaultTranslateAnimationActorFactor);
    let validUnit = (unit ? unit : DefaultTranslateAnimationActorUnit);
    return ({ fraction, target }) => {
        let delta = ((validFactor < 0) ? (validFactor + (-validFactor * fraction)) : (validFactor - (validFactor * fraction)));
        let value = ((axis !== 'x') ? ((axis === 'y') ? `translateY(${delta}${validUnit})` : `translate(${delta}${validUnit}, ${delta}${validUnit})`) : `translateX(${delta}${validUnit})`);
        target.style.transform = target.style.transform.replace(/[ ]*translate[XY]?\(.+?\)/g, '');
        target.style.transform += ` ${value}`;
    };
}
function CreateTranslateAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0,_callback__WEBPACK_IMPORTED_MODULE_0__.CreateAnimationActorCallback)(name, CreateTranslateAnimationCallback(rest));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-down.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-down.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideDownAnimationActor": () => (/* binding */ SlideDownAnimationActor),
/* harmony export */   "SlideDownAnimationActorCompact": () => (/* binding */ SlideDownAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js");


const SlideDownAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateTranslateAnimationActor)({ name: 'slideDown', axis: 'y', factor: -_generic__WEBPACK_IMPORTED_MODULE_1__.DefaultTranslateAnimationActorFactor });
function SlideDownAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(SlideDownAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-left.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-left.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideLeftAnimationActor": () => (/* binding */ SlideLeftAnimationActor),
/* harmony export */   "SlideLeftAnimationActorCompact": () => (/* binding */ SlideLeftAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js");


const SlideLeftAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateTranslateAnimationActor)({ name: 'slideLeft', axis: 'x' });
function SlideLeftAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(SlideLeftAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-right.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-right.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideRightAnimationActor": () => (/* binding */ SlideRightAnimationActor),
/* harmony export */   "SlideRightAnimationActorCompact": () => (/* binding */ SlideRightAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js");


const SlideRightAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateTranslateAnimationActor)({ name: 'slideRight', axis: 'x', factor: -_generic__WEBPACK_IMPORTED_MODULE_1__.DefaultTranslateAnimationActorFactor });
function SlideRightAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(SlideRightAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-up.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-up.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideUpAnimationActor": () => (/* binding */ SlideUpAnimationActor),
/* harmony export */   "SlideUpAnimationActorCompact": () => (/* binding */ SlideUpAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js");


const SlideUpAnimationActor = (0,_generic__WEBPACK_IMPORTED_MODULE_1__.CreateTranslateAnimationActor)({ name: 'slideUp', axis: 'y' });
function SlideUpAnimationActorCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationActor)(SlideUpAnimationActor);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/actor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/actor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationActorCollection": () => (/* binding */ AnimationActorCollection)
/* harmony export */ });
class AnimationActorCollection {
    constructor() {
        this.handlers_ = {};
    }
    Add(handler, name) {
        if (typeof handler !== 'function') {
            this.handlers_[handler.GetName()] = handler;
        }
        else if (name) {
            this.handlers_[name] = handler;
        }
    }
    Remove(name) {
        delete this.handlers_[name];
    }
    Find(name) {
        if (this.handlers_.hasOwnProperty(name)) {
            let handler = this.handlers_[name];
            return ((typeof handler === 'function') ? handler : (params) => handler.Handle(params));
        }
        return null;
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/creator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/creator.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationCreatorCollection": () => (/* binding */ AnimationCreatorCollection)
/* harmony export */ });
class AnimationCreatorCollection {
    constructor() {
        this.list_ = {};
    }
    Add(name, creator) {
        this.list_[name] = creator;
    }
    Remove(name) {
        delete this.list_[name];
    }
    Find(name) {
        return (this.list_.hasOwnProperty(name) ? this.list_[name] : null);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/ease.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/ease.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationEaseCollection": () => (/* binding */ AnimationEaseCollection)
/* harmony export */ });
class AnimationEaseCollection {
    constructor() {
        this.handlers_ = {};
    }
    Add(handler, name) {
        if (typeof handler !== 'function') {
            this.handlers_[handler.GetName()] = handler;
        }
        else if (name) {
            this.handlers_[name] = handler;
        }
    }
    Remove(name) {
        delete this.handlers_[name];
    }
    Find(name) {
        if (this.handlers_.hasOwnProperty(name)) {
            let handler = this.handlers_[name];
            return ((typeof handler === 'function') ? handler : (params) => handler.Handle(params));
        }
        return null;
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/concept.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/concept.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationConcept": () => (/* binding */ AnimationConcept)
/* harmony export */ });
/* harmony import */ var _collection_actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection/actor */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/actor.js");
/* harmony import */ var _collection_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection/creator */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/creator.js");
/* harmony import */ var _collection_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection/ease */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/ease.js");



class AnimationConcept {
    constructor() {
        this.easeCollection_ = new _collection_ease__WEBPACK_IMPORTED_MODULE_2__.AnimationEaseCollection();
        this.actorCollection_ = new _collection_actor__WEBPACK_IMPORTED_MODULE_0__.AnimationActorCollection();
        this.creatorCollection_ = new _collection_creator__WEBPACK_IMPORTED_MODULE_1__.AnimationCreatorCollection();
    }
    GetEaseCollection() {
        return this.easeCollection_;
    }
    GetActorCollection() {
        return this.actorCollection_;
    }
    GetCreatorCollection() {
        return this.creatorCollection_;
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/bezier.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/bezier.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BezierAnimationEaseCreator": () => (/* binding */ BezierAnimationEaseCreator)
/* harmony export */ });
function BezierAnimationEaseCreator(points) {
    return ({ fraction }) => {
        if (fraction == 1) {
            return fraction;
        }
        let [first, second, third, fourth] = points.map(pt => (pt * 0.001));
        let firstDiff = (3 * (second - first));
        let secondDiff = ((3 * (third - second)) - firstDiff);
        let thirdDiff = ((fourth - first) - firstDiff - secondDiff);
        return ((firstDiff * Math.pow(fraction, 3)) + (secondDiff * Math.pow(fraction, 2)) + (thirdDiff * fraction));
    };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/jello.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/jello.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JelloAnimationCreator": () => (/* binding */ JelloAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");

function JelloAnimationCreator({ factor = 12.6, divisor = 2, unit = 'deg' } = {}) {
    return (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 0, unit) },
            { checkpoint: 11.1, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 1, unit) },
            { checkpoint: 22.2, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 2, unit) },
            { checkpoint: 33.3, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 3, unit) },
            { checkpoint: 44.4, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 4, unit) },
            { checkpoint: 55.5, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 5, unit) },
            { checkpoint: 66.6, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 6, unit) },
            { checkpoint: 77.7, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 7, unit) },
            { checkpoint: 88.8, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 8, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, divisor, 0, unit) },
        ],
    });
}
function ComputeAndApply(target, fraction, factor, divisor, value, unit) {
    let [from, to] = ApplyFactorAndDivisor(factor, divisor, value);
    (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'skew', fraction, from, to, unit, 2);
}
function ApplyFactorAndDivisor(factor, divisor, value) {
    let from = ((value < 2) ? 0 : (factor / Math.pow(divisor, (value - 1)))), to = ((value < 1) ? 0 : (factor / Math.pow(divisor, value)));
    if ((value % 2) == 0) {
        from = -from;
    }
    else {
        to = -to;
    }
    return [from, to];
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/rotate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/rotate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotateAnimationCreator": () => (/* binding */ RotateAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_rotate_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/rotate/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/generic.js");

function RotateAnimationCreator(params = {}) {
    return (0,_actors_rotate_generic__WEBPACK_IMPORTED_MODULE_0__.CreateRotateAnimationCallback)(params);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/rubberband.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/rubberband.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RubberbandAnimationCreator": () => (/* binding */ RubberbandAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");

function RubberbandAnimationCreator({ factor = 1.26, multiplier = 0.10 } = {}) {
    return (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, null, 1, null, 1) },
            { checkpoint: 1, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, -2, 0, -2, 5) },
            { checkpoint: 30, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 0, 5, 5, 0) },
            { checkpoint: 40, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 5, 1, 0, 4) },
            { checkpoint: 50, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 1, 3, 4, 2) },
            { checkpoint: 65, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 3, 2, 2, 3) },
            { checkpoint: 75, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 2, -2, 3, -2) },
            { checkpoint: 100, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, null, 1, null, 1) },
        ],
    });
}
function ComputeAndApply(target, fraction, factor, multiplier, fromX, toX, fromY, toY) {
    let xValue = ((fromX === null) ? toX : (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRange)(fraction, SubtractFactor(factor, multiplier, fromX), SubtractFactor(factor, multiplier, toX)));
    let yValue = ((fromY === null) ? toY : (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRange)(fraction, SubtractFactor(factor, multiplier, fromY), SubtractFactor(factor, multiplier, toY)));
    (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyTransform)(target, 'scale', `${xValue},${yValue}`);
}
function SubtractFactor(factor, multiplier, value) {
    return ((0 <= value) ? (factor - (multiplier * value)) : -(value + 1));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/scale.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/scale.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScaleAnimationCreator": () => (/* binding */ ScaleAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scale_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scale/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/generic.js");

function ScaleAnimationCreator(params = {}) {
    return (0,_actors_scale_generic__WEBPACK_IMPORTED_MODULE_0__.CreateScaleAnimationCallback)(params);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/scene.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/scene.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneAnimationCreator": () => (/* binding */ SceneAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");

function SceneAnimationCreator(params) {
    return (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.CreateSceneAnimationCallback)(params);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/shake.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/shake.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShakeAnimationCreator": () => (/* binding */ ShakeAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");

function ShakeAnimationCreator({ displacement = 10, unit = 'px' } = {}) {
    return (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, displacement, unit) },
            { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'translateX', fraction, -displacement, displacement, unit) },
            { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'translateX', fraction, displacement, -displacement, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'translateX', fraction, -displacement, 0, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, unit) },
        ],
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/swing.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/swing.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwingAnimationCreator": () => (/* binding */ SwingAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");

function SwingAnimationCreator({ displacement = 5, unit = 'deg', origin: { x = 'start', y = 'start' } = {} } = {}) {
    return (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.CreateSceneAnimationCallback)({
        origin: { x, y },
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * 0), (displacement * 3), unit) },
            { checkpoint: 20, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * 3), (displacement * -2), unit) },
            { checkpoint: 40, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * -2), (displacement * 1), unit) },
            { checkpoint: 60, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * 1), (displacement * -1), unit) },
            { checkpoint: 80, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * -1), (displacement * 0), unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
        ],
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/tada.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/tada.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TadaAnimationCreator": () => (/* binding */ TadaAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");

function TadaAnimationCreator({ displacement = 3, fromFactor = 0.9, toFactor = 1.17, unit = 'deg' } = {}) {
    return (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, 0, 0, null, 1, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, 0, displacement, 1, fromFactor, unit, true) },
            { checkpoint: 10, actor: () => { } },
            { checkpoint: 20, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, -displacement, displacement, fromFactor, toFactor, unit) },
            { checkpoint: 30, actor: () => { } },
            { checkpoint: [40, 60, 80], actor: ({ target, fraction }) => ComputeAndApply(target, fraction, -displacement, displacement, null, toFactor, unit) },
            { checkpoint: [50, 70], actor: ({ target, fraction }) => ComputeAndApply(target, fraction, displacement, -displacement, null, toFactor, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, displacement, 0, toFactor, 1, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, 0, 0, null, 1, unit) },
        ],
    });
}
function ComputeAndApply(target, fraction, rotateFrom, rotateTo, fromFactor, toFactor, unit, pivot = false) {
    let scaleValue = ((fromFactor === null) ? toFactor : (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRange)(fraction, fromFactor, toFactor));
    let rotateValue = (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRange)(fraction, rotateFrom, rotateTo);
    let rotateTranslateValue = (pivot ? (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRange)(fraction, 0, 1) : 1);
    target.style.transform = target.style.transform.replace(/[ ]*rotate([XYZ]|3d)?\(.+?\)/, '');
    target.style.transform += ` rotate3d(0,0,${rotateTranslateValue},${rotateValue}${unit})`;
    (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyTransform)(target, 'scale', `${scaleValue},${scaleValue}`);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/translate.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/translate.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateAnimationCreator": () => (/* binding */ TranslateAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_translate_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/translate/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js");

function TranslateAnimationCreator(params = {}) {
    return (0,_actors_translate_generic__WEBPACK_IMPORTED_MODULE_0__.CreateTranslateAnimationCallback)(params);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/vibrate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/vibrate.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VibrateAnimationCreator": () => (/* binding */ VibrateAnimationCreator)
/* harmony export */ });
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");

function VibrateAnimationCreator({ displacement = 4, unit = 'deg' } = {}) {
    return (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, displacement, unit) },
            { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, -displacement, displacement, unit) },
            { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, displacement, -displacement, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, -displacement, 0, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0,_actors_scene_generic__WEBPACK_IMPORTED_MODULE_0__.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
        ],
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/directive/animate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/directive/animate.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateDirectiveHandler": () => (/* binding */ AnimateDirectiveHandler),
/* harmony export */   "AnimateDirectiveHandlerCompact": () => (/* binding */ AnimateDirectiveHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _utilities_find_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/find-data */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/utilities/find-data.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const AnimateDirectiveHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)('animate', (_a) => {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var { componentId, contextElement, argKey, argOptions } = _a, rest = __rest(_a, ["componentId", "contextElement", "argKey", "argOptions"]);
    let options = {
        alternate: argOptions.includes('alternate'),
        normal: argOptions.includes('normal'),
        inner: (argKey === 'inner'),
    };
    argOptions = argOptions.filter(opt => (opt !== 'normal'));
    let traverseTargets = (callback) => (options.inner ? Array.from(contextElement.children) : [contextElement]).forEach((target) => {
        callback(target);
    });
    let checkpoint = 0, bind = () => {
        let waitTransition = (reverse, target, callback) => {
            let myCheckpoint = ++checkpoint;
            transitionCancel = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.WaitTransition)({ componentId, contextElement, target, reverse,
                callback: (waited) => {
                    if (myCheckpoint == checkpoint) {
                        transitionCancel = null;
                        if (waited) {
                            callback && callback();
                        }
                        else {
                            traverseTargets(child => child.style.removeProperty('transform'));
                        }
                    }
                },
            });
        };
        let childIndex = 0, handleInner = (reverse) => {
            if (childIndex < contextElement.children.length) {
                waitTransition(reverse, contextElement.children[childIndex++], () => handleInner(reverse));
            }
            else {
                repeat(options.alternate ? !reverse : reverse);
            }
        };
        let begin = (reverse) => {
            var _a;
            checkpoint += 1;
            if (options.inner) {
                childIndex = 0;
                handleInner(reverse);
            }
            else {
                waitTransition(reverse, (_a = (0,_utilities_find_data__WEBPACK_IMPORTED_MODULE_1__.FindTransitionData)({ componentId, contextElement })) === null || _a === void 0 ? void 0 : _a.target, () => repeat(options.alternate ? !reverse : reverse));
            }
        };
        let repeat = (reverse) => {
            var _a, _b;
            let info = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ResolveTransition)((((_b = (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition')) || null), reverse);
            if (info && info.repeats) {
                let myCheckpoint = ++checkpoint;
                (info.repeats > 0) && (info.repeats -= 1);
                setTimeout(() => {
                    if (myCheckpoint == checkpoint) {
                        contextElement.dispatchEvent(new CustomEvent('animate.repeat'));
                        begin(reverse);
                    }
                }, (info.delay || _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DefaultTransitionDelay));
            }
        };
        let lastValue = false, transitionCancel = null, apply = (value) => {
            if (!!value === lastValue) {
                return;
            }
            if (transitionCancel) {
                transitionCancel();
                (options.inner ? Array.from(contextElement.children) : [contextElement]).forEach(child => {
                    child.style.removeProperty('transform');
                    child.style.removeProperty('opacity');
                });
            }
            if (!options.normal || !!value) {
                begin(!value);
            }
            lastValue = !!value;
        };
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.LazyCheck)(Object.assign(Object.assign({ componentId, contextElement, argKey, argOptions }, rest), { callback: apply }));
    };
    if (options.inner) {
        (_c = (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _b === void 0 ? void 0 : _b.FindElementScope(contextElement)) === null || _c === void 0 ? void 0 : _c.AddPostProcessCallback(bind);
    }
    else { //Immediate
        bind();
    }
    let data = (_e = (_d = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _d === void 0 ? void 0 : _d.FindElementScope(contextElement)) === null || _e === void 0 ? void 0 : _e.GetData('transition');
    if (!data || (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(data)) {
        (_g = (_f = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _f === void 0 ? void 0 : _f.FindElementScope(contextElement)) === null || _g === void 0 ? void 0 : _g.SetData('transition', {
            actor: null,
            ease: null,
            duration: _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DefaultTransitionDuration,
            repeats: _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DefaultTransitionRepeats,
            delay: _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        });
    }
    (_j = (_h = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _h === void 0 ? void 0 : _h.FindElementScope(contextElement)) === null || _j === void 0 ? void 0 : _j.AddUninitCallback(() => (checkpoint += 1));
});
function AnimateDirectiveHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(AnimateDirectiveHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/directive/transition.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/directive/transition.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitionDirectiveHandler": () => (/* binding */ TransitionDirectiveHandler),
/* harmony export */   "TransitionDirectiveHandlerCompact": () => (/* binding */ TransitionDirectiveHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _utilities_find_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/find-data */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/utilities/find-data.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


function HandleNumeric({ data, key, defaultValue, componentId, contextElement, expression, isDuration }) {
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(data)) {
        return;
    }
    let evaluate = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), update = (value) => {
        if (isDuration && typeof value === 'string') {
            data[key] = ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ExtractDuration)(value) || defaultValue);
        }
        else {
            data[key] = (((typeof value === 'number') && value) || defaultValue);
        }
    };
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(update),
    });
}
function GetData({ componentId, component, contextElement, argOptions }) {
    var _a, _b;
    let data = (0,_utilities_find_data__WEBPACK_IMPORTED_MODULE_1__.FindTransitionData)({ componentId, component, contextElement });
    if (!data) {
        data = {
            actor: null,
            ease: null,
            duration: _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DefaultTransitionDuration,
            repeats: _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DefaultTransitionRepeats,
            delay: _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        };
        (_b = (_a = (component || (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.SetData('transition', data);
    }
    return data;
}
const TransitionDirectiveHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)('transition', (_a) => {
    var { componentId, component, contextElement, expression, argKey, argOptions } = _a, rest = __rest(_a, ["componentId", "component", "contextElement", "expression", "argKey", "argOptions"]);
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BindEvent)({ contextElement, expression,
        component: (component || componentId),
        key: 'transition',
        event: argKey,
        defaultEvent: 'enter',
        eventWhitelist: ['leave', 'canceled'],
        options: argOptions,
        optionBlacklist: ['window', 'document', 'outside'],
    })) {
        return;
    }
    let data = GetData(Object.assign({ componentId, component, contextElement, expression, argKey, argOptions }, rest));
    if (argKey === 'actor' && !(0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(data)) {
        let evaluate = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), updateActor = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.actor = (((_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(value)) || null);
            }
            else {
                data.actor = (value || null);
            }
        };
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(updateActor),
        });
    }
    else if (argKey === 'ease' && !(0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(data)) {
        let evaluate = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), updateEase = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.ease = (((_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(value)) || null);
            }
            else {
                data.ease = (value || null);
            }
        };
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(updateEase),
        });
    }
    else if (argKey === 'target') {
        let evaluate = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression });
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(value => (data.target = ((value instanceof HTMLElement) ? value : undefined))),
        });
    }
    else if (argKey === 'duration') {
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 300, isDuration: true });
    }
    else if (argKey === 'repeats' || argKey === 'delay') {
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 0, isDuration: (argKey === 'delay') });
    }
    else { //Check for object
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression })((value) => {
            if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(value)) { //Copy props
                Object.entries(value).forEach(([key, value]) => (data[key] = value));
            }
        });
    }
});
function TransitionDirectiveHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(TransitionDirectiveHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAnimationEase": () => (/* binding */ AddAnimationEase)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

function AddAnimationEase(handler) {
    var _a, _b;
    let name = '', callback = null;
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(handler)) { //Details provided
        ({ name, callback } = handler);
        if (name && callback) {
            (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Add(callback, name);
        }
    }
    else { //Instance provided
        (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept('animation')) === null || _b === void 0 ? void 0 : _b.GetEaseCollection().Add(handler);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/back.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/back.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackAnimationEase": () => (/* binding */ BackAnimationEase),
/* harmony export */   "BackAnimationEaseCompact": () => (/* binding */ BackAnimationEaseCompact),
/* harmony export */   "BackInAnimationEase": () => (/* binding */ BackInAnimationEase),
/* harmony export */   "BackInAnimationEaseCompact": () => (/* binding */ BackInAnimationEaseCompact),
/* harmony export */   "BackInOutAnimationEase": () => (/* binding */ BackInOutAnimationEase),
/* harmony export */   "BackInOutAnimationEaseCompact": () => (/* binding */ BackInOutAnimationEaseCompact),
/* harmony export */   "BackOutAnimationEase": () => (/* binding */ BackOutAnimationEase),
/* harmony export */   "BackOutAnimationEaseCompact": () => (/* binding */ BackOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const BackAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('back', ({ fraction }) => {
    fraction = (1 - fraction);
    return (1 - (fraction * fraction * ((2.70158 * fraction) - 1.70158)));
});
function BackAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BackAnimationEase);
}
const BackInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('backIn', ({ fraction }) => ((2.70158 * fraction * fraction * fraction) - (1.70158 * fraction * fraction)));
function BackInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BackInAnimationEase);
}
const BackOutAnimationEase = { name: `${BackAnimationEase.name}Out`, callback: BackAnimationEase.callback };
function BackOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BackOutAnimationEase);
}
const BackInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('backInOut', ({ fraction }) => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    if (fraction < 0.5) {
        return ((Math.pow(2 * fraction, 2) * ((c2 + 1) * 2 * fraction - c2)) / 2);
    }
    return ((Math.pow(2 * fraction - 2, 2) * ((c2 + 1) * (fraction * 2 - 2) + c2) + 2) / 2);
});
function BackInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BackInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/bezier.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/bezier.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBezierAnimationEaseCallback": () => (/* binding */ CreateBezierAnimationEaseCallback)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


function CreateBezierAnimationEaseCallback(points) {
    let transformedPoints = points.map(pt => ((typeof pt !== 'number') ? parseInt((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ToString)(pt)) : pt));
    return (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)(`bezier.${points.join('.')}`, ({ fraction }) => {
        if (fraction == 1) {
            return fraction;
        }
        let [first, second, third, fourth] = transformedPoints.map(pt => (pt * 0.001));
        let firstDiff = (3 * (second - first));
        let secondDiff = ((3 * (third - second)) - firstDiff);
        let thirdDiff = ((fourth - first) - firstDiff - secondDiff);
        return ((firstDiff * Math.pow(fraction, 3)) + (secondDiff * Math.pow(fraction, 2)) + (thirdDiff * fraction));
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/bounce.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/bounce.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BounceAnimationEase": () => (/* binding */ BounceAnimationEase),
/* harmony export */   "BounceAnimationEaseCompact": () => (/* binding */ BounceAnimationEaseCompact),
/* harmony export */   "BounceInAnimationEase": () => (/* binding */ BounceInAnimationEase),
/* harmony export */   "BounceInAnimationEaseCompact": () => (/* binding */ BounceInAnimationEaseCompact),
/* harmony export */   "BounceInOutAnimationEase": () => (/* binding */ BounceInOutAnimationEase),
/* harmony export */   "BounceInOutAnimationEaseCompact": () => (/* binding */ BounceInOutAnimationEaseCompact),
/* harmony export */   "BounceOutAnimationEase": () => (/* binding */ BounceOutAnimationEase),
/* harmony export */   "BounceOutAnimationEaseCompact": () => (/* binding */ BounceOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const BounceAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('bounce', ({ fraction }) => {
    if (fraction < (1 / 2.75)) {
        return (7.5625 * fraction * fraction);
    }
    if (fraction < (2 / 2.75)) {
        fraction -= (1.5 / 2.75);
        return ((7.5625 * fraction * fraction) + 0.75);
    }
    if (fraction < (2.5 / 2.75)) {
        fraction -= (2.25 / 2.75);
        return ((7.5625 * fraction * fraction) + 0.9375);
    }
    fraction -= (2.625 / 2.75);
    return ((7.5625 * fraction * fraction) + 0.984375);
});
function BounceAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BounceAnimationEase);
}
const BounceInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('bounceIn', (_a) => {
    var { fraction } = _a, rest = __rest(_a, ["fraction"]);
    return (1 - BounceAnimationEase.callback(Object.assign({ fraction: (1 - fraction) }, rest)));
});
function BounceInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BounceInAnimationEase);
}
const BounceOutAnimationEase = { name: `${BounceAnimationEase.name}Out`, callback: BounceAnimationEase.callback };
function BounceOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BounceOutAnimationEase);
}
const BounceInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('bounceInOut', (_a) => {
    var { fraction } = _a, rest = __rest(_a, ["fraction"]);
    if (fraction < 0.5) {
        return ((1 - BounceInAnimationEase.callback(Object.assign({ fraction: (1 - (2 * fraction)) }, rest))) / 2);
    }
    return ((1 + BounceAnimationEase.callback(Object.assign({ fraction: ((2 * fraction) - 1) }, rest))) / 2);
});
function BounceInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(BounceInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/call.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/call.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallAnimationEase": () => (/* binding */ CallAnimationEase)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

function CallAnimationEase(handler, params) {
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(handler)) { //Details provided
        return handler.callback(params);
    }
    return ((typeof handler === 'function') ? handler(params) : handler.Handle(params));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAnimationEaseCallback": () => (/* binding */ CreateAnimationEaseCallback)
/* harmony export */ });
function CreateAnimationEaseCallback(name, callback) {
    return { name, callback };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/circle.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/circle.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleAnimationEase": () => (/* binding */ CircleAnimationEase),
/* harmony export */   "CircleAnimationEaseCompact": () => (/* binding */ CircleAnimationEaseCompact),
/* harmony export */   "CircleInAnimationEase": () => (/* binding */ CircleInAnimationEase),
/* harmony export */   "CircleInAnimationEaseCompact": () => (/* binding */ CircleInAnimationEaseCompact),
/* harmony export */   "CircleInOutAnimationEase": () => (/* binding */ CircleInOutAnimationEase),
/* harmony export */   "CircleInOutAnimationEaseCompact": () => (/* binding */ CircleInOutAnimationEaseCompact),
/* harmony export */   "CircleOutAnimationEase": () => (/* binding */ CircleOutAnimationEase),
/* harmony export */   "CircleOutAnimationEaseCompact": () => (/* binding */ CircleOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const CircleAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('circle', ({ fraction }) => Math.sqrt(1 - Math.pow((fraction - 1), 2)));
function CircleAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CircleAnimationEase);
}
const CircleInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('circleIn', ({ fraction }) => (1 - Math.sqrt(1 - Math.pow(fraction, 2))));
function CircleInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CircleInAnimationEase);
}
const CircleOutAnimationEase = { name: `${CircleAnimationEase.name}Out`, callback: CircleAnimationEase.callback };
function CircleOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CircleOutAnimationEase);
}
const CircleInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('circleInOut', ({ fraction }) => {
    return (fraction < 0.5) ? ((1 - Math.sqrt(1 - Math.pow((2 * fraction), 2))) / 2) : ((Math.sqrt(1 - Math.pow(((-2 * fraction) + 2), 2)) + 1) / 2);
});
function CircleInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CircleInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/cubic.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/cubic.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubicAnimationEase": () => (/* binding */ CubicAnimationEase),
/* harmony export */   "CubicAnimationEaseCompact": () => (/* binding */ CubicAnimationEaseCompact),
/* harmony export */   "CubicInAnimationEase": () => (/* binding */ CubicInAnimationEase),
/* harmony export */   "CubicInAnimationEaseCompact": () => (/* binding */ CubicInAnimationEaseCompact),
/* harmony export */   "CubicInOutAnimationEase": () => (/* binding */ CubicInOutAnimationEase),
/* harmony export */   "CubicInOutAnimationEaseCompact": () => (/* binding */ CubicInOutAnimationEaseCompact),
/* harmony export */   "CubicOutAnimationEase": () => (/* binding */ CubicOutAnimationEase),
/* harmony export */   "CubicOutAnimationEaseCompact": () => (/* binding */ CubicOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const CubicAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('cubic', ({ fraction }) => (1 - Math.pow((1 - fraction), 3)));
function CubicAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CubicAnimationEase);
}
const CubicInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('cubicIn', ({ fraction }) => Math.pow(fraction, 3));
function CubicInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CubicInAnimationEase);
}
const CubicOutAnimationEase = { name: `${CubicAnimationEase.name}Out`, callback: CubicAnimationEase.callback };
function CubicOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CubicOutAnimationEase);
}
const CubicInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('cubicInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (4 * Math.pow(fraction, 3)) : (1 - (Math.pow(((-2 * fraction) + 2), 3) / 2)));
});
function CubicInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(CubicInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/default.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/default.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultAnimationEase": () => (/* binding */ DefaultAnimationEase),
/* harmony export */   "DefaultAnimationEaseCompact": () => (/* binding */ DefaultAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const DefaultAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('default', ({ fraction }) => ((fraction != 1) ? (-1 * Math.cos(fraction * (Math.PI / 2)) + 1) : 1));
function DefaultAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(DefaultAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/elastic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/elastic.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElasticAnimationEase": () => (/* binding */ ElasticAnimationEase),
/* harmony export */   "ElasticAnimationEaseCompact": () => (/* binding */ ElasticAnimationEaseCompact),
/* harmony export */   "ElasticInAnimationEase": () => (/* binding */ ElasticInAnimationEase),
/* harmony export */   "ElasticInAnimationEaseCompact": () => (/* binding */ ElasticInAnimationEaseCompact),
/* harmony export */   "ElasticInOutAnimationEase": () => (/* binding */ ElasticInOutAnimationEase),
/* harmony export */   "ElasticInOutAnimationEaseCompact": () => (/* binding */ ElasticInOutAnimationEaseCompact),
/* harmony export */   "ElasticOutAnimationEase": () => (/* binding */ ElasticOutAnimationEase),
/* harmony export */   "ElasticOutAnimationEaseCompact": () => (/* binding */ ElasticOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const ElasticAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('elastic', ({ fraction }) => {
    return ((fraction == 0 || fraction == 1) ? fraction : (Math.pow(2, (-10 * fraction)) * Math.sin(((fraction * 10) - 0.75) * ((2 * Math.PI) / 3)) + 1));
});
function ElasticAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ElasticAnimationEase);
}
const ElasticInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('elasticIn', ({ fraction }) => {
    return ((fraction == 0) ? 0 : ((fraction == 1) ? 1 : -Math.pow(2, 10 * fraction - 10) * Math.sin((fraction * 10 - 10.75) * ((2 * Math.PI) / 3))));
});
function ElasticInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ElasticInAnimationEase);
}
const ElasticOutAnimationEase = { name: `${ElasticAnimationEase.name}Out`, callback: ElasticAnimationEase.callback };
function ElasticOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ElasticOutAnimationEase);
}
const ElasticInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('elasticInOut', ({ fraction }) => {
    if (fraction == 0 || fraction == 1) {
        return fraction;
    }
    const c1 = (2 * Math.PI) / 4.5;
    if (fraction < 0.5) {
        return (-(Math.pow(2, 20 * fraction - 10) * Math.sin((20 * fraction - 11.125) * c1)) / 2);
    }
    return ((Math.pow(2, -20 * fraction + 10) * Math.sin((20 * fraction - 11.125) * c1)) / 2 + 1);
});
function ElasticInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ElasticInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/exponential.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/exponential.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExponentialAnimationEase": () => (/* binding */ ExponentialAnimationEase),
/* harmony export */   "ExponentialAnimationEaseCompact": () => (/* binding */ ExponentialAnimationEaseCompact),
/* harmony export */   "ExponentialInAnimationEase": () => (/* binding */ ExponentialInAnimationEase),
/* harmony export */   "ExponentialInAnimationEaseCompact": () => (/* binding */ ExponentialInAnimationEaseCompact),
/* harmony export */   "ExponentialInOutAnimationEase": () => (/* binding */ ExponentialInOutAnimationEase),
/* harmony export */   "ExponentialInOutAnimationEaseCompact": () => (/* binding */ ExponentialInOutAnimationEaseCompact),
/* harmony export */   "ExponentialOutAnimationEase": () => (/* binding */ ExponentialOutAnimationEase),
/* harmony export */   "ExponentialOutAnimationEaseCompact": () => (/* binding */ ExponentialOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const ExponentialAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('exponential', ({ fraction }) => ((fraction == 1) ? fraction : (1 - Math.pow(2, (-10 * fraction)))));
function ExponentialAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ExponentialAnimationEase);
}
const ExponentialInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('exponentialIn', ({ fraction }) => ((fraction == 0) ? 0 : Math.pow(2, ((10 * fraction) - 10))));
function ExponentialInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ExponentialInAnimationEase);
}
const ExponentialOutAnimationEase = { name: `${ExponentialAnimationEase.name}Out`, callback: ExponentialAnimationEase.callback };
function ExponentialOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ExponentialOutAnimationEase);
}
const ExponentialInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('exponentialInOut', ({ fraction }) => ((fraction == 1) ? fraction : (1 - Math.pow(2, (-10 * fraction)))));
function ExponentialInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(ExponentialInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/invert.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/invert.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvertAnimationEase": () => (/* binding */ InvertAnimationEase)
/* harmony export */ });
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/call.js");

function InvertAnimationEase(handler, params) {
    return (1 - (0,_call__WEBPACK_IMPORTED_MODULE_0__.CallAnimationEase)(handler, params));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/linear.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/linear.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinearAnimationEase": () => (/* binding */ LinearAnimationEase),
/* harmony export */   "LinearAnimationEaseCompact": () => (/* binding */ LinearAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const LinearAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('linear', ({ fraction }) => fraction);
function LinearAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(LinearAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quadratic.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quadratic.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuadraticAnimationEase": () => (/* binding */ QuadraticAnimationEase),
/* harmony export */   "QuadraticAnimationEaseCompact": () => (/* binding */ QuadraticAnimationEaseCompact),
/* harmony export */   "QuadraticInAnimationEase": () => (/* binding */ QuadraticInAnimationEase),
/* harmony export */   "QuadraticInAnimationEaseCompact": () => (/* binding */ QuadraticInAnimationEaseCompact),
/* harmony export */   "QuadraticInOutAnimationEase": () => (/* binding */ QuadraticInOutAnimationEase),
/* harmony export */   "QuadraticInOutAnimationEaseCompact": () => (/* binding */ QuadraticInOutAnimationEaseCompact),
/* harmony export */   "QuadraticOutAnimationEase": () => (/* binding */ QuadraticOutAnimationEase),
/* harmony export */   "QuadraticOutAnimationEaseCompact": () => (/* binding */ QuadraticOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const QuadraticAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quadratic', ({ fraction }) => (1 - Math.pow((1 - fraction), 2)));
function QuadraticAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuadraticAnimationEase);
}
const QuadraticInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quadraticIn', ({ fraction }) => Math.pow(fraction, 2));
function QuadraticInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuadraticInAnimationEase);
}
const QuadraticOutAnimationEase = { name: `${QuadraticAnimationEase.name}Out`, callback: QuadraticAnimationEase.callback };
function QuadraticOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuadraticOutAnimationEase);
}
const QuadraticInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quadraticInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (2 * Math.pow(fraction, 2)) : (1 - (Math.pow(((-2 * fraction) + 2), 2) / 2)));
});
function QuadraticInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuadraticInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quart.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quart.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuartAnimationEase": () => (/* binding */ QuartAnimationEase),
/* harmony export */   "QuartAnimationEaseCompact": () => (/* binding */ QuartAnimationEaseCompact),
/* harmony export */   "QuartInAnimationEase": () => (/* binding */ QuartInAnimationEase),
/* harmony export */   "QuartInAnimationEaseCompact": () => (/* binding */ QuartInAnimationEaseCompact),
/* harmony export */   "QuartInOutAnimationEase": () => (/* binding */ QuartInOutAnimationEase),
/* harmony export */   "QuartInOutAnimationEaseCompact": () => (/* binding */ QuartInOutAnimationEaseCompact),
/* harmony export */   "QuartOutAnimationEase": () => (/* binding */ QuartOutAnimationEase),
/* harmony export */   "QuartOutAnimationEaseCompact": () => (/* binding */ QuartOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const QuartAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quart', ({ fraction }) => (1 - Math.pow((1 - fraction), 4)));
function QuartAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuartAnimationEase);
}
const QuartInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quartIn', ({ fraction }) => Math.pow((1 - fraction), 4));
function QuartInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuartInAnimationEase);
}
const QuartOutAnimationEase = { name: `${QuartAnimationEase.name}Out`, callback: QuartAnimationEase.callback };
function QuartOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuartOutAnimationEase);
}
const QuartInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quartInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (8 * Math.pow(fraction, 4)) : (1 - (Math.pow(((-2 * fraction) + 2), 4) / 2)));
});
function QuartInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuartInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quint.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quint.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuintAnimationEase": () => (/* binding */ QuintAnimationEase),
/* harmony export */   "QuintAnimationEaseCompact": () => (/* binding */ QuintAnimationEaseCompact),
/* harmony export */   "QuintInAnimationEase": () => (/* binding */ QuintInAnimationEase),
/* harmony export */   "QuintInAnimationEaseCompact": () => (/* binding */ QuintInAnimationEaseCompact),
/* harmony export */   "QuintInOutAnimationEase": () => (/* binding */ QuintInOutAnimationEase),
/* harmony export */   "QuintInOutAnimationEaseCompact": () => (/* binding */ QuintInOutAnimationEaseCompact),
/* harmony export */   "QuintOutAnimationEase": () => (/* binding */ QuintOutAnimationEase),
/* harmony export */   "QuintOutAnimationEaseCompact": () => (/* binding */ QuintOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const QuintAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quint', ({ fraction }) => (1 - Math.pow((1 - fraction), 5)));
function QuintAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuintAnimationEase);
}
const QuintInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quintIn', ({ fraction }) => Math.pow((1 - fraction), 5));
function QuintInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuintInAnimationEase);
}
const QuintOutAnimationEase = { name: `${QuintAnimationEase.name}Out`, callback: QuintAnimationEase.callback };
function QuintOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuintOutAnimationEase);
}
const QuintInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('quintInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (16 * Math.pow(fraction, 5)) : (1 - (Math.pow(((-2 * fraction) + 2), 5) / 2)));
});
function QuintInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(QuintInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/sine.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/sine.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SineAnimationEase": () => (/* binding */ SineAnimationEase),
/* harmony export */   "SineAnimationEaseCompact": () => (/* binding */ SineAnimationEaseCompact),
/* harmony export */   "SineInAnimationEase": () => (/* binding */ SineInAnimationEase),
/* harmony export */   "SineInAnimationEaseCompact": () => (/* binding */ SineInAnimationEaseCompact),
/* harmony export */   "SineInOutAnimationEase": () => (/* binding */ SineInOutAnimationEase),
/* harmony export */   "SineInOutAnimationEaseCompact": () => (/* binding */ SineInOutAnimationEaseCompact),
/* harmony export */   "SineOutAnimationEase": () => (/* binding */ SineOutAnimationEase),
/* harmony export */   "SineOutAnimationEaseCompact": () => (/* binding */ SineOutAnimationEaseCompact)
/* harmony export */ });
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");


const SineAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('sine', ({ fraction }) => Math.sin((fraction * Math.PI) / 2));
function SineAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(SineAnimationEase);
}
const SineInAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('sineIn', ({ fraction }) => (1 - Math.cos((fraction * Math.PI) / 2)));
function SineInAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(SineInAnimationEase);
}
const SineOutAnimationEase = { name: `${SineAnimationEase.name}Out`, callback: SineAnimationEase.callback };
function SineOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(SineOutAnimationEase);
}
const SineInOutAnimationEase = (0,_callback__WEBPACK_IMPORTED_MODULE_1__.CreateAnimationEaseCallback)('sineInOut', ({ fraction }) => (-(Math.cos(Math.PI * fraction) - 1) / 2));
function SineInOutAnimationEaseCompact() {
    (0,_add__WEBPACK_IMPORTED_MODULE_0__.AddAnimationEase)(SineInOutAnimationEase);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAnimationActor": () => (/* reexport safe */ _actors_add__WEBPACK_IMPORTED_MODULE_19__.AddAnimationActor),
/* harmony export */   "AddAnimationEase": () => (/* reexport safe */ _easing_add__WEBPACK_IMPORTED_MODULE_2__.AddAnimationEase),
/* harmony export */   "AnimateDirectiveHandler": () => (/* reexport safe */ _directive_animate__WEBPACK_IMPORTED_MODULE_57__.AnimateDirectiveHandler),
/* harmony export */   "AnimateDirectiveHandlerCompact": () => (/* reexport safe */ _directive_animate__WEBPACK_IMPORTED_MODULE_57__.AnimateDirectiveHandlerCompact),
/* harmony export */   "AnimationActorCollection": () => (/* reexport safe */ _collection_actor__WEBPACK_IMPORTED_MODULE_54__.AnimationActorCollection),
/* harmony export */   "AnimationConcept": () => (/* reexport safe */ _concept__WEBPACK_IMPORTED_MODULE_60__.AnimationConcept),
/* harmony export */   "AnimationCreatorCollection": () => (/* reexport safe */ _collection_creator__WEBPACK_IMPORTED_MODULE_55__.AnimationCreatorCollection),
/* harmony export */   "AnimationEaseCollection": () => (/* reexport safe */ _collection_ease__WEBPACK_IMPORTED_MODULE_56__.AnimationEaseCollection),
/* harmony export */   "AnimationMagicHandler": () => (/* reexport safe */ _magic_animation__WEBPACK_IMPORTED_MODULE_59__.AnimationMagicHandler),
/* harmony export */   "AnimationMagicHandlerCompact": () => (/* reexport safe */ _magic_animation__WEBPACK_IMPORTED_MODULE_59__.AnimationMagicHandlerCompact),
/* harmony export */   "ApplyRange": () => (/* reexport safe */ _actors_scene_generic__WEBPACK_IMPORTED_MODULE_33__.ApplyRange),
/* harmony export */   "ApplyRangeAndTransform": () => (/* reexport safe */ _actors_scene_generic__WEBPACK_IMPORTED_MODULE_33__.ApplyRangeAndTransform),
/* harmony export */   "ApplyTransform": () => (/* reexport safe */ _actors_scene_generic__WEBPACK_IMPORTED_MODULE_33__.ApplyTransform),
/* harmony export */   "BackAnimationEase": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackAnimationEase),
/* harmony export */   "BackAnimationEaseCompact": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackAnimationEaseCompact),
/* harmony export */   "BackInAnimationEase": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackInAnimationEase),
/* harmony export */   "BackInAnimationEaseCompact": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackInAnimationEaseCompact),
/* harmony export */   "BackInOutAnimationEase": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackInOutAnimationEase),
/* harmony export */   "BackInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackInOutAnimationEaseCompact),
/* harmony export */   "BackOutAnimationEase": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackOutAnimationEase),
/* harmony export */   "BackOutAnimationEaseCompact": () => (/* reexport safe */ _easing_back__WEBPACK_IMPORTED_MODULE_3__.BackOutAnimationEaseCompact),
/* harmony export */   "BezierAnimationEaseCreator": () => (/* reexport safe */ _creators_bezier__WEBPACK_IMPORTED_MODULE_43__.BezierAnimationEaseCreator),
/* harmony export */   "BounceAnimationEase": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceAnimationEase),
/* harmony export */   "BounceAnimationEaseCompact": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceAnimationEaseCompact),
/* harmony export */   "BounceInAnimationEase": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceInAnimationEase),
/* harmony export */   "BounceInAnimationEaseCompact": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceInAnimationEaseCompact),
/* harmony export */   "BounceInOutAnimationEase": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceInOutAnimationEase),
/* harmony export */   "BounceInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceInOutAnimationEaseCompact),
/* harmony export */   "BounceOutAnimationEase": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceOutAnimationEase),
/* harmony export */   "BounceOutAnimationEaseCompact": () => (/* reexport safe */ _easing_bounce__WEBPACK_IMPORTED_MODULE_5__.BounceOutAnimationEaseCompact),
/* harmony export */   "CallAnimationActor": () => (/* reexport safe */ _actors_call__WEBPACK_IMPORTED_MODULE_20__.CallAnimationActor),
/* harmony export */   "CallAnimationEase": () => (/* reexport safe */ _easing_call__WEBPACK_IMPORTED_MODULE_6__.CallAnimationEase),
/* harmony export */   "CircleAnimationEase": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleAnimationEase),
/* harmony export */   "CircleAnimationEaseCompact": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleAnimationEaseCompact),
/* harmony export */   "CircleInAnimationEase": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleInAnimationEase),
/* harmony export */   "CircleInAnimationEaseCompact": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleInAnimationEaseCompact),
/* harmony export */   "CircleInOutAnimationEase": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleInOutAnimationEase),
/* harmony export */   "CircleInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleInOutAnimationEaseCompact),
/* harmony export */   "CircleOutAnimationEase": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleOutAnimationEase),
/* harmony export */   "CircleOutAnimationEaseCompact": () => (/* reexport safe */ _easing_circle__WEBPACK_IMPORTED_MODULE_8__.CircleOutAnimationEaseCompact),
/* harmony export */   "CreateAnimationActorCallback": () => (/* reexport safe */ _actors_callback__WEBPACK_IMPORTED_MODULE_21__.CreateAnimationActorCallback),
/* harmony export */   "CreateAnimationEaseCallback": () => (/* reexport safe */ _easing_callback__WEBPACK_IMPORTED_MODULE_7__.CreateAnimationEaseCallback),
/* harmony export */   "CreateBezierAnimationEaseCallback": () => (/* reexport safe */ _easing_bezier__WEBPACK_IMPORTED_MODULE_4__.CreateBezierAnimationEaseCallback),
/* harmony export */   "CreateRotateAnimationActor": () => (/* reexport safe */ _actors_rotate_generic__WEBPACK_IMPORTED_MODULE_26__.CreateRotateAnimationActor),
/* harmony export */   "CreateRotateAnimationCallback": () => (/* reexport safe */ _actors_rotate_generic__WEBPACK_IMPORTED_MODULE_26__.CreateRotateAnimationCallback),
/* harmony export */   "CreateScaleAnimationActor": () => (/* reexport safe */ _actors_scale_generic__WEBPACK_IMPORTED_MODULE_29__.CreateScaleAnimationActor),
/* harmony export */   "CreateScaleAnimationCallback": () => (/* reexport safe */ _actors_scale_generic__WEBPACK_IMPORTED_MODULE_29__.CreateScaleAnimationCallback),
/* harmony export */   "CreateSceneAnimationActor": () => (/* reexport safe */ _actors_scene_generic__WEBPACK_IMPORTED_MODULE_33__.CreateSceneAnimationActor),
/* harmony export */   "CreateSceneAnimationCallback": () => (/* reexport safe */ _actors_scene_generic__WEBPACK_IMPORTED_MODULE_33__.CreateSceneAnimationCallback),
/* harmony export */   "CreateTranslateAnimationActor": () => (/* reexport safe */ _actors_translate_generic__WEBPACK_IMPORTED_MODULE_38__.CreateTranslateAnimationActor),
/* harmony export */   "CreateTranslateAnimationCallback": () => (/* reexport safe */ _actors_translate_generic__WEBPACK_IMPORTED_MODULE_38__.CreateTranslateAnimationCallback),
/* harmony export */   "CubicAnimationEase": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicAnimationEase),
/* harmony export */   "CubicAnimationEaseCompact": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicAnimationEaseCompact),
/* harmony export */   "CubicInAnimationEase": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicInAnimationEase),
/* harmony export */   "CubicInAnimationEaseCompact": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicInAnimationEaseCompact),
/* harmony export */   "CubicInOutAnimationEase": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicInOutAnimationEase),
/* harmony export */   "CubicInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicInOutAnimationEaseCompact),
/* harmony export */   "CubicOutAnimationEase": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicOutAnimationEase),
/* harmony export */   "CubicOutAnimationEaseCompact": () => (/* reexport safe */ _easing_cubic__WEBPACK_IMPORTED_MODULE_9__.CubicOutAnimationEaseCompact),
/* harmony export */   "DefaultAnimationActor": () => (/* reexport safe */ _actors_default__WEBPACK_IMPORTED_MODULE_22__.DefaultAnimationActor),
/* harmony export */   "DefaultAnimationActorCompact": () => (/* reexport safe */ _actors_default__WEBPACK_IMPORTED_MODULE_22__.DefaultAnimationActorCompact),
/* harmony export */   "DefaultAnimationEase": () => (/* reexport safe */ _easing_default__WEBPACK_IMPORTED_MODULE_10__.DefaultAnimationEase),
/* harmony export */   "DefaultAnimationEaseCompact": () => (/* reexport safe */ _easing_default__WEBPACK_IMPORTED_MODULE_10__.DefaultAnimationEaseCompact),
/* harmony export */   "DefaultRotateAnimationActorFactor": () => (/* reexport safe */ _actors_rotate_generic__WEBPACK_IMPORTED_MODULE_26__.DefaultRotateAnimationActorFactor),
/* harmony export */   "DefaultRotateAnimationActorUnit": () => (/* reexport safe */ _actors_rotate_generic__WEBPACK_IMPORTED_MODULE_26__.DefaultRotateAnimationActorUnit),
/* harmony export */   "DefaultTranslateAnimationActorFactor": () => (/* reexport safe */ _actors_translate_generic__WEBPACK_IMPORTED_MODULE_38__.DefaultTranslateAnimationActorFactor),
/* harmony export */   "DefaultTranslateAnimationActorUnit": () => (/* reexport safe */ _actors_translate_generic__WEBPACK_IMPORTED_MODULE_38__.DefaultTranslateAnimationActorUnit),
/* harmony export */   "ElasticAnimationEase": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticAnimationEase),
/* harmony export */   "ElasticAnimationEaseCompact": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticAnimationEaseCompact),
/* harmony export */   "ElasticInAnimationEase": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticInAnimationEase),
/* harmony export */   "ElasticInAnimationEaseCompact": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticInAnimationEaseCompact),
/* harmony export */   "ElasticInOutAnimationEase": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticInOutAnimationEase),
/* harmony export */   "ElasticInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticInOutAnimationEaseCompact),
/* harmony export */   "ElasticOutAnimationEase": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticOutAnimationEase),
/* harmony export */   "ElasticOutAnimationEaseCompact": () => (/* reexport safe */ _easing_elastic__WEBPACK_IMPORTED_MODULE_11__.ElasticOutAnimationEaseCompact),
/* harmony export */   "ExponentialAnimationEase": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialAnimationEase),
/* harmony export */   "ExponentialAnimationEaseCompact": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialAnimationEaseCompact),
/* harmony export */   "ExponentialInAnimationEase": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialInAnimationEase),
/* harmony export */   "ExponentialInAnimationEaseCompact": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialInAnimationEaseCompact),
/* harmony export */   "ExponentialInOutAnimationEase": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialInOutAnimationEase),
/* harmony export */   "ExponentialInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialInOutAnimationEaseCompact),
/* harmony export */   "ExponentialOutAnimationEase": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialOutAnimationEase),
/* harmony export */   "ExponentialOutAnimationEaseCompact": () => (/* reexport safe */ _easing_exponential__WEBPACK_IMPORTED_MODULE_12__.ExponentialOutAnimationEaseCompact),
/* harmony export */   "FindTransitionData": () => (/* reexport safe */ _utilities_find_data__WEBPACK_IMPORTED_MODULE_1__.FindTransitionData),
/* harmony export */   "FlipAnimationActor": () => (/* reexport safe */ _actors_rotate_flip__WEBPACK_IMPORTED_MODULE_25__.FlipAnimationActor),
/* harmony export */   "FlipAnimationActorCompact": () => (/* reexport safe */ _actors_rotate_flip__WEBPACK_IMPORTED_MODULE_25__.FlipAnimationActorCompact),
/* harmony export */   "FormatValue": () => (/* reexport safe */ _actors_scene_generic__WEBPACK_IMPORTED_MODULE_33__.FormatValue),
/* harmony export */   "HeartbeatAnimationActor": () => (/* reexport safe */ _actors_scene_heartbeat__WEBPACK_IMPORTED_MODULE_34__.HeartbeatAnimationActor),
/* harmony export */   "HeartbeatAnimationActorCompact": () => (/* reexport safe */ _actors_scene_heartbeat__WEBPACK_IMPORTED_MODULE_34__.HeartbeatAnimationActorCompact),
/* harmony export */   "HeightAnimationActor": () => (/* reexport safe */ _actors_scale_height__WEBPACK_IMPORTED_MODULE_30__.HeightAnimationActor),
/* harmony export */   "HeightAnimationActorCompact": () => (/* reexport safe */ _actors_scale_height__WEBPACK_IMPORTED_MODULE_30__.HeightAnimationActorCompact),
/* harmony export */   "InvertAnimationEase": () => (/* reexport safe */ _easing_invert__WEBPACK_IMPORTED_MODULE_13__.InvertAnimationEase),
/* harmony export */   "JelloAnimationCreator": () => (/* reexport safe */ _creators_jello__WEBPACK_IMPORTED_MODULE_44__.JelloAnimationCreator),
/* harmony export */   "LinearAnimationEase": () => (/* reexport safe */ _easing_linear__WEBPACK_IMPORTED_MODULE_14__.LinearAnimationEase),
/* harmony export */   "LinearAnimationEaseCompact": () => (/* reexport safe */ _easing_linear__WEBPACK_IMPORTED_MODULE_14__.LinearAnimationEaseCompact),
/* harmony export */   "NullAnimationActor": () => (/* reexport safe */ _actors_null__WEBPACK_IMPORTED_MODULE_23__.NullAnimationActor),
/* harmony export */   "NullAnimationActorCompact": () => (/* reexport safe */ _actors_null__WEBPACK_IMPORTED_MODULE_23__.NullAnimationActorCompact),
/* harmony export */   "OpacityAnimationActor": () => (/* reexport safe */ _actors_opacity__WEBPACK_IMPORTED_MODULE_24__.OpacityAnimationActor),
/* harmony export */   "OpacityAnimationActorCompact": () => (/* reexport safe */ _actors_opacity__WEBPACK_IMPORTED_MODULE_24__.OpacityAnimationActorCompact),
/* harmony export */   "PulseAnimationActor": () => (/* reexport safe */ _actors_scene_pulse__WEBPACK_IMPORTED_MODULE_35__.PulseAnimationActor),
/* harmony export */   "PulseAnimationActorCompact": () => (/* reexport safe */ _actors_scene_pulse__WEBPACK_IMPORTED_MODULE_35__.PulseAnimationActorCompact),
/* harmony export */   "QuadraticAnimationEase": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticAnimationEase),
/* harmony export */   "QuadraticAnimationEaseCompact": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticAnimationEaseCompact),
/* harmony export */   "QuadraticInAnimationEase": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticInAnimationEase),
/* harmony export */   "QuadraticInAnimationEaseCompact": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticInAnimationEaseCompact),
/* harmony export */   "QuadraticInOutAnimationEase": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticInOutAnimationEase),
/* harmony export */   "QuadraticInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticInOutAnimationEaseCompact),
/* harmony export */   "QuadraticOutAnimationEase": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticOutAnimationEase),
/* harmony export */   "QuadraticOutAnimationEaseCompact": () => (/* reexport safe */ _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__.QuadraticOutAnimationEaseCompact),
/* harmony export */   "QuartAnimationEase": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartAnimationEase),
/* harmony export */   "QuartAnimationEaseCompact": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartAnimationEaseCompact),
/* harmony export */   "QuartInAnimationEase": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartInAnimationEase),
/* harmony export */   "QuartInAnimationEaseCompact": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartInAnimationEaseCompact),
/* harmony export */   "QuartInOutAnimationEase": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartInOutAnimationEase),
/* harmony export */   "QuartInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartInOutAnimationEaseCompact),
/* harmony export */   "QuartOutAnimationEase": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartOutAnimationEase),
/* harmony export */   "QuartOutAnimationEaseCompact": () => (/* reexport safe */ _easing_quart__WEBPACK_IMPORTED_MODULE_16__.QuartOutAnimationEaseCompact),
/* harmony export */   "QuintAnimationEase": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintAnimationEase),
/* harmony export */   "QuintAnimationEaseCompact": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintAnimationEaseCompact),
/* harmony export */   "QuintInAnimationEase": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintInAnimationEase),
/* harmony export */   "QuintInAnimationEaseCompact": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintInAnimationEaseCompact),
/* harmony export */   "QuintInOutAnimationEase": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintInOutAnimationEase),
/* harmony export */   "QuintInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintInOutAnimationEaseCompact),
/* harmony export */   "QuintOutAnimationEase": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintOutAnimationEase),
/* harmony export */   "QuintOutAnimationEaseCompact": () => (/* reexport safe */ _easing_quint__WEBPACK_IMPORTED_MODULE_17__.QuintOutAnimationEaseCompact),
/* harmony export */   "RotateAnimationCreator": () => (/* reexport safe */ _creators_rotate__WEBPACK_IMPORTED_MODULE_45__.RotateAnimationCreator),
/* harmony export */   "RubberbandAnimationCreator": () => (/* reexport safe */ _creators_rubberband__WEBPACK_IMPORTED_MODULE_46__.RubberbandAnimationCreator),
/* harmony export */   "ScaleAnimationCreator": () => (/* reexport safe */ _creators_scale__WEBPACK_IMPORTED_MODULE_47__.ScaleAnimationCreator),
/* harmony export */   "SceneAnimationCreator": () => (/* reexport safe */ _creators_scene__WEBPACK_IMPORTED_MODULE_48__.SceneAnimationCreator),
/* harmony export */   "ShakeAnimationActor": () => (/* reexport safe */ _actors_scene_shake__WEBPACK_IMPORTED_MODULE_36__.ShakeAnimationActor),
/* harmony export */   "ShakeAnimationActorCompact": () => (/* reexport safe */ _actors_scene_shake__WEBPACK_IMPORTED_MODULE_36__.ShakeAnimationActorCompact),
/* harmony export */   "ShakeAnimationCreator": () => (/* reexport safe */ _creators_shake__WEBPACK_IMPORTED_MODULE_49__.ShakeAnimationCreator),
/* harmony export */   "SineAnimationEase": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineAnimationEase),
/* harmony export */   "SineAnimationEaseCompact": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineAnimationEaseCompact),
/* harmony export */   "SineInAnimationEase": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineInAnimationEase),
/* harmony export */   "SineInAnimationEaseCompact": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineInAnimationEaseCompact),
/* harmony export */   "SineInOutAnimationEase": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineInOutAnimationEase),
/* harmony export */   "SineInOutAnimationEaseCompact": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineInOutAnimationEaseCompact),
/* harmony export */   "SineOutAnimationEase": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineOutAnimationEase),
/* harmony export */   "SineOutAnimationEaseCompact": () => (/* reexport safe */ _easing_sine__WEBPACK_IMPORTED_MODULE_18__.SineOutAnimationEaseCompact),
/* harmony export */   "SlideDownAnimationActor": () => (/* reexport safe */ _actors_translate_slide_down__WEBPACK_IMPORTED_MODULE_39__.SlideDownAnimationActor),
/* harmony export */   "SlideDownAnimationActorCompact": () => (/* reexport safe */ _actors_translate_slide_down__WEBPACK_IMPORTED_MODULE_39__.SlideDownAnimationActorCompact),
/* harmony export */   "SlideLeftAnimationActor": () => (/* reexport safe */ _actors_translate_slide_left__WEBPACK_IMPORTED_MODULE_40__.SlideLeftAnimationActor),
/* harmony export */   "SlideLeftAnimationActorCompact": () => (/* reexport safe */ _actors_translate_slide_left__WEBPACK_IMPORTED_MODULE_40__.SlideLeftAnimationActorCompact),
/* harmony export */   "SlideRightAnimationActor": () => (/* reexport safe */ _actors_translate_slide_right__WEBPACK_IMPORTED_MODULE_41__.SlideRightAnimationActor),
/* harmony export */   "SlideRightAnimationActorCompact": () => (/* reexport safe */ _actors_translate_slide_right__WEBPACK_IMPORTED_MODULE_41__.SlideRightAnimationActorCompact),
/* harmony export */   "SlideUpAnimationActor": () => (/* reexport safe */ _actors_translate_slide_up__WEBPACK_IMPORTED_MODULE_42__.SlideUpAnimationActor),
/* harmony export */   "SlideUpAnimationActorCompact": () => (/* reexport safe */ _actors_translate_slide_up__WEBPACK_IMPORTED_MODULE_42__.SlideUpAnimationActorCompact),
/* harmony export */   "SpinAnimationActor": () => (/* reexport safe */ _actors_rotate_spin__WEBPACK_IMPORTED_MODULE_27__.SpinAnimationActor),
/* harmony export */   "SpinAnimationActorCompact": () => (/* reexport safe */ _actors_rotate_spin__WEBPACK_IMPORTED_MODULE_27__.SpinAnimationActorCompact),
/* harmony export */   "SwingAnimationCreator": () => (/* reexport safe */ _creators_swing__WEBPACK_IMPORTED_MODULE_50__.SwingAnimationCreator),
/* harmony export */   "TadaAnimationCreator": () => (/* reexport safe */ _creators_tada__WEBPACK_IMPORTED_MODULE_51__.TadaAnimationCreator),
/* harmony export */   "TossAnimationActor": () => (/* reexport safe */ _actors_rotate_toss__WEBPACK_IMPORTED_MODULE_28__.TossAnimationActor),
/* harmony export */   "TossAnimationActorCompact": () => (/* reexport safe */ _actors_rotate_toss__WEBPACK_IMPORTED_MODULE_28__.TossAnimationActorCompact),
/* harmony export */   "TransitionDirectiveHandler": () => (/* reexport safe */ _directive_transition__WEBPACK_IMPORTED_MODULE_58__.TransitionDirectiveHandler),
/* harmony export */   "TransitionDirectiveHandlerCompact": () => (/* reexport safe */ _directive_transition__WEBPACK_IMPORTED_MODULE_58__.TransitionDirectiveHandlerCompact),
/* harmony export */   "TranslateAnimationCreator": () => (/* reexport safe */ _creators_translate__WEBPACK_IMPORTED_MODULE_52__.TranslateAnimationCreator),
/* harmony export */   "VibrateAnimationActor": () => (/* reexport safe */ _actors_scene_vibrate__WEBPACK_IMPORTED_MODULE_37__.VibrateAnimationActor),
/* harmony export */   "VibrateAnimationActorCompact": () => (/* reexport safe */ _actors_scene_vibrate__WEBPACK_IMPORTED_MODULE_37__.VibrateAnimationActorCompact),
/* harmony export */   "VibrateAnimationCreator": () => (/* reexport safe */ _creators_vibrate__WEBPACK_IMPORTED_MODULE_53__.VibrateAnimationCreator),
/* harmony export */   "WidthAnimationActor": () => (/* reexport safe */ _actors_scale_width__WEBPACK_IMPORTED_MODULE_31__.WidthAnimationActor),
/* harmony export */   "WidthAnimationActorCompact": () => (/* reexport safe */ _actors_scale_width__WEBPACK_IMPORTED_MODULE_31__.WidthAnimationActorCompact),
/* harmony export */   "ZoomAnimationActor": () => (/* reexport safe */ _actors_scale_zoom__WEBPACK_IMPORTED_MODULE_32__.ZoomAnimationActor),
/* harmony export */   "ZoomAnimationActorCompact": () => (/* reexport safe */ _actors_scale_zoom__WEBPACK_IMPORTED_MODULE_32__.ZoomAnimationActorCompact)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/types.js");
/* harmony import */ var _utilities_find_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/find-data */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/utilities/find-data.js");
/* harmony import */ var _easing_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./easing/add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/add.js");
/* harmony import */ var _easing_back__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing/back */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/back.js");
/* harmony import */ var _easing_bezier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easing/bezier */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/bezier.js");
/* harmony import */ var _easing_bounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./easing/bounce */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/bounce.js");
/* harmony import */ var _easing_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./easing/call */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/call.js");
/* harmony import */ var _easing_callback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./easing/callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/callback.js");
/* harmony import */ var _easing_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./easing/circle */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/circle.js");
/* harmony import */ var _easing_cubic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./easing/cubic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/cubic.js");
/* harmony import */ var _easing_default__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./easing/default */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/default.js");
/* harmony import */ var _easing_elastic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./easing/elastic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/elastic.js");
/* harmony import */ var _easing_exponential__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./easing/exponential */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/exponential.js");
/* harmony import */ var _easing_invert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./easing/invert */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/invert.js");
/* harmony import */ var _easing_linear__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./easing/linear */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/linear.js");
/* harmony import */ var _easing_quadratic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./easing/quadratic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quadratic.js");
/* harmony import */ var _easing_quart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./easing/quart */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quart.js");
/* harmony import */ var _easing_quint__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./easing/quint */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/quint.js");
/* harmony import */ var _easing_sine__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./easing/sine */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/sine.js");
/* harmony import */ var _actors_add__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./actors/add */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/add.js");
/* harmony import */ var _actors_call__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./actors/call */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/call.js");
/* harmony import */ var _actors_callback__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./actors/callback */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/callback.js");
/* harmony import */ var _actors_default__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./actors/default */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/default.js");
/* harmony import */ var _actors_null__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./actors/null */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/null.js");
/* harmony import */ var _actors_opacity__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./actors/opacity */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/opacity.js");
/* harmony import */ var _actors_rotate_flip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./actors/rotate/flip */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/flip.js");
/* harmony import */ var _actors_rotate_generic__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./actors/rotate/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/generic.js");
/* harmony import */ var _actors_rotate_spin__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./actors/rotate/spin */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/spin.js");
/* harmony import */ var _actors_rotate_toss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./actors/rotate/toss */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/rotate/toss.js");
/* harmony import */ var _actors_scale_generic__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./actors/scale/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/generic.js");
/* harmony import */ var _actors_scale_height__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./actors/scale/height */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/height.js");
/* harmony import */ var _actors_scale_width__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./actors/scale/width */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/width.js");
/* harmony import */ var _actors_scale_zoom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./actors/scale/zoom */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scale/zoom.js");
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");
/* harmony import */ var _actors_scene_heartbeat__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./actors/scene/heartbeat */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/heartbeat.js");
/* harmony import */ var _actors_scene_pulse__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./actors/scene/pulse */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/pulse.js");
/* harmony import */ var _actors_scene_shake__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./actors/scene/shake */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/shake.js");
/* harmony import */ var _actors_scene_vibrate__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./actors/scene/vibrate */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/vibrate.js");
/* harmony import */ var _actors_translate_generic__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./actors/translate/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/generic.js");
/* harmony import */ var _actors_translate_slide_down__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./actors/translate/slide-down */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-down.js");
/* harmony import */ var _actors_translate_slide_left__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./actors/translate/slide-left */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-left.js");
/* harmony import */ var _actors_translate_slide_right__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./actors/translate/slide-right */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-right.js");
/* harmony import */ var _actors_translate_slide_up__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./actors/translate/slide-up */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/translate/slide-up.js");
/* harmony import */ var _creators_bezier__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./creators/bezier */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/bezier.js");
/* harmony import */ var _creators_jello__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./creators/jello */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/jello.js");
/* harmony import */ var _creators_rotate__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./creators/rotate */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/rotate.js");
/* harmony import */ var _creators_rubberband__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./creators/rubberband */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/rubberband.js");
/* harmony import */ var _creators_scale__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./creators/scale */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/scale.js");
/* harmony import */ var _creators_scene__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./creators/scene */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/scene.js");
/* harmony import */ var _creators_shake__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./creators/shake */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/shake.js");
/* harmony import */ var _creators_swing__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./creators/swing */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/swing.js");
/* harmony import */ var _creators_tada__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./creators/tada */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/tada.js");
/* harmony import */ var _creators_translate__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./creators/translate */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/translate.js");
/* harmony import */ var _creators_vibrate__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./creators/vibrate */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/creators/vibrate.js");
/* harmony import */ var _collection_actor__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./collection/actor */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/actor.js");
/* harmony import */ var _collection_creator__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./collection/creator */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/creator.js");
/* harmony import */ var _collection_ease__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./collection/ease */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/collection/ease.js");
/* harmony import */ var _directive_animate__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./directive/animate */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/directive/animate.js");
/* harmony import */ var _directive_transition__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./directive/transition */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/directive/transition.js");
/* harmony import */ var _magic_animation__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./magic/animation */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/magic/animation.js");
/* harmony import */ var _concept__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./concept */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/concept.js");































































/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/magic/animation.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/magic/animation.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationMagicHandler": () => (/* binding */ AnimationMagicHandler),
/* harmony export */   "AnimationMagicHandlerCompact": () => (/* binding */ AnimationMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _actors_scene_generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actors/scene/generic */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/actors/scene/generic.js");
/* harmony import */ var _easing_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../easing/call */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/easing/call.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



let NamedAnimationDurations = {
    crawl: 2000,
    slower: 1000,
    slow: 750,
    normal: 500,
    fast: 300,
    faster: 200,
    swift: 100,
};
let NamedAnimationConstants = {
    infinite: -1,
};
function CreateAnimationProxy() {
    let storedConcept = null, getConcept = () => (storedConcept || (storedConcept = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept('animation')));
    let callActor = (actor, params) => ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
    const methods = {
        collect: (...actors) => {
            let validActors = actors.map(actor => { var _a; return ((typeof actor === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(actor) : actor); }).filter(actor => !!actor);
            return (params) => validActors.forEach(actor => callActor(actor, params));
        },
        invert: (ease) => {
            var _a;
            let validEase = ((typeof ease === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(ease) : ease);
            return (_a) => {
                var { fraction } = _a, rest = __rest(_a, ["fraction"]);
                return (validEase ? (1 - (0,_easing_call__WEBPACK_IMPORTED_MODULE_2__.CallAnimationEase)(validEase, Object.assign({ fraction }, rest))) : fraction);
            };
        },
        applySceneRange: _actors_scene_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRange,
        applySceneTransform: _actors_scene_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyTransform,
        applySceneRangeAndTransform: _actors_scene_generic__WEBPACK_IMPORTED_MODULE_1__.ApplyRangeAndTransform,
        formatSceneValue: _actors_scene_generic__WEBPACK_IMPORTED_MODULE_1__.FormatValue,
        setNameDuration: (name, value) => {
            NamedAnimationDurations[name] = value;
        },
        removeNameDuration: (name) => {
            delete NamedAnimationDurations[name];
        },
        setNameConstant: (name, value) => {
            NamedAnimationConstants[name] = value;
        },
        removeNameConstant: (name) => {
            delete NamedAnimationConstants[name];
        },
        getConcept,
    };
    const groups = {
        creators: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetCreatorCollection().Find(prop))); },
        })),
        actors: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(prop))); },
        })),
        eases: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(prop))); },
        })),
        durations: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
            getter: (prop) => (prop && NamedAnimationDurations.hasOwnProperty(prop) && NamedAnimationDurations[prop]),
        })),
        constants: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
            getter: (prop) => (prop && NamedAnimationConstants.hasOwnProperty(prop) && NamedAnimationConstants[prop]),
        })),
    };
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
        getter: (prop) => {
            if (!prop) {
                return;
            }
            if (groups.hasOwnProperty(prop)) {
                return groups[prop];
            }
            if (methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
            let concept = getConcept();
            if (!concept) {
                return;
            }
            let creator = concept.GetCreatorCollection().Find(prop);
            if (creator) {
                return creator;
            }
            let actor = concept.GetActorCollection().Find(prop);
            if (actor) {
                return actor;
            }
            let ease = concept.GetEaseCollection().Find(prop);
            if (ease) {
                return ease;
            }
            if (NamedAnimationDurations.hasOwnProperty(prop)) {
                return NamedAnimationDurations[prop];
            }
            if (NamedAnimationConstants.hasOwnProperty(prop)) {
                return NamedAnimationConstants[prop];
            }
        },
        lookup: [...Object.keys(groups), ...Object.keys(methods)],
    }));
}
const AnimationProxy = CreateAnimationProxy();
const AnimationMagicHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateMagicHandlerCallback)('animation', () => AnimationProxy);
function AnimationMagicHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddMagicHandler)(AnimationMagicHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/types.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/types.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-animation/lib/esm/utilities/find-data.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-animation/lib/esm/utilities/find-data.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindTransitionData": () => (/* binding */ FindTransitionData)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

function FindTransitionData({ componentId, component, contextElement }) {
    var _a, _b;
    let data = (_b = (_a = (component || (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition');
    return ((!data || (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(data)) ? null : data);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/cart.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/cart.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartCollectionConcept": () => (/* binding */ CartCollectionConcept)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/collection.js");



class CartCollectionConcept extends _collection__WEBPACK_IMPORTED_MODULE_2__.CollectionConcept {
    constructor(component, options) {
        super(_names__WEBPACK_IMPORTED_MODULE_1__.CartConceptName, component, options);
        this.offsets_ = {};
        this.offsetHandlers_ = {};
        this.offsetHandlers_['subTotal'] = ({ subTotal }) => subTotal;
        this.offsets_['subTotal'] = 0;
    }
    AddOffset(key, handler, initValue = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().CreateNothing()) {
        this.offsetHandlers_[key] = handler;
        if (!(0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(initValue)) {
            this.offsets_[key] = initValue;
        }
    }
    RemoveOffset(key) {
        delete this.offsetHandlers_[key];
    }
    GetOffset(key) {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.offsets.${key}`);
        if (!this.offsets_.hasOwnProperty(key)) {
            if (key === 'total') {
                return (Object.values(this.offsets_).filter(value => (typeof value === 'number')).reduce((prev, value) => (prev + value), 0) || 0);
            }
            return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().CreateNothing();
        }
        let value = this.offsets_[key];
        return ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsFuture(value) ? value.Get() : value);
    }
    AlertUpdate_() {
        var _a;
        let subTotal = this.items_.reduce((prev, item) => (prev + ((item.entry.price || 0) * item.quantity)), 0), items = this.GetItems_();
        Object.entries(this.offsetHandlers_).forEach(([key, handler]) => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => {
            var _a;
            let value = handler({ subTotal, items });
            if (!(0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsEqual)(this.offsets_[key], value)) {
                this.offsets_[key] = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DeepCopy)(value);
                (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.offsets.${key}`, key, (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
            }
        }, 'InlineJS.CartCollectionConcept.AfterUpdate'));
        if (!this.offsets_.hasOwnProperty('total')) {
            (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.offsets.total`, 'total', (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
        }
        super.AlertUpdate_();
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/collection.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/collection.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionConcept": () => (/* binding */ CollectionConcept)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

const DefaultCollectionOptions = {
    indexName: 'id',
    indexNamePlural: 'ids',
    entryName: 'entry',
};
class CollectionConcept {
    constructor(name_, component_, options) {
        var _a;
        this.name_ = name_;
        this.component_ = component_;
        this.options_ = DefaultCollectionOptions;
        this.queuedTasks_ = null;
        this.items_ = new Array();
        this.itemProxies_ = new Array();
        this.keyedItems_ = {};
        this.id_ = (((_a = this.component_) === null || _a === void 0 ? void 0 : _a.GenerateUniqueId(`${name_}_proxy_`)) || '');
        if (options) {
            Object.entries(options).forEach(([key, value]) => (this.options_[key] = value));
        }
        this.keyedProxy_ = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
            getter: (prop) => {
                if (prop) {
                    return this.GetKeyedItem(prop);
                }
            },
        }));
    }
    GetName() {
        return this.name_;
    }
    SetOptions(options) {
        this.options_ = options;
    }
    SetOption(key, value) {
        this.options_[key] = value;
    }
    GetOptions() {
        return this.options_;
    }
    GetOption(key) {
        return (this.options_.hasOwnProperty(key) ? this.options_[key] : undefined);
    }
    GetKeyedProxy() {
        return this.keyedProxy_;
    }
    GetItems() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.items`);
        return this.GetItems_();
    }
    GetItemProxies() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.items`);
        return this.itemProxies_;
    }
    GetCount() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.items.length`);
        return this.items_.reduce((prev, item) => (prev + item.quantity), 0);
    }
    GetKeyedItem(index) {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.items.${index}`);
        if (index in this.keyedItems_) {
            return this.keyedItems_[index];
        }
        let entryName = (this.options_.entryName || DefaultCollectionOptions.entryName);
        this.keyedItems_[index] = this.CreateItemProxy_(entryName, index, () => this.FindItem_(index));
        return this.keyedItems_[index];
    }
    FindItem(index) {
        let found = this.FindItem_(index);
        return (found ? this.MapToExternalItem_(index, found) : null);
    }
    Import({ list, incremental, alertType }) {
        if (this.queuedTasks_) {
            return this.queuedTasks_.push(() => this.Import({ list, incremental, alertType }));
        }
        this.EnterQueueMode_();
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.WaitPromise)(list, (list) => {
            this.LeaveQueueMode_();
            let updated = new Array();
            list.forEach((info) => {
                this.UpdateItem({ incremental,
                    index: this.ExtractIndex_(info.entry),
                    entry: info.entry,
                    quantity: info.quantity,
                    alertType: 'none',
                    callback: item => updated.push(item),
                });
            });
            if (alertType !== 'none' && alertType !== 'item') {
                window.dispatchEvent(new CustomEvent(`${this.name_}.import`, {
                    detail: { list: updated.map(item => this.MapToExternalItem_(this.ExtractIndex_(item.entry), item)) },
                }));
                this.AlertUpdate_();
            }
        });
    }
    Export() {
        return this.items_.map(item => (Object.assign({}, item)));
    }
    UpdateItem({ index, quantity, entry, incremental, alertType, callback }) {
        var _a;
        if (this.queuedTasks_) {
            return this.queuedTasks_.push(() => this.UpdateItem({ index, quantity, entry, incremental, alertType }));
        }
        let item = this.FindItem_(index);
        if (!item) { //Initialize item
            if (!entry) { //Invalid item
                return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalWarn)('Cannot update an invalid item.', 'InlineJS.CollectionConcept.UpdateItem');
            }
            item = this.InitItem_(entry);
        }
        let count = item.quantity;
        item.quantity = (incremental ? (item.quantity + quantity) : quantity);
        if (item.quantity <= 0) { //Remove item
            let foundIndex = this.FindItemIndex_(index);
            this.items_.splice(foundIndex, 1);
            this.itemProxies_.splice(foundIndex, 1);
        }
        if (item.quantity == count) { //No changes
            return;
        }
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.items.${index}.quantity`, 'quantity', (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
        if (callback) {
            callback(item);
        }
        if (alertType !== 'none') { //Alert item update
            window.dispatchEvent(new CustomEvent(`${this.name_}.item`, {
                detail: { item: this.MapToExternalItem_(index, item) },
            }));
        }
        if (alertType !== 'none' && alertType !== 'item') { //Alert update to list
            this.AlertUpdate_();
        }
    }
    AddItem(entry, quantity) {
        this.UpdateItem({ entry, quantity,
            index: this.ExtractIndex_(entry),
        });
    }
    RemoveItem(index) {
        this.UpdateItem({ index,
            quantity: 0,
            incremental: false,
        });
    }
    RemoveAll() {
        if (this.queuedTasks_) {
            return this.queuedTasks_.push(() => this.RemoveAll());
        }
        this.items_.slice(0).forEach(item => this.UpdateItem({ index: this.ExtractIndex_(item), quantity: 0, incremental: false, alertType: 'none' }));
        window.dispatchEvent(new CustomEvent(`${this.name_}.clear`));
        this.AlertUpdate_();
    }
    EnterQueueMode_() {
        if (!this.queuedTasks_) {
            this.queuedTasks_ = new Array();
        }
    }
    LeaveQueueMode_() {
        if (this.queuedTasks_) {
            this.queuedTasks_.forEach(task => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(task, 'InlineJS.CollectionConcept.QueuedTask'));
            this.queuedTasks_ = null;
        }
    }
    GetItems_() {
        return this.items_.map(item => this.MapToExternalItem_(this.ExtractIndex_(item.entry), item));
    }
    FindItemIndex_(index) {
        let indexName = (this.options_.indexName || DefaultCollectionOptions.indexName);
        return this.items_.findIndex(item => (item.entry.hasOwnProperty(indexName) && item.entry[indexName] === index));
    }
    FindItem_(index) {
        let foundIndex = this.FindItemIndex_(index);
        return ((foundIndex == -1) ? null : this.items_[foundIndex]);
    }
    InitItem_(entry) {
        let entryName = (this.options_.entryName || DefaultCollectionOptions.entryName), index = this.ExtractIndex_(entry), item = { entry,
            quantity: 0,
        };
        this.items_.push(item);
        this.itemProxies_.push(this.CreateItemProxy_(entryName, index, () => item));
        return item;
    }
    CreateItemProxy_(entryName, index, getItem) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildProxyOptions)({
            getter: (prop) => {
                var _a, _b, _c;
                if (prop === 'quantity') {
                    (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.items.${index}.${prop}`);
                    return (((_b = getItem()) === null || _b === void 0 ? void 0 : _b.quantity) || 0);
                }
                if (prop === entryName) {
                    return (((_c = getItem()) === null || _c === void 0 ? void 0 : _c.entry) || {});
                }
            },
            setter: (prop, value) => {
                if (prop === 'quantity') { //Update item quantity
                    let item = getItem();
                    if (item) {
                        this.UpdateItem({ index,
                            quantity: value,
                        });
                    }
                }
                return true;
            },
            lookup: ['quantity', entryName],
        }));
    }
    MapToExternalItem_(index, item) {
        return {
            quantity: item.quantity,
            [this.options_.entryName || DefaultCollectionOptions.entryName]: item.entry,
        };
    }
    ExtractIndex_(item) {
        let indexName = (this.options_.indexName || DefaultCollectionOptions.indexName);
        let entry = item[this.options_.entryName || DefaultCollectionOptions.entryName];
        return (item.hasOwnProperty(indexName) ? item[indexName] : entry[indexName]);
    }
    AlertUpdate_() {
        var _a;
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.items.length`, 'length', (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
        window.dispatchEvent(new CustomEvent(`${this.name_}.update`));
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/favorites.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/favorites.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesCollectionConcept": () => (/* binding */ FavoritesCollectionConcept)
/* harmony export */ });
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/collection.js");


class FavoritesCollectionConcept extends _collection__WEBPACK_IMPORTED_MODULE_1__.CollectionConcept {
    constructor(component, options) {
        super(_names__WEBPACK_IMPORTED_MODULE_0__.FavoritesConceptName, component, options);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/cart.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/cart.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartDirectiveHandler": () => (/* binding */ CartDirectiveHandler),
/* harmony export */   "CartDirectiveHandlerCompact": () => (/* binding */ CartDirectiveHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/collection.js");



const CartDirectiveHandler = (0,_collection__WEBPACK_IMPORTED_MODULE_2__.CreateCollectionDirectiveHandler)(_names__WEBPACK_IMPORTED_MODULE_1__.CartConceptName);
function CartDirectiveHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(CartDirectiveHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/collection.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/collection.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCollectionDirectiveHandler": () => (/* binding */ CreateCollectionDirectiveHandler)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

function CreateCollectionDirectiveHandler(name) {
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)(name, ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BindEvent)({ contextElement, expression,
            component: (component || componentId),
            key: name,
            event: argKey,
            defaultEvent: 'update',
            eventWhitelist: ['item', 'import', 'clear'],
            options: [...argOptions, 'window'],
            optionBlacklist: ['document', 'outside'],
        });
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/favorites.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/favorites.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesDirectiveHandler": () => (/* binding */ FavoritesDirectiveHandler),
/* harmony export */   "FavoritesDirectiveHandlerCompact": () => (/* binding */ FavoritesDirectiveHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/collection.js");



const FavoritesDirectiveHandler = (0,_collection__WEBPACK_IMPORTED_MODULE_2__.CreateCollectionDirectiveHandler)(_names__WEBPACK_IMPORTED_MODULE_1__.FavoritesConceptName);
function FavoritesDirectiveHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(FavoritesDirectiveHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildCollectionMethods": () => (/* reexport safe */ _magic_collection__WEBPACK_IMPORTED_MODULE_8__.BuildCollectionMethods),
/* harmony export */   "CartCollectionConcept": () => (/* reexport safe */ _concept_cart__WEBPACK_IMPORTED_MODULE_3__.CartCollectionConcept),
/* harmony export */   "CartConceptName": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.CartConceptName),
/* harmony export */   "CartDirectiveHandler": () => (/* reexport safe */ _directive_cart__WEBPACK_IMPORTED_MODULE_6__.CartDirectiveHandler),
/* harmony export */   "CartDirectiveHandlerCompact": () => (/* reexport safe */ _directive_cart__WEBPACK_IMPORTED_MODULE_6__.CartDirectiveHandlerCompact),
/* harmony export */   "CartMagicHandler": () => (/* reexport safe */ _magic_cart__WEBPACK_IMPORTED_MODULE_9__.CartMagicHandler),
/* harmony export */   "CartMagicHandlerCompact": () => (/* reexport safe */ _magic_cart__WEBPACK_IMPORTED_MODULE_9__.CartMagicHandlerCompact),
/* harmony export */   "CollectionConcept": () => (/* reexport safe */ _concept_collection__WEBPACK_IMPORTED_MODULE_2__.CollectionConcept),
/* harmony export */   "CreateCollectionDirectiveHandler": () => (/* reexport safe */ _directive_collection__WEBPACK_IMPORTED_MODULE_5__.CreateCollectionDirectiveHandler),
/* harmony export */   "FavoritesCollectionConcept": () => (/* reexport safe */ _concept_favorites__WEBPACK_IMPORTED_MODULE_4__.FavoritesCollectionConcept),
/* harmony export */   "FavoritesConceptName": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.FavoritesConceptName),
/* harmony export */   "FavoritesDirectiveHandler": () => (/* reexport safe */ _directive_favorites__WEBPACK_IMPORTED_MODULE_7__.FavoritesDirectiveHandler),
/* harmony export */   "FavoritesDirectiveHandlerCompact": () => (/* reexport safe */ _directive_favorites__WEBPACK_IMPORTED_MODULE_7__.FavoritesDirectiveHandlerCompact),
/* harmony export */   "FavoritesMagicHandler": () => (/* reexport safe */ _magic_favorites__WEBPACK_IMPORTED_MODULE_10__.FavoritesMagicHandler),
/* harmony export */   "FavoritesMagicHandlerCompact": () => (/* reexport safe */ _magic_favorites__WEBPACK_IMPORTED_MODULE_10__.FavoritesMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/types.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./names */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js");
/* harmony import */ var _concept_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concept/collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/collection.js");
/* harmony import */ var _concept_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./concept/cart */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/cart.js");
/* harmony import */ var _concept_favorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concept/favorites */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/concept/favorites.js");
/* harmony import */ var _directive_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/collection.js");
/* harmony import */ var _directive_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/cart */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/cart.js");
/* harmony import */ var _directive_favorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/favorites */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/directive/favorites.js");
/* harmony import */ var _magic_collection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./magic/collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/collection.js");
/* harmony import */ var _magic_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./magic/cart */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/cart.js");
/* harmony import */ var _magic_favorites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./magic/favorites */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/favorites.js");













/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/cart.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/cart.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartMagicHandler": () => (/* binding */ CartMagicHandler),
/* harmony export */   "CartMagicHandlerCompact": () => (/* binding */ CartMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/collection.js");



function CreateCartProxy() {
    const getCollectionConcept = () => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.CartConceptName);
    let methods = Object.assign(Object.assign({}, (0,_collection__WEBPACK_IMPORTED_MODULE_2__.BuildCollectionMethods)(_names__WEBPACK_IMPORTED_MODULE_1__.CartConceptName)), { addOffset: (key, handler, initValue) => {
            var _a;
            (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.AddOffset(key, handler, initValue);
        }, removeOffset: (key) => {
            var _a;
            (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.RemoveOffset(key);
        }, getOffset: (key) => {
            var _a;
            return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetOffset(key);
        } });
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
        getter: (prop) => {
            var _a, _b, _c, _d;
            if (prop && methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
            if (prop === 'keyed') {
                return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetKeyedProxy();
            }
            if (prop === 'items') {
                return (_b = getCollectionConcept()) === null || _b === void 0 ? void 0 : _b.GetItemProxies();
            }
            if (prop === 'count') {
                return (_c = getCollectionConcept()) === null || _c === void 0 ? void 0 : _c.GetCount();
            }
            if (prop) {
                return (_d = getCollectionConcept()) === null || _d === void 0 ? void 0 : _d.GetOffset(prop);
            }
        },
        lookup: [...Object.keys(methods), 'keyed', 'items', 'count', 'subTotal', 'total'],
    }));
}
const CartProxy = CreateCartProxy();
const CartMagicHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateMagicHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.CartConceptName, () => CartProxy);
function CartMagicHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddMagicHandler)(CartMagicHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/collection.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/collection.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildCollectionMethods": () => (/* binding */ BuildCollectionMethods)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

function BuildCollectionMethods(name) {
    const getCollectionConcept = () => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(name);
    return {
        setOptions: (options) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.SetOptions(options); },
        setOption: (key, value) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.SetOption(key, value); },
        getOptions: () => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetOptions(); },
        getOption: (key) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetOption(key); },
        getItems: () => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetItems(); },
        getCount: () => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetCount(); },
        getKeyedItem: (index) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetKeyedItem(index); },
        findItem: (index) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.FindItem(index); },
        import: (params) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.Import(params); },
        export: () => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.Export(); },
        updateItem: (params) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.UpdateItem(params); },
        addItem: (entry, quantity) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.AddItem(entry, quantity); },
        removeItem: (index) => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.RemoveItem(index); },
        removeAll: () => { var _a; return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.RemoveAll(); },
    };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/favorites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/favorites.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesMagicHandler": () => (/* binding */ FavoritesMagicHandler),
/* harmony export */   "FavoritesMagicHandlerCompact": () => (/* binding */ FavoritesMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/magic/collection.js");



function CreateFavoritesProxy() {
    let methods = (0,_collection__WEBPACK_IMPORTED_MODULE_2__.BuildCollectionMethods)(_names__WEBPACK_IMPORTED_MODULE_1__.FavoritesConceptName);
    const getCollectionConcept = () => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.FavoritesConceptName);
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
        getter: (prop) => {
            var _a, _b, _c;
            if (prop && methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
            if (prop === 'keyed') {
                return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetKeyedProxy();
            }
            if (prop === 'items') {
                return (_b = getCollectionConcept()) === null || _b === void 0 ? void 0 : _b.GetItemProxies();
            }
            if (prop === 'count') {
                return (_c = getCollectionConcept()) === null || _c === void 0 ? void 0 : _c.GetCount();
            }
        },
        lookup: [...Object.keys(methods), 'keyed', 'items', 'count'],
    }));
}
const FavoritesProxy = CreateFavoritesProxy();
const FavoritesMagicHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateMagicHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.FavoritesConceptName, () => FavoritesProxy);
function FavoritesMagicHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddMagicHandler)(FavoritesMagicHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/names.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartConceptName": () => (/* binding */ CartConceptName),
/* harmony export */   "FavoritesConceptName": () => (/* binding */ FavoritesConceptName)
/* harmony export */ });
const CartConceptName = 'cart';
const FavoritesConceptName = 'favorites';


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-collections/lib/esm/types.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-collections/lib/esm/types.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-moment/lib/esm/concept.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-moment/lib/esm/concept.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentConcept": () => (/* binding */ MomentConcept)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

class MomentConcept {
    constructor() {
        this.checkpoints_ = [
            { value: (365 * 24 * 60 * 60), label: 'year' },
            { value: (30 * 24 * 60 * 60), label: 'month' },
            { value: (7 * 24 * 60 * 60), label: 'week' },
            { value: (24 * 60 * 60), label: 'day', next: (7 * 24 * 60 * 60) },
            { value: (60 * 60), label: 'hour', next: (24 * 60 * 60) },
            { value: 60, label: 'minute', next: (60 * 60) },
            { value: 45, label: '45 seconds', next: 60 },
            { value: 30, label: '30 seconds', next: 45 },
            { value: 15, label: '15 seconds', next: 30 },
            { value: 10, label: '10 seconds', next: 15 },
            { value: 5, label: '5 seconds', next: 10 },
            { value: 2, label: 'few seconds', next: 5 },
            { value: 0, ago: 'just now', until: 'right now', next: 1, append: false },
        ];
    }
    Format(_a) {
        var { date, until, thin } = _a, rest = __rest(_a, ["date", "until", "thin"]);
        let now = Date.now(), then = date.getTime();
        if (then < now || (then == now && !until)) { //Ago
            return [...this.Format_(Object.assign(Object.assign({}, rest), { seconds: Math.floor((now - then) / 1000), computeNext: ({ seconds, checkpoint }) => {
                        return (checkpoint.next ? ((checkpoint.value < 60) ? (checkpoint.value - seconds) : (checkpoint.value - (seconds % checkpoint.value))) : 0);
                    }, computeLabel: (_a) => {
                        var { checkpoint } = _a, rest = __rest(_a, ["checkpoint"]);
                        return this.ComputeLabel_(Object.assign(Object.assign({}, rest), { label: (checkpoint.ago || checkpoint.label || ''), suffix: ((thin || checkpoint.append === false) ? '' : ' ago') }));
                    } })), false];
        }
        return [...this.Format_(Object.assign(Object.assign({}, rest), { seconds: Math.floor((then - now) / 1000), computeNext: ({ seconds, checkpoint }) => {
                    return (seconds - checkpoint.value);
                }, computeLabel: (_a) => {
                    var { checkpoint } = _a, rest = __rest(_a, ["checkpoint"]);
                    return this.ComputeLabel_(Object.assign(Object.assign({}, rest), { label: (checkpoint.until || checkpoint.label || ''), suffix: ((thin || checkpoint.append === false) ? '' : ' until') }));
                } })), true];
    }
    Track(_a) {
        var { handler, until, startImmediately } = _a, rest = __rest(_a, ["handler", "until", "startImmediately"]);
        let stopped = false, checkpoint = 0, lastLabel = '', label = '', next = 0, callHandler = () => {
            let myCheckpoint = ++checkpoint;
            requestAnimationFrame(() => (stopped = (stopped || (myCheckpoint == checkpoint && (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => handler(lastLabel = label)) === false))));
        };
        let pass = () => {
            if (!stopped) {
                [label, next, until] = this.Format(Object.assign(Object.assign({}, rest), { until }));
                setTimeout(pass, (next * 1000));
                if (label !== lastLabel) {
                    callHandler();
                }
            }
        };
        let start = () => {
            lastLabel = '';
            pass();
        };
        if (startImmediately !== false) {
            start();
        }
        return {
            stop: () => {
                stopped = true;
                ++checkpoint;
            },
            resume: () => {
                if (stopped) {
                    stopped = false;
                    start();
                }
            },
            stopped: () => stopped,
        };
    }
    Format_(_a) {
        var { seconds, computeNext, computeLabel } = _a, rest = __rest(_a, ["seconds", "computeNext", "computeLabel"]);
        let checkpointIndex = this.checkpoints_.findIndex(checkpoint => (checkpoint.value < seconds));
        if (checkpointIndex == -1) {
            return ['', 0];
        }
        let checkpoint = this.checkpoints_[checkpointIndex], count = ((checkpoint.value < 60) ? 0 : Math.floor(seconds / checkpoint.value));
        return [computeLabel(Object.assign({ checkpoint, count }, rest)), computeNext({ seconds, checkpointIndex, checkpoint })];
    }
    ComputeLabel_({ label, count, short, ucfirst, capitalize, prefix, suffix }) {
        let resolvedLabel, transformString = (str) => {
            if (!ucfirst && !capitalize) {
                return str;
            }
            let parts = str.split(' ');
            if (capitalize) {
                return parts.map(part => (part.substring(0, 1).toUpperCase() + part.substring(1))).join(' ');
            }
            let wordIndex = parts.findIndex(part => /[a-zA-Z]/.test(part.substring(0, 1))); //Find first word index
            return parts.map((part, index) => ((index == wordIndex) ? (part.substring(0, 1).toUpperCase() + part.substring(1)) : part)).join(' ');
        };
        if (short) {
            if (label === 'just now' || label === 'right now') {
                resolvedLabel = ((ucfirst || capitalize) ? '0S' : '0s');
            }
            else if (label === 'few seconds') {
                resolvedLabel = ((ucfirst || capitalize) ? '2S' : '2s');
            }
            else if (count == 0) {
                resolvedLabel = transformString(label.split(' ').reduce((prev, part) => (prev ? `${prev}${part.substring(0, 1)}` : part), ''));
            }
            else {
                resolvedLabel = transformString(`${count}${label.substring(0, 1)}`);
            }
        }
        else {
            resolvedLabel = transformString(count ? `${count} ${label}${(count == 1) ? '' : 's'}` : label);
            resolvedLabel = `${prefix || ''}${resolvedLabel}${suffix || ''}`;
        }
        return resolvedLabel;
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-moment/lib/esm/directive/moment.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-moment/lib/esm/directive/moment.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentDirectiveHandler": () => (/* binding */ MomentDirectiveHandler),
/* harmony export */   "MomentDirectiveHandlerCompact": () => (/* binding */ MomentDirectiveHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/names.js");


const MomentDirectiveHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName, ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
    if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BindEvent)({ contextElement, expression,
        component: (component || componentId),
        key: _names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName,
        event: argKey,
        defaultEvent: 'update',
        options: argOptions,
        optionBlacklist: ['window', 'document', 'outside'],
    })) {
        return;
    }
    let concept = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName), localKey = `$${_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName}`;
    if (!concept) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Moment concept is not installed.', `InlineJS.${_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName}`, contextElement);
    }
    let resolvedComponent = (component || (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)), elementScope = resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.FindElementScope(contextElement);
    if (!resolvedComponent || !elementScope) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Failed to retrieve element scope.', `InlineJS.${_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName}`, contextElement);
    }
    if (elementScope.HasLocal(localKey)) { //Already initialized
        return;
    }
    let id = resolvedComponent.GenerateUniqueId(`${_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName}_proxy_`), info = null, savedLabel = '', options = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ResolveOptions)({
        options: {
            thin: false,
            short: false,
            ucfirst: false,
            capitalize: false,
            stopped: false,
        },
        list: argOptions,
    });
    let valid = false, evaluate = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression }), stopCurrent = () => ((info === null || info === void 0 ? void 0 : info.stop()) || (info = null));
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.UseEffect)({ componentId, contextElement,
        callback: () => evaluate((value) => {
            var _a, _b, _c;
            let date = null;
            if (typeof value === 'string' || typeof value === 'number' || value instanceof Date) {
                date = new Date(value);
            }
            else if (value instanceof HTMLTimeElement) {
                date = new Date(value.dateTime);
            }
            stopCurrent();
            if (date) { //Valid date specified
                info = ((_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName)) === null || _a === void 0 ? void 0 : _a.Track(Object.assign(Object.assign({ date }, options), { startImmediately: !options.stopped, handler: (label) => {
                        var _a;
                        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${id}.label`, 'label', (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
                        savedLabel = label;
                        contextElement.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName}.update`, { detail: { label } }));
                    } }))) || null;
                if (info && !valid) {
                    valid = true;
                    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${id}.valid`, 'valid', (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _b === void 0 ? void 0 : _b.GetBackend().changes);
                }
            }
            else if (valid) {
                valid = false;
                (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${id}.valid`, 'valid', (_c = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _c === void 0 ? void 0 : _c.GetBackend().changes);
            }
        }),
    });
    elementScope.SetLocal(localKey, (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildProxyOptions)({
        getter: (prop) => {
            var _a, _b, _c;
            if (prop === 'valid') {
                (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${id}.${prop}`);
                return valid;
            }
            if (prop === 'label') {
                (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _b === void 0 ? void 0 : _b.GetBackend().changes.AddGetAccess(`${id}.${prop}`);
                return savedLabel;
            }
            if (prop === 'stopped') {
                (_c = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _c === void 0 ? void 0 : _c.GetBackend().changes.AddGetAccess(`${id}.${prop}`);
                return (info ? info.stopped() : true);
            }
        },
        setter: (prop, value) => {
            var _a;
            if (prop === 'stopped' && info) {
                if (!!value != !!info.stopped()) {
                    value ? info === null || info === void 0 ? void 0 : info.stop() : info === null || info === void 0 ? void 0 : info.resume();
                    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${id}.${prop}`, prop, (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
                }
            }
            return true;
        },
        lookup: ['valid', 'label', 'stopped'],
    })));
    elementScope.AddUninitCallback(stopCurrent);
});
function MomentDirectiveHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(MomentDirectiveHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-moment/lib/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-moment/lib/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentConcept": () => (/* reexport safe */ _concept__WEBPACK_IMPORTED_MODULE_2__.MomentConcept),
/* harmony export */   "MomentConceptName": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName),
/* harmony export */   "MomentDirectiveHandler": () => (/* reexport safe */ _directive_moment__WEBPACK_IMPORTED_MODULE_3__.MomentDirectiveHandler),
/* harmony export */   "MomentDirectiveHandlerCompact": () => (/* reexport safe */ _directive_moment__WEBPACK_IMPORTED_MODULE_3__.MomentDirectiveHandlerCompact),
/* harmony export */   "MomentMagicHandler": () => (/* reexport safe */ _magic_moment__WEBPACK_IMPORTED_MODULE_4__.MomentMagicHandler),
/* harmony export */   "MomentMagicHandlerCompact": () => (/* reexport safe */ _magic_moment__WEBPACK_IMPORTED_MODULE_4__.MomentMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/types.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./names */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/names.js");
/* harmony import */ var _concept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concept */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/concept.js");
/* harmony import */ var _directive_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/moment */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/directive/moment.js");
/* harmony import */ var _magic_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./magic/moment */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/magic/moment.js");







/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-moment/lib/esm/magic/moment.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-moment/lib/esm/magic/moment.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentMagicHandler": () => (/* binding */ MomentMagicHandler),
/* harmony export */   "MomentMagicHandlerCompact": () => (/* binding */ MomentMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/names.js");


function CreateMomentProxy() {
    let methods = {
        format: (params) => { var _a; return (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName)) === null || _a === void 0 ? void 0 : _a.Format(params); },
        track: (params) => { var _a; return (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName)) === null || _a === void 0 ? void 0 : _a.Track(params); },
    };
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateReadonlyProxy)(methods);
}
const MomentProxy = CreateMomentProxy();
const MomentMagicHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateMagicHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.MomentConceptName, () => MomentProxy);
function MomentMagicHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddMagicHandler)(MomentMagicHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-moment/lib/esm/names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-moment/lib/esm/names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentConceptName": () => (/* binding */ MomentConceptName)
/* harmony export */ });
const MomentConceptName = 'moment';


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-moment/lib/esm/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-moment/lib/esm/types.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/concept.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/concept.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterConcept": () => (/* binding */ RouterConcept)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");
/* harmony import */ var _utilities_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/path */ "./node_modules/@benbraide/inlinejs-router/lib/esm/utilities/path.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



class RouterConcept {
    constructor(prefix_ = '', origin_ = '') {
        this.prefix_ = prefix_;
        this.origin_ = origin_;
        this.markers_ = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetDefaultUniqueMarkers)();
        this.checkpoint_ = 0;
        this.active_ = false;
        this.middlewares_ = {};
        this.fetchers_ = new Array();
        this.protocolHandlers_ = new Array();
        this.dataHandlers_ = new Array();
        this.pathChangeHandlers_ = new Array();
        this.pages_ = {};
        this.mountPath_ = null;
        this.current_ = {
            path: '',
            page: null,
            initialData: null,
            data: null,
        };
        this.origin_ = (this.origin_ || window.location.origin);
        if (this.origin_) { //Remove trailing slashes
            this.origin_ = this.origin_.replace(/\/+$/, '');
        }
        this.onEvent_ = e => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => this.Load_((e.state || this.mountPath_ || ''), false), 'InlineJS.RouterConcept.PopStateEvent');
    }
    GetOrigin() {
        return this.origin_;
    }
    SetPrefix(prefix) {
        this.prefix_ = prefix;
    }
    GetPrefix() {
        return this.prefix_;
    }
    AddMiddleware(middleware) {
        this.middlewares_[middleware.GetName()] = middleware;
    }
    RemoveMiddleware(middleware) {
        let name = ((typeof middleware === 'string') ? middleware : middleware.GetName());
        if (this.middlewares_.hasOwnProperty(name)) {
            delete this.middlewares_[name];
        }
    }
    AddFetcher(fetcher) {
        this.fetchers_.push({ fetcher, optimized: ((0,_utilities_path__WEBPACK_IMPORTED_MODULE_2__.ProcessPathPlaceholders)(fetcher.GetPath()) || undefined) });
    }
    FindFetcher(path) {
        path = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.PathToRelative)(path, this.origin_);
        let parts = path.split('/').filter(part => !!part), params = {}, info = this.fetchers_.find(info => (0,_utilities_path__WEBPACK_IMPORTED_MODULE_2__.MatchPath)(path, info, params, parts));
        return (info ? { fetcher: info.fetcher, params } : null);
    }
    RemoveFetcher(fetcher) {
        this.fetchers_ = this.fetchers_.filter(info => (info.fetcher !== fetcher));
    }
    AddProtocolHandler(protocol, handler) {
        this.protocolHandlers_.push({ protocol, handler });
    }
    RemoveProtocolHandler(handler) {
        this.protocolHandlers_ = this.protocolHandlers_.filter(info => (info.handler !== handler));
    }
    AddDataHandler(handler) {
        this.dataHandlers_.push(handler);
    }
    RemoveDataHandler(handler) {
        this.dataHandlers_ = this.dataHandlers_.filter(h => (h !== handler));
    }
    AddPathChangeHandler(handler) {
        this.pathChangeHandlers_.push(handler);
    }
    RemovePathChangeHandler(handler) {
        this.pathChangeHandlers_ = this.pathChangeHandlers_.filter(h => (h !== handler));
    }
    AddPage(_a) {
        var { path } = _a, rest = __rest(_a, ["path"]);
        let id = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GenerateUniqueId)(this.markers_, 'router', 'page_');
        this.pages_[id] = Object.assign(Object.assign({}, rest), { id, path: ((typeof path === 'string') ? (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.PathToRelative)(path, this.origin_) : path) });
        return id;
    }
    RemovePage(page) {
        let found = this.FindPage(page);
        return (found ? Object.assign({}, found) : null);
    }
    FindPage(page) {
        if (typeof page === 'string') {
            return (this.pages_.hasOwnProperty(page) ? this.pages_[page] : null);
        }
        return (Object.values(this.pages_).find(p => (p.name === page.name)) || null);
    }
    FindMatchingPage(path) {
        return (Object.values(this.pages_).find(p => ((typeof p.path === 'string') ? (p.path === path) : p.path.test(path))) || null);
    }
    Mount(load) {
        window.addEventListener('popstate', this.onEvent_);
        let path = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.PathToRelative)(window.location.href, this.origin_), split = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.SplitPath)(path);
        if (!load) {
            this.current_.path = path;
            this.current_.page = this.FindMatchingPage(split.base);
            this.pathChangeHandlers_.forEach(handler => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => handler(path), 'InlineJS.RouterConcept.Mount'));
        }
        else {
            this.Load_(split, false);
        }
        this.mountPath_ = split;
    }
    Goto(path, shouldReload, data) {
        let resolvedPath = null;
        if (typeof path !== 'string') {
            if ('name' in path) {
                let page = this.FindPage(path);
                if (page && typeof page.path === 'string') {
                    resolvedPath = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.SplitPath)(page.path, this.origin_);
                }
            }
            else { //Split path
                resolvedPath = {
                    base: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.PathToRelative)(path.base, this.origin_),
                    query: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.TidyPath)(path.query),
                };
            }
        }
        else { //Url provided
            resolvedPath = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.SplitPath)(path, this.origin_);
        }
        if (resolvedPath) { //Valid path
            this.Load_(resolvedPath, true, shouldReload, data);
        }
    }
    Reload() {
        this.Goto(this.current_.path, true);
    }
    GetCurrentPath() {
        return this.current_.path;
    }
    GetActivePage() {
        return this.current_.page;
    }
    GetActivePageData(key) {
        if (key) {
            return (((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(this.current_.data) && this.current_.data.hasOwnProperty(key)) ? this.current_.data[key] : null);
        }
        return this.current_.data;
    }
    FindProtocolHandler_(protocol) {
        let info = this.protocolHandlers_.find(info => ((typeof info.protocol === 'string') ? (info.protocol === protocol) : info.protocol.test(protocol)));
        return (info ? info.handler : null);
    }
    Load_(path, pushHistory, shouldReload, data) {
        let protocolMatch = path.base.match(/^([a-zA-Z0-9_]+):\/\//), protocolHandler = (protocolMatch ? this.FindProtocolHandler_(protocolMatch[1]) : null);
        if (protocolHandler) { //Truncate protocol
            path.base = path.base.substring(protocolMatch[1].length + 2);
        }
        let joined = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JoinPath)(path), protocolHandlerResponse = (protocolHandler ? protocolHandler({ protocol: protocolMatch[1], path: joined }) : null);
        if (protocolHandlerResponse === true) {
            return; //Protocol handled
        }
        let samePath = (this.current_.path === joined);
        if (samePath && !shouldReload && (!(0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(protocolHandlerResponse) || !protocolHandlerResponse.shouldReload)) {
            window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.reload`, { detail: { path: Object.assign({}, path), url: joined } }));
            return;
        }
        let page = null;
        if (!protocolHandlerResponse) {
            page = this.FindMatchingPage(path.base);
            if (!page) { //Not found
                this.current_.path = joined;
                if (!samePath) {
                    this.pathChangeHandlers_.forEach(handler => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => handler(joined), 'InlineJS.RouterConcept.Load'));
                    window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.path`, { detail: { path: Object.assign({}, path) } }));
                }
                return window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.404`, { detail: { path: (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JoinPath)(path) } }));
            }
            if (data) {
                this.current_.initialData = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DeepCopy)(data);
                this.current_.data = data;
            }
            else if (samePath) { //Use initial if any
                this.current_.data = ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.DeepCopy)(this.current_.initialData) || data);
            }
            else { //Reset
                this.current_.initialData = this.current_.data = null;
            }
            if (!samePath) {
                this.pathChangeHandlers_.forEach(handler => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => handler(joined), 'InlineJS.RouterConcept.Load'));
            }
        }
        this.SetActiveState_(true);
        window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.entered`, { detail: { page: Object.assign({}, page) } }));
        let doLoad = () => this.DoLoad_(checkpoint, page, path, joined, pushHistory, (protocolHandlerResponse ? protocolHandlerResponse : undefined));
        let checkpoint = ++this.checkpoint_, checkMiddlewares = () => __awaiter(this, void 0, void 0, function* () {
            for (let middleware of ((typeof page.middleware === 'string') ? [page.middleware] : page.middleware)) {
                if (checkpoint != this.checkpoint_ || (this.middlewares_.hasOwnProperty(middleware) && !(yield this.middlewares_[middleware].Handle(joined)))) {
                    if (checkpoint == this.checkpoint_) { //Blocked
                        this.SetActiveState_(false);
                    }
                    return; //Invalid checkpoint OR blocked by middleware
                }
            }
            doLoad();
        });
        if (!protocolHandlerResponse && page.middleware) {
            checkMiddlewares();
        }
        else { //No middlewares to check
            doLoad();
        }
    }
    DoLoad_(checkpoint, page, path, joined, pushHistory, dataHandler) {
        var _a, _b;
        if (checkpoint != this.checkpoint_) {
            return;
        }
        if (!dataHandler) {
            if (page.id !== ((_a = this.current_.page) === null || _a === void 0 ? void 0 : _a.id)) { //New page
                document.title = (page.title || 'Untitled');
                this.current_.page = page;
                this.current_.path = joined;
                window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.page`, { detail: { page: Object.assign({}, page) } }));
                window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.path`, { detail: { path: Object.assign({}, path) } }));
            }
            else if (this.current_.path !== joined) {
                this.current_.path = joined;
                window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.path`, { detail: { path: Object.assign({}, path) } }));
            }
            if (pushHistory) {
                window.history.pushState(path, (page.title || 'Untitled'), joined);
            }
        }
        let url = (typeof dataHandler === 'function') ? joined : ((dataHandler === null || dataHandler === void 0 ? void 0 : dataHandler.path) || joined);
        let fetcherInfo = this.FindFetcher(url), handleData = (data) => {
            if (checkpoint == this.checkpoint_) {
                if (!dataHandler) {
                    this.dataHandlers_.slice(0).forEach(handle => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => handle({ data, path, url: joined })), `InlineJS.RouterConcept.HandleData`);
                    window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.load`));
                }
                else if (typeof dataHandler === 'function') { //Pass to handler
                    dataHandler(data, path);
                }
                else { //Pass to handler
                    dataHandler.dataHandler(data, path);
                }
            }
            this.SetActiveState_(false);
        };
        let handleError = (err) => {
            window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.error`, { detail: { path } }));
            this.SetActiveState_(false);
            (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)(err, 'InlineJS.RouterConcept.Fetch');
        };
        if (!fetcherInfo) { //Network fetch
            url = (this.prefix_ ? (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.PathToRelative)(url, this.origin_, this.prefix_) : url);
            if (dataHandler || !page.cache || !(0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.ResourceConceptName)) {
                (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetFetchConcept().Get(url, {
                    method: 'GET',
                    credentials: 'same-origin',
                }).then(res => res.text()).then(handleData).catch(handleError);
            }
            else { //Use resource
                (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.ResourceConceptName)) === null || _b === void 0 ? void 0 : _b.GetData(url, true, false).then(handleData).catch(handleError);
            }
        }
        else { //Localized fetch
            fetcherInfo.fetcher.Handle({ path: joined, params: (fetcherInfo.params || {}) }).then(handleData).catch(handleError);
        }
    }
    SetActiveState_(state) {
        if (state != this.active_) {
            this.active_ = state;
            window.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.active`, { detail: { state } }));
        }
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/fetch.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/directive/fetch.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchRouterDirectiveExtension": () => (/* binding */ FetchRouterDirectiveExtension),
/* harmony export */   "FetchRouterDirectiveExtensionCompact": () => (/* binding */ FetchRouterDirectiveExtensionCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetcher */ "./node_modules/@benbraide/inlinejs-router/lib/esm/fetcher.js");



function CallHandler(handler, params) {
    let result = handler(params);
    if (result instanceof Promise) { //Wrap promise
        return new Promise((resolve, reject) => {
            result.then(value => resolve((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ToString)(value))).catch(err => reject(err));
        });
    }
    return Promise.resolve((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ToString)(result)); //Return value as a resolved promise
}
const FetchRouterDirectiveExtension = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)('fetch', ({ componentId, contextElement, expression, argKey, argOptions }) => {
    if (!(contextElement instanceof HTMLTemplateElement)) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Target is not a template element.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
    }
    let bind = (value) => {
        var _a, _b;
        let handlerInfo = null;
        if (typeof value === 'string' || value instanceof RegExp) { //Path only
            let handler = ({ params }) => {
                let data;
                if (Object.keys(params).length != 0) { //Perform interpolation
                    data = contextElement.innerHTML.replace(/\{\:\s*(.+?)\s*\:\}/g, (match, capture) => {
                        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ToString)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression: capture })(undefined, [params], { params }));
                    });
                }
                else {
                    data = contextElement.innerHTML;
                }
                return Promise.resolve(data);
            };
            handlerInfo = { path: value, handler };
        }
        else if (typeof value === 'function') { //Handle all fetch requests
            handlerInfo = { path: /^.+$/, handler: (params) => CallHandler(value, params) };
        }
        else if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(value)) {
            let { path, handler } = value;
            handlerInfo = { path, handler: (params) => CallHandler(handler, params) };
        }
        if (handlerInfo) {
            let concept = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
            if (concept) {
                let fetcher = new _fetcher__WEBPACK_IMPORTED_MODULE_2__.RouterFetcher(handlerInfo.path, handlerInfo.handler);
                concept.AddFetcher(fetcher);
                (_b = (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.AddUninitCallback(() => concept === null || concept === void 0 ? void 0 : concept.RemoveFetcher(fetcher));
            }
        }
        else {
            (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Target path is invalid.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
        }
    };
    if (argOptions.includes('evaluate')) {
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression })(bind);
    }
    else {
        bind(expression);
    }
});
function FetchRouterDirectiveExtensionCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(FetchRouterDirectiveExtension, _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/link.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/directive/link.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkRouterDirectiveExtension": () => (/* binding */ LinkRouterDirectiveExtension),
/* harmony export */   "LinkRouterDirectiveExtensionCompact": () => (/* binding */ LinkRouterDirectiveExtensionCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");


const LinkRouterDirectiveExtension = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)('link', ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
    var _a, _b, _c, _d;
    if (!(contextElement instanceof HTMLAnchorElement) && !(contextElement instanceof HTMLFormElement)) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Target must be a anchor or form element.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
    }
    let getPath, getEvent;
    if (contextElement instanceof HTMLFormElement) {
        if (contextElement.method.toLowerCase() !== 'get') {
            return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Form element must use the GET method.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
        }
        getPath = () => {
            let path = contextElement.action, query = '';
            (new FormData(contextElement)).forEach((value, key) => {
                query = (query ? `${query}&${key}=${value.toString()}` : `${key}=${value.toString()}`);
            });
            return (query ? (path.includes('?') ? `${path}&${query}` : `${path}?${query}`) : path);
        };
        getEvent = () => 'submit';
    }
    else { //Anchor
        getPath = () => contextElement.href;
        getEvent = () => 'click';
    }
    let options = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ResolveOptions)({ options: { reload: false }, list: argOptions }), onEvent = (e) => {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _a === void 0 ? void 0 : _a.Goto(getPath(), options.reload);
    };
    let getOrigin = () => { var _a; return (((_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _a === void 0 ? void 0 : _a.GetOrigin()) || window.location.origin); };
    let isMatchingPath = (path) => ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.TidyPath)(path) === (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.TidyPath)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.PathToRelative)(getPath(), getOrigin())));
    contextElement.addEventListener(getEvent(), onEvent);
    if (expression = expression.trim()) { //Listen for data loads
        let evaluate = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression }), isActive = false, pathMonitor = (path) => {
            if (isActive != isMatchingPath(path)) {
                evaluate(undefined, undefined, { active: (isActive = !isActive) });
            }
        };
        (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _a === void 0 ? void 0 : _a.AddPathChangeHandler(pathMonitor);
        (_c = (_b = (component || (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId))) === null || _b === void 0 ? void 0 : _b.FindElementScope(contextElement)) === null || _c === void 0 ? void 0 : _c.AddUninitCallback(() => {
            var _a;
            (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _a === void 0 ? void 0 : _a.RemovePathChangeHandler(pathMonitor);
        });
        pathMonitor(((_d = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _d === void 0 ? void 0 : _d.GetCurrentPath()) || '');
    }
});
function LinkRouterDirectiveExtensionCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(LinkRouterDirectiveExtension, _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/mount.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/directive/mount.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MountEnteredRouterDirectiveExtension": () => (/* binding */ MountEnteredRouterDirectiveExtension),
/* harmony export */   "MountLoadRouterDirectiveExtension": () => (/* binding */ MountLoadRouterDirectiveExtension),
/* harmony export */   "MountReloadRouterDirectiveExtension": () => (/* binding */ MountReloadRouterDirectiveExtension),
/* harmony export */   "MountRouterDirectiveExtension": () => (/* binding */ MountRouterDirectiveExtension),
/* harmony export */   "MountRouterDirectiveExtensionCompact": () => (/* binding */ MountRouterDirectiveExtensionCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");


const MountRouterDirectiveExtension = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)('mount', ({ componentId, contextElement, expression, argKey, argOptions }) => {
    if (!(contextElement instanceof HTMLTemplateElement)) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Target is not a template element.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
    }
    let concept = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
    if (!concept) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName} concept is not installed.`, `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
    }
    if (!contextElement.parentElement) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Target must have a parent element.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
    }
    let options = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ResolveOptions)({
        options: {
            main: false,
            section: false,
            scroll: false,
            prepend: false,
            plural: false,
            reload: false,
            evaluate: false,
        },
        list: argOptions,
    });
    let bind = (protocol) => {
        var _a, _b;
        if (protocol && typeof protocol !== 'string' && !(protocol instanceof RegExp) && !(protocol instanceof HTMLElement) && !(0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(protocol)) {
            return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Target protocol is invalid.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
        }
        let mountElement = null;
        if (protocol instanceof HTMLElement) { //Mount target specified
            mountElement = protocol;
            protocol = null;
        }
        else if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(protocol)) {
            mountElement = (protocol.target || null);
            protocol = (protocol.protocol || null);
        }
        if (!mountElement) { //Create mount
            mountElement = document.createElement(options.main ? 'main' : (options.section ? 'section' : 'div'));
        }
        if (!mountElement) {
            return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Mount target is invalid.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
        }
        let onUninit = null;
        if (contextElement.parentElement && !mountElement.parentElement) { //Add to DOM
            contextElement.parentElement.insertBefore(mountElement, contextElement);
            onUninit = () => mountElement.remove();
        }
        let savedPath = null, handleData = ({ data, url }) => {
            let oldPath = savedPath;
            if ((options.scroll || url !== savedPath) && !protocol) {
                window.scrollTo({ top: 0, left: 0 });
            }
            savedPath = url;
            Array.from(mountElement.attributes).forEach(attr => mountElement.removeAttribute(attr.name));
            (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.InsertHtml)({
                element: mountElement,
                html: data,
                component: componentId,
                processDirectives: false,
                afterInsert: () => {
                    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BootstrapAndAttach)(mountElement);
                    (url === oldPath) && contextElement.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.mount.reload`));
                    contextElement.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.mount.load`));
                },
                afterTransitionCallback: () => { },
                transitionScope: contextElement,
            });
        };
        let checkpoint = 0, prepend = (path) => ('/' + (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.TidyPath)(`${protocol}${options.plural ? 's' : ''}/${path.startsWith('/') ? path.substring(1) : path}`));
        let protocolHandler = ({ path }) => {
            contextElement.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.mount.entered`));
            if (path === savedPath && !options.reload) { //Skip
                contextElement.dispatchEvent(new CustomEvent(`${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}.mount.reload`));
                return true;
            }
            let myCheckpoint = ++checkpoint, dataHandler = (data, splitPath) => ((myCheckpoint == checkpoint) && handleData({ data, path: splitPath, url: path }));
            return (options.prepend ? { dataHandler, path: prepend(path), shouldReload: options.reload } : dataHandler);
        };
        if (protocol) {
            concept.AddProtocolHandler(protocol, protocolHandler);
        }
        else {
            concept.AddDataHandler(handleData);
        }
        (_b = (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.AddUninitCallback(() => {
            var _a, _b;
            if (protocol) {
                (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _a === void 0 ? void 0 : _a.RemoveProtocolHandler(protocolHandler);
            }
            else {
                (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _b === void 0 ? void 0 : _b.RemoveDataHandler(handleData);
            }
            onUninit && onUninit();
        });
    };
    if (options.evaluate) {
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression })(bind);
    }
    else {
        bind(expression);
    }
});
function CreateMountEventExtension(name) {
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)(`mount-${name}`, ({ componentId, contextElement, expression, argKey, argOptions }) => {
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ForwardEvent)(componentId, contextElement, `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}-${argKey}.join`, expression, argOptions);
    });
}
const MountLoadRouterDirectiveExtension = CreateMountEventExtension('load');
const MountReloadRouterDirectiveExtension = CreateMountEventExtension('reload');
const MountEnteredRouterDirectiveExtension = CreateMountEventExtension('entered');
function MountRouterDirectiveExtensionCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(MountRouterDirectiveExtension, _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(MountLoadRouterDirectiveExtension, _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(MountReloadRouterDirectiveExtension, _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(MountEnteredRouterDirectiveExtension, _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/page.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/directive/page.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRouterDirectiveExtension": () => (/* binding */ PageRouterDirectiveExtension),
/* harmony export */   "PageRouterDirectiveExtensionCompact": () => (/* binding */ PageRouterDirectiveExtensionCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");


const PageRouterDirectiveExtension = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)('page', ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
    if (!(contextElement instanceof HTMLTemplateElement)) {
        return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.JournalError)('Target is not a template element.', `${_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName}:${argKey}`, contextElement);
    }
    let options = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.ResolveOptions)({
        options: {
            cache: false,
            reload: false,
            evaluate: false,
        },
        list: argOptions,
    });
    let bind = (value) => {
        var _a, _b, _c, _d;
        let pageId;
        if (typeof value === 'string' || value instanceof RegExp) { //Path specified
            pageId = (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _a === void 0 ? void 0 : _a.AddPage({
                path: value,
                cache: options.cache,
                reload: (options.reload && !options.cache),
            });
        }
        else if ((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(value)) { //Options specified
            pageId = (_b = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _b === void 0 ? void 0 : _b.AddPage({
                path: value.path,
                name: value.name,
                title: value.title,
                cache: (value.cache || options.cache),
                reload: (value.reload || (options.reload && !options.cache)),
                middleware: value.middleware,
            });
        }
        if (pageId) { //Remove page when element is destroyed
            (_d = (_c = (component || (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId))) === null || _c === void 0 ? void 0 : _c.FindElementScope(contextElement)) === null || _d === void 0 ? void 0 : _d.AddUninitCallback(() => {
                var _a;
                (_a = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName)) === null || _a === void 0 ? void 0 : _a.RemovePage(pageId);
            });
        }
    };
    if (options.evaluate) {
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression })(bind);
    }
    else {
        bind(expression);
    }
});
function PageRouterDirectiveExtensionCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(PageRouterDirectiveExtension, _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/router.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/directive/router.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterDirectiveHandler": () => (/* binding */ RouterDirectiveHandler),
/* harmony export */   "RouterDirectiveHandlerCompact": () => (/* binding */ RouterDirectiveHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");


const RouterDirectiveHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateDirectiveHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName, ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BindEvent)({ contextElement, expression,
        component: (component || componentId),
        key: _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName,
        event: argKey,
        defaultEvent: _names__WEBPACK_IMPORTED_MODULE_1__.DefaultRouterEvent,
        eventWhitelist: _names__WEBPACK_IMPORTED_MODULE_1__.RouterEvents,
        options: [...argOptions, 'window'],
        optionBlacklist: ['document', 'outside'],
    });
});
function RouterDirectiveHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddDirectiveHandler)(RouterDirectiveHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/fetcher.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/fetcher.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterFetcher": () => (/* binding */ RouterFetcher)
/* harmony export */ });
class RouterFetcher {
    constructor(path_, handler_) {
        this.path_ = path_;
        this.handler_ = handler_;
    }
    GetPath() {
        return this.path_;
    }
    Handle(params) {
        return this.handler_(params);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRouterEvent": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.DefaultRouterEvent),
/* harmony export */   "FetchRouterDirectiveExtension": () => (/* reexport safe */ _directive_fetch__WEBPACK_IMPORTED_MODULE_6__.FetchRouterDirectiveExtension),
/* harmony export */   "FetchRouterDirectiveExtensionCompact": () => (/* reexport safe */ _directive_fetch__WEBPACK_IMPORTED_MODULE_6__.FetchRouterDirectiveExtensionCompact),
/* harmony export */   "LinkRouterDirectiveExtension": () => (/* reexport safe */ _directive_link__WEBPACK_IMPORTED_MODULE_8__.LinkRouterDirectiveExtension),
/* harmony export */   "LinkRouterDirectiveExtensionCompact": () => (/* reexport safe */ _directive_link__WEBPACK_IMPORTED_MODULE_8__.LinkRouterDirectiveExtensionCompact),
/* harmony export */   "MatchPath": () => (/* reexport safe */ _utilities_path__WEBPACK_IMPORTED_MODULE_2__.MatchPath),
/* harmony export */   "MountEnteredRouterDirectiveExtension": () => (/* reexport safe */ _directive_mount__WEBPACK_IMPORTED_MODULE_7__.MountEnteredRouterDirectiveExtension),
/* harmony export */   "MountLoadRouterDirectiveExtension": () => (/* reexport safe */ _directive_mount__WEBPACK_IMPORTED_MODULE_7__.MountLoadRouterDirectiveExtension),
/* harmony export */   "MountReloadRouterDirectiveExtension": () => (/* reexport safe */ _directive_mount__WEBPACK_IMPORTED_MODULE_7__.MountReloadRouterDirectiveExtension),
/* harmony export */   "MountRouterDirectiveExtension": () => (/* reexport safe */ _directive_mount__WEBPACK_IMPORTED_MODULE_7__.MountRouterDirectiveExtension),
/* harmony export */   "MountRouterDirectiveExtensionCompact": () => (/* reexport safe */ _directive_mount__WEBPACK_IMPORTED_MODULE_7__.MountRouterDirectiveExtensionCompact),
/* harmony export */   "PageRouterDirectiveExtension": () => (/* reexport safe */ _directive_page__WEBPACK_IMPORTED_MODULE_9__.PageRouterDirectiveExtension),
/* harmony export */   "PageRouterDirectiveExtensionCompact": () => (/* reexport safe */ _directive_page__WEBPACK_IMPORTED_MODULE_9__.PageRouterDirectiveExtensionCompact),
/* harmony export */   "ProcessPathPlaceholders": () => (/* reexport safe */ _utilities_path__WEBPACK_IMPORTED_MODULE_2__.ProcessPathPlaceholders),
/* harmony export */   "ResourceConceptName": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.ResourceConceptName),
/* harmony export */   "RouterConcept": () => (/* reexport safe */ _concept__WEBPACK_IMPORTED_MODULE_4__.RouterConcept),
/* harmony export */   "RouterConceptName": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName),
/* harmony export */   "RouterDirectiveHandler": () => (/* reexport safe */ _directive_router__WEBPACK_IMPORTED_MODULE_5__.RouterDirectiveHandler),
/* harmony export */   "RouterDirectiveHandlerCompact": () => (/* reexport safe */ _directive_router__WEBPACK_IMPORTED_MODULE_5__.RouterDirectiveHandlerCompact),
/* harmony export */   "RouterEvents": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.RouterEvents),
/* harmony export */   "RouterFetcher": () => (/* reexport safe */ _fetcher__WEBPACK_IMPORTED_MODULE_3__.RouterFetcher),
/* harmony export */   "RouterMagicHandler": () => (/* reexport safe */ _magic_router__WEBPACK_IMPORTED_MODULE_10__.RouterMagicHandler),
/* harmony export */   "RouterMagicHandlerCompact": () => (/* reexport safe */ _magic_router__WEBPACK_IMPORTED_MODULE_10__.RouterMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@benbraide/inlinejs-router/lib/esm/types.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");
/* harmony import */ var _utilities_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/path */ "./node_modules/@benbraide/inlinejs-router/lib/esm/utilities/path.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetcher */ "./node_modules/@benbraide/inlinejs-router/lib/esm/fetcher.js");
/* harmony import */ var _concept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concept */ "./node_modules/@benbraide/inlinejs-router/lib/esm/concept.js");
/* harmony import */ var _directive_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/router */ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/router.js");
/* harmony import */ var _directive_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/fetch */ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/fetch.js");
/* harmony import */ var _directive_mount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/mount */ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/mount.js");
/* harmony import */ var _directive_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directive/link */ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/link.js");
/* harmony import */ var _directive_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directive/page */ "./node_modules/@benbraide/inlinejs-router/lib/esm/directive/page.js");
/* harmony import */ var _magic_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./magic/router */ "./node_modules/@benbraide/inlinejs-router/lib/esm/magic/router.js");













/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/magic/router.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/magic/router.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterMagicHandler": () => (/* binding */ RouterMagicHandler),
/* harmony export */   "RouterMagicHandlerCompact": () => (/* binding */ RouterMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js");


function CreateRouterProxy() {
    const getConcept = () => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName);
    let methods = {
        setPrefix: (prefix) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.SetPrefix(prefix); },
        addMiddleware: (middleware) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.AddMiddleware(middleware); },
        removeMiddleware: (middleware) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.RemoveMiddleware(middleware); },
        addFetcher: (fetcher) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.AddFetcher(fetcher); },
        removeFetcher: (fetcher) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.RemoveFetcher(fetcher); },
        addProtocolHandler: (protocol, handler) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.AddProtocolHandler(protocol, handler); },
        removeProtocolHandler: (handler) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.RemoveProtocolHandler(handler); },
        addPage: (page) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.AddPage(page); },
        removePage: (page) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.RemovePage(page); },
        findPage: (page) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.FindPage(page); },
        findMatchingPage: (path) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.FindMatchingPage(path); },
        mount: (load) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Mount(load); },
        goto: (path, shouldReload, data) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Goto(path, shouldReload, data); },
        reload: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Reload(); },
        getCurrentPath: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetCurrentPath(); },
        getActivePage: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActivePage(); },
        getActivePageData: (key) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActivePageData(key); },
    };
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateReadonlyProxy)(methods);
}
const RouterProxy = CreateRouterProxy();
const RouterMagicHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateMagicHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.RouterConceptName, () => RouterProxy);
function RouterMagicHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddMagicHandler)(RouterMagicHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRouterEvent": () => (/* binding */ DefaultRouterEvent),
/* harmony export */   "ResourceConceptName": () => (/* binding */ ResourceConceptName),
/* harmony export */   "RouterConceptName": () => (/* binding */ RouterConceptName),
/* harmony export */   "RouterEvents": () => (/* binding */ RouterEvents)
/* harmony export */ });
const ResourceConceptName = 'resource';
const RouterConceptName = 'router';
const DefaultRouterEvent = 'load';
const RouterEvents = ['load', 'reload', 'error', '404', 'entered', 'page', 'path'];


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/types.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-router/lib/esm/utilities/path.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-router/lib/esm/utilities/path.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchPath": () => (/* binding */ MatchPath),
/* harmony export */   "ProcessPathPlaceholders": () => (/* binding */ ProcessPathPlaceholders)
/* harmony export */ });
const PlaceholderTypes = ['integer', 'number', 'string', 'boolean', 'array'];
function ProcessPathPlaceholders(path) {
    if (typeof path !== 'string') {
        return null;
    }
    let params = [...path.matchAll(/\/(\:[^\/]+)/g)].map(item => item[1].split(':').map(part => part.trim()).filter(part => !!part)).filter(param => (param.length <= 2));
    if (params.length != 0) {
        return path.split('/').map(part => part.trim()).filter(part => !!part).map((part) => {
            let [key, type] = (params.find(param => (`:${param.join(':')}` === part)) || []);
            if (!key) {
                return part;
            }
            let isOptional = part.endsWith('?');
            return { isOptional,
                value: (isOptional ? key.substring(0, (key.length - 1)) : key),
                type: ((type && PlaceholderTypes.includes(type)) ? type : undefined),
            };
        });
    }
    return null;
}
function MatchPath(path, info, params, pathParts) {
    Object.keys(params).forEach(key => (delete params[key]));
    let targetPath = info.fetcher.GetPath();
    if (typeof targetPath !== 'string') {
        return targetPath.test(path);
    }
    if (!info.optimized) {
        return (targetPath === path);
    }
    pathParts = (pathParts || path.split('/').map(part => part.trim()).filter(part => !!part));
    let pathIndex = 0, paramsIndex = 0, lastPlaceholderIndex = { path: -1, params: -1 }, gotoCheckpoint = () => {
        if (lastPlaceholderIndex.path != -1 && lastPlaceholderIndex.params != -1) { //Continue from the last optional param
            pathIndex = lastPlaceholderIndex.path;
            paramsIndex = (lastPlaceholderIndex.params + 1);
            delete params[info.optimized[lastPlaceholderIndex.params].value];
            lastPlaceholderIndex = { path: -1, params: -1 };
            return true;
        }
        return false;
    };
    let pathIsMatched = (path, targetPath) => {
        return ((targetPath.startsWith('%') && targetPath.endsWith('%')) ? (new RegExp(targetPath.substring(1, (targetPath.length - 1))).test(path)) : (path === targetPath));
    };
    for (; pathIndex < pathParts.length && paramsIndex < info.optimized.length;) {
        let param = info.optimized[paramsIndex], segment = pathParts[pathIndex];
        if (typeof param === 'string' && !pathIsMatched(segment, param)) { //Segments don't match
            if (gotoCheckpoint()) {
                continue;
            }
            return false;
        }
        if (typeof param !== 'string') {
            let accept = (value) => {
                params[param.value] = value; //Add param value
                if (param.isOptional && lastPlaceholderIndex.path == -1 && lastPlaceholderIndex.params == -1) { //Update checkpoint
                    lastPlaceholderIndex = { path: pathIndex, params: paramsIndex };
                }
            };
            if (param.type && param.type !== 'string') { //Validate types
                if (param.type === 'integer' || param.type === 'number') {
                    let numValue = parseFloat(segment);
                    if (numValue || numValue === 0) {
                        if (param.type === 'number' || Number.isInteger(numValue)) {
                            accept(numValue);
                        }
                        else if (!param.isOptional) {
                            return false;
                        }
                    }
                    else if (!param.isOptional) {
                        return false;
                    }
                }
                else if (param.type === 'boolean') {
                    if (segment === 'true' || segment === 'false') {
                        accept(segment === 'true');
                    }
                    else if (!param.isOptional) {
                        return false;
                    }
                }
                else { //Array
                    accept(segment.split(',').map(part => part.trim()).filter(part => !!part));
                }
            }
            else {
                accept(segment);
            }
        }
        ++pathIndex;
        ++paramsIndex;
        if (pathIndex >= pathParts.length && paramsIndex < info.optimized.length) {
            param = info.optimized[paramsIndex];
            if (info.optimized.slice(paramsIndex).findIndex((param) => {
                return (typeof param === 'string' || !param.isOptional);
            }) != -1 && !gotoCheckpoint()) { //There's a non-optional part ahead -- try last checkpoint
                return false;
            }
        }
    }
    if (pathIndex < pathParts.length) { //Not fully matched
        return false;
    }
    for (; paramsIndex < info.optimized.length; ++paramsIndex) {
        let param = info.optimized[paramsIndex];
        if (typeof param === 'string' || !param.isOptional) { //Not fully matched
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-screen/lib/esm/concept.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-screen/lib/esm/concept.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenConcept": () => (/* binding */ ScreenConcept)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");

const DefaultScreenSizeMarkList = [
    ['xs', 576],
    ['sm', 765],
    ['md', 992],
    ['lg', 1200],
    ['xl', 1400],
    ['xx', Number.MAX_SAFE_INTEGER],
];
class ScreenConcept {
    constructor(component_, sizeMarkList_) {
        var _a;
        this.component_ = component_;
        this.sizeMarkList_ = sizeMarkList_;
        this.listeners_ = {
            size: null,
            scroll: null,
        };
        this.id_ = (((_a = this.component_) === null || _a === void 0 ? void 0 : _a.GenerateUniqueId('screen_proxy_')) || '');
        this.sizeMarkList_ = (this.sizeMarkList_ || DefaultScreenSizeMarkList);
        this.size_ = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        this.scrollOffset_ = ScreenConcept.GetScrollOffset();
        this.scrollTrend_ = { horizontal: 0, vertical: 0 };
        this.scrollStreak_ = { horizontal: 0, vertical: 0 };
        this.listeners_.size = () => this.HandleResize_();
        this.listeners_.scroll = () => this.HandleScroll_();
        window.addEventListener('resize', this.listeners_.size, { passive: true });
        window.addEventListener('scroll', this.listeners_.scroll, { passive: true });
    }
    StopListening() {
        if (this.listeners_.size) {
            window.removeEventListener('resize', this.listeners_.size);
            this.listeners_.size = null;
        }
        if (this.listeners_.scroll) {
            window.removeEventListener('scroll', this.listeners_.scroll);
            this.listeners_.scroll = null;
        }
    }
    Scroll({ to, from, animate }) {
        let offset = ScreenConcept.GetScrollOffset();
        to.x = ((typeof to.x === 'number') ? to.x : offset.x);
        to.y = ((typeof to.y === 'number') ? to.y : offset.y);
        if (from) {
            from.x = ((typeof from.x === 'number') ? from.x : offset.x);
            from.y = ((typeof from.y === 'number') ? from.y : offset.y);
        }
        let scroll = () => {
            window.scrollTo({
                left: (to.x || 0),
                top: (to.y || 0),
                behavior: (animate ? 'smooth' : undefined),
            });
        };
        if (from && (from.x !== offset.x || from.y !== offset.y)) {
            window.scrollTo((from.x || 0), (from.y || 0)); //Jump to offset
            queueMicrotask(scroll); //Defer final scroll
        }
        else { //Scroll from current
            scroll();
        }
    }
    ScrollTop(animate) {
        this.Scroll({ animate,
            to: { x: null, y: 0 },
        });
    }
    ScrollRight(animate) {
        this.Scroll({ animate,
            to: { x: document.body.scrollWidth, y: null },
        });
    }
    ScrollBottom(animate) {
        this.Scroll({ animate,
            to: { x: null, y: document.body.scrollHeight },
        });
    }
    ScrollLeft(animate) {
        this.Scroll({ animate,
            to: { x: 0, y: null },
        });
    }
    GetScrollOffset() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.scrollOffset`);
        return Object.assign({}, this.scrollOffset_);
    }
    GetScrollPercentage() {
        return ScreenConcept.ComputeScrollPercentage(this.GetScrollOffset());
    }
    GetScrollTrend() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.scrollTrend`);
        return Object.assign({}, this.scrollTrend_);
    }
    GetScrollStreak() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.scrollStreak`);
        return Object.assign({}, this.scrollStreak_);
    }
    GetSize() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.size`);
        return this.size_;
    }
    GetSizeMarks() {
        var _a;
        (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${this.id_}.sizeMarks`);
        return this.FindSizeMarks_(this.size_.width);
    }
    GetBreakpoint() {
        return this.GetSizeMarks()[0];
    }
    GetCheckpoint() {
        return this.GetSizeMarks()[1];
    }
    GetSizeMarkLevel(mark) {
        return DefaultScreenSizeMarkList.findIndex(([bp, cp]) => ((typeof mark === 'string') ? (mark === bp) : (mark <= cp)));
    }
    HandleResize_() {
        var _a, _b;
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.size`, 'size', (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
        let [oldBreakpoint, oldCheckpoint] = this.FindSizeMarks_(this.size_.width);
        this.size_.width = window.innerWidth;
        this.size_.height = window.innerHeight;
        let [breakpoint, checkpoint] = this.FindSizeMarks_(this.size_.width);
        if (breakpoint !== oldBreakpoint || checkpoint != oldCheckpoint) { //Marks changed
            (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.sizeMarks`, 'sizeMarks', (_b = this.component_) === null || _b === void 0 ? void 0 : _b.GetBackend().changes);
        }
    }
    HandleScroll_() {
        var _a, _b, _c;
        let offset = ScreenConcept.GetScrollOffset();
        if (offset.x == this.scrollOffset_.x && offset.y == this.scrollOffset_.y) {
            return; //No changes
        }
        (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.scrollOffset`, 'scrollOffset', (_a = this.component_) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
        let trend = {
            horizontal: ((offset.x <= this.scrollOffset_.x) ? ((offset.x < this.scrollOffset_.x) ? -1 : 0) : 1),
            vertical: ((offset.y <= this.scrollOffset_.y) ? ((offset.y < this.scrollOffset_.y) ? -1 : 0) : 1),
        };
        let delta = {
            x: (offset.x - this.scrollOffset_.x),
            y: (offset.y - this.scrollOffset_.y),
        };
        delta.x = ((delta.x < 0) ? -delta.x : delta.x);
        delta.y = ((delta.y < 0) ? -delta.y : delta.y);
        this.scrollOffset_ = offset;
        if (trend.horizontal != this.scrollTrend_.horizontal) {
            this.scrollStreak_.horizontal = -1;
        }
        else { //Advance streak
            delta.x += this.scrollStreak_.horizontal;
        }
        if (trend.vertical != this.scrollTrend_.vertical) {
            this.scrollStreak_.vertical = -1;
        }
        else { //Advance streak
            delta.y += this.scrollStreak_.vertical;
        }
        if (trend.horizontal != this.scrollTrend_.horizontal || trend.vertical != this.scrollTrend_.vertical) {
            (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.scrollTrend`, 'scrollTrend', (_b = this.component_) === null || _b === void 0 ? void 0 : _b.GetBackend().changes);
            this.scrollTrend_ = trend;
        }
        if (delta.x != this.scrollStreak_.horizontal || delta.y != this.scrollStreak_.vertical) {
            (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddChanges)('set', `${this.id_}.scrollStreak`, 'scrollStreak', (_c = this.component_) === null || _c === void 0 ? void 0 : _c.GetBackend().changes);
            this.scrollStreak_.horizontal = delta.x;
            this.scrollStreak_.vertical = delta.y;
        }
    }
    FindSizeMarks_(width) {
        for (let marks of this.sizeMarkList_) {
            if (width < marks[1]) { //Return found
                return [...marks];
            }
        }
        return ['', -1]; //Not found
    }
    static GetScrollOffset() {
        return {
            x: (window.scrollX || window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
            y: (window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        };
    }
    static ComputeScrollPercentage({ x, y }) {
        return {
            x: ((document.body.scrollWidth <= 0) ? 0 : ((x / document.body.scrollWidth) * 100)),
            y: ((document.body.scrollHeight <= 0) ? 0 : ((y / document.body.scrollHeight) * 100)),
        };
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-screen/lib/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-screen/lib/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenConcept": () => (/* reexport safe */ _concept__WEBPACK_IMPORTED_MODULE_2__.ScreenConcept),
/* harmony export */   "ScreenConceptName": () => (/* reexport safe */ _names__WEBPACK_IMPORTED_MODULE_1__.ScreenConceptName),
/* harmony export */   "ScreenMagicHandler": () => (/* reexport safe */ _magic_screen__WEBPACK_IMPORTED_MODULE_3__.ScreenMagicHandler),
/* harmony export */   "ScreenMagicHandlerCompact": () => (/* reexport safe */ _magic_screen__WEBPACK_IMPORTED_MODULE_3__.ScreenMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@benbraide/inlinejs-screen/lib/esm/types.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./names */ "./node_modules/@benbraide/inlinejs-screen/lib/esm/names.js");
/* harmony import */ var _concept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concept */ "./node_modules/@benbraide/inlinejs-screen/lib/esm/concept.js");
/* harmony import */ var _magic_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./magic/screen */ "./node_modules/@benbraide/inlinejs-screen/lib/esm/magic/screen.js");






/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-screen/lib/esm/magic/screen.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-screen/lib/esm/magic/screen.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenMagicHandler": () => (/* binding */ ScreenMagicHandler),
/* harmony export */   "ScreenMagicHandlerCompact": () => (/* binding */ ScreenMagicHandlerCompact)
/* harmony export */ });
/* harmony import */ var _benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../names */ "./node_modules/@benbraide/inlinejs-screen/lib/esm/names.js");


function CreateScreenProxy() {
    const getConcept = () => (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConcept(_names__WEBPACK_IMPORTED_MODULE_1__.ScreenConceptName);
    let methods = {
        stopListening: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.StopListening(); },
        scroll: (params) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Scroll(params); },
        scrollTop: (animate) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.ScrollTop(animate); },
        scrollRight: (animate) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.ScrollRight(animate); },
        scrollBottom: (animate) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.ScrollBottom(animate); },
        scrollLeft: (animate) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.ScrollLeft(animate); },
        getSizeMarkLevel: (mark) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetSizeMarkLevel(mark); },
    };
    let properties = {
        scrollOffset: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetScrollOffset(); },
        scrollPercentage: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetScrollPercentage(); },
        scrollTrend: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetScrollTrend(); },
        scrollStreak: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetScrollStreak(); },
        size: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetSize(); },
        sizeMarks: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetSizeMarks(); },
        breakpoint: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetBreakpoint(); },
        checkpoint: () => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetCheckpoint(); },
    };
    return (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateInplaceProxy)((0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.BuildGetterProxyOptions)({
        getter: (prop) => {
            if (prop && methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
            if (prop && properties.hasOwnProperty(prop)) {
                return properties[prop]();
            }
        },
        lookup: [...Object.keys(methods), ...Object.keys(properties)],
    }));
}
const ScreenProxy = CreateScreenProxy();
const ScreenMagicHandler = (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.CreateMagicHandlerCallback)(_names__WEBPACK_IMPORTED_MODULE_1__.ScreenConceptName, () => ScreenProxy);
function ScreenMagicHandlerCompact() {
    (0,_benbraide_inlinejs__WEBPACK_IMPORTED_MODULE_0__.AddMagicHandler)(ScreenMagicHandler);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-screen/lib/esm/names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-screen/lib/esm/names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenConceptName": () => (/* binding */ ScreenConceptName)
/* harmony export */ });
const ScreenConceptName = 'screen';


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs-screen/lib/esm/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs-screen/lib/esm/types.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/attach.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/attach.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapAndAttach": () => (/* binding */ BootstrapAndAttach)
/* harmony export */ });
/* harmony import */ var _directive_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directive/process */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/process.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");


function BootstrapAndAttach(mount) {
    let global = (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)(), config = global.GetConfig();
    [config.GetDirectiveName('data', true), config.GetDirectiveName('data', false)].forEach((name) => {
        (mount || document).querySelectorAll(`[${name}]`).forEach((element) => {
            if (!element.hasAttribute(name) || !document.contains(element)) { //Probably contained inside another region
                return;
            }
            let component = global.CreateComponent(element);
            (0,_directive_process__WEBPACK_IMPORTED_MODULE_0__.ProcessDirectives)({
                component: component,
                element: element,
                options: {
                    checkTemplate: true,
                    checkDocument: false,
                    ignoreChildren: false,
                },
            });
        });
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/auto.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/auto.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoBootstrap": () => (/* binding */ AutoBootstrap)
/* harmony export */ });
/* harmony import */ var _global_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/create */ "./node_modules/@benbraide/inlinejs/lib/esm/global/create.js");
/* harmony import */ var _attach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attach */ "./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/attach.js");


function AutoBootstrap(mount) {
    (0,_global_create__WEBPACK_IMPORTED_MODULE_0__.GetOrCreateGlobal)();
    setTimeout(() => {
        if (document.readyState == "loading") {
            document.addEventListener('DOMContentLoaded', () => {
                (0,_attach__WEBPACK_IMPORTED_MODULE_1__.BootstrapAndAttach)(mount);
            });
        }
        else { //Loaded
            (0,_attach__WEBPACK_IMPORTED_MODULE_1__.BootstrapAndAttach)(mount);
        }
    }, 0);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/base.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/base.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _directive_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directive/process */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/process.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _proxy_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proxy/root */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/root.js");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stack */ "./node_modules/@benbraide/inlinejs/lib/esm/stack.js");
/* harmony import */ var _utilities_context_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/context-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/context-keys.js");
/* harmony import */ var _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/unique-markers */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/unique-markers.js");
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changes */ "./node_modules/@benbraide/inlinejs/lib/esm/component/changes.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/@benbraide/inlinejs/lib/esm/component/context.js");
/* harmony import */ var _element_scope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./element-scope */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope.js");
/* harmony import */ var _element_scope_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./element-scope-id */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _get_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./get-config */ "./node_modules/@benbraide/inlinejs/lib/esm/component/get-config.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scope */ "./node_modules/@benbraide/inlinejs/lib/esm/component/scope.js");













class BaseComponent {
    constructor(id_, root_) {
        this.id_ = id_;
        this.root_ = root_;
        this.reactiveState_ = 'default';
        this.name_ = '';
        this.context_ = new _context__WEBPACK_IMPORTED_MODULE_7__.Context;
        this.scopes_ = {};
        this.elementScopes_ = {};
        this.proxies_ = {};
        this.refs_ = {};
        this.currentScope_ = new _stack__WEBPACK_IMPORTED_MODULE_3__.Stack();
        this.selectionScopes_ = new _stack__WEBPACK_IMPORTED_MODULE_3__.Stack();
        this.uniqueMarkers_ = (0,_utilities_unique_markers__WEBPACK_IMPORTED_MODULE_5__.GetDefaultUniqueMarkers)();
        this.observers_ = {
            intersections: {},
        };
        this.changes_ = new _changes__WEBPACK_IMPORTED_MODULE_6__.Changes(this.id_);
        this.rootProxy_ = new _proxy_root__WEBPACK_IMPORTED_MODULE_2__.RootProxy(this.id_, {});
        this.proxies_[this.rootProxy_.GetPath()] = this.rootProxy_;
        this.CreateElementScope(this.root_);
        (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().GetMutationObserver().Observe(this.root_, ({ added, removed, attributes }) => {
            let component = (0,_find__WEBPACK_IMPORTED_MODULE_10__.FindComponentById)(id_);
            if (!component) {
                return;
            }
            let checklist = new Array(), dirRegex = (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().GetConfig().GetDirectiveRegex();
            attributes === null || attributes === void 0 ? void 0 : attributes.filter(attr => (attr.target instanceof HTMLElement)).forEach((attr) => {
                var _a;
                if (!dirRegex.test(attr.name)) {
                    (_a = component === null || component === void 0 ? void 0 : component.FindElementScope(attr.target)) === null || _a === void 0 ? void 0 : _a.ExecuteAttributeChangeCallbacks(attr.name);
                }
                else if (attr.target.hasAttribute(attr.name) && !checklist.includes(attr.target)) {
                    checklist.push(attr.target);
                }
            });
            checklist.forEach(element => (0,_directive_process__WEBPACK_IMPORTED_MODULE_0__.ProcessDirectives)({ element,
                component: component,
                options: {
                    checkTemplate: true,
                    checkDocument: false,
                    ignoreChildren: false,
                }, }));
            let addedBackup = [...(added || [])];
            added === null || added === void 0 ? void 0 : added.filter(node => !(removed === null || removed === void 0 ? void 0 : removed.includes(node))).forEach((node) => {
                var _a;
                if (node instanceof HTMLElement) {
                    (0,_directive_process__WEBPACK_IMPORTED_MODULE_0__.ProcessDirectives)({
                        component: component,
                        element: node,
                        options: {
                            checkTemplate: true,
                            checkDocument: false,
                            ignoreChildren: false,
                        },
                    });
                    for (let parent = node.parentElement; parent; parent = parent.parentElement) {
                        (_a = component === null || component === void 0 ? void 0 : component.FindElementScope(parent)) === null || _a === void 0 ? void 0 : _a.ExecuteTreeChangeCallbacks([node], []);
                        if (parent === this.root_) {
                            break;
                        }
                    }
                }
            });
            removed === null || removed === void 0 ? void 0 : removed.filter(node => !addedBackup.includes(node)).forEach((node) => {
                var _a;
                if (node instanceof HTMLElement) {
                    (_a = component.FindElementScope(node)) === null || _a === void 0 ? void 0 : _a.Destroy();
                }
            });
        }, ['add', 'remove', 'attribute']);
    }
    SetReactiveState(state) {
        this.reactiveState_ = state;
    }
    GetReactiveState() {
        return ((this.reactiveState_ === 'default') ? (0,_get_config__WEBPACK_IMPORTED_MODULE_11__.GetConfig)().GetReactiveState() : this.reactiveState_);
    }
    GetId() {
        return this.id_;
    }
    GenerateUniqueId(prefix, suffix) {
        return (0,_utilities_unique_markers__WEBPACK_IMPORTED_MODULE_5__.GenerateUniqueId)(this.uniqueMarkers_, `Cmpnt<${this.id_}>.`, prefix, suffix);
    }
    SetName(name) {
        this.name_ = name;
    }
    GetName() {
        return this.name_;
    }
    CreateScope(root) {
        let existing = Object.values(this.scopes_).find(scope => (scope.GetRoot() === root));
        if (existing) {
            return existing;
        }
        if (root === this.root_ || !this.root_.contains(root)) {
            return null;
        }
        let scope = new _scope__WEBPACK_IMPORTED_MODULE_12__.Scope(this.id_, this.GenerateUniqueId('scope_'), root);
        this.scopes_[scope.GetId()] = scope;
        return scope;
    }
    RemoveScope(scope) {
        let id = ((typeof scope === 'string') ? scope : scope.GetId());
        if (id in this.scopes_) {
            delete this.scopes_[id];
        }
    }
    FindScopeById(id) {
        return ((id in this.scopes_) ? this.scopes_[id] : null);
    }
    FindScopeByName(name) {
        return (Object.values(this.scopes_).find(scope => (scope.GetName() === name)) || null);
    }
    FindScopeByRoot(root) {
        return (Object.values(this.scopes_).find(scope => (scope.GetRoot() === root)) || null);
    }
    PushCurrentScope(scopeId) {
        this.currentScope_.Push(scopeId);
    }
    PopCurrentScope() {
        return this.currentScope_.Pop();
    }
    PeekCurrentScope() {
        return this.currentScope_.Peek();
    }
    InferScopeFrom(element) {
        var _a;
        return (this.FindScopeById(((_a = this.FindElementScope((0,_element_scope_id__WEBPACK_IMPORTED_MODULE_9__.GetElementScopeId)(element))) === null || _a === void 0 ? void 0 : _a.GetScopeId()) || '') || null);
    }
    PushSelectionScope() {
        let scope = {
            set: false,
        };
        this.selectionScopes_.Push(scope);
        return scope;
    }
    PopSelectionScope() {
        return this.selectionScopes_.Pop();
    }
    PeekSelectionScope() {
        return this.selectionScopes_.Peek();
    }
    GetRoot() {
        return this.root_;
    }
    FindElement(deepestElement, predicate) {
        if (deepestElement === this.root_ || !this.root_.contains(deepestElement)) {
            return null;
        }
        do {
            deepestElement = deepestElement.parentElement;
            try {
                if (predicate(deepestElement)) {
                    return deepestElement;
                }
            }
            catch (_a) { }
        } while (deepestElement !== this.root_);
        return null;
    }
    FindAncestor(target, index) {
        let realIndex = (index || 0);
        return this.FindElement(target, () => (realIndex-- == 0));
    }
    CreateElementScope(element) {
        let existing = Object.values(this.elementScopes_).find(scope => (scope.GetElement() === element));
        if (existing) {
            return existing;
        }
        if (element !== this.root_ && !this.root_.contains(element)) {
            return null;
        }
        let elementScope = new _element_scope__WEBPACK_IMPORTED_MODULE_8__.ElementScope(this.id_, this.GenerateUniqueId('elscope_'), element, (element === this.root_));
        this.elementScopes_[elementScope.GetId()] = elementScope;
        element[_element_scope_id__WEBPACK_IMPORTED_MODULE_9__.ElementScopeKey] = elementScope.GetId();
        return elementScope;
    }
    RemoveElementScope(id) {
        delete this.elementScopes_[id];
    }
    FindElementScope(element) {
        if (typeof element === 'string') {
            return ((element in this.elementScopes_) ? this.elementScopes_[element] : null);
        }
        let target = ((element === true) ? this.context_.Peek(_utilities_context_keys__WEBPACK_IMPORTED_MODULE_4__.ContextKeys.self) : ((element instanceof Node) ? element : this.root_));
        if (target && _element_scope_id__WEBPACK_IMPORTED_MODULE_9__.ElementScopeKey in target && target[_element_scope_id__WEBPACK_IMPORTED_MODULE_9__.ElementScopeKey] in this.elementScopes_) {
            return this.elementScopes_[target[_element_scope_id__WEBPACK_IMPORTED_MODULE_9__.ElementScopeKey]];
        }
        return null;
    }
    FindElementLocalValue(element, key, shouldBubble) {
        let elementScope = this.FindElementScope(element), value = (elementScope ? elementScope.GetLocal(key) : (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().CreateNothing());
        if (!(0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().IsNothing(value) || !shouldBubble || (!elementScope && typeof element === 'string')) {
            return value;
        }
        let target = ((elementScope === null || elementScope === void 0 ? void 0 : elementScope.GetElement()) || ((element === true) ? this.context_.Peek(_utilities_context_keys__WEBPACK_IMPORTED_MODULE_4__.ContextKeys.self) : ((element instanceof Node) ? element : this.root_)));
        if (!target) {
            return value;
        }
        let ancestor = this.FindAncestor(target);
        return (ancestor ? this.FindElementLocalValue(ancestor, key, true) : value);
    }
    AddProxy(proxy) {
        this.proxies_[proxy.GetPath()] = proxy;
    }
    RemoveProxy(proxy) {
        let path = ((typeof proxy === 'string') ? proxy : proxy.GetPath());
        if (path in this.proxies_) {
            delete this.proxies_[path];
        }
    }
    GetRootProxy() {
        return this.rootProxy_;
    }
    FindProxy(path) {
        return ((path in this.proxies_) ? this.proxies_[path] : null);
    }
    AddRefElement(ref, element) {
        this.refs_[ref] = element;
    }
    FindRefElement(ref) {
        return ((ref in this.refs_) ? this.refs_[ref] : null);
    }
    AddIntersectionObserver(observer) {
        this.observers_.intersections[observer.GetId()] = observer;
    }
    FindIntersectionObserver(id) {
        return ((id in this.observers_.intersections) ? this.observers_.intersections[id] : null);
    }
    RemoveIntersectionObserver(id) {
        if (id in this.observers_.intersections) {
            delete this.observers_.intersections[id];
        }
    }
    GetBackend() {
        return {
            context: this.context_,
            changes: this.changes_,
        };
    }
    GetGlobal() {
        return (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)();
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/changes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/changes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Changes": () => (/* binding */ Changes)
/* harmony export */ });
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stack */ "./node_modules/@benbraide/inlinejs/lib/esm/stack.js");
/* harmony import */ var _utilities_deep_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/deep-copy */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/deep-copy.js");
/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current */ "./node_modules/@benbraide/inlinejs/lib/esm/component/current.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");





class Changes {
    constructor(componentId_) {
        this.componentId_ = componentId_;
        this.nextTickHandlers_ = new Array();
        this.isScheduled_ = false;
        this.list_ = new Array();
        this.subscribers_ = {};
        this.lastAccessContext_ = '';
        this.getAccessStorages_ = new _stack__WEBPACK_IMPORTED_MODULE_1__.Stack();
        this.origins_ = new _stack__WEBPACK_IMPORTED_MODULE_1__.Stack();
    }
    GetComponentId() {
        return this.componentId_;
    }
    AddNextTickHandler(handler) {
        this.nextTickHandlers_.push(handler);
        this.Schedule();
    }
    Schedule() {
        if (this.isScheduled_) {
            return;
        }
        this.isScheduled_ = true;
        queueMicrotask(() => {
            this.isScheduled_ = false;
            let batches = new Array(), addBatch = (change, callback) => {
                let batch = batches.find(info => (info.callback === callback));
                if (!batch) {
                    batches.push({
                        callback: callback,
                        changes: new Array(change),
                    });
                }
                else { //Add to existing batch
                    batch.changes.push(change);
                }
            };
            let getOrigin = (change) => (('original' in change) ? change.original.origin : change.origin);
            this.list_.splice(0).forEach((change) => {
                Object.values(this.subscribers_).filter(sub => (sub.path === change.path && sub.callback !== getOrigin(change))).forEach(sub => addBatch(change, sub.callback));
            });
            batches.forEach(batch => batch.callback(batch.changes));
            this.nextTickHandlers_.splice(0).forEach((handler) => {
                try {
                    handler();
                }
                catch (err) {
                    (0,_journal_error__WEBPACK_IMPORTED_MODULE_0__.JournalError)(err, `InlineJs.Region<${this.componentId_}>.NextTick`);
                }
            });
        });
    }
    Add(change) {
        this.list_.push(change);
        this.Schedule();
    }
    AddComposed(prop, prefix, targetPath) {
        let change = {
            componentId: this.componentId_,
            type: 'set',
            path: (prefix ? `${prefix}.${prop}` : prop),
            prop: prop,
            origin: this.origins_.Peek(),
        };
        if (targetPath) { //Bubbled change
            this.Add({
                original: change,
                path: targetPath,
            });
        }
        else {
            this.Add(change);
        }
    }
    GetLastChange(index = 0) {
        return (0,_utilities_deep_copy__WEBPACK_IMPORTED_MODULE_2__.DeepCopy)(this.list_.at(-(index + 1)) || null);
    }
    AddGetAccess(path) {
        var _a, _b, _c, _d;
        let targetObject = (((_a = (0,_find__WEBPACK_IMPORTED_MODULE_4__.FindComponentById)((0,_current__WEBPACK_IMPORTED_MODULE_3__.PeekCurrentComponent)() || '')) === null || _a === void 0 ? void 0 : _a.GetBackend().changes) || this);
        let lastPointIndex = path.lastIndexOf('.');
        this.lastAccessContext_ = ((lastPointIndex == -1) ? '' : path.substring(0, lastPointIndex));
        let storage = targetObject.getAccessStorages_.Peek();
        if (!(storage === null || storage === void 0 ? void 0 : storage.details)) {
            return;
        }
        (_b = storage.details.raw) === null || _b === void 0 ? void 0 : _b.entries.push({
            compnentId: this.componentId_,
            path: path,
        });
        if (storage.details.optimized && storage.details.optimized.entries !== ((_c = storage.details.raw) === null || _c === void 0 ? void 0 : _c.entries) && //Optimized is not linked to raw
            storage.details.optimized.entries.length != 0 && //Optimized list is not empty
            storage.lastAccessPath && storage.lastAccessPath.length < path.length && //Last access path is possibly a substring of path
            path.indexOf(`${storage.lastAccessPath}.`) == 0 //Last access path is confirmed as a substring of path
        ) {
            storage.details.optimized.entries.at(-1).path = path; //Replace last optimized entry
        }
        else if (storage.details.optimized && storage.details.optimized.entries !== ((_d = storage.details.raw) === null || _d === void 0 ? void 0 : _d.entries)) { //Add a new optimized entry
            storage.details.optimized.entries.push({
                compnentId: this.componentId_,
                path: path,
            });
        }
        storage.lastAccessPath = path; //Update last access path
    }
    GetLastAccessContext() {
        return this.lastAccessContext_;
    }
    ResetLastAccessContext() {
        this.lastAccessContext_ = '';
    }
    PushGetAccessStorage(storage) {
        var _a;
        this.getAccessStorages_.Push({
            details: (storage || {
                optimized: ((((_a = (0,_find__WEBPACK_IMPORTED_MODULE_4__.FindComponentById)(this.componentId_)) === null || _a === void 0 ? void 0 : _a.GetReactiveState()) === 'optimized') ? {
                    entries: new Array(),
                    snapshots: new _stack__WEBPACK_IMPORTED_MODULE_1__.Stack(),
                } : undefined),
                raw: {
                    entries: new Array(),
                    snapshots: new _stack__WEBPACK_IMPORTED_MODULE_1__.Stack(),
                },
            }),
            lastAccessPath: '',
        });
    }
    PopGetAccessStorage() {
        var _a;
        return (((_a = this.getAccessStorages_.Pop()) === null || _a === void 0 ? void 0 : _a.details) || null);
    }
    SwapOptimizedGetAccessStorage() {
        let storage = this.getAccessStorages_.Peek();
        if ((storage === null || storage === void 0 ? void 0 : storage.details.optimized) && storage.details.raw) {
            storage.details.optimized.entries = storage.details.raw.entries;
        }
    }
    RestoreOptimizedGetAccessStorage() {
        var _a;
        let storage = this.getAccessStorages_.Peek();
        if ((storage === null || storage === void 0 ? void 0 : storage.details.optimized) && storage.details.optimized.entries === ((_a = storage.details.raw) === null || _a === void 0 ? void 0 : _a.entries)) {
            storage.details.optimized.entries = storage.details.raw.entries.slice(0);
        }
    }
    FlushRawGetAccessStorage() {
        var _a, _b;
        (_b = (_a = this.getAccessStorages_.Peek()) === null || _a === void 0 ? void 0 : _a.details.raw) === null || _b === void 0 ? void 0 : _b.entries.splice(0);
    }
    PushGetAccessStorageSnapshot() {
        var _a, _b;
        let storage = this.getAccessStorages_.Peek();
        (_a = storage === null || storage === void 0 ? void 0 : storage.details.optimized) === null || _a === void 0 ? void 0 : _a.snapshots.Push(storage.details.optimized.entries.slice(0).map(entry => (Object.assign({}, entry))));
        (_b = storage === null || storage === void 0 ? void 0 : storage.details.raw) === null || _b === void 0 ? void 0 : _b.snapshots.Push(storage.details.raw.entries.slice(0).map(entry => (Object.assign({}, entry))));
    }
    PopGetAccessStorageSnapshot(discard) {
        var _a, _b, _c, _d;
        let storage = this.getAccessStorages_.Peek();
        let optimizedSnapshot = (_a = storage === null || storage === void 0 ? void 0 : storage.details.optimized) === null || _a === void 0 ? void 0 : _a.snapshots.Pop();
        if (!discard && optimizedSnapshot && ((_b = storage === null || storage === void 0 ? void 0 : storage.details.optimized) === null || _b === void 0 ? void 0 : _b.entries)) {
            storage.details.optimized.entries = optimizedSnapshot;
        }
        let rawSnapshot = (_c = storage === null || storage === void 0 ? void 0 : storage.details.raw) === null || _c === void 0 ? void 0 : _c.snapshots.Pop();
        if (!discard && rawSnapshot && ((_d = storage === null || storage === void 0 ? void 0 : storage.details.raw) === null || _d === void 0 ? void 0 : _d.entries)) {
            storage.details.raw.entries = rawSnapshot;
        }
    }
    PopAllGetAccessStorageSnapshots(discard) {
        var _a, _b, _c, _d, _e, _f;
        let storage = this.getAccessStorages_.Peek();
        let optimizedSnapshot = (_a = storage === null || storage === void 0 ? void 0 : storage.details.optimized) === null || _a === void 0 ? void 0 : _a.snapshots.Pop();
        while (((_b = storage === null || storage === void 0 ? void 0 : storage.details.optimized) === null || _b === void 0 ? void 0 : _b.snapshots) && !storage.details.optimized.snapshots.IsEmpty()) {
            optimizedSnapshot = storage.details.optimized.snapshots.Pop();
        }
        if (!discard && optimizedSnapshot && ((_c = storage === null || storage === void 0 ? void 0 : storage.details.optimized) === null || _c === void 0 ? void 0 : _c.entries)) {
            storage.details.optimized.entries = optimizedSnapshot;
        }
        let rawSnapshot = (_d = storage === null || storage === void 0 ? void 0 : storage.details.raw) === null || _d === void 0 ? void 0 : _d.snapshots.Pop();
        while (((_e = storage === null || storage === void 0 ? void 0 : storage.details.raw) === null || _e === void 0 ? void 0 : _e.snapshots) && !storage.details.raw.snapshots.IsEmpty()) {
            rawSnapshot = storage.details.raw.snapshots.Pop();
        }
        if (!discard && rawSnapshot && ((_f = storage === null || storage === void 0 ? void 0 : storage.details.raw) === null || _f === void 0 ? void 0 : _f.entries)) {
            storage.details.raw.entries = rawSnapshot;
        }
    }
    PushOrigin(origin) {
        this.origins_.Push(origin);
    }
    PeekOrigin() {
        return this.origins_.Peek();
    }
    PopOrigin() {
        return this.origins_.Pop();
    }
    Subscribe(path, handler) {
        var _a;
        let id = (_a = (0,_find__WEBPACK_IMPORTED_MODULE_4__.FindComponentById)(this.componentId_)) === null || _a === void 0 ? void 0 : _a.GenerateUniqueId('sub_');
        if (id) { //Add new subscription
            this.subscribers_[id] = {
                path: path,
                callback: handler,
            };
        }
        return (id || '');
    }
    Unsubscribe(subscribed, path) {
        if (typeof subscribed !== 'string') {
            Object.entries(this.subscribers_).filter(([id, entry]) => (subscribed === entry.callback && (!path || path === entry.path))).map(([id]) => id).forEach(id => {
                this.Unsubscribe_(id);
            });
        }
        else if (subscribed in this.subscribers_) {
            this.Unsubscribe_(subscribed);
        }
    }
    Unsubscribe_(id) {
        delete this.subscribers_[id];
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/context.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/context.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stack */ "./node_modules/@benbraide/inlinejs/lib/esm/stack.js");

class Context {
    constructor() {
        this.record_ = {};
    }
    Push(key, value) {
        (this.record_[key] = (this.record_[key] || new _stack__WEBPACK_IMPORTED_MODULE_0__.Stack())).Push(value);
    }
    Pop(key, noResult) {
        return ((key in this.record_) ? this.record_[key].Pop() : (noResult || null));
    }
    Peek(key, noResult) {
        return ((key in this.record_) ? this.record_[key].Peek() : (noResult || null));
    }
    Get(key) {
        return ((key in this.record_) ? this.record_[key] : null);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/current-scope.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/current-scope.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeekCurrentScope": () => (/* binding */ PeekCurrentScope),
/* harmony export */   "PopCurrentScope": () => (/* binding */ PopCurrentScope),
/* harmony export */   "PushCurrentScope": () => (/* binding */ PushCurrentScope)
/* harmony export */ });
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");

function PushCurrentScope(component, scope) {
    var _a;
    (_a = ((typeof component === 'string') ? (0,_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.PushCurrentScope(scope);
}
function PopCurrentScope(component) {
    var _a;
    return (((_a = ((typeof component === 'string') ? (0,_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.PopCurrentScope()) || null);
}
function PeekCurrentScope(component) {
    var _a;
    return (((_a = ((typeof component === 'string') ? (0,_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.PeekCurrentScope()) || null);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/current.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/current.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeekCurrentComponent": () => (/* binding */ PeekCurrentComponent),
/* harmony export */   "PopCurrentComponent": () => (/* binding */ PopCurrentComponent),
/* harmony export */   "PushCurrentComponent": () => (/* binding */ PushCurrentComponent)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

function PushCurrentComponent(componentId) {
    (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().PushCurrentComponent(componentId);
}
function PopCurrentComponent() {
    return (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().PopCurrentComponent();
}
function PeekCurrentComponent() {
    return (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().PeekCurrentComponent();
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementScopeKey": () => (/* binding */ ElementScopeKey),
/* harmony export */   "GetElementScopeId": () => (/* binding */ GetElementScopeId)
/* harmony export */ });
const ElementScopeKey = '__InlineJS_ELSCOPE_KEY__';
function GetElementScopeId(element) {
    let getScopeId = (el) => ((ElementScopeKey in el) && el[ElementScopeKey]), scopeId = '';
    while (element) { //Get closest element with a scope ID
        scopeId = getScopeId(element);
        if (scopeId || element === document.body) {
            return (scopeId || '');
        }
        element = element.parentElement;
    }
    return '';
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementScope": () => (/* binding */ ElementScope)
/* harmony export */ });
/* harmony import */ var _directive_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directive/manager */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/manager.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _current_scope__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-scope */ "./node_modules/@benbraide/inlinejs/lib/esm/component/current-scope.js");
/* harmony import */ var _element_scope_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element-scope-id */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ "./node_modules/@benbraide/inlinejs/lib/esm/component/event.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");







class ElementScope {
    constructor(componentId_, id_, element_, isRoot_) {
        this.componentId_ = componentId_;
        this.id_ = id_;
        this.element_ = element_;
        this.isRoot_ = isRoot_;
        this.scopeId_ = '';
        this.key_ = '';
        this.locals_ = {};
        this.data_ = {};
        this.managers_ = {
            directive: null,
        };
        this.callbacks_ = {
            post: new Array(),
            uninit: new Array(),
            treeChange: new Array(),
            attributeChange: new Array(),
        };
        this.state_ = {
            isMarked: false,
            isDestroyed: false,
        };
        this.scopeId_ = ((0,_current_scope__WEBPACK_IMPORTED_MODULE_3__.PeekCurrentScope)(this.componentId_) || '');
    }
    GetComponentId() {
        return this.componentId_;
    }
    GetScopeId() {
        return this.scopeId_;
    }
    GetId() {
        return this.id_;
    }
    SetKey(key) {
        this.key_ = key;
    }
    GetKey() {
        return this.key_;
    }
    GetElement() {
        return this.element_;
    }
    IsRoot() {
        return this.isRoot_;
    }
    SetLocal(key, value) {
        if (!this.state_.isMarked) {
            this.locals_[key] = value;
        }
    }
    DeleteLocal(key) {
        delete this.locals_[key];
    }
    HasLocal(key) {
        return (key in this.locals_);
    }
    GetLocal(key) {
        return ((key in this.locals_) ? this.locals_[key] : (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().CreateNothing());
    }
    GetLocals() {
        return this.locals_;
    }
    SetData(key, value) {
        if (!this.state_.isMarked) {
            this.data_[key] = value;
        }
    }
    GetData(key) {
        return ((key in this.data_) ? this.data_[key] : (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().CreateNothing());
    }
    AddPostProcessCallback(callback) {
        if (!this.state_.isMarked) {
            this.callbacks_.post.push(callback);
        }
    }
    ExecutePostProcessCallbacks() {
        (this.callbacks_.post || []).forEach(callback => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(callback, 'ElementScope.ExecutePostProcessCallbacks'));
    }
    AddUninitCallback(callback) {
        if (!this.state_.isMarked) {
            this.callbacks_.uninit.push(callback);
        }
    }
    RemoveUninitCallback(callback) {
        this.callbacks_.uninit = this.callbacks_.uninit.filter(c => (c !== callback));
    }
    AddTreeChangeCallback(callback) {
        this.callbacks_.treeChange.push(callback);
    }
    RemoveTreeChangeCallback(callback) {
        this.callbacks_.treeChange = this.callbacks_.treeChange.filter(c => (c !== callback));
    }
    ExecuteTreeChangeCallbacks(added, removed) {
        this.callbacks_.treeChange.forEach(callback => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => callback({ added, removed })));
    }
    AddAttributeChangeCallback(callback, whitelist) {
        if (this.state_.isMarked) {
            return;
        }
        let existing = this.callbacks_.attributeChange.find(info => (info.callback === callback));
        if (!existing) {
            this.callbacks_.attributeChange.push({
                callback: callback,
                whitelist: ((typeof whitelist === 'string') ? [whitelist] : (whitelist || [])),
            });
        }
        else { //Add whitelist to existing
            existing.whitelist.push(...(whitelist || []));
        }
    }
    RemoveAttributeChangeCallback(callback, whitelist) {
        let index = this.callbacks_.attributeChange.findIndex(info => (info.callback === callback));
        if (index == -1) {
            return;
        }
        let computedWhitelist = ((typeof whitelist === 'string') ? [whitelist] : (whitelist || []));
        if (computedWhitelist.length != 0 && this.callbacks_.attributeChange[index].whitelist.length != 0) {
            computedWhitelist.forEach((item) => {
                this.callbacks_.attributeChange[index].whitelist = this.callbacks_.attributeChange[index].whitelist.filter(eItem => (eItem !== item));
            });
        }
        else { //Clear whitelist
            this.callbacks_.attributeChange[index].whitelist.splice(0);
        }
        if (this.callbacks_.attributeChange[index].whitelist.length == 0) {
            this.callbacks_.attributeChange.splice(index, 1);
        }
    }
    ExecuteAttributeChangeCallbacks(name) {
        (this.callbacks_.attributeChange || []).filter(info => ((info.whitelist || []).length == 0 || info.whitelist.includes(name)))
            .forEach(info => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => info.callback(name)));
    }
    Destroy(markOnly) {
        if (this.state_.isDestroyed) {
            return;
        }
        this.state_.isMarked = true;
        if (!(this.element_ instanceof HTMLTemplateElement)) {
            let component = (0,_find__WEBPACK_IMPORTED_MODULE_6__.FindComponentById)(this.componentId_);
            if (component) {
                this.DestroyChildren_(component, this.element_, (markOnly || false));
            }
        }
        if (markOnly) {
            return;
        }
        this.callbacks_.uninit.splice(0).forEach((callback) => {
            try {
                callback();
            }
            catch (_a) { }
        });
        this.callbacks_.post.splice(0);
        this.callbacks_.treeChange.splice(0);
        this.callbacks_.attributeChange.splice(0);
        this.data_ = {};
        this.locals_ = {};
        this.state_.isDestroyed = true;
        (0,_event__WEBPACK_IMPORTED_MODULE_5__.UnbindOutsideEvent)(this.element_);
        (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().GetMutationObserver().Unobserve(this.element_);
        let component = (0,_find__WEBPACK_IMPORTED_MODULE_6__.FindComponentById)(this.componentId_);
        component === null || component === void 0 ? void 0 : component.RemoveElementScope(this.id_); //Remove from component
        delete this.element_[_element_scope_id__WEBPACK_IMPORTED_MODULE_4__.ElementScopeKey]; //Remove id value on element
        if (this.isRoot_) { //Remove component -- wait for changes to finalize
            let componentId = this.componentId_;
            component === null || component === void 0 ? void 0 : component.GetBackend().changes.AddNextTickHandler(() => (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().RemoveComponent(componentId));
        }
    }
    IsMarked() {
        return this.state_.isMarked;
    }
    IsDestroyed() {
        return this.state_.isDestroyed;
    }
    GetDirectiveManager() {
        return (this.managers_.directive = (this.managers_.directive || new _directive_manager__WEBPACK_IMPORTED_MODULE_0__.DirectiveManager()));
    }
    DestroyChildren_(component, target, markOnly) {
        Array.from(target.children).filter(child => !child.contains(target)).forEach((child) => {
            let childScope = component.FindElementScope(child);
            if (childScope) { //Destroy element scope
                childScope.Destroy(markOnly);
            }
            else { //No element scope -- destroy children
                this.DestroyChildren_(component, child, markOnly);
            }
        });
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/event.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/event.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOutsideEventExcept": () => (/* binding */ AddOutsideEventExcept),
/* harmony export */   "AddOutsideEventListener": () => (/* binding */ AddOutsideEventListener),
/* harmony export */   "RemoveOutsideEventListener": () => (/* binding */ RemoveOutsideEventListener),
/* harmony export */   "UnbindOutsideEvent": () => (/* binding */ UnbindOutsideEvent)
/* harmony export */ });
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");

const InlineJS_OutsideEvent_Key = 'InlineJS_OutsideEvent';
function GetOutsideEventGlobalBlock() {
    return (globalThis[InlineJS_OutsideEvent_Key] = (globalThis[InlineJS_OutsideEvent_Key] || {
        targetScopes: new Array(),
        eventCallbacks: {},
    }));
}
function AddOutsideEventListener(target, events, handler) {
    let block = GetOutsideEventGlobalBlock(), targetScope = block.targetScopes.find(scope => (scope.target === target));
    if (!targetScope) { //Add new entry
        targetScope = {
            target: target,
            listeners: {},
        };
        block.targetScopes.push(targetScope);
    }
    (Array.isArray(events) ? events : [events]).forEach((event) => {
        if (!(event in targetScope.listeners)) { //Add new entry
            targetScope.listeners[event] = {
                handlers: new Array(),
                excepts: null,
            };
        }
        targetScope.listeners[event].handlers.push({
            callback: handler,
            excepts: null,
        });
        if (!(event in block.eventCallbacks)) { //Bind
            block.eventCallbacks[event] = (e) => {
                block.targetScopes.forEach((scope) => {
                    if (!(e.type in scope.listeners) || scope.target === e.target || scope.target.contains(e.target)) {
                        return; //Not listening to raised event OR event occured inside target
                    }
                    if ((scope.listeners[e.type].excepts || []).findIndex(except => (except === e.target || except.contains(e.target))) != -1) {
                        return; //Event target was registered as an exception
                    }
                    scope.listeners[e.type].handlers
                        .filter(info => ((info.excepts || []).findIndex(except => (except === e.target || except.contains(e.target))) == -1))
                        .forEach(info => (0,_journal_try__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => info.callback(e), 'InlineJS.OutsideEventListener'));
                });
            };
            window.addEventListener(event, block.eventCallbacks[event]);
        }
    });
}
function RemoveOutsideEventListener(target, events, handler) {
    let targetScope = GetOutsideEventGlobalBlock().targetScopes.find(scope => (scope.target === target));
    if (!targetScope) {
        return;
    }
    (Array.isArray(events) ? events : [events]).forEach((event) => {
        if (event in targetScope.listeners) {
            if (handler) {
                targetScope.listeners[event].handlers = targetScope.listeners[event].handlers.filter(info => (info.callback !== handler));
            }
            else { //Remove all
                delete targetScope.listeners[event];
            }
        }
    });
}
function AddOutsideEventExcept(target, list, handler) {
    let targetScope = GetOutsideEventGlobalBlock().targetScopes.find(scope => (scope.target === target));
    if (!targetScope) {
        return;
    }
    Object.keys(list).forEach((event) => {
        if (!(event in targetScope.listeners)) {
            return;
        }
        if (handler) {
            let info = targetScope.listeners[event].handlers.find(item => (item.callback === handler));
            if (info) {
                info.excepts = (info.excepts || new Array());
                (Array.isArray(list[event]) ? list[event] : [list[event]]).forEach((item) => {
                    info.excepts.push(item);
                });
            }
        }
        else { //General
            targetScope.listeners[event].excepts = (targetScope.listeners[event].excepts || new Array());
            (Array.isArray(list[event]) ? list[event] : [list[event]]).forEach((item) => {
                targetScope.listeners[event].excepts.push(item);
            });
        }
    });
}
function UnbindOutsideEvent(target) {
    GetOutsideEventGlobalBlock().targetScopes = GetOutsideEventGlobalBlock().targetScopes.filter(scope => (scope.target !== target && target.contains(scope.target)));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/find.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindComponentById": () => (/* binding */ FindComponentById),
/* harmony export */   "FindComponentByName": () => (/* binding */ FindComponentByName),
/* harmony export */   "FindComponentByRoot": () => (/* binding */ FindComponentByRoot),
/* harmony export */   "InitComponentCache": () => (/* binding */ InitComponentCache)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

const cacheKey = 'InlineJS_Comp_Cache';
function InitComponentCache() {
    return globalThis[cacheKey] = {
        id: '',
        component: null
    };
}
function FindComponentById(id) {
    let cache = (globalThis[cacheKey] = (globalThis[cacheKey] || InitComponentCache()));
    if (id === cache.id) {
        return cache.component;
    }
    cache.component = (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().FindComponentById(id);
    cache.id = (cache.component ? id : '');
    return cache.component;
}
function FindComponentByName(name) {
    return (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().FindComponentByName(name);
}
function FindComponentByRoot(root) {
    return (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().FindComponentByRoot(root);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/get-config.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/get-config.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetConfig": () => (/* binding */ GetConfig)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

function GetConfig() {
    return (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConfig();
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/get-local.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/get-local.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLocal": () => (/* binding */ GetLocal)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");


function GetLocal(element, name, component, defaultValue = {}) {
    var _a;
    let elementScope = null;
    if (element instanceof HTMLElement) {
        elementScope = (((_a = ((typeof component === 'string') ? (0,_find__WEBPACK_IMPORTED_MODULE_1__.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.FindElementScope(element)) || null);
    }
    else {
        elementScope = element;
    }
    if (!elementScope) {
        return defaultValue;
    }
    let value = elementScope.GetLocal(name);
    if ((0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(value)) { //Create key
        elementScope.SetLocal(name, (value = defaultValue));
    }
    return value;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/global.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/global.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGlobalComponent": () => (/* binding */ QueryGlobalComponent)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

const InlineJSGlobalComponentKey = '__InlineJS_GLOBAL_COMPONENT_KEY__';
function QueryGlobalComponent(create) {
    let info = globalThis[InlineJSGlobalComponentKey];
    if (info || create === false) {
        return info.component;
    }
    let root = document.createElement('template');
    globalThis[InlineJSGlobalComponentKey] = { root,
        component: (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().CreateComponent(root),
    };
    return globalThis[InlineJSGlobalComponentKey];
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/infer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/infer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InferComponent": () => (/* binding */ InferComponent)
/* harmony export */ });
/* harmony import */ var _element_scope_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-scope-id */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");


function InferComponent(element) {
    let matches = (0,_element_scope_id__WEBPACK_IMPORTED_MODULE_0__.GetElementScopeId)(element).match(/^Cmpnt\<([0-9_]+)\>/);
    return (matches ? (0,_find__WEBPACK_IMPORTED_MODULE_1__.FindComponentById)(matches[1]) : null);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/insert-html.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/insert-html.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsertHtml": () => (/* binding */ InsertHtml)
/* harmony export */ });
/* harmony import */ var _directive_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directive/process */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/process.js");
/* harmony import */ var _directive_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive/transition */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/transition.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _element_scope_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element-scope-id */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");






function InsertHtml({ element, html, type = 'replace', component, processDirectives = true, afterInsert, afterTransitionCallback, transitionScope }) {
    let componentId = ((typeof component === 'string') ? component : ((component === null || component === void 0 ? void 0 : component.GetId()) || '')), insert = () => {
        let tmpl = document.createElement('template');
        tmpl.innerHTML = html;
        if (type === 'replace' || type === 'append') {
            element.append(...Array.from(tmpl.content.childNodes));
        }
        else if (type === 'prepend') { //Insert before child nodes
            element.prepend(...Array.from(tmpl.content.childNodes));
        }
        (afterInsert && (0,_journal_try__WEBPACK_IMPORTED_MODULE_3__.JournalTry)(afterInsert, 'InlineJS.InsertHtml', element));
        let resolvedComponent = (0,_find__WEBPACK_IMPORTED_MODULE_5__.FindComponentById)(componentId);
        if (processDirectives && resolvedComponent) {
            Array.from(element.children).forEach(child => (0,_directive_process__WEBPACK_IMPORTED_MODULE_0__.ProcessDirectives)({
                component: resolvedComponent,
                element: child,
                options: {
                    checkTemplate: true,
                    checkDocument: true,
                    ignoreChildren: false,
                },
            }));
        }
        if (afterTransitionCallback) {
            (transitionScope || element).dispatchEvent(new CustomEvent('html.transition.begin', { detail: { insert: true } }));
            (0,_directive_transition__WEBPACK_IMPORTED_MODULE_1__.WaitTransition)({ componentId,
                contextElement: (transitionScope || element),
                target: element,
                callback: () => (((transitionScope || element).dispatchEvent(new CustomEvent('html.transition.end', { detail: { insert: true } })) && false) || afterTransitionCallback()),
            });
        }
    };
    if (type === 'replace') { //Remove all child nodes
        let destroyOffspring = (el) => {
            let resolvedComponent = (0,_find__WEBPACK_IMPORTED_MODULE_5__.FindComponentById)(componentId), global = (0,_global_get__WEBPACK_IMPORTED_MODULE_2__.GetGlobal)();
            Array.from(el.children).forEach((child) => {
                var _a;
                let elementScope = resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.FindElementScope(child);
                if (elementScope || (_element_scope_id__WEBPACK_IMPORTED_MODULE_4__.ElementScopeKey in child && (elementScope = (_a = global.InferComponentFrom(child)) === null || _a === void 0 ? void 0 : _a.FindElementScope(child)))) {
                    elementScope.Destroy();
                }
                else {
                    destroyOffspring(child);
                }
            });
        };
        let remove = () => {
            destroyOffspring(element);
            Array.from(element.childNodes).forEach(child => child.remove());
            insert();
        };
        if (afterTransitionCallback) {
            (transitionScope || element).dispatchEvent(new CustomEvent('html.transition.begin', { detail: { insert: false } }));
            (0,_directive_transition__WEBPACK_IMPORTED_MODULE_1__.WaitTransition)({ componentId,
                contextElement: (transitionScope || element),
                target: element,
                reverse: true,
                callback: () => (((transitionScope || element).dispatchEvent(new CustomEvent('html.transition.end', { detail: { insert: false } })) && false) || remove()),
            });
        }
        else {
            remove();
        }
    }
    else {
        insert();
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/next-tick.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/next-tick.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextTick": () => (/* binding */ NextTick)
/* harmony export */ });
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");

class NextTick {
    constructor(componentId_, callback_, initialized_ = false) {
        this.componentId_ = componentId_;
        this.callback_ = callback_;
        this.initialized_ = initialized_;
        this.queued_ = false;
        this.setCallback_ = null;
    }
    Queue(callback) {
        var _a;
        let evaluate = () => ((this.setCallback_ || callback || this.callback_) && (this.setCallback_ || callback || this.callback_)());
        if (!this.queued_ && this.initialized_) {
            this.queued_ = true;
            (_a = (0,_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(this.componentId_)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(() => {
                this.queued_ = false;
                evaluate();
            });
        }
        else if (!this.initialized_) { //Initialize
            this.initialized_ = true;
            evaluate();
        }
        else {
            this.setCallback_ = (callback || null);
        }
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/component/scope.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/component/scope.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scope": () => (/* binding */ Scope)
/* harmony export */ });
class Scope {
    constructor(componentId_, id_, root_) {
        this.componentId_ = componentId_;
        this.id_ = id_;
        this.root_ = root_;
        this.name_ = '';
    }
    GetComponentId() {
        return this.componentId_;
    }
    GetId() {
        return this.id_;
    }
    SetName(name) {
        this.name_ = name;
    }
    GetName() {
        return this.name_;
    }
    GetRoot() {
        return this.root_;
    }
    FindElement(deepestElement, predicate) {
        if (deepestElement === this.root_ || !this.root_.contains(deepestElement)) {
            return null;
        }
        do {
            deepestElement = deepestElement.parentElement;
            try {
                if (predicate(deepestElement)) {
                    return deepestElement;
                }
            }
            catch (_a) { }
        } while (deepestElement !== this.root_);
        return null;
    }
    FindAncestor(target, index) {
        let realIndex = (index || 0);
        return this.FindElement(target, () => (realIndex-- == 0));
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/add.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/add.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDirectiveHandler": () => (/* binding */ AddDirectiveHandler)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _utilities_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");


function AddDirectiveHandler(handler, target) {
    let name = '', callback = null;
    if (typeof handler === 'function') {
        let response = handler();
        if (!response) { //Query name and callback
            name = handler('name');
            callback = handler('callback');
        }
        else { //Details returned
            ({ name, callback } = response);
        }
    }
    else if ((0,_utilities_is_object__WEBPACK_IMPORTED_MODULE_1__.IsObject)(handler)) { //Details provided
        ({ name, callback } = handler);
    }
    else { //Instance provided
        (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetDirectiveManager().AddHandler(handler);
    }
    if (name && callback) {
        if (target) {
            (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetDirectiveManager().AddHandlerExtension(target, callback, name);
        }
        else {
            (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetDirectiveManager().AddHandler(callback, name);
        }
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/callback.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/callback.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDirectiveHandlerCallback": () => (/* binding */ CreateDirectiveHandlerCallback)
/* harmony export */ });
function CreateDirectiveHandlerCallback(name, callback) {
    return { name, callback };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/create.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDirective": () => (/* binding */ CreateDirective)
/* harmony export */ });
/* harmony import */ var _component_get_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/get-config */ "./node_modules/@benbraide/inlinejs/lib/esm/component/get-config.js");
/* harmony import */ var _expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expand */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/expand.js");


let cachedMetas = {};
function CreateDirective(name, value) {
    if (!name || !(name = name.trim())) {
        return null;
    }
    if ((value = value.trim()) === name) {
        value = '';
    }
    if (name in cachedMetas) { //Use cache
        return {
            meta: cachedMetas[name],
            value: value,
        };
    }
    let expandedName = (0,_expand__WEBPACK_IMPORTED_MODULE_1__.ApplyDirectiveExpansionRules)(name), matches = expandedName.match((0,_component_get_config__WEBPACK_IMPORTED_MODULE_0__.GetConfig)().GetDirectiveRegex());
    if (!matches || matches.length != 3 || !matches[2]) { //Not a directive
        return null;
    }
    let colonIndex = matches[2].indexOf(':');
    let parts = ((colonIndex == -1) ? [matches[2]] : [matches[2].substring(0, colonIndex), matches[2].substring(colonIndex + 1)]), nameValue = '', arg = '';
    if (parts.length > 1) {
        ([nameValue, arg] = parts);
    }
    else { //No arg key specified
        ([arg] = parts);
    }
    let argParts = arg.split('.'), argKey = '';
    if (nameValue) {
        argKey = argParts[0];
    }
    else { //No arg key specified
        nameValue = argParts[0];
    }
    argParts.splice(0, 1); //Delete first entry
    let nameParts = nameValue.split('-'), meta = {
        view: {
            original: name,
            expanded: expandedName,
        },
        name: {
            value: nameValue,
            joined: nameParts.join('.'),
            parts: nameParts,
        },
        arg: {
            key: argKey,
            options: (argParts || []),
        },
    };
    cachedMetas[name] = meta;
    return { meta, value };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/dispatch.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/dispatch.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispatchDirective": () => (/* binding */ DispatchDirective)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _journal_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../journal/warn */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/warn.js");
/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flatten */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/flatten.js");






function DispatchDirective(component, element, directive, repeats = 0) {
    let resolvedComponent = ((typeof component === 'string') ? (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(component) : component);
    if (!resolvedComponent) {
        (0,_journal_error__WEBPACK_IMPORTED_MODULE_2__.JournalError)(`Failed to find component for '${directive.meta.view.original}'`, 'InlineJS.DispatchDirective', element);
        return false;
    }
    let handler = null, elementScope = resolvedComponent.FindElementScope(element);
    if (elementScope) { //Check element scope
        handler = elementScope.GetDirectiveManager().FindHandler(directive.meta.name.joined);
        ++repeats;
    }
    handler = (handler || (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().GetDirectiveManager().FindHandler(directive.meta.name.joined));
    if (!handler) { //Try user defined handler
        let camelCaseName = directive.meta.name.parts.reduce((prev, part) => (prev ? `${prev}${part.substring(0, 1).toUpperCase()}${part.substring(1)}` : part), '');
        let key = `${camelCaseName}DirectiveHandler`;
        if (key in globalThis && typeof globalThis[key] === 'function') {
            handler = globalThis[key];
        }
    }
    if (!handler) {
        (0,_journal_warn__WEBPACK_IMPORTED_MODULE_4__.JournalWarn)(`No handler found '${directive.meta.view.original}'`, 'InlineJS.DispatchDirective', element);
        return false;
    }
    if (repeats == 0 && !elementScope) { //Initialize element scope
        resolvedComponent.CreateElementScope(element);
    }
    (0,_journal_try__WEBPACK_IMPORTED_MODULE_3__.JournalTry)(() => {
        handler(Object.assign(Object.assign({}, (0,_flatten__WEBPACK_IMPORTED_MODULE_5__.FlattenDirective)(directive)), { componentId: resolvedComponent.GetId(), component: resolvedComponent, contextElement: element }));
    }, 'InlineJS.DispatchDirective', element);
    return true;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/event.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/event.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindEvent": () => (/* binding */ BindEvent),
/* harmony export */   "ForwardEvent": () => (/* binding */ ForwardEvent)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/create.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatch */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/dispatch.js");



function ForwardEvent(component, contextElement, event, expression, options) {
    let name = (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConfig().GetDirectiveName('on'), joinedOptions = (options || []).join('.');
    let qName = (joinedOptions ? `${name}:${event}.${joinedOptions}` : `${name}:${event}`), directive = (0,_create__WEBPACK_IMPORTED_MODULE_1__.CreateDirective)(qName, (expression || ''));
    return (directive ? (0,_dispatch__WEBPACK_IMPORTED_MODULE_2__.DispatchDirective)(component, contextElement, directive) : false);
}
const defaultEventList = ['bind', 'event', 'on'];
function BindEvent({ component, contextElement, key, event, expression, options, defaultEvent, eventWhitelist = [], optionBlacklist }) {
    let filterOptions = () => (optionBlacklist ? options === null || options === void 0 ? void 0 : options.filter(opt => !optionBlacklist.includes(opt)) : options), getEventName = (name) => {
        return (key ? `${key}-${name}.join` : name);
    };
    if (eventWhitelist.includes(event)) {
        return ForwardEvent(component, contextElement, getEventName(event), expression, filterOptions());
    }
    if (defaultEvent && (event === defaultEvent || defaultEventList.includes(event))) {
        return ForwardEvent(component, contextElement, getEventName(defaultEvent), expression, filterOptions());
    }
    return false;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/expand.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/expand.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDirectiveExpansionRule": () => (/* binding */ AddDirectiveExpansionRule),
/* harmony export */   "ApplyDirectiveExpansionRules": () => (/* binding */ ApplyDirectiveExpansionRules),
/* harmony export */   "CreateDirectiveExpansionRule": () => (/* binding */ CreateDirectiveExpansionRule),
/* harmony export */   "RemoveDirectiveExpansionRule": () => (/* binding */ RemoveDirectiveExpansionRule)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

function CreateDirectiveExpansionRule(rule, expandWith) {
    return (name) => ((name.search(rule) == -1) ? null : name.replace(rule, expandWith));
}
function AddDirectiveExpansionRule(rule) {
    return (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetDirectiveManager().AddExpansionRule(rule);
}
function RemoveDirectiveExpansionRule(id) {
    (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetDirectiveManager().RemoveExpansionRule(id);
}
function ApplyDirectiveExpansionRules(name) {
    return (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetDirectiveManager().Expand(name);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/flatten.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/flatten.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlattenDirective": () => (/* binding */ FlattenDirective)
/* harmony export */ });
function FlattenDirective(directive) {
    return {
        originalView: directive.meta.view.original,
        expandedView: directive.meta.view.expanded,
        nameValue: directive.meta.name.value,
        nameJoined: directive.meta.name.joined,
        nameParts: directive.meta.name.parts,
        argKey: directive.meta.arg.key,
        argOptions: directive.meta.arg.options,
        expression: directive.value,
    };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/get-value.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/get-value.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDirectiveValue": () => (/* binding */ GetDirectiveValue)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

function GetDirectiveValue(element, value, short) {
    let name = (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConfig().GetDirectiveName(value, false), fname = (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConfig().GetDirectiveName(value, true);
    return ((element.getAttribute(name) || element.getAttribute(fname) || (short && element.getAttribute(short))) || null);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/key-value.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/key-value.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveKeyValue": () => (/* binding */ ResolveKeyValue)
/* harmony export */ });
/* harmony import */ var _evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../evaluator/evaluate-later */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/evaluate-later.js");
/* harmony import */ var _evaluator_stream_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evaluator/stream-data */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/stream-data.js");
/* harmony import */ var _reactive_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactive/effect */ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/effect.js");
/* harmony import */ var _utilities_is_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");




function ResolveKeyValue({ componentId, contextElement, key, expression, callback, arrayCallback, useEffect = true }) {
    let checkpoint = 0, evaluate = (0,_evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_0__.EvaluateLater)({ componentId, contextElement, expression }), resolve = (value, myCheckpoint) => {
        (0,_evaluator_stream_data__WEBPACK_IMPORTED_MODULE_1__.StreamData)(value, (value) => {
            if (myCheckpoint != checkpoint) {
                return;
            }
            if (key) {
                callback([key, value]);
            }
            else if ((0,_utilities_is_object__WEBPACK_IMPORTED_MODULE_3__.IsObject)(value)) {
                Object.entries(value).forEach(callback);
            }
            else if (arrayCallback && (typeof value === 'string' || Array.isArray(value))) {
                arrayCallback((typeof value === 'string') ? value.trim().split(' ').filter(item => !!item) : value);
            }
        });
    };
    if (useEffect) {
        (0,_reactive_effect__WEBPACK_IMPORTED_MODULE_2__.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(value => resolve(value, ++checkpoint)),
        });
    }
    else { //No effect
        evaluate(value => resolve(value, checkpoint));
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/lazy.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/lazy.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyCheck": () => (/* binding */ LazyCheck)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evaluator/evaluate-later */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/evaluate-later.js");
/* harmony import */ var _evaluator_wait_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../evaluator/wait-promise */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-promise.js");
/* harmony import */ var _observers_intersection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observers/intersection */ "./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection.js");
/* harmony import */ var _reactive_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reactive/effect */ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/effect.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/options.js");






function LazyCheck({ componentId, component, contextElement, expression, argOptions, callback, options, defaultOptionValue, useEffect }) {
    let evaluate = (0,_evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_1__.EvaluateLater)({ componentId, contextElement, expression }), resolvedOptions = (0,_options__WEBPACK_IMPORTED_MODULE_5__.ResolveOptions)({
        options: (options || {
            lazy: false,
            ancestor: -1,
            threshold: -1,
        }),
        list: argOptions,
        defaultNumber: ((defaultOptionValue === 0) ? 0 : (defaultOptionValue || -1)),
    });
    let doEvaluation = () => evaluate(data => (0,_evaluator_wait_promise__WEBPACK_IMPORTED_MODULE_2__.WaitPromise)(data, callback)), effect = () => ((useEffect === false) ? doEvaluation() : (0,_reactive_effect__WEBPACK_IMPORTED_MODULE_4__.UseEffect)({ componentId, contextElement,
        callback: doEvaluation,
    }));
    if (resolvedOptions.lazy) { //Wait until element is visible
        let resolvedComponent = (component || (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)), intersectionOptions = {
            root: ((resolvedOptions.ancestor < 0) ? null : resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.FindAncestor(contextElement, resolvedOptions.ancestor)),
            threshold: ((resolvedOptions.threshold < 0) ? 0 : resolvedOptions.threshold),
        };
        let observer = (resolvedComponent ? new _observers_intersection__WEBPACK_IMPORTED_MODULE_3__.IntersectionObserver(resolvedComponent.GenerateUniqueId('intob_'), intersectionOptions) : null);
        if (observer) {
            resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.AddIntersectionObserver(observer);
            observer.Observe(contextElement, ({ id, entry } = {}) => {
                var _a;
                if (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) { //Element is visible
                    (_a = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.RemoveIntersectionObserver(id);
                    effect();
                }
            });
        }
        else { //Immediate
            effect();
        }
    }
    else { //Immediate
        effect();
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/manager.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveManager": () => (/* binding */ DirectiveManager)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function CreateComposedDirectiveHandler(handler) {
    return {
        handler(_a) {
            var { argKey } = _a, rest = __rest(_a, ["argKey"]);
            if (this.extensions.hasOwnProperty(argKey)) {
                this.extensions[argKey](Object.assign({ argKey }, rest));
            }
            else { //Pass to main handler
                handler(Object.assign({ argKey }, rest));
            }
        },
        extensions: {},
    };
}
function AddDirectiveHandlerExtension(ref, name, handler) {
    let info = ((typeof ref === 'function') ? CreateComposedDirectiveHandler(ref) : ref);
    info.extensions[name] = handler;
    return info;
}
function RemoveDirectiveHandlerExtension(ref, name) {
    if (typeof ref !== 'function' && ref.extensions.hasOwnProperty(name)) {
        delete ref.extensions[name];
    }
}
function ComputeNameAndCallback(handler, name) {
    let computedName = '', callback = null;
    if (typeof handler === 'function') {
        computedName = (name || '');
        callback = handler;
    }
    else { //Instance specified
        computedName = handler.GetName();
        callback = (params) => handler.Handle(params);
    }
    return { computedName, callback };
}
class DirectiveManager {
    constructor() {
        this.expansionRules_ = {};
        this.handlers_ = {};
    }
    AddExpansionRule(rule) {
        let id = (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GenerateUniqueId('exrule_');
        this.expansionRules_[id] = rule;
        return id;
    }
    RemoveExpansionRule(id) {
        if (id in this.expansionRules_) {
            delete this.expansionRules_[id];
        }
    }
    Expand(name) {
        if (!(name = name.trim())) {
            return name;
        }
        for (let id in this.expansionRules_) {
            let expanded = this.expansionRules_[id](name);
            if (expanded) {
                return expanded;
            }
        }
        return name;
    }
    AddHandler(handler, name) {
        let { computedName, callback } = ComputeNameAndCallback(handler, name);
        if (computedName && callback) {
            this.handlers_[computedName] = callback;
        }
    }
    RemoveHandler(name) {
        if (name in this.handlers_) {
            delete this.handlers_[name];
        }
    }
    FindHandler(name) {
        if (!this.handlers_.hasOwnProperty(name)) {
            return null;
        }
        let info = this.handlers_[name];
        return ((typeof info === 'function') ? info : info.handler.bind(info));
    }
    AddHandlerExtension(target, handler, name) {
        let info = (this.handlers_.hasOwnProperty(target) ? this.handlers_[target] : null);
        if (!info) {
            return;
        }
        let { computedName, callback } = ComputeNameAndCallback(handler, name);
        if (computedName && callback) {
            this.handlers_[target] = AddDirectiveHandlerExtension(info, computedName, callback);
        }
    }
    RemoveHandlerExtension(target, name) {
        let info = (this.handlers_.hasOwnProperty(target) ? this.handlers_[target] : null);
        if (info) {
            RemoveDirectiveHandlerExtension(info, name);
        }
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/options.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/options.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractDuration": () => (/* binding */ ExtractDuration),
/* harmony export */   "ResolveOptions": () => (/* binding */ ResolveOptions)
/* harmony export */ });
function ExtractDuration(value, defaultValue = 0) {
    const regex = /^[0-9]+(s|ms)?$/;
    if (!value || !value.match(regex)) {
        return defaultValue;
    }
    if (value.indexOf('m') == -1 && value.indexOf('s') != -1) { //Seconds
        return (parseInt(value) * 1000);
    }
    return parseInt(value);
}
function ResolveOptions({ options, list, defaultNumber, callback, unknownCallback }) {
    let resolvedOptions = (Array.isArray(options) ? options : [options]);
    let getDefaultNumber = (opt) => (((typeof defaultNumber === 'number') ? defaultNumber : (defaultNumber && defaultNumber(opt))) || 0);
    list.forEach((option, index) => {
        let matched = resolvedOptions.find(opt => (opt && option in opt));
        if (!matched) { //Not found
            return (unknownCallback && unknownCallback({ options, list, option, index }));
        }
        if ((!callback || callback({ options, list, option, index }) !== true)) {
            if (typeof matched[option] === 'number') {
                if (index < (list.length - 1)) {
                    matched[option] = ExtractDuration(list[index + 1].trim(), getDefaultNumber(option));
                }
                else {
                    matched[option] = getDefaultNumber(option);
                }
            }
            else if (typeof matched[option] === 'boolean') {
                matched[option] = true;
            }
        }
    });
    return options;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/process.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/process.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessDirectives": () => (/* binding */ ProcessDirectives)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatch */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/dispatch.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./traverse */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/traverse.js");





function CheckElement(element, { checkTemplate = true, checkDocument = true }) {
    return ((element === null || element === void 0 ? void 0 : element.nodeType) === 1 &&
        (!checkDocument || document.contains(element)) &&
        (!checkTemplate || element instanceof HTMLTemplateElement || !element.closest('template')));
}
function ProcessDirectives({ component, element, options = {} }) {
    var _a;
    if (!CheckElement(element, options)) { //Check failed -- ignore
        return;
    }
    let resolvedComponent = ((typeof component === 'string') ? (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(component) : component);
    if (!resolvedComponent) {
        (0,_journal_error__WEBPACK_IMPORTED_MODULE_2__.JournalError)('Failed to find component.', 'InlineJS.ProcessDirectives', element);
        return false;
    }
    let repeats = 0;
    (0,_traverse__WEBPACK_IMPORTED_MODULE_4__.TraverseDirectives)({ element,
        callback: (directive) => {
            if ((0,_dispatch__WEBPACK_IMPORTED_MODULE_3__.DispatchDirective)(component, element, directive, repeats)) {
                element.removeAttribute(directive.meta.view.original);
                ++repeats; //Prevent multiple element scope initialization attempts
            }
        },
        attributeCallback: (name, value) => (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().DispatchAttributeProcessing({ name, value,
            componentId: resolvedComponent.GetId(),
            component: resolvedComponent,
            contextElement: element,
        }),
    });
    (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().DispatchTextContentProcessing({
        componentId: resolvedComponent.GetId(),
        component: resolvedComponent,
        contextElement: element,
    });
    if (!options.ignoreChildren && !(element instanceof HTMLTemplateElement)) { //Process children
        resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.PushSelectionScope();
        Array.from(element.children).filter(child => !child.contains(element)).forEach(child => ProcessDirectives({ component, options,
            element: child,
        }));
        resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.PopSelectionScope();
    }
    (_a = resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.FindElementScope(element)) === null || _a === void 0 ? void 0 : _a.ExecutePostProcessCallbacks();
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/transition.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/transition.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTransitionDelay": () => (/* binding */ DefaultTransitionDelay),
/* harmony export */   "DefaultTransitionDuration": () => (/* binding */ DefaultTransitionDuration),
/* harmony export */   "DefaultTransitionRepeats": () => (/* binding */ DefaultTransitionRepeats),
/* harmony export */   "ResolveTransition": () => (/* binding */ ResolveTransition),
/* harmony export */   "WaitTransition": () => (/* binding */ WaitTransition)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _utilities_loop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/loop */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/loop.js");




const DefaultTransitionDuration = 300;
const DefaultTransitionDelay = 0;
const DefaultTransitionRepeats = 0;
function ResolveTransition(info, reverse) {
    if (!info || (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().IsNothing(info) || (info.allowed && info.allowed !== 'both' && (info.allowed !== (reverse ? 'reversed' : 'normal')))) {
        return null;
    }
    let concept = (0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().GetConcept('animation');
    info.ease = (info.ease || (concept === null || concept === void 0 ? void 0 : concept.GetEaseCollection().Find('default')) || null);
    info.actor = (info.actor || (concept === null || concept === void 0 ? void 0 : concept.GetActorCollection().Find('default')) || null);
    info.duration = (info.duration || DefaultTransitionDuration);
    info.delay = (info.delay || DefaultTransitionDelay);
    info.repeats = (info.repeats || DefaultTransitionRepeats);
    return info;
}
function WaitTransition({ componentId, contextElement, target, callback, onAbort, reverse, allowRepeats }) {
    var _a, _b, _c, _d;
    let info = ResolveTransition((((_b = (_a = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition')) || null), (reverse || false));
    if (!info || !info.actor || !info.ease || typeof info.duration !== 'number' || info.duration <= 0) {
        return ((callback(false) && false) || null);
    }
    let callActor = (params) => { var _a; return ((typeof (info === null || info === void 0 ? void 0 : info.actor) === 'function') ? info === null || info === void 0 ? void 0 : info.actor(params) : (info && ((_a = info.actor) === null || _a === void 0 ? void 0 : _a.Handle(params)))); };
    let callEase = (params) => { var _a; return ((typeof info.ease === 'function') ? info.ease(params) : ((info && ((_a = info.ease) === null || _a === void 0 ? void 0 : _a.Handle(params))) || 0)); };
    let aborted = false, abort = () => (aborted = true), steps = 0, getFraction = (fraction) => (reverse ? (1 - fraction) : fraction), onAborted = () => {
        var _a, _b;
        (_b = (_a = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.RemoveUninitCallback(abort);
        (target || contextElement).dispatchEvent(new CustomEvent('transition.canceled'));
        onAbort && onAbort();
        return false;
    };
    (_d = (_c = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _c === void 0 ? void 0 : _c.FindElementScope(contextElement)) === null || _d === void 0 ? void 0 : _d.AddUninitCallback(abort);
    (0,_utilities_loop__WEBPACK_IMPORTED_MODULE_3__.CreateAnimationLoop)(info.duration, 0, (allowRepeats ? info.repeats : 0), info.delay).While(({ elapsed }) => {
        if (aborted) {
            return onAborted();
        }
        if (steps == 0) {
            (target || contextElement).style.transform = '';
            (target || contextElement).style.transformOrigin = '50% 50%';
            (target || contextElement).dispatchEvent(new CustomEvent('transition.enter'));
        }
        callActor({
            target: (target || contextElement),
            stage: ((steps++ == 0) ? 'start' : 'middle'),
            fraction: callEase({ duration: info.duration, elapsed, fraction: getFraction(elapsed / info.duration) }),
        });
    }).Final(() => {
        if (!aborted) {
            callActor({
                target: (target || contextElement),
                stage: 'end',
                fraction: callEase({ duration: info.duration, elapsed: info.duration, fraction: getFraction(1) }),
            });
            (target || contextElement).dispatchEvent(new CustomEvent('transition.leave'));
            (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => callback(true));
        }
        else {
            onAborted();
        }
    });
    return abort;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/directive/traverse.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/directive/traverse.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraverseDirectives": () => (/* binding */ TraverseDirectives)
/* harmony export */ });
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/create.js");


function TraverseDirectives({ element, callback, attributeCallback }) {
    Array.from(element.attributes || []).forEach((attr) => {
        try {
            if (attributeCallback) {
                attributeCallback(attr.name, (attr.value || ''));
            }
            let directive = (0,_create__WEBPACK_IMPORTED_MODULE_1__.CreateDirective)(attr.name, (attr.value || ''));
            if (directive) {
                callback(directive);
            }
        }
        catch (err) {
            (0,_journal_error__WEBPACK_IMPORTED_MODULE_0__.JournalError)(err, 'InlineJS.TraverseDirectives', element);
        }
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/evaluate-later.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/evaluator/evaluate-later.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluateLater": () => (/* binding */ EvaluateLater)
/* harmony export */ });
/* harmony import */ var _generate_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-function */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/generate-function.js");

function EvaluateLater(options) {
    return (0,_generate_function__WEBPACK_IMPORTED_MODULE_0__.GenerateFunctionFromString)(options);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/generate-function.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/evaluator/generate-function.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallIfFunction": () => (/* binding */ CallIfFunction),
/* harmony export */   "GenerateFunctionFromString": () => (/* binding */ GenerateFunctionFromString),
/* harmony export */   "GenerateValueReturningFunction": () => (/* binding */ GenerateValueReturningFunction),
/* harmony export */   "GenerateVoidFunction": () => (/* binding */ GenerateVoidFunction)
/* harmony export */ });
/* harmony import */ var _component_current__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/current */ "./node_modules/@benbraide/inlinejs/lib/esm/component/current.js");
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _utilities_context_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/context-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/context-keys.js");
/* harmony import */ var _wait_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wait-promise */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-promise.js");






const InlineJSContextKey = '__InlineJS_Context__';
let InlineJSValueFunctions = {};
let InlineJSVoidFunctions = {};
function GenerateValueReturningFunction(expression, contextElement, componentId) {
    if (InlineJSValueFunctions.hasOwnProperty(expression)) {
        return InlineJSValueFunctions[expression];
    }
    if (InlineJSVoidFunctions.hasOwnProperty(expression)) {
        return null; //Prevent retries when a void version exists
    }
    try {
        let newFunction = (new Function(InlineJSContextKey, `
            with (${InlineJSContextKey}){
                return (${expression});
            };
        `)).bind(contextElement);
        return (InlineJSValueFunctions[expression] = newFunction);
    }
    catch (err) {
        if (!(err instanceof SyntaxError)) {
            (0,_journal_error__WEBPACK_IMPORTED_MODULE_3__.JournalError)(err, `InlineJs.Region<${componentId || 'NIL'}>.GenerateValueReturningFunction`);
        }
    }
    return null;
}
function GenerateVoidFunction(expression, contextElement, componentId) {
    if (InlineJSVoidFunctions.hasOwnProperty(expression)) {
        return InlineJSVoidFunctions[expression];
    }
    try {
        let newFunction = (new Function(InlineJSContextKey, `
            with (${InlineJSContextKey}){
                ${expression};
            };
        `)).bind(contextElement);
        return (InlineJSVoidFunctions[expression] = newFunction);
    }
    catch (err) {
        (0,_journal_error__WEBPACK_IMPORTED_MODULE_3__.JournalError)(err, `InlineJs.Region<${componentId || 'NIL'}>.GenerateVoidFunction`);
    }
    return null;
}
function CallIfFunction(value, handler, componentId, params = []) {
    var _a;
    if (typeof value === 'function') { //Call function
        let component = (0,_component_find__WEBPACK_IMPORTED_MODULE_1__.FindComponentById)(componentId || ''), lastContext = component === null || component === void 0 ? void 0 : component.FindProxy(component === null || component === void 0 ? void 0 : component.GetBackend().changes.GetLastAccessContext());
        let result = value.apply((((_a = (lastContext || (component === null || component === void 0 ? void 0 : component.GetRootProxy()))) === null || _a === void 0 ? void 0 : _a.GetNative()) || null), (params || []));
        return (handler ? handler(result) : result);
    }
    return (handler ? handler(value) : value);
}
function GenerateFunctionFromString({ componentId, contextElement, expression, disableFunctionCall = false, waitPromise = 'recursive' }) {
    expression = expression.trim();
    if (!expression) {
        return (handler) => {
            handler && handler(null);
            return null;
        };
    }
    let runFunction = (handler, target, params, contexts, forwardSyntaxErrors = true, waitMessage) => {
        var _a;
        let component = (0,_component_find__WEBPACK_IMPORTED_MODULE_1__.FindComponentById)(componentId), proxy = component === null || component === void 0 ? void 0 : component.GetRootProxy().GetNative();
        if (!proxy || ((_a = component === null || component === void 0 ? void 0 : component.FindElementScope(contextElement)) === null || _a === void 0 ? void 0 : _a.IsDestroyed())) {
            return;
        }
        let { context = null, changes = null } = ((component === null || component === void 0 ? void 0 : component.GetBackend()) || {});
        context === null || context === void 0 ? void 0 : context.Push(_utilities_context_keys__WEBPACK_IMPORTED_MODULE_4__.ContextKeys.self, contextElement);
        changes === null || changes === void 0 ? void 0 : changes.ResetLastAccessContext();
        (0,_component_current__WEBPACK_IMPORTED_MODULE_0__.PushCurrentComponent)(componentId);
        Object.entries(contexts || {}).forEach(([key, value]) => context === null || context === void 0 ? void 0 : context.Push(key, value));
        try {
            let result = target(proxy);
            if ((0,_global_get__WEBPACK_IMPORTED_MODULE_2__.GetGlobal)().IsFuture(result)) {
                result = result.Get();
            }
            if (!handler) {
                return (disableFunctionCall ? result : CallIfFunction(result, handler, componentId, params));
            }
            let handleResult = (value) => {
                if (value && waitPromise !== 'none') {
                    (0,_wait_promise__WEBPACK_IMPORTED_MODULE_5__.WaitPromise)(value, handler, waitPromise === 'recursive');
                    return (waitMessage || 'Loading data...');
                }
                else { //Immediate
                    handler(value);
                }
            };
            if (!disableFunctionCall) {
                CallIfFunction(result, handleResult, componentId, params);
            }
            else { //No function check
                handleResult(result);
            }
        }
        catch (err) {
            if (!forwardSyntaxErrors || !(err instanceof SyntaxError)) {
                (0,_journal_error__WEBPACK_IMPORTED_MODULE_3__.JournalError)(err, `InlineJs.Region<${componentId}>.RunFunction('${expression}')`);
            }
            else { //Forward syntax errors
                throw err;
            }
        }
        finally { //Revert changes
            Object.entries(contexts || {}).forEach(([key, value]) => context === null || context === void 0 ? void 0 : context.Pop(key, value));
            (0,_component_current__WEBPACK_IMPORTED_MODULE_0__.PopCurrentComponent)();
            context === null || context === void 0 ? void 0 : context.Pop(_utilities_context_keys__WEBPACK_IMPORTED_MODULE_4__.ContextKeys.self);
        }
    };
    let valueReturnFunction = GenerateValueReturningFunction(expression, contextElement, componentId), voidFunction = null;
    if (!valueReturnFunction) {
        voidFunction = GenerateVoidFunction(expression, contextElement, componentId);
    }
    return (handler, params = [], contexts, waitMessage) => {
        if (!voidFunction && valueReturnFunction) {
            try {
                return runFunction(handler, valueReturnFunction, (params || []), (contexts || {}), undefined, waitMessage);
            }
            catch (err) {
                if (err instanceof SyntaxError) {
                    voidFunction = GenerateVoidFunction(expression, contextElement, componentId);
                }
                else {
                    throw err;
                }
            }
        }
        if (voidFunction) {
            return (runFunction(handler, voidFunction, (params || []), (contexts || {}), false) || null);
        }
        handler && handler(null);
        return null;
    };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/stream-data.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/evaluator/stream-data.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamData": () => (/* binding */ StreamData)
/* harmony export */ });
/* harmony import */ var _values_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/loop */ "./node_modules/@benbraide/inlinejs/lib/esm/values/loop.js");
/* harmony import */ var _wait_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wait-promise */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-promise.js");


function StreamData(data, callback) {
    let wait = (target, callback) => (0,_wait_promise__WEBPACK_IMPORTED_MODULE_1__.WaitPromise)(target, callback, true);
    if (data instanceof _values_loop__WEBPACK_IMPORTED_MODULE_0__.Loop) {
        return new _values_loop__WEBPACK_IMPORTED_MODULE_0__.Loop((doWhile, doFinal) => {
            data.While((data) => {
                wait(data, (data) => {
                    wait(callback(data), (value) => doWhile(value));
                });
            });
            data.Final((data) => {
                wait(data, (data) => {
                    wait(callback(data), (value) => doFinal(value));
                });
            });
        });
    }
    if (data instanceof Promise) {
        return new Promise((resolve) => {
            wait(data, (data) => {
                wait(callback(data), (value) => resolve(value));
            });
        });
    }
    return callback(data);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-promise.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-promise.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitPromise": () => (/* binding */ WaitPromise)
/* harmony export */ });
function WaitPromise(value, handler, recursive) {
    if (!(value instanceof Promise)) {
        return handler(value);
    }
    if (recursive) {
        value.then(value => WaitPromise(value, handler, true));
    }
    else { //Wait one
        value.then(handler);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-while.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-while.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitWhile": () => (/* binding */ WaitWhile)
/* harmony export */ });
/* harmony import */ var _values_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/loop */ "./node_modules/@benbraide/inlinejs/lib/esm/values/loop.js");

function WaitWhile(value, handler, finalHandler) {
    if (value instanceof _values_loop__WEBPACK_IMPORTED_MODULE_0__.Loop) {
        value.While(handler).Final((finalHandler === false) ? () => { } : (finalHandler || handler));
    }
    else {
        handler(value);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/expansion/bind.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/expansion/bind.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindDirectiveExpansionRule": () => (/* binding */ BindDirectiveExpansionRule)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

function BindDirectiveExpansionRule(name) {
    return (name.startsWith(':') ? ((0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConfig().GetDirectiveName('bind') + name) : null);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/expansion/class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/expansion/class.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassDirectiveExpansionRule": () => (/* binding */ ClassDirectiveExpansionRule)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

function ClassDirectiveExpansionRule(name) {
    return (name.startsWith('.') ? name.replace('.', (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConfig().GetDirectiveName('class:')) : null);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/expansion/on.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/expansion/on.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnDirectiveExpansionRule": () => (/* binding */ OnDirectiveExpansionRule)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");

function OnDirectiveExpansionRule(name) {
    return (name.startsWith('@') ? name.replace('@', (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetConfig().GetDirectiveName('on:')) : null);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/global/base.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/global/base.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseGlobal": () => (/* binding */ BaseGlobal)
/* harmony export */ });
/* harmony import */ var _component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/base */ "./node_modules/@benbraide/inlinejs/lib/esm/component/base.js");
/* harmony import */ var _directive_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive/manager */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/manager.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _magic_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../magic/manager */ "./node_modules/@benbraide/inlinejs/lib/esm/magic/manager.js");
/* harmony import */ var _observers_mutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observers/mutation */ "./node_modules/@benbraide/inlinejs/lib/esm/observers/mutation.js");
/* harmony import */ var _proxy_child__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proxy/child */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/child.js");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stack */ "./node_modules/@benbraide/inlinejs/lib/esm/stack.js");
/* harmony import */ var _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/unique-markers */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/unique-markers.js");
/* harmony import */ var _values_future__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../values/future */ "./node_modules/@benbraide/inlinejs/lib/esm/values/future.js");
/* harmony import */ var _values_nothing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../values/nothing */ "./node_modules/@benbraide/inlinejs/lib/esm/values/nothing.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./node_modules/@benbraide/inlinejs/lib/esm/global/config.js");
/* harmony import */ var _native_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./native-fetch */ "./node_modules/@benbraide/inlinejs/lib/esm/global/native-fetch.js");












class BaseGlobal {
    constructor(configOptions, idOffset = 0) {
        this.nothing_ = new _values_nothing__WEBPACK_IMPORTED_MODULE_9__.Nothing;
        this.componentsMonitorList_ = new Array();
        this.components_ = {};
        this.currentComponent_ = new _stack__WEBPACK_IMPORTED_MODULE_6__.Stack();
        this.attributeProcessors_ = new Array();
        this.textContentProcessors_ = new Array();
        this.managers_ = {
            directive: new _directive_manager__WEBPACK_IMPORTED_MODULE_1__.DirectiveManager(),
            magic: new _magic_manager__WEBPACK_IMPORTED_MODULE_3__.MagicManager(),
        };
        this.uniqueMarkers_ = (0,_utilities_unique_markers__WEBPACK_IMPORTED_MODULE_7__.GetDefaultUniqueMarkers)();
        this.mutationObserver_ = new _observers_mutation__WEBPACK_IMPORTED_MODULE_4__.MutationObserver();
        this.nativeFetch_ = new _native_fetch__WEBPACK_IMPORTED_MODULE_11__.NativeFetchConcept();
        this.fetchConcept_ = null;
        this.concepts_ = {};
        this.config_ = new _config__WEBPACK_IMPORTED_MODULE_10__.Config(configOptions || {});
        this.uniqueMarkers_.level0 = (idOffset || 0);
    }
    SwapConfig(config) {
        this.config_ = config;
    }
    GetConfig() {
        return this.config_;
    }
    GenerateUniqueId(prefix, suffix) {
        return (0,_utilities_unique_markers__WEBPACK_IMPORTED_MODULE_7__.GenerateUniqueId)(this.uniqueMarkers_, '', prefix, suffix);
    }
    AddComponentMonitor(monitor) {
        this.componentsMonitorList_.push(monitor);
    }
    RemoveComponentMonitor(monitor) {
        this.componentsMonitorList_ = this.componentsMonitorList_.filter(m => (m !== monitor));
    }
    CreateComponent(root) {
        let existing = this.InferComponentFrom(root);
        if (existing) {
            return existing;
        }
        let component = new _component_base__WEBPACK_IMPORTED_MODULE_0__.BaseComponent(this.GenerateUniqueId(), root);
        this.components_[component.GetId()] = component;
        this.componentsMonitorList_.slice(0).forEach(monitor => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => monitor({ action: 'add', component }), 'InlineJS.Global.CreateComponent'));
        return component;
    }
    RemoveComponent(component) {
        let key = ((typeof component === 'string') ? component : component.GetId());
        if (this.components_.hasOwnProperty(key)) {
            let component = this.components_[key];
            delete this.components_[key];
            this.componentsMonitorList_.slice(0).forEach(monitor => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => monitor({ action: 'remove', component }), 'InlineJS.Global.RemoveComponent'));
        }
    }
    TraverseComponents(callback) {
        Object.values(this.components_).some(component => (callback(component) === false));
    }
    FindComponentById(id) {
        return ((id && id in this.components_) ? this.components_[id] : null);
    }
    FindComponentByName(name) {
        return ((name && Object.values(this.components_).find(component => (component.GetName() === name))) || null);
    }
    FindComponentByRoot(root) {
        return ((root && Object.values(this.components_).find(component => (component.GetRoot() === root))) || null);
    }
    PushCurrentComponent(componentId) {
        this.currentComponent_.Push(componentId);
    }
    PopCurrentComponent() {
        return this.currentComponent_.Pop();
    }
    PeekCurrentComponent() {
        return this.currentComponent_.Peek();
    }
    GetCurrentComponent() {
        return this.FindComponentById(this.PeekCurrentComponent() || '');
    }
    InferComponentFrom(element) {
        return ((element && Object.values(this.components_).find(component => (component.GetRoot() === element || component.GetRoot().contains(element)))) || null);
    }
    GetDirectiveManager() {
        return this.managers_.directive;
    }
    GetMagicManager() {
        return this.managers_.magic;
    }
    AddAttributeProcessor(processor) {
        this.attributeProcessors_.push(processor);
    }
    DispatchAttributeProcessing(params) {
        this.attributeProcessors_.forEach(processor => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => processor(params), 'InlineJS.Global.DispatchAttribute', params.contextElement));
    }
    AddTextContentProcessor(processor) {
        this.textContentProcessors_.push(processor);
    }
    DispatchTextContentProcessing(params) {
        this.textContentProcessors_.forEach(processor => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => processor(params), 'InlineJS.Global.DispatchTextContent', params.contextElement));
    }
    GetMutationObserver() {
        return this.mutationObserver_;
    }
    SetFetchConcept(concept) {
        this.fetchConcept_ = concept;
    }
    GetFetchConcept() {
        return (this.fetchConcept_ || this.nativeFetch_);
    }
    SetConcept(name, concept) {
        this.concepts_[name] = concept;
    }
    RemoveConcept(name) {
        delete this.concepts_[name];
    }
    GetConcept(name) {
        return (this.concepts_.hasOwnProperty(name) ? this.concepts_[name] : null);
    }
    CreateChildProxy(owner, name, target) {
        return new _proxy_child__WEBPACK_IMPORTED_MODULE_5__.ChildProxy(owner, name, target);
    }
    CreateFuture(callback) {
        return new _values_future__WEBPACK_IMPORTED_MODULE_8__.Future(callback);
    }
    IsFuture(value) {
        return (value instanceof _values_future__WEBPACK_IMPORTED_MODULE_8__.Future);
    }
    CreateNothing() {
        return this.nothing_;
    }
    IsNothing(value) {
        return (value instanceof _values_nothing__WEBPACK_IMPORTED_MODULE_9__.Nothing);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/global/config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/global/config.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": () => (/* binding */ Config)
/* harmony export */ });
class Config {
    constructor({ appName = '', reactiveState = 'unoptimized', directivePrefix = 'x', directiveRegex, directiveNameBuilder } = {}) {
        this.keyMap_ = {
            'return': 'enter',
            ctrl: 'control',
            esc: 'escape',
            space: ' ',
            menu: 'contextmenu',
            del: 'delete',
            ins: 'insert',
            plus: '+',
            minus: '-',
            star: '*',
            slash: '/',
            alpha: Array.from({ length: 26 }).map((i, index) => String.fromCharCode(index + 97)),
            digit: Array.from({ length: 10 }).map((i, index) => index.toString()),
        };
        this.booleanAttributes_ = new Array('allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected');
        this.appName_ = appName;
        this.reactiveState_ = reactiveState;
        this.directiveRegex_ = (directiveRegex || new RegExp(`^(data-)?${directivePrefix || 'x'}-(.+)$`));
        this.directiveNameBuilder_ = (directiveNameBuilder || ((name, addDataPrefix = false) => {
            return (addDataPrefix ? `data-${directivePrefix || 'x'}-${name}` : `${directivePrefix || 'x'}-${name}`);
        }));
    }
    GetAppName() {
        return this.appName_;
    }
    GetDirectiveRegex() {
        return this.directiveRegex_;
    }
    GetDirectiveName(name, addDataPrefix) {
        return this.directiveNameBuilder_(name, addDataPrefix);
    }
    AddKeyEventMap(key, target) {
        this.keyMap_[key] = target;
    }
    RemoveKeyEventMap(key) {
        delete this.keyMap_[key];
    }
    MapKeyEvent(key) {
        return ((key in this.keyMap_) ? this.keyMap_[key] : key);
    }
    AddBooleanAttribute(name) {
        this.booleanAttributes_.push(name);
    }
    RemoveBooleanAttribute(name) {
        this.booleanAttributes_ = this.booleanAttributes_.filter(attr => (attr !== name));
    }
    IsBooleanAttribute(name) {
        return this.booleanAttributes_.includes(name);
    }
    SetReactiveState(state) {
        this.reactiveState_ = state;
    }
    GetReactiveState() {
        return this.reactiveState_;
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/global/create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/global/create.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateGlobal": () => (/* binding */ CreateGlobal),
/* harmony export */   "GetOrCreateGlobal": () => (/* binding */ GetOrCreateGlobal),
/* harmony export */   "InlineJSGlobalKey": () => (/* binding */ InlineJSGlobalKey)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/@benbraide/inlinejs/lib/esm/global/base.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");



const InlineJSGlobalKey = '__InlineJS_GLOBAL_KEY__';
function CreateGlobal(configOptions, idOffset = 0) {
    (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.InitComponentCache)();
    globalThis[InlineJSGlobalKey] = new _base__WEBPACK_IMPORTED_MODULE_1__.BaseGlobal(configOptions, idOffset);
    (globalThis['InlineJS'] = (globalThis['InlineJS'] || {}))['global'] = globalThis[InlineJSGlobalKey];
    window.dispatchEvent(new CustomEvent(_get__WEBPACK_IMPORTED_MODULE_2__.GlobalCreatedEvent));
    return globalThis[InlineJSGlobalKey];
}
function GetOrCreateGlobal(configOptions, idOffset = 0) {
    return ((0,_get__WEBPACK_IMPORTED_MODULE_2__.GetGlobal)() || CreateGlobal(configOptions, idOffset));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js":
/*!****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/global/get.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetGlobal": () => (/* binding */ GetGlobal),
/* harmony export */   "GlobalCreatedEvent": () => (/* binding */ GlobalCreatedEvent),
/* harmony export */   "WaitForGlobal": () => (/* binding */ WaitForGlobal)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/@benbraide/inlinejs/lib/esm/global/create.js");

const GlobalCreatedEvent = 'inlinejs.global.created';
function GetGlobal() {
    return globalThis[_create__WEBPACK_IMPORTED_MODULE_0__.InlineJSGlobalKey];
}
function WaitForGlobal() {
    return (GetGlobal() ? Promise.resolve() : new Promise(resolve => window.addEventListener(GlobalCreatedEvent, resolve)));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/global/interpolation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/global/interpolation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeInterpolator": () => (/* binding */ AttributeInterpolator),
/* harmony export */   "TextContentInterpolator": () => (/* binding */ TextContentInterpolator)
/* harmony export */ });
/* harmony import */ var _interpolator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interpolator */ "./node_modules/@benbraide/inlinejs/lib/esm/global/interpolator.js");

function AttributeInterpolator({ componentId, contextElement, name, value }) {
    (0,_interpolator__WEBPACK_IMPORTED_MODULE_0__.Interpolate)({ componentId, contextElement,
        text: value,
        handler: value => contextElement.setAttribute(name, value),
    });
}
function TextContentInterpolator({ componentId, contextElement }) {
    (0,_interpolator__WEBPACK_IMPORTED_MODULE_0__.Interpolate)({ componentId, contextElement });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/global/interpolator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/global/interpolator.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetElementContent": () => (/* binding */ GetElementContent),
/* harmony export */   "Interpolate": () => (/* binding */ Interpolate),
/* harmony export */   "InterpolateText": () => (/* binding */ InterpolateText),
/* harmony export */   "ReplaceText": () => (/* binding */ ReplaceText)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evaluator/evaluate-later */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/evaluate-later.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _reactive_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reactive/effect */ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/effect.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const InterpolateInlineRegex = /\{\{\s*(.+?)\s*\}\}/g;
const InterpolateInlineTestRegex = /\{\{.+?\}\}/;
function GetElementContent(el) {
    let computeContent = (node) => {
        return [...node.childNodes].reduce((prev, child) => `${prev}${((child.nodeType != 3) ? computeText(child) : (child.textContent || ''))}`, '');
    };
    let computeText = (node) => {
        let tag = ([...node.attributes].reduce((prev, attr) => `${prev} ${attr.name}="${attr.value}"`, `<${node.tagName.toLowerCase()}`) + '>');
        return `${tag}${computeContent(node)}</${node.tagName.toLowerCase()}>`;
    };
    return computeContent(el);
}
function ReplaceText({ componentId, contextElement, text, handler }) {
    var _a;
    let evaluate = (0,_evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_1__.EvaluateLater)({ componentId, contextElement,
        expression: "let output = " + JSON.stringify(text).replace(InterpolateInlineRegex, '"+($1)+"') + "; return output;",
    });
    (_a = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.CreateElementScope(contextElement);
    (0,_reactive_effect__WEBPACK_IMPORTED_MODULE_3__.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(handler),
    });
}
function InterpolateText(_a) {
    var { text } = _a, rest = __rest(_a, ["text"]);
    if (InterpolateInlineTestRegex.test(text)) {
        ReplaceText(Object.assign({ text }, rest));
    }
}
function Interpolate({ componentId, contextElement, text, handler }) {
    if (typeof text === 'string') {
        return (handler && InterpolateText({ componentId, contextElement, text, handler }));
    }
    if (!InterpolateInlineTestRegex.test(contextElement.textContent || '')) {
        return;
    }
    let children = new Array(), replaceCallers = new Array(), refresh = () => {
        while (contextElement.firstChild) { //Empty tree
            contextElement.firstChild.remove();
        }
        let previousElement = null;
        children.forEach((child) => {
            let element = ((child instanceof Element) ? child : document.createTextNode((typeof child === 'string') ? child : child.evaluated));
            if (previousElement) {
                contextElement.insertBefore(element, previousElement);
            }
            else {
                contextElement.append(element);
            }
            previousElement = element;
        });
    };
    [...contextElement.childNodes].forEach((child) => {
        if (child.nodeType == 3 && child.textContent && InterpolateInlineTestRegex.test(child.textContent)) {
            let textNode = { text: (child.textContent || ''), evaluated: (child.textContent || '') };
            children.push(textNode);
            replaceCallers.push(() => ReplaceText({
                componentId,
                contextElement,
                text: textNode.text,
                handler: (value) => {
                    textNode.evaluated = value;
                    refresh();
                },
            }));
        }
        else if (child.nodeType == 3) {
            children.push(child.textContent || '');
        }
        else {
            children.push(child);
        }
    });
    children.reverse();
    replaceCallers.forEach(caller => (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(caller, 'InlineJS.Interpolate', contextElement));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/global/native-fetch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/global/native-fetch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NativeFetchConcept": () => (/* binding */ NativeFetchConcept)
/* harmony export */ });
class NativeFetchConcept {
    Get(input, init) {
        return fetch(input, init);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddChanges": () => (/* reexport safe */ _proxy_add_changes__WEBPACK_IMPORTED_MODULE_44__.AddChanges),
/* harmony export */   "AddDirectiveExpansionRule": () => (/* reexport safe */ _directive_expand__WEBPACK_IMPORTED_MODULE_91__.AddDirectiveExpansionRule),
/* harmony export */   "AddDirectiveHandler": () => (/* reexport safe */ _directive_add__WEBPACK_IMPORTED_MODULE_86__.AddDirectiveHandler),
/* harmony export */   "AddMagicHandler": () => (/* reexport safe */ _magic_add__WEBPACK_IMPORTED_MODULE_101__.AddMagicHandler),
/* harmony export */   "AddOutsideEventExcept": () => (/* reexport safe */ _component_event__WEBPACK_IMPORTED_MODULE_68__.AddOutsideEventExcept),
/* harmony export */   "AddOutsideEventListener": () => (/* reexport safe */ _component_event__WEBPACK_IMPORTED_MODULE_68__.AddOutsideEventListener),
/* harmony export */   "ApplyDirectiveExpansionRules": () => (/* reexport safe */ _directive_expand__WEBPACK_IMPORTED_MODULE_91__.ApplyDirectiveExpansionRules),
/* harmony export */   "AreObjects": () => (/* reexport safe */ _utilities_is_object__WEBPACK_IMPORTED_MODULE_36__.AreObjects),
/* harmony export */   "AttributeInterpolator": () => (/* reexport safe */ _global_interpolation__WEBPACK_IMPORTED_MODULE_81__.AttributeInterpolator),
/* harmony export */   "AutoBootstrap": () => (/* reexport safe */ _bootstrap_auto__WEBPACK_IMPORTED_MODULE_85__.AutoBootstrap),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _component_base__WEBPACK_IMPORTED_MODULE_61__.BaseComponent),
/* harmony export */   "BaseGlobal": () => (/* reexport safe */ _global_base__WEBPACK_IMPORTED_MODULE_77__.BaseGlobal),
/* harmony export */   "BeginsWith": () => (/* reexport safe */ _utilities_begins_with__WEBPACK_IMPORTED_MODULE_28__.BeginsWith),
/* harmony export */   "BindDirectiveExpansionRule": () => (/* reexport safe */ _expansion_bind__WEBPACK_IMPORTED_MODULE_105__.BindDirectiveExpansionRule),
/* harmony export */   "BindEvent": () => (/* reexport safe */ _directive_event__WEBPACK_IMPORTED_MODULE_90__.BindEvent),
/* harmony export */   "BootstrapAndAttach": () => (/* reexport safe */ _bootstrap_attach__WEBPACK_IMPORTED_MODULE_84__.BootstrapAndAttach),
/* harmony export */   "BuildGetterProxyOptions": () => (/* reexport safe */ _proxy_create__WEBPACK_IMPORTED_MODULE_46__.BuildGetterProxyOptions),
/* harmony export */   "BuildIntersectionOptions": () => (/* reexport safe */ _observers_intersection_options__WEBPACK_IMPORTED_MODULE_110__.BuildIntersectionOptions),
/* harmony export */   "BuildProxyOptions": () => (/* reexport safe */ _proxy_create__WEBPACK_IMPORTED_MODULE_46__.BuildProxyOptions),
/* harmony export */   "CallIfFunction": () => (/* reexport safe */ _evaluator_generate_function__WEBPACK_IMPORTED_MODULE_55__.CallIfFunction),
/* harmony export */   "Changes": () => (/* reexport safe */ _component_changes__WEBPACK_IMPORTED_MODULE_62__.Changes),
/* harmony export */   "ChildProxy": () => (/* reexport safe */ _proxy_child__WEBPACK_IMPORTED_MODULE_45__.ChildProxy),
/* harmony export */   "ClassDirectiveExpansionRule": () => (/* reexport safe */ _expansion_class__WEBPACK_IMPORTED_MODULE_106__.ClassDirectiveExpansionRule),
/* harmony export */   "Config": () => (/* reexport safe */ _global_config__WEBPACK_IMPORTED_MODULE_78__.Config),
/* harmony export */   "Context": () => (/* reexport safe */ _component_context__WEBPACK_IMPORTED_MODULE_63__.Context),
/* harmony export */   "ContextKeys": () => (/* reexport safe */ _utilities_context_keys__WEBPACK_IMPORTED_MODULE_30__.ContextKeys),
/* harmony export */   "CreateAnimationLoop": () => (/* reexport safe */ _utilities_loop__WEBPACK_IMPORTED_MODULE_37__.CreateAnimationLoop),
/* harmony export */   "CreateChildProxy": () => (/* reexport safe */ _proxy_create_child__WEBPACK_IMPORTED_MODULE_47__.CreateChildProxy),
/* harmony export */   "CreateDirective": () => (/* reexport safe */ _directive_create__WEBPACK_IMPORTED_MODULE_88__.CreateDirective),
/* harmony export */   "CreateDirectiveExpansionRule": () => (/* reexport safe */ _directive_expand__WEBPACK_IMPORTED_MODULE_91__.CreateDirectiveExpansionRule),
/* harmony export */   "CreateDirectiveHandlerCallback": () => (/* reexport safe */ _directive_callback__WEBPACK_IMPORTED_MODULE_87__.CreateDirectiveHandlerCallback),
/* harmony export */   "CreateGlobal": () => (/* reexport safe */ _global_create__WEBPACK_IMPORTED_MODULE_79__.CreateGlobal),
/* harmony export */   "CreateInplaceProxy": () => (/* reexport safe */ _proxy_create__WEBPACK_IMPORTED_MODULE_46__.CreateInplaceProxy),
/* harmony export */   "CreateLoop": () => (/* reexport safe */ _utilities_loop__WEBPACK_IMPORTED_MODULE_37__.CreateLoop),
/* harmony export */   "CreateMagicHandlerCallback": () => (/* reexport safe */ _magic_callback__WEBPACK_IMPORTED_MODULE_102__.CreateMagicHandlerCallback),
/* harmony export */   "CreateReadonlyProxy": () => (/* reexport safe */ _proxy_create__WEBPACK_IMPORTED_MODULE_46__.CreateReadonlyProxy),
/* harmony export */   "DeepCopy": () => (/* reexport safe */ _utilities_deep_copy__WEBPACK_IMPORTED_MODULE_31__.DeepCopy),
/* harmony export */   "DefaultTransitionDelay": () => (/* reexport safe */ _directive_transition__WEBPACK_IMPORTED_MODULE_99__.DefaultTransitionDelay),
/* harmony export */   "DefaultTransitionDuration": () => (/* reexport safe */ _directive_transition__WEBPACK_IMPORTED_MODULE_99__.DefaultTransitionDuration),
/* harmony export */   "DefaultTransitionRepeats": () => (/* reexport safe */ _directive_transition__WEBPACK_IMPORTED_MODULE_99__.DefaultTransitionRepeats),
/* harmony export */   "DeleteProxyProp": () => (/* reexport safe */ _proxy_delete_prop__WEBPACK_IMPORTED_MODULE_48__.DeleteProxyProp),
/* harmony export */   "DirectiveManager": () => (/* reexport safe */ _directive_manager__WEBPACK_IMPORTED_MODULE_96__.DirectiveManager),
/* harmony export */   "DisableProxyAction": () => (/* reexport safe */ _proxy_create__WEBPACK_IMPORTED_MODULE_46__.DisableProxyAction),
/* harmony export */   "DispatchDirective": () => (/* reexport safe */ _directive_dispatch__WEBPACK_IMPORTED_MODULE_89__.DispatchDirective),
/* harmony export */   "ElementScope": () => (/* reexport safe */ _component_element_scope__WEBPACK_IMPORTED_MODULE_66__.ElementScope),
/* harmony export */   "ElementScopeKey": () => (/* reexport safe */ _component_element_scope_id__WEBPACK_IMPORTED_MODULE_67__.ElementScopeKey),
/* harmony export */   "EndsWith": () => (/* reexport safe */ _utilities_ends_with__WEBPACK_IMPORTED_MODULE_32__.EndsWith),
/* harmony export */   "EvaluateLater": () => (/* reexport safe */ _evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_54__.EvaluateLater),
/* harmony export */   "EvaluateMagicProperty": () => (/* reexport safe */ _magic_evaluate__WEBPACK_IMPORTED_MODULE_103__.EvaluateMagicProperty),
/* harmony export */   "ExtractDuration": () => (/* reexport safe */ _directive_options__WEBPACK_IMPORTED_MODULE_97__.ExtractDuration),
/* harmony export */   "FindComponentById": () => (/* reexport safe */ _component_find__WEBPACK_IMPORTED_MODULE_69__.FindComponentById),
/* harmony export */   "FindComponentByName": () => (/* reexport safe */ _component_find__WEBPACK_IMPORTED_MODULE_69__.FindComponentByName),
/* harmony export */   "FindComponentByRoot": () => (/* reexport safe */ _component_find__WEBPACK_IMPORTED_MODULE_69__.FindComponentByRoot),
/* harmony export */   "FlattenDirective": () => (/* reexport safe */ _directive_flatten__WEBPACK_IMPORTED_MODULE_92__.FlattenDirective),
/* harmony export */   "ForwardEvent": () => (/* reexport safe */ _directive_event__WEBPACK_IMPORTED_MODULE_90__.ForwardEvent),
/* harmony export */   "Future": () => (/* reexport safe */ _values_future__WEBPACK_IMPORTED_MODULE_25__.Future),
/* harmony export */   "GenerateFunctionFromString": () => (/* reexport safe */ _evaluator_generate_function__WEBPACK_IMPORTED_MODULE_55__.GenerateFunctionFromString),
/* harmony export */   "GenerateUniqueId": () => (/* reexport safe */ _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_43__.GenerateUniqueId),
/* harmony export */   "GenerateValueReturningFunction": () => (/* reexport safe */ _evaluator_generate_function__WEBPACK_IMPORTED_MODULE_55__.GenerateValueReturningFunction),
/* harmony export */   "GenerateVoidFunction": () => (/* reexport safe */ _evaluator_generate_function__WEBPACK_IMPORTED_MODULE_55__.GenerateVoidFunction),
/* harmony export */   "GenericProxy": () => (/* reexport safe */ _proxy_generic__WEBPACK_IMPORTED_MODULE_49__.GenericProxy),
/* harmony export */   "GetAttribute": () => (/* reexport safe */ _utilities_get_attribute__WEBPACK_IMPORTED_MODULE_33__.GetAttribute),
/* harmony export */   "GetConfig": () => (/* reexport safe */ _component_get_config__WEBPACK_IMPORTED_MODULE_70__.GetConfig),
/* harmony export */   "GetDefaultUniqueMarkers": () => (/* reexport safe */ _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_43__.GetDefaultUniqueMarkers),
/* harmony export */   "GetDirectiveValue": () => (/* reexport safe */ _directive_get_value__WEBPACK_IMPORTED_MODULE_93__.GetDirectiveValue),
/* harmony export */   "GetElementContent": () => (/* reexport safe */ _global_interpolator__WEBPACK_IMPORTED_MODULE_82__.GetElementContent),
/* harmony export */   "GetElementScopeId": () => (/* reexport safe */ _component_element_scope_id__WEBPACK_IMPORTED_MODULE_67__.GetElementScopeId),
/* harmony export */   "GetGlobal": () => (/* reexport safe */ _global_get__WEBPACK_IMPORTED_MODULE_80__.GetGlobal),
/* harmony export */   "GetLocal": () => (/* reexport safe */ _component_get_local__WEBPACK_IMPORTED_MODULE_71__.GetLocal),
/* harmony export */   "GetOrCreateGlobal": () => (/* reexport safe */ _global_create__WEBPACK_IMPORTED_MODULE_79__.GetOrCreateGlobal),
/* harmony export */   "GetProxyProp": () => (/* reexport safe */ _proxy_get_prop__WEBPACK_IMPORTED_MODULE_50__.GetProxyProp),
/* harmony export */   "GetTarget": () => (/* reexport safe */ _utilities_get_target__WEBPACK_IMPORTED_MODULE_34__.GetTarget),
/* harmony export */   "GetTargets": () => (/* reexport safe */ _utilities_get_target__WEBPACK_IMPORTED_MODULE_34__.GetTargets),
/* harmony export */   "GlobalCreatedEvent": () => (/* reexport safe */ _global_get__WEBPACK_IMPORTED_MODULE_80__.GlobalCreatedEvent),
/* harmony export */   "IncrementUniqueMarkers": () => (/* reexport safe */ _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_43__.IncrementUniqueMarkers),
/* harmony export */   "InferComponent": () => (/* reexport safe */ _component_infer__WEBPACK_IMPORTED_MODULE_73__.InferComponent),
/* harmony export */   "InitComponentCache": () => (/* reexport safe */ _component_find__WEBPACK_IMPORTED_MODULE_69__.InitComponentCache),
/* harmony export */   "InitJITProxy": () => (/* reexport safe */ _proxy_jit__WEBPACK_IMPORTED_MODULE_51__.InitJITProxy),
/* harmony export */   "InlineJSGlobalKey": () => (/* reexport safe */ _global_create__WEBPACK_IMPORTED_MODULE_79__.InlineJSGlobalKey),
/* harmony export */   "InsertHtml": () => (/* reexport safe */ _component_insert_html__WEBPACK_IMPORTED_MODULE_74__.InsertHtml),
/* harmony export */   "Interpolate": () => (/* reexport safe */ _global_interpolator__WEBPACK_IMPORTED_MODULE_82__.Interpolate),
/* harmony export */   "InterpolateText": () => (/* reexport safe */ _global_interpolator__WEBPACK_IMPORTED_MODULE_82__.InterpolateText),
/* harmony export */   "IntersectionObserver": () => (/* reexport safe */ _observers_intersection__WEBPACK_IMPORTED_MODULE_109__.IntersectionObserver),
/* harmony export */   "IsEqual": () => (/* reexport safe */ _utilities_is_equal__WEBPACK_IMPORTED_MODULE_35__.IsEqual),
/* harmony export */   "IsObject": () => (/* reexport safe */ _utilities_is_object__WEBPACK_IMPORTED_MODULE_36__.IsObject),
/* harmony export */   "JoinPath": () => (/* reexport safe */ _utilities_path__WEBPACK_IMPORTED_MODULE_38__.JoinPath),
/* harmony export */   "JoinUniqueMarkers": () => (/* reexport safe */ _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_43__.JoinUniqueMarkers),
/* harmony export */   "JournalError": () => (/* reexport safe */ _journal_error__WEBPACK_IMPORTED_MODULE_111__.JournalError),
/* harmony export */   "JournalLog": () => (/* reexport safe */ _journal_log__WEBPACK_IMPORTED_MODULE_112__.JournalLog),
/* harmony export */   "JournalTry": () => (/* reexport safe */ _journal_try__WEBPACK_IMPORTED_MODULE_113__.JournalTry),
/* harmony export */   "JournalWarn": () => (/* reexport safe */ _journal_warn__WEBPACK_IMPORTED_MODULE_114__.JournalWarn),
/* harmony export */   "LazyCheck": () => (/* reexport safe */ _directive_lazy__WEBPACK_IMPORTED_MODULE_95__.LazyCheck),
/* harmony export */   "Loop": () => (/* reexport safe */ _values_loop__WEBPACK_IMPORTED_MODULE_26__.Loop),
/* harmony export */   "MagicManager": () => (/* reexport safe */ _magic_manager__WEBPACK_IMPORTED_MODULE_104__.MagicManager),
/* harmony export */   "MutationObserver": () => (/* reexport safe */ _observers_mutation__WEBPACK_IMPORTED_MODULE_108__.MutationObserver),
/* harmony export */   "NativeFetchConcept": () => (/* reexport safe */ _global_native_fetch__WEBPACK_IMPORTED_MODULE_83__.NativeFetchConcept),
/* harmony export */   "NextTick": () => (/* reexport safe */ _component_next_tick__WEBPACK_IMPORTED_MODULE_75__.NextTick),
/* harmony export */   "Nothing": () => (/* reexport safe */ _values_nothing__WEBPACK_IMPORTED_MODULE_27__.Nothing),
/* harmony export */   "OnDirectiveExpansionRule": () => (/* reexport safe */ _expansion_on__WEBPACK_IMPORTED_MODULE_107__.OnDirectiveExpansionRule),
/* harmony export */   "PathToRelative": () => (/* reexport safe */ _utilities_path__WEBPACK_IMPORTED_MODULE_38__.PathToRelative),
/* harmony export */   "PeekCurrentComponent": () => (/* reexport safe */ _component_current__WEBPACK_IMPORTED_MODULE_64__.PeekCurrentComponent),
/* harmony export */   "PeekCurrentScope": () => (/* reexport safe */ _component_current_scope__WEBPACK_IMPORTED_MODULE_65__.PeekCurrentScope),
/* harmony export */   "PopCurrentComponent": () => (/* reexport safe */ _component_current__WEBPACK_IMPORTED_MODULE_64__.PopCurrentComponent),
/* harmony export */   "PopCurrentScope": () => (/* reexport safe */ _component_current_scope__WEBPACK_IMPORTED_MODULE_65__.PopCurrentScope),
/* harmony export */   "ProcessDirectives": () => (/* reexport safe */ _directive_process__WEBPACK_IMPORTED_MODULE_98__.ProcessDirectives),
/* harmony export */   "ProxyKeys": () => (/* reexport safe */ _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_39__.ProxyKeys),
/* harmony export */   "PushCurrentComponent": () => (/* reexport safe */ _component_current__WEBPACK_IMPORTED_MODULE_64__.PushCurrentComponent),
/* harmony export */   "PushCurrentScope": () => (/* reexport safe */ _component_current_scope__WEBPACK_IMPORTED_MODULE_65__.PushCurrentScope),
/* harmony export */   "QueryGlobalComponent": () => (/* reexport safe */ _component_global__WEBPACK_IMPORTED_MODULE_72__.QueryGlobalComponent),
/* harmony export */   "RemoveDirectiveExpansionRule": () => (/* reexport safe */ _directive_expand__WEBPACK_IMPORTED_MODULE_91__.RemoveDirectiveExpansionRule),
/* harmony export */   "RemoveOutsideEventListener": () => (/* reexport safe */ _component_event__WEBPACK_IMPORTED_MODULE_68__.RemoveOutsideEventListener),
/* harmony export */   "ReplaceText": () => (/* reexport safe */ _global_interpolator__WEBPACK_IMPORTED_MODULE_82__.ReplaceText),
/* harmony export */   "ResolveKeyValue": () => (/* reexport safe */ _directive_key_value__WEBPACK_IMPORTED_MODULE_94__.ResolveKeyValue),
/* harmony export */   "ResolveOptions": () => (/* reexport safe */ _directive_options__WEBPACK_IMPORTED_MODULE_97__.ResolveOptions),
/* harmony export */   "ResolveTransition": () => (/* reexport safe */ _directive_transition__WEBPACK_IMPORTED_MODULE_99__.ResolveTransition),
/* harmony export */   "RootProxy": () => (/* reexport safe */ _proxy_root__WEBPACK_IMPORTED_MODULE_52__.RootProxy),
/* harmony export */   "Scope": () => (/* reexport safe */ _component_scope__WEBPACK_IMPORTED_MODULE_76__.Scope),
/* harmony export */   "SetAttributeUtil": () => (/* reexport safe */ _utilities_set_attribute__WEBPACK_IMPORTED_MODULE_40__.SetAttributeUtil),
/* harmony export */   "SetProxyProp": () => (/* reexport safe */ _proxy_set_prop__WEBPACK_IMPORTED_MODULE_53__.SetProxyProp),
/* harmony export */   "SplitPath": () => (/* reexport safe */ _utilities_path__WEBPACK_IMPORTED_MODULE_38__.SplitPath),
/* harmony export */   "Stack": () => (/* reexport safe */ _stack__WEBPACK_IMPORTED_MODULE_24__.Stack),
/* harmony export */   "StreamData": () => (/* reexport safe */ _evaluator_stream_data__WEBPACK_IMPORTED_MODULE_56__.StreamData),
/* harmony export */   "SubscribeToChanges": () => (/* reexport safe */ _reactive_subscribe__WEBPACK_IMPORTED_MODULE_60__.SubscribeToChanges),
/* harmony export */   "SupportsAttributes": () => (/* reexport safe */ _utilities_supports_attributes__WEBPACK_IMPORTED_MODULE_41__.SupportsAttributes),
/* harmony export */   "TextContentInterpolator": () => (/* reexport safe */ _global_interpolation__WEBPACK_IMPORTED_MODULE_81__.TextContentInterpolator),
/* harmony export */   "TidyPath": () => (/* reexport safe */ _utilities_path__WEBPACK_IMPORTED_MODULE_38__.TidyPath),
/* harmony export */   "ToCamelCase": () => (/* reexport safe */ _utilities_camel_case__WEBPACK_IMPORTED_MODULE_29__.ToCamelCase),
/* harmony export */   "ToString": () => (/* reexport safe */ _utilities_to_string__WEBPACK_IMPORTED_MODULE_42__.ToString),
/* harmony export */   "TraverseDirectives": () => (/* reexport safe */ _directive_traverse__WEBPACK_IMPORTED_MODULE_100__.TraverseDirectives),
/* harmony export */   "UnbindOutsideEvent": () => (/* reexport safe */ _component_event__WEBPACK_IMPORTED_MODULE_68__.UnbindOutsideEvent),
/* harmony export */   "UseEffect": () => (/* reexport safe */ _reactive_effect__WEBPACK_IMPORTED_MODULE_59__.UseEffect),
/* harmony export */   "WaitForGlobal": () => (/* reexport safe */ _global_get__WEBPACK_IMPORTED_MODULE_80__.WaitForGlobal),
/* harmony export */   "WaitPromise": () => (/* reexport safe */ _evaluator_wait_promise__WEBPACK_IMPORTED_MODULE_57__.WaitPromise),
/* harmony export */   "WaitTransition": () => (/* reexport safe */ _directive_transition__WEBPACK_IMPORTED_MODULE_99__.WaitTransition),
/* harmony export */   "WaitWhile": () => (/* reexport safe */ _evaluator_wait_while__WEBPACK_IMPORTED_MODULE_58__.WaitWhile)
/* harmony export */ });
/* harmony import */ var _types_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/alert */ "./node_modules/@benbraide/inlinejs/lib/esm/types/alert.js");
/* harmony import */ var _types_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/animation */ "./node_modules/@benbraide/inlinejs/lib/esm/types/animation.js");
/* harmony import */ var _types_change__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/change */ "./node_modules/@benbraide/inlinejs/lib/esm/types/change.js");
/* harmony import */ var _types_changes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/changes */ "./node_modules/@benbraide/inlinejs/lib/esm/types/changes.js");
/* harmony import */ var _types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/component */ "./node_modules/@benbraide/inlinejs/lib/esm/types/component.js");
/* harmony import */ var _types_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/config */ "./node_modules/@benbraide/inlinejs/lib/esm/types/config.js");
/* harmony import */ var _types_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/context */ "./node_modules/@benbraide/inlinejs/lib/esm/types/context.js");
/* harmony import */ var _types_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/directive */ "./node_modules/@benbraide/inlinejs/lib/esm/types/directive.js");
/* harmony import */ var _types_element_scope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/element-scope */ "./node_modules/@benbraide/inlinejs/lib/esm/types/element-scope.js");
/* harmony import */ var _types_evaluate_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/evaluate-options */ "./node_modules/@benbraide/inlinejs/lib/esm/types/evaluate-options.js");
/* harmony import */ var _types_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types/fetch */ "./node_modules/@benbraide/inlinejs/lib/esm/types/fetch.js");
/* harmony import */ var _types_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types/global */ "./node_modules/@benbraide/inlinejs/lib/esm/types/global.js");
/* harmony import */ var _types_intersection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./types/intersection */ "./node_modules/@benbraide/inlinejs/lib/esm/types/intersection.js");
/* harmony import */ var _types_magic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types/magic */ "./node_modules/@benbraide/inlinejs/lib/esm/types/magic.js");
/* harmony import */ var _types_mutation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./types/mutation */ "./node_modules/@benbraide/inlinejs/lib/esm/types/mutation.js");
/* harmony import */ var _types_path__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./types/path */ "./node_modules/@benbraide/inlinejs/lib/esm/types/path.js");
/* harmony import */ var _types_process__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./types/process */ "./node_modules/@benbraide/inlinejs/lib/esm/types/process.js");
/* harmony import */ var _types_proxy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./types/proxy */ "./node_modules/@benbraide/inlinejs/lib/esm/types/proxy.js");
/* harmony import */ var _types_resource__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./types/resource */ "./node_modules/@benbraide/inlinejs/lib/esm/types/resource.js");
/* harmony import */ var _types_root_element__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./types/root-element */ "./node_modules/@benbraide/inlinejs/lib/esm/types/root-element.js");
/* harmony import */ var _types_scope__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./types/scope */ "./node_modules/@benbraide/inlinejs/lib/esm/types/scope.js");
/* harmony import */ var _types_selection__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./types/selection */ "./node_modules/@benbraide/inlinejs/lib/esm/types/selection.js");
/* harmony import */ var _types_stack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./types/stack */ "./node_modules/@benbraide/inlinejs/lib/esm/types/stack.js");
/* harmony import */ var _types_unique_markers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./types/unique-markers */ "./node_modules/@benbraide/inlinejs/lib/esm/types/unique-markers.js");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./stack */ "./node_modules/@benbraide/inlinejs/lib/esm/stack.js");
/* harmony import */ var _values_future__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./values/future */ "./node_modules/@benbraide/inlinejs/lib/esm/values/future.js");
/* harmony import */ var _values_loop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./values/loop */ "./node_modules/@benbraide/inlinejs/lib/esm/values/loop.js");
/* harmony import */ var _values_nothing__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./values/nothing */ "./node_modules/@benbraide/inlinejs/lib/esm/values/nothing.js");
/* harmony import */ var _utilities_begins_with__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utilities/begins-with */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/begins-with.js");
/* harmony import */ var _utilities_camel_case__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utilities/camel-case */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/camel-case.js");
/* harmony import */ var _utilities_context_keys__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utilities/context-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/context-keys.js");
/* harmony import */ var _utilities_deep_copy__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./utilities/deep-copy */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/deep-copy.js");
/* harmony import */ var _utilities_ends_with__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./utilities/ends-with */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/ends-with.js");
/* harmony import */ var _utilities_get_attribute__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utilities/get-attribute */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-attribute.js");
/* harmony import */ var _utilities_get_target__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utilities/get-target */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js");
/* harmony import */ var _utilities_is_equal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./utilities/is-equal */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-equal.js");
/* harmony import */ var _utilities_is_object__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./utilities/is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");
/* harmony import */ var _utilities_loop__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./utilities/loop */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/loop.js");
/* harmony import */ var _utilities_path__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./utilities/path */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/path.js");
/* harmony import */ var _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./utilities/proxy-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/proxy-keys.js");
/* harmony import */ var _utilities_set_attribute__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./utilities/set-attribute */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/set-attribute.js");
/* harmony import */ var _utilities_supports_attributes__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./utilities/supports-attributes */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/supports-attributes.js");
/* harmony import */ var _utilities_to_string__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./utilities/to-string */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/to-string.js");
/* harmony import */ var _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./utilities/unique-markers */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/unique-markers.js");
/* harmony import */ var _proxy_add_changes__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./proxy/add-changes */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/add-changes.js");
/* harmony import */ var _proxy_child__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./proxy/child */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/child.js");
/* harmony import */ var _proxy_create__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./proxy/create */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/create.js");
/* harmony import */ var _proxy_create_child__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./proxy/create-child */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/create-child.js");
/* harmony import */ var _proxy_delete_prop__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./proxy/delete-prop */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/delete-prop.js");
/* harmony import */ var _proxy_generic__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./proxy/generic */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/generic.js");
/* harmony import */ var _proxy_get_prop__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./proxy/get-prop */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/get-prop.js");
/* harmony import */ var _proxy_jit__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./proxy/jit */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/jit.js");
/* harmony import */ var _proxy_root__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./proxy/root */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/root.js");
/* harmony import */ var _proxy_set_prop__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./proxy/set-prop */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/set-prop.js");
/* harmony import */ var _evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./evaluator/evaluate-later */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/evaluate-later.js");
/* harmony import */ var _evaluator_generate_function__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./evaluator/generate-function */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/generate-function.js");
/* harmony import */ var _evaluator_stream_data__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./evaluator/stream-data */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/stream-data.js");
/* harmony import */ var _evaluator_wait_promise__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./evaluator/wait-promise */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-promise.js");
/* harmony import */ var _evaluator_wait_while__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./evaluator/wait-while */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/wait-while.js");
/* harmony import */ var _reactive_effect__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./reactive/effect */ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/effect.js");
/* harmony import */ var _reactive_subscribe__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./reactive/subscribe */ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/subscribe.js");
/* harmony import */ var _component_base__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./component/base */ "./node_modules/@benbraide/inlinejs/lib/esm/component/base.js");
/* harmony import */ var _component_changes__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./component/changes */ "./node_modules/@benbraide/inlinejs/lib/esm/component/changes.js");
/* harmony import */ var _component_context__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./component/context */ "./node_modules/@benbraide/inlinejs/lib/esm/component/context.js");
/* harmony import */ var _component_current__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./component/current */ "./node_modules/@benbraide/inlinejs/lib/esm/component/current.js");
/* harmony import */ var _component_current_scope__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./component/current-scope */ "./node_modules/@benbraide/inlinejs/lib/esm/component/current-scope.js");
/* harmony import */ var _component_element_scope__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./component/element-scope */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope.js");
/* harmony import */ var _component_element_scope_id__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./component/element-scope-id */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js");
/* harmony import */ var _component_event__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./component/event */ "./node_modules/@benbraide/inlinejs/lib/esm/component/event.js");
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _component_get_config__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./component/get-config */ "./node_modules/@benbraide/inlinejs/lib/esm/component/get-config.js");
/* harmony import */ var _component_get_local__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./component/get-local */ "./node_modules/@benbraide/inlinejs/lib/esm/component/get-local.js");
/* harmony import */ var _component_global__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./component/global */ "./node_modules/@benbraide/inlinejs/lib/esm/component/global.js");
/* harmony import */ var _component_infer__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./component/infer */ "./node_modules/@benbraide/inlinejs/lib/esm/component/infer.js");
/* harmony import */ var _component_insert_html__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./component/insert-html */ "./node_modules/@benbraide/inlinejs/lib/esm/component/insert-html.js");
/* harmony import */ var _component_next_tick__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./component/next-tick */ "./node_modules/@benbraide/inlinejs/lib/esm/component/next-tick.js");
/* harmony import */ var _component_scope__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./component/scope */ "./node_modules/@benbraide/inlinejs/lib/esm/component/scope.js");
/* harmony import */ var _global_base__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./global/base */ "./node_modules/@benbraide/inlinejs/lib/esm/global/base.js");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./global/config */ "./node_modules/@benbraide/inlinejs/lib/esm/global/config.js");
/* harmony import */ var _global_create__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./global/create */ "./node_modules/@benbraide/inlinejs/lib/esm/global/create.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _global_interpolation__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./global/interpolation */ "./node_modules/@benbraide/inlinejs/lib/esm/global/interpolation.js");
/* harmony import */ var _global_interpolator__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./global/interpolator */ "./node_modules/@benbraide/inlinejs/lib/esm/global/interpolator.js");
/* harmony import */ var _global_native_fetch__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./global/native-fetch */ "./node_modules/@benbraide/inlinejs/lib/esm/global/native-fetch.js");
/* harmony import */ var _bootstrap_attach__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./bootstrap/attach */ "./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/attach.js");
/* harmony import */ var _bootstrap_auto__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./bootstrap/auto */ "./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/auto.js");
/* harmony import */ var _directive_add__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./directive/add */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/add.js");
/* harmony import */ var _directive_callback__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./directive/callback */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/callback.js");
/* harmony import */ var _directive_create__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./directive/create */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/create.js");
/* harmony import */ var _directive_dispatch__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./directive/dispatch */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/dispatch.js");
/* harmony import */ var _directive_event__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./directive/event */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/event.js");
/* harmony import */ var _directive_expand__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./directive/expand */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/expand.js");
/* harmony import */ var _directive_flatten__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./directive/flatten */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/flatten.js");
/* harmony import */ var _directive_get_value__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./directive/get-value */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/get-value.js");
/* harmony import */ var _directive_key_value__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./directive/key-value */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/key-value.js");
/* harmony import */ var _directive_lazy__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./directive/lazy */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/lazy.js");
/* harmony import */ var _directive_manager__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./directive/manager */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/manager.js");
/* harmony import */ var _directive_options__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./directive/options */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/options.js");
/* harmony import */ var _directive_process__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./directive/process */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/process.js");
/* harmony import */ var _directive_transition__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./directive/transition */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/transition.js");
/* harmony import */ var _directive_traverse__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./directive/traverse */ "./node_modules/@benbraide/inlinejs/lib/esm/directive/traverse.js");
/* harmony import */ var _magic_add__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./magic/add */ "./node_modules/@benbraide/inlinejs/lib/esm/magic/add.js");
/* harmony import */ var _magic_callback__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./magic/callback */ "./node_modules/@benbraide/inlinejs/lib/esm/magic/callback.js");
/* harmony import */ var _magic_evaluate__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./magic/evaluate */ "./node_modules/@benbraide/inlinejs/lib/esm/magic/evaluate.js");
/* harmony import */ var _magic_manager__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./magic/manager */ "./node_modules/@benbraide/inlinejs/lib/esm/magic/manager.js");
/* harmony import */ var _expansion_bind__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./expansion/bind */ "./node_modules/@benbraide/inlinejs/lib/esm/expansion/bind.js");
/* harmony import */ var _expansion_class__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./expansion/class */ "./node_modules/@benbraide/inlinejs/lib/esm/expansion/class.js");
/* harmony import */ var _expansion_on__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./expansion/on */ "./node_modules/@benbraide/inlinejs/lib/esm/expansion/on.js");
/* harmony import */ var _observers_mutation__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./observers/mutation */ "./node_modules/@benbraide/inlinejs/lib/esm/observers/mutation.js");
/* harmony import */ var _observers_intersection__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./observers/intersection */ "./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection.js");
/* harmony import */ var _observers_intersection_options__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./observers/intersection-options */ "./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection-options.js");
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _journal_log__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./journal/log */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/log.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _journal_warn__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./journal/warn */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/warn.js");





















































































































/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalError": () => (/* binding */ JournalError)
/* harmony export */ });
function JournalError(message, context, contextElement) {
    console.error({
        message: message,
        context: (context || 'N/A'),
        contextElement: (contextElement || 'N/A'),
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/journal/log.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/journal/log.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalLog": () => (/* binding */ JournalLog)
/* harmony export */ });
function JournalLog(message, context, contextElement) {
    console.log({
        message: message,
        context: (context || 'N/A'),
        contextElement: (contextElement || 'N/A'),
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalTry": () => (/* binding */ JournalTry)
/* harmony export */ });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");

function JournalTry(callback, context, contextElement) {
    try {
        return callback();
    }
    catch (err) {
        (0,_error__WEBPACK_IMPORTED_MODULE_0__.JournalError)(err, context, contextElement);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/journal/warn.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/journal/warn.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalWarn": () => (/* binding */ JournalWarn)
/* harmony export */ });
function JournalWarn(message, context, contextElement) {
    console.warn({
        message: message,
        context: (context || 'N/A'),
        contextElement: (contextElement || 'N/A'),
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/magic/add.js":
/*!***************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/magic/add.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMagicHandler": () => (/* binding */ AddMagicHandler)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _utilities_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");


function AddMagicHandler(handler) {
    let name = '', callback = null, onAccess = undefined;
    if (typeof handler === 'function') {
        let response = handler();
        if (!response) { //Query name and callback
            name = handler('name');
            callback = handler('callback');
            onAccess = handler('access');
        }
        else { //Details returned
            ({ name, callback, onAccess } = response);
        }
    }
    else if ((0,_utilities_is_object__WEBPACK_IMPORTED_MODULE_1__.IsObject)(handler)) { //Details provided
        ({ name, callback, onAccess } = handler);
    }
    else { //Instance provided
        (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetMagicManager().AddHandler(handler);
    }
    if (name && callback) {
        (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().GetMagicManager().AddHandler(callback, name, onAccess);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/magic/callback.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/magic/callback.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMagicHandlerCallback": () => (/* binding */ CreateMagicHandlerCallback)
/* harmony export */ });
function CreateMagicHandlerCallback(name, callback, onAccess) {
    return { name, callback, onAccess };
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/magic/evaluate.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/magic/evaluate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluateMagicProperty": () => (/* binding */ EvaluateMagicProperty)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _component_infer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/infer */ "./node_modules/@benbraide/inlinejs/lib/esm/component/infer.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");





function EvaluateMagicProperty(component, contextElement, name, prefix = '', checkExternal = true) {
    let resolvedComponent = ((typeof component === 'string') ? (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(component) : component);
    if (!resolvedComponent) {
        (0,_journal_error__WEBPACK_IMPORTED_MODULE_3__.JournalError)(`Failed to find component for '$${name}'`, 'InlineJS.EvaluateMagicProperty', contextElement);
        return (0,_global_get__WEBPACK_IMPORTED_MODULE_2__.GetGlobal)().CreateNothing();
    }
    let handler = (0,_global_get__WEBPACK_IMPORTED_MODULE_2__.GetGlobal)().GetMagicManager().FindHandler((prefix && name.startsWith(prefix)) ? name.substring(prefix.length) : name, { contextElement,
        componentId: resolvedComponent.GetId(),
        component: resolvedComponent,
    }); //Find handler and report access
    if (!handler) {
        if (checkExternal && prefix && name.startsWith(`${prefix}${prefix}`)) { //External access
            let componentId = resolvedComponent.GetId();
            return (target) => {
                let component = ((0,_component_infer__WEBPACK_IMPORTED_MODULE_1__.InferComponent)(target) || (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId));
                if (!component) {
                    return null;
                }
                let elementScope = component.FindElementScope(target), local = (elementScope && elementScope.GetLocal(name.substring(prefix.length)));
                if (elementScope && !(0,_global_get__WEBPACK_IMPORTED_MODULE_2__.GetGlobal)().IsNothing(local)) { //Prioritize local value
                    return local;
                }
                return EvaluateMagicProperty(component.GetId(), target, name, `${prefix}${prefix}`, false);
            };
        }
        return (0,_global_get__WEBPACK_IMPORTED_MODULE_2__.GetGlobal)().CreateNothing();
    }
    return (0,_journal_try__WEBPACK_IMPORTED_MODULE_4__.JournalTry)(() => {
        return handler({
            componentId: resolvedComponent.GetId(),
            component: resolvedComponent,
            contextElement: contextElement,
        });
    }, 'InlineJS.EvaluateMagicProperty', contextElement);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/magic/manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/magic/manager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagicManager": () => (/* binding */ MagicManager)
/* harmony export */ });
class MagicManager {
    constructor() {
        this.handlers_ = {};
    }
    AddHandler(handler, name, onAccess) {
        let computedName = '', callback = null;
        if (typeof handler === 'function') {
            computedName = (name || '');
            callback = handler;
        }
        else { //Instance specified
            computedName = handler.GetName();
            callback = (params) => handler.Handle(params);
        }
        if (computedName && callback) {
            this.handlers_[computedName] = { callback, onAccess };
        }
    }
    RemoveHandler(name) {
        if (name in this.handlers_) {
            delete this.handlers_[name];
        }
    }
    FindHandler(name, accessParams) {
        if (!(name in this.handlers_)) {
            return null;
        }
        if (accessParams && this.handlers_[name].onAccess) {
            this.handlers_[name].onAccess(accessParams);
        }
        return this.handlers_[name].callback;
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildIntersectionOptions": () => (/* binding */ BuildIntersectionOptions)
/* harmony export */ });
/* harmony import */ var _utilities_is_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");

const IntersectionThresholds = Array.from(Array(100).keys()).map(i => (i / 100));
function BuildIntersectionOptions(data) {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    };
    if ((0,_utilities_is_object__WEBPACK_IMPORTED_MODULE_0__.IsObject)(data)) { //Overwrite applicable options
        Object.entries(options).forEach(([key, value]) => (options[key] = ((key in data && data[key]) || value)));
    }
    if (data.spread) {
        options.threshold = IntersectionThresholds;
    }
    return options;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionObserver": () => (/* binding */ IntersectionObserver)
/* harmony export */ });
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _intersection_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intersection-options */ "./node_modules/@benbraide/inlinejs/lib/esm/observers/intersection-options.js");


class IntersectionObserver {
    constructor(id_, options) {
        this.id_ = id_;
        this.observer_ = null;
        this.handlers_ = new Array();
        let id = this.id_;
        this.observer_ = new globalThis.IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                this.handlers_.filter(({ target }) => (target === entry.target)).forEach((info) => {
                    (0,_journal_try__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => info.handler({ entry, id, observer }), 'InlineJS.IntersectionObserver');
                });
            });
        }, (0,_intersection_options__WEBPACK_IMPORTED_MODULE_1__.BuildIntersectionOptions)(options));
    }
    GetId() {
        return this.id_;
    }
    GetNative() {
        return this.observer_;
    }
    Observe(target, handler) {
        var _a;
        this.handlers_.push({ target, handler });
        (_a = this.observer_) === null || _a === void 0 ? void 0 : _a.observe(target);
    }
    Unobserve(target) {
        var _a;
        this.handlers_ = this.handlers_.filter(info => (info.target === target));
        (_a = this.observer_) === null || _a === void 0 ? void 0 : _a.unobserve(target);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/observers/mutation.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/observers/mutation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserver": () => (/* binding */ MutationObserver)
/* harmony export */ });
/* harmony import */ var _component_element_scope_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/element-scope-id */ "./node_modules/@benbraide/inlinejs/lib/esm/component/element-scope-id.js");
/* harmony import */ var _component_infer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/infer */ "./node_modules/@benbraide/inlinejs/lib/esm/component/infer.js");
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _utilities_unique_markers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/unique-markers */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/unique-markers.js");




class MutationObserver {
    constructor() {
        this.uniqueMarkers_ = (0,_utilities_unique_markers__WEBPACK_IMPORTED_MODULE_3__.GetDefaultUniqueMarkers)();
        this.observer_ = null;
        this.handlers_ = {};
        if (globalThis.MutationObserver) {
            try {
                this.observer_ = new globalThis.MutationObserver((entries) => {
                    let mutations = {}, getInfo = (key) => {
                        return (mutations[key] = mutations[key] || {
                            added: new Array(),
                            removed: new Array(),
                            attributes: new Array(),
                        });
                    };
                    entries.forEach((entry) => {
                        var _a, _b;
                        if ((entry === null || entry === void 0 ? void 0 : entry.type) === 'childList') {
                            let pushRemovedNode = (node) => {
                                var _a;
                                let key = (0,_component_element_scope_id__WEBPACK_IMPORTED_MODULE_0__.GetElementScopeId)(((_a = (0,_component_infer__WEBPACK_IMPORTED_MODULE_1__.InferComponent)(node)) === null || _a === void 0 ? void 0 : _a.GetRoot()) || null);
                                if (key) {
                                    getInfo(key).removed.push(node);
                                }
                                else { //Try children
                                    Array.from(node.childNodes).filter(child => !child.contains(node)).forEach(pushRemovedNode);
                                }
                            };
                            entry.removedNodes.forEach(pushRemovedNode);
                            let key = ((entry.target instanceof HTMLElement) ? (0,_component_element_scope_id__WEBPACK_IMPORTED_MODULE_0__.GetElementScopeId)(((_a = (0,_component_infer__WEBPACK_IMPORTED_MODULE_1__.InferComponent)(entry.target)) === null || _a === void 0 ? void 0 : _a.GetRoot()) || null) : '');
                            if (key) {
                                getInfo(key).added.push(...Array.from(entry.addedNodes));
                            }
                        }
                        else if ((entry === null || entry === void 0 ? void 0 : entry.type) === 'attributes' && entry.attributeName) {
                            let key = ((entry.target instanceof HTMLElement) ? (0,_component_element_scope_id__WEBPACK_IMPORTED_MODULE_0__.GetElementScopeId)(((_b = (0,_component_infer__WEBPACK_IMPORTED_MODULE_1__.InferComponent)(entry.target)) === null || _b === void 0 ? void 0 : _b.GetRoot()) || null) : '');
                            if (key) {
                                getInfo(key).attributes.push({
                                    name: entry.attributeName,
                                    target: entry.target,
                                });
                            }
                        }
                    });
                    if (Object.keys(mutations).length == 0) {
                        return;
                    }
                    Object.entries(this.handlers_).forEach(([id, info]) => {
                        let key = ((info.target instanceof HTMLElement) ? (0,_component_element_scope_id__WEBPACK_IMPORTED_MODULE_0__.GetElementScopeId)(info.target) : '');
                        if (!key || !(key in mutations)) {
                            return;
                        }
                        let getList = (type, info, list) => {
                            return ((!info.whitelist || info.whitelist.includes(type)) ? list : undefined);
                        };
                        let added = getList('add', info, mutations[key].added), removed = getList('remove', info, mutations[key].removed);
                        let attributes = getList('attribute', info, mutations[key].attributes);
                        if (added || removed || attributes) {
                            (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(() => info.handler({ id, added, removed, attributes }), 'InlineJS.MutationObserver');
                        }
                    });
                });
                this.observer_.observe(document, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    characterData: false,
                });
            }
            catch (_a) {
                this.observer_ = null;
            }
        }
    }
    GetNative() {
        return this.observer_;
    }
    Observe(target, handler, whitelist) {
        let id = (0,_utilities_unique_markers__WEBPACK_IMPORTED_MODULE_3__.GenerateUniqueId)(this.uniqueMarkers_);
        this.handlers_[id] = { target, handler, whitelist };
        return id;
    }
    Unobserve(target) {
        if (typeof target !== 'string') {
            Object.entries(this.handlers_).filter(([key, info]) => (info.target === target)).forEach(([key]) => (delete this.handlers_[key]));
        }
        else { //Remove by ID
            delete this.handlers_[target];
        }
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/add-changes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/add-changes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddChanges": () => (/* binding */ AddChanges)
/* harmony export */ });
function AddChanges(type, path, prop, changes, shouldBubble = true) {
    if (!changes) {
        return;
    }
    let change = {
        componentId: changes.GetComponentId(),
        type: type,
        path: path,
        prop: prop,
        origin: changes.PeekOrigin(),
    };
    changes.Add(change);
    if (!shouldBubble) {
        return;
    }
    let parts = path.split('.');
    while (parts.length > 2) { //Skip root
        parts.pop();
        changes.Add({
            original: change,
            path: parts.join('.'),
        });
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/child.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/child.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildProxy": () => (/* binding */ ChildProxy)
/* harmony export */ });
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/generic.js");

class ChildProxy extends _generic__WEBPACK_IMPORTED_MODULE_0__.GenericProxy {
    constructor(owner, name, target) {
        super(owner.GetComponentId(), target, name, owner);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/create-child.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/create-child.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateChildProxy": () => (/* binding */ CreateChildProxy)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _utilities_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");


function CreateChildProxy(owner, name, target, component) {
    if (!owner) {
        return null;
    }
    let child = owner.FindChild(name);
    if (child) {
        return child;
    }
    if ((!Array.isArray(target) && !(0,_utilities_is_object__WEBPACK_IMPORTED_MODULE_1__.IsObject)(target))) {
        return null;
    }
    let proxy = (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().CreateChildProxy(owner, name, target);
    if (component) { //Register to component
        component.AddProxy(proxy);
    }
    return proxy;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/create.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/create.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildGetterProxyOptions": () => (/* binding */ BuildGetterProxyOptions),
/* harmony export */   "BuildProxyOptions": () => (/* binding */ BuildProxyOptions),
/* harmony export */   "CreateInplaceProxy": () => (/* binding */ CreateInplaceProxy),
/* harmony export */   "CreateReadonlyProxy": () => (/* binding */ CreateReadonlyProxy),
/* harmony export */   "DisableProxyAction": () => (/* binding */ DisableProxyAction)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


function CreateInplaceProxy({ target, getter, setter, deleter, lookup, alert }) {
    let handler = {
        get(target, prop) {
            var _a;
            if (typeof prop === 'symbol' || (typeof prop === 'string' && prop === 'prototype')) {
                return Reflect.get(target, prop);
            }
            let value = (getter ? getter(prop.toString(), target) : target[prop]);
            if (!(0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().IsNothing(value)) {
                if (alert && (!alert.list || prop in alert.list)) {
                    (_a = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(alert.componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${alert.id}.${prop}`);
                }
                return value;
            }
            return Reflect.get(target, prop);
        },
        set(target, prop, value) {
            if (typeof prop === 'symbol' || (typeof prop === 'string' && prop === 'prototype')) {
                return Reflect.set(target, prop, value);
            }
            return (setter ? (setter(prop.toString(), value, target) !== false) : (!!target[prop] || true));
        },
        deleteProperty(target, prop) {
            if (typeof prop === 'symbol' || (typeof prop === 'string' && prop === 'prototype')) {
                return Reflect.deleteProperty(target, prop);
            }
            return (deleter ? (deleter(prop.toString(), target) !== false) : (!!(delete target[prop]) || true));
        },
        has(target, prop) {
            if (Reflect.has(target, prop)) {
                return true;
            }
            if (Array.isArray(lookup)) {
                return lookup.includes(prop.toString());
            }
            return (lookup ? lookup(prop.toString(), target) : (prop in target));
        }
    };
    return new window.Proxy((target || {}), handler);
}
function CreateReadonlyProxy(target) {
    return CreateInplaceProxy(BuildGetterProxyOptions({ getter: prop => ((prop && prop in target && target[prop]) || null), lookup: [...Object.keys(target)] }));
}
function DisableProxyAction() {
    return false;
}
function BuildProxyOptions(_a) {
    var { setter, deleter, lookup } = _a, rest = __rest(_a, ["setter", "deleter", "lookup"]);
    return Object.assign(Object.assign({}, rest), { setter: (setter || DisableProxyAction), deleter: (deleter || DisableProxyAction), lookup: (lookup || DisableProxyAction) });
}
function BuildGetterProxyOptions(options) {
    return BuildProxyOptions(options);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/delete-prop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/delete-prop.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProxyProp": () => (/* binding */ DeleteProxyProp)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _add_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-changes */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/add-changes.js");


function DeleteProxyProp(componentId, target, path, prop) {
    var _a;
    let exists = (prop in target);
    if (!exists) {
        return false;
    }
    let component = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId);
    (_a = component === null || component === void 0 ? void 0 : component.FindProxy(path)) === null || _a === void 0 ? void 0 : _a.RemoveChild(prop); //Remove previous child proxy, if any
    delete target[prop];
    component === null || component === void 0 ? void 0 : component.RemoveProxy(`${path}.${prop}`);
    (0,_add_changes__WEBPACK_IMPORTED_MODULE_1__.AddChanges)('delete', path, prop, component === null || component === void 0 ? void 0 : component.GetBackend().changes);
    return true;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/generic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/generic.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericProxy": () => (/* binding */ GenericProxy)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _magic_evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../magic/evaluate */ "./node_modules/@benbraide/inlinejs/lib/esm/magic/evaluate.js");
/* harmony import */ var _utilities_context_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/context-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/context-keys.js");
/* harmony import */ var _delete_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-prop */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/delete-prop.js");
/* harmony import */ var _get_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-prop */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/get-prop.js");
/* harmony import */ var _set_prop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-prop */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/set-prop.js");






class GenericProxy {
    constructor(componentId_, target_, name_, parent) {
        this.componentId_ = componentId_;
        this.target_ = target_;
        this.name_ = name_;
        this.native_ = null;
        this.children_ = {};
        this.parentPath_ = ((parent === null || parent === void 0 ? void 0 : parent.GetPath()) || '');
        parent === null || parent === void 0 ? void 0 : parent.AddChild(this);
        let componentId = this.componentId_, path = this.GetPath(), noResultHandler = (component, prop) => {
            let { context } = component === null || component === void 0 ? void 0 : component.GetBackend(), isMagic = prop === null || prop === void 0 ? void 0 : prop.startsWith('$');
            if (isMagic) {
                let value = context.Peek(prop.substring(1), (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().CreateNothing());
                if (!(0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(value)) {
                    return value;
                }
            }
            let contextElement = context.Peek(_utilities_context_keys__WEBPACK_IMPORTED_MODULE_2__.ContextKeys.self), localValue = component === null || component === void 0 ? void 0 : component.FindElementLocalValue((contextElement || component.GetRoot()), prop, true);
            if (!(0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(localValue)) {
                return localValue;
            }
            let result = (isMagic ? (0,_magic_evaluate__WEBPACK_IMPORTED_MODULE_1__.EvaluateMagicProperty)(component, contextElement, prop, '$') : (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().CreateNothing());
            if ((0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(result) && prop && prop in globalThis) {
                result = globalThis[prop];
            }
            return result;
        };
        let isRoot = !this.parentPath_, handler = {
            get(target, prop) {
                if (typeof prop === 'symbol' || prop === 'prototype') {
                    return Reflect.get(target, prop);
                }
                return (0,_get_prop__WEBPACK_IMPORTED_MODULE_4__.GetProxyProp)(componentId, target, path, prop.toString(), (isRoot ? noResultHandler : undefined));
            },
            set(target, prop, value) {
                if (typeof prop === 'symbol' || prop === 'prototype') {
                    return Reflect.set(target, prop, value);
                }
                return (0,_set_prop__WEBPACK_IMPORTED_MODULE_5__.SetProxyProp)(componentId, target, path, prop.toString(), value);
            },
            deleteProperty(target, prop) {
                if (typeof prop === 'symbol' || prop === 'prototype') {
                    return Reflect.get(target, prop);
                }
                return (0,_delete_prop__WEBPACK_IMPORTED_MODULE_3__.DeleteProxyProp)(componentId, target, path, prop.toString());
            },
            has(target, prop) {
                return (typeof prop !== 'symbol' || Reflect.has(target, prop));
            },
        };
        this.native_ = new window.Proxy(this.target_, handler);
    }
    IsRoot() {
        return !this.parentPath_;
    }
    GetComponentId() {
        return this.componentId_;
    }
    GetTarget() {
        return this.target_;
    }
    GetNative() {
        return this.native_;
    }
    GetName() {
        return this.name_;
    }
    GetPath() {
        return (this.parentPath_ ? `${this.parentPath_}.${this.name_}` : this.name_);
    }
    GetParentPath() {
        return this.parentPath_;
    }
    AddChild(child) {
        this.children_[child.GetName()] = child;
    }
    RemoveChild(child) {
        delete this.children_[((typeof child === 'string') ? child : child.GetName())];
    }
    FindChild(name) {
        return (this.children_.hasOwnProperty(name) ? this.children_[name] : null);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/get-prop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/get-prop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetProxyProp": () => (/* binding */ GetProxyProp)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/proxy-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/proxy-keys.js");
/* harmony import */ var _create_child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-child */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/create-child.js");




function GetProxyProp(componentId, target, path, prop, noResultHandler) {
    var _a;
    if (prop === _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_2__.ProxyKeys.target) {
        return target;
    }
    if (prop === _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_2__.ProxyKeys.componentId) {
        return componentId;
    }
    if (prop === _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_2__.ProxyKeys.name) {
        return path.split('.').at(-1);
    }
    if (prop === _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_2__.ProxyKeys.path) {
        return path;
    }
    if (prop === _utilities_proxy_keys__WEBPACK_IMPORTED_MODULE_2__.ProxyKeys.parentPath) {
        return (path.split('.').slice(0, -1).join('.') || '');
    }
    let exists = (prop in target);
    if (!exists && noResultHandler) {
        let value = noResultHandler(((0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId) || undefined), prop);
        if (!(0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().IsNothing(value)) {
            return ((0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().IsFuture(value) ? value.Get() : value);
        }
    }
    if (exists && !target.hasOwnProperty(prop)) { //Prop not in this instance
        return target[prop];
    }
    let value = (exists ? target[prop] : null);
    if ((0,_global_get__WEBPACK_IMPORTED_MODULE_1__.GetGlobal)().IsFuture(value)) { //No proxy representation
        return value.Get();
    }
    let component = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId);
    component === null || component === void 0 ? void 0 : component.GetBackend().changes.AddGetAccess(`${path}.${prop}`); //Alert GET access
    return (((_a = (0,_create_child__WEBPACK_IMPORTED_MODULE_3__.CreateChildProxy)(((component === null || component === void 0 ? void 0 : component.FindProxy(path)) || null), prop, value, (component || undefined))) === null || _a === void 0 ? void 0 : _a.GetNative()) || value);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/jit.js":
/*!***************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/jit.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitJITProxy": () => (/* binding */ InitJITProxy)
/* harmony export */ });
const InlineJS_JITProxy_Key = 'InlineJS_ProxyGlobal';
function GetJITProxyGlobalBlock() {
    return (globalThis[InlineJS_JITProxy_Key] = (globalThis[InlineJS_JITProxy_Key] || {}));
}
function InitJITProxy(key, component, element) {
    let elementScope = component === null || component === void 0 ? void 0 : component.FindElementScope(element), elementKey = elementScope === null || elementScope === void 0 ? void 0 : elementScope.GetId();
    if (!elementKey) {
        return ['', null, null];
    }
    let global = GetJITProxyGlobalBlock(), scope = (global[key] = (global[key] || {}));
    if (elementKey in scope) {
        return [elementKey, scope[elementKey], scope];
    }
    elementScope === null || elementScope === void 0 ? void 0 : elementScope.AddUninitCallback(() => (delete scope[elementKey]));
    return [elementKey, null, scope];
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/root.js":
/*!****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/root.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootProxy": () => (/* binding */ RootProxy)
/* harmony export */ });
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/generic.js");

class RootProxy extends _generic__WEBPACK_IMPORTED_MODULE_0__.GenericProxy {
    constructor(componentId, target) {
        super(componentId, target, `Proxy<${componentId}>`);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/set-prop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/proxy/set-prop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetProxyProp": () => (/* binding */ SetProxyProp)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _add_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-changes */ "./node_modules/@benbraide/inlinejs/lib/esm/proxy/add-changes.js");


function SetProxyProp(componentId, target, path, prop, value) {
    var _a;
    let exists = (prop in target);
    if (exists && value === target[prop]) { //No changes
        return true;
    }
    let component = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId);
    (_a = component === null || component === void 0 ? void 0 : component.FindProxy(path)) === null || _a === void 0 ? void 0 : _a.RemoveChild(prop); //Remove previous child proxy, if any
    target[prop] = value;
    component === null || component === void 0 ? void 0 : component.RemoveProxy(`${path}.${prop}`);
    (0,_add_changes__WEBPACK_IMPORTED_MODULE_1__.AddChanges)('set', `${path}.${prop}`, prop, component === null || component === void 0 ? void 0 : component.GetBackend().changes);
    return true;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/effect.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/reactive/effect.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UseEffect": () => (/* binding */ UseEffect)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribe */ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/subscribe.js");



function UseEffect({ componentId, callback, contextElement, options, subscriptionsCallback }) {
    var _a;
    let watch = () => {
        let component = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId);
        if (!component) {
            return;
        }
        let { changes } = component.GetBackend(), canceled = false, elScope = (contextElement ? component.FindElementScope(contextElement) : null), cancel = () => {
            canceled = true;
        };
        let element = elScope === null || elScope === void 0 ? void 0 : elScope.GetElement();
        try {
            changes.PushGetAccessStorage(); //Push new storage onto the stack
            callback({
                changes: [],
                cancel: cancel,
            });
        }
        catch (err) {
            (0,_journal_error__WEBPACK_IMPORTED_MODULE_1__.JournalError)(err, `InlineJS.Component<${componentId}>.UseEffect`, element);
        }
        if (canceled) { //Pop storage
            changes.PopAllGetAccessStorageSnapshots(false); //Remove all outstanding checkpoints
            changes.RestoreOptimizedGetAccessStorage(); //Restore previously swapped optimized storage
            changes.PopGetAccessStorage();
            return;
        }
        (0,_subscribe__WEBPACK_IMPORTED_MODULE_2__.SubscribeToChanges)({ componentId, changes, callback, subscriptionsCallback, contextElement: element });
    };
    if (options === null || options === void 0 ? void 0 : options.nextTick) {
        (_a = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(watch);
    }
    else { //Immediate watch
        watch();
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/subscribe.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/reactive/subscribe.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeToChanges": () => (/* binding */ SubscribeToChanges)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _journal_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../journal/error */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/error.js");


function SubscribeToChanges({ componentId, changes, callback, subscriptionsCallback, contextElement }) {
    var _a, _b, _c, _d;
    changes.PopAllGetAccessStorageSnapshots(false); //Remove all outstanding checkpoints
    changes.RestoreOptimizedGetAccessStorage(); //Restore previously swapped optimized storage
    let { optimized, raw } = changes.PopGetAccessStorage();
    if ((((_a = (optimized || raw)) === null || _a === void 0 ? void 0 : _a.entries.length) || 0) == 0) {
        if (subscriptionsCallback) { //Alert no subscriptions
            subscriptionsCallback({});
        }
        return null;
    }
    let subscriptionIds = {}, unsubscribeAll = () => {
        Object.keys(subscriptionIds).map(componentId => (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)).filter(component => !!component).forEach((component) => {
            let { changes } = component.GetBackend();
            subscriptionIds[component.GetId()].forEach(subscriptionId => changes.Unsubscribe(subscriptionId));
        });
        subscriptionIds = {};
    };
    let canceled = false, cancel = () => {
        canceled = true;
    };
    let onChange = (list) => {
        let component = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId);
        if (!component || canceled) {
            unsubscribeAll();
            return;
        }
        let { changes } = component.GetBackend();
        changes.PushOrigin(onChange);
        try {
            callback({
                changes: (list || []),
                cancel: cancel,
            });
        }
        catch (err) {
            (0,_journal_error__WEBPACK_IMPORTED_MODULE_1__.JournalError)(err, `InlineJS.Component<${componentId}>.SubscribeToChanges.OnChange`);
        }
        changes.PopOrigin();
        if (canceled) {
            unsubscribeAll();
        }
    };
    let uniqueEntries = {}; //Extract unique path-componentId pairs
    (_b = (optimized || raw)) === null || _b === void 0 ? void 0 : _b.entries.forEach(details => ((uniqueEntries[details.path] = (uniqueEntries[details.path] || {}))[details.compnentId] = true));
    Object.entries(uniqueEntries).forEach(([path, compnentIds]) => {
        Object.keys(compnentIds).map(componentId => (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)).filter(component => !!component).forEach((component) => {
            (subscriptionIds[component.GetId()] = (subscriptionIds[component.GetId()] || [])).push(component.GetBackend().changes.Subscribe(path, onChange));
        });
    });
    if (contextElement) {
        (_d = (_c = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _c === void 0 ? void 0 : _c.FindElementScope(contextElement)) === null || _d === void 0 ? void 0 : _d.AddUninitCallback(() => {
            cancel();
            unsubscribeAll();
        });
    }
    if (subscriptionsCallback) { //Alert all subscriptions
        subscriptionsCallback(subscriptionIds);
    }
    return unsubscribeAll;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/stack.js":
/*!***********************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/stack.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
class Stack {
    constructor(duplicate) {
        this.list_ = new Array();
        if (duplicate) {
            this.list_ = duplicate.list_.map(item => item);
        }
    }
    Push(value) {
        this.list_.push(value);
    }
    Pop() {
        return ((this.list_.length == 0) ? null : this.list_.pop());
    }
    Peek() {
        return ((this.list_.length == 0) ? null : this.list_[this.list_.length - 1]);
    }
    IsEmpty() {
        return (this.list_.length == 0);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/alert.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/alert.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/animation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/animation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/change.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/change.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/changes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/changes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/component.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/config.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/config.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/context.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/directive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/directive.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/element-scope.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/element-scope.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/evaluate-options.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/evaluate-options.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/fetch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/fetch.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/global.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/global.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/intersection.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/intersection.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/magic.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/magic.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/mutation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/mutation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/path.js":
/*!****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/path.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/process.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/process.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/proxy.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/proxy.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/resource.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/resource.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/root-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/root-element.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/scope.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/scope.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/selection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/selection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/stack.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/stack.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/unique-markers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/unique-markers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/begins-with.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/begins-with.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeginsWith": () => (/* binding */ BeginsWith)
/* harmony export */ });
function BeginsWith(match, ignoreCase = false) {
    return (new RegExp(`^${match}`, (ignoreCase ? 'i' : undefined)));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/camel-case.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/camel-case.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToCamelCase": () => (/* binding */ ToCamelCase)
/* harmony export */ });
function ToCamelCase(value, ucfirst, separator) {
    let [first = '', ...rest] = value.trim().split(separator || '-'), capitalize = (word) => (word.charAt(0).toUpperCase() + word.substring(1));
    return (first && ((ucfirst ? capitalize(first) : first) + (rest || []).map(word => capitalize(word)).join('')));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/context-keys.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/context-keys.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextKeys": () => (/* binding */ ContextKeys)
/* harmony export */ });
const ContextKeys = {
    self: 'self',
    event: 'event',
    scope: 'scope',
};


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/deep-copy.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/deep-copy.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeepCopy": () => (/* binding */ DeepCopy)
/* harmony export */ });
/* harmony import */ var _get_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-target */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");


function DeepCopy(target) {
    target = (0,_get_target__WEBPACK_IMPORTED_MODULE_0__.GetTarget)(target);
    if (!Array.isArray(target) && !(0,_is_object__WEBPACK_IMPORTED_MODULE_1__.IsObject)(target)) {
        return target; //Value copy
    }
    if (Array.isArray(target)) {
        return target.map(item => DeepCopy(item));
    }
    let copy = {};
    Object.entries(target).forEach(([key, value]) => (copy[key] = DeepCopy(value)));
    return copy;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/ends-with.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/ends-with.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndsWith": () => (/* binding */ EndsWith)
/* harmony export */ });
function EndsWith(match, ignoreCase = false) {
    return (new RegExp(`${match}$`, (ignoreCase ? 'i' : undefined)));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-attribute.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-attribute.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetAttribute": () => (/* binding */ GetAttribute)
/* harmony export */ });
/* harmony import */ var _supports_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supports-attributes */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/supports-attributes.js");

function GetAttribute_(target, attribute) {
    return ((attribute && (0,_supports_attributes__WEBPACK_IMPORTED_MODULE_0__.SupportsAttributes)(target)) ? target.getAttribute(attribute) : null);
}
function GetAttribute(target, attributes) {
    for (let attr of (Array.isArray(attributes) ? attributes : [attributes])) {
        let value = GetAttribute_(target, attr);
        if (value) {
            return value;
        }
    }
    return null;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetTarget": () => (/* binding */ GetTarget),
/* harmony export */   "GetTargets": () => (/* binding */ GetTargets)
/* harmony export */ });
/* harmony import */ var _proxy_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/proxy-keys.js");

function GetTarget(target) {
    return (((Array.isArray(target) || (target && typeof target === 'object')) && _proxy_keys__WEBPACK_IMPORTED_MODULE_0__.ProxyKeys.target in target) ? GetTarget(target[_proxy_keys__WEBPACK_IMPORTED_MODULE_0__.ProxyKeys.target]) : target);
}
function GetTargets(targets) {
    return targets.map(target => GetTarget(target));
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-equal.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-equal.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsEqual": () => (/* binding */ IsEqual)
/* harmony export */ });
/* harmony import */ var _get_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-target */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-object */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js");


function IsEqual(first, second, useTargets = true) {
    let [firstTarget, secondTarget] = (useTargets ? (0,_get_target__WEBPACK_IMPORTED_MODULE_0__.GetTargets)([first, second]) : [first, second]);
    if (firstTarget === secondTarget) {
        return true;
    }
    if (Array.isArray(firstTarget) && Array.isArray(secondTarget)) { //Compare items
        return (firstTarget.length == secondTarget.length && (firstTarget.findIndex((item, index) => !IsEqual(item, secondTarget[index], useTargets)) == -1));
    }
    if ((0,_is_object__WEBPACK_IMPORTED_MODULE_1__.AreObjects)([firstTarget, secondTarget])) { //Compare keys and properties
        let firstKeys = Object.keys(firstTarget), secondKeys = Object.keys(secondTarget);
        return (firstKeys.length == secondKeys.length && (firstKeys.findIndex(key => (!secondKeys.includes(key) || !IsEqual(firstTarget[key], secondTarget[key], useTargets))) == -1));
    }
    return (firstTarget == secondTarget);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/is-object.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreObjects": () => (/* binding */ AreObjects),
/* harmony export */   "IsObject": () => (/* binding */ IsObject)
/* harmony export */ });
/* harmony import */ var _get_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-target */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js");
/* harmony import */ var _proxy_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy-keys */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/proxy-keys.js");


function IsObject_(target) {
    target = (0,_get_target__WEBPACK_IMPORTED_MODULE_0__.GetTarget)(target);
    return (target && typeof target === 'object' && ((_proxy_keys__WEBPACK_IMPORTED_MODULE_1__.ProxyKeys.target in target) || ('__proto__' in target && target['__proto__'].constructor.name === 'Object')));
}
function IsObject(target) {
    return !!IsObject_(target);
}
function AreObjects(targets) {
    return (targets.findIndex(item => !IsObject_(item)) == -1);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/loop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/loop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAnimationLoop": () => (/* binding */ CreateAnimationLoop),
/* harmony export */   "CreateLoop": () => (/* binding */ CreateLoop)
/* harmony export */ });
/* harmony import */ var _values_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/loop */ "./node_modules/@benbraide/inlinejs/lib/esm/values/loop.js");

function CreateLoop(duration, delay = 1000, repeats = 0, repeatDelay = 0, vsync = true) {
    delay = (delay || 1);
    let totalSteps = (duration ? Math.floor(duration / delay) : -1), steps = 0, aborted = false, checkpoint = 0, call = (steps, doWhile) => {
        if (vsync) { //Use checkpoints to avoid overlapping calls
            let myCheckpoint = ++checkpoint;
            requestAnimationFrame(() => ((myCheckpoint == checkpoint) && doWhile({ passes: steps, elapsed: (steps * delay), duration, abort: () => (aborted = true) })));
        }
        else { //Immediate
            doWhile({ passes: steps, elapsed: (steps * delay), duration, abort: () => (aborted = true) });
        }
    };
    let step = (doWhile, doFinal, doAbort) => {
        if (aborted) {
            return doAbort();
        }
        steps += 1;
        if (totalSteps >= 0 && steps >= totalSteps) {
            if (!repeats) { //No repeats
                return doFinal({ passes: totalSteps, elapsed: (totalSteps * delay), duration });
            }
            setTimeout(() => setTimeout(step.bind(null, doWhile, doFinal, doAbort), delay), repeatDelay);
            call(totalSteps, doWhile);
            (repeats > 0) && (repeats -= 1);
        }
        else { //Step
            setTimeout(step.bind(null, doWhile, doFinal, doAbort), delay);
            call(steps, doWhile);
        }
    };
    return new _values_loop__WEBPACK_IMPORTED_MODULE_0__.Loop((doWhile, doFinal, doAbort) => {
        setTimeout(step.bind(null, doWhile, doFinal, doAbort), delay);
    });
}
function CreateAnimationLoop(duration, delay = 1000, repeats = 0, repeatDelay = 0) {
    let activeDelay = delay;
    let startTimestamp = -1, lastTimestamp = -1, aborted = false, passes = 0, pass = (doWhile, doFinal, timestamp) => {
        if (aborted) {
            return;
        }
        if (startTimestamp == -1) {
            startTimestamp = timestamp;
        }
        let elapsed = (timestamp - startTimestamp);
        if (duration && elapsed >= duration) {
            if (!repeats) {
                return doFinal({ passes, elapsed, duration });
            }
            activeDelay = repeatDelay;
            lastTimestamp = timestamp;
            (repeats > 0) && (repeats -= 1);
        }
        if (lastTimestamp == -1) {
            lastTimestamp = timestamp;
        }
        let wait = (timestamp - lastTimestamp);
        if (wait >= activeDelay) {
            lastTimestamp = (timestamp - (wait - activeDelay));
            activeDelay = delay;
            doWhile({ passes: ++passes, elapsed, duration, abort: () => (aborted = true) });
        }
        requestAnimationFrame(pass.bind(null, doWhile, doFinal));
    };
    return new _values_loop__WEBPACK_IMPORTED_MODULE_0__.Loop((doWhile, doFinal) => {
        requestAnimationFrame(pass.bind(null, doWhile, doFinal));
    });
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/path.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/path.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinPath": () => (/* binding */ JoinPath),
/* harmony export */   "PathToRelative": () => (/* binding */ PathToRelative),
/* harmony export */   "SplitPath": () => (/* binding */ SplitPath),
/* harmony export */   "TidyPath": () => (/* binding */ TidyPath)
/* harmony export */ });
function TidyPath(path) {
    path = (path ? path.trim() : '');
    if (!path) {
        return '';
    }
    return path.replace(/[?][?&=\/]+/g, '?') //Remove all '/', '=', '?' and '&' immediately following a '?'
        .replace(/[&][?&=\/]+/g, '&') //Remove all '/', '=', '?' and '&' immediately following a '&'
        .replace(/[=][?=\/]+/g, '=') //Remove all '/', '=' and '?' immediately following a '='
        .replace(/[\/][\/=]+/g, '/') //Remove all '/' and '?' immediately following a '/'
        .replace(/[:]{2,}/g, ':') //Replace consecutive ':' with a single instance
        .replace(/[:][\/]([^\/])/g, '://$1') //Convert ':/' to '://'
        .replace(/[\/?&=]+$/, '') //Truncate '/', '=', '?' and '&'
        .replace(/^[\/?&=]+/, '') //Skip '/', '=', '?' and '&'
        .split(/[?&]/).reduce((prev, part, index) => (prev ? `${prev}${(index < 2) ? '?' : '&'}${part}` : part), ''); //Convert every '?' after the first '=', '?' or '&' to '&'
}
function PathToRelative(path, origin, prefix) {
    path = TidyPath(path);
    if (path === origin) { //Root
        path = (prefix ? (prefix || '/') : '/');
        return (path.startsWith('/') ? path : `/${path}`);
    }
    if (path.startsWith(`${origin}/`)) { //Skip origin
        path = path.substring(origin.length);
    }
    if (/^[a-zA-Z0-9_]+:\/\//.test(path)) { //Absolute path
        return path;
    }
    if (prefix) {
        path = (path.startsWith('/') ? `${prefix}${path}` : `${prefix}/${path}`);
    }
    return (path.startsWith('/') ? path : `/${path}`);
}
function SplitPath(path, origin, prefix) {
    path = (origin ? PathToRelative(path, origin, prefix) : path);
    let index = path.indexOf('?');
    return {
        base: ((index == -1) ? path : path.substring(0, index)),
        query: ((index == -1) ? '' : path.substring(index + 1)),
    };
}
function JoinPath({ base, query }, origin, prefix, prependOrigin) {
    let path = `${TidyPath(base)}?${query}`;
    path = (origin ? PathToRelative(path, origin, prefix) : TidyPath(path));
    path = (prependOrigin ? TidyPath(`${origin}/${path}`) : ((path.startsWith('/') || /^[a-zA-Z0-9_]+:\/\//.test(path)) ? path : `/${path}`));
    return path;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/proxy-keys.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/proxy-keys.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyKeys": () => (/* binding */ ProxyKeys)
/* harmony export */ });
const ProxyKeys = {
    componentId: '__InlineJS_CompnentId__',
    name: '__InlineJS_Name__',
    path: '__InlineJS_Path__',
    parentPath: '__InlineJS_ParentPath__',
    target: '__InlineJS_Target__',
};


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/set-attribute.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/set-attribute.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetAttributeUtil": () => (/* binding */ SetAttributeUtil)
/* harmony export */ });
/* harmony import */ var _supports_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supports-attributes */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/supports-attributes.js");

function SetAttributeUtil(target, attribute, value) {
    if ((attribute && (0,_supports_attributes__WEBPACK_IMPORTED_MODULE_0__.SupportsAttributes)(target))) {
        target.setAttribute(attribute, value);
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/supports-attributes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/supports-attributes.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportsAttributes": () => (/* binding */ SupportsAttributes)
/* harmony export */ });
/* harmony import */ var _get_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-target */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js");

function SupportsAttributes(target) {
    target = (0,_get_target__WEBPACK_IMPORTED_MODULE_0__.GetTarget)(target);
    return (target && 'getAttribute' in target && 'setAttribute' in target);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/to-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/to-string.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToString": () => (/* binding */ ToString)
/* harmony export */ });
/* harmony import */ var _global_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/get */ "./node_modules/@benbraide/inlinejs/lib/esm/global/get.js");
/* harmony import */ var _get_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-target */ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/get-target.js");


function ToString(target) {
    target = (0,_get_target__WEBPACK_IMPORTED_MODULE_1__.GetTarget)(target);
    if ((0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsFuture(target)) {
        return ToString(target.Get());
    }
    if ((!target && target !== false && target !== 0) || (0,_global_get__WEBPACK_IMPORTED_MODULE_0__.GetGlobal)().IsNothing(target)) {
        return '';
    }
    if (typeof target === 'boolean' || typeof target === 'number' || typeof target === 'string') {
        return target.toString();
    }
    return JSON.stringify(target);
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/unique-markers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/unique-markers.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateUniqueId": () => (/* binding */ GenerateUniqueId),
/* harmony export */   "GetDefaultUniqueMarkers": () => (/* binding */ GetDefaultUniqueMarkers),
/* harmony export */   "IncrementUniqueMarkers": () => (/* binding */ IncrementUniqueMarkers),
/* harmony export */   "JoinUniqueMarkers": () => (/* binding */ JoinUniqueMarkers)
/* harmony export */ });
function GetDefaultUniqueMarkers() {
    return {
        level0: 0,
        level1: 0,
        level2: 0,
    };
}
function IncrementUniqueMarkers(markers, level = 'level0', upperLevel = 'level1') {
    if (markers[level] == (Number.MAX_SAFE_INTEGER || 9007199254740991)) { //Roll over
        if (level === 'level0') {
            IncrementUniqueMarkers(markers, 'level1', 'level2');
        }
        else { //Increment upper level
            ++markers[upperLevel];
        }
        markers[level] = 0; //Reset level
    }
    else { //Increment leve
        ++markers[level];
    }
}
function JoinUniqueMarkers(markers) {
    return `${markers.level2}_${markers.level1}_${markers.level0}`;
}
function GenerateUniqueId(markers, scope, prefix, suffix) {
    IncrementUniqueMarkers(markers);
    return `${scope || ''}${prefix || ''}${JoinUniqueMarkers(markers)}${suffix || ''}`;
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/values/future.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/values/future.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Future": () => (/* binding */ Future)
/* harmony export */ });
class Future {
    constructor(callback_) {
        this.callback_ = callback_;
    }
    Get() {
        return this.callback_();
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/values/loop.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/values/loop.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loop": () => (/* binding */ Loop)
/* harmony export */ });
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");

class Loop {
    constructor(callback) {
        this.whileCallbacks_ = new Array();
        this.finalCallbacks_ = new Array();
        callback((value) => {
            this.whileCallbacks_.slice(0).forEach((callback, index) => {
                if ((0,_journal_try__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => callback(value), 'InlineJS.Loop.While') === false) {
                    this.whileCallbacks_.splice(index, 1);
                }
            });
        }, (value) => {
            this.whileCallbacks_.splice(0);
            this.finalCallbacks_.splice(0).forEach(callback => (0,_journal_try__WEBPACK_IMPORTED_MODULE_0__.JournalTry)(() => callback(value), 'InlineJS.Loop.Final'));
        }, () => {
            this.whileCallbacks_.splice(0);
            this.finalCallbacks_.splice(0);
        });
    }
    While(callback) {
        this.whileCallbacks_.push(callback);
        return this;
    }
    Final(callback) {
        this.finalCallbacks_.push(callback);
        return this;
    }
}


/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/values/nothing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/values/nothing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nothing": () => (/* binding */ Nothing)
/* harmony export */ });
class Nothing {
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************************!*\
  !*** ./src/inlinejs-plugins.ts ***!
  \*********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const inlinejs_animation_1 = __webpack_require__(/*! @benbraide/inlinejs-animation */ "./node_modules/@benbraide/inlinejs-animation/lib/esm/index.js");
const inlinejs_collections_1 = __webpack_require__(/*! @benbraide/inlinejs-collections */ "./node_modules/@benbraide/inlinejs-collections/lib/esm/index.js");
const inlinejs_moment_1 = __webpack_require__(/*! @benbraide/inlinejs-moment */ "./node_modules/@benbraide/inlinejs-moment/lib/esm/index.js");
const inlinejs_alert_1 = __webpack_require__(/*! @benbraide/inlinejs-alert */ "./node_modules/@benbraide/inlinejs-alert/lib/esm/index.js");
const inlinejs_router_1 = __webpack_require__(/*! @benbraide/inlinejs-router */ "./node_modules/@benbraide/inlinejs-router/lib/esm/index.js");
const inlinejs_screen_1 = __webpack_require__(/*! @benbraide/inlinejs-screen */ "./node_modules/@benbraide/inlinejs-screen/lib/esm/index.js");
(0, inlinejs_1.WaitForGlobal)().then(() => {
    //Begin: inlinejs-animation
    let concept = new inlinejs_animation_1.AnimationConcept(), easings = concept.GetEaseCollection(), actors = concept.GetActorCollection(), creators = concept.GetCreatorCollection();
    let addEase = (info) => easings.Add(info.callback, info.name);
    let addActor = (info) => actors.Add(info.callback, info.name);
    let addCreator = (name, callback) => creators.Add(name, callback);
    addEase(inlinejs_animation_1.BackAnimationEase);
    addEase(inlinejs_animation_1.BackInAnimationEase);
    addEase(inlinejs_animation_1.BackOutAnimationEase);
    addEase(inlinejs_animation_1.BackInOutAnimationEase);
    addEase(inlinejs_animation_1.BounceAnimationEase);
    addEase(inlinejs_animation_1.BounceInAnimationEase);
    addEase(inlinejs_animation_1.BounceOutAnimationEase);
    addEase(inlinejs_animation_1.BounceInOutAnimationEase);
    addEase(inlinejs_animation_1.CircleAnimationEase);
    addEase(inlinejs_animation_1.CircleInAnimationEase);
    addEase(inlinejs_animation_1.CircleOutAnimationEase);
    addEase(inlinejs_animation_1.CircleInOutAnimationEase);
    addEase(inlinejs_animation_1.CubicAnimationEase);
    addEase(inlinejs_animation_1.CubicInAnimationEase);
    addEase(inlinejs_animation_1.CubicOutAnimationEase);
    addEase(inlinejs_animation_1.CubicInOutAnimationEase);
    addEase(inlinejs_animation_1.ElasticAnimationEase);
    addEase(inlinejs_animation_1.ElasticInAnimationEase);
    addEase(inlinejs_animation_1.ElasticOutAnimationEase);
    addEase(inlinejs_animation_1.ElasticInOutAnimationEase);
    addEase(inlinejs_animation_1.ExponentialAnimationEase);
    addEase(inlinejs_animation_1.ExponentialInAnimationEase);
    addEase(inlinejs_animation_1.ExponentialOutAnimationEase);
    addEase(inlinejs_animation_1.ExponentialInOutAnimationEase);
    addEase(inlinejs_animation_1.QuadraticAnimationEase);
    addEase(inlinejs_animation_1.QuadraticInAnimationEase);
    addEase(inlinejs_animation_1.QuadraticOutAnimationEase);
    addEase(inlinejs_animation_1.QuadraticInOutAnimationEase);
    addEase(inlinejs_animation_1.QuartAnimationEase);
    addEase(inlinejs_animation_1.QuartInAnimationEase);
    addEase(inlinejs_animation_1.QuartOutAnimationEase);
    addEase(inlinejs_animation_1.QuartInOutAnimationEase);
    addEase(inlinejs_animation_1.QuintAnimationEase);
    addEase(inlinejs_animation_1.QuintInAnimationEase);
    addEase(inlinejs_animation_1.QuintOutAnimationEase);
    addEase(inlinejs_animation_1.QuintInOutAnimationEase);
    addEase(inlinejs_animation_1.SineAnimationEase);
    addEase(inlinejs_animation_1.SineInAnimationEase);
    addEase(inlinejs_animation_1.SineOutAnimationEase);
    addEase(inlinejs_animation_1.SineInOutAnimationEase);
    addEase(inlinejs_animation_1.DefaultAnimationEase);
    addEase(inlinejs_animation_1.LinearAnimationEase);
    addActor(inlinejs_animation_1.DefaultAnimationActor);
    addActor(inlinejs_animation_1.NullAnimationActor);
    addActor(inlinejs_animation_1.OpacityAnimationActor);
    addActor(inlinejs_animation_1.WidthAnimationActor);
    addActor(inlinejs_animation_1.HeightAnimationActor);
    addActor(inlinejs_animation_1.ZoomAnimationActor);
    addActor(inlinejs_animation_1.SlideDownAnimationActor);
    addActor(inlinejs_animation_1.SlideLeftAnimationActor);
    addActor(inlinejs_animation_1.SlideRightAnimationActor);
    addActor(inlinejs_animation_1.SlideUpAnimationActor);
    addActor(inlinejs_animation_1.SpinAnimationActor);
    addActor(inlinejs_animation_1.FlipAnimationActor);
    addActor(inlinejs_animation_1.TossAnimationActor);
    addActor(inlinejs_animation_1.PulseAnimationActor);
    addActor(inlinejs_animation_1.HeartbeatAnimationActor);
    addCreator('bezier', inlinejs_animation_1.BezierAnimationEaseCreator);
    addCreator('scale', inlinejs_animation_1.ScaleAnimationCreator);
    addCreator('translate', inlinejs_animation_1.TranslateAnimationCreator);
    addCreator('rotate', inlinejs_animation_1.RotateAnimationCreator);
    addCreator('scene', inlinejs_animation_1.SceneAnimationCreator);
    addCreator('shake', inlinejs_animation_1.ShakeAnimationCreator);
    addCreator('vibrate', inlinejs_animation_1.VibrateAnimationCreator);
    addCreator('rubberband', inlinejs_animation_1.RubberbandAnimationCreator);
    addCreator('jello', inlinejs_animation_1.JelloAnimationCreator);
    addCreator('tada', inlinejs_animation_1.TadaAnimationCreator);
    addCreator('swing', inlinejs_animation_1.SwingAnimationCreator);
    (0, inlinejs_1.GetGlobal)().SetConcept('animation', concept);
    (0, inlinejs_animation_1.TransitionDirectiveHandlerCompact)();
    (0, inlinejs_animation_1.AnimateDirectiveHandlerCompact)();
    (0, inlinejs_animation_1.AnimationMagicHandlerCompact)();
    //End: inlinejs-animation
    //Begin: inlinejs-collections
    const cartCollection = new inlinejs_collections_1.CartCollectionConcept((0, inlinejs_1.GetGlobal)().CreateComponent(document.createElement('template')));
    const favCollection = new inlinejs_collections_1.FavoritesCollectionConcept((0, inlinejs_1.GetGlobal)().CreateComponent(document.createElement('template')));
    (0, inlinejs_1.GetGlobal)().SetConcept(cartCollection.GetName(), cartCollection);
    (0, inlinejs_1.GetGlobal)().SetConcept(favCollection.GetName(), favCollection);
    (0, inlinejs_collections_1.CartDirectiveHandlerCompact)();
    (0, inlinejs_collections_1.FavoritesDirectiveHandlerCompact)();
    (0, inlinejs_collections_1.CartMagicHandlerCompact)();
    (0, inlinejs_collections_1.FavoritesMagicHandlerCompact)();
    //End: inlinejs-collections
    //Begin: inlinejs-moment
    (0, inlinejs_1.GetGlobal)().SetConcept(inlinejs_moment_1.MomentConceptName, new inlinejs_moment_1.MomentConcept());
    (0, inlinejs_moment_1.MomentDirectiveHandlerCompact)();
    (0, inlinejs_moment_1.MomentMagicHandlerCompact)();
    //End: inlinejs-moment
    //Begin: inlinejs-router
    (0, inlinejs_1.GetGlobal)().SetConcept(inlinejs_router_1.RouterConceptName, new inlinejs_router_1.RouterConcept());
    (0, inlinejs_router_1.RouterDirectiveHandlerCompact)();
    (0, inlinejs_router_1.FetchRouterDirectiveExtensionCompact)();
    (0, inlinejs_router_1.MountRouterDirectiveExtensionCompact)();
    (0, inlinejs_router_1.LinkRouterDirectiveExtensionCompact)();
    (0, inlinejs_router_1.PageRouterDirectiveExtensionCompact)();
    (0, inlinejs_router_1.RouterMagicHandlerCompact)();
    //End: inlinejs-router
    //Begin: inlinejs-screen
    (0, inlinejs_1.GetGlobal)().SetConcept(inlinejs_screen_1.ScreenConceptName, new inlinejs_screen_1.ScreenConcept((0, inlinejs_1.GetGlobal)().CreateComponent(document.createElement('template'))));
    (0, inlinejs_screen_1.ScreenMagicHandlerCompact)();
    //End: inlinejs-screen
    //Begin: inlinejs-alert
    (0, inlinejs_alert_1.AlertMagicHandlerCompact)();
    //End: inlinejs-alert
});

})();

/******/ })()
;