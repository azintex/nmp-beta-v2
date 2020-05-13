import {ACTIONS} from '../_constants/index';

export function authenticationReducer(state = {success: false}, action) {
    switch (action.type) {
        case ACTIONS.AUTH_SUCCESS:
            return Object.assign({}, {...action.payload});
        case ACTIONS.AUTH_FAILURE:
            return Object.assign({}, {state, ...action.message});
        case ACTIONS.SIGN_OUT:
            return Object.assign({}, {success: false});
        default:
            return state;
    }
}