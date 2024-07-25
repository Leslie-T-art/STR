import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { ContactService } from "src/app/core/services/contact.service";
import { fetchFileData, fetchFileDataFailure, fetchFileDataSuccess } from "../actions/filemanager-action";


@Injectable()
export class FileEffects {
    fetchData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchFileData),
            mergeMap(() =>
                this.contactService.fetchData('/app/file').pipe(
                    map((files) => fetchFileDataSuccess({ files })),
                    catchError((error) =>
                        of(fetchFileDataFailure({ error }))
                    )
                )
            )
        )
    );
    
    constructor(
        private actions$: Actions,
        private contactService: ContactService
    ) { }
}
