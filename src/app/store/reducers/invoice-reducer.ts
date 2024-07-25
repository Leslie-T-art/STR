import { Action, createReducer, on } from '@ngrx/store';
import { addDataSuccess, deleteInvoiceSuccess, fetchData, fetchDataFailure, fetchDataSuccess } from '../actions/invoice-action';

export interface InvoiceState {
  invoice: any[];
  loading: boolean;
  error: any;
}

export const initialState: InvoiceState = {
  invoice: [],
  loading: false,
  error: null
};

export const InvoiceReducer = createReducer(
  initialState,
  on(fetchData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchDataSuccess, (state, { invoice }) => {
    return { ...state, invoice, loading: false };
  }),
  on(fetchDataFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  on(addDataSuccess, (state, { newData }) => ({
    ...state,
    data: [...state.invoice, newData],
    error: null,
  })),

  on(deleteInvoiceSuccess, (state, { id }) => {
    const updatedInvoice = state.invoice.filter((invoice) => !id.includes(invoice.id));
    return { ...state, invoice: updatedInvoice, error: null };
}),
);


// Selector
export function reducer(state: InvoiceState | undefined, action: Action) {
  return InvoiceReducer(state, action);
}