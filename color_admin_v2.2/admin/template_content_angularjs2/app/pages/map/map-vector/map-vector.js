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
var MapVectorPage = (function () {
    function MapVectorPage(app) {
        this.app = app;
        app.setPageContentInverseMode(true);
        app.setPageContentFullWidth(true);
    }
    MapVectorPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('page-map-vector-ready'));
    };
    MapVectorPage = __decorate([
        core_1.Component({
            selector: 'map-vector',
            templateUrl: './app/pages/map/map-vector/map-vector.html',
            styleUrls: [
                'assets/plugins/jquery-jvectormap/jquery-jvectormap.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], MapVectorPage);
    return MapVectorPage;
}());
exports.MapVectorPage = MapVectorPage;
//# sourceMappingURL=map-vector.js.map