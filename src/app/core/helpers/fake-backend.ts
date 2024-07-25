import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {
    invoicesList,
    events,
    filerecent,
    todoList,
    kanbanData
} from 'src/app/core/data/index';
import { contactData } from 'src/app/core/data/contact';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // tslint:disable-next-line: max-line-length
        const users: any[] = JSON.parse(localStorage.getItem('users')!) || [{ username: 'admin', email: 'admin@themesbrand.com', password: '123456' }];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const filteredUsers = users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return of(new HttpResponse({ status: 200, body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    // tslint:disable-next-line: no-shadowed-variable
                    const matchedUsers = users.filter(user => user.id === id);
                    const user = matchedUsers.length ? matchedUsers[0] : null;

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                const newUser = request.body;

                // validation
                const duplicateUser = users.filter(user => user.username === newUser.username).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

             // get Invoice
             if (request.url.endsWith('/app/invoice') && request.method === 'GET') {
                if (invoicesList) {
                    return of(new HttpResponse({ status: 200, body: invoicesList }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // delete Invoice
            if (request.url.endsWith('/app/invoice') && request.method === 'DELETE') {
                const updatedUser = request.body;
                if (invoicesList) {
                    return of(new HttpResponse({ status: 200, body: updatedUser })); // respond 200 OK
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }


            // get contact
            if (request.url.endsWith('/contact') && request.method === 'GET') {
                if (contactData) {
                    return of(new HttpResponse({ status: 200, body: contactData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Add contact
            if (request.url.endsWith('/app/contact') && request.method === 'POST') {
                const newUser = request.body;
                if (contactData) {
                    return of(new HttpResponse({ status: 200, body: newUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Update contact
            if (request.url.endsWith('/app/contact') && request.method === 'PUT') {
                const updatedUser = request.body;
                if (contactData) {
                    return of(new HttpResponse({ status: 200, body: updatedUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // delete contact
            if (request.url.endsWith('/app/contact') && request.method === 'DELETE') {
                const updatedUser = request.body;
                if (contactData) {
                    return of(new HttpResponse({ status: 200, body: updatedUser })); // respond 200 OK
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get Calnedar
            if (request.url.endsWith('/app/calendar') && request.method === 'GET') {
                if (events) {
                    return of(new HttpResponse({ status: 200, body: events }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Add Calnedar
            if (request.url.endsWith('/app/calendar') && request.method === 'POST') {
                const newUser = request.body;
                if (events) {
                    return of(new HttpResponse({ status: 200, body: newUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Update Calnedar
            if (request.url.endsWith('/app/calendar') && request.method === 'PUT') {
                const updatedUser = request.body;
                if (events) {
                    return of(new HttpResponse({ status: 200, body: updatedUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // delete Calnedar
            if (request.url.endsWith('/app/calendar') && request.method === 'DELETE') {
                const updatedUser = request.body;
                if (events) {
                    return of(new HttpResponse({ status: 200, body: updatedUser })); // respond 200 OK
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

             // get File Manager
             if (request.url.endsWith('/app/file') && request.method === 'GET') {
                if (filerecent) {
                    return of(new HttpResponse({ status: 200, body: filerecent }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Todo
            if (request.url.endsWith('/app/todo') && request.method === 'GET') {
                if (todoList) {
                    return of(new HttpResponse({ status: 200, body: todoList }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Add Todo
            if (request.url.endsWith('/app/todo') && request.method === 'POST') {
                const newUser = request.body;
                if (todoList) {
                    return of(new HttpResponse({ status: 200, body: newUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Update Todo
            if (request.url.endsWith('/app/todo') && request.method === 'PUT') {
                const updatedUser = request.body;
                if (todoList) {
                    return of(new HttpResponse({ status: 200, body: updatedUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // delete Todo
            if (request.url.endsWith('/app/todo') && request.method === 'DELETE') {
                const updatedUser = request.body;
                if (todoList) {
                    return of(new HttpResponse({ status: 200, body: updatedUser })); // respond 200 OK
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get Kanban
            if (request.url.endsWith('/app/kanban') && request.method === 'GET') {
                if (kanbanData) {
                    return of(new HttpResponse({ status: 200, body: kanbanData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Add Kanban
            if (request.url.endsWith('/app/kanban') && request.method === 'POST') {
                const newUser = request.body;
                if (todoList) {
                    return of(new HttpResponse({ status: 200, body: newUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }


            // pass through any requests not handled above
            return next.handle(request);

        }))

            // tslint:disable-next-line: max-line-length
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}
