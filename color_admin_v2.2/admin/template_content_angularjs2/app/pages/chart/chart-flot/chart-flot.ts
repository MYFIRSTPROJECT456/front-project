import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-flot',
    templateUrl: './app/pages/chart/chart-flot/chart-flot.html'
})

export class ChartFlotPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('chart-flot-ready'));
    }
}