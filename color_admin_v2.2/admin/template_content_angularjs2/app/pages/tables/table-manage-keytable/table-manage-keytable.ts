import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-keytable',
    templateUrl: './app/pages/tables/table-manage-keytable/table-manage-keytable.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageKeyTablePage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-keytable-ready'));
    }
}