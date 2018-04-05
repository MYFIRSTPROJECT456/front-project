import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'map-google',
    templateUrl: './app/pages/map/map-google/map-google.html'
})

export class MapGooglePage implements OnInit {
    constructor(private app:AppComponent) {
        app.setPageContentFullWidth(true);
    }
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-map-google-ready'));
    }
}