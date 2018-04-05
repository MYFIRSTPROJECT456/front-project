import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ui-typography',
    templateUrl: './app/pages/ui-elements/social-buttons/social-buttons.html',
    styleUrls: [
        'assets/plugins/bootstrap-social/bootstrap-social.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class UISocialButtonsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-social-buttons-ready'));
    }
}