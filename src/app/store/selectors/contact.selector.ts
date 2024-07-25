import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactState } from '../reducers/contact-reducer';

export const selectDataState = createFeatureSelector<ContactState>('contact');

export const selectData = createSelector(
    selectDataState,
    (state: ContactState) => state.contact
);
  
export const selectDataLoading = createSelector(
    selectDataState,
    (state: ContactState) => state.loading
  );
  
  export const selectDataError = createSelector(
    selectDataState,
    (state: ContactState) => state.error
  );