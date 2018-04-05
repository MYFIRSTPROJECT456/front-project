import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-media-object',
    templateUrl: './app/pages/ui-elements/media-object/media-object.html'
})

export class UIMediaObjectPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-media-object-ready'));
    }
}