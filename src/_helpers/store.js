import {createStore, combineReducers,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authenticationReducer} from '../_reducers/authentication';
import {stageReducer} from '../_reducers/stage';
import {connectionReducer} from '../_reducers/connection';
import {subscriberReducer} from '../_reducers/subscriber';

const reducers = combineReducers({
    authentication: authenticationReducer,
    stage: stageReducer,
    connection: connectionReducer,
    subscribers: subscriberReducer
})

export let store = createStore(reducers, applyMiddleware(thunk));