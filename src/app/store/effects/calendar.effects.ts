import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

// Action
import { fetchEvents, fetchEventsFailure, fetchEventsSuccess } from '../actions/calendar.actions';
import { ContactService } from 'src/app/core/services/contact.service';

@Injectable()
export class CalendarEffects {
    fetchEvents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchEvents),
            mergeMap(() =>
                this.contactService.fetchData('/app/calendar').pipe(
                    map((events) => fetchEventsSuccess({ events })),
                    catchError((error) =>
                        of(fetchEventsFailure({ error }))
                    )
                )
            )
        )
    );

    constructor(private actions$: Actions,
        private contactService: ContactService) { }
}