import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FileState } from '../reducers/filemanager-reducer';

export const selectDataState = createFeatureSelector<FileState>('files');

export const selectData = createSelector(
    selectDataState,
  (state: FileState) => {
    return state.files
  }
);
  
export const selectDataLoading = createSelector(
    selectDataState,
    (state: FileState) => state.loading
  );
  
  export const selectDataError = createSelector(
    selectDataState,
    (state: FileState) => state.error
  );