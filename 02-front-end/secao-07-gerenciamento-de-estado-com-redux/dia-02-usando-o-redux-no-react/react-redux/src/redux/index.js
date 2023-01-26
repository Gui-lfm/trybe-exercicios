import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({counterReducer})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
