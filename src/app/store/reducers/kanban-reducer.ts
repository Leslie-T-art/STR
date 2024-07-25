import { Action, createReducer, on } from '@ngrx/store';
import { addKanbanDataFailure, addKanbanDataSuccess, fetchKanbanData, fetchKanbanDataFailure, fetchKanbanDataSuccess} from '../actions/kanban-action';

export interface KanbanState {
    kanban: any[];
    loading: boolean;
    error: any;
}

export const initialState: KanbanState = {
    kanban: [],
    loading: false,
    error: null
};

export const KanbanReducer = createReducer(
    initialState,
    on(fetchKanbanData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchKanbanDataSuccess, (state, { kanban }) => {
        return { ...state, kanban, loading: false };
    }),
    on(fetchKanbanDataFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),

    on(addKanbanDataSuccess, (state, { newData }) => {
        return { ...state, kanban: [...state.kanban, newData], error: null };

    }),

    on(fetchKanbanDataFailure, addKanbanDataFailure, (state, { error }) => {
        return { ...state,  error };
    })
);


// Selector
export function reducer(state: KanbanState | undefined, action: Action) {
    return KanbanReducer(state, action);
}