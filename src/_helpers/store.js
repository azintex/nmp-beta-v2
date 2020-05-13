import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authenticationReducer} from '../_reducers/authentication';

export let store = createStore(authenticationReducer, applyMiddleware(thunk));