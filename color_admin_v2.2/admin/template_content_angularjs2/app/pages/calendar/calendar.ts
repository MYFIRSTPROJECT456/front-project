import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'calendar',
    templateUrl: './app/pages/calendar/calendar.html',
    styleUrls: [
        'assets/plugins/fullcalendar/fullcalendar.min.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class CalendarPage implements OnInit {
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('calendar-ready'));
    }
}