import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-elements',
    templateUrl: './app/pages/form-stuff/form-elements/form-elements.html'
})

export class FormElementsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('form-elements-ready'));
    }
}