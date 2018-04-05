import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-rowreorder',
    templateUrl: './app/pages/tables/table-manage-rowreorder/table-manage-rowreorder.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageRowReorderPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-rowreorder-ready'));
    }
}