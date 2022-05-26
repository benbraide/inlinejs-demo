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

/***/ "./src/directive/attr/bind.ts":
/*!************************************!*\
  !*** ./src/directive/attr/bind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BindDirectiveHandlerCompact = exports.BindDirectiveExpansionRule = exports.BindDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.BindDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('bind', ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
    var _a, _b;
    argKey = argKey.trim();
    if (argKey === 'key') {
        return (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.SetKey(expression);
    }
    let options = (0, inlinejs_1.ResolveOptions)({ options: { camel: false }, list: argOptions });
    (0, inlinejs_1.ResolveKeyValue)({ componentId, contextElement, expression,
        key: argKey,
        callback: ([key, value]) => {
            key = (options.camel ? (0, inlinejs_1.ToCamelCase)(key) : key);
            let isBoolean = (0, inlinejs_1.GetGlobal)().GetConfig().IsBooleanAttribute(key);
            if (value || ((value === 0 || value === '') && !isBoolean)) { //Set
                contextElement.setAttribute(key, (isBoolean ? key : (0, inlinejs_1.ToString)(value)));
            }
            else { //Remove
                contextElement.removeAttribute(key);
            }
        },
    });
});
function BindDirectiveExpansionRule(name) {
    return (name.startsWith(':') ? ((0, inlinejs_1.GetGlobal)().GetConfig().GetDirectiveName('bind') + name) : null);
}
exports.BindDirectiveExpansionRule = BindDirectiveExpansionRule;
function BindDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.BindDirectiveHandler);
    (0, inlinejs_1.GetGlobal)().GetDirectiveManager().AddExpansionRule(BindDirectiveExpansionRule);
}
exports.BindDirectiveHandlerCompact = BindDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/attr/class.ts":
/*!*************************************!*\
  !*** ./src/directive/attr/class.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassDirectiveHandlerCompact = exports.ClassDirectiveExpansionRule = exports.ClassDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ClassDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('class', ({ componentId, contextElement, expression, argKey }) => {
    let split = (key) => key.split(' ').filter(item => !!item), previousList = null;
    let add = (key) => contextElement.classList.add(key), remove = (key) => (contextElement.classList.contains(key) && contextElement.classList.remove(key));
    (0, inlinejs_1.ResolveKeyValue)({ componentId, contextElement, expression,
        key: argKey.trim(),
        callback: ([key, value]) => split(key).forEach(value ? add : remove),
        arrayCallback: (list) => {
            let validList = list.map(item => (0, inlinejs_1.ToString)(item)).filter(item => !!item);
            (previousList || []).filter(item => !validList.includes(item)).forEach(remove);
            (previousList ? validList.filter(item => !previousList.includes(item)) : validList).forEach(add);
            previousList = validList;
        },
    });
});
function ClassDirectiveExpansionRule(name) {
    return (name.startsWith('.') ? name.replace('.', (0, inlinejs_1.GetGlobal)().GetConfig().GetDirectiveName('class:')) : null);
}
exports.ClassDirectiveExpansionRule = ClassDirectiveExpansionRule;
function ClassDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.ClassDirectiveHandler);
    (0, inlinejs_1.GetGlobal)().GetDirectiveManager().AddExpansionRule(ClassDirectiveExpansionRule);
}
exports.ClassDirectiveHandlerCompact = ClassDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/attr/style.ts":
/*!*************************************!*\
  !*** ./src/directive/attr/style.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StyleDirectiveHandlerCompact = exports.StyleDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.StyleDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('style', ({ componentId, contextElement, expression, argKey }) => {
    (0, inlinejs_1.ResolveKeyValue)({ componentId, contextElement, expression,
        key: argKey.trim(),
        callback: ([key, value]) => {
            key = (0, inlinejs_1.ToCamelCase)(key, false, '.');
            if (key in contextElement.style) {
                contextElement.style[key] = (0, inlinejs_1.ToString)(value);
            }
        },
    });
});
function StyleDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.StyleDirectiveHandler);
}
exports.StyleDirectiveHandlerCompact = StyleDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/cloak.ts":
/*!********************************!*\
  !*** ./src/directive/cloak.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloakDirectiveHandlerCompact = exports.CloakDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.CloakDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('cloak', () => { });
function CloakDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.CloakDirectiveHandler);
}
exports.CloakDirectiveHandlerCompact = CloakDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/control/each.ts":
/*!***************************************!*\
  !*** ./src/directive/control/each.ts ***!
  \***************************************/
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
exports.EachDirectiveHandlerCompact = exports.EachDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const init_1 = __webpack_require__(/*! ./init */ "./src/directive/control/init.ts");
const insert_1 = __webpack_require__(/*! ./insert */ "./src/directive/control/insert.ts");
exports.EachDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('each', (_a) => {
    var _b, _c, _d, _e;
    var { componentId, component, contextElement, expression } = _a, rest = __rest(_a, ["componentId", "component", "contextElement", "expression"]);
    expression = expression.trim(); // list as value || list as key => value
    let [_, matchedExpression, keyName, __, valueName] = (expression.match(/^(.+?)?\s+as\s+([A-Za-z_$][0-9A-Za-z_$]*)(\s*=>\s*([A-Za-z_$][0-9A-Za-z_$]*))?$/) || []);
    matchedExpression = (matchedExpression || expression); //Use expression if no match
    if (!valueName) {
        valueName = keyName;
        keyName = '';
    }
    let init = (0, init_1.InitControl)(Object.assign({ componentId, component, contextElement, expression: matchedExpression }, rest));
    if (!init) { //Failed to initialize
        return;
    }
    let key = (((_c = (_b = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _b === void 0 ? void 0 : _b.FindElementScope(contextElement)) === null || _c === void 0 ? void 0 : _c.GetKey()) || null);
    if (!key) { //Check if attribute is present
        key = (0, inlinejs_1.GetDirectiveValue)(contextElement, 'key', ':key');
    }
    let evaluateKey = (key ? (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression: key }) : null), getKey = (index, list) => {
        if (!evaluateKey) {
            return '';
        }
        let component = (0, inlinejs_1.FindComponentById)(componentId), elementScope = component === null || component === void 0 ? void 0 : component.FindElementScope(contextElement), targetList = (0, inlinejs_1.GetTarget)(list);
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal('$each', { index,
            collection: targetList,
            count: targetList.length,
            value: targetList[index],
            parent: component === null || component === void 0 ? void 0 : component.FindElementLocalValue(contextElement, '$each', true),
        });
        if (keyName) {
            elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal(keyName, index);
        }
        if (valueName) {
            elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal(valueName, targetList[index]);
        }
        let result = evaluateKey();
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.DeleteLocal('$each');
        if (keyName) {
            elementScope === null || elementScope === void 0 ? void 0 : elementScope.DeleteLocal(keyName);
        }
        if (valueName) {
            elementScope === null || elementScope === void 0 ? void 0 : elementScope.DeleteLocal(valueName);
        }
        return result;
    };
    let getCount = (list) => (Array.isArray(list) ? list.length : Object.keys(list).length);
    let createProxy = (component, data, value, index, parent) => {
        let state = { collection: data, count: getCount(data), index, value, parent }, id = component.GenerateUniqueId('each_proxy_');
        return {
            proxy: (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({ getter: (prop) => {
                    var _a;
                    if (prop && state.hasOwnProperty(prop)) {
                        (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddGetAccess(`${id}.${prop}`);
                        return state[prop];
                    }
                }, lookup: [...Object.keys(state)], alert: { componentId, id } })),
            refresh: (entries) => {
                Object.entries(entries).forEach(([key, value]) => {
                    var _a;
                    if (state.hasOwnProperty(key) && !(0, inlinejs_1.IsEqual)(state[key], value)) {
                        state[key] = value;
                        (0, inlinejs_1.AddChanges)('set', `${id}.${key}`, key, (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes);
                    }
                });
            },
        };
    };
    let list = null;
    let insert = (data, item, index, newList, key) => {
        let clone = null, component = (0, inlinejs_1.FindComponentById)(componentId);
        if (!component) {
            return;
        }
        (0, insert_1.InsertControlClone)({ componentId, contextElement,
            parent: init.parent,
            clone: (clone = init.clone()),
            relativeType: 'before',
            relative: contextElement,
            processDirectives: false, });
        let elementScope = component.CreateElementScope(clone);
        let proxyInfo = createProxy(component, data, item, index, component === null || component === void 0 ? void 0 : component.FindElementLocalValue(contextElement, '$each', true));
        let entryInfo = { proxyInfo,
            item: clone,
            transitionCancel: null,
            checkpoint: 0,
        };
        Array.isArray(newList) ? newList.push(entryInfo) : (newList[index] = entryInfo);
        if (key) {
            clone.setAttribute('key', key);
        }
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal('$each', proxyInfo.proxy);
        if (keyName) {
            elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal(keyName, (0, inlinejs_1.GetGlobal)().CreateFuture(() => proxyInfo.proxy['index']));
        }
        if (valueName) {
            elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal(valueName, (0, inlinejs_1.GetGlobal)().CreateFuture(() => proxyInfo.proxy['value']));
        }
        (0, inlinejs_1.ProcessDirectives)({
            component: component,
            element: clone,
            options: {
                checkDocument: false,
                checkTemplate: true,
            },
        });
        entryInfo.checkpoint += 1;
        entryInfo.transitionCancel && entryInfo.transitionCancel();
        let myCheckpoint = ++entryInfo.checkpoint;
        entryInfo.transitionCancel = (0, inlinejs_1.WaitTransition)({ componentId, contextElement,
            target: clone,
            callback: () => {
                if (myCheckpoint == entryInfo.checkpoint) {
                    entryInfo.transitionCancel = null;
                }
            },
            reverse: false,
        });
    };
    let remove = (info) => {
        let myCheckpoint = ++info.checkpoint;
        info.transitionCancel && info.transitionCancel();
        info.transitionCancel = (0, inlinejs_1.WaitTransition)({ componentId, contextElement,
            target: info.item,
            callback: () => {
                var _a, _b;
                if (myCheckpoint == info.checkpoint) {
                    info.transitionCancel = null;
                    if (info.item.parentElement) {
                        info.item.remove();
                        (_b = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(info.item)) === null || _b === void 0 ? void 0 : _b.Destroy();
                    }
                }
            },
            reverse: true, });
    };
    let generateItems = (data, callback) => {
        let newList = (Array.isArray(data) ? new Array() : {}), oldList = list;
        list = ((Array.isArray(data) == Array.isArray(list)) ? list : null);
        callback((item, index) => {
            let infoWithKey = null, key = null;
            if (Array.isArray(data)) {
                key = (0, inlinejs_1.ToString)(getKey(index, data));
                infoWithKey = ((list && key && list.find(({ item }) => (item.getAttribute('key') === key))) || null);
            }
            else if (list && list.hasOwnProperty(index)) {
                infoWithKey = list[index];
            }
            if (infoWithKey) { //Reuse element
                Array.isArray(newList) ? newList.push(infoWithKey) : (newList[index] = infoWithKey);
                infoWithKey.item.parentElement.insertBefore(infoWithKey.item, contextElement); //Move to update position
                infoWithKey.proxyInfo.refresh({ collection: data, value: item, index, count: getCount(data) });
            }
            else { //Create new
                insert(data, item, index, newList, key);
            }
        }, () => {
            if (Array.isArray(oldList)) {
                oldList.filter(info => !newList.includes(info)).forEach(remove);
            }
            else if (list) {
                Object.entries(oldList).filter(([key]) => !(key in newList)).forEach(([key, info]) => remove(info));
            }
            list = newList;
        });
    };
    let generateArrayItems = (data) => generateItems(data, (inserter, cleanup) => {
        data.forEach(inserter);
        cleanup();
    });
    let generateMapItems = (data) => generateItems(data, (inserter, cleanup) => {
        Object.entries(data).forEach(([key, value]) => inserter(value, key));
        cleanup();
    });
    (_e = (_d = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _d === void 0 ? void 0 : _d.FindElementScope(contextElement)) === null || _e === void 0 ? void 0 : _e.AddUninitCallback(() => generateArrayItems([]));
    let firstEntry = true;
    init.effect((value) => {
        let checkpoint = ++init.checkpoint, component = (firstEntry ? (0, inlinejs_1.FindComponentById)(componentId) : null);
        component === null || component === void 0 ? void 0 : component.GetBackend().changes.PushGetAccessStorageSnapshot(); //Prevent adding 'get access' entries
        (0, inlinejs_1.StreamData)(value, (value) => {
            if (checkpoint != (init === null || init === void 0 ? void 0 : init.checkpoint)) {
                return;
            }
            (0, inlinejs_1.JournalTry)(() => {
                if (Array.isArray(value)) {
                    generateArrayItems(value);
                }
                else if (typeof value === 'number') {
                    generateArrayItems((value < 0) ? Array.from(Array(-value).keys()).map(item => -(item + 1)) : Array.from(Array(value).keys()));
                }
                else if ((0, inlinejs_1.IsObject)(value)) {
                    generateMapItems(value);
                }
            }), 'InlineJS.EachDirectiveHandler.Effect', contextElement;
        });
        component === null || component === void 0 ? void 0 : component.GetBackend().changes.PopGetAccessStorageSnapshot(false);
        firstEntry = false;
    });
});
function EachDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.EachDirectiveHandler);
}
exports.EachDirectiveHandlerCompact = EachDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/control/else.ts":
/*!***************************************!*\
  !*** ./src/directive/control/else.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElseDirectiveHandlerCompact = exports.ElseDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const selection_1 = __webpack_require__(/*! ./selection */ "./src/directive/control/selection.ts");
exports.ElseDirectiveHandler = (0, selection_1.CreateSelectionDirectiveHandler)(true);
function ElseDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.ElseDirectiveHandler);
}
exports.ElseDirectiveHandlerCompact = ElseDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/control/if.ts":
/*!*************************************!*\
  !*** ./src/directive/control/if.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IfDirectiveHandlerCompact = exports.IfDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const selection_1 = __webpack_require__(/*! ./selection */ "./src/directive/control/selection.ts");
exports.IfDirectiveHandler = (0, selection_1.CreateSelectionDirectiveHandler)(false);
function IfDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.IfDirectiveHandler);
}
exports.IfDirectiveHandlerCompact = IfDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/control/init.ts":
/*!***************************************!*\
  !*** ./src/directive/control/init.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitControl = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
function InitControl({ componentId, component, contextElement, expression, originalView }) {
    let resolvedComponent = (component || (0, inlinejs_1.FindComponentById)(componentId));
    if (!resolvedComponent || resolvedComponent.GetRoot() === contextElement) {
        (0, inlinejs_1.JournalError)('Target is component root.', `'${originalView}'.Init`, contextElement);
        return null;
    }
    if (!(contextElement instanceof HTMLTemplateElement)) {
        (0, inlinejs_1.JournalError)('Target is not a template element.', `'${originalView}'.Init`, contextElement);
        return null;
    }
    if (contextElement.content.children.length > 1) {
        (0, inlinejs_1.JournalError)('Target must have a single child.', `'${originalView}'.Init`, contextElement);
        return null;
    }
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true });
    return {
        checkpoint: 0,
        parent: contextElement.parentElement,
        blueprint: contextElement.content.firstElementChild,
        effect: (handler) => (0, inlinejs_1.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(handler),
        }),
        clone: () => contextElement.content.firstElementChild.cloneNode(true),
    };
}
exports.InitControl = InitControl;


/***/ }),

/***/ "./src/directive/control/insert.ts":
/*!*****************************************!*\
  !*** ./src/directive/control/insert.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetRelativeOffset = exports.InsertControlClone = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const RelativeOffsetKey = 'cntrl_rel_off';
function InsertControlClone({ componentId, component, contextElement, parent, clone, relativeType, relative, copyLocals, processDirectives }) {
    var _a;
    let resolvedComponent = (component || (0, inlinejs_1.FindComponentById)(componentId));
    if (!resolvedComponent || !parent) {
        (0, inlinejs_1.JournalError)('Failed to resolve component.', 'InlineJS.InsertClone', contextElement);
        return;
    }
    let resolvedRelative = null, skipRelatives = (el) => {
        var _a;
        let offset = (((_a = resolvedComponent.FindElementScope(el)) === null || _a === void 0 ? void 0 : _a.GetData(RelativeOffsetKey)) || 0);
        if (typeof offset !== 'number' || offset <= 0) {
            return el;
        }
        for (let i = 0; i < offset && el; ++i) {
            el = el.nextElementSibling;
        }
        return skipRelatives(el);
    };
    if (relativeType === 'after') {
        resolvedRelative = skipRelatives((relative || contextElement).nextElementSibling);
    }
    else if (relativeType === 'before') {
        resolvedRelative = (relative || contextElement);
    }
    if (resolvedRelative) {
        parent.insertBefore(clone, resolvedRelative);
    }
    else {
        parent.appendChild(clone);
    }
    if (copyLocals !== false) { //Copy locals
        let elementScope = resolvedComponent.CreateElementScope(clone);
        Object.entries(((_a = resolvedComponent.FindElementScope(contextElement)) === null || _a === void 0 ? void 0 : _a.GetLocals()) || {}).forEach(([key, value]) => elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal(key, value));
    }
    if (processDirectives !== false) {
        (0, inlinejs_1.ProcessDirectives)({
            component: componentId,
            element: clone,
            options: {
                checkDocument: false,
                checkTemplate: true,
            },
        });
    }
}
exports.InsertControlClone = InsertControlClone;
function SetRelativeOffset(component, element, offset) {
    var _a, _b;
    (_b = (_a = ((typeof component === 'string') ? (0, inlinejs_1.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.FindElementScope(element)) === null || _b === void 0 ? void 0 : _b.SetData(RelativeOffsetKey, offset);
}
exports.SetRelativeOffset = SetRelativeOffset;


/***/ }),

/***/ "./src/directive/control/selection.ts":
/*!********************************************!*\
  !*** ./src/directive/control/selection.ts ***!
  \********************************************/
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
exports.CreateSelectionDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const init_1 = __webpack_require__(/*! ./init */ "./src/directive/control/init.ts");
const insert_1 = __webpack_require__(/*! ./insert */ "./src/directive/control/insert.ts");
function CreateSelectionDirectiveHandler(isElse) {
    return (0, inlinejs_1.CreateDirectiveHandlerCallback)((isElse ? 'else' : 'if'), (_a) => {
        var _b;
        var { componentId, component, contextElement, expression } = _a, rest = __rest(_a, ["componentId", "component", "contextElement", "expression"]);
        let resolvedComponent = (component || (0, inlinejs_1.FindComponentById)(componentId)), selectionScopeStackEntry = resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.PeekSelectionScope();
        if (isElse && (!(selectionScopeStackEntry === null || selectionScopeStackEntry === void 0 ? void 0 : selectionScopeStackEntry.scope) || !(selectionScopeStackEntry === null || selectionScopeStackEntry === void 0 ? void 0 : selectionScopeStackEntry.set))) {
            return (0, inlinejs_1.JournalError)('Missing matching \'if\' statement.', 'ElseDirectiveHandler', contextElement);
        }
        expression = expression.trim();
        let lastValue = false, lastEffectValue = null, lastState = (isElse && !!((_b = selectionScopeStackEntry === null || selectionScopeStackEntry === void 0 ? void 0 : selectionScopeStackEntry.scope) === null || _b === void 0 ? void 0 : _b.state));
        let firstEntry = true, init = (0, init_1.InitControl)(Object.assign({ componentId, component, contextElement, expression }, rest));
        if (!init) { //Failed to initialize
            return;
        }
        if (!expression && isElse) { //Evaluates to true
            init.effect = handler => handler(true);
        }
        let clone = null, insert = () => (0, insert_1.InsertControlClone)({ componentId, contextElement,
            parent: init.parent,
            clone: (clone = init.clone()),
            relativeType: 'before',
            relative: contextElement, });
        let remove = () => {
            var _a;
            if (clone && clone.parentElement) { //Remove from DOM and destroy scope on next tick
                let cloneCopy = clone;
                clone.remove();
                clone = null;
                (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(() => {
                    var _a, _b;
                    (_b = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(cloneCopy)) === null || _b === void 0 ? void 0 : _b.Destroy();
                    cloneCopy = null;
                });
            }
        };
        let checkpoint = 0, transitionCancel = null, effect = (value) => {
            let pred = (!!value && !lastState);
            if ((firstEntry && pred) || (pred !== lastValue)) { //Apply applicable transitions if not first entry or value is truthy
                let myCheckpoint = ++checkpoint;
                transitionCancel && transitionCancel();
                !!pred && insert();
                transitionCancel = (0, inlinejs_1.WaitTransition)({ componentId, contextElement,
                    target: (clone || undefined),
                    callback: () => {
                        if (myCheckpoint == checkpoint) {
                            transitionCancel = null;
                            !pred && remove();
                        }
                    },
                    reverse: !pred,
                });
            }
            lastEffectValue = value;
            firstEntry = false;
            lastValue = pred;
            if (selectionScope) {
                selectionScope.state = (!!value || lastState);
                if (selectionScope.callback) {
                    selectionScope.callback(selectionScope.state);
                }
            }
        };
        let elementScope = resolvedComponent === null || resolvedComponent === void 0 ? void 0 : resolvedComponent.FindElementScope(contextElement), selectionScope = null;
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.AddUninitCallback(remove);
        if (selectionScopeStackEntry) {
            if (isElse) { //Listen for state change
                selectionScopeStackEntry.scope.callback = (state) => {
                    lastState = state;
                    effect(lastEffectValue);
                };
            }
            if (!isElse || expression) { //Create new scope
                selectionScopeStackEntry.scope = (selectionScope = {
                    state: lastState,
                });
                selectionScopeStackEntry.set = true;
            }
        }
        init.effect((value) => {
            let checkpoint = ++init.checkpoint;
            (0, inlinejs_1.StreamData)(value, (value) => {
                if (checkpoint == (init === null || init === void 0 ? void 0 : init.checkpoint)) {
                    effect(value);
                }
            });
        });
    });
}
exports.CreateSelectionDirectiveHandler = CreateSelectionDirectiveHandler;


/***/ }),

/***/ "./src/directive/data/component.ts":
/*!*****************************************!*\
  !*** ./src/directive/data/component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentDirectiveHandlerCompact = exports.ComponentDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ComponentDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('component', ({ componentId, component, contextElement, expression, argKey }) => {
    let updateName = (name) => {
        let resolveComponent = (component || (0, inlinejs_1.FindComponentById)(componentId)), elementScope = resolveComponent === null || resolveComponent === void 0 ? void 0 : resolveComponent.FindElementScope(resolveComponent.GetRoot());
        if (!resolveComponent) {
            return;
        }
        resolveComponent.SetName(name);
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal('$name', name);
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal('$componentName', name);
    };
    if (argKey === 'evaluate') {
        (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression })(data => updateName((0, inlinejs_1.ToString)(data)));
    }
    else { //Raw expression
        updateName(expression);
    }
});
function ComponentDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.ComponentDirectiveHandler);
}
exports.ComponentDirectiveHandlerCompact = ComponentDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/data/data.ts":
/*!************************************!*\
  !*** ./src/directive/data/data.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataDirectiveHandlerCompact = exports.DataDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.DataDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('data', ({ componentId, contextElement, expression }) => {
    (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression })((data) => {
        let component = (0, inlinejs_1.FindComponentById)(componentId), elementScope = component === null || component === void 0 ? void 0 : component.FindElementScope(contextElement);
        if (!component || !elementScope) {
            return;
        }
        data = (0, inlinejs_1.GetTarget)(data);
        data = (((0, inlinejs_1.IsObject)(data) && data) || {});
        let config = null;
        if ('$config' in data) {
            config = data['$config'];
            delete data['$config'];
        }
        if ((0, inlinejs_1.IsObject)(config === null || config === void 0 ? void 0 : config.locals)) {
            Object.entries(config.locals).forEach(([key, value]) => elementScope.SetLocal(key, value));
        }
        let proxy = component.GetRootProxy().GetNative(), proxyTarget = (0, inlinejs_1.GetTarget)(proxy), target, key = `$${inlinejs_1.ContextKeys.scope}`;
        if (component.GetRoot() !== contextElement) { //Add new scope
            let scope = component.CreateScope(contextElement);
            if (!scope) {
                (0, inlinejs_1.JournalError)('Failed to create component scope.', 'DataDirectiveHandler', contextElement);
                return;
            }
            let scopeId = scope.GetId();
            if (config === null || config === void 0 ? void 0 : config.name) {
                scope.SetName(config.name);
            }
            (0, inlinejs_1.PushCurrentScope)(component, scopeId);
            elementScope.AddPostProcessCallback(() => (0, inlinejs_1.PopCurrentScope)(componentId));
            target = {};
            proxy[scopeId] = target; //FindComponentById(componentId)?.FindScopeById(scopeId)?.GetName()
            let local = (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildProxyOptions)({
                getter: (prop) => {
                    var _a;
                    let scope = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetRootProxy().GetNative()[scopeId];
                    return ((scope && prop) ? scope[prop] : undefined);
                },
                setter: (prop, value) => {
                    var _a;
                    let scope = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetRootProxy().GetNative()[scopeId];
                    return ((scope && prop) ? (scope[prop] = value) : true);
                },
                lookup: () => true,
            }));
            let parentLocal = (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildProxyOptions)({
                getter: (prop) => {
                    let component = (0, inlinejs_1.FindComponentById)(componentId), parent = component === null || component === void 0 ? void 0 : component.FindElementLocalValue(((component === null || component === void 0 ? void 0 : component.FindAncestor(contextElement)) || ''), key, true);
                    return ((parent && !(0, inlinejs_1.GetGlobal)().IsNothing(parent) && prop) ? parent[prop] : undefined);
                },
                setter: (prop, value) => {
                    let component = (0, inlinejs_1.FindComponentById)(componentId), parent = component === null || component === void 0 ? void 0 : component.FindElementLocalValue(((component === null || component === void 0 ? void 0 : component.FindAncestor(contextElement)) || ''), key, true);
                    return ((parent && !(0, inlinejs_1.GetGlobal)().IsNothing(parent) && prop) ? (parent[prop] = value) : true);
                },
                lookup: () => true,
            }));
            elementScope.SetLocal(key, local);
            elementScope.SetLocal('$parent', parentLocal);
            (config === null || config === void 0 ? void 0 : config.name) && elementScope.SetLocal('$name', config.name);
            elementScope.AddUninitCallback(() => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.RemoveScope(scopeId); });
        }
        else { //Root scope
            target = proxyTarget;
            elementScope.SetLocal('$parent', null);
            elementScope.SetLocal('$name', ((config === null || config === void 0 ? void 0 : config.name) || ''));
            elementScope.SetLocal('$componentName', ((config === null || config === void 0 ? void 0 : config.name) || ''));
            elementScope.SetLocal(key, (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildProxyOptions)({
                getter: (prop) => (prop ? proxy[prop] : undefined),
                setter: (prop, value) => {
                    return (prop ? (proxy[prop] = value) : true);
                },
                lookup: () => true,
            })));
            if (config === null || config === void 0 ? void 0 : config.reactiveState) {
                component.SetReactiveState(config.reactiveState);
            }
            if (config === null || config === void 0 ? void 0 : config.name) {
                component.SetName(config.name);
            }
        }
        Object.entries(data).forEach(([key, value]) => (target[key] = value));
        if (config === null || config === void 0 ? void 0 : config.init) { //Evaluate init callback
            let { context } = component.GetBackend();
            context.Push(inlinejs_1.ContextKeys.self, contextElement);
            (0, inlinejs_1.PushCurrentComponent)(componentId);
            (0, inlinejs_1.JournalTry)(() => config.init.call(proxy), 'DataDirectiveHandler.Init', contextElement);
            (0, inlinejs_1.PopCurrentComponent)();
            context.Pop(inlinejs_1.ContextKeys.self);
        }
        if (config === null || config === void 0 ? void 0 : config.uninit) {
            elementScope.AddUninitCallback(() => {
                let component = (0, inlinejs_1.FindComponentById)(componentId);
                if (!component) {
                    return;
                }
                let { context } = component.GetBackend(), proxy = component.GetRootProxy().GetNative();
                context.Push(inlinejs_1.ContextKeys.self, contextElement);
                (0, inlinejs_1.PushCurrentComponent)(componentId);
                (0, inlinejs_1.JournalTry)(() => config.uninit.call(proxy), 'DataDirectiveHandler.Uninit', contextElement);
                (0, inlinejs_1.PopCurrentComponent)();
                context.Pop(inlinejs_1.ContextKeys.self);
            });
        }
    });
});
function DataDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.DataDirectiveHandler);
}
exports.DataDirectiveHandlerCompact = DataDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/data/locals.ts":
/*!**************************************!*\
  !*** ./src/directive/data/locals.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalsDirectiveHandlerCompact = exports.LocalsDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.LocalsDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('locals', ({ componentId, contextElement, expression }) => {
    (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression })((data) => {
        var _a;
        let elementScope = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement);
        data = (0, inlinejs_1.GetTarget)(data);
        data = (((0, inlinejs_1.IsObject)(data) && data) || {});
        Object.entries(data).forEach(([key, value]) => elementScope === null || elementScope === void 0 ? void 0 : elementScope.SetLocal(key, value));
    });
});
function LocalsDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.LocalsDirectiveHandler);
}
exports.LocalsDirectiveHandlerCompact = LocalsDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/data/ref.ts":
/*!***********************************!*\
  !*** ./src/directive/data/ref.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefDirectiveHandlerCompact = exports.RefDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.RefDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('ref', ({ componentId, component, contextElement, expression, argKey }) => {
    if (argKey === 'evaluate') {
        (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression })(data => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.AddRefElement((0, inlinejs_1.ToString)(data), contextElement); });
    }
    else { //Raw expression
        component === null || component === void 0 ? void 0 : component.AddRefElement(expression, contextElement);
    }
});
function RefDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.RefDirectiveHandler);
}
exports.RefDirectiveHandlerCompact = RefDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/flow/html.ts":
/*!************************************!*\
  !*** ./src/directive/flow/html.ts ***!
  \************************************/
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
exports.HtmlDirectiveHandlerCompact = exports.HtmlDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.HtmlDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('html', (_a) => {
    var { componentId, contextElement } = _a, rest = __rest(_a, ["componentId", "contextElement"]);
    let checkpoint = 0;
    (0, inlinejs_1.LazyCheck)(Object.assign(Object.assign({ componentId, contextElement }, rest), { callback: (value) => {
            let myCheckpoint = ++checkpoint;
            (0, inlinejs_1.StreamData)(value, (value) => {
                if (myCheckpoint == checkpoint) {
                    (0, inlinejs_1.InsertHtml)({
                        element: contextElement,
                        html: value,
                        component: componentId,
                        processDirectives: true,
                        afterTransitionCallback: () => { },
                    });
                }
            });
        } }));
});
function HtmlDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.HtmlDirectiveHandler);
}
exports.HtmlDirectiveHandlerCompact = HtmlDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/flow/model.ts":
/*!*************************************!*\
  !*** ./src/directive/flow/model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelDirectiveHandlerCompact = exports.ModelDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ModelDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('model', ({ componentId, component, contextElement, expression, argOptions }) => {
    var _a, _b;
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression }), options = (0, inlinejs_1.ResolveOptions)({
        options: {
            lazy: false,
            number: false,
            forced: false,
            trim: false,
            debounce: -1,
        },
        list: argOptions,
    });
    let transformData = (data) => {
        let transformed = (options.number ? parseFloat((0, inlinejs_1.ToString)(data)) : null);
        return ((transformed || transformed === 0) ? transformed : ((options.number && options.forced) ? 0 : (options.trim ? (0, inlinejs_1.ToString)(data).trim() : data)));
    };
    let evaluateAssignment = (value) => {
        (0, inlinejs_1.EvaluateLater)({ componentId, contextElement,
            expression: `(${expression}) = (${value})`,
        })();
    };
    let isRadio = (contextElement instanceof HTMLInputElement && contextElement.type === 'radio');
    let isCheckable = (isRadio || (contextElement instanceof HTMLInputElement && contextElement.type === 'checkbox'));
    let ref = null, hotValue = false, assign = () => {
        if (!isCheckable && (contextElement instanceof HTMLInputElement || contextElement instanceof HTMLTextAreaElement)) {
            let transformed = transformData(contextElement.value);
            evaluateAssignment((typeof transformed === 'number') ? transformed : `'${(0, inlinejs_1.ToString)(transformed)}'`);
        }
        else if (isCheckable && !isRadio) {
            if (Array.isArray(ref)) { //Add value to array
                let transformed = transformData(contextElement.value), index = ref.indexOf(transformed);
                if (index == -1 && contextElement.checked) {
                    ref.push(transformed);
                }
                else if (index != -1 && !contextElement.checked) {
                    ref.splice(index, 1);
                }
            }
            else {
                evaluateAssignment(contextElement.checked ? 'true' : 'false');
            }
        }
        else if (isRadio) {
            let transformed = transformData(contextElement.value);
            evaluateAssignment(contextElement.checked ? ((typeof transformed === 'number') ? transformed : `'${(0, inlinejs_1.ToString)(transformed)}'`) : '');
        }
        else if (contextElement.multiple) { //Retrieve all selected
            let value = Array.from(contextElement.selectedOptions).map(item => transformData(item.value));
            evaluateAssignment(JSON.stringify(value));
        }
        else { //Single select
            evaluateAssignment(`'${contextElement.value}'`);
        }
    };
    let putValue = (value) => {
        if (hotValue) { //Ignore changes
            return;
        }
        if (!isCheckable && (contextElement instanceof HTMLInputElement || contextElement instanceof HTMLTextAreaElement)) {
            contextElement.value = (0, inlinejs_1.ToString)(value);
        }
        else if (isCheckable && !isRadio) {
            if (Array.isArray(value)) { //Add value to array
                contextElement.checked = value.includes(transformData(contextElement.value));
            }
            else {
                contextElement.checked = !!value;
            }
        }
        else if (isRadio) {
            contextElement.checked = (0, inlinejs_1.IsEqual)(transformData(value), transformData(contextElement.value));
        }
        else if (contextElement.multiple) { //Retrieve all selected
            if (Array.isArray(value)) { //Value must be an array
                Array.from(contextElement.options).forEach(opt => (opt.selected = value.includes(transformData(opt.value))));
            }
        }
        else { //Single select
            contextElement.value = (0, inlinejs_1.ToString)(value);
        }
    };
    let checkpoint = 0, event = ((options.lazy || isCheckable || contextElement instanceof HTMLSelectElement) ? 'change' : 'input'), onEvent = () => {
        if (options.debounce >= 0) { //Debounce for specified duration
            let myCheckpoint = ++checkpoint;
            setTimeout(() => ((myCheckpoint == checkpoint) && handleEvent()), (options.debounce || 250));
        }
        else {
            handleEvent();
        }
    };
    let handleEvent = () => {
        var _a;
        assign();
        if (!hotValue) { //Prevent infinite update cycles
            hotValue = true;
            (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(() => (hotValue = false));
        }
    };
    contextElement.addEventListener(event, onEvent);
    if (isRadio && !contextElement.getAttribute('name')) { //Set name
        contextElement.setAttribute('name', expression.trim());
    }
    (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.AddUninitCallback(() => (ref = null));
    (0, inlinejs_1.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(value => putValue(ref = value)),
    });
});
function ModelDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.ModelDirectiveHandler);
}
exports.ModelDirectiveHandlerCompact = ModelDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/flow/on.ts":
/*!**********************************!*\
  !*** ./src/directive/flow/on.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnDirectiveHandlerCompact = exports.OnDirectiveExpansionRule = exports.OnDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const keyEvents = ['keydown', 'keyup'], mobileMap = {
    click: 'touchend',
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove',
};
function GetOptions(argKey, argOptions) {
    let options = {
        outside: false,
        prevent: false,
        stop: false,
        immediate: false,
        once: false,
        document: false,
        window: false,
        self: false,
        passive: false,
        nexttick: false,
        mobile: false,
        join: false,
        camel: false,
        debounce: -1,
    };
    let keyOptions = (keyEvents.includes(argKey) ? {
        meta: false,
        alt: false,
        ctrl: false,
        shift: false,
        list: new Array(),
    } : null);
    (0, inlinejs_1.ResolveOptions)({
        options: [options, keyOptions],
        list: argOptions,
        defaultNumber: 250,
        unknownCallback: ({ option }) => {
            if (keyOptions && option) {
                let parts = ((option.length > 1) ? option.split('-') : []);
                if (parts.length == 2 && parts[0].length == 1 && parts[1].length == 1) { //E.g. A-Z
                    let fromCode = parts[0].charCodeAt(0), toCode = parts[1].charCodeAt(0);
                    keyOptions.list.push(Array.from({ length: (toCode - fromCode) }).map((i, index) => String.fromCharCode(index + fromCode)));
                }
                else {
                    keyOptions.list.push((0, inlinejs_1.GetGlobal)().GetConfig().MapKeyEvent((0, inlinejs_1.ToCamelCase)(option).toLowerCase()));
                }
            }
        },
    });
    return { keyOptions, options };
}
exports.OnDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('on', ({ componentId, component, contextElement, expression, argKey, argOptions }) => {
    var _a, _b, _c;
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression }), { keyOptions, options } = GetOptions(argKey, argOptions), checkpoint = 0;
    let activeKeyOptions = Object.entries(keyOptions || {}).filter(([key, value]) => (value === true)).map(([key]) => key), onEvent = (e) => {
        if ((options.self && !options.outside && e.target !== contextElement) || activeKeyOptions.findIndex(opt => !e[`${opt}Key`]) != -1) {
            return; //Event is debounced OR event target is not context element OR specified key option is not pressed
        }
        if (keyOptions && keyOptions.list.length > 0) {
            let key = e.key.toLowerCase();
            if (keyOptions.list.findIndex(item => (Array.isArray(item) ? item.includes(key) : (item === key))) == -1) {
                return; //Key pressed doesn't match any specified
            }
        }
        if (!options.outside) {
            options.prevent && e.preventDefault();
            options.once && target.removeEventListener(e.type, onEvent);
            options.stop && e.stopPropagation();
            options.stop && options.immediate && e.stopPropagation();
        }
        if (options.debounce >= 0) { //Debounce for specified duration
            let myCheckpoint = ++checkpoint;
            setTimeout(() => ((myCheckpoint == checkpoint) && handleEvent(e)), (options.debounce || 250));
        }
        else {
            handleEvent(e);
        }
    };
    let handleEvent = (e) => {
        var _a;
        if (options.once) {
            (0, inlinejs_1.RemoveOutsideEventListener)(contextElement, e.type, onEvent);
        }
        if (options.nexttick) {
            (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(() => doEvaluation(e));
        }
        else { //Immediate
            doEvaluation(e);
        }
    };
    let target = (options.window ? window : (options.document ? globalThis.document : contextElement)), doEvaluation = (e) => evaluate(undefined, [e], {
        event: e,
    });
    if (options.join) {
        argKey = argKey.split('-').join('.');
    }
    else if (options.camel) {
        argKey = (0, inlinejs_1.ToCamelCase)(argKey);
    }
    let mappedEvent = ((options.mobile && argKey in mobileMap) ? mobileMap[argKey] : null);
    if (options.outside && target === contextElement) {
        (0, inlinejs_1.AddOutsideEventListener)(contextElement, argKey, onEvent);
        if (mappedEvent) {
            (0, inlinejs_1.AddOutsideEventListener)(contextElement, mappedEvent, onEvent);
        }
        let elementScope = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement);
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.GetDirectiveManager().AddHandler(({ expression }) => (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression })((data) => {
            let map = {
                [argKey]: data,
            };
            mappedEvent && (map[mappedEvent] = data);
            (0, inlinejs_1.AddOutsideEventExcept)(contextElement, map, onEvent);
        }), 'outside.event.except');
        elementScope === null || elementScope === void 0 ? void 0 : elementScope.GetDirectiveManager().AddHandler(({ expression }) => (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression })((data) => {
            (0, inlinejs_1.AddOutsideEventExcept)(contextElement, data, onEvent);
        }), 'outside.event.except.map');
    }
    else { //Bind on target
        target.addEventListener(argKey, onEvent, { passive: options.passive });
        if (mappedEvent) {
            target.addEventListener(mappedEvent, onEvent, { passive: options.passive });
        }
        if (target !== contextElement) { //Unbind on destruction
            (_c = (_b = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _b === void 0 ? void 0 : _b.FindElementScope(contextElement)) === null || _c === void 0 ? void 0 : _c.AddUninitCallback(() => {
                target.removeEventListener(argKey, onEvent);
                if (mappedEvent) {
                    target.removeEventListener(mappedEvent, onEvent);
                }
            });
        }
    }
});
function OnDirectiveExpansionRule(name) {
    return (name.startsWith('@') ? name.replace('@', (0, inlinejs_1.GetGlobal)().GetConfig().GetDirectiveName('on:')) : null);
}
exports.OnDirectiveExpansionRule = OnDirectiveExpansionRule;
function OnDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.OnDirectiveHandler);
    (0, inlinejs_1.GetGlobal)().GetDirectiveManager().AddExpansionRule(OnDirectiveExpansionRule);
}
exports.OnDirectiveHandlerCompact = OnDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/flow/text.ts":
/*!************************************!*\
  !*** ./src/directive/flow/text.ts ***!
  \************************************/
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
exports.TextDirectiveHandlerCompact = exports.TextDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.TextDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('text', (_a) => {
    var { contextElement } = _a, rest = __rest(_a, ["contextElement"]);
    let checkpoint = 0;
    (0, inlinejs_1.LazyCheck)(Object.assign(Object.assign({ contextElement }, rest), { callback: (value) => {
            let myCheckpoint = ++checkpoint;
            (0, inlinejs_1.StreamData)(value, (value) => {
                if (myCheckpoint == checkpoint) {
                    contextElement.textContent = (0, inlinejs_1.ToString)(value);
                }
            });
        } }));
});
function TextDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.TextDirectiveHandler);
}
exports.TextDirectiveHandlerCompact = TextDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/lifecycle/post.ts":
/*!*****************************************!*\
  !*** ./src/directive/lifecycle/post.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostDirectiveHandlerCompact = exports.PostDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.PostDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('post', ({ componentId, component, contextElement, expression, argOptions }) => {
    var _a, _b;
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression }), options = (0, inlinejs_1.ResolveOptions)({
        options: {
            nexttick: false,
        },
        list: argOptions,
    });
    let nextTick = (options.nexttick ? new inlinejs_1.NextTick(componentId, evaluate, true) : null);
    (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.AddPostProcessCallback(() => (nextTick ? nextTick.Queue() : evaluate()));
});
function PostDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.PostDirectiveHandler);
}
exports.PostDirectiveHandlerCompact = PostDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/lifecycle/uninit.ts":
/*!*******************************************!*\
  !*** ./src/directive/lifecycle/uninit.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UninitDirectiveHandlerCompact = exports.UninitDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.UninitDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('uninit', ({ componentId, component, contextElement, expression }) => {
    var _a, _b;
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression });
    (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.AddUninitCallback(() => evaluate());
});
function UninitDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.UninitDirectiveHandler);
}
exports.UninitDirectiveHandlerCompact = UninitDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/reactive/effect.ts":
/*!******************************************!*\
  !*** ./src/directive/reactive/effect.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EffectDirectiveHandlerCompact = exports.EffectDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.EffectDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('effect', ({ componentId, contextElement, expression }) => {
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true });
    (0, inlinejs_1.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(),
    });
});
function EffectDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.EffectDirectiveHandler);
}
exports.EffectDirectiveHandlerCompact = EffectDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/reactive/static.ts":
/*!******************************************!*\
  !*** ./src/directive/reactive/static.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticDirectiveHandlerCompact = exports.StaticDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.StaticDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('static', ({ componentId, contextElement, expression }) => {
    (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true })();
});
function StaticDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.StaticDirectiveHandler);
}
exports.StaticDirectiveHandlerCompact = StaticDirectiveHandlerCompact;


/***/ }),

/***/ "./src/directive/show.ts":
/*!*******************************!*\
  !*** ./src/directive/show.ts ***!
  \*******************************/
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
exports.ShowDirectiveHandlerCompact = exports.ShowDirectiveHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ShowDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('show', (_a) => {
    var { componentId, contextElement } = _a, rest = __rest(_a, ["componentId", "contextElement"]);
    let checkpoint = 0, firstEntry = true, lastValue = false, transitionCancel = null, apply = (value) => {
        if (!firstEntry && !!value === lastValue) {
            return;
        }
        let show = () => {
            if (contextElement.style.length === 1 && contextElement.style.display === 'none') {
                contextElement.removeAttribute('style');
            }
            else {
                contextElement.style.removeProperty('display');
            }
        };
        if (!firstEntry || value) { //Apply applicable transitions if not first entry or value is truthy
            let myCheckpoint = ++checkpoint;
            transitionCancel && transitionCancel();
            !!value && show();
            transitionCancel = (0, inlinejs_1.WaitTransition)({ componentId, contextElement,
                callback: () => {
                    if (myCheckpoint == checkpoint) {
                        transitionCancel = null;
                        !value && (contextElement.style.display = 'none');
                    }
                },
                reverse: !value,
            });
        }
        else { //First entry and value is not truthy
            contextElement.style.display = 'none';
        }
        firstEntry = false;
        lastValue = !!value;
    };
    (0, inlinejs_1.LazyCheck)(Object.assign(Object.assign({ componentId, contextElement }, rest), { callback: apply }));
});
function ShowDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.ShowDirectiveHandler);
}
exports.ShowDirectiveHandlerCompact = ShowDirectiveHandlerCompact;


/***/ }),

/***/ "./src/magic/class.ts":
/*!****************************!*\
  !*** ./src/magic/class.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassMagicHandlerCompact = exports.ClassMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ClassMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('class', ({ componentId, component, contextElement }) => {
    let [elementKey, proxy, scope] = (0, inlinejs_1.InitJITProxy)('class', (component || (0, inlinejs_1.FindComponentById)(componentId)), contextElement);
    if (proxy) { //Invalid context element OR proxy already exists
        return proxy;
    }
    let methods = {
        add: (...values) => contextElement.classList.add(...values),
        remove: (...values) => contextElement.classList.remove(...values.filter(value => contextElement.classList.contains(value))),
        toggle: (...values) => values.map(value => contextElement.classList.toggle(value)),
        set: (...values) => (contextElement.className = values.join(' ')),
        contains: (...values) => (values.findIndex(value => !contextElement.classList.contains(value)) == -1),
    };
    return (elementKey ? (scope[elementKey] = (0, inlinejs_1.CreateReadonlyProxy)(methods)) : (0, inlinejs_1.CreateReadonlyProxy)(methods));
});
function ClassMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.ClassMagicHandler);
}
exports.ClassMagicHandlerCompact = ClassMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/component.ts":
/*!*************************************!*\
  !*** ./src/magic/data/component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentMagicHandlerCompact = exports.ComponentNameMagicHandler = exports.ComponentMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ComponentMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('component', () => (name) => { var _a; return (_a = (0, inlinejs_1.FindComponentByName)(name)) === null || _a === void 0 ? void 0 : _a.GetRootProxy().GetNative(); });
exports.ComponentNameMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('name', ({ componentId, component }) => { var _a; return (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.GetName(); });
function ComponentMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.ComponentMagicHandler);
    (0, inlinejs_1.AddMagicHandler)(exports.ComponentNameMagicHandler);
}
exports.ComponentMagicHandlerCompact = ComponentMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/locals.ts":
/*!**********************************!*\
  !*** ./src/magic/data/locals.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalsMagicHandlerCompact = exports.LocalsMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.LocalsMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('locals', ({ componentId, component, contextElement }) => {
    var _a, _b;
    return (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetLocals();
});
function LocalsMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.LocalsMagicHandler);
}
exports.LocalsMagicHandlerCompact = LocalsMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/native.ts":
/*!**********************************!*\
  !*** ./src/magic/data/native.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NativeMagicHandlerCompact = exports.NativeMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.NativeMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('native', () => inlinejs_1.GetTarget);
function NativeMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.NativeMagicHandler);
}
exports.NativeMagicHandlerCompact = NativeMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/proxy.ts":
/*!*********************************!*\
  !*** ./src/magic/data/proxy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyMagicHandlerCompact = exports.ProxyMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ProxyMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('proxy', ({ componentId, component }) => {
    var _a;
    return (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.GetRootProxy().GetNative();
});
function ProxyMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.ProxyMagicHandler);
}
exports.ProxyMagicHandlerCompact = ProxyMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/refs.ts":
/*!********************************!*\
  !*** ./src/magic/data/refs.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefsMagicHandlerCompact = exports.RefsMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.RefsMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('refs', ({ componentId, component, contextElement }) => {
    let [elementKey, proxy, scope] = (0, inlinejs_1.InitJITProxy)('refs', (component || (0, inlinejs_1.FindComponentById)(componentId)), contextElement);
    if (!elementKey || proxy) { //Invalid context element OR proxy already exists
        return proxy;
    }
    return (scope[elementKey] = (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
        getter: name => { var _a; return (name && ((_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindRefElement(name))); },
        lookup: () => true,
    })));
});
function RefsMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.RefsMagicHandler);
}
exports.RefsMagicHandlerCompact = RefsMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/scope.ts":
/*!*********************************!*\
  !*** ./src/magic/data/scope.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScopeMagicHandlerCompact = exports.ScopesMagicHandler = exports.ScopeMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.ScopeMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('scope', ({ componentId, component, contextElement }) => {
    var _a;
    return (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.InferScopeFrom(contextElement);
});
exports.ScopesMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('scopes', ({ componentId }) => {
    return (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({ getter: prop => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindScopeByName(prop); }, lookup: () => true }));
});
function ScopeMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.ScopeMagicHandler);
    (0, inlinejs_1.AddMagicHandler)(exports.ScopesMagicHandler);
}
exports.ScopeMagicHandlerCompact = ScopeMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/stream.ts":
/*!**********************************!*\
  !*** ./src/magic/data/stream.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StreamMagicHandlerCompact = exports.StreamMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.StreamMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('stream', () => {
    return (value, callback) => (0, inlinejs_1.StreamData)(value, callback);
});
function StreamMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.StreamMagicHandler);
}
exports.StreamMagicHandlerCompact = StreamMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/data/wait.ts":
/*!********************************!*\
  !*** ./src/magic/data/wait.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaitMagicHandlerCompact = exports.WaitMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.WaitMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('wait', () => {
    return (value, callback) => (0, inlinejs_1.WaitPromise)(value, value => (0, inlinejs_1.WaitWhile)(value, callback, callback));
});
function WaitMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.WaitMagicHandler);
}
exports.WaitMagicHandlerCompact = WaitMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/dom.ts":
/*!**************************!*\
  !*** ./src/magic/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomMagicHandlerCompact = exports.DomMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const props = {
    root: ({ componentId }) => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetRoot(); },
    form: ({ componentId, contextElement }) => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElement(contextElement, el => (el instanceof HTMLElement)); },
    ancestor: ({ componentId, contextElement }) => (index) => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindAncestor(contextElement, (index || 0)); },
    parent: ({ componentId, contextElement }) => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindAncestor(contextElement, 0); },
};
let proxy = null;
exports.DomMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('dom', (params) => {
    return (proxy || (proxy = (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
        getter: (prop) => {
            if (prop && props.hasOwnProperty(prop)) {
                return props[prop](params);
            }
        },
        lookup: Object.keys(props),
    }))));
});
function DomMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.DomMagicHandler);
}
exports.DomMagicHandlerCompact = DomMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/evaluate.ts":
/*!*******************************!*\
  !*** ./src/magic/evaluate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EvaluateMagicHandlerCompact = exports.EvaluateMagicHandler = exports.FunctionMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.FunctionMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('func', ({ componentId, contextElement }) => {
    return (expression) => (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true });
});
exports.EvaluateMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('eval', ({ componentId, contextElement }) => {
    return (expression, callback) => (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true })(callback);
});
function EvaluateMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.FunctionMagicHandler);
    (0, inlinejs_1.AddMagicHandler)(exports.EvaluateMagicHandler);
}
exports.EvaluateMagicHandlerCompact = EvaluateMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/nexttick.ts":
/*!*******************************!*\
  !*** ./src/magic/nexttick.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NextTickMagicHandlerCompact = exports.NextTickMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.NextTickMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('nextTick', ({ componentId }) => {
    return (callback) => { var _a; return (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(callback); };
});
function NextTickMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.NextTickMagicHandler);
}
exports.NextTickMagicHandlerCompact = NextTickMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/operations/arithmetic.ts":
/*!********************************************!*\
  !*** ./src/magic/operations/arithmetic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArithmeticMagicHandlerCompact = exports.ArithmeticMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const methods = {
    add: (...values) => values.reduce((acc, value) => (acc + value)),
    subtract: (...values) => values.reduce((acc, value) => (acc - value)),
    multiply: (...values) => values.reduce((acc, value) => (acc * value)),
    divide: (...values) => values.reduce((acc, value) => (acc / value)),
};
let proxy = null;
exports.ArithmeticMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('math', () => (proxy || (proxy = (0, inlinejs_1.CreateReadonlyProxy)(methods))));
function ArithmeticMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.ArithmeticMagicHandler);
}
exports.ArithmeticMagicHandlerCompact = ArithmeticMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/operations/logical.ts":
/*!*****************************************!*\
  !*** ./src/magic/operations/logical.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogicalMagicHandlerCompact = exports.LogicalMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const methods = {
    or: (...values) => values.at(values.findIndex(value => !!value)),
    and: (...values) => values.at(values.findIndex(value => !value)),
};
let proxy = null;
exports.LogicalMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('log', () => (proxy || (proxy = (0, inlinejs_1.CreateReadonlyProxy)(methods))));
function LogicalMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.LogicalMagicHandler);
}
exports.LogicalMagicHandlerCompact = LogicalMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/operations/relational.ts":
/*!********************************************!*\
  !*** ./src/magic/operations/relational.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RelationalMagicHandlerCompact = exports.RelationalMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const methods = {
    comp: (first, second) => ((first < second) ? -1 : ((first == second) ? 0 : 1)),
    lt: (first, second) => (first < second),
    le: (first, second) => (first <= second),
    eq: (first, second) => (first == second),
    eqs: (first, second) => (first === second),
    nes: (first, second) => (first !== second),
    ne: (first, second) => (first != second),
    ge: (first, second) => (first >= second),
    gt: (first, second) => (first > second),
};
let proxy = null;
exports.RelationalMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('rel', () => (proxy || (proxy = (0, inlinejs_1.CreateReadonlyProxy)(methods))));
function RelationalMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.RelationalMagicHandler);
}
exports.RelationalMagicHandlerCompact = RelationalMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/pick.ts":
/*!***************************!*\
  !*** ./src/magic/pick.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PickMagicHandlerCompact = exports.PickMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.PickMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('pick', () => {
    return (pred, trueValue, falseValue) => (!!pred ? trueValue : falseValue);
});
function PickMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.PickMagicHandler);
}
exports.PickMagicHandlerCompact = PickMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/reactive/static.ts":
/*!**************************************!*\
  !*** ./src/magic/reactive/static.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StaticMagicHandlerCompact = exports.StaticMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.StaticMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('static', ({ componentId }) => {
    return (value) => {
        var _a;
        (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.PopGetAccessStorageSnapshot(false);
        return value;
    };
}, ({ componentId, component }) => { var _a; return (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.PushGetAccessStorageSnapshot(); });
function StaticMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.StaticMagicHandler);
}
exports.StaticMagicHandlerCompact = StaticMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/reactive/unoptimized.ts":
/*!*******************************************!*\
  !*** ./src/magic/reactive/unoptimized.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnoptimizedMagicHandlerCompact = exports.UnoptimizedMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.UnoptimizedMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('unoptimized', ({ componentId }) => {
    return (value) => {
        var _a;
        (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.RestoreOptimizedGetAccessStorage();
        return value;
    };
}, ({ componentId, component }) => { var _a; return (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.SwapOptimizedGetAccessStorage(); });
function UnoptimizedMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.UnoptimizedMagicHandler);
}
exports.UnoptimizedMagicHandlerCompact = UnoptimizedMagicHandlerCompact;


/***/ }),

/***/ "./src/magic/reactive/watch.ts":
/*!*************************************!*\
  !*** ./src/magic/reactive/watch.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WatchMagicHandlerCompact = exports.WatchMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
exports.WatchMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('watch', ({ componentId, contextElement }) => {
    return (expression, callback) => {
        let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true, waitPromise: 'none' }), firstEntry = true, lastValue = null;
        (0, inlinejs_1.UseEffect)({ componentId, contextElement, callback: () => {
                let value = evaluate(), result = null;
                if (!firstEntry && !(0, inlinejs_1.IsEqual)(value, lastValue)) {
                    result = callback(value);
                }
                firstEntry = false;
                lastValue = (0, inlinejs_1.DeepCopy)(value);
                return result;
            } });
    };
});
function WatchMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.WatchMagicHandler);
}
exports.WatchMagicHandlerCompact = WatchMagicHandlerCompact;


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
/*!******************************!*\
  !*** ./src/inlinejs-core.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const data_1 = __webpack_require__(/*! ./directive/data/data */ "./src/directive/data/data.ts");
const component_1 = __webpack_require__(/*! ./directive/data/component */ "./src/directive/data/component.ts");
const locals_1 = __webpack_require__(/*! ./directive/data/locals */ "./src/directive/data/locals.ts");
const ref_1 = __webpack_require__(/*! ./directive/data/ref */ "./src/directive/data/ref.ts");
const post_1 = __webpack_require__(/*! ./directive/lifecycle/post */ "./src/directive/lifecycle/post.ts");
const uninit_1 = __webpack_require__(/*! ./directive/lifecycle/uninit */ "./src/directive/lifecycle/uninit.ts");
const static_1 = __webpack_require__(/*! ./directive/reactive/static */ "./src/directive/reactive/static.ts");
const effect_1 = __webpack_require__(/*! ./directive/reactive/effect */ "./src/directive/reactive/effect.ts");
const cloak_1 = __webpack_require__(/*! ./directive/cloak */ "./src/directive/cloak.ts");
const bind_1 = __webpack_require__(/*! ./directive/attr/bind */ "./src/directive/attr/bind.ts");
const class_1 = __webpack_require__(/*! ./directive/attr/class */ "./src/directive/attr/class.ts");
const style_1 = __webpack_require__(/*! ./directive/attr/style */ "./src/directive/attr/style.ts");
const text_1 = __webpack_require__(/*! ./directive/flow/text */ "./src/directive/flow/text.ts");
const html_1 = __webpack_require__(/*! ./directive/flow/html */ "./src/directive/flow/html.ts");
const on_1 = __webpack_require__(/*! ./directive/flow/on */ "./src/directive/flow/on.ts");
const model_1 = __webpack_require__(/*! ./directive/flow/model */ "./src/directive/flow/model.ts");
const show_1 = __webpack_require__(/*! ./directive/show */ "./src/directive/show.ts");
const if_1 = __webpack_require__(/*! ./directive/control/if */ "./src/directive/control/if.ts");
const else_1 = __webpack_require__(/*! ./directive/control/else */ "./src/directive/control/else.ts");
const each_1 = __webpack_require__(/*! ./directive/control/each */ "./src/directive/control/each.ts");
const component_2 = __webpack_require__(/*! ./magic/data/component */ "./src/magic/data/component.ts");
const locals_2 = __webpack_require__(/*! ./magic/data/locals */ "./src/magic/data/locals.ts");
const refs_1 = __webpack_require__(/*! ./magic/data/refs */ "./src/magic/data/refs.ts");
const scope_1 = __webpack_require__(/*! ./magic/data/scope */ "./src/magic/data/scope.ts");
const proxy_1 = __webpack_require__(/*! ./magic/data/proxy */ "./src/magic/data/proxy.ts");
const native_1 = __webpack_require__(/*! ./magic/data/native */ "./src/magic/data/native.ts");
const wait_1 = __webpack_require__(/*! ./magic/data/wait */ "./src/magic/data/wait.ts");
const stream_1 = __webpack_require__(/*! ./magic/data/stream */ "./src/magic/data/stream.ts");
const static_2 = __webpack_require__(/*! ./magic/reactive/static */ "./src/magic/reactive/static.ts");
const unoptimized_1 = __webpack_require__(/*! ./magic/reactive/unoptimized */ "./src/magic/reactive/unoptimized.ts");
const watch_1 = __webpack_require__(/*! ./magic/reactive/watch */ "./src/magic/reactive/watch.ts");
const arithmetic_1 = __webpack_require__(/*! ./magic/operations/arithmetic */ "./src/magic/operations/arithmetic.ts");
const relational_1 = __webpack_require__(/*! ./magic/operations/relational */ "./src/magic/operations/relational.ts");
const logical_1 = __webpack_require__(/*! ./magic/operations/logical */ "./src/magic/operations/logical.ts");
const nexttick_1 = __webpack_require__(/*! ./magic/nexttick */ "./src/magic/nexttick.ts");
const pick_1 = __webpack_require__(/*! ./magic/pick */ "./src/magic/pick.ts");
const class_2 = __webpack_require__(/*! ./magic/class */ "./src/magic/class.ts");
const evaluate_1 = __webpack_require__(/*! ./magic/evaluate */ "./src/magic/evaluate.ts");
const dom_1 = __webpack_require__(/*! ./magic/dom */ "./src/magic/dom.ts");
(0, inlinejs_1.WaitForGlobal)().then(() => {
    (0, data_1.DataDirectiveHandlerCompact)();
    (0, component_1.ComponentDirectiveHandlerCompact)();
    (0, locals_1.LocalsDirectiveHandlerCompact)();
    (0, ref_1.RefDirectiveHandlerCompact)();
    (0, post_1.PostDirectiveHandlerCompact)();
    (0, uninit_1.UninitDirectiveHandlerCompact)();
    (0, static_1.StaticDirectiveHandlerCompact)();
    (0, effect_1.EffectDirectiveHandlerCompact)();
    (0, cloak_1.CloakDirectiveHandlerCompact)();
    (0, bind_1.BindDirectiveHandlerCompact)();
    (0, class_1.ClassDirectiveHandlerCompact)();
    (0, style_1.StyleDirectiveHandlerCompact)();
    (0, text_1.TextDirectiveHandlerCompact)();
    (0, html_1.HtmlDirectiveHandlerCompact)();
    (0, on_1.OnDirectiveHandlerCompact)();
    (0, model_1.ModelDirectiveHandlerCompact)();
    (0, show_1.ShowDirectiveHandlerCompact)();
    (0, if_1.IfDirectiveHandlerCompact)();
    (0, else_1.ElseDirectiveHandlerCompact)();
    (0, each_1.EachDirectiveHandlerCompact)();
    (0, component_2.ComponentMagicHandlerCompact)();
    (0, locals_2.LocalsMagicHandlerCompact)();
    (0, refs_1.RefsMagicHandlerCompact)();
    (0, scope_1.ScopeMagicHandlerCompact)();
    (0, proxy_1.ProxyMagicHandlerCompact)();
    (0, native_1.NativeMagicHandlerCompact)();
    (0, wait_1.WaitMagicHandlerCompact)();
    (0, stream_1.StreamMagicHandlerCompact)();
    (0, static_2.StaticMagicHandlerCompact)();
    (0, unoptimized_1.UnoptimizedMagicHandlerCompact)();
    (0, watch_1.WatchMagicHandlerCompact)();
    (0, arithmetic_1.ArithmeticMagicHandlerCompact)();
    (0, relational_1.RelationalMagicHandlerCompact)();
    (0, logical_1.LogicalMagicHandlerCompact)();
    (0, nexttick_1.NextTickMagicHandlerCompact)();
    (0, pick_1.PickMagicHandlerCompact)();
    (0, class_2.ClassMagicHandlerCompact)();
    (0, evaluate_1.EvaluateMagicHandlerCompact)();
    (0, dom_1.DomMagicHandlerCompact)();
});

})();

/******/ })()
;