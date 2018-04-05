import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-unlimited-nav-tabs',
    templateUrl: './app/pages/ui-elements/unlimited-nav-tabs/unlimited-nav-tabs.html'
})

export class UIUnlimitedNavTabsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-unlimited-nav-tabs-ready'));
        window.dispatchEvent(new CustomEvent('init-component'));
    }
}