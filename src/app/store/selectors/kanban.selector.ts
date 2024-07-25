import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KanbanState } from '../reducers/kanban-reducer';

export const selectDataState = createFeatureSelector<KanbanState>('kanban');

export const selectData = createSelector(
    selectDataState,
    (state: KanbanState) => state.kanban
);
  
export const selectDataLoading = createSelector(
    selectDataState,
    (state: KanbanState) => state.loading
  );
  
  export const selectDataError = createSelector(
    selectDataState,
    (state: KanbanState) => state.error
  );