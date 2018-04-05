import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-responsive',
    templateUrl: './app/pages/tables/table-manage-responsive/table-manage-responsive.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageResponsivePage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-responsive-ready'));
    }
}