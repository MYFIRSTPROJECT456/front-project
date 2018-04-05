import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'table-manage-buttons',
    templateUrl: './app/pages/tables/table-manage-buttons/table-manage-buttons.html',
    styleUrls: [
        'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
	    'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class TableManageButtonsPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('table-manage-buttons-ready'));
    }
}