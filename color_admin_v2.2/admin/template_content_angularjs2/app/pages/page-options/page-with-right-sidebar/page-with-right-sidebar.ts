import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-with-right-sidebar',
    templateUrl: './app/pages/page-options/page-with-right-sidebar/page-with-right-sidebar.html'
})

export class RightSidebarPage implements OnInit {
    
    constructor(private app: AppComponent) {
        app.setPageRightSidebar(true);
    }
    
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-with-right-sidebar-ready'));
    }
}