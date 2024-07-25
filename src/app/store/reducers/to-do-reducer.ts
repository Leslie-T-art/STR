import { Action, createReducer, on } from '@ngrx/store';
import { addTodoDataFailure, addTodoDataSuccess, deleteTodoDataFailure, deleteTodoDataSuccess, fetchTodoData, fetchTodoDataFailure, fetchTodoDataSuccess, updateTodoDataFailure, updateTodoDataSuccess } from '../actions/to-do-action';

export interface ToDoState {
    todo: any[];
    loading: boolean;
    error: any;
}

export const initialState: ToDoState = {
    todo: [],
    loading: false,
    error: null
};

export const ToDoReducer = createReducer(
    initialState,
    on(fetchTodoData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchTodoDataSuccess, (state, { todo }) => {
        return { ...state, todo, loading: false };
    }),
    on(fetchTodoDataFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),

    on(addTodoDataSuccess, (state, { newData }) => {
        return { ...state, todo: [...state.todo, newData], error: null };

    }),

    on(updateTodoDataSuccess, (state, { updatedData }) => {
        return { ...state, todo: state.todo.map((todo) => todo.id === updatedData.id ? updatedData : todo), error: null };
    }),

    on(deleteTodoDataSuccess, (state, { id }) => {
        return { ...state, todo: state.todo.filter((todo) => todo.id !== id), error: null}
    }),

    on(fetchTodoDataFailure, addTodoDataFailure, updateTodoDataFailure, deleteTodoDataFailure, (state, { error }) => {
        return { ...state,  error };
    })
);


// Selector
export function reducer(state: ToDoState | undefined, action: Action) {
    return ToDoReducer(state, action);
}