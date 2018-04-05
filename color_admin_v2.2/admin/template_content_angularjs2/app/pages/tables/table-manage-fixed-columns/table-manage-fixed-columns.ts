import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-fixed-columns',
    templateUrl: './app/pages/tables/table-manage-fixed-columns/table-manage-fixed-columns.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/FixedColumns/css/fixedColumns.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageFixedColumnsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-fixed-columns-ready'));
    }
}