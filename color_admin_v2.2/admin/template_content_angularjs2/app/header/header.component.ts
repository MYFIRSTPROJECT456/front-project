import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './app/header/header.component.html'
})

export class HeaderComponent implements OnInit {
    @Input() page_with_two_sidebar : boolean;
    @Input() page_with_mega_menu : boolean;
    
    ngOnInit() {
    }
}