import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { ContactService } from "src/app/core/services/contact.service";
import { addTodoData, addTodoDataFailure, addTodoDataSuccess, deleteTodoData, deleteTodoDataFailure, deleteTodoDataSuccess, fetchTodoData, fetchTodoDataFailure, fetchTodoDataSuccess, updateTodoData, updateTodoDataFailure, updateTodoDataSuccess } from "../actions/to-do-action";


@Injectable()
export class ToDoEffects {
    fetchData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchTodoData),
            mergeMap(() =>
                this.contactService.fetchData('/app/todo').pipe(
                    map((todo) => fetchTodoDataSuccess({ todo })),
                    catchError((error) =>
                        of(fetchTodoDataFailure({ error }))
                    )
                )
            )
        )
    );

    addData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTodoData),
            mergeMap(({ newData }) =>
                this.contactService.addData('/app/todo',newData).pipe(
                    map(() => addTodoDataSuccess({ newData })),
                    catchError((error) => of(addTodoDataFailure({ error })))
                )
            )
        )
    );

    updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodoData),
      mergeMap(({ updatedData }) =>
        this.contactService.updateData('/app/todo',updatedData).pipe(
          map(() => updateTodoDataSuccess({ updatedData })),
          catchError((error) => of(updateTodoDataFailure({ error })))
        )
      )
    )
  );

  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoData),
      mergeMap(({ id }) =>
        this.contactService.deleteData('/app/todo').pipe(
          map(() => deleteTodoDataSuccess({ id })),
          catchError((error) => of(deleteTodoDataFailure({ error })))
        )
      )
    )
    );
    
    constructor(
        private actions$: Actions,
        private contactService: ContactService
    ) { }
}
