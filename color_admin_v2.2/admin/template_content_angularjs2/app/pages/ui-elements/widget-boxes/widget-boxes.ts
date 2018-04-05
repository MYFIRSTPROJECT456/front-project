import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-widget-boxes',
    templateUrl: './app/pages/ui-elements/widget-boxes/widget-boxes.html'
})

export class UIWidgetBoxesPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-widget-boxes-ready'));
        window.dispatchEvent(new CustomEvent('init-component'));
    }
}