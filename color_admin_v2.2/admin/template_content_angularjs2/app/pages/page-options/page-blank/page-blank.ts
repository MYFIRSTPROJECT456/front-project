import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-blank',
    templateUrl: './app/pages/page-options/page-blank/page-blank.html'
})

export class BlankPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-blank-ready'));
    }
}