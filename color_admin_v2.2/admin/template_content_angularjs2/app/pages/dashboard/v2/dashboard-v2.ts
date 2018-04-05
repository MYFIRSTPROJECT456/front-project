import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dashboard-v2',
    templateUrl: './app/pages/dashboard/v2/dashboard-v2.html',
    styleUrls: [
        'assets/plugins/jquery-jvectormap/jquery-jvectormap.css',
        'assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css',
        'assets/plugins/gritter/css/jquery.gritter.css',
        'assets/plugins/morris/morris.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class DashboardV2Page implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('dashboard-v2-ready'));
    }
}