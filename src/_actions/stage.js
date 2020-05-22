import {STAGE} from '../_constants/index';

export function toStage(stage) {
    return {
        type: STAGE.TO,
        stage
    }
}

export function fromStage(stage) {
    return {
        type: STAGE.FROM,
        stage
    }
}