import { createReducer, on, Action } from '@ngrx/store';
import { EventInput } from '@fullcalendar/core';
import { addEvent, deleteEvent, fetchEvents, fetchEventsSuccess, updateEventsSuccess } from '../actions/calendar.actions';

export interface CalendarState {
    events: EventInput[];
}

export const initialState: CalendarState = {
    events: [],
};

export const calendarReducer = createReducer(
    initialState,
    on(fetchEvents, (state) => {
        return { ...state };
    }),
    on(fetchEventsSuccess, (state, { events }) => {
        return { ...state, events };
    }),
    on(addEvent, (state, { event }) => {
        return { ...state, events: [...state.events, event], error: null };
    }),
    on(updateEventsSuccess, (state, { event }) => {
        return { ...state, events: state.events.map((event) => event.id === event.id ? event : event), error: null };
    }),
    on(deleteEvent, (state, { eventId }) => {
        return { ...state, contact: state.events.filter((event) => event.id !== eventId), error: null}
    }),
);

// Selector
export function reducer(state: CalendarState | undefined, action: Action) {
    return calendarReducer(state, action);
  }
