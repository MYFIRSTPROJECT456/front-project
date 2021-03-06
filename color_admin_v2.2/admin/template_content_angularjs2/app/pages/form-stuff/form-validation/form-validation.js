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
var forms_1 = require('@angular/forms');
var FormValidationPage = (function () {
    function FormValidationPage(fb) {
        this.validationForm = fb.group({
            'fullName': [null, forms_1.Validators.required],
            'selectBox': [null, forms_1.Validators.required],
            'radioRequired': [null, forms_1.Validators.required],
            'checkboxRequired': [null, forms_1.Validators.required],
            'message': [null, [forms_1.Validators.required, forms_1.Validators.minLength(20), forms_1.Validators.maxLength(200)]],
            'email': [null, forms_1.Validators.required],
            'website': [null, forms_1.Validators.required],
            'number': [null, forms_1.Validators.required],
            'alphabets': [null, forms_1.Validators.required],
        });
    }
    FormValidationPage.prototype.submitForm = function (form) {
        alert('Form Validation Done');
        console.log('Form Data: ');
        console.log(form);
    };
    FormValidationPage.prototype.ngOnInit = function () {
        window.dispatchEvent(new CustomEvent('form-validation-ready'));
    };
    FormValidationPage = __decorate([
        core_1.Component({
            selector: 'form-validation',
            templateUrl: './app/pages/form-stuff/form-validation/form-validation.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormValidationPage);
    return FormValidationPage;
}());
exports.FormValidationPage = FormValidationPage;
//# sourceMappingURL=form-validation.js.map