import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-ionicons',
    templateUrl: './app/pages/ui-elements/ionicons/ionicons.html'
})

export class UIIoniconsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-ionicons-ready'));
    }
}