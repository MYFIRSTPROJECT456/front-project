import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'form-summernote',
    templateUrl: './app/pages/form-stuff/form-summernote/form-summernote.html',
    styleUrls: [
        'assets/plugins/summernote/summernote.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class FormSummernotePage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('form-summernote-ready'));
    }
}