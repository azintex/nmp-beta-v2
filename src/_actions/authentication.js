import {AUTH} from '../_constants/index';
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
            type: AUTH.SUCCESS,
            payload
        }
    }

    function failure(message) {
        return {
            type: AUTH.FAILURE,
            message
        }
    }
}

export function signOut() {
    return {
        type: AUTH.SIGN_OUT
    }
}