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
var CalendarPage = (function () {
    function CalendarPage() {
    }
    CalendarPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('calendar-ready'));
    };
    CalendarPage = __decorate([
        core_1.Component({
            selector: 'calendar',
            templateUrl: './app/pages/calendar/calendar.html',
            styleUrls: [
                'assets/plugins/fullcalendar/fullcalendar.min.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarPage);
    return CalendarPage;
}());
exports.CalendarPage = CalendarPage;
//# sourceMappingURL=calendar.js.map