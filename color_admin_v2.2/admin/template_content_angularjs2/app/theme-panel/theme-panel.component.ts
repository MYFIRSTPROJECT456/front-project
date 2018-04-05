import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'theme-panel',
  templateUrl: './app/theme-panel/theme-panel.component.html'
})
export class ThemePanelComponent implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('theme-panel-ready'));
    }
}