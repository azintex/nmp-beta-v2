import {STAGE} from '../_constants/index';

let initState = {
    labels: ['Connection'],
    initial: true,
    connection: false,
    customer: false
}

export function stageReducer(state = initState, action) {
    switch (action.type) {
        case STAGE.TO:
            return Object.assign({}, state, action.stage);
            break;
        case STAGE.FROM:
            return Object.assign({}, state, action.stage);
            break;
        default:
            return state;
    }
}