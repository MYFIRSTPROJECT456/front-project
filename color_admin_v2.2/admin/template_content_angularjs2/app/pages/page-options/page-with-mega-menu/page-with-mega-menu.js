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
var MegaMenuPage = (function () {
    function MegaMenuPage(app) {
        this.app = app;
        app.setPageMegaMenu(true);
    }
    MegaMenuPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-with-mega-menu-ready'));
    };
    MegaMenuPage = __decorate([
        core_1.Component({
            selector: 'page-with-mega-menu',
            templateUrl: './app/pages/page-options/page-with-mega-menu/page-with-mega-menu.html'
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], MegaMenuPage);
    return MegaMenuPage;
}());
exports.MegaMenuPage = MegaMenuPage;
//# sourceMappingURL=page-with-mega-menu.js.map