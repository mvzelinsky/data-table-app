interface TableState {
  searchQuery: string,
  page: number,
  loading: boolean,
}

interface IPage {
    page: number,
}
interface ISearchQuery {
    searchQuery: string;
}
  
const defaultState: TableState = {
  searchQuery: '',
  page: 1,
  loading: false
}
 
const TO_NEXT_PAGE = 'TO_NEXT_PAGE';
const TO_PREV_PAGE = 'TO_PREV_PAGE'
const TO_FIRST_PAGE = 'TO_FIRST_PAGE';
const TO_LAST_PAGE = 'TO_LAST_PAGE';
const SEARCH = 'SEARCH';

export const reducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case TO_NEXT_PAGE:
        return { ...state, page: action.payload.page + 1};
    case TO_PREV_PAGE:
        return { ...state, page: action.payload.page - 1};
    case TO_FIRST_PAGE:
        return { ...state, page: action.payload.page};
    case TO_LAST_PAGE:
        return { ...state, page: action.payload.page};
    case SEARCH:
        return { ...defaultState, searchQuery: action.payload.searchQuery }
    default:
        return state;
    }
};
  
export const toNextPageAction = (payload: IPage) => ({ type: TO_NEXT_PAGE, payload});
export const toPrevPageAction = (payload: IPage) => ({ type: TO_PREV_PAGE, payload});
export const toFirstPageAction = (payload: IPage) => ({ type: TO_FIRST_PAGE, payload});
export const toLastPageAction = (payload: IPage) => ({ type: TO_LAST_PAGE, payload});
export const searchAction = (payload: ISearchQuery) => ({ type: SEARCH, payload })
