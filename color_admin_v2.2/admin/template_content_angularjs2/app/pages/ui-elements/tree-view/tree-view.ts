import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ui-tree-view',
    templateUrl: './app/pages/ui-elements/tree-view/tree-view.html',
    styleUrls: [
        'assets/plugins/jstree/dist/themes/default/style.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class UITreeViewPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('ui-tree-view-ready'));
    }
}