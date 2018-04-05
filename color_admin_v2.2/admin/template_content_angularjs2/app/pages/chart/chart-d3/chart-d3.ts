import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'chart-d3',
    templateUrl: './app/pages/chart/chart-d3/chart-d3.html',
    styleUrls: [
        'assets/plugins/nvd3/build/nv.d3.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class ChartD3Page implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('chart-d3-ready'));
    }
}