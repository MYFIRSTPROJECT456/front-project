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
var DashboardV2Page = (function () {
    function DashboardV2Page() {
    }
    DashboardV2Page.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('dashboard-v2-ready'));
    };
    DashboardV2Page = __decorate([
        core_1.Component({
            selector: 'dashboard-v2',
            templateUrl: './app/pages/dashboard/v2/dashboard-v2.html',
            styleUrls: [
                'assets/plugins/jquery-jvectormap/jquery-jvectormap.css',
                'assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css',
                'assets/plugins/gritter/css/jquery.gritter.css',
                'assets/plugins/morris/morris.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardV2Page);
    return DashboardV2Page;
}());
exports.DashboardV2Page = DashboardV2Page;
//# sourceMappingURL=dashboard-v2.js.map