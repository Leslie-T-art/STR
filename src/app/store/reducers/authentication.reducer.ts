import { createReducer, on } from '@ngrx/store';
import { Register, RegisterFailure, RegisterSuccess, login, loginFailure, loginSuccess, logout, signInWithFacebook, signInWithGoogle } from '../actions/authentication.actions';
import { User } from '../models/auth.models';

export interface AuthenticationState {
    isLoggedIn: boolean;
    user: User | null;
    error: string | null;
}

const initialState: AuthenticationState = {
    isLoggedIn: false,
    user: null,
    error: null,
};

export const authenticationReducer = createReducer(
    initialState,
    on(Register, (state) => ({ ...state, error: null })),
    on(RegisterSuccess, (state, { user }) => ({ ...state, isLoggedIn: true, user, error: null, })),
    on(RegisterFailure, (state, { error }) => ({ ...state, error })),

    on(login, (state) => ({ ...state, error: null })),
    on(loginSuccess, (state, { user }) => ({ ...state, isLoggedIn: true, user, error: null, })),
    on(loginFailure, (state, { error }) => ({ ...state, error })),
    on(logout, (state) => ({ ...state, user: null })),

    on(signInWithFacebook, (state, { user }) => ({ ...state, user })),
    on(signInWithGoogle, (state, { user }) => ({ ...state, user }))

);

// Selector
export const getUser = (state: AuthenticationState) => state.user;
export const getisLoggedIn = (state: AuthenticationState) => state.isLoggedIn;
export const getError = (state: AuthenticationState) => state.error;