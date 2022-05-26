/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bootstrap/attach.ts":
/*!*********************************!*\
  !*** ./src/bootstrap/attach.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootstrapAndAttach = void 0;
const process_1 = __webpack_require__(/*! ../directive/process */ "./src/directive/process.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
function BootstrapAndAttach(mount) {
    let global = (0, get_1.GetGlobal)(), config = global.GetConfig();
    [config.GetDirectiveName('data', true), config.GetDirectiveName('data', false)].forEach((name) => {
        (mount || document).querySelectorAll(`[${name}]`).forEach((element) => {
            if (!element.hasAttribute(name) || !document.contains(element)) { //Probably contained inside another region
                return;
            }
            let component = global.CreateComponent(element);
            (0, process_1.ProcessDirectives)({
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
exports.BootstrapAndAttach = BootstrapAndAttach;


/***/ }),

/***/ "./src/bootstrap/auto.ts":
/*!*******************************!*\
  !*** ./src/bootstrap/auto.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoBootstrap = void 0;
const create_1 = __webpack_require__(/*! ../global/create */ "./src/global/create.ts");
const attach_1 = __webpack_require__(/*! ./attach */ "./src/bootstrap/attach.ts");
function AutoBootstrap(mount) {
    (0, create_1.GetOrCreateGlobal)();
    setTimeout(() => {
        if (document.readyState == "loading") {
            document.addEventListener('DOMContentLoaded', () => {
                (0, attach_1.BootstrapAndAttach)(mount);
            });
        }
        else { //Loaded
            (0, attach_1.BootstrapAndAttach)(mount);
        }
    }, 0);
}
exports.AutoBootstrap = AutoBootstrap;


/***/ }),

/***/ "./src/component/base.ts":
/*!*******************************!*\
  !*** ./src/component/base.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseComponent = void 0;
const process_1 = __webpack_require__(/*! ../directive/process */ "./src/directive/process.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const root_1 = __webpack_require__(/*! ../proxy/root */ "./src/proxy/root.ts");
const stack_1 = __webpack_require__(/*! ../stack */ "./src/stack.ts");
const context_keys_1 = __webpack_require__(/*! ../utilities/context-keys */ "./src/utilities/context-keys.ts");
const unique_markers_1 = __webpack_require__(/*! ../utilities/unique-markers */ "./src/utilities/unique-markers.ts");
const changes_1 = __webpack_require__(/*! ./changes */ "./src/component/changes.ts");
const context_1 = __webpack_require__(/*! ./context */ "./src/component/context.ts");
const element_scope_1 = __webpack_require__(/*! ./element-scope */ "./src/component/element-scope.ts");
const element_scope_id_1 = __webpack_require__(/*! ./element-scope-id */ "./src/component/element-scope-id.ts");
const find_1 = __webpack_require__(/*! ./find */ "./src/component/find.ts");
const get_config_1 = __webpack_require__(/*! ./get-config */ "./src/component/get-config.ts");
const scope_1 = __webpack_require__(/*! ./scope */ "./src/component/scope.ts");
class BaseComponent {
    constructor(id_, root_) {
        this.id_ = id_;
        this.root_ = root_;
        this.reactiveState_ = 'default';
        this.name_ = '';
        this.context_ = new context_1.Context;
        this.scopes_ = {};
        this.elementScopes_ = {};
        this.proxies_ = {};
        this.refs_ = {};
        this.currentScope_ = new stack_1.Stack();
        this.selectionScopes_ = new stack_1.Stack();
        this.uniqueMarkers_ = (0, unique_markers_1.GetDefaultUniqueMarkers)();
        this.observers_ = {
            intersections: {},
        };
        this.changes_ = new changes_1.Changes(this.id_);
        this.rootProxy_ = new root_1.RootProxy(this.id_, {});
        this.proxies_[this.rootProxy_.GetPath()] = this.rootProxy_;
        this.CreateElementScope(this.root_);
        (0, get_1.GetGlobal)().GetMutationObserver().Observe(this.root_, ({ added, removed, attributes }) => {
            let component = (0, find_1.FindComponentById)(id_);
            if (!component) {
                return;
            }
            let checklist = new Array(), dirRegex = (0, get_1.GetGlobal)().GetConfig().GetDirectiveRegex();
            attributes === null || attributes === void 0 ? void 0 : attributes.filter(attr => (attr.target instanceof HTMLElement)).forEach((attr) => {
                var _a;
                if (!dirRegex.test(attr.name)) {
                    (_a = component === null || component === void 0 ? void 0 : component.FindElementScope(attr.target)) === null || _a === void 0 ? void 0 : _a.ExecuteAttributeChangeCallbacks(attr.name);
                }
                else if (attr.target.hasAttribute(attr.name) && !checklist.includes(attr.target)) {
                    checklist.push(attr.target);
                }
            });
            checklist.forEach(element => (0, process_1.ProcessDirectives)({ element,
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
                    (0, process_1.ProcessDirectives)({
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
        return ((this.reactiveState_ === 'default') ? (0, get_config_1.GetConfig)().GetReactiveState() : this.reactiveState_);
    }
    GetId() {
        return this.id_;
    }
    GenerateUniqueId(prefix, suffix) {
        return (0, unique_markers_1.GenerateUniqueId)(this.uniqueMarkers_, `Cmpnt<${this.id_}>.`, prefix, suffix);
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
        let scope = new scope_1.Scope(this.id_, this.GenerateUniqueId('scope_'), root);
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
        return (this.FindScopeById(((_a = this.FindElementScope((0, element_scope_id_1.GetElementScopeId)(element))) === null || _a === void 0 ? void 0 : _a.GetScopeId()) || '') || null);
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
        let elementScope = new element_scope_1.ElementScope(this.id_, this.GenerateUniqueId('elscope_'), element, (element === this.root_));
        this.elementScopes_[elementScope.GetId()] = elementScope;
        element[element_scope_id_1.ElementScopeKey] = elementScope.GetId();
        return elementScope;
    }
    RemoveElementScope(id) {
        delete this.elementScopes_[id];
    }
    FindElementScope(element) {
        if (typeof element === 'string') {
            return ((element in this.elementScopes_) ? this.elementScopes_[element] : null);
        }
        let target = ((element === true) ? this.context_.Peek(context_keys_1.ContextKeys.self) : ((element instanceof Node) ? element : this.root_));
        if (target && element_scope_id_1.ElementScopeKey in target && target[element_scope_id_1.ElementScopeKey] in this.elementScopes_) {
            return this.elementScopes_[target[element_scope_id_1.ElementScopeKey]];
        }
        return null;
    }
    FindElementLocalValue(element, key, shouldBubble) {
        let elementScope = this.FindElementScope(element), value = (elementScope ? elementScope.GetLocal(key) : (0, get_1.GetGlobal)().CreateNothing());
        if (!(0, get_1.GetGlobal)().IsNothing(value) || !shouldBubble || (!elementScope && typeof element === 'string')) {
            return value;
        }
        let target = ((elementScope === null || elementScope === void 0 ? void 0 : elementScope.GetElement()) || ((element === true) ? this.context_.Peek(context_keys_1.ContextKeys.self) : ((element instanceof Node) ? element : this.root_)));
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
        return (0, get_1.GetGlobal)();
    }
}
exports.BaseComponent = BaseComponent;


/***/ }),

/***/ "./src/component/changes.ts":
/*!**********************************!*\
  !*** ./src/component/changes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Changes = void 0;
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
const stack_1 = __webpack_require__(/*! ../stack */ "./src/stack.ts");
const deep_copy_1 = __webpack_require__(/*! ../utilities/deep-copy */ "./src/utilities/deep-copy.ts");
const current_1 = __webpack_require__(/*! ./current */ "./src/component/current.ts");
const find_1 = __webpack_require__(/*! ./find */ "./src/component/find.ts");
class Changes {
    constructor(componentId_) {
        this.componentId_ = componentId_;
        this.nextTickHandlers_ = new Array();
        this.isScheduled_ = false;
        this.list_ = new Array();
        this.subscribers_ = {};
        this.lastAccessContext_ = '';
        this.getAccessStorages_ = new stack_1.Stack();
        this.origins_ = new stack_1.Stack();
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
                    (0, error_1.JournalError)(err, `InlineJs.Region<${this.componentId_}>.NextTick`);
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
        return (0, deep_copy_1.DeepCopy)(this.list_.at(-(index + 1)) || null);
    }
    AddGetAccess(path) {
        var _a, _b, _c, _d;
        let targetObject = (((_a = (0, find_1.FindComponentById)((0, current_1.PeekCurrentComponent)() || '')) === null || _a === void 0 ? void 0 : _a.GetBackend().changes) || this);
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
                optimized: ((((_a = (0, find_1.FindComponentById)(this.componentId_)) === null || _a === void 0 ? void 0 : _a.GetReactiveState()) === 'optimized') ? {
                    entries: new Array(),
                    snapshots: new stack_1.Stack(),
                } : undefined),
                raw: {
                    entries: new Array(),
                    snapshots: new stack_1.Stack(),
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
        let id = (_a = (0, find_1.FindComponentById)(this.componentId_)) === null || _a === void 0 ? void 0 : _a.GenerateUniqueId('sub_');
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
exports.Changes = Changes;


/***/ }),

/***/ "./src/component/context.ts":
/*!**********************************!*\
  !*** ./src/component/context.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
const stack_1 = __webpack_require__(/*! ../stack */ "./src/stack.ts");
class Context {
    constructor() {
        this.record_ = {};
    }
    Push(key, value) {
        (this.record_[key] = (this.record_[key] || new stack_1.Stack())).Push(value);
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
exports.Context = Context;


/***/ }),

/***/ "./src/component/current-scope.ts":
/*!****************************************!*\
  !*** ./src/component/current-scope.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PeekCurrentScope = exports.PopCurrentScope = exports.PushCurrentScope = void 0;
const find_1 = __webpack_require__(/*! ./find */ "./src/component/find.ts");
function PushCurrentScope(component, scope) {
    var _a;
    (_a = ((typeof component === 'string') ? (0, find_1.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.PushCurrentScope(scope);
}
exports.PushCurrentScope = PushCurrentScope;
function PopCurrentScope(component) {
    var _a;
    return (((_a = ((typeof component === 'string') ? (0, find_1.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.PopCurrentScope()) || null);
}
exports.PopCurrentScope = PopCurrentScope;
function PeekCurrentScope(component) {
    var _a;
    return (((_a = ((typeof component === 'string') ? (0, find_1.FindComponentById)(component) : component)) === null || _a === void 0 ? void 0 : _a.PeekCurrentScope()) || null);
}
exports.PeekCurrentScope = PeekCurrentScope;


/***/ }),

/***/ "./src/component/current.ts":
/*!**********************************!*\
  !*** ./src/component/current.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PeekCurrentComponent = exports.PopCurrentComponent = exports.PushCurrentComponent = void 0;
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
function PushCurrentComponent(componentId) {
    (0, get_1.GetGlobal)().PushCurrentComponent(componentId);
}
exports.PushCurrentComponent = PushCurrentComponent;
function PopCurrentComponent() {
    return (0, get_1.GetGlobal)().PopCurrentComponent();
}
exports.PopCurrentComponent = PopCurrentComponent;
function PeekCurrentComponent() {
    return (0, get_1.GetGlobal)().PeekCurrentComponent();
}
exports.PeekCurrentComponent = PeekCurrentComponent;


/***/ }),

/***/ "./src/component/element-scope-id.ts":
/*!*******************************************!*\
  !*** ./src/component/element-scope-id.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetElementScopeId = exports.ElementScopeKey = void 0;
exports.ElementScopeKey = '__InlineJS_ELSCOPE_KEY__';
function GetElementScopeId(element) {
    let getScopeId = (el) => ((exports.ElementScopeKey in el) && el[exports.ElementScopeKey]), scopeId = '';
    while (element) { //Get closest element with a scope ID
        scopeId = getScopeId(element);
        if (scopeId || element === document.body) {
            return (scopeId || '');
        }
        element = element.parentElement;
    }
    return '';
}
exports.GetElementScopeId = GetElementScopeId;


/***/ }),

/***/ "./src/component/element-scope.ts":
/*!****************************************!*\
  !*** ./src/component/element-scope.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementScope = void 0;
const manager_1 = __webpack_require__(/*! ../directive/manager */ "./src/directive/manager.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const try_1 = __webpack_require__(/*! ../journal/try */ "./src/journal/try.ts");
const current_scope_1 = __webpack_require__(/*! ./current-scope */ "./src/component/current-scope.ts");
const element_scope_id_1 = __webpack_require__(/*! ./element-scope-id */ "./src/component/element-scope-id.ts");
const event_1 = __webpack_require__(/*! ./event */ "./src/component/event.ts");
const find_1 = __webpack_require__(/*! ./find */ "./src/component/find.ts");
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
        this.scopeId_ = ((0, current_scope_1.PeekCurrentScope)(this.componentId_) || '');
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
        return ((key in this.locals_) ? this.locals_[key] : (0, get_1.GetGlobal)().CreateNothing());
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
        return ((key in this.data_) ? this.data_[key] : (0, get_1.GetGlobal)().CreateNothing());
    }
    AddPostProcessCallback(callback) {
        if (!this.state_.isMarked) {
            this.callbacks_.post.push(callback);
        }
    }
    ExecutePostProcessCallbacks() {
        (this.callbacks_.post || []).forEach(callback => (0, try_1.JournalTry)(callback, 'ElementScope.ExecutePostProcessCallbacks'));
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
        this.callbacks_.treeChange.forEach(callback => (0, try_1.JournalTry)(() => callback({ added, removed })));
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
            .forEach(info => (0, try_1.JournalTry)(() => info.callback(name)));
    }
    Destroy(markOnly) {
        if (this.state_.isDestroyed) {
            return;
        }
        this.state_.isMarked = true;
        if (!(this.element_ instanceof HTMLTemplateElement) && this.element_.tagName.toLowerCase() !== 'svg') {
            let component = (0, find_1.FindComponentById)(this.componentId_);
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
        (0, event_1.UnbindOutsideEvent)(this.element_);
        (0, get_1.GetGlobal)().GetMutationObserver().Unobserve(this.element_);
        let component = (0, find_1.FindComponentById)(this.componentId_);
        component === null || component === void 0 ? void 0 : component.RemoveElementScope(this.id_); //Remove from component
        delete this.element_[element_scope_id_1.ElementScopeKey]; //Remove id value on element
        if (this.isRoot_) { //Remove component -- wait for changes to finalize
            let componentId = this.componentId_;
            component === null || component === void 0 ? void 0 : component.GetBackend().changes.AddNextTickHandler(() => (0, get_1.GetGlobal)().RemoveComponent(componentId));
        }
    }
    IsMarked() {
        return this.state_.isMarked;
    }
    IsDestroyed() {
        return this.state_.isDestroyed;
    }
    GetDirectiveManager() {
        return (this.managers_.directive = (this.managers_.directive || new manager_1.DirectiveManager()));
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
exports.ElementScope = ElementScope;


/***/ }),

/***/ "./src/component/event.ts":
/*!********************************!*\
  !*** ./src/component/event.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnbindOutsideEvent = exports.AddOutsideEventExcept = exports.RemoveOutsideEventListener = exports.AddOutsideEventListener = void 0;
const try_1 = __webpack_require__(/*! ../journal/try */ "./src/journal/try.ts");
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
                        .forEach(info => (0, try_1.JournalTry)(() => info.callback(e), 'InlineJS.OutsideEventListener'));
                });
            };
            window.addEventListener(event, block.eventCallbacks[event]);
        }
    });
}
exports.AddOutsideEventListener = AddOutsideEventListener;
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
exports.RemoveOutsideEventListener = RemoveOutsideEventListener;
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
exports.AddOutsideEventExcept = AddOutsideEventExcept;
function UnbindOutsideEvent(target) {
    GetOutsideEventGlobalBlock().targetScopes = GetOutsideEventGlobalBlock().targetScopes.filter(scope => (scope.target !== target && target.contains(scope.target)));
}
exports.UnbindOutsideEvent = UnbindOutsideEvent;


/***/ }),

/***/ "./src/component/find.ts":
/*!*******************************!*\
  !*** ./src/component/find.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindComponentByRoot = exports.FindComponentByName = exports.FindComponentById = exports.InitComponentCache = void 0;
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const cacheKey = 'InlineJS_Comp_Cache';
function InitComponentCache() {
    return globalThis[cacheKey] = {
        id: '',
        component: null
    };
}
exports.InitComponentCache = InitComponentCache;
function FindComponentById(id) {
    let cache = (globalThis[cacheKey] = (globalThis[cacheKey] || InitComponentCache()));
    if (id === cache.id) {
        return cache.component;
    }
    cache.component = (0, get_1.GetGlobal)().FindComponentById(id);
    cache.id = (cache.component ? id : '');
    return cache.component;
}
exports.FindComponentById = FindComponentById;
function FindComponentByName(name) {
    return (0, get_1.GetGlobal)().FindComponentByName(name);
}
exports.FindComponentByName = FindComponentByName;
function FindComponentByRoot(root) {
    return (0, get_1.GetGlobal)().FindComponentByRoot(root);
}
exports.FindComponentByRoot = FindComponentByRoot;


/***/ }),

/***/ "./src/component/get-config.ts":
/*!*************************************!*\
  !*** ./src/component/get-config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetConfig = void 0;
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
function GetConfig() {
    return (0, get_1.GetGlobal)().GetConfig();
}
exports.GetConfig = GetConfig;


/***/ }),

/***/ "./src/component/infer.ts":
/*!********************************!*\
  !*** ./src/component/infer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InferComponent = void 0;
const element_scope_id_1 = __webpack_require__(/*! ./element-scope-id */ "./src/component/element-scope-id.ts");
const find_1 = __webpack_require__(/*! ./find */ "./src/component/find.ts");
function InferComponent(element) {
    let matches = (0, element_scope_id_1.GetElementScopeId)(element).match(/^Cmpnt\<([0-9_]+)\>/);
    return (matches ? (0, find_1.FindComponentById)(matches[1]) : null);
}
exports.InferComponent = InferComponent;


/***/ }),

/***/ "./src/component/scope.ts":
/*!********************************!*\
  !*** ./src/component/scope.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scope = void 0;
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
exports.Scope = Scope;


/***/ }),

/***/ "./src/directive/create.ts":
/*!*********************************!*\
  !*** ./src/directive/create.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDirective = void 0;
const get_config_1 = __webpack_require__(/*! ../component/get-config */ "./src/component/get-config.ts");
const expand_1 = __webpack_require__(/*! ./expand */ "./src/directive/expand.ts");
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
    let expandedName = (0, expand_1.ApplyDirectiveExpansionRules)(name), matches = expandedName.match((0, get_config_1.GetConfig)().GetDirectiveRegex());
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
exports.CreateDirective = CreateDirective;


/***/ }),

/***/ "./src/directive/dispatch.ts":
/*!***********************************!*\
  !*** ./src/directive/dispatch.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DispatchDirective = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
const try_1 = __webpack_require__(/*! ../journal/try */ "./src/journal/try.ts");
const warn_1 = __webpack_require__(/*! ../journal/warn */ "./src/journal/warn.ts");
const flatten_1 = __webpack_require__(/*! ./flatten */ "./src/directive/flatten.ts");
function DispatchDirective(component, element, directive, repeats = 0) {
    let resolvedComponent = ((typeof component === 'string') ? (0, find_1.FindComponentById)(component) : component);
    if (!resolvedComponent) {
        (0, error_1.JournalError)(`Failed to find component for '${directive.meta.view.original}'`, 'InlineJS.DispatchDirective', element);
        return false;
    }
    let handler = null, elementScope = resolvedComponent.FindElementScope(element);
    if (elementScope) { //Check element scope
        handler = elementScope.GetDirectiveManager().FindHandler(directive.meta.name.joined);
        ++repeats;
    }
    handler = (handler || (0, get_1.GetGlobal)().GetDirectiveManager().FindHandler(directive.meta.name.joined));
    if (!handler) { //Try user defined handler
        let camelCaseName = directive.meta.name.parts.reduce((prev, part) => (prev ? `${prev}${part.substring(0, 1).toUpperCase()}${part.substring(1)}` : part), '');
        let key = `${camelCaseName}DirectiveHandler`;
        if (key in globalThis && typeof globalThis[key] === 'function') {
            handler = globalThis[key];
        }
    }
    if (!handler) {
        (0, warn_1.JournalWarn)(`No handler found '${directive.meta.view.original}'`, 'InlineJS.DispatchDirective', element);
        return false;
    }
    if (repeats == 0 && !elementScope) { //Initialize element scope
        resolvedComponent.CreateElementScope(element);
    }
    (0, try_1.JournalTry)(() => {
        handler(Object.assign(Object.assign({}, (0, flatten_1.FlattenDirective)(directive)), { componentId: resolvedComponent.GetId(), component: resolvedComponent, contextElement: element }));
    }, 'InlineJS.DispatchDirective', element);
    return true;
}
exports.DispatchDirective = DispatchDirective;


/***/ }),

/***/ "./src/directive/expand.ts":
/*!*********************************!*\
  !*** ./src/directive/expand.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplyDirectiveExpansionRules = exports.RemoveDirectiveExpansionRule = exports.AddDirectiveExpansionRule = exports.CreateDirectiveExpansionRule = void 0;
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
function CreateDirectiveExpansionRule(rule, expandWith) {
    return (name) => ((name.search(rule) == -1) ? null : name.replace(rule, expandWith));
}
exports.CreateDirectiveExpansionRule = CreateDirectiveExpansionRule;
function AddDirectiveExpansionRule(rule) {
    return (0, get_1.GetGlobal)().GetDirectiveManager().AddExpansionRule(rule);
}
exports.AddDirectiveExpansionRule = AddDirectiveExpansionRule;
function RemoveDirectiveExpansionRule(id) {
    (0, get_1.GetGlobal)().GetDirectiveManager().RemoveExpansionRule(id);
}
exports.RemoveDirectiveExpansionRule = RemoveDirectiveExpansionRule;
function ApplyDirectiveExpansionRules(name) {
    return (0, get_1.GetGlobal)().GetDirectiveManager().Expand(name);
}
exports.ApplyDirectiveExpansionRules = ApplyDirectiveExpansionRules;


/***/ }),

/***/ "./src/directive/flatten.ts":
/*!**********************************!*\
  !*** ./src/directive/flatten.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlattenDirective = void 0;
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
exports.FlattenDirective = FlattenDirective;


/***/ }),

/***/ "./src/directive/manager.ts":
/*!**********************************!*\
  !*** ./src/directive/manager.ts ***!
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
exports.DirectiveManager = void 0;
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
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
        let id = (0, get_1.GetGlobal)().GenerateUniqueId('exrule_');
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
exports.DirectiveManager = DirectiveManager;


/***/ }),

/***/ "./src/directive/process.ts":
/*!**********************************!*\
  !*** ./src/directive/process.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProcessDirectives = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
const dispatch_1 = __webpack_require__(/*! ./dispatch */ "./src/directive/dispatch.ts");
const traverse_1 = __webpack_require__(/*! ./traverse */ "./src/directive/traverse.ts");
function CheckElement(element, { checkTemplate = true, checkDocument = true }) {
    return ((element === null || element === void 0 ? void 0 : element.nodeType) === 1 && (!checkDocument || document.contains(element)) && (!checkTemplate || element instanceof HTMLTemplateElement || !element.closest('template')));
}
function ProcessDirectives({ component, element, options = {} }) {
    var _a;
    if (!CheckElement(element, options)) { //Check failed -- ignore
        return;
    }
    let resolvedComponent = ((typeof component === 'string') ? (0, find_1.FindComponentById)(component) : component);
    if (!resolvedComponent) {
        (0, error_1.JournalError)('Failed to find component.', 'InlineJS.ProcessDirectives', element);
        return false;
    }
    let repeats = 0;
    (0, traverse_1.TraverseDirectives)({ element,
        callback: (directive) => {
            if ((0, dispatch_1.DispatchDirective)(component, element, directive, repeats)) {
                element.removeAttribute(directive.meta.view.original);
                ++repeats; //Prevent multiple element scope initialization attempts
            }
        },
        attributeCallback: (name, value) => (0, get_1.GetGlobal)().DispatchAttributeProcessing({ name, value,
            componentId: resolvedComponent.GetId(),
            component: resolvedComponent,
            contextElement: element,
        }),
    });
    (0, get_1.GetGlobal)().DispatchTextContentProcessing({
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
exports.ProcessDirectives = ProcessDirectives;


/***/ }),

/***/ "./src/directive/traverse.ts":
/*!***********************************!*\
  !*** ./src/directive/traverse.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TraverseDirectives = void 0;
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
const create_1 = __webpack_require__(/*! ./create */ "./src/directive/create.ts");
function TraverseDirectives({ element, callback, attributeCallback }) {
    Array.from(element.attributes || []).forEach((attr) => {
        try {
            if (attributeCallback) {
                attributeCallback(attr.name, (attr.value || ''));
            }
            let directive = (0, create_1.CreateDirective)(attr.name, (attr.value || ''));
            if (directive) {
                callback(directive);
            }
        }
        catch (err) {
            (0, error_1.JournalError)(err, 'InlineJS.TraverseDirectives', element);
        }
    });
}
exports.TraverseDirectives = TraverseDirectives;


/***/ }),

/***/ "./src/evaluator/evaluate-later.ts":
/*!*****************************************!*\
  !*** ./src/evaluator/evaluate-later.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EvaluateLater = void 0;
const generate_function_1 = __webpack_require__(/*! ./generate-function */ "./src/evaluator/generate-function.ts");
function EvaluateLater(options) {
    return (0, generate_function_1.GenerateFunctionFromString)(options);
}
exports.EvaluateLater = EvaluateLater;


/***/ }),

/***/ "./src/evaluator/generate-function.ts":
/*!********************************************!*\
  !*** ./src/evaluator/generate-function.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenerateFunctionFromString = exports.CallIfFunction = exports.GenerateVoidFunction = exports.GenerateValueReturningFunction = void 0;
const current_1 = __webpack_require__(/*! ../component/current */ "./src/component/current.ts");
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
const context_keys_1 = __webpack_require__(/*! ../utilities/context-keys */ "./src/utilities/context-keys.ts");
const wait_promise_1 = __webpack_require__(/*! ./wait-promise */ "./src/evaluator/wait-promise.ts");
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
            (0, error_1.JournalError)(err, `InlineJs.Region<${componentId || 'NIL'}>.GenerateValueReturningFunction`);
        }
    }
    return null;
}
exports.GenerateValueReturningFunction = GenerateValueReturningFunction;
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
        (0, error_1.JournalError)(err, `InlineJs.Region<${componentId || 'NIL'}>.GenerateVoidFunction`);
    }
    return null;
}
exports.GenerateVoidFunction = GenerateVoidFunction;
function CallIfFunction(value, handler, componentId, params = []) {
    var _a;
    if (typeof value === 'function') { //Call function
        let component = (0, find_1.FindComponentById)(componentId || ''), lastContext = component === null || component === void 0 ? void 0 : component.FindProxy(component === null || component === void 0 ? void 0 : component.GetBackend().changes.GetLastAccessContext());
        let result = value.apply((((_a = (lastContext || (component === null || component === void 0 ? void 0 : component.GetRootProxy()))) === null || _a === void 0 ? void 0 : _a.GetNative()) || null), (params || []));
        return (handler ? handler(result) : result);
    }
    return (handler ? handler(value) : value);
}
exports.CallIfFunction = CallIfFunction;
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
        let component = (0, find_1.FindComponentById)(componentId), proxy = component === null || component === void 0 ? void 0 : component.GetRootProxy().GetNative();
        if (!proxy || ((_a = component === null || component === void 0 ? void 0 : component.FindElementScope(contextElement)) === null || _a === void 0 ? void 0 : _a.IsDestroyed())) {
            return;
        }
        let { context = null, changes = null } = ((component === null || component === void 0 ? void 0 : component.GetBackend()) || {});
        context === null || context === void 0 ? void 0 : context.Push(context_keys_1.ContextKeys.self, contextElement);
        changes === null || changes === void 0 ? void 0 : changes.ResetLastAccessContext();
        (0, current_1.PushCurrentComponent)(componentId);
        Object.entries(contexts || {}).forEach(([key, value]) => context === null || context === void 0 ? void 0 : context.Push(key, value));
        try {
            let result = target(proxy);
            if ((0, get_1.GetGlobal)().IsFuture(result)) {
                result = result.Get();
            }
            if (!handler) {
                return (disableFunctionCall ? result : CallIfFunction(result, handler, componentId, params));
            }
            let handleResult = (value) => {
                if (waitPromise !== 'none') {
                    (0, wait_promise_1.WaitPromise)(value, handler, waitPromise === 'recursive');
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
                (0, error_1.JournalError)(err, `InlineJs.Region<${componentId}>.RunFunction('${expression}')`);
            }
            else { //Forward syntax errors
                throw err;
            }
        }
        finally { //Revert changes
            Object.entries(contexts || {}).forEach(([key, value]) => context === null || context === void 0 ? void 0 : context.Pop(key, value));
            (0, current_1.PopCurrentComponent)();
            context === null || context === void 0 ? void 0 : context.Pop(context_keys_1.ContextKeys.self);
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
exports.GenerateFunctionFromString = GenerateFunctionFromString;


/***/ }),

/***/ "./src/evaluator/wait-promise.ts":
/*!***************************************!*\
  !*** ./src/evaluator/wait-promise.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaitPromise = void 0;
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
exports.WaitPromise = WaitPromise;


/***/ }),

/***/ "./src/global/base.ts":
/*!****************************!*\
  !*** ./src/global/base.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseGlobal = void 0;
const base_1 = __webpack_require__(/*! ../component/base */ "./src/component/base.ts");
const manager_1 = __webpack_require__(/*! ../directive/manager */ "./src/directive/manager.ts");
const try_1 = __webpack_require__(/*! ../journal/try */ "./src/journal/try.ts");
const manager_2 = __webpack_require__(/*! ../magic/manager */ "./src/magic/manager.ts");
const mutation_1 = __webpack_require__(/*! ../observers/mutation */ "./src/observers/mutation.ts");
const child_1 = __webpack_require__(/*! ../proxy/child */ "./src/proxy/child.ts");
const stack_1 = __webpack_require__(/*! ../stack */ "./src/stack.ts");
const unique_markers_1 = __webpack_require__(/*! ../utilities/unique-markers */ "./src/utilities/unique-markers.ts");
const future_1 = __webpack_require__(/*! ../values/future */ "./src/values/future.ts");
const nothing_1 = __webpack_require__(/*! ../values/nothing */ "./src/values/nothing.ts");
const config_1 = __webpack_require__(/*! ./config */ "./src/global/config.ts");
const native_fetch_1 = __webpack_require__(/*! ./native-fetch */ "./src/global/native-fetch.ts");
class BaseGlobal {
    constructor(configOptions, idOffset = 0) {
        this.nothing_ = new nothing_1.Nothing;
        this.componentsMonitorList_ = new Array();
        this.components_ = {};
        this.currentComponent_ = new stack_1.Stack();
        this.attributeProcessors_ = new Array();
        this.textContentProcessors_ = new Array();
        this.managers_ = {
            directive: new manager_1.DirectiveManager(),
            magic: new manager_2.MagicManager(),
        };
        this.uniqueMarkers_ = (0, unique_markers_1.GetDefaultUniqueMarkers)();
        this.mutationObserver_ = new mutation_1.MutationObserver();
        this.nativeFetch_ = new native_fetch_1.NativeFetchConcept();
        this.fetchConcept_ = null;
        this.concepts_ = {};
        this.config_ = new config_1.Config(configOptions || {});
        this.uniqueMarkers_.level0 = (idOffset || 0);
    }
    SwapConfig(config) {
        this.config_ = config;
    }
    GetConfig() {
        return this.config_;
    }
    GenerateUniqueId(prefix, suffix) {
        return (0, unique_markers_1.GenerateUniqueId)(this.uniqueMarkers_, '', prefix, suffix);
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
        let component = new base_1.BaseComponent(this.GenerateUniqueId(), root);
        this.components_[component.GetId()] = component;
        this.componentsMonitorList_.slice(0).forEach(monitor => (0, try_1.JournalTry)(() => monitor({ action: 'add', component }), 'InlineJS.Global.CreateComponent'));
        return component;
    }
    RemoveComponent(component) {
        let key = ((typeof component === 'string') ? component : component.GetId());
        if (this.components_.hasOwnProperty(key)) {
            let component = this.components_[key];
            delete this.components_[key];
            this.componentsMonitorList_.slice(0).forEach(monitor => (0, try_1.JournalTry)(() => monitor({ action: 'remove', component }), 'InlineJS.Global.RemoveComponent'));
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
        this.attributeProcessors_.forEach(processor => (0, try_1.JournalTry)(() => processor(params), 'InlineJS.Global.DispatchAttribute', params.contextElement));
    }
    AddTextContentProcessor(processor) {
        this.textContentProcessors_.push(processor);
    }
    DispatchTextContentProcessing(params) {
        this.textContentProcessors_.forEach(processor => (0, try_1.JournalTry)(() => processor(params), 'InlineJS.Global.DispatchTextContent', params.contextElement));
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
        return new child_1.ChildProxy(owner, name, target);
    }
    CreateFuture(callback) {
        return new future_1.Future(callback);
    }
    IsFuture(value) {
        return (value instanceof future_1.Future);
    }
    CreateNothing() {
        return this.nothing_;
    }
    IsNothing(value) {
        return (value instanceof nothing_1.Nothing);
    }
}
exports.BaseGlobal = BaseGlobal;


/***/ }),

/***/ "./src/global/config.ts":
/*!******************************!*\
  !*** ./src/global/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Config = void 0;
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
exports.Config = Config;


/***/ }),

/***/ "./src/global/create.ts":
/*!******************************!*\
  !*** ./src/global/create.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetOrCreateGlobal = exports.CreateGlobal = exports.InlineJSGlobalKey = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const base_1 = __webpack_require__(/*! ./base */ "./src/global/base.ts");
const get_1 = __webpack_require__(/*! ./get */ "./src/global/get.ts");
exports.InlineJSGlobalKey = '__InlineJS_GLOBAL_KEY__';
function CreateGlobal(configOptions, idOffset = 0) {
    (0, find_1.InitComponentCache)();
    globalThis[exports.InlineJSGlobalKey] = new base_1.BaseGlobal(configOptions, idOffset);
    window.dispatchEvent(new CustomEvent(get_1.GlobalCreatedEvent));
    return globalThis[exports.InlineJSGlobalKey];
}
exports.CreateGlobal = CreateGlobal;
function GetOrCreateGlobal(configOptions, idOffset = 0) {
    return ((0, get_1.GetGlobal)() || CreateGlobal(configOptions, idOffset));
}
exports.GetOrCreateGlobal = GetOrCreateGlobal;


/***/ }),

/***/ "./src/global/get.ts":
/*!***************************!*\
  !*** ./src/global/get.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaitForGlobal = exports.GetGlobal = exports.GlobalCreatedEvent = void 0;
const create_1 = __webpack_require__(/*! ./create */ "./src/global/create.ts");
exports.GlobalCreatedEvent = 'inlinejs.global.created';
function GetGlobal() {
    return globalThis[create_1.InlineJSGlobalKey];
}
exports.GetGlobal = GetGlobal;
function WaitForGlobal() {
    return (GetGlobal() ? Promise.resolve() : new Promise(resolve => window.addEventListener(exports.GlobalCreatedEvent, resolve)));
}
exports.WaitForGlobal = WaitForGlobal;


/***/ }),

/***/ "./src/global/interpolation.ts":
/*!*************************************!*\
  !*** ./src/global/interpolation.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextContentInterpolator = exports.AttributeInterpolator = void 0;
const interpolator_1 = __webpack_require__(/*! ./interpolator */ "./src/global/interpolator.ts");
function AttributeInterpolator({ componentId, contextElement, name, value }) {
    (0, interpolator_1.Interpolate)({ componentId, contextElement,
        text: value,
        handler: value => contextElement.setAttribute(name, value),
    });
}
exports.AttributeInterpolator = AttributeInterpolator;
function TextContentInterpolator({ componentId, contextElement }) {
    (0, interpolator_1.Interpolate)({ componentId, contextElement });
}
exports.TextContentInterpolator = TextContentInterpolator;


/***/ }),

/***/ "./src/global/interpolator.ts":
/*!************************************!*\
  !*** ./src/global/interpolator.ts ***!
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
exports.Interpolate = exports.InterpolateText = exports.ReplaceText = exports.GetElementContent = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const evaluate_later_1 = __webpack_require__(/*! ../evaluator/evaluate-later */ "./src/evaluator/evaluate-later.ts");
const try_1 = __webpack_require__(/*! ../journal/try */ "./src/journal/try.ts");
const effect_1 = __webpack_require__(/*! ../reactive/effect */ "./src/reactive/effect.ts");
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
exports.GetElementContent = GetElementContent;
function ReplaceText({ componentId, contextElement, text, handler }) {
    var _a;
    let evaluate = (0, evaluate_later_1.EvaluateLater)({ componentId, contextElement,
        expression: "let output = " + JSON.stringify(text).replace(InterpolateInlineRegex, '"+($1)+"') + "; return output;",
    });
    (_a = (0, find_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.CreateElementScope(contextElement);
    (0, effect_1.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(handler),
    });
}
exports.ReplaceText = ReplaceText;
function InterpolateText(_a) {
    var { text } = _a, rest = __rest(_a, ["text"]);
    if (InterpolateInlineTestRegex.test(text)) {
        ReplaceText(Object.assign({ text }, rest));
    }
}
exports.InterpolateText = InterpolateText;
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
    replaceCallers.forEach(caller => (0, try_1.JournalTry)(caller, 'InlineJS.Interpolate', contextElement));
}
exports.Interpolate = Interpolate;


/***/ }),

/***/ "./src/global/native-fetch.ts":
/*!************************************!*\
  !*** ./src/global/native-fetch.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NativeFetchConcept = void 0;
class NativeFetchConcept {
    Get(input, init) {
        return fetch(input, init);
    }
}
exports.NativeFetchConcept = NativeFetchConcept;


/***/ }),

/***/ "./src/journal/error.ts":
/*!******************************!*\
  !*** ./src/journal/error.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalError = void 0;
function JournalError(message, context, contextElement) {
    console.error({
        message: message,
        context: (context || 'N/A'),
        contextElement: (contextElement || 'N/A'),
    });
}
exports.JournalError = JournalError;


/***/ }),

/***/ "./src/journal/try.ts":
/*!****************************!*\
  !*** ./src/journal/try.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalTry = void 0;
const error_1 = __webpack_require__(/*! ./error */ "./src/journal/error.ts");
function JournalTry(callback, context, contextElement) {
    try {
        return callback();
    }
    catch (err) {
        (0, error_1.JournalError)(err, context, contextElement);
    }
}
exports.JournalTry = JournalTry;


/***/ }),

/***/ "./src/journal/warn.ts":
/*!*****************************!*\
  !*** ./src/journal/warn.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalWarn = void 0;
function JournalWarn(message, context, contextElement) {
    console.warn({
        message: message,
        context: (context || 'N/A'),
        contextElement: (contextElement || 'N/A'),
    });
}
exports.JournalWarn = JournalWarn;


/***/ }),

/***/ "./src/magic/evaluate.ts":
/*!*******************************!*\
  !*** ./src/magic/evaluate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EvaluateMagicProperty = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const infer_1 = __webpack_require__(/*! ../component/infer */ "./src/component/infer.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
const try_1 = __webpack_require__(/*! ../journal/try */ "./src/journal/try.ts");
function EvaluateMagicProperty(component, contextElement, name, prefix = '', checkExternal = true) {
    let resolvedComponent = ((typeof component === 'string') ? (0, find_1.FindComponentById)(component) : component);
    if (!resolvedComponent) {
        (0, error_1.JournalError)(`Failed to find component for '$${name}'`, 'InlineJS.EvaluateMagicProperty', contextElement);
        return (0, get_1.GetGlobal)().CreateNothing();
    }
    let handler = (0, get_1.GetGlobal)().GetMagicManager().FindHandler((prefix && name.startsWith(prefix)) ? name.substring(prefix.length) : name, { contextElement,
        componentId: resolvedComponent.GetId(),
        component: resolvedComponent,
    }); //Find handler and report access
    if (!handler) {
        if (checkExternal && prefix && name.startsWith(`${prefix}${prefix}`)) { //External access
            let componentId = resolvedComponent.GetId();
            return (target) => {
                let component = ((0, infer_1.InferComponent)(target) || (0, find_1.FindComponentById)(componentId));
                if (!component) {
                    return null;
                }
                let elementScope = component.FindElementScope(target), local = (elementScope && elementScope.GetLocal(name.substring(prefix.length)));
                if (elementScope && !(0, get_1.GetGlobal)().IsNothing(local)) { //Prioritize local value
                    return local;
                }
                return EvaluateMagicProperty(component.GetId(), target, name, `${prefix}${prefix}`, false);
            };
        }
        return (0, get_1.GetGlobal)().CreateNothing();
    }
    return (0, try_1.JournalTry)(() => {
        return handler({
            componentId: resolvedComponent.GetId(),
            component: resolvedComponent,
            contextElement: contextElement,
        });
    }, 'InlineJS.EvaluateMagicProperty', contextElement);
}
exports.EvaluateMagicProperty = EvaluateMagicProperty;


/***/ }),

/***/ "./src/magic/manager.ts":
/*!******************************!*\
  !*** ./src/magic/manager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MagicManager = void 0;
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
exports.MagicManager = MagicManager;


/***/ }),

/***/ "./src/observers/mutation.ts":
/*!***********************************!*\
  !*** ./src/observers/mutation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MutationObserver = void 0;
const element_scope_id_1 = __webpack_require__(/*! ../component/element-scope-id */ "./src/component/element-scope-id.ts");
const infer_1 = __webpack_require__(/*! ../component/infer */ "./src/component/infer.ts");
const try_1 = __webpack_require__(/*! ../journal/try */ "./src/journal/try.ts");
const unique_markers_1 = __webpack_require__(/*! ../utilities/unique-markers */ "./src/utilities/unique-markers.ts");
class MutationObserver {
    constructor() {
        this.uniqueMarkers_ = (0, unique_markers_1.GetDefaultUniqueMarkers)();
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
                        let key = ((entry.target instanceof HTMLElement) ? (0, element_scope_id_1.GetElementScopeId)(((_a = (0, infer_1.InferComponent)(entry.target)) === null || _a === void 0 ? void 0 : _a.GetRoot()) || null) : '');
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
                        let key = ((info.target instanceof HTMLElement) ? (0, element_scope_id_1.GetElementScopeId)(info.target) : '');
                        if (!key || !(key in mutations)) {
                            return;
                        }
                        let getList = (type, info, list) => {
                            return ((!info.whitelist || info.whitelist.includes(type)) ? list : undefined);
                        };
                        let added = getList('add', info, mutations[key].added), removed = getList('remove', info, mutations[key].removed);
                        let attributes = getList('attribute', info, mutations[key].attributes);
                        if (added || removed || attributes) {
                            (0, try_1.JournalTry)(() => info.handler({ id, added, removed, attributes }), 'InlineJS.MutationObserver');
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
        let id = (0, unique_markers_1.GenerateUniqueId)(this.uniqueMarkers_);
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
exports.MutationObserver = MutationObserver;


/***/ }),

/***/ "./src/proxy/add-changes.ts":
/*!**********************************!*\
  !*** ./src/proxy/add-changes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddChanges = void 0;
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
exports.AddChanges = AddChanges;


/***/ }),

/***/ "./src/proxy/child.ts":
/*!****************************!*\
  !*** ./src/proxy/child.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChildProxy = void 0;
const generic_1 = __webpack_require__(/*! ./generic */ "./src/proxy/generic.ts");
class ChildProxy extends generic_1.GenericProxy {
    constructor(owner, name, target) {
        super(owner.GetComponentId(), target, name, owner);
    }
}
exports.ChildProxy = ChildProxy;


/***/ }),

/***/ "./src/proxy/create-child.ts":
/*!***********************************!*\
  !*** ./src/proxy/create-child.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateChildProxy = void 0;
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const is_object_1 = __webpack_require__(/*! ../utilities/is-object */ "./src/utilities/is-object.ts");
function CreateChildProxy(owner, name, target, component) {
    if (!owner) {
        return null;
    }
    let child = owner.FindChild(name);
    if (child) {
        return child;
    }
    if ((!Array.isArray(target) && !(0, is_object_1.IsObject)(target))) {
        return null;
    }
    let proxy = (0, get_1.GetGlobal)().CreateChildProxy(owner, name, target);
    if (component) { //Register to component
        component.AddProxy(proxy);
    }
    return proxy;
}
exports.CreateChildProxy = CreateChildProxy;


/***/ }),

/***/ "./src/proxy/delete-prop.ts":
/*!**********************************!*\
  !*** ./src/proxy/delete-prop.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteProxyProp = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const add_changes_1 = __webpack_require__(/*! ./add-changes */ "./src/proxy/add-changes.ts");
function DeleteProxyProp(componentId, target, path, prop) {
    var _a;
    let exists = (prop in target);
    if (!exists) {
        return false;
    }
    let component = (0, find_1.FindComponentById)(componentId);
    (_a = component === null || component === void 0 ? void 0 : component.FindProxy(path)) === null || _a === void 0 ? void 0 : _a.RemoveChild(prop); //Remove previous child proxy, if any
    delete target[prop];
    component === null || component === void 0 ? void 0 : component.RemoveProxy(`${path}.${prop}`);
    (0, add_changes_1.AddChanges)('delete', path, prop, component === null || component === void 0 ? void 0 : component.GetBackend().changes);
    return true;
}
exports.DeleteProxyProp = DeleteProxyProp;


/***/ }),

/***/ "./src/proxy/generic.ts":
/*!******************************!*\
  !*** ./src/proxy/generic.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericProxy = void 0;
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const evaluate_1 = __webpack_require__(/*! ../magic/evaluate */ "./src/magic/evaluate.ts");
const context_keys_1 = __webpack_require__(/*! ../utilities/context-keys */ "./src/utilities/context-keys.ts");
const delete_prop_1 = __webpack_require__(/*! ./delete-prop */ "./src/proxy/delete-prop.ts");
const get_prop_1 = __webpack_require__(/*! ./get-prop */ "./src/proxy/get-prop.ts");
const set_prop_1 = __webpack_require__(/*! ./set-prop */ "./src/proxy/set-prop.ts");
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
                let value = context.Peek(prop.substring(1), (0, get_1.GetGlobal)().CreateNothing());
                if (!(0, get_1.GetGlobal)().IsNothing(value)) {
                    return value;
                }
            }
            let contextElement = context.Peek(context_keys_1.ContextKeys.self), localValue = component === null || component === void 0 ? void 0 : component.FindElementLocalValue((contextElement || component.GetRoot()), prop, true);
            if (!(0, get_1.GetGlobal)().IsNothing(localValue)) {
                return localValue;
            }
            let result = (isMagic ? (0, evaluate_1.EvaluateMagicProperty)(component, contextElement, prop, '$') : (0, get_1.GetGlobal)().CreateNothing());
            if ((0, get_1.GetGlobal)().IsNothing(result) && prop && prop in globalThis) {
                result = globalThis[prop];
            }
            return result;
        };
        let isRoot = !this.parentPath_, handler = {
            get(target, prop) {
                if (typeof prop === 'symbol' || prop === 'prototype') {
                    return Reflect.get(target, prop);
                }
                return (0, get_prop_1.GetProxyProp)(componentId, target, path, prop.toString(), (isRoot ? noResultHandler : undefined));
            },
            set(target, prop, value) {
                if (typeof prop === 'symbol' || prop === 'prototype') {
                    return Reflect.set(target, prop, value);
                }
                return (0, set_prop_1.SetProxyProp)(componentId, target, path, prop.toString(), value);
            },
            deleteProperty(target, prop) {
                if (typeof prop === 'symbol' || prop === 'prototype') {
                    return Reflect.get(target, prop);
                }
                return (0, delete_prop_1.DeleteProxyProp)(componentId, target, path, prop.toString());
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
exports.GenericProxy = GenericProxy;


/***/ }),

/***/ "./src/proxy/get-prop.ts":
/*!*******************************!*\
  !*** ./src/proxy/get-prop.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetProxyProp = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const get_1 = __webpack_require__(/*! ../global/get */ "./src/global/get.ts");
const proxy_keys_1 = __webpack_require__(/*! ../utilities/proxy-keys */ "./src/utilities/proxy-keys.ts");
const create_child_1 = __webpack_require__(/*! ./create-child */ "./src/proxy/create-child.ts");
function GetProxyProp(componentId, target, path, prop, noResultHandler) {
    var _a;
    if (prop === proxy_keys_1.ProxyKeys.target) {
        return target;
    }
    if (prop === proxy_keys_1.ProxyKeys.componentId) {
        return componentId;
    }
    if (prop === proxy_keys_1.ProxyKeys.name) {
        return path.split('.').at(-1);
    }
    if (prop === proxy_keys_1.ProxyKeys.path) {
        return path;
    }
    if (prop === proxy_keys_1.ProxyKeys.parentPath) {
        return (path.split('.').slice(0, -1).join('.') || '');
    }
    let exists = (prop in target);
    if (!exists && noResultHandler) {
        let value = noResultHandler(((0, find_1.FindComponentById)(componentId) || undefined), prop);
        if (!(0, get_1.GetGlobal)().IsNothing(value)) {
            return ((0, get_1.GetGlobal)().IsFuture(value) ? value.Get() : value);
        }
    }
    if (exists && !target.hasOwnProperty(prop)) { //Prop not in this instance
        return target[prop];
    }
    let value = (exists ? target[prop] : null);
    if ((0, get_1.GetGlobal)().IsFuture(value)) { //No proxy representation
        return value.Get();
    }
    let component = (0, find_1.FindComponentById)(componentId);
    component === null || component === void 0 ? void 0 : component.GetBackend().changes.AddGetAccess(`${path}.${prop}`); //Alert GET access
    return (((_a = (0, create_child_1.CreateChildProxy)(((component === null || component === void 0 ? void 0 : component.FindProxy(path)) || null), prop, value, (component || undefined))) === null || _a === void 0 ? void 0 : _a.GetNative()) || value);
}
exports.GetProxyProp = GetProxyProp;


/***/ }),

/***/ "./src/proxy/root.ts":
/*!***************************!*\
  !*** ./src/proxy/root.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RootProxy = void 0;
const generic_1 = __webpack_require__(/*! ./generic */ "./src/proxy/generic.ts");
class RootProxy extends generic_1.GenericProxy {
    constructor(componentId, target) {
        super(componentId, target, `Proxy<${componentId}>`);
    }
}
exports.RootProxy = RootProxy;


/***/ }),

/***/ "./src/proxy/set-prop.ts":
/*!*******************************!*\
  !*** ./src/proxy/set-prop.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetProxyProp = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const add_changes_1 = __webpack_require__(/*! ./add-changes */ "./src/proxy/add-changes.ts");
function SetProxyProp(componentId, target, path, prop, value) {
    var _a;
    let exists = (prop in target);
    if (exists && value === target[prop]) { //No changes
        return true;
    }
    let component = (0, find_1.FindComponentById)(componentId);
    (_a = component === null || component === void 0 ? void 0 : component.FindProxy(path)) === null || _a === void 0 ? void 0 : _a.RemoveChild(prop); //Remove previous child proxy, if any
    target[prop] = value;
    component === null || component === void 0 ? void 0 : component.RemoveProxy(`${path}.${prop}`);
    (0, add_changes_1.AddChanges)('set', `${path}.${prop}`, prop, component === null || component === void 0 ? void 0 : component.GetBackend().changes);
    return true;
}
exports.SetProxyProp = SetProxyProp;


/***/ }),

/***/ "./src/reactive/effect.ts":
/*!********************************!*\
  !*** ./src/reactive/effect.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseEffect = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
const subscribe_1 = __webpack_require__(/*! ./subscribe */ "./src/reactive/subscribe.ts");
function UseEffect({ componentId, callback, contextElement, options, subscriptionsCallback }) {
    var _a;
    let watch = () => {
        let component = (0, find_1.FindComponentById)(componentId);
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
            (0, error_1.JournalError)(err, `InlineJS.Component<${componentId}>.UseEffect`, element);
        }
        if (canceled) { //Pop storage
            changes.PopAllGetAccessStorageSnapshots(false); //Remove all outstanding checkpoints
            changes.RestoreOptimizedGetAccessStorage(); //Restore previously swapped optimized storage
            changes.PopGetAccessStorage();
            return;
        }
        (0, subscribe_1.SubscribeToChanges)({ componentId, changes, callback, subscriptionsCallback, contextElement: element });
    };
    if (options === null || options === void 0 ? void 0 : options.nextTick) {
        (_a = (0, find_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(watch);
    }
    else { //Immediate watch
        watch();
    }
}
exports.UseEffect = UseEffect;


/***/ }),

/***/ "./src/reactive/subscribe.ts":
/*!***********************************!*\
  !*** ./src/reactive/subscribe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubscribeToChanges = void 0;
const find_1 = __webpack_require__(/*! ../component/find */ "./src/component/find.ts");
const error_1 = __webpack_require__(/*! ../journal/error */ "./src/journal/error.ts");
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
        Object.keys(subscriptionIds).map(componentId => (0, find_1.FindComponentById)(componentId)).filter(component => !!component).forEach((component) => {
            let { changes } = component.GetBackend();
            subscriptionIds[component.GetId()].forEach(subscriptionId => changes.Unsubscribe(subscriptionId));
        });
        subscriptionIds = {};
    };
    let canceled = false, cancel = () => {
        canceled = true;
    };
    let onChange = (list) => {
        let component = (0, find_1.FindComponentById)(componentId);
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
            (0, error_1.JournalError)(err, `InlineJS.Component<${componentId}>.SubscribeToChanges.OnChange`);
        }
        changes.PopOrigin();
        if (canceled) {
            unsubscribeAll();
        }
    };
    let uniqueEntries = {}; //Extract unique path-componentId pairs
    (_b = (optimized || raw)) === null || _b === void 0 ? void 0 : _b.entries.forEach(details => ((uniqueEntries[details.path] = (uniqueEntries[details.path] || {}))[details.compnentId] = true));
    Object.entries(uniqueEntries).forEach(([path, compnentIds]) => {
        Object.keys(compnentIds).map(componentId => (0, find_1.FindComponentById)(componentId)).filter(component => !!component).forEach((component) => {
            (subscriptionIds[component.GetId()] = (subscriptionIds[component.GetId()] || [])).push(component.GetBackend().changes.Subscribe(path, onChange));
        });
    });
    if (contextElement) {
        (_d = (_c = (0, find_1.FindComponentById)(componentId)) === null || _c === void 0 ? void 0 : _c.FindElementScope(contextElement)) === null || _d === void 0 ? void 0 : _d.AddUninitCallback(() => {
            cancel();
            unsubscribeAll();
        });
    }
    if (subscriptionsCallback) { //Alert all subscriptions
        subscriptionsCallback(subscriptionIds);
    }
    return unsubscribeAll;
}
exports.SubscribeToChanges = SubscribeToChanges;


/***/ }),

/***/ "./src/stack.ts":
/*!**********************!*\
  !*** ./src/stack.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stack = void 0;
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
exports.Stack = Stack;


/***/ }),

/***/ "./src/utilities/context-keys.ts":
/*!***************************************!*\
  !*** ./src/utilities/context-keys.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextKeys = void 0;
exports.ContextKeys = {
    self: 'self',
    event: 'event',
    scope: 'scope',
};


/***/ }),

/***/ "./src/utilities/deep-copy.ts":
/*!************************************!*\
  !*** ./src/utilities/deep-copy.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeepCopy = void 0;
const get_target_1 = __webpack_require__(/*! ./get-target */ "./src/utilities/get-target.ts");
const is_object_1 = __webpack_require__(/*! ./is-object */ "./src/utilities/is-object.ts");
function DeepCopy(target) {
    target = (0, get_target_1.GetTarget)(target);
    if (!Array.isArray(target) && !(0, is_object_1.IsObject)(target)) {
        return target; //Value copy
    }
    if (Array.isArray(target)) {
        return target.map(item => DeepCopy(item));
    }
    let copy = {};
    Object.entries(target).forEach(([key, value]) => (copy[key] = DeepCopy(value)));
    return copy;
}
exports.DeepCopy = DeepCopy;


/***/ }),

/***/ "./src/utilities/get-target.ts":
/*!*************************************!*\
  !*** ./src/utilities/get-target.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTargets = exports.GetTarget = void 0;
const proxy_keys_1 = __webpack_require__(/*! ./proxy-keys */ "./src/utilities/proxy-keys.ts");
function GetTarget(target) {
    return (((Array.isArray(target) || (target && typeof target === 'object')) && proxy_keys_1.ProxyKeys.target in target) ? GetTarget(target[proxy_keys_1.ProxyKeys.target]) : target);
}
exports.GetTarget = GetTarget;
function GetTargets(targets) {
    return targets.map(target => GetTarget(target));
}
exports.GetTargets = GetTargets;


/***/ }),

/***/ "./src/utilities/is-object.ts":
/*!************************************!*\
  !*** ./src/utilities/is-object.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AreObjects = exports.IsObject = void 0;
const get_target_1 = __webpack_require__(/*! ./get-target */ "./src/utilities/get-target.ts");
const proxy_keys_1 = __webpack_require__(/*! ./proxy-keys */ "./src/utilities/proxy-keys.ts");
function IsObject_(target) {
    target = (0, get_target_1.GetTarget)(target);
    return (target && typeof target === 'object' && ((proxy_keys_1.ProxyKeys.target in target) || ('__proto__' in target && target['__proto__'].constructor.name === 'Object')));
}
function IsObject(target) {
    return !!IsObject_(target);
}
exports.IsObject = IsObject;
function AreObjects(targets) {
    return (targets.findIndex(item => !IsObject_(item)) == -1);
}
exports.AreObjects = AreObjects;


/***/ }),

/***/ "./src/utilities/proxy-keys.ts":
/*!*************************************!*\
  !*** ./src/utilities/proxy-keys.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyKeys = void 0;
exports.ProxyKeys = {
    componentId: '__InlineJS_CompnentId__',
    name: '__InlineJS_Name__',
    path: '__InlineJS_Path__',
    parentPath: '__InlineJS_ParentPath__',
    target: '__InlineJS_Target__',
};


/***/ }),

/***/ "./src/utilities/unique-markers.ts":
/*!*****************************************!*\
  !*** ./src/utilities/unique-markers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenerateUniqueId = exports.JoinUniqueMarkers = exports.IncrementUniqueMarkers = exports.GetDefaultUniqueMarkers = void 0;
function GetDefaultUniqueMarkers() {
    return {
        level0: 0,
        level1: 0,
        level2: 0,
    };
}
exports.GetDefaultUniqueMarkers = GetDefaultUniqueMarkers;
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
exports.IncrementUniqueMarkers = IncrementUniqueMarkers;
function JoinUniqueMarkers(markers) {
    return `${markers.level2}_${markers.level1}_${markers.level0}`;
}
exports.JoinUniqueMarkers = JoinUniqueMarkers;
function GenerateUniqueId(markers, scope, prefix, suffix) {
    IncrementUniqueMarkers(markers);
    return `${scope || ''}${prefix || ''}${JoinUniqueMarkers(markers)}${suffix || ''}`;
}
exports.GenerateUniqueId = GenerateUniqueId;


/***/ }),

/***/ "./src/values/future.ts":
/*!******************************!*\
  !*** ./src/values/future.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Future = void 0;
class Future {
    constructor(callback_) {
        this.callback_ = callback_;
    }
    Get() {
        return this.callback_();
    }
}
exports.Future = Future;


/***/ }),

/***/ "./src/values/nothing.ts":
/*!*******************************!*\
  !*** ./src/values/nothing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nothing = void 0;
class Nothing {
}
exports.Nothing = Nothing;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/inlinejs.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const auto_1 = __webpack_require__(/*! ./bootstrap/auto */ "./src/bootstrap/auto.ts");
const get_1 = __webpack_require__(/*! ./global/get */ "./src/global/get.ts");
const interpolation_1 = __webpack_require__(/*! ./global/interpolation */ "./src/global/interpolation.ts");
(0, auto_1.AutoBootstrap)();
(0, get_1.GetGlobal)().AddAttributeProcessor(interpolation_1.AttributeInterpolator);
(0, get_1.GetGlobal)().AddTextContentProcessor(interpolation_1.TextContentInterpolator);

})();

/******/ })()
;