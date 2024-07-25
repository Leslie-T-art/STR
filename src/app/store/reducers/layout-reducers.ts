
import { Action, createReducer, on } from '@ngrx/store';
import { changelayoutTheme, changeMode, changeLayoutWidth, changeLayoutPosition, changeTopbar, changeSidebarSize, changeSidebarView, changeSidebarColor, changeSidebarImage, changeDataPreloader } from "src/app/store/actions/layout-action";
import { LAYOUT_TYPES, LAYOUT_MODE_TYPES, LAYOUT_SIDEBAR_TYPES, LAYOUT_WIDTH_TYPES, LAYOUT_POSITION_TYPES, LAYOUT_TOPBAR_THEME_TYPES, LEFT_SIDEBAR_SIZE_TYPES, LEFT_SIDEBAR_VIEW_TYPES, LEFT_SIDEBAR_IMAGE_TYPES, PERLOADER_TYPES } from '../../layout';

export interface LayoutState {
    LAYOUT_THEME: string;
    LAYOUT_MODE: string;
    LAYOUT_WIDTH: string;
    LAYOUT_POSITION: string;
    TOPBAR: string;
    SIDEBAR_SIZE: string;
    SIDEBAR_VIEW: string;
    SIDEBAR_COLOR: string;
    SIDEBAR_IMAGE: string;
    DATA_PRELOADER: string;
}

// IntialState
export const initialState: LayoutState = {
    LAYOUT_THEME: LAYOUT_TYPES.VERTICAL,
    LAYOUT_MODE: LAYOUT_MODE_TYPES.LIGHTMODE,
    LAYOUT_WIDTH: LAYOUT_WIDTH_TYPES.FLUID,
    LAYOUT_POSITION: LAYOUT_POSITION_TYPES.FIXED,
    TOPBAR: LAYOUT_TOPBAR_THEME_TYPES.WARNING,
    SIDEBAR_SIZE: LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER,
    SIDEBAR_VIEW: LEFT_SIDEBAR_VIEW_TYPES.DEFAULT,
    SIDEBAR_COLOR: LAYOUT_SIDEBAR_TYPES.DARK,
    SIDEBAR_IMAGE: LEFT_SIDEBAR_IMAGE_TYPES.NONE,
    DATA_PRELOADER: PERLOADER_TYPES.DISABLE
}

// Reducer
export const layoutReducer = createReducer(
    initialState,
    on(changelayoutTheme, (state, action) => ({ ...state, LAYOUT_THEME: action.layout })),
    on(changeMode, (state, action) => ({ ...state, LAYOUT_MODE: action.mode })),
    on(changeLayoutWidth, (state, action) => ({ ...state, LAYOUT_WIDTH: action.layoutWidth })),
    on(changeLayoutPosition, (state, action) => ({ ...state, LAYOUT_POSITION: action.layoutPosition })),
    on(changeTopbar, (state, action) => ({ ...state, TOPBAR: action.topbarColor })),
    on(changeSidebarSize, (state, action) => ({ ...state, SIDEBAR_SIZE: action.sidebarSize })),
    on(changeSidebarView, (state, action) => ({ ...state, SIDEBAR_VIEW: action.sidebarView })),
    on(changeSidebarColor, (state, action) => ({ ...state, SIDEBAR_COLOR: action.sidebarColor })),
    on(changeSidebarImage, (state, action) => ({ ...state, SIDEBAR_IMAGE: action.sidebarImage })),
    on(changeDataPreloader, (state, action) => ({ ...state, DATA_PRELOADER: action.Preloader }))
);

// Selector
export const getLayoutTheme = (state: LayoutState) => state.LAYOUT_THEME;
export const getLayoutMode = (state: LayoutState) => state.LAYOUT_MODE;
export const getLayoutWidth = (state: LayoutState) => state.LAYOUT_WIDTH;
export const getLayoutPosition = (state: LayoutState) => state.LAYOUT_POSITION;
export const getTopbarColor = (state: LayoutState) => state.TOPBAR;
export const getSidebarSize = (state: LayoutState) => state.SIDEBAR_SIZE;
export const getSidebarView = (state: LayoutState) => state.SIDEBAR_VIEW;
export const getSidebarColor = (state: LayoutState) => state.SIDEBAR_COLOR;
export const getSidebarImage = (state: LayoutState) => state.SIDEBAR_IMAGE;
export const getPreloader = (state: LayoutState) => state.DATA_PRELOADER;
