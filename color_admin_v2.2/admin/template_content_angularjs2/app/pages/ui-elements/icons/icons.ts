import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-icons',
    templateUrl: './app/pages/ui-elements/icons/icons.html'
})

export class UIIconsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-icons-ready'));
    }
}