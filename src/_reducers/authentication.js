import {AUTH} from '../_constants/index';

let initState = {};

export function authenticationReducer(state = initState, action) {
    switch (action.type) {
        case AUTH.SUCCESS:
            return Object.assign({}, state, {...action.payload});
        case AUTH.FAILURE:
            return Object.assign({}, state, {...action.message});
        case AUTH.SIGN_OUT:
            return Object.assign({}, initState);
        default:
            return state;
    }
}