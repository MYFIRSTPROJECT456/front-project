import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ui-modal-notification',
    templateUrl: './app/pages/ui-elements/modal-notification/modal-notification.html',
    styleUrls: [
        'assets/plugins/gritter/css/jquery.gritter.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class UIModalNotificationPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-modal-notification-ready'));
    }
}