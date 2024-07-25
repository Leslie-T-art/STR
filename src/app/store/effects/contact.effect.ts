import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addData, addDataFailure, addDataSuccess, deleteContactData, deleteContactDataFailure, deleteContactDataSuccess, fetchData, fetchDataFailure, fetchDataSuccess, updateContactData, updateContactDataFailure, updateContactDataSuccess } from "../actions/contact-action";

import { ContactService } from "src/app/core/services/contact.service";


@Injectable()
export class ContactEffects {
    fetchData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchData),
            mergeMap(() =>
                this.contactService.fetchData('/app/contact').pipe(
                    map((contact) => fetchDataSuccess({ contact })),
                    catchError((error) =>
                        of(fetchDataFailure({ error }))
                    )
                )
            )
        )
    );

    addData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addData),
            mergeMap(({ newData }) =>
                this.contactService.addData('/app/contact',newData).pipe(
                    map(() => addDataSuccess({ newData })),
                    catchError((error) => of(addDataFailure({ error })))
                )
            )
        )
    );

    updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContactData),
      mergeMap(({ updatedData }) =>
        this.contactService.updateData('/app/contact',updatedData).pipe(
          map(() => updateContactDataSuccess({ updatedData })),
          catchError((error) => of(updateContactDataFailure({ error })))
        )
      )
    )
  );

  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContactData),
      mergeMap(({ id }) =>
        this.contactService.deleteData('/app/contact').pipe(
          map(() => deleteContactDataSuccess({ id })),
          catchError((error) => of(deleteContactDataFailure({ error })))
        )
      )
    )
    );
    
    constructor(
        private actions$: Actions,
        private contactService: ContactService
    ) { }
}
