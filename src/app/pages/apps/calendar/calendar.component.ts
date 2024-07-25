import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';

// Calendar option
import { CalendarOptions, EventApi, EventClickArg, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { defaultevent, events, createEventId } from '../../../core/data/calendar';
import { ModalDirective } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { RootReducerState } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { addEvent, deleteEvent, fetchEvents, updateEventsSuccess } from 'src/app/store/actions/calendar.actions';
import { getEvents } from 'src/app/store/selectors/calendar.selectors';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  // calendar
  calendarEvents: EventInput[] = [];
  editEvent: any;
  newEventDate: any;
  formEditData!: UntypedFormGroup;
  submitted = false;
  formData!: UntypedFormGroup;

  upcomingEvents: any;
  // events$: Observable<EventInput[]>;

  @ViewChild('eventModal', { static: false }) eventModal?: ModalDirective;

  constructor(private formBuilder: UntypedFormBuilder,private store: Store<RootReducerState>,private datePipe: DatePipe) { }

  ngOnInit(): void {

    // Validation
    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      className: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', Validators.required],
      start: [''],
      end: ['']
    });

    this.store.dispatch(fetchEvents()); // Dispatch action to fetch calendar events
    this.store.select(getEvents).subscribe((data) => {
      this.calendarEvents = data;
    });
    // Calender Event Data
    
    this.upcomingEvents = defaultevent;
  }

    /**
   * Returns form
   */
    get form() {
      return this.formData.controls;
    }

  /***
 * Calender Set
 */
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      right: 'dayGridMonth,dayGridWeek,dayGridDay,listMonth',
      center: 'title',
      left: 'prev,next today'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.calendarEvents,
    themeSystem: "bootstrap",
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };
  currentEvents: EventApi[] = [];

  /**
  * Event add modal
  */
  openModal(events?: any) {
    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement;
    modaltitle.innerHTML = "Add Event";

    var modalbtn = document.querySelector('#btn-save-event') as HTMLAreaElement;
    modalbtn.innerHTML = "Add Event";

    document.getElementById('edit-event-btn')?.classList.add('d-none');
    document.getElementById('btn-delete-event')?.classList.add('d-none');
    (document.querySelector(".event-details") as HTMLElement).style.display = "none";
    (document.querySelector(".event-form") as HTMLElement).style.display = "block";

    this.eventModal?.show();
    this.submitted = false;
    this.newEventDate = events;
  }

  /**
   * Event click modal show
   */
  handleEventClick(clickInfo: EventClickArg) {
    this.editEvent = clickInfo.event;

    (document.querySelector(".event-details") as HTMLElement).style.display = "block";
    (document.querySelector(".event-form") as HTMLElement).style.display = "none";

    document.getElementById('edit-event-btn')?.classList.remove('d-none');
    document.getElementById('btn-delete-event')?.classList.remove('d-none');

    var editbtn = document.querySelector('#edit-event-btn') as HTMLAreaElement;
    editbtn.innerHTML = 'edit';

    (document.getElementById('btn-save-event') as HTMLElement).setAttribute("hidden", "true");

    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement;
    modaltitle.innerHTML = this.editEvent.title

    var startdate = document.getElementById('event-start-date-tag') as HTMLAreaElement;
    startdate.innerHTML = this.editEvent.start

    var enddate = document.getElementById('event-timepicker1-tag') as HTMLAreaElement;
    enddate.innerHTML = this.editEvent.end

    var location = document.getElementById('event-location-tag') as HTMLAreaElement;
    location.innerHTML = this.editEvent.extendedProps['location']

    var description = document.getElementById('event-description-tag') as HTMLAreaElement;
    description.innerHTML = this.editEvent.extendedProps['description']

    this.formData = this.formBuilder.group({
      title: clickInfo.event.title,
      className: clickInfo.event.classNames[0],
      location: clickInfo.event.extendedProps['location'],
      description: clickInfo.event.extendedProps['description'],
      date: clickInfo.event.start,
      start: (clickInfo.event.start ? clickInfo.event.start : ''),
      end: (clickInfo.event.end ? clickInfo.event.end : '')
    });
    this.eventModal?.show();
  }

  /**
 * Events bind in calander
 * @param events events
 */
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  showeditEvent() {
    if (document.querySelector('#edit-event-btn')?.innerHTML == 'cancel') {
      this.eventModal?.hide();
    } else {
      (document.querySelector(".event-details") as HTMLElement).style.display = "none";
      (document.querySelector(".event-form") as HTMLElement).style.display = "block";
      (document.getElementById('btn-save-event') as HTMLElement).removeAttribute("hidden");
      var modalbtn = document.querySelector('#btn-save-event') as HTMLAreaElement;
      modalbtn.innerHTML = "Update Event"
      var editbtn = document.querySelector('#edit-event-btn') as HTMLAreaElement;
      editbtn.innerHTML = 'cancel'
    }
  }

  /**
     * Close event modal
     */
  closeEventModal() {
    this.formData = this.formBuilder.group({
      title: '',
      className: '',
      location: '',
      description: '',
      date: '',
      start: '',
      end: ''
    });
    this.eventModal?.hide();
  }

  /***
 * Model Position Set
 */
  position() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event has been saved',
      showConfirmButton: false,
      timer: 1000,
    });
  }

  /***
   * Model Edit Position Set
   */
  Editposition() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event has been Updated',
      showConfirmButton: false,
      timer: 1000,
    });
  }

  /**
  * Save the event
  */
  saveEvent() {
    if (document.querySelector('#btn-save-event')?.innerHTML == 'Add Event') {
      if (this.formData.valid) {
        const className = this.formData.get('className')!.value;
        const title = this.formData.get('title')!.value;
        const location = this.formData.get('location')!.value;
        const description = this.formData.get('description')!.value
        const date = this.formData.get('date')!.value
        const starttime = this.formData.get('start')!.value;
        const endtime = this.formData.get('end')!.value;
        
        const newEvent: EventInput = {
          id: createEventId(), // Generate a unique ID for the event
          title,
          date,
          starttime,
          endtime,
          location,
          description,
          className: className
        };
        this.store.dispatch(addEvent({ event: newEvent }));
        this.position();
        this.formData = this.formBuilder.group({
          title: '',
          className: '',
          location: '',
          description: '',
          date: '',
          start: '',
          end: ''
        });
        this.eventModal?.hide();
       
      }
    } else {
      this.editEventSave()
    }
    this.submitted = true;
  }

  /**
   * save edit event data
   */
  editEventSave() {

    const editTitle = this.formData.get('title')!.value;
    const editCategory = this.formData.get('className')!.value;
    const editdate = this.formData.get('date')!.value;
    const editstart = this.formData.get('date')!.value;
    const editend = this.formData.get('end')!.value;
    const editlocation = this.formData.get('location')!.value;
    const editdescription = this.formData.get('description')!.value;

    const event = {
      id: this.editEvent.id,
      allDay: false,
      title: editTitle,
      date: editdate,
      start: editstart,
      end: editend,
      location:editlocation,
      description:editdescription,
      classNames: editCategory,
    };
    this.store.dispatch(updateEventsSuccess({ event }));
    this.Editposition();
    this.formData = this.formBuilder.group({
      title: '',
      className: '',
      location: '',
      description: '',
      date: '',
      start: '',
      end: ''
    });
    this.eventModal?.hide();
  }

  /**
   * Delete event
   */
  deleteEventData() {
    this.editEvent.remove();
    this.formData = this.formBuilder.group({
      title: '',
      className: '',
      location: '',
      description: '',
      date: '',
      start: '',
      end: ''
    });
    this.eventModal?.hide();
  }


}
