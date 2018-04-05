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
var FormPluginsPage = (function () {
    function FormPluginsPage() {
    }
    FormPluginsPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('form-plugins-ready'));
    };
    FormPluginsPage = __decorate([
        core_1.Component({
            selector: 'form-plugins',
            templateUrl: './app/pages/form-stuff/form-plugins/form-plugins.html',
            styleUrls: [
                'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
                'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.css',
                'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                'assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
                'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                'assets/plugins/password-indicator/css/password-indicator.css',
                'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                'assets/plugins/bootstrap-daterangepicker/daterangepicker.css',
                'assets/plugins/select2/dist/css/select2.min.css',
                'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                'assets/plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css',
                'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.css',
                'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-fontawesome.css',
                'assets/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker-glyphicons.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], FormPluginsPage);
    return FormPluginsPage;
}());
exports.FormPluginsPage = FormPluginsPage;
//# sourceMappingURL=form-plugins.js.map