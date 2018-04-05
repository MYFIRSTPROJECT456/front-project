import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dashboard-v1',
    templateUrl: './app/pages/dashboard/v1/dashboard-v1.html',
    styleUrls: [
        'assets/plugins/jquery-jvectormap/jquery-jvectormap.css',
        'assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
        'assets/plugins/gritter/css/jquery.gritter.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class DashboardV1Page implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('dashboard-v1-ready'));
    }
}