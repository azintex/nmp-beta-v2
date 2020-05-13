import {ACTIONS} from '../_constants/index';
import cfg from 'config';


export function signIn(credentials) {
    return dispatch => {
        fetch(`${cfg.apiUrl}/auth2`, {method: 'POST', body: credentials})
        .then(response => {return response.json()})
        .then(jsonData => {if(jsonData.message){
            dispatch(failure(jsonData));
        }
        else{
            dispatch(success(jsonData));
        }})
    }

    function success(payload) {
        return {
            type: ACTIONS.AUTH_SUCCESS,
            payload
        }
    }

    function failure(message) {
        return {
            type: ACTIONS.AUTH_FAILURE,
            message
        }
    }
}

export function signOut() {
    return {
        type: ACTIONS.SIGN_OUT
    }
}