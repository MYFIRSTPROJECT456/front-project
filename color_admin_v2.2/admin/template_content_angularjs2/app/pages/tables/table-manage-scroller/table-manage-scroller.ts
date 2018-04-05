import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-scroller',
    templateUrl: './app/pages/tables/table-manage-scroller/table-manage-scroller.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/Scroller/css/scroller.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageScrollerPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-scroller-ready'));
    }
}