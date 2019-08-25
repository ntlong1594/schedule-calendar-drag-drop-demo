import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput, BusinessHoursInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { Draggable } from '@fullcalendar/interaction'; // for dateClick

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  calendarVisible: any;
  calendarPlugins: any;
  calendarWeekends;
  buttonLabel: any;
  calendarEvents: EventInput[];

  doctorsList: any[];

  constructor() {
    this.initDefaultValue();
  }
  ngAfterViewInit(): void {
    const container = document.getElementById('doctor-list');
    const dragableElement = new Draggable(container, {
      itemSelector: '#draggable-element'
    });
  }

  initDefaultValue() {
    this.calendarVisible = true;
    this.calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
    this.calendarWeekends = false;
    this.buttonLabel = {
      today: 'Hôm',
      month: 'month',
      week: 'week',
      day: 'day',
      list: 'list'
    };
    this.calendarEvents = [];

    this.doctorsList = [{
      name: 'Bác Sĩ 1',
      time: { title: "bac si 1", duration: "04:00" }
    },
    {
      name: 'Bác Sĩ 2',
      time: { title: "bac si 2", duration: "04:00" }
    },
    {
      name: 'Bác Sĩ 3',
      time: { title: "bac si 3", duration: "04:00" }
    }];
  }


  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }


  handleDateClick(arg) {

  }

  handleEventClick(e) {
    if (confirm('Would you like to remove an event  ?')) {
      e.event.remove();
    }
  }

  eventReceive(e) {
    this.calendarEvents = this.calendarEvents.concat(e);
  }

}
