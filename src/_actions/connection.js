import {CONNECTION} from '../_constants/index';

export function toStage(stage) {
    return {
        type: CONNECTION.TO_STAGE,
        stage
    }
}

export function fromStage(stage) {
    return {
        type: CONNECTION.FROM_STAGE,
        stage
    }
}

export function nextStage(stage) {
    return{
        type: CONNECTION.NEXT_STAGE,
        stage
    }
}

export function prevStage() {
    return{
        type: CONNECTION.PREV_STAGE,
        stage
    }
}