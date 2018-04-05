import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ui-intro-js',
    templateUrl: './app/pages/ui-elements/intro-js/intro-js.html',
    styleUrls: [
        'assets/plugins/intro-js/introjs.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class UIIntroJsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-intro-js-ready'));
    }
}