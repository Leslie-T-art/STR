import { Action, createReducer, on } from '@ngrx/store';
import { fetchFileData, fetchFileDataFailure, fetchFileDataSuccess } from '../actions/filemanager-action';

export interface FileState {
    files: any[];
    loading: boolean;
    error: any;
}

export const initialState: FileState = {
    files: [],
    loading: false,
    error: null
};

export const FileReducer = createReducer(
    initialState,
    on(fetchFileData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchFileDataSuccess, (state, { files }) => {
        return { ...state, files, loading: false };
    }),
    on(fetchFileDataFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),
);


// Selector
export function reducer(state: FileState | undefined, action: Action) {
    return FileReducer(state, action);
}