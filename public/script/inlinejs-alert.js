/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/attach.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/bootstrap/attach.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/animation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/animation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/change.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/change.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/changes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/changes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/component.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/config.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/config.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/context.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/directive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/directive.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/element-scope.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/element-scope.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/evaluate-options.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/evaluate-options.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/fetch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/fetch.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/global.js":
/*!******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/global.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/intersection.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/intersection.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/magic.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/magic.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/mutation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/mutation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/path.js":
/*!****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/path.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/process.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/process.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/proxy.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/proxy.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/resource.js":
/*!********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/resource.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/root-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/root-element.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/scope.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/scope.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/selection.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/selection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/stack.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/stack.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/types/unique-markers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/types/unique-markers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@benbraide/inlinejs/lib/esm/utilities/begins-with.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@benbraide/inlinejs/lib/esm/utilities/begins-with.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nothing": () => (/* binding */ Nothing)
/* harmony export */ });
class Nothing {
}


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.4.15
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param {string} str
   * @returns {string}
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * @param {NodeList | HTMLCollection | NamedNodeMap | DOMTokenList} nodeList
   * @returns {array}
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardize console warnings
   * @param {string | array} message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardize console errors
   * @param {string} message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param {string} message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;
  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {string} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {string} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {string} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };

  const swalPrefix = 'swal2-';
  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'no-war']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */

  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };
  /**
   * @returns {HTMLElement | null}
   */


  const getPopup = () => elementByClass(swalClasses.popup);
  /**
   * @returns {HTMLElement | null}
   */

  const getIcon = () => elementByClass(swalClasses.icon);
  /**
   * @returns {HTMLElement | null}
   */

  const getTitle = () => elementByClass(swalClasses.title);
  /**
   * @returns {HTMLElement | null}
   */

  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  /**
   * @returns {HTMLElement | null}
   */

  const getImage = () => elementByClass(swalClasses.image);
  /**
   * @returns {HTMLElement | null}
   */

  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  /**
   * @returns {HTMLElement | null}
   */

  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  /**
   * @returns {HTMLElement | null}
   */

  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  /**
   * @returns {HTMLElement | null}
   */

  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  /**
   * @returns {HTMLElement | null}
   */

  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  /**
   * @returns {HTMLElement | null}
   */

  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  /**
   * @returns {HTMLElement | null}
   */

  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  /**
   * @returns {HTMLElement | null}
   */

  const getActions = () => elementByClass(swalClasses.actions);
  /**
   * @returns {HTMLElement | null}
   */

  const getFooter = () => elementByClass(swalClasses.footer);
  /**
   * @returns {HTMLElement | null}
   */

  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  /**
   * @returns {HTMLElement | null}
   */

  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */

  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  /**
   * @returns {boolean}
   */

  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  /**
   * @returns {boolean}
   */

  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  /**
   * @returns {boolean}
   */

  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */

  const setInnerHtml = (elem, html) => {
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */

  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */


  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */

  const getInput = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }

    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));

      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */

  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */

  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const getDirectChildByClass = (elem, className) => {
    const childNodes = toArray(elem.childNodes);

    for (let i = 0; i < childNodes.length; i++) {
      if (hasClass(childNodes[i], className)) {
        return childNodes[i];
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */

  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */

  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  /**
   * @param {HTMLElement} elem
   */

  const hide = elem => {
    elem.style.display = 'none';
  };
  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */

  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */

  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };
  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  /**
   * @returns {boolean}
   */

  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  /**
   * @returns {boolean}
   */

  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);
  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  /**
   * @param {number} timer
   * @param {boolean} reset
   */

  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
  /**
   * @returns {boolean}
   */

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    globalState.currentInstance.resetValidationMessage();
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */

    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */

    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */

    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };
  };
  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */


  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;
  /**
   * @param {SweetAlertOptions} params
   */


  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  /**
   * @param {HTMLElement} targetElement
   */


  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
    noWarMessageForRussians(container, params);
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions} params
   * @returns
   */

  const noWarMessageForRussians = (container, params) => {
    if (params.toast) {
      return;
    } // This message is targeted at people who are corrupted by propaganda, everybody else
    // is already against war either silently or actively.
    //
    // The point is to wrap the truth-bomb into a patriotic title so they will actually click it
    // and listen to the uncomfortable truth about the war from the people they love or respect.


    const message = getRandomElement([{
      text: 'ШВАРЦЕНЕГГЕР обратился <br> к РУССКОМУ НАРОДУ о войне',
      // Arnold is loved in Russia by all people including those who are for this war
      // His speech might change the mind of those who are brainwashed by propaganda
      youtubeId: 'fWClXZd9c78'
    }, {
      text: 'РУССКИЙ ПАТРИОТ <br> открыл главную тайну спецоперации',
      // In this video one of the most famous Russian nationalist leaders, Dmitry Demushkin,
      // explains that this war has no sense and produces the exact opposite result of what
      // it was intended to do.
      youtubeId: '_RjBNkn88yA'
    }, {
      text: 'ГЕРОЙ НОВОРОССИИ СТРЕЛКОВ <br> дал оценку ходу спецоперации',
      // In this video Igor Girkin, who played a key role in the annexation of Crimea,
      // explains that this war has failed already and all possible outcomes are bad for Russia.
      youtubeId: 'yUmzQT4C8JY'
    }, {
      text: 'ФИНСКИЙ ДРУГ РОССИИ <br> говорит ПО-РУССКИ о спецоперации',
      youtubeId: 'hkCYb6edUrQ'
    }, {
      text: 'ЮРИЙ ПОДОЛЯКА честно <br> о генералах РУССКОЙ АРМИИ',
      youtubeId: 'w4-_8BJKfpk'
    }, {
      text: 'Полковник ФСБ СТРЕЛКОВ <br> об успехах РОССИИ в спецоперации',
      youtubeId: 'saK5UTKroDA'
    }, {
      text: 'СКОБЕЕВА и ПЕРВЫЙ КАНАЛ <br> о контрнаступлении ВСУ на КРЫМ',
      youtubeId: 'rnnUCSKZ-SM'
    }]); // The message will only be shown to Russian users visiting Russian sites

    if (navigator.language === 'ru' && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
      const noWar = document.createElement('div');
      noWar.className = swalClasses['no-war'];
      setInnerHtml(noWar, "<a href=\"https://www.youtube.com/watch?v=".concat(message.youtubeId, "\" target=\"_blank\">").concat(message.text, "</a>"));
      container.appendChild(noWar);
      container.style.paddingTop = '4em';
    }
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {object} param
   * @param {HTMLElement} target
   */

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */


  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax

    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */

  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */


  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */


  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */


  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */


  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>
  /** @type {InputClass[]} */

  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]); // set attributes

      setAttributes(inputClass, params.inputAttributes); // set class

      inputContainer.className = swalClasses[inputClass];

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };
  /**
   * @param {HTMLInputElement} input
   */


  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */


  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput(getPopup(), inputClass);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */


  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */


  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;

      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }

      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */


  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */


  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof inputValue, "\""));
    }
  };
  /** @type Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input> */


  const renderInputType = {};
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */


  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };
  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */


  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };
  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */


  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    /**
     * @param {HTMLElement} el
     * @returns {number}
     */

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight); // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */

    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  const errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const setContent = (icon, params) => {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, successIconHtml);
    } else if (params.icon === 'error') {
      setInnerHtml(icon, errorIconHtml);
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  /**
   * @param {string} content
   */


  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */


  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }

    return lineEl;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170

    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };
  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        result[paramName] = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   */


  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */

      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */

  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   * @returns {HTMLElement | null}
   */

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  /**
   * @param {GlobalState} globalState
   */

  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {number} index
   * @param {number} increment
   */

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {function} dismissWith
   */

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams);
    } // TAB
    else if (e.key === 'Tab') {
      handleTab(e, innerParams);
    } // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key);
    } // ESC
    else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleEnter = (instance, e, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    if (e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!e.shiftKey) {
      setFocus(innerParams, btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };
  /**
   * @param {string} key
   */


  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (document.activeElement instanceof HTMLElement && ![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;

    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (buttonToFocus instanceof HTMLButtonElement && isVisible(buttonToFocus)) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }
  /**
   * @param {SweetAlert2} instance
   */

  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };
  /**
   * @param {SweetAlert2} instance
   */


  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };
  /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */


  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    handleAwaitingPromise: handleAwaitingPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    update: update,
    _destroy: _destroy
  });

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      return error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
    }

    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const rejectWith = (instance, error$$1) => {
    instance.rejectPromise(error$$1);
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {*} innerParams
   * @returns {boolean}
   */


  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      }); // @ts-ignore

      const promise = currentInstance._main(currentInstance.params);

      privateProps.promise.set(this, promise);
    }

    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));

      if (globalState.currentInstance) {
        // @ts-ignore
        globalState.currentInstance._destroy();

        if (isModal()) {
          unsetAriaHidden();
        }
      }

      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams); // clear the previous timer

      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      } // clear the restore focus timeout


      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  }

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };
  /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */


  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */


  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.4.15';

  const Swal = SweetAlert; // @ts-ignore

  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-no-war{display:flex;position:fixed;z-index:1061;top:0;left:0;align-items:center;justify-content:center;width:100%;height:3.375em;background:#20232a;color:#fff;text-align:center}.swal2-no-war a{color:#61dafb;text-decoration:none}.swal2-no-war a:hover{text-decoration:underline}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./src/concept/swal.ts":
/*!*****************************!*\
  !*** ./src/concept/swal.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwalAlert = void 0;
const sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
class SwalAlert {
    Notify(options) {
        if ((0, inlinejs_1.IsObject)(options)) {
            options['icon'] = (options['icon'] || (options['error'] ? 'error' : (options['type'] || options['code'] || 'success')));
            options['text'] = (options['text'] || options['message']);
            options['toast'] = (!!options['toast'] || !!options['asToast']);
            options['position'] = (options['position'] || (options['toast'] ? 'top-end' : 'center'));
            options['timer'] = (options['timer'] || ((typeof options['duration'] === 'number') ? options['duration'] : ((options['duration'] === false) ? undefined : 5000)));
        }
        return sweetalert2_1.default.fire(options);
    }
    Confirm(options) {
        if ((0, inlinejs_1.IsObject)(options)) {
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
        options['showCancelButton'] = true;
        return sweetalert2_1.default.fire(options);
    }
    Prompt(options) {
        if ((0, inlinejs_1.IsObject)(options)) {
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
        return sweetalert2_1.default.fire(options);
    }
}
exports.SwalAlert = SwalAlert;


/***/ }),

/***/ "./src/magic/alert.ts":
/*!****************************!*\
  !*** ./src/magic/alert.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertMagicHandlerCompact = exports.AlertMagicHandler = void 0;
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const names_1 = __webpack_require__(/*! ../names */ "./src/names.ts");
let AlertConceptName = names_1.SwalConceptName;
function CreateAlertProxy() {
    const getConcept = () => (0, inlinejs_1.GetGlobal)().GetConcept(AlertConceptName);
    let methods = {
        setConceptName: (name) => (AlertConceptName = name),
        notify: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Notify(options); },
        confirm: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Confirm(options); },
        prompt: (options) => { var _a; return (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.Prompt(options); },
    };
    return (0, inlinejs_1.CreateReadonlyProxy)(methods);
}
const AlertProxy = CreateAlertProxy();
exports.AlertMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)(names_1.AlertMagicName, () => AlertProxy);
function AlertMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.AlertMagicHandler);
}
exports.AlertMagicHandlerCompact = AlertMagicHandlerCompact;


/***/ }),

/***/ "./src/names.ts":
/*!**********************!*\
  !*** ./src/names.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertMagicName = exports.SwalConceptName = void 0;
exports.SwalConceptName = 'swal';
exports.AlertMagicName = 'alert';


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/inlinejs-alert.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const inlinejs_1 = __webpack_require__(/*! @benbraide/inlinejs */ "./node_modules/@benbraide/inlinejs/lib/esm/index.js");
const names_1 = __webpack_require__(/*! ./names */ "./src/names.ts");
const swal_1 = __webpack_require__(/*! ./concept/swal */ "./src/concept/swal.ts");
const alert_1 = __webpack_require__(/*! ./magic/alert */ "./src/magic/alert.ts");
(0, inlinejs_1.WaitForGlobal)().then(() => {
    (0, inlinejs_1.GetGlobal)().SetConcept(names_1.SwalConceptName, new swal_1.SwalAlert());
    (0, alert_1.AlertMagicHandlerCompact)();
});

})();

/******/ })()
;