import {
    GET_OVERLORD,
    GET_FOUNDER,
    GET_CURRENT_LORD,
    GET_CADET_BRANCHES,
    GET_HEIR,
    GET_MEMBERS,
    GET_HOUSE
} from '../actions/types';

const initialState = {
    arr: []
}

export const overlordReducer = (state = {}, action) => {
    if (action.type === GET_OVERLORD) {
        return {...action.payload}
    } else {
        return state
    }
}

export const founderReducer = (state = {}, action) => {
    if (action.type === GET_FOUNDER) {
        return {...action.payload}
    } else {
        return state
    }
}

export const currentLordReducer = (state = {}, action) => {
    if (action.type === GET_CURRENT_LORD) {
        return {...action.payload}
    } else {
        return state
    }
}

export const cadetReducer = (state = initialState, action) => {
    if (action.type === GET_CADET_BRANCHES) {
        return {
            arr: initialState,
            arr: [...state.arr, action.payload]
        }
    } else {
        return state
    }
}

export const heirReducer = (state={}, action) => {
    if (action.type === GET_HEIR) {
        return {...action.payload}
    } else {
        return state;
    }
}

export const membersReducer = (state = initialState, action) => {
    if (action.type === GET_MEMBERS) {
        return {
            ...state,
            arr: [...state.arr, action.payload]
        }
    } else {
        return state
    }
}

export const houseReducer = (state = {}, action) => {
    if (action.type === GET_HOUSE) {
        return {...action.payload}
    } else {
        return state;
    }
}

