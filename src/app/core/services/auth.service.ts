import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../store/models/auth.models';
import { getFirebaseBackend } from 'src/app/authUtils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { GlobalComponent } from "../../global-component";

// Action
import { login, loginSuccess, loginFailure, logout, logoutSuccess, RegisterSuccess } from '../../store/actions/authentication.actions';

// Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';



const AUTH_API = GlobalComponent.AUTH_API;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user!: User;
    currentUserValue: any;

    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient, private store: Store, private afAuth: AngularFireAuth) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    }

    // Sign in with Google provider
    signInWithGoogle(): Promise<User> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.signInWithPopup(provider);
    }

    // Sign in with Facebook provider
    signInWithFacebook(): Promise<User> {
        const provider = new firebase.auth.FacebookAuthProvider();
        return this.signInWithPopup(provider);
    }

    // Sign in with a popup for the specified provider
    private async signInWithPopup(provider: firebase.auth.AuthProvider): Promise<User> {
        try {
            const result = await this.afAuth.signInWithPopup(provider);
            const user = result.user;
            return {
                //     uid: user.uid,
                //     displayName: user.displayName,
                //     email: user.email,
                //     // Add other user properties as needed
            };
        } catch (error) {
            throw new Error('Failed to sign in with the specified provider.');
        }
    }

    // Sign out the current user
    signOut(): Promise<void> {
        return this.afAuth.signOut();
    }


    register(email: string, first_name: string, password: string) {
        return this.http.post(AUTH_API + 'signup', {
            email,
            first_name,
            password,
        }, httpOptions).pipe(
            map((response: any) => {
                const user = response;
                this.store.dispatch(RegisterSuccess({ user }));
                return user;
            }),
            catchError((error: any) => {
                const errorMessage = 'Login failed'; // Customize the error message as needed
                this.store.dispatch(loginFailure({ error: errorMessage }));
                return throwError(errorMessage);
            })
        );
    }

    login(email: string, password: string) {
        this.store.dispatch(login({ email, password }));

        return this.http.post(AUTH_API + 'signin', {
            email,
            password
        }, httpOptions).pipe(
            map((response: any) => {
                const user = response;
                this.store.dispatch(loginSuccess({ user }));
                return user;
            }),
            catchError((error: any) => {
                const errorMessage = 'Login failed'; // Customize the error message as needed
                this.store.dispatch(loginFailure({ error: errorMessage }));
                return throwError(errorMessage);
            })
        );
    }

    logout(): Observable<void> {
        this.store.dispatch(logout());
        // Perform any additional logout logic, e.g., calling an API to invalidate the token

        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null!);
        this.store.dispatch(logoutSuccess());

        // Return an Observable<void> indicating the successful logout
        return of(undefined).pipe(
            tap(() => {
                // Perform any additional logic after the logout is successful
            })
        );
    }

    resetPassword(email: string) {
        return this.http.post(AUTH_API + 'reset-password', { email }, httpOptions);
    }

    /**
 * Returns the current user
 */
    public currentUser(): any {
        return getFirebaseBackend()!.getAuthenticatedUser();
    }
}