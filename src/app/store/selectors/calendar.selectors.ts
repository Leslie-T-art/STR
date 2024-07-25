import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CalendarState } from '../reducers/calendar.reducer';

export const selectDataState = createFeatureSelector<CalendarState>('calendar');

export const getEvents = createSelector(
    selectDataState,
    (state: CalendarState) => {
        return state.events
    }
);
