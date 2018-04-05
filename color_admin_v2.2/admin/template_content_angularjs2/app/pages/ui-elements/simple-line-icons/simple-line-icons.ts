import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-simple-line-icons',
    templateUrl: './app/pages/ui-elements/simple-line-icons/simple-line-icons.html'
})

export class UISimpleLineIconsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-simple-line-icons-ready'));
    }
}