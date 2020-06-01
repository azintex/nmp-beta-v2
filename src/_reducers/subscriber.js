import {NEW_SUBSCRIBER} from '../_constants/index';

let initState = {};

export function subscriberReducer(state = initState, action) {
    switch (action.type) {
        case 'FETCHED':
            return Object.assign({}, state, {...action.payload});
        case NEW_SUBSCRIBER.SUCCESS:
            return Object.assign({}, state, {...action.payload});
        case NEW_SUBSCRIBER.FAILURE:
            return Object.assign({}, state, {...action.message});
        default:
            return state;
    }
}