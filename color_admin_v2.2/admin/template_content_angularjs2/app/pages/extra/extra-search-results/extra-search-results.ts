import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'extra-search-results',
    templateUrl: './app/pages/extra/extra-search-results/extra-search-results.html'
})

export class ExtraSearchResultsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-extra-search-results-ready'));
    }
}