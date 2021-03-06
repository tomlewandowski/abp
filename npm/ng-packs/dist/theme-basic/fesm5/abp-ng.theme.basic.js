import { __spread, __assign, __decorate, __metadata, __extends } from 'tslib';
import { SessionState, takeUntilDestroy, SetLanguage, GetAppConfiguration, ConfigState, LazyLoadService, CoreModule } from '@abp/ng.core';
import { slideFromBottom, ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, ViewChild, TemplateRef, ViewChildren, ChangeDetectionStrategy, ViewEncapsulation, Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { NgbDropdown, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidationErrorComponent as ValidationErrorComponent$1, NgxValidateCoreModule } from '@ngx-validate/core';
import { Action, Selector, State, Store, Select, NgxsModule } from '@ngxs/store';
import { ToastModule } from 'primeng/toast';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { OAuthService } from 'angular-oauth2-oidc';
import compare from 'just-compare';
import { fromEvent, Observable } from 'rxjs';
import { map, filter, debounceTime } from 'rxjs/operators';
import snq from 'snq';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccountLayoutComponent = /** @class */ (function () {
    function AccountLayoutComponent() {
    }
    // required for dynamic component
    AccountLayoutComponent.type = "account" /* account */;
    AccountLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-account',
                    template: "<router-outlet></router-outlet>\r\n"
                }] }
    ];
    return AccountLayoutComponent;
}());
if (false) {
    /** @type {?} */
    AccountLayoutComponent.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddNavigationElement = /** @class */ (function () {
    function AddNavigationElement(payload) {
        this.payload = payload;
    }
    AddNavigationElement.type = '[Layout] Add Navigation Element';
    return AddNavigationElement;
}());
if (false) {
    /** @type {?} */
    AddNavigationElement.type;
    /** @type {?} */
    AddNavigationElement.prototype.payload;
}
var RemoveNavigationElementByName = /** @class */ (function () {
    function RemoveNavigationElementByName(name) {
        this.name = name;
    }
    RemoveNavigationElementByName.type = '[Layout] Remove Navigation ElementByName';
    return RemoveNavigationElementByName;
}());
if (false) {
    /** @type {?} */
    RemoveNavigationElementByName.type;
    /** @type {?} */
    RemoveNavigationElementByName.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutState = /** @class */ (function () {
    function LayoutState() {
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    LayoutState.getNavigationElements = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var navigationElements = _a.navigationElements;
        return navigationElements;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    LayoutState.prototype.layoutAddAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var _c = _b.payload, payload = _c === void 0 ? [] : _c;
        var navigationElements = getState().navigationElements;
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = snq((/**
             * @return {?}
             */
            function () {
                return ((/** @type {?} */ (payload))).filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var name = _a.name;
                    return navigationElements.findIndex((/**
                     * @param {?} nav
                     * @return {?}
                     */
                    function (nav) { return nav.name === name; })) < 0;
                }));
            }), []);
        }
        if (!payload.length)
            return;
        navigationElements = __spread(navigationElements, payload).map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return (__assign({}, element, { order: element.order || 99 })); }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        return patchState({
            navigationElements: navigationElements,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    LayoutState.prototype.layoutRemoveAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var name = _b.name;
        var navigationElements = getState().navigationElements;
        /** @type {?} */
        var index = navigationElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.name === name; }));
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements: navigationElements,
        });
    };
    __decorate([
        Action(AddNavigationElement),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, AddNavigationElement]),
        __metadata("design:returntype", void 0)
    ], LayoutState.prototype, "layoutAddAction", null);
    __decorate([
        Action(RemoveNavigationElementByName),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, RemoveNavigationElementByName]),
        __metadata("design:returntype", void 0)
    ], LayoutState.prototype, "layoutRemoveAction", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], LayoutState, "getNavigationElements", null);
    LayoutState = __decorate([
        State({
            name: 'LayoutState',
            defaults: (/** @type {?} */ ({ navigationElements: [] })),
        })
    ], LayoutState);
    return LayoutState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationLayoutComponent = /** @class */ (function () {
    function ApplicationLayoutComponent(store, oauthService) {
        this.store = store;
        this.oauthService = oauthService;
        this.rightPartElements = [];
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        function (_, item) { return item.name; });
        this.trackElementByFn = (/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        function (_, element) { return element; });
    }
    Object.defineProperty(ApplicationLayoutComponent.prototype, "visibleRoutes$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.routes$.pipe(map((/**
             * @param {?} routes
             * @return {?}
             */
            function (routes) { return getVisibleRoutes(routes); })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "defaultLanguage$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return snq((/**
             * @return {?}
             */
            function () { return languages.find((/**
             * @param {?} lang
             * @return {?}
             */
            function (lang) { return lang.cultureName === _this.selectedLangCulture; })).displayName; })); }), ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "dropdownLanguages$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return snq((/**
             * @return {?}
             */
            function () { return languages.filter((/**
             * @param {?} lang
             * @return {?}
             */
            function (lang) { return lang.cultureName !== _this.selectedLangCulture; })); })); }), []));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "selectedLangCulture", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(SessionState.getLanguage);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.checkWindowWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.navbarRootDropdowns.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.close();
            }));
            if (window.innerWidth < 768) {
                _this.isDropdownChildDynamic = false;
            }
            else {
                _this.isDropdownChildDynamic = true;
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var navigations = this.store.selectSnapshot(LayoutState.getNavigationElements).map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name;
            return name;
        }));
        if (navigations.indexOf('LanguageRef') < 0) {
            this.store.dispatch(new AddNavigationElement([
                { element: this.languageRef, order: 4, name: 'LanguageRef' },
                { element: this.currentUserRef, order: 5, name: 'CurrentUserRef' },
            ]));
        }
        this.navElements$
            .pipe(map((/**
         * @param {?} elements
         * @return {?}
         */
        function (elements) { return elements.map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var element = _a.element;
            return element;
        })); })), filter((/**
         * @param {?} elements
         * @return {?}
         */
        function (elements) { return !compare(elements, _this.rightPartElements); })), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} elements
         * @return {?}
         */
        function (elements) {
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.rightPartElements = elements); }), 0);
        }));
        this.checkWindowWidth();
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroy(this), debounceTime(250))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkWindowWidth();
        }));
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} cultureName
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.onChangeLang = /**
     * @param {?} cultureName
     * @return {?}
     */
    function (cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.oauthService.logOut();
        this.store.dispatch(new Navigate(['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url },
        }));
        this.store.dispatch(new GetAppConfiguration());
    };
    // required for dynamic component
    ApplicationLayoutComponent.type = "application" /* application */;
    ApplicationLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-application',
                    template: "<abp-layout>\r\n  <ul class=\"navbar-nav mr-auto\">\r\n    <ng-container\r\n      *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n    >\r\n    </ng-container>\r\n\r\n    <ng-template #defaultLink let-route>\r\n      <li class=\"nav-item\" [abpPermission]=\"route.requiredPolicy\">\r\n        <a class=\"nav-link\" [routerLink]=\"[route.url]\">{{ route.name | abpLocalization }}</a>\r\n      </li>\r\n    </ng-template>\r\n\r\n    <ng-template #dropdownLink let-route>\r\n      <li\r\n        #navbarRootDropdown\r\n        ngbDropdown\r\n        [abpPermission]=\"route.requiredPolicy\"\r\n        [abpVisibility]=\"routeContainer\"\r\n        class=\"nav-item dropdown pointer\"\r\n        display=\"static\"\r\n      >\r\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle pointer\" data-toggle=\"dropdown\">\r\n          {{ route.name | abpLocalization }}\r\n        </a>\r\n        <div #routeContainer ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n          <ng-template\r\n            #forTemplate\r\n            ngFor\r\n            [ngForOf]=\"route.children\"\r\n            [ngForTrackBy]=\"trackByFn\"\r\n            [ngForTemplate]=\"childWrapper\"\r\n          ></ng-template>\r\n        </div>\r\n      </li>\r\n    </ng-template>\r\n\r\n    <ng-template #childWrapper let-child>\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n      ></ng-template>\r\n    </ng-template>\r\n\r\n    <ng-template #defaultChild let-child>\r\n      <div class=\"dropdown-submenu\" [abpPermission]=\"child.requiredPolicy\">\r\n        <a class=\"dropdown-item py-2 px-2\" [routerLink]=\"[child.url]\">\r\n          <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n          {{ child.name | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template #dropdownChild let-child>\r\n      <div\r\n        [abpVisibility]=\"childrenContainer\"\r\n        class=\"dropdown-submenu pointer\"\r\n        ngbDropdown\r\n        [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n        placement=\"right-top\"\r\n        [abpPermission]=\"child.requiredPolicy\"\r\n      >\r\n        <div ngbDropdownToggle [class.dropdown-toggle]=\"false\" class=\"pointer\">\r\n          <a\r\n            abpEllipsis=\"210px\"\r\n            [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n            role=\"button\"\r\n            class=\"btn d-block text-left py-2 px-2 dropdown-toggle\"\r\n          >\r\n            <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n            {{ child.name | abpLocalization }}\r\n          </a>\r\n        </div>\r\n        <div #childrenContainer ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n          <ng-template\r\n            ngFor\r\n            [ngForOf]=\"child.children\"\r\n            [ngForTrackBy]=\"trackByFn\"\r\n            [ngForTemplate]=\"childWrapper\"\r\n          ></ng-template>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ul>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <ng-container\r\n      *ngFor=\"let element of rightPartElements; trackBy: trackElementByFn\"\r\n      [ngTemplateOutlet]=\"element\"\r\n    ></ng-container>\r\n  </ul>\r\n</abp-layout>\r\n\r\n<ng-template #language>\r\n  <li class=\"nav-item dropdown pointer\" ngbDropdown>\r\n    <a ngbDropdownToggle class=\"nav-link dropdown-toggle text-white pointer\" data-toggle=\"dropdown\">\r\n      {{ defaultLanguage$ | async }}\r\n    </a>\r\n    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n      <a\r\n        *ngFor=\"let lang of dropdownLanguages$ | async\"\r\n        class=\"dropdown-item\"\r\n        (click)=\"onChangeLang(lang.cultureName)\"\r\n        >{{ lang?.displayName }}</a\r\n      >\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n\r\n<ng-template #currentUser>\r\n  <li *ngIf=\"(currentUser$ | async)?.isAuthenticated\" class=\"nav-item dropdown pointer\" ngbDropdown>\r\n    <a ngbDropdownToggle class=\"nav-link dropdown-toggle text-white pointer\" data-toggle=\"dropdown\">\r\n      {{ (currentUser$ | async)?.userName }}\r\n    </a>\r\n    <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n      <a class=\"dropdown-item pointer\" routerLink=\"/account/manage-profile\">{{\r\n        'AbpAccount::ManageYourProfile' | abpLocalization\r\n      }}</a>\r\n      <a class=\"dropdown-item pointer\" (click)=\"logout()\">{{ 'AbpUi::Logout' | abpLocalization }}</a>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n"
                }] }
    ];
    /** @nocollapse */
    ApplicationLayoutComponent.ctorParameters = function () { return [
        { type: Store },
        { type: OAuthService }
    ]; };
    ApplicationLayoutComponent.propDecorators = {
        currentUserRef: [{ type: ViewChild, args: ['currentUser', { static: false, read: TemplateRef },] }],
        languageRef: [{ type: ViewChild, args: ['language', { static: false, read: TemplateRef },] }],
        navbarRootDropdowns: [{ type: ViewChildren, args: ['navbarRootDropdown', { read: NgbDropdown },] }]
    };
    __decorate([
        Select(ConfigState.getOne('routes')),
        __metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "routes$", void 0);
    __decorate([
        Select(ConfigState.getOne('currentUser')),
        __metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "currentUser$", void 0);
    __decorate([
        Select(ConfigState.getDeep('localization.languages')),
        __metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "languages$", void 0);
    __decorate([
        Select(LayoutState.getNavigationElements),
        __metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "navElements$", void 0);
    return ApplicationLayoutComponent;
}());
if (false) {
    /** @type {?} */
    ApplicationLayoutComponent.type;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.routes$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.currentUser$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.languages$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.navElements$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.currentUserRef;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.languageRef;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.navbarRootDropdowns;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.isDropdownChildDynamic;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.rightPartElements;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.trackByFn;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.trackElementByFn;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.oauthService;
}
/**
 * @param {?} routes
 * @return {?}
 */
function getVisibleRoutes(routes) {
    return routes.reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return __spread(acc, [val]);
    }), []);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmptyLayoutComponent = /** @class */ (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.type = "empty" /* empty */;
    EmptyLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-empty',
                    template: "\n    Layout-empty\n    <router-outlet></router-outlet>\n  "
                }] }
    ];
    return EmptyLayoutComponent;
}());
if (false) {
    /** @type {?} */
    EmptyLayoutComponent.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(store) {
        this.store = store;
        this.isCollapsed = true;
    }
    Object.defineProperty(LayoutComponent.prototype, "appInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(ConfigState.getApplicationInfo);
        },
        enumerable: true,
        configurable: true
    });
    LayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: ' abp-layout',
                    template: "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\" id=\"main-navbar\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img *ngIf=\"appInfo.logoUrl; else appName\" [src]=\"appInfo.logoUrl\" [alt]=\"appInfo.name\" />\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"main-navbar-collapse\" [ngbCollapse]=\"isCollapsed\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</nav>\r\n\r\n<div\r\n  [@slideFromBottom]=\"outlet && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\"\r\n  style=\"padding-top: 5rem;\"\r\n  class=\"container\"\r\n>\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n\r\n<ng-template #appName>\r\n  {{ appInfo.name }}\r\n</ng-template>\r\n",
                    animations: [slideFromBottom]
                }] }
    ];
    /** @nocollapse */
    LayoutComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LayoutComponent;
}());
if (false) {
    /** @type {?} */
    LayoutComponent.prototype.isCollapsed;
    /**
     * @type {?}
     * @private
     */
    LayoutComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidationErrorComponent = /** @class */ (function (_super) {
    __extends(ValidationErrorComponent, _super);
    function ValidationErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ValidationErrorComponent.prototype, "abpErrors", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.errors || !this.errors.length)
                return [];
            return this.errors.map((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                if (!error.message)
                    return error;
                /** @type {?} */
                var index = error.message.indexOf('[');
                if (index > -1) {
                    return __assign({}, error, { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
                }
                return error;
            }));
        },
        enumerable: true,
        configurable: true
    });
    ValidationErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-validation-error',
                    template: "\n    <div class=\"invalid-feedback\" *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n      {{ error.message | abpLocalization: error.interpoliteParams }}\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return ValidationErrorComponent;
}(ValidationErrorComponent$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var styles = "\n.content-header-title {\n    font-size: 24px;\n}\n\n.entry-row {\n    margin-bottom: 15px;\n}\n";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitialService = /** @class */ (function () {
    function InitialService(lazyLoadService) {
        this.lazyLoadService = lazyLoadService;
        this.appendStyle().subscribe();
    }
    /**
     * @return {?}
     */
    InitialService.prototype.appendStyle = /**
     * @return {?}
     */
    function () {
        return this.lazyLoadService.load(null, 'style', styles, 'head', 'afterbegin');
    };
    InitialService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    InitialService.ctorParameters = function () { return [
        { type: LazyLoadService }
    ]; };
    /** @nocollapse */ InitialService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InitialService_Factory() { return new InitialService(ɵɵinject(LazyLoadService)); }, token: InitialService, providedIn: "root" });
    return InitialService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.lazyLoadService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
var ThemeBasicModule = /** @class */ (function () {
    function ThemeBasicModule(initialService) {
        this.initialService = initialService;
    }
    ThemeBasicModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(LAYOUTS, [LayoutComponent, ValidationErrorComponent]),
                    imports: [
                        CoreModule,
                        ThemeSharedModule,
                        NgbCollapseModule,
                        NgbDropdownModule,
                        ToastModule,
                        NgxValidateCoreModule,
                        NgxsModule.forFeature([LayoutState]),
                        NgxValidateCoreModule.forRoot({
                            targetSelector: '.form-group',
                            blueprints: {
                                email: 'AbpAccount::ThisFieldIsNotAValidEmailAddress.',
                                max: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                                maxlength: 'AbpAccount::ThisFieldMustBeAStringWithAMaximumLengthOf{1}[{{ requiredLength }}]',
                                min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                                minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf[{{ min }},{{ max }}]',
                                required: 'AbpAccount::ThisFieldIsRequired.',
                                passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed'
                            },
                            errorTemplate: ValidationErrorComponent
                        })
                    ],
                    exports: __spread(LAYOUTS),
                    entryComponents: __spread(LAYOUTS, [ValidationErrorComponent])
                },] }
    ];
    /** @nocollapse */
    ThemeBasicModule.ctorParameters = function () { return [
        { type: InitialService }
    ]; };
    return ThemeBasicModule;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeBasicModule.prototype.initialService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Layout;
(function (Layout) {
    /**
     * @record
     */
    function State() { }
    Layout.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.navigationElements;
    }
    /**
     * @record
     */
    function NavigationElement() { }
    Layout.NavigationElement = NavigationElement;
    if (false) {
        /** @type {?} */
        NavigationElement.prototype.name;
        /** @type {?} */
        NavigationElement.prototype.element;
        /** @type {?|undefined} */
        NavigationElement.prototype.order;
    }
})(Layout || (Layout = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccountLayoutComponent, AddNavigationElement, ApplicationLayoutComponent, EmptyLayoutComponent, LAYOUTS, LayoutState, RemoveNavigationElementByName, ThemeBasicModule, ValidationErrorComponent, ApplicationLayoutComponent as ɵa, LayoutState as ɵb, AccountLayoutComponent as ɵc, EmptyLayoutComponent as ɵd, LayoutComponent as ɵe, ValidationErrorComponent as ɵf, LayoutState as ɵg, AddNavigationElement as ɵh, RemoveNavigationElementByName as ɵi, InitialService as ɵk };
//# sourceMappingURL=abp-ng.theme.basic.js.map
