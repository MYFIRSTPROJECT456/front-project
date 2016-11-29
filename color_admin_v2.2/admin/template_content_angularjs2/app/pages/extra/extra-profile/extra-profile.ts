import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'extra-profile',
    templateUrl: './app/pages/extra/extra-profile/extra-profile.html'
})

export class ExtraProfilePage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-extra-profile-ready'));
    }
}