import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-default',
    templateUrl: './app/pages/tables/table-manage-default/table-manage-default.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
        'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageDefaultPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-default-ready'));
    }
}