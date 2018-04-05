import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
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
    encapsulation: ViewEncapsulation.None
})

export class FormPluginsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('form-plugins-ready'));
    }
}