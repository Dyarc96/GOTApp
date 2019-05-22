import _ from 'lodash';
import {
    LIST_ALL_BOOKS,
    LIST_ALL_CHARS,
    LIST_ALL_HOUSES
} from '../actions/types';

const initialState = {
    houses: [],
    characters: [],
    books: []
}

export const bookListReducer = (state = initialState, action) => {
    if (action.type === LIST_ALL_BOOKS) {
        return {
            ...state,
            books: [...state.books, action.payload]
        }
    } else {
        return state
    }
}

export const characterListReducer = (state = initialState, action) => {
    if (action.type === LIST_ALL_CHARS) {
        return {
            ...state,
            characters: [...state.characters, action.payload]
        }
    } else {
        return state
    }
}

export const houseListReducer = (state = initialState, action) => {
    if (action.type === LIST_ALL_HOUSES) {
        return {
            ...state,
            houses: [...state.houses, action.payload]
        }
    } else {
        return state
    }
}