import {
    RENDER_CHARACTERS,
    GET_BOOK,
    RENDER_POV_CHARACTERS,
} from '../actions/types';

const initialState = {
        povChars: [],
        chars: []
}

export const povCharacterReducer = (state = initialState, action) => {
    if (action.type === RENDER_POV_CHARACTERS) {
        return {
            ...state,
            povChars: [...state.povChars, action.payload]
        }
    } else {
        return state
    }
}

export const bookReducer = (state = initialState, action) => {
    if (action.type === GET_BOOK) {
        return {...action.payload}
    } else {
        return state
    }
}

export const charactersReducer = (state = initialState, action) => {
    if (action.type === RENDER_CHARACTERS) {
        return {
            ...state,
            chars: [...state.chars, action.payload]
        }
    } else {
        return state;
    }
}