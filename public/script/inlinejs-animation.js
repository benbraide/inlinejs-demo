/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        if (!(this.element_ instanceof HTMLTemplateElement) && this.element_.tagName.toLowerCase() !== 'svg') {
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
        Array.from(target.children).forEach((child) => {
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
/* harmony import */ var _journal_try__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../journal/try */ "./node_modules/@benbraide/inlinejs/lib/esm/journal/try.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");




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
        (afterInsert && (0,_journal_try__WEBPACK_IMPORTED_MODULE_2__.JournalTry)(afterInsert, 'InlineJS.InsertHtml', element));
        let resolvedComponent = (0,_find__WEBPACK_IMPORTED_MODULE_3__.FindComponentById)(componentId);
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
            let resolvedComponent = (0,_find__WEBPACK_IMPORTED_MODULE_3__.FindComponentById)(componentId);
            Array.from(el.children).forEach((child) => {
                let elementScope = resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.FindElementScope(child);
                if (elementScope) {
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
    return ((element === null || element === void 0 ? void 0 : element.nodeType) === 1 && (!checkDocument || document.contains(element)) && (!checkTemplate || element instanceof HTMLTemplateElement || !element.closest('template')));
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
        Array.from(element.children).forEach(child => ProcessDirectives({ component, options,
            element: child,
        }));
        resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.PopSelectionScope();
    }
    (_a = resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.CreateElementScope(element)) === null || _a === void 0 ? void 0 : _a.ExecutePostProcessCallbacks();
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
    (0,_utilities_loop__WEBPACK_IMPORTED_MODULE_3__.CreateLoop)(info.duration, 0, (allowRepeats ? info.repeats : 0), info.delay).While(({ elapsed }) => {
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
function GenerateValueReturningFunction(expression, contextElement, componentId) {
    try {
        return (new Function(InlineJSContextKey, `
            with (${InlineJSContextKey}){
                return (${expression});
            };
        `)).bind(contextElement);
    }
    catch (err) {
        if (!(err instanceof SyntaxError)) {
            (0,_journal_error__WEBPACK_IMPORTED_MODULE_3__.JournalError)(err, `InlineJs.Region<${componentId || 'NIL'}>.GenerateValueReturningFunction`);
        }
    }
    return null;
}
function GenerateVoidFunction(expression, contextElement, componentId) {
    try {
        return (new Function(InlineJSContextKey, `
            with (${InlineJSContextKey}){
                ${expression};
            };
        `)).bind(contextElement);
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
        return (handler, params = [], contexts) => {
            return (handler ? handler(null) : null);
        };
    }
    let runFunction = (handler, target, params, contexts, forwardSyntaxErrors = true) => {
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
                if (waitPromise !== 'none') {
                    (0,_wait_promise__WEBPACK_IMPORTED_MODULE_5__.WaitPromise)(value, handler, waitPromise === 'recursive');
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
    return (handler, params = [], contexts) => {
        if (!voidFunction && valueReturnFunction) {
            try {
                return runFunction(handler, valueReturnFunction, (params || []), (contexts || {}));
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
        return (handler ? handler(null) : null);
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
/* harmony import */ var _component_insert_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/insert-html */ "./node_modules/@benbraide/inlinejs/lib/esm/component/insert-html.js");
/* harmony import */ var _interpolator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolator */ "./node_modules/@benbraide/inlinejs/lib/esm/global/interpolator.js");


function AttributeInterpolator({ componentId, contextElement, name, value }) {
    (0,_interpolator__WEBPACK_IMPORTED_MODULE_1__.Interpolate)({ componentId, contextElement,
        text: value,
        handler: value => contextElement.setAttribute(name, value),
    });
}
function TextContentInterpolator({ componentId, contextElement }) {
    (0,_interpolator__WEBPACK_IMPORTED_MODULE_1__.Interpolate)({ componentId, contextElement,
        handler: value => (0,_component_insert_html__WEBPACK_IMPORTED_MODULE_0__.InsertHtml)({
            component: componentId,
            element: contextElement,
            html: value,
            processDirectives: true,
        }),
    });
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
/* harmony export */   "Interpolate": () => (/* binding */ Interpolate)
/* harmony export */ });
/* harmony import */ var _component_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/find */ "./node_modules/@benbraide/inlinejs/lib/esm/component/find.js");
/* harmony import */ var _evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../evaluator/evaluate-later */ "./node_modules/@benbraide/inlinejs/lib/esm/evaluator/evaluate-later.js");
/* harmony import */ var _reactive_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactive/effect */ "./node_modules/@benbraide/inlinejs/lib/esm/reactive/effect.js");



const InterpolateInlineRegex = /\{\{\s*(.+?)\s*\}\}/g;
const InterpolateBlockRegex = /\{%(.+?)%\}/g;
const InterpolateInlineTestRegex = /\{\{.+?\}\}/;
const InterpolateBlockTestRegex = /\{%.+?%\}/;
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
function Interpolate({ componentId, contextElement, text, handler }) {
    var _a;
    let resolvedtext = '';
    if (!text) {
        let passesTest = (text) => (InterpolateInlineTestRegex.test(text) || InterpolateBlockTestRegex.test(text));
        if (![...contextElement.childNodes].filter(child => (child.nodeType == 3)).find(child => passesTest(child.textContent || ''))) {
            return;
        }
        resolvedtext = GetElementContent(contextElement);
    }
    else if (!InterpolateInlineTestRegex.test(text) && !InterpolateBlockTestRegex.test(text)) {
        return;
    }
    let replace = () => JSON.stringify(resolvedtext || text).replace(InterpolateInlineRegex, '"+($1)+"').replace(InterpolateBlockRegex, '";$1\noutput+="');
    let evaluate = (0,_evaluator_evaluate_later__WEBPACK_IMPORTED_MODULE_1__.EvaluateLater)({ componentId, contextElement,
        expression: "let output = " + replace() + "; return output;",
    });
    (_a = (0,_component_find__WEBPACK_IMPORTED_MODULE_0__.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.CreateElementScope(contextElement);
    (0,_reactive_effect__WEBPACK_IMPORTED_MODULE_2__.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(handler),
    });
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
                        var _a;
                        let key = ((entry.target instanceof HTMLElement) ? (0,_component_element_scope_id__WEBPACK_IMPORTED_MODULE_0__.GetElementScopeId)(((_a = (0,_component_infer__WEBPACK_IMPORTED_MODULE_1__.InferComponent)(entry.target)) === null || _a === void 0 ? void 0 : _a.GetRoot()) || null) : '');
                        if (!key) { //Invalid target
                            return;
                        }
                        if ((entry === null || entry === void 0 ? void 0 : entry.type) === 'childList') {
                            let info = getInfo(key);
                            info.added.push(...Array.from(entry.addedNodes));
                            info.removed.push(...Array.from(entry.removedNodes));
                        }
                        else if ((entry === null || entry === void 0 ? void 0 : entry.type) === 'attributes' && entry.attributeName) {
                            getInfo(key).attributes.push({
                                name: entry.attributeName,
                                target: entry.target,
                            });
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
            return (setter ? setter(prop.toString(), value, target) : (!!target[prop] || true));
        },
        deleteProperty(target, prop) {
            if (typeof prop === 'symbol' || (typeof prop === 'string' && prop === 'prototype')) {
                return Reflect.deleteProperty(target, prop);
            }
            return (deleter ? deleter(prop.toString(), target) : (!!(delete target[prop]) || true));
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
/* harmony export */   "CreateLoop": () => (/* binding */ CreateLoop)
/* harmony export */ });
/* harmony import */ var _values_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../values/loop */ "./node_modules/@benbraide/inlinejs/lib/esm/values/loop.js");

function CreateLoop(duration, delay = 1000, repeats = 0, repeatDelay = 0) {
    delay = (delay || 1);
    let totalSteps = (duration ? Math.floor(duration / delay) : -1), steps = 0, waitingRepeat = false;
    let startTimestamp = -1, aborted = false, step = (doWhile, doFinal, doAbort, timestamp) => {
        if (aborted) {
            return doAbort();
        }
        if (waitingRepeat) {
            if ((timestamp - startTimestamp) >= repeatDelay) { //Wait complete
                waitingRepeat = false;
                startTimestamp = -1;
                steps = 0;
            }
            return requestAnimationFrame(step.bind(null, doWhile, doFinal, doAbort));
        }
        if (startTimestamp == -1) { //First entry
            startTimestamp = timestamp;
            return requestAnimationFrame(step.bind(null, doWhile, doFinal, doAbort));
        }
        let computedSteps = Math.floor((timestamp - startTimestamp) / delay);
        if (totalSteps != -1 && computedSteps >= totalSteps) {
            if (!repeats) { //No repeats
                return doFinal({ passes: totalSteps, elapsed: (timestamp - startTimestamp), duration });
            }
            doWhile({ passes: totalSteps, elapsed: (timestamp - startTimestamp), duration, abort: () => (aborted = true) });
            waitingRepeat = true;
            startTimestamp = timestamp;
            (repeats > 0) && (repeats -= 1);
        }
        else if (computedSteps != steps) {
            doWhile({ passes: (steps = computedSteps), elapsed: (timestamp - startTimestamp), duration, abort: () => (aborted = true) });
        }
        requestAnimationFrame(step.bind(null, doWhile, doFinal, doAbort));
    };
    return new _values_loop__WEBPACK_IMPORTED_MODULE_0__.Loop((doWhile, doFinal, doAbort) => {
        requestAnimationFrame(step.bind(null, doWhile, doFinal, doAbort));
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


/***/ }),

/***/ "./src/actors/add.ts":
/*!***************************!*\
  !*** ./src/actors/add.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddAnimationActor = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
function AddAnimationActor(handler) {
    var _a, _b;
    let name = '', callback = null;
    if ((0, inlinejs_1.IsObject)(handler)) { //Details provided
        ({ name, callback } = handler);
        if (name && callback) {
            (_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Add(callback, name);
        }
    }
    else { //Instance provided
        (_b = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _b === void 0 ? void 0 : _b.GetActorCollection().Add(handler);
    }
}
exports.AddAnimationActor = AddAnimationActor;


/***/ }),

/***/ "./src/actors/callback.ts":
/*!********************************!*\
  !*** ./src/actors/callback.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAnimationActorCallback = void 0;
function CreateAnimationActorCallback(name, callback) {
    return { name, callback };
}
exports.CreateAnimationActorCallback = CreateAnimationActorCallback;


/***/ }),

/***/ "./src/actors/default.ts":
/*!*******************************!*\
  !*** ./src/actors/default.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultAnimationActorCompact = exports.DefaultAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/actors/add.ts");
const opacity_1 = __webpack_require__(/*! ./opacity */ "./src/actors/opacity.ts");
exports.DefaultAnimationActor = { name: 'default', callback: opacity_1.OpacityAnimationActor.callback };
function DefaultAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.DefaultAnimationActor);
}
exports.DefaultAnimationActorCompact = DefaultAnimationActorCompact;


/***/ }),

/***/ "./src/actors/null.ts":
/*!****************************!*\
  !*** ./src/actors/null.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NullAnimationActorCompact = exports.NullAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/actors/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/actors/callback.ts");
exports.NullAnimationActor = (0, callback_1.CreateAnimationActorCallback)('null', () => { });
function NullAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.NullAnimationActor);
}
exports.NullAnimationActorCompact = NullAnimationActorCompact;


/***/ }),

/***/ "./src/actors/opacity.ts":
/*!*******************************!*\
  !*** ./src/actors/opacity.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpacityAnimationActorCompact = exports.OpacityAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/actors/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/actors/callback.ts");
exports.OpacityAnimationActor = (0, callback_1.CreateAnimationActorCallback)('opacity', ({ fraction, target, stage }) => {
    if (stage === 'end') {
        target.style.removeProperty('opacity');
    }
    else {
        target.style.opacity = fraction.toString();
    }
});
function OpacityAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.OpacityAnimationActor);
}
exports.OpacityAnimationActorCompact = OpacityAnimationActorCompact;


/***/ }),

/***/ "./src/actors/rotate/flip.ts":
/*!***********************************!*\
  !*** ./src/actors/rotate/flip.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlipAnimationActorCompact = exports.FlipAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/rotate/generic.ts");
exports.FlipAnimationActor = (0, generic_1.CreateRotateAnimationActor)({ name: 'flip', axis: 'y' });
function FlipAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.FlipAnimationActor);
}
exports.FlipAnimationActorCompact = FlipAnimationActorCompact;


/***/ }),

/***/ "./src/actors/rotate/generic.ts":
/*!**************************************!*\
  !*** ./src/actors/rotate/generic.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRotateAnimationActor = exports.CreateRotateAnimationCallback = exports.DefaultRotateAnimationActorUnit = exports.DefaultRotateAnimationActorFactor = void 0;
const callback_1 = __webpack_require__(/*! ../callback */ "./src/actors/callback.ts");
exports.DefaultRotateAnimationActorFactor = 360;
exports.DefaultRotateAnimationActorUnit = 'deg';
function CreateRotateAnimationCallback({ axis = 'z', origin, factor, unit } = {}) {
    let translateOrigin = (value) => ((value !== 'center') ? ((value === 'end') ? '100%' : '0%') : '50%');
    let translatedOrigin = `${translateOrigin((origin === null || origin === void 0 ? void 0 : origin.x) || 'center')} ${translateOrigin((origin === null || origin === void 0 ? void 0 : origin.y) || 'center')}`;
    let validFactor = (factor ? factor : exports.DefaultRotateAnimationActorFactor), validUnit = (unit ? unit : exports.DefaultRotateAnimationActorUnit);
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
exports.CreateRotateAnimationCallback = CreateRotateAnimationCallback;
function CreateRotateAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0, callback_1.CreateAnimationActorCallback)(name, CreateRotateAnimationCallback(rest));
}
exports.CreateRotateAnimationActor = CreateRotateAnimationActor;


/***/ }),

/***/ "./src/actors/rotate/spin.ts":
/*!***********************************!*\
  !*** ./src/actors/rotate/spin.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpinAnimationActorCompact = exports.SpinAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/rotate/generic.ts");
exports.SpinAnimationActor = (0, generic_1.CreateRotateAnimationActor)({ name: 'spin', axis: 'z' });
function SpinAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.SpinAnimationActor);
}
exports.SpinAnimationActorCompact = SpinAnimationActorCompact;


/***/ }),

/***/ "./src/actors/rotate/toss.ts":
/*!***********************************!*\
  !*** ./src/actors/rotate/toss.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TossAnimationActorCompact = exports.TossAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/rotate/generic.ts");
exports.TossAnimationActor = (0, generic_1.CreateRotateAnimationActor)({ name: 'toss', axis: 'x' });
function TossAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.TossAnimationActor);
}
exports.TossAnimationActorCompact = TossAnimationActorCompact;


/***/ }),

/***/ "./src/actors/scale/generic.ts":
/*!*************************************!*\
  !*** ./src/actors/scale/generic.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateScaleAnimationActor = exports.CreateScaleAnimationCallback = void 0;
const callback_1 = __webpack_require__(/*! ../callback */ "./src/actors/callback.ts");
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
exports.CreateScaleAnimationCallback = CreateScaleAnimationCallback;
function CreateScaleAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0, callback_1.CreateAnimationActorCallback)(name, CreateScaleAnimationCallback(rest));
}
exports.CreateScaleAnimationActor = CreateScaleAnimationActor;


/***/ }),

/***/ "./src/actors/scale/height.ts":
/*!************************************!*\
  !*** ./src/actors/scale/height.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeightAnimationActorCompact = exports.HeightAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/scale/generic.ts");
exports.HeightAnimationActor = (0, generic_1.CreateScaleAnimationActor)({ name: 'height', axis: 'y', origin: { x: 'center', y: 'start' } });
function HeightAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.HeightAnimationActor);
}
exports.HeightAnimationActorCompact = HeightAnimationActorCompact;


/***/ }),

/***/ "./src/actors/scale/width.ts":
/*!***********************************!*\
  !*** ./src/actors/scale/width.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WidthAnimationActorCompact = exports.WidthAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/scale/generic.ts");
exports.WidthAnimationActor = (0, generic_1.CreateScaleAnimationActor)({ name: 'width', axis: 'x', origin: { x: 'start', y: 'center' } });
function WidthAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.WidthAnimationActor);
}
exports.WidthAnimationActorCompact = WidthAnimationActorCompact;


/***/ }),

/***/ "./src/actors/scale/zoom.ts":
/*!**********************************!*\
  !*** ./src/actors/scale/zoom.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoomAnimationActorCompact = exports.ZoomAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/scale/generic.ts");
exports.ZoomAnimationActor = (0, generic_1.CreateScaleAnimationActor)({ name: 'zoom', axis: 'both', origin: { x: 'center', y: 'center' } });
function ZoomAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.ZoomAnimationActor);
}
exports.ZoomAnimationActorCompact = ZoomAnimationActorCompact;


/***/ }),

/***/ "./src/actors/scene/generic.ts":
/*!*************************************!*\
  !*** ./src/actors/scene/generic.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplyRangeAndTransform = exports.FormatValue = exports.ApplyTransform = exports.ApplyRange = exports.CreateSceneAnimationActor = exports.CreateSceneAnimationCallback = void 0;
const callback_1 = __webpack_require__(/*! ../callback */ "./src/actors/callback.ts");
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
exports.CreateSceneAnimationCallback = CreateSceneAnimationCallback;
function CreateSceneAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0, callback_1.CreateAnimationActorCallback)(name, CreateSceneAnimationCallback(rest));
}
exports.CreateSceneAnimationActor = CreateSceneAnimationActor;
function ApplyRange(fraction, from, to) {
    return (((to - from) * fraction) + from);
}
exports.ApplyRange = ApplyRange;
function ApplyTransform(target, name, value) {
    target.style.transform = target.style.transform.replace(new RegExp(`[ ]*${name}([XYZ]|3d)?\\(.+?\\)`, 'g'), '');
    target.style.transform += (value ? ` ${name}(${value})` : ` ${name}`);
}
exports.ApplyTransform = ApplyTransform;
function FormatValue(value, count) {
    return ((count && count > 1) ? Array.from({ length: count }).map(i => value).join(',') : value);
}
exports.FormatValue = FormatValue;
function ApplyRangeAndTransform(target, name, fraction, from, to, unit, count) {
    ApplyTransform(target, name, FormatValue(`${ApplyRange(fraction, from, to)}${unit ? unit : ''}`, count));
}
exports.ApplyRangeAndTransform = ApplyRangeAndTransform;


/***/ }),

/***/ "./src/actors/scene/heartbeat.ts":
/*!***************************************!*\
  !*** ./src/actors/scene/heartbeat.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeartbeatAnimationActorCompact = exports.HeartbeatAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/scene/generic.ts");
exports.HeartbeatAnimationActor = (0, generic_1.CreateSceneAnimationActor)({
    name: 'heartbeat',
    frames: [
        { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
        { checkpoint: [1, 28], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1.26, '', 2) },
        { checkpoint: [14, 42], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1.26, 1, '', 2) },
        { checkpoint: 70, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
    ],
});
function HeartbeatAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.HeartbeatAnimationActor);
}
exports.HeartbeatAnimationActorCompact = HeartbeatAnimationActorCompact;


/***/ }),

/***/ "./src/actors/scene/pulse.ts":
/*!***********************************!*\
  !*** ./src/actors/scene/pulse.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PulseAnimationActorCompact = exports.PulseAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/scene/generic.ts");
exports.PulseAnimationActor = (0, generic_1.CreateSceneAnimationActor)({
    name: 'pulse',
    frames: [
        { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
        { checkpoint: 1, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1.26, '', 2) },
        { checkpoint: 50, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1.26, 1, '', 2) },
        { checkpoint: 100, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
    ],
});
function PulseAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.PulseAnimationActor);
}
exports.PulseAnimationActorCompact = PulseAnimationActorCompact;


/***/ }),

/***/ "./src/actors/translate/generic.ts":
/*!*****************************************!*\
  !*** ./src/actors/translate/generic.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTranslateAnimationActor = exports.CreateTranslateAnimationCallback = exports.DefaultTranslateAnimationActorUnit = exports.DefaultTranslateAnimationActorFactor = void 0;
const callback_1 = __webpack_require__(/*! ../callback */ "./src/actors/callback.ts");
exports.DefaultTranslateAnimationActorFactor = 9999;
exports.DefaultTranslateAnimationActorUnit = 'px';
function CreateTranslateAnimationCallback({ axis, factor, unit } = {}) {
    let validFactor = (factor ? factor : exports.DefaultTranslateAnimationActorFactor);
    let validUnit = (unit ? unit : exports.DefaultTranslateAnimationActorUnit);
    return ({ fraction, target }) => {
        let delta = ((validFactor < 0) ? (validFactor + (-validFactor * fraction)) : (validFactor - (validFactor * fraction)));
        let value = ((axis !== 'x') ? ((axis === 'y') ? `translateY(${delta}${validUnit})` : `translate(${delta}${validUnit}, ${delta}${validUnit})`) : `translateX(${delta}${validUnit})`);
        target.style.transform = target.style.transform.replace(/[ ]*translate[XY]?\(.+?\)/g, '');
        target.style.transform += ` ${value}`;
    };
}
exports.CreateTranslateAnimationCallback = CreateTranslateAnimationCallback;
function CreateTranslateAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0, callback_1.CreateAnimationActorCallback)(name, CreateTranslateAnimationCallback(rest));
}
exports.CreateTranslateAnimationActor = CreateTranslateAnimationActor;


/***/ }),

/***/ "./src/actors/translate/slide-down.ts":
/*!********************************************!*\
  !*** ./src/actors/translate/slide-down.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlideDownAnimationActorCompact = exports.SlideDownAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/translate/generic.ts");
exports.SlideDownAnimationActor = (0, generic_1.CreateTranslateAnimationActor)({ name: 'slideDown', axis: 'y', factor: -generic_1.DefaultTranslateAnimationActorFactor });
function SlideDownAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.SlideDownAnimationActor);
}
exports.SlideDownAnimationActorCompact = SlideDownAnimationActorCompact;


/***/ }),

/***/ "./src/actors/translate/slide-left.ts":
/*!********************************************!*\
  !*** ./src/actors/translate/slide-left.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlideLeftAnimationActorCompact = exports.SlideLeftAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/translate/generic.ts");
exports.SlideLeftAnimationActor = (0, generic_1.CreateTranslateAnimationActor)({ name: 'slideLeft', axis: 'x' });
function SlideLeftAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.SlideLeftAnimationActor);
}
exports.SlideLeftAnimationActorCompact = SlideLeftAnimationActorCompact;


/***/ }),

/***/ "./src/actors/translate/slide-right.ts":
/*!*********************************************!*\
  !*** ./src/actors/translate/slide-right.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlideRightAnimationActorCompact = exports.SlideRightAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/translate/generic.ts");
exports.SlideRightAnimationActor = (0, generic_1.CreateTranslateAnimationActor)({ name: 'slideRight', axis: 'x', factor: -generic_1.DefaultTranslateAnimationActorFactor });
function SlideRightAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.SlideRightAnimationActor);
}
exports.SlideRightAnimationActorCompact = SlideRightAnimationActorCompact;


/***/ }),

/***/ "./src/actors/translate/slide-up.ts":
/*!******************************************!*\
  !*** ./src/actors/translate/slide-up.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlideUpAnimationActorCompact = exports.SlideUpAnimationActor = void 0;
const add_1 = __webpack_require__(/*! ../add */ "./src/actors/add.ts");
const generic_1 = __webpack_require__(/*! ./generic */ "./src/actors/translate/generic.ts");
exports.SlideUpAnimationActor = (0, generic_1.CreateTranslateAnimationActor)({ name: 'slideUp', axis: 'y' });
function SlideUpAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.SlideUpAnimationActor);
}
exports.SlideUpAnimationActorCompact = SlideUpAnimationActorCompact;


/***/ }),

/***/ "./src/collection/actor.ts":
/*!*********************************!*\
  !*** ./src/collection/actor.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationActorCollection = void 0;
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
exports.AnimationActorCollection = AnimationActorCollection;


/***/ }),

/***/ "./src/collection/creator.ts":
/*!***********************************!*\
  !*** ./src/collection/creator.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationCreatorCollection = void 0;
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
exports.AnimationCreatorCollection = AnimationCreatorCollection;


/***/ }),

/***/ "./src/collection/ease.ts":
/*!********************************!*\
  !*** ./src/collection/ease.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationEaseCollection = void 0;
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
exports.AnimationEaseCollection = AnimationEaseCollection;


/***/ }),

/***/ "./src/concept.ts":
/*!************************!*\
  !*** ./src/concept.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationConcept = void 0;
const actor_1 = __webpack_require__(/*! ./collection/actor */ "./src/collection/actor.ts");
const creator_1 = __webpack_require__(/*! ./collection/creator */ "./src/collection/creator.ts");
const ease_1 = __webpack_require__(/*! ./collection/ease */ "./src/collection/ease.ts");
class AnimationConcept {
    constructor() {
        this.easeCollection_ = new ease_1.AnimationEaseCollection();
        this.actorCollection_ = new actor_1.AnimationActorCollection();
        this.creatorCollection_ = new creator_1.AnimationCreatorCollection();
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
exports.AnimationConcept = AnimationConcept;


/***/ }),

/***/ "./src/creators/bezier.ts":
/*!********************************!*\
  !*** ./src/creators/bezier.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BezierAnimationEaseCreator = void 0;
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
exports.BezierAnimationEaseCreator = BezierAnimationEaseCreator;


/***/ }),

/***/ "./src/creators/jello.ts":
/*!*******************************!*\
  !*** ./src/creators/jello.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JelloAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
function JelloAnimationCreator({ factor = 12.6, divisor = 2, unit = 'deg' } = {}) {
    return (0, generic_1.CreateSceneAnimationCallback)({
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
exports.JelloAnimationCreator = JelloAnimationCreator;
function ComputeAndApply(target, fraction, factor, divisor, value, unit) {
    let [from, to] = ApplyFactorAndDivisor(factor, divisor, value);
    (0, generic_1.ApplyRangeAndTransform)(target, 'skew', fraction, from, to, unit, 2);
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

/***/ "./src/creators/rotate.ts":
/*!********************************!*\
  !*** ./src/creators/rotate.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RotateAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/rotate/generic */ "./src/actors/rotate/generic.ts");
function RotateAnimationCreator(params = {}) {
    return (0, generic_1.CreateRotateAnimationCallback)(params);
}
exports.RotateAnimationCreator = RotateAnimationCreator;


/***/ }),

/***/ "./src/creators/rubberband.ts":
/*!************************************!*\
  !*** ./src/creators/rubberband.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RubberbandAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
function RubberbandAnimationCreator({ factor = 1.26, multiplier = 0.10 } = {}) {
    return (0, generic_1.CreateSceneAnimationCallback)({
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
exports.RubberbandAnimationCreator = RubberbandAnimationCreator;
function ComputeAndApply(target, fraction, factor, multiplier, fromX, toX, fromY, toY) {
    let xValue = ((fromX === null) ? toX : (0, generic_1.ApplyRange)(fraction, SubtractFactor(factor, multiplier, fromX), SubtractFactor(factor, multiplier, toX)));
    let yValue = ((fromY === null) ? toY : (0, generic_1.ApplyRange)(fraction, SubtractFactor(factor, multiplier, fromY), SubtractFactor(factor, multiplier, toY)));
    (0, generic_1.ApplyTransform)(target, 'scale', `${xValue},${yValue}`);
}
function SubtractFactor(factor, multiplier, value) {
    return ((0 <= value) ? (factor - (multiplier * value)) : -(value + 1));
}


/***/ }),

/***/ "./src/creators/scale.ts":
/*!*******************************!*\
  !*** ./src/creators/scale.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScaleAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scale/generic */ "./src/actors/scale/generic.ts");
function ScaleAnimationCreator(params = {}) {
    return (0, generic_1.CreateScaleAnimationCallback)(params);
}
exports.ScaleAnimationCreator = ScaleAnimationCreator;


/***/ }),

/***/ "./src/creators/scene.ts":
/*!*******************************!*\
  !*** ./src/creators/scene.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
function SceneAnimationCreator(params) {
    return (0, generic_1.CreateSceneAnimationCallback)(params);
}
exports.SceneAnimationCreator = SceneAnimationCreator;


/***/ }),

/***/ "./src/creators/shake.ts":
/*!*******************************!*\
  !*** ./src/creators/shake.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShakeAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
function ShakeAnimationCreator({ displacement = 10, unit = 'px' } = {}) {
    return (0, generic_1.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, displacement, unit) },
            { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, -displacement, displacement, unit) },
            { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, displacement, -displacement, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, -displacement, 0, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, unit) },
        ],
    });
}
exports.ShakeAnimationCreator = ShakeAnimationCreator;


/***/ }),

/***/ "./src/creators/swing.ts":
/*!*******************************!*\
  !*** ./src/creators/swing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwingAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
function SwingAnimationCreator({ displacement = 5, unit = 'deg', origin: { x = 'start', y = 'start' } = {} } = {}) {
    return (0, generic_1.CreateSceneAnimationCallback)({
        origin: { x, y },
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * 0), (displacement * 3), unit) },
            { checkpoint: 20, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * 3), (displacement * -2), unit) },
            { checkpoint: 40, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * -2), (displacement * 1), unit) },
            { checkpoint: 60, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * 1), (displacement * -1), unit) },
            { checkpoint: 80, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, (displacement * -1), (displacement * 0), unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
        ],
    });
}
exports.SwingAnimationCreator = SwingAnimationCreator;


/***/ }),

/***/ "./src/creators/tada.ts":
/*!******************************!*\
  !*** ./src/creators/tada.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TadaAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
function TadaAnimationCreator({ displacement = 3, fromFactor = 0.9, toFactor = 1.17, unit = 'deg' } = {}) {
    return (0, generic_1.CreateSceneAnimationCallback)({
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
exports.TadaAnimationCreator = TadaAnimationCreator;
function ComputeAndApply(target, fraction, rotateFrom, rotateTo, fromFactor, toFactor, unit, pivot = false) {
    let scaleValue = ((fromFactor === null) ? toFactor : (0, generic_1.ApplyRange)(fraction, fromFactor, toFactor));
    let rotateValue = (0, generic_1.ApplyRange)(fraction, rotateFrom, rotateTo);
    let rotateTranslateValue = (pivot ? (0, generic_1.ApplyRange)(fraction, 0, 1) : 1);
    target.style.transform = target.style.transform.replace(/[ ]*rotate([XYZ]|3d)?\(.+?\)/, '');
    target.style.transform += ` rotate3d(0,0,${rotateTranslateValue},${rotateValue}${unit})`;
    (0, generic_1.ApplyTransform)(target, 'scale', `${scaleValue},${scaleValue}`);
}


/***/ }),

/***/ "./src/creators/translate.ts":
/*!***********************************!*\
  !*** ./src/creators/translate.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslateAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/translate/generic */ "./src/actors/translate/generic.ts");
function TranslateAnimationCreator(params = {}) {
    return (0, generic_1.CreateTranslateAnimationCallback)(params);
}
exports.TranslateAnimationCreator = TranslateAnimationCreator;


/***/ }),

/***/ "./src/creators/vibrate.ts":
/*!*********************************!*\
  !*** ./src/creators/vibrate.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VibrateAnimationCreator = void 0;
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
function VibrateAnimationCreator({ displacement = 4, unit = 'deg' } = {}) {
    return (0, generic_1.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, displacement, unit) },
            { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, -displacement, displacement, unit) },
            { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, displacement, -displacement, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, -displacement, 0, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotate', fraction, 0, 0, unit) },
        ],
    });
}
exports.VibrateAnimationCreator = VibrateAnimationCreator;


/***/ }),

/***/ "./src/directive/animate.ts":
/*!**********************************!*\
  !*** ./src/directive/animate.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimateDirectiveHandlerCompact = exports.AnimateDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.AnimateDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('animate', (_a) => {
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
            transitionCancel = (0, inlinejs_1.WaitTransition)({ componentId, contextElement, target, reverse,
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
            checkpoint += 1;
            if (options.inner) {
                childIndex = 0;
                handleInner(reverse);
            }
            else {
                waitTransition(reverse, undefined, () => repeat(options.alternate ? !reverse : reverse));
            }
        };
        let repeat = (reverse) => {
            var _a, _b;
            let info = (0, inlinejs_1.ResolveTransition)((((_b = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition')) || null), reverse);
            if (info && info.repeats) {
                let myCheckpoint = ++checkpoint;
                (info.repeats > 0) && (info.repeats -= 1);
                setTimeout(() => {
                    if (myCheckpoint == checkpoint) {
                        contextElement.dispatchEvent(new CustomEvent('animate.repeat'));
                        begin(reverse);
                    }
                }, (info.delay || inlinejs_1.DefaultTransitionDelay));
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
        (0, inlinejs_1.LazyCheck)(Object.assign(Object.assign({ componentId, contextElement, argKey, argOptions }, rest), { callback: apply }));
    };
    if (options.inner) {
        (_c = (_b = (0, inlinejs_1.FindComponentById)(componentId)) === null || _b === void 0 ? void 0 : _b.FindElementScope(contextElement)) === null || _c === void 0 ? void 0 : _c.AddPostProcessCallback(bind);
    }
    else { //Immediate
        bind();
    }
    let data = (_e = (_d = (0, inlinejs_1.FindComponentById)(componentId)) === null || _d === void 0 ? void 0 : _d.FindElementScope(contextElement)) === null || _e === void 0 ? void 0 : _e.GetData('transition');
    if (!data || (0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        (_g = (_f = (0, inlinejs_1.FindComponentById)(componentId)) === null || _f === void 0 ? void 0 : _f.FindElementScope(contextElement)) === null || _g === void 0 ? void 0 : _g.SetData('transition', {
            actor: null,
            ease: null,
            duration: inlinejs_1.DefaultTransitionDuration,
            repeats: inlinejs_1.DefaultTransitionRepeats,
            delay: inlinejs_1.DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        });
    }
    (_j = (_h = (0, inlinejs_1.FindComponentById)(componentId)) === null || _h === void 0 ? void 0 : _h.FindElementScope(contextElement)) === null || _j === void 0 ? void 0 : _j.AddUninitCallback(() => (checkpoint += 1));
});
function AnimateDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.AnimateDirectiveHandler);
}
exports.AnimateDirectiveHandlerCompact = AnimateDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/transition.ts":
/*!*************************************!*\
  !*** ./src/directive/transition.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransitionDirectiveHandlerCompact = exports.TransitionDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
function HandleNumeric({ data, key, defaultValue, componentId, contextElement, expression, isDuration }) {
    if ((0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        return;
    }
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), update = (value) => {
        if (isDuration && typeof value === 'string') {
            data[key] = ((0, inlinejs_1.ExtractDuration)(value) || defaultValue);
        }
        else {
            data[key] = (((typeof value === 'number') && value) || defaultValue);
        }
    };
    (0, inlinejs_1.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(update),
    });
}
function GetData({ componentId, component, contextElement, argOptions }) {
    var _a, _b, _c, _d;
    let data = (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition');
    if (!data || (0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        data = {
            actor: null,
            ease: null,
            duration: inlinejs_1.DefaultTransitionDuration,
            repeats: inlinejs_1.DefaultTransitionRepeats,
            delay: inlinejs_1.DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        };
        (_d = (_c = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _c === void 0 ? void 0 : _c.FindElementScope(contextElement)) === null || _d === void 0 ? void 0 : _d.SetData('transition', data);
    }
    return data;
}
exports.TransitionDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('transition', (_a) => {
    var { componentId, component, contextElement, expression, argKey, argOptions } = _a, rest = __rest(_a, ["componentId", "component", "contextElement", "expression", "argKey", "argOptions"]);
    if ((0, inlinejs_1.BindEvent)({ contextElement, expression,
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
    if (argKey === 'actor' && !(0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), updateActor = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.actor = (((_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(value)) || null);
            }
            else {
                data.actor = (value || null);
            }
        };
        (0, inlinejs_1.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(updateActor),
        });
    }
    else if (argKey === 'ease' && !(0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression }), updateEase = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.ease = (((_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(value)) || null);
            }
            else {
                data.ease = (value || null);
            }
        };
        (0, inlinejs_1.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(updateEase),
        });
    }
    else if (argKey === 'duration') {
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 300, isDuration: true });
    }
    else if (argKey === 'repeats' || argKey === 'delay') {
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 0, isDuration: (argKey === 'delay') });
    }
    else { //Check for object
        (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true })((value) => {
            if ((0, inlinejs_1.IsObject)(value)) { //Copy props
                Object.entries(value).forEach(([key, value]) => (data[key] = value));
            }
        });
    }
});
function TransitionDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.TransitionDirectiveHandler);
}
exports.TransitionDirectiveHandlerCompact = TransitionDirectiveHandlerCompact;


/***/ }),

/***/ "./src/easing/add.ts":
/*!***************************!*\
  !*** ./src/easing/add.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddAnimationEase = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
function AddAnimationEase(handler) {
    var _a, _b;
    let name = '', callback = null;
    if ((0, inlinejs_1.IsObject)(handler)) { //Details provided
        ({ name, callback } = handler);
        if (name && callback) {
            (_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Add(callback, name);
        }
    }
    else { //Instance provided
        (_b = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _b === void 0 ? void 0 : _b.GetEaseCollection().Add(handler);
    }
}
exports.AddAnimationEase = AddAnimationEase;


/***/ }),

/***/ "./src/easing/back.ts":
/*!****************************!*\
  !*** ./src/easing/back.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackInOutAnimationEaseCompact = exports.BackInOutAnimationEase = exports.BackOutAnimationEaseCompact = exports.BackOutAnimationEase = exports.BackInAnimationEaseCompact = exports.BackInAnimationEase = exports.BackAnimationEaseCompact = exports.BackAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.BackAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('back', ({ fraction }) => {
    fraction = (1 - fraction);
    return (1 - (fraction * fraction * ((2.70158 * fraction) - 1.70158)));
});
function BackAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.BackAnimationEase);
}
exports.BackAnimationEaseCompact = BackAnimationEaseCompact;
exports.BackInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('backIn', ({ fraction }) => ((2.70158 * fraction * fraction * fraction) - (1.70158 * fraction * fraction)));
function BackInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.BackInAnimationEase);
}
exports.BackInAnimationEaseCompact = BackInAnimationEaseCompact;
exports.BackOutAnimationEase = { name: `${exports.BackAnimationEase.name}Out`, callback: exports.BackAnimationEase.callback };
function BackOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.BackOutAnimationEase);
}
exports.BackOutAnimationEaseCompact = BackOutAnimationEaseCompact;
exports.BackInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('backInOut', ({ fraction }) => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    if (fraction < 0.5) {
        return ((Math.pow(2 * fraction, 2) * ((c2 + 1) * 2 * fraction - c2)) / 2);
    }
    return ((Math.pow(2 * fraction - 2, 2) * ((c2 + 1) * (fraction * 2 - 2) + c2) + 2) / 2);
});
function BackInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.BackInOutAnimationEase);
}
exports.BackInOutAnimationEaseCompact = BackInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/bounce.ts":
/*!******************************!*\
  !*** ./src/easing/bounce.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BounceInOutAnimationEaseCompact = exports.BounceInOutAnimationEase = exports.BounceOutAnimationEaseCompact = exports.BounceOutAnimationEase = exports.BounceInAnimationEaseCompact = exports.BounceInAnimationEase = exports.BounceAnimationEaseCompact = exports.BounceAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.BounceAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('bounce', ({ fraction }) => {
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
    (0, add_1.AddAnimationEase)(exports.BounceAnimationEase);
}
exports.BounceAnimationEaseCompact = BounceAnimationEaseCompact;
exports.BounceInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('bounceIn', (_a) => {
    var { fraction } = _a, rest = __rest(_a, ["fraction"]);
    return (1 - exports.BounceAnimationEase.callback(Object.assign({ fraction: (1 - fraction) }, rest)));
});
function BounceInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.BounceInAnimationEase);
}
exports.BounceInAnimationEaseCompact = BounceInAnimationEaseCompact;
exports.BounceOutAnimationEase = { name: `${exports.BounceAnimationEase.name}Out`, callback: exports.BounceAnimationEase.callback };
function BounceOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.BounceOutAnimationEase);
}
exports.BounceOutAnimationEaseCompact = BounceOutAnimationEaseCompact;
exports.BounceInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('bounceInOut', (_a) => {
    var { fraction } = _a, rest = __rest(_a, ["fraction"]);
    if (fraction < 0.5) {
        return ((1 - exports.BounceInAnimationEase.callback(Object.assign({ fraction: (1 - (2 * fraction)) }, rest))) / 2);
    }
    return ((1 + exports.BounceAnimationEase.callback(Object.assign({ fraction: ((2 * fraction) - 1) }, rest))) / 2);
});
function BounceInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.BounceInOutAnimationEase);
}
exports.BounceInOutAnimationEaseCompact = BounceInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/callback.ts":
/*!********************************!*\
  !*** ./src/easing/callback.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAnimationEaseCallback = void 0;
function CreateAnimationEaseCallback(name, callback) {
    return { name, callback };
}
exports.CreateAnimationEaseCallback = CreateAnimationEaseCallback;


/***/ }),

/***/ "./src/easing/circle.ts":
/*!******************************!*\
  !*** ./src/easing/circle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleInOutAnimationEaseCompact = exports.CircleInOutAnimationEase = exports.CircleOutAnimationEaseCompact = exports.CircleOutAnimationEase = exports.CircleInAnimationEaseCompact = exports.CircleInAnimationEase = exports.CircleAnimationEaseCompact = exports.CircleAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.CircleAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('circle', ({ fraction }) => Math.sqrt(1 - Math.pow((fraction - 1), 2)));
function CircleAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CircleAnimationEase);
}
exports.CircleAnimationEaseCompact = CircleAnimationEaseCompact;
exports.CircleInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('circleIn', ({ fraction }) => (1 - Math.sqrt(1 - Math.pow(fraction, 2))));
function CircleInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CircleInAnimationEase);
}
exports.CircleInAnimationEaseCompact = CircleInAnimationEaseCompact;
exports.CircleOutAnimationEase = { name: `${exports.CircleAnimationEase.name}Out`, callback: exports.CircleAnimationEase.callback };
function CircleOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CircleOutAnimationEase);
}
exports.CircleOutAnimationEaseCompact = CircleOutAnimationEaseCompact;
exports.CircleInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('circleInOut', ({ fraction }) => {
    return (fraction < 0.5) ? ((1 - Math.sqrt(1 - Math.pow((2 * fraction), 2))) / 2) : ((Math.sqrt(1 - Math.pow(((-2 * fraction) + 2), 2)) + 1) / 2);
});
function CircleInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CircleInOutAnimationEase);
}
exports.CircleInOutAnimationEaseCompact = CircleInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/cubic.ts":
/*!*****************************!*\
  !*** ./src/easing/cubic.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CubicInOutAnimationEaseCompact = exports.CubicInOutAnimationEase = exports.CubicOutAnimationEaseCompact = exports.CubicOutAnimationEase = exports.CubicInAnimationEaseCompact = exports.CubicInAnimationEase = exports.CubicAnimationEaseCompact = exports.CubicAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.CubicAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('cubic', ({ fraction }) => (1 - Math.pow((1 - fraction), 3)));
function CubicAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CubicAnimationEase);
}
exports.CubicAnimationEaseCompact = CubicAnimationEaseCompact;
exports.CubicInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('cubicIn', ({ fraction }) => Math.pow(fraction, 3));
function CubicInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CubicInAnimationEase);
}
exports.CubicInAnimationEaseCompact = CubicInAnimationEaseCompact;
exports.CubicOutAnimationEase = { name: `${exports.CubicAnimationEase.name}Out`, callback: exports.CubicAnimationEase.callback };
function CubicOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CubicOutAnimationEase);
}
exports.CubicOutAnimationEaseCompact = CubicOutAnimationEaseCompact;
exports.CubicInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('cubicInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (4 * Math.pow(fraction, 3)) : (1 - (Math.pow(((-2 * fraction) + 2), 3) / 2)));
});
function CubicInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.CubicInOutAnimationEase);
}
exports.CubicInOutAnimationEaseCompact = CubicInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/default.ts":
/*!*******************************!*\
  !*** ./src/easing/default.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultAnimationEaseCompact = exports.DefaultAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.DefaultAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('default', ({ fraction }) => ((fraction != 1) ? (-1 * Math.cos(fraction * (Math.PI / 2)) + 1) : 1));
function DefaultAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.DefaultAnimationEase);
}
exports.DefaultAnimationEaseCompact = DefaultAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/elastic.ts":
/*!*******************************!*\
  !*** ./src/easing/elastic.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElasticInOutAnimationEaseCompact = exports.ElasticInOutAnimationEase = exports.ElasticOutAnimationEaseCompact = exports.ElasticOutAnimationEase = exports.ElasticInAnimationEaseCompact = exports.ElasticInAnimationEase = exports.ElasticAnimationEaseCompact = exports.ElasticAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.ElasticAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('elastic', ({ fraction }) => {
    return ((fraction == 0 || fraction == 1) ? fraction : (Math.pow(2, (-10 * fraction)) * Math.sin(((fraction * 10) - 0.75) * ((2 * Math.PI) / 3)) + 1));
});
function ElasticAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.ElasticAnimationEase);
}
exports.ElasticAnimationEaseCompact = ElasticAnimationEaseCompact;
exports.ElasticInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('elasticIn', ({ fraction }) => {
    return ((fraction == 0) ? 0 : ((fraction == 1) ? 1 : -Math.pow(2, 10 * fraction - 10) * Math.sin((fraction * 10 - 10.75) * ((2 * Math.PI) / 3))));
});
function ElasticInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.ElasticInAnimationEase);
}
exports.ElasticInAnimationEaseCompact = ElasticInAnimationEaseCompact;
exports.ElasticOutAnimationEase = { name: `${exports.ElasticAnimationEase.name}Out`, callback: exports.ElasticAnimationEase.callback };
function ElasticOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.ElasticOutAnimationEase);
}
exports.ElasticOutAnimationEaseCompact = ElasticOutAnimationEaseCompact;
exports.ElasticInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('elasticInOut', ({ fraction }) => {
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
    (0, add_1.AddAnimationEase)(exports.ElasticInOutAnimationEase);
}
exports.ElasticInOutAnimationEaseCompact = ElasticInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/exponential.ts":
/*!***********************************!*\
  !*** ./src/easing/exponential.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExponentialInOutAnimationEaseCompact = exports.ExponentialInOutAnimationEase = exports.ExponentialOutAnimationEaseCompact = exports.ExponentialOutAnimationEase = exports.ExponentialInAnimationEaseCompact = exports.ExponentialInAnimationEase = exports.ExponentialAnimationEaseCompact = exports.ExponentialAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.ExponentialAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('exponential', ({ fraction }) => ((fraction == 1) ? fraction : (1 - Math.pow(2, (-10 * fraction)))));
function ExponentialAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.ExponentialAnimationEase);
}
exports.ExponentialAnimationEaseCompact = ExponentialAnimationEaseCompact;
exports.ExponentialInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('exponentialIn', ({ fraction }) => ((fraction == 0) ? 0 : Math.pow(2, ((10 * fraction) - 10))));
function ExponentialInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.ExponentialInAnimationEase);
}
exports.ExponentialInAnimationEaseCompact = ExponentialInAnimationEaseCompact;
exports.ExponentialOutAnimationEase = { name: `${exports.ExponentialAnimationEase.name}Out`, callback: exports.ExponentialAnimationEase.callback };
function ExponentialOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.ExponentialOutAnimationEase);
}
exports.ExponentialOutAnimationEaseCompact = ExponentialOutAnimationEaseCompact;
exports.ExponentialInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('exponentialInOut', ({ fraction }) => ((fraction == 1) ? fraction : (1 - Math.pow(2, (-10 * fraction)))));
function ExponentialInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.ExponentialInOutAnimationEase);
}
exports.ExponentialInOutAnimationEaseCompact = ExponentialInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/linear.ts":
/*!******************************!*\
  !*** ./src/easing/linear.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinearAnimationEaseCompact = exports.LinearAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.LinearAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('linear', ({ fraction }) => fraction);
function LinearAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.LinearAnimationEase);
}
exports.LinearAnimationEaseCompact = LinearAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/quadratic.ts":
/*!*********************************!*\
  !*** ./src/easing/quadratic.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuadraticInOutAnimationEaseCompact = exports.QuadraticInOutAnimationEase = exports.QuadraticOutAnimationEaseCompact = exports.QuadraticOutAnimationEase = exports.QuadraticInAnimationEaseCompact = exports.QuadraticInAnimationEase = exports.QuadraticAnimationEaseCompact = exports.QuadraticAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.QuadraticAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quadratic', ({ fraction }) => (1 - Math.pow((1 - fraction), 2)));
function QuadraticAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuadraticAnimationEase);
}
exports.QuadraticAnimationEaseCompact = QuadraticAnimationEaseCompact;
exports.QuadraticInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quadraticIn', ({ fraction }) => Math.pow(fraction, 2));
function QuadraticInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuadraticInAnimationEase);
}
exports.QuadraticInAnimationEaseCompact = QuadraticInAnimationEaseCompact;
exports.QuadraticOutAnimationEase = { name: `${exports.QuadraticAnimationEase.name}Out`, callback: exports.QuadraticAnimationEase.callback };
function QuadraticOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuadraticOutAnimationEase);
}
exports.QuadraticOutAnimationEaseCompact = QuadraticOutAnimationEaseCompact;
exports.QuadraticInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quadraticInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (2 * Math.pow(fraction, 2)) : (1 - (Math.pow(((-2 * fraction) + 2), 2) / 2)));
});
function QuadraticInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuadraticInOutAnimationEase);
}
exports.QuadraticInOutAnimationEaseCompact = QuadraticInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/quart.ts":
/*!*****************************!*\
  !*** ./src/easing/quart.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuartInOutAnimationEaseCompact = exports.QuartInOutAnimationEase = exports.QuartOutAnimationEaseCompact = exports.QuartOutAnimationEase = exports.QuartInAnimationEaseCompact = exports.QuartInAnimationEase = exports.QuartAnimationEaseCompact = exports.QuartAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.QuartAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quart', ({ fraction }) => (1 - Math.pow((1 - fraction), 4)));
function QuartAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuartAnimationEase);
}
exports.QuartAnimationEaseCompact = QuartAnimationEaseCompact;
exports.QuartInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quartIn', ({ fraction }) => Math.pow((1 - fraction), 4));
function QuartInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuartInAnimationEase);
}
exports.QuartInAnimationEaseCompact = QuartInAnimationEaseCompact;
exports.QuartOutAnimationEase = { name: `${exports.QuartAnimationEase.name}Out`, callback: exports.QuartAnimationEase.callback };
function QuartOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuartOutAnimationEase);
}
exports.QuartOutAnimationEaseCompact = QuartOutAnimationEaseCompact;
exports.QuartInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quartInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (8 * Math.pow(fraction, 4)) : (1 - (Math.pow(((-2 * fraction) + 2), 4) / 2)));
});
function QuartInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuartInOutAnimationEase);
}
exports.QuartInOutAnimationEaseCompact = QuartInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/quint.ts":
/*!*****************************!*\
  !*** ./src/easing/quint.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuintInOutAnimationEaseCompact = exports.QuintInOutAnimationEase = exports.QuintOutAnimationEaseCompact = exports.QuintOutAnimationEase = exports.QuintInAnimationEaseCompact = exports.QuintInAnimationEase = exports.QuintAnimationEaseCompact = exports.QuintAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.QuintAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quint', ({ fraction }) => (1 - Math.pow((1 - fraction), 5)));
function QuintAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuintAnimationEase);
}
exports.QuintAnimationEaseCompact = QuintAnimationEaseCompact;
exports.QuintInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quintIn', ({ fraction }) => Math.pow((1 - fraction), 5));
function QuintInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuintInAnimationEase);
}
exports.QuintInAnimationEaseCompact = QuintInAnimationEaseCompact;
exports.QuintOutAnimationEase = { name: `${exports.QuintAnimationEase.name}Out`, callback: exports.QuintAnimationEase.callback };
function QuintOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuintOutAnimationEase);
}
exports.QuintOutAnimationEaseCompact = QuintOutAnimationEaseCompact;
exports.QuintInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('quintInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (16 * Math.pow(fraction, 5)) : (1 - (Math.pow(((-2 * fraction) + 2), 5) / 2)));
});
function QuintInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.QuintInOutAnimationEase);
}
exports.QuintInOutAnimationEaseCompact = QuintInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/easing/sine.ts":
/*!****************************!*\
  !*** ./src/easing/sine.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SineInOutAnimationEaseCompact = exports.SineInOutAnimationEase = exports.SineOutAnimationEaseCompact = exports.SineOutAnimationEase = exports.SineInAnimationEaseCompact = exports.SineInAnimationEase = exports.SineAnimationEaseCompact = exports.SineAnimationEase = void 0;
const add_1 = __webpack_require__(/*! ./add */ "./src/easing/add.ts");
const callback_1 = __webpack_require__(/*! ./callback */ "./src/easing/callback.ts");
exports.SineAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('sine', ({ fraction }) => Math.sin((fraction * Math.PI) / 2));
function SineAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.SineAnimationEase);
}
exports.SineAnimationEaseCompact = SineAnimationEaseCompact;
exports.SineInAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('sineIn', ({ fraction }) => (1 - Math.cos((fraction * Math.PI) / 2)));
function SineInAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.SineInAnimationEase);
}
exports.SineInAnimationEaseCompact = SineInAnimationEaseCompact;
exports.SineOutAnimationEase = { name: `${exports.SineAnimationEase.name}Out`, callback: exports.SineAnimationEase.callback };
function SineOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.SineOutAnimationEase);
}
exports.SineOutAnimationEaseCompact = SineOutAnimationEaseCompact;
exports.SineInOutAnimationEase = (0, callback_1.CreateAnimationEaseCallback)('sineInOut', ({ fraction }) => (-(Math.cos(Math.PI * fraction) - 1) / 2));
function SineInOutAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.SineInOutAnimationEase);
}
exports.SineInOutAnimationEaseCompact = SineInOutAnimationEaseCompact;


/***/ }),

/***/ "./src/magic/animation.ts":
/*!********************************!*\
  !*** ./src/magic/animation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationMagicHandlerCompact = exports.AnimationMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const generic_1 = __webpack_require__(/*! ../actors/scene/generic */ "./src/actors/scene/generic.ts");
const NamedAnimationDurations = {
    crawl: 2000,
    slower: 1000,
    slow: 750,
    normal: 500,
    fast: 300,
    faster: 200,
    swift: 100,
};
const NamedAnimationConstants = {
    infinite: -1,
};
function CreateAnimationProxy() {
    let callActor = (actor, params) => ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
    let storedConcept = null, methods = {
        collect: (...actors) => {
            let concept = (storedConcept || (storedConcept = (0, inlinejs_1.GetGlobal)().GetConcept('animation')));
            let validActors = actors.map(actor => ((typeof actor === 'string') ? concept === null || concept === void 0 ? void 0 : concept.GetActorCollection().Find(actor) : actor)).filter(actor => !!actor);
            return (params) => validActors.forEach(actor => callActor(actor, params));
        },
        applySceneRange: generic_1.ApplyRange,
        applySceneTransform: generic_1.ApplyTransform,
        applySceneRangeAndTransform: generic_1.ApplyRangeAndTransform,
        formatSceneValue: generic_1.FormatValue,
    };
    return (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
        getter: (prop) => {
            if (!prop) {
                return;
            }
            let concept = (storedConcept || (storedConcept = (0, inlinejs_1.GetGlobal)().GetConcept('animation')));
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
            if (methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
        },
        lookup: [...Object.keys(methods)],
    }));
}
const AnimationProxy = CreateAnimationProxy();
exports.AnimationMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('animation', () => AnimationProxy);
function AnimationMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.AnimationMagicHandler);
}
exports.AnimationMagicHandlerCompact = AnimationMagicHandlerCompact;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/*!***********************************!*\
  !*** ./src/inlinejs-animation.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const concept_1 = __webpack_require__(/*! ./concept */ "./src/concept.ts");
const back_1 = __webpack_require__(/*! ./easing/back */ "./src/easing/back.ts");
const bounce_1 = __webpack_require__(/*! ./easing/bounce */ "./src/easing/bounce.ts");
const circle_1 = __webpack_require__(/*! ./easing/circle */ "./src/easing/circle.ts");
const cubic_1 = __webpack_require__(/*! ./easing/cubic */ "./src/easing/cubic.ts");
const elastic_1 = __webpack_require__(/*! ./easing/elastic */ "./src/easing/elastic.ts");
const exponential_1 = __webpack_require__(/*! ./easing/exponential */ "./src/easing/exponential.ts");
const quadratic_1 = __webpack_require__(/*! ./easing/quadratic */ "./src/easing/quadratic.ts");
const quart_1 = __webpack_require__(/*! ./easing/quart */ "./src/easing/quart.ts");
const quint_1 = __webpack_require__(/*! ./easing/quint */ "./src/easing/quint.ts");
const sine_1 = __webpack_require__(/*! ./easing/sine */ "./src/easing/sine.ts");
const default_1 = __webpack_require__(/*! ./easing/default */ "./src/easing/default.ts");
const linear_1 = __webpack_require__(/*! ./easing/linear */ "./src/easing/linear.ts");
const default_2 = __webpack_require__(/*! ./actors/default */ "./src/actors/default.ts");
const null_1 = __webpack_require__(/*! ./actors/null */ "./src/actors/null.ts");
const opacity_1 = __webpack_require__(/*! ./actors/opacity */ "./src/actors/opacity.ts");
const width_1 = __webpack_require__(/*! ./actors/scale/width */ "./src/actors/scale/width.ts");
const height_1 = __webpack_require__(/*! ./actors/scale/height */ "./src/actors/scale/height.ts");
const zoom_1 = __webpack_require__(/*! ./actors/scale/zoom */ "./src/actors/scale/zoom.ts");
const slide_down_1 = __webpack_require__(/*! ./actors/translate/slide-down */ "./src/actors/translate/slide-down.ts");
const slide_left_1 = __webpack_require__(/*! ./actors/translate/slide-left */ "./src/actors/translate/slide-left.ts");
const slide_right_1 = __webpack_require__(/*! ./actors/translate/slide-right */ "./src/actors/translate/slide-right.ts");
const slide_up_1 = __webpack_require__(/*! ./actors/translate/slide-up */ "./src/actors/translate/slide-up.ts");
const spin_1 = __webpack_require__(/*! ./actors/rotate/spin */ "./src/actors/rotate/spin.ts");
const flip_1 = __webpack_require__(/*! ./actors/rotate/flip */ "./src/actors/rotate/flip.ts");
const toss_1 = __webpack_require__(/*! ./actors/rotate/toss */ "./src/actors/rotate/toss.ts");
const pulse_1 = __webpack_require__(/*! ./actors/scene/pulse */ "./src/actors/scene/pulse.ts");
const heartbeat_1 = __webpack_require__(/*! ./actors/scene/heartbeat */ "./src/actors/scene/heartbeat.ts");
const bezier_1 = __webpack_require__(/*! ./creators/bezier */ "./src/creators/bezier.ts");
const scale_1 = __webpack_require__(/*! ./creators/scale */ "./src/creators/scale.ts");
const translate_1 = __webpack_require__(/*! ./creators/translate */ "./src/creators/translate.ts");
const rotate_1 = __webpack_require__(/*! ./creators/rotate */ "./src/creators/rotate.ts");
const scene_1 = __webpack_require__(/*! ./creators/scene */ "./src/creators/scene.ts");
const shake_1 = __webpack_require__(/*! ./creators/shake */ "./src/creators/shake.ts");
const vibrate_1 = __webpack_require__(/*! ./creators/vibrate */ "./src/creators/vibrate.ts");
const rubberband_1 = __webpack_require__(/*! ./creators/rubberband */ "./src/creators/rubberband.ts");
const jello_1 = __webpack_require__(/*! ./creators/jello */ "./src/creators/jello.ts");
const tada_1 = __webpack_require__(/*! ./creators/tada */ "./src/creators/tada.ts");
const swing_1 = __webpack_require__(/*! ./creators/swing */ "./src/creators/swing.ts");
const transition_1 = __webpack_require__(/*! ./directive/transition */ "./src/directive/transition.ts");
const animate_1 = __webpack_require__(/*! ./directive/animate */ "./src/directive/animate.ts");
const animation_1 = __webpack_require__(/*! ./magic/animation */ "./src/magic/animation.ts");
(0, inlinejs_1.WaitForGlobal)().then(() => {
    let concept = new concept_1.AnimationConcept(), easings = concept.GetEaseCollection(), actors = concept.GetActorCollection(), creators = concept.GetCreatorCollection();
    let addEase = (info) => easings.Add(info.callback, info.name);
    let addActor = (info) => actors.Add(info.callback, info.name);
    let addCreator = (name, callback) => creators.Add(name, callback);
    addEase(back_1.BackAnimationEase);
    addEase(back_1.BackInAnimationEase);
    addEase(back_1.BackOutAnimationEase);
    addEase(back_1.BackInOutAnimationEase);
    addEase(bounce_1.BounceAnimationEase);
    addEase(bounce_1.BounceInAnimationEase);
    addEase(bounce_1.BounceOutAnimationEase);
    addEase(bounce_1.BounceInOutAnimationEase);
    addEase(circle_1.CircleAnimationEase);
    addEase(circle_1.CircleInAnimationEase);
    addEase(circle_1.CircleOutAnimationEase);
    addEase(circle_1.CircleInOutAnimationEase);
    addEase(cubic_1.CubicAnimationEase);
    addEase(cubic_1.CubicInAnimationEase);
    addEase(cubic_1.CubicOutAnimationEase);
    addEase(cubic_1.CubicInOutAnimationEase);
    addEase(elastic_1.ElasticAnimationEase);
    addEase(elastic_1.ElasticInAnimationEase);
    addEase(elastic_1.ElasticOutAnimationEase);
    addEase(elastic_1.ElasticInOutAnimationEase);
    addEase(exponential_1.ExponentialAnimationEase);
    addEase(exponential_1.ExponentialInAnimationEase);
    addEase(exponential_1.ExponentialOutAnimationEase);
    addEase(exponential_1.ExponentialInOutAnimationEase);
    addEase(quadratic_1.QuadraticAnimationEase);
    addEase(quadratic_1.QuadraticInAnimationEase);
    addEase(quadratic_1.QuadraticOutAnimationEase);
    addEase(quadratic_1.QuadraticInOutAnimationEase);
    addEase(quart_1.QuartAnimationEase);
    addEase(quart_1.QuartInAnimationEase);
    addEase(quart_1.QuartOutAnimationEase);
    addEase(quart_1.QuartInOutAnimationEase);
    addEase(quint_1.QuintAnimationEase);
    addEase(quint_1.QuintInAnimationEase);
    addEase(quint_1.QuintOutAnimationEase);
    addEase(quint_1.QuintInOutAnimationEase);
    addEase(sine_1.SineAnimationEase);
    addEase(sine_1.SineInAnimationEase);
    addEase(sine_1.SineOutAnimationEase);
    addEase(sine_1.SineInOutAnimationEase);
    addEase(default_1.DefaultAnimationEase);
    addEase(linear_1.LinearAnimationEase);
    addActor(default_2.DefaultAnimationActor);
    addActor(null_1.NullAnimationActor);
    addActor(opacity_1.OpacityAnimationActor);
    addActor(width_1.WidthAnimationActor);
    addActor(height_1.HeightAnimationActor);
    addActor(zoom_1.ZoomAnimationActor);
    addActor(slide_down_1.SlideDownAnimationActor);
    addActor(slide_left_1.SlideLeftAnimationActor);
    addActor(slide_right_1.SlideRightAnimationActor);
    addActor(slide_up_1.SlideUpAnimationActor);
    addActor(spin_1.SpinAnimationActor);
    addActor(flip_1.FlipAnimationActor);
    addActor(toss_1.TossAnimationActor);
    addActor(pulse_1.PulseAnimationActor);
    addActor(heartbeat_1.HeartbeatAnimationActor);
    addCreator('bezier', bezier_1.BezierAnimationEaseCreator);
    addCreator('scale', scale_1.ScaleAnimationCreator);
    addCreator('translate', translate_1.TranslateAnimationCreator);
    addCreator('rotate', rotate_1.RotateAnimationCreator);
    addCreator('scene', scene_1.SceneAnimationCreator);
    addCreator('shake', shake_1.ShakeAnimationCreator);
    addCreator('vibrate', vibrate_1.VibrateAnimationCreator);
    addCreator('rubberband', rubberband_1.RubberbandAnimationCreator);
    addCreator('jello', jello_1.JelloAnimationCreator);
    addCreator('tada', tada_1.TadaAnimationCreator);
    addCreator('swing', swing_1.SwingAnimationCreator);
    (0, inlinejs_1.GetGlobal)().SetConcept('animation', concept);
    (0, transition_1.TransitionDirectiveHandlerCompact)();
    (0, animate_1.AnimateDirectiveHandlerCompact)();
    (0, animation_1.AnimationMagicHandlerCompact)();
});

})();

/******/ })()
;