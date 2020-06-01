import {NEW_SUBSCRIBER} from '../_constants/index';
import cfg from 'config';

export function fetchSubscribers() {
    return dispatch => {
        fetch(`${cfg.apiUrl}/subscribers`, {method: 'GET'})
        .then(response => response.json())
        .then(jsonData => {
            if(jsonData.message) {
                dispatch(failure(jsonData));
            }
            else {
                dispatch(fetched(jsonData));
            }
        })
    }
}



export function newSubscriber(subscriber) {
    return dispatch => {
        fetch(`${cfg.apiUrl}/subscriber`, {method: 'POST', body: subscriber})
        .then(response => response.json())
        .then(jsonData => {
            if(jsonData.message) {
                dispatch(failure(jsonData));
            }
            else {
                dispatch(success(jsonData));
            }
        })
    }
}

function failure(message) {
    return {
        type: NEW_SUBSCRIBER.FAILURE,
        message
    }
}

function success(payload) {
    return {
        type: NEW_SUBSCRIBER.SUCCESS,
        payload
    }
}

function fetched(payload) {
    return {
        type: 'FETCHED',
        payload
    }
}