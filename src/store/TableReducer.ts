import {
    Data,
    Loading,
    Page,
    SearchQuery,
    Sort,
    TableState,
} from "./types";
import { TableActions } from '../consts/actions';

export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc',
    OFF = 'off'
}
  
const defaultState: TableState = {
  data: [],
  searchQuery: '',
  page: 1,
  loading: false,
  sortBy: 'id',
  sortOrder: SortOrder.ASC,
}

export const reducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case TableActions.SET_DATA:
        return { ...state, data: [...action.payload.data]}
    case TableActions.SET_LOADING:
        return { ...state, loading: action.payload.loading};
    case TableActions.TO_NEXT_PAGE:
        return { ...state, page: action.payload.page + 1};
    case TableActions.TO_PREV_PAGE:
        return { ...state, page: action.payload.page - 1};
    case TableActions.TO_FIRST_PAGE:
        return { ...state, page: action.payload.page};
    case TableActions.TO_LAST_PAGE:
        return { ...state, page: action.payload.page};
    case TableActions.SEARCH:
        return { ...defaultState, searchQuery: action.payload.searchQuery }
    case TableActions.SORT:
        return {
            ...defaultState, 
            sortBy: action.payload.sortBy,
            sortOrder: action.payload.sortOrder,
        }
    default:
        return state;
    }
};

export const setDataAction = (payload: Data) => ({ type: TableActions.SET_DATA, payload })
export const setLoadingAction = (payload: Loading) => ({ type: TableActions.SET_LOADING, payload })
export const toNextPageAction = (payload: Page) => ({ type: TableActions.TO_NEXT_PAGE, payload });
export const toPrevPageAction = (payload: Page) => ({ type: TableActions.TO_PREV_PAGE, payload });
export const toFirstPageAction = (payload: Page) => ({ type: TableActions.TO_FIRST_PAGE, payload });
export const toLastPageAction = (payload: Page) => ({ type: TableActions.TO_LAST_PAGE, payload });
export const searchAction = (payload: SearchQuery) => ({ type: TableActions.SEARCH, payload })
export const sortAction = (payload: Sort) => ({ type: TableActions.SORT, payload });
