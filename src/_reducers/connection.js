import {CONNECTION} from '../_constants/index';

const initState = {
    stage: {
        initial: 'subscriber',
        current: '',
        to: '',
        from: '',
    }
}

export function connectionReducer(state = initState, action) {
    switch (action.type) {
        case CONNECTION.TO_STAGE:
            return Object.assign({}, state, {...action.stage});
        case CONNECTION.FROM_STAGE:
            return Object.assign({}, state, action.stage);
        default:
            return state;
    }
}