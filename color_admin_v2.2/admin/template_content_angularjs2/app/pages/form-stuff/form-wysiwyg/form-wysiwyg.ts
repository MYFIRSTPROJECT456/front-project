import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'form-wysiwyg',
    templateUrl: './app/pages/form-stuff/form-wysiwyg/form-wysiwyg.html',
    styleUrls: [
        'assets/plugins/bootstrap-wysihtml5/dist/bootstrap3-wysihtml5.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class FormWysiwygPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('form-wysiwyg-ready'));
    }
}