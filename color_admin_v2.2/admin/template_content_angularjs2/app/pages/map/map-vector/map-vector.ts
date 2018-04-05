import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'map-vector',
    templateUrl: './app/pages/map/map-vector/map-vector.html',
    styleUrls: [
        'assets/plugins/jquery-jvectormap/jquery-jvectormap.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class MapVectorPage implements OnInit {
    constructor(private app:AppComponent) {
        app.setPageContentInverseMode(true);
        app.setPageContentFullWidth(true);
    }
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-map-vector-ready'));
    }
}