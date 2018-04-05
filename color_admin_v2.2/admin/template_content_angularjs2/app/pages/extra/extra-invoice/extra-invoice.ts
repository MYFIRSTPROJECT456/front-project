import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'extra-invoice',
    templateUrl: './app/pages/extra/extra-invoice/extra-invoice.html',
    styleUrls: [
        'assets/css/invoice-print.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class ExtraInvoicePage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-extra-invoice-ready'));
    }
}