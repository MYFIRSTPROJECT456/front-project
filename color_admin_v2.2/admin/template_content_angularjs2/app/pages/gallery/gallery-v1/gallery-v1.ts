import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gallery-v1',
    templateUrl: './app/pages/gallery/gallery-v1/gallery-v1.html',
    styleUrls: [
        'assets/plugins/isotope/isotope.css',
  	    'assets/plugins/lightbox/css/lightbox.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class GalleryV1Page implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('gallery-v1-ready'));
    }
}