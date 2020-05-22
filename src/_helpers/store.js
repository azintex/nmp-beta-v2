import {createStore, combineReducers,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authenticationReducer} from '../_reducers/authentication';
import {connectionReducer} from '../_reducers/connection';

const reducers = combineReducers({
    authentication: authenticationReducer,
    connection: connectionReducer
})

export let store = createStore(reducers, applyMiddleware(thunk));