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
var app_component_1 = require('../../../app.component');
var ExtraErrorPage = (function () {
    function ExtraErrorPage(app) {
        this.app = app;
        app.setPageWithoutSidebar(true);
        app.setPageWithoutHeader(true);
        app.setPagePaceTop(true);
    }
    ExtraErrorPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-extra-error-ready'));
    };
    ExtraErrorPage = __decorate([
        core_1.Component({
            selector: 'extra-error',
            templateUrl: './app/pages/extra/extra-error/extra-error.html'
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], ExtraErrorPage);
    return ExtraErrorPage;
}());
exports.ExtraErrorPage = ExtraErrorPage;
//# sourceMappingURL=extra-error.js.map