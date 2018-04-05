import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-tabs-accordions',
    templateUrl: './app/pages/ui-elements/tabs-accordions/tabs-accordions.html'
})

export class UITabsAccordionsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-tabs-accordions-ready'));
    }
}