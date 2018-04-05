import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-default',
    templateUrl: './app/pages/tables/table-manage-autofill/table-manage-autofill.html',
    styleUrls: [
        'assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css',
	    'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageAutofillPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-autofill-ready'));
    }
}