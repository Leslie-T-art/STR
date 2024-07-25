import { createAction, props } from '@ngrx/store';
import { EventInput } from '@fullcalendar/core';

export const fetchEvents = createAction('[Calendar] Fetch Events');
export const fetchEventsSuccess = createAction('[Calendar] Fetch Events Success', props<{ events: EventInput[] }>());
export const fetchEventsFailure = createAction('[Data] Fetch Events Failure', props<{ error: string }>());

export const addEvent = createAction(
  '[Calendar] Add Event',
  props<{ event: EventInput }>()
);
export const updateEventsSuccess = createAction(
  '[Calendar] Add Event',
  props<{ event: EventInput }>()
);
export const deleteEvent = createAction(
  '[Calendar] Delete Event',
  props<{ eventId: string }>()
);
