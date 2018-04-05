import { Component, OnInit } from '@angular/core';
import { AppComponent }  from '../../../../app.component';

@Component({
    selector: 'email-inbox-v2',
    templateUrl: './app/pages/email/inbox/v2/email-inbox-v2.html'
})

export class EmailInboxV2Page implements OnInit {
    constructor(private app: AppComponent) {
        app.setPageContentFullWidth(true);
    }
    
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('email-inbox-v2-ready'));
    }
}