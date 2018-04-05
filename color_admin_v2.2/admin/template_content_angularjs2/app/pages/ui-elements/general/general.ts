import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-general',
    templateUrl: './app/pages/ui-elements/general/general.html'
})

export class UIGeneralPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-general-ready'));
    }
}