import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-boxed-layout-with-mixed-menu',
    templateUrl: './app/pages/page-options/page-boxed-layout-with-mixed-menu/page-boxed-layout-with-mixed-menu.html'
})

export class BoxedLayoutMixedMenuPage implements OnInit {
    
    constructor(private app: AppComponent) {
        app.setPageTopMenu(true);
        app.setPageBoxedLayout(true);
    }
    
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-boxed-layout-with-mixed-menu-ready'));
    }
}