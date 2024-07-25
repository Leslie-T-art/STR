import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { ContactService } from "src/app/core/services/contact.service";
import { addKanbanData, addKanbanDataFailure, addKanbanDataSuccess, fetchKanbanData, fetchKanbanDataFailure, fetchKanbanDataSuccess} from "../actions/kanban-action";


@Injectable()
export class KanbanEffects {
    fetchData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchKanbanData),
            mergeMap(() =>
                this.contactService.fetchData('/app/kanban').pipe(
                    map((kanban) => fetchKanbanDataSuccess({ kanban })),
                    catchError((error) =>
                        of(fetchKanbanDataFailure({ error }))
                    )
                )
            )
        )
    );

    addData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addKanbanData),
            mergeMap(({ newData }) =>
                this.contactService.addData('/app/kanban',newData).pipe(
                    map(() => addKanbanDataSuccess({ newData })),
                    catchError((error) => of(addKanbanDataFailure({ error })))
                )
            )
        )
    );
    
    constructor(
        private actions$: Actions,
        private contactService: ContactService
    ) { }
}
