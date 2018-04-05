import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'form-slider-switcher',
    templateUrl: './app/pages/form-stuff/form-slider-switcher/form-slider-switcher.html',
    styleUrls: [
        'assets/plugins/switchery/switchery.min.css',
	    'assets/plugins/powerange/powerange.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class FormSliderSwitcherPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('form-slider-switcher-ready'));
    }
}