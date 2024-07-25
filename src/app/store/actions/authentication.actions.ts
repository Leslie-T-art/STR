import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth.models';

// Register action
export const Register = createAction('[Authentication] Register', props<{ email: string, first_name: string, password: string }>());
export const RegisterSuccess = createAction('[Authentication] Register Success', props<{ user: User }>());
export const RegisterFailure = createAction('[Authentication] Register Failure', props<{ error: string }>());

// login action
export const login = createAction('[Authentication] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Authentication] Login Success', props<{ user: User }>());
export const loginFailure = createAction('[Authentication] Login Failure', props<{ error: string }>());

// social login action
export const signInWithFacebook = createAction('[Auth] Sign In with Facebook', props<{ user: User | null }>());
export const signInWithGoogle = createAction('[Auth] Sign In with Google', props<{ user: User | null }>());

// logout action
export const logout = createAction('[Authentication] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');


