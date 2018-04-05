import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-buttons',
    templateUrl: './app/pages/ui-elements/buttons/buttons.html'
})

export class UIButtonsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-buttons-ready'));
    }
}