import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-select',
    templateUrl: './app/pages/tables/table-manage-select/table-manage-select.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageSelectPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-select-ready'));
    }
}