import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'chart-morris',
    templateUrl: './app/pages/chart/chart-morris/chart-morris.html',
    styleUrls: [
        'assets/plugins/morris/morris.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class ChartMorrisPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('chart-morris-ready'));
    }
}