import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-colreorder',
    templateUrl: './app/pages/tables/table-manage-colreorder/table-manage-colreorder.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageColReorderPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-colreorder-ready'));
    }
}