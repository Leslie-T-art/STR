import { Action, createReducer, on } from '@ngrx/store';
import { addDataFailure, addDataSuccess, deleteContactDataFailure, deleteContactDataSuccess, fetchData, fetchDataFailure, fetchDataSuccess, updateContactDataFailure, updateContactDataSuccess } from '../actions/contact-action';

export interface ContactState {
    contact: any[];
    loading: boolean;
    error: any;
}

export const initialState: ContactState = {
    contact: [],
    loading: false,
    error: null
};

export const ContactReducer = createReducer(
    initialState,
    on(fetchData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchDataSuccess, (state, { contact }) => {
        return { ...state, contact, loading: false };
    }),
    on(fetchDataFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),

    on(addDataSuccess, (state, { newData }) => {
        return { ...state, contact: [...state.contact, newData], error: null };

    }),

    on(updateContactDataSuccess, (state, { updatedData }) => {
        return { ...state, contact: state.contact.map((contact) => contact.id === updatedData.id ? updatedData : contact), error: null };
    }),

    on(deleteContactDataSuccess, (state, { id }) => {
        return { ...state, contact: state.contact.filter((contact) => contact.id !== id), error: null}
    }),

    on(fetchDataFailure, addDataFailure, updateContactDataFailure, deleteContactDataFailure, (state, { error }) => {
        return { ...state,  error };
    })
);


// Selector
export function reducer(state: ContactState | undefined, action: Action) {
    return ContactReducer(state, action);
}