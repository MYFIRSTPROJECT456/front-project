import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'helper-css',
    templateUrl: './app/pages/helper/helper-css/helper-css.html'
})

export class HelperCssPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('helper-css-ready'));
    }
}