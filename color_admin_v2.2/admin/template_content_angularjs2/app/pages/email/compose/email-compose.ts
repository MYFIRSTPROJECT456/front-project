import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent }  from '../../../app.component';

@Component({
    selector: 'email-compose',
    templateUrl: './app/pages/email/compose/email-compose.html',
    styleUrls: [
        'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
	    'assets/plugins/bootstrap-wysihtml5/src/bootstrap3-wysihtml5.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class EmailComposePage implements OnInit {
    
    constructor(private app: AppComponent) {
        app.setPageContentFullWidth(true);
    }
    
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('email-compose-ready'));
    }
}