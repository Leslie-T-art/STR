import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoiceState } from '../reducers/invoice-reducer';

export const selectDataState = createFeatureSelector<InvoiceState>('invoice');

export const selectData = createSelector(
    selectDataState,
    (state: InvoiceState) => state.invoice
);
  
export const selectDataLoading = createSelector(
    selectDataState,
    (state: InvoiceState) => state.loading
  );
  
  export const selectDataError = createSelector(
    selectDataState,
    (state: InvoiceState) => state.error
  );