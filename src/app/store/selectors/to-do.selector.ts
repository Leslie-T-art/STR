import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToDoState } from '../reducers/to-do-reducer';

export const selectDataState = createFeatureSelector<ToDoState>('todo');

export const selectData = createSelector(
    selectDataState,
    (state: ToDoState) => state.todo
);
  
export const selectDataLoading = createSelector(
    selectDataState,
    (state: ToDoState) => state.loading
  );
  
  export const selectDataError = createSelector(
    selectDataState,
    (state: ToDoState) => state.error
  );