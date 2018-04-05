import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-with-top-menu',
    templateUrl: './app/pages/page-options/page-with-top-menu/page-with-top-menu.html'
})

export class TopMenuPage implements OnInit {
    
    constructor(private app: AppComponent) {
        app.setPageTopMenu(true);
        app.setPageWithoutSidebar(true);
    }
    
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-with-top-menu-ready'));
    }
}