"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('../../../app.component');
var LoginV3Page = (function () {
    function LoginV3Page(app, router) {
        this.app = app;
        this.router = router;
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPageBgWhite(true);
        app.setPagePaceTop(true);
    }
    LoginV3Page.prototype.submitForm = function (form) {
        this.router.navigate(['/']);
        return false;
    };
    LoginV3Page.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-login-v3-ready'));
    };
    LoginV3Page = __decorate([
        core_1.Component({
            selector: 'login-v3',
            templateUrl: './app/pages/user/login-v3/login-v3.html'
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent, router_1.Router])
    ], LoginV3Page);
    return LoginV3Page;
}());
exports.LoginV3Page = LoginV3Page;
//# sourceMappingURL=login-v3.js.map