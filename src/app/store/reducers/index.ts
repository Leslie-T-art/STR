import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromLayout from "./layout-reducers";
import { authenticationReducer, AuthenticationState } from './authentication.reducer';
import { InvoiceReducer, InvoiceState } from "./invoice-reducer";
import { ContactReducer, ContactState } from "./contact-reducer";
import { CalendarState, calendarReducer } from "./calendar.reducer";
import { FileReducer, FileState } from "./filemanager-reducer";
import { ToDoReducer, ToDoState } from "./to-do-reducer";
import { KanbanReducer, KanbanState } from "./kanban-reducer";

export interface RootReducerState {
    layout: fromLayout.LayoutState;
    authentication: AuthenticationState;
    invoice: InvoiceState;
    contact: ContactState;
    calendar: CalendarState;
    files: FileState;
    todo: ToDoState;
    kanban:KanbanState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: fromLayout.layoutReducer,
    authentication: authenticationReducer,
    invoice: InvoiceReducer,
    contact: ContactReducer,
    calendar: calendarReducer,
    files: FileReducer,
    todo: ToDoReducer,
    kanban:KanbanReducer
}

// Create a selector to retrieve the initial Layout state
export const getLayoutState = (state: RootReducerState) => state.layout;

export const getLayoutTheme = createSelector(getLayoutState, fromLayout.getLayoutTheme)
export const getLayoutMode = createSelector(getLayoutState, fromLayout.getLayoutMode)
export const getLayoutWith = createSelector(getLayoutState, fromLayout.getLayoutWidth)
export const getLayoutPosition = createSelector(getLayoutState, fromLayout.getLayoutPosition)
export const getTopbarColor = createSelector(getLayoutState, fromLayout.getTopbarColor)
export const getSidebarSize = createSelector(getLayoutState, fromLayout.getSidebarSize)
export const getSidebarView = createSelector(getLayoutState, fromLayout.getSidebarView)
export const getSidebarColor = createSelector(getLayoutState, fromLayout.getSidebarColor)
export const getSidebarImage = createSelector(getLayoutState, fromLayout.getSidebarImage)
export const getPreloader = createSelector(getLayoutState, fromLayout.getPreloader)

// Create a selector to retrieve the initial Authentication state
export const getAuthenticationState = (state: RootReducerState) => state.authentication;

// Select the isLoggedIn property from the authentication state
export const selectIsLoggedIn = createSelector(getAuthenticationState, (state: AuthenticationState) => state.isLoggedIn);

// Select the user property from the authentication state
export const selectUser = createSelector(getAuthenticationState, (state: AuthenticationState) => state.user);

// Select the error property from the authentication state
export const selectError = createSelector(getAuthenticationState, (state: AuthenticationState) => state.error);
