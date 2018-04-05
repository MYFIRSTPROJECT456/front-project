import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-fixed-header',
    templateUrl: './app/pages/tables/table-manage-fixed-header/table-manage-fixed-header.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/FixedHeader/css/fixedHeader.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageFixedHeaderPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-fixed-header-ready'));
    }
}