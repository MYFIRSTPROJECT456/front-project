import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-language-bar-icon',
    templateUrl: './app/pages/ui-elements/language-bar-icon/language-bar-icon.html'
})

export class UILanguageBarIconPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-language-bar-icon-ready'));
    }
}