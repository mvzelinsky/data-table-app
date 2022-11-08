import { legacy_createStore as createStore} from 'redux';
import { reducer } from './TableReducer';

export const store = createStore(reducer);
