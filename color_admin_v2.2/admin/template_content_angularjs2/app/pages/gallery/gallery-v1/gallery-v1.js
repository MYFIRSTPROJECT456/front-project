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
var GalleryV1Page = (function () {
    function GalleryV1Page() {
    }
    GalleryV1Page.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('gallery-v1-ready'));
    };
    GalleryV1Page = __decorate([
        core_1.Component({
            selector: 'gallery-v1',
            templateUrl: './app/pages/gallery/gallery-v1/gallery-v1.html',
            styleUrls: [
                'assets/plugins/isotope/isotope.css',
                'assets/plugins/lightbox/css/lightbox.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryV1Page);
    return GalleryV1Page;
}());
exports.GalleryV1Page = GalleryV1Page;
//# sourceMappingURL=gallery-v1.js.map