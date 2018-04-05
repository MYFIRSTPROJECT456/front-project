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
var app_component_1 = require('../../../../app.component');
var EmailInboxV1Page = (function () {
    function EmailInboxV1Page(app) {
        this.app = app;
        app.setPageContentFullWidth(true);
    }
    EmailInboxV1Page.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('email-inbox-v1-ready'));
    };
    EmailInboxV1Page = __decorate([
        core_1.Component({
            selector: 'email-inbox-v1',
            templateUrl: './app/pages/email/inbox/v1/email-inbox-v1.html'
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], EmailInboxV1Page);
    return EmailInboxV1Page;
}());
exports.EmailInboxV1Page = EmailInboxV1Page;
//# sourceMappingURL=email-inbox-v1.js.map