import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-combine',
    templateUrl: './app/pages/tables/table-manage-combine/table-manage-combine.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageCombinePage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-combine-ready'));
    }
}