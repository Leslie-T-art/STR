import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addData, addDataFailure, addDataSuccess, deleteInvoice, deleteInvoiceFailure, deleteInvoiceSuccess, fetchData, fetchDataFailure, fetchDataSuccess } from "../actions/invoice-action";

import { InvoiceService } from "src/app/core/services/invoice.service";


@Injectable()
export class InvoiceEffects {
  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchData),
      mergeMap(() =>
        this.invoiceService.fetchData().pipe(
          map((invoice) => fetchDataSuccess({ invoice })),
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
        this.invoiceService.addData(newData).pipe(
          map(() => addDataSuccess({ newData })),
          catchError((error) => of(addDataFailure({ error })))
        )
      )
    )
  );

  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteInvoice),
      mergeMap(({ id }) =>
        this.invoiceService.deleteData('/app/invoice').pipe(
          map(() => deleteInvoiceSuccess({ id })),
          catchError((error) => of(deleteInvoiceFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private invoiceService: InvoiceService
  ) { }
}
