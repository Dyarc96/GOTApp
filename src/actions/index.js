import gotapi from '../api/gotapi';
import axios from 'axios';
import {
    RESET,
    LIST_ALL_BOOKS,
    LIST_ALL_CHARS,
    LIST_ALL_HOUSES,
    GET_BOOK,
    GET_HOUSE,
    GET_CHARACTER,
    GET_OVERLORD,
    GET_CURRENT_LORD,
    GET_FOUNDER,
    GET_BOOK_LINK,
    GET_CADET_BRANCHES,
    GET_HEIR,
    GET_FATHER,
    GET_MOTHER,
    GET_ALLEGIANCES,
    GET_SPOUSE,
    GET_POV_BOOKS,
    GET_BOOKS,
    RENDER_CHARACTERS,
    RENDER_POV_CHARACTERS
} from './types';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// ESSENTIALS - LISTING ALL PAGE

export const listAllBooks = () => async dispatch => {
    const response = await gotapi.get('books');

    dispatch({ type: LIST_ALL_BOOKS, payload: response.data})
}

export const listAllChars =  (i) => async dispatch =>{
    const response = await gotapi.get(`characters?page=${i}&pageSize=50`);

    dispatch({ type: LIST_ALL_CHARS, payload: response.data });
}

export const listAllHouses = (i) => async dispatch => {
    const response = await gotapi.get(`houses?page=${i}&pageSize=50`)
   
    dispatch({ type: LIST_ALL_HOUSES, payload: response.data });
}

export const renderMembers = id => async dispatch => {
    const response = await gotapi.get(`characters/${id}`)

    dispatch({ type: 'GET_MEMBERS', payload: response.data})
}

// GET SPECIFIC ELEMENT

export const getCharacter = id => async dispatch =>{
    const response = await gotapi.get(`characters/${id}`)

    dispatch({ type: GET_CHARACTER, payload: response.data })
}

export const renderHouse = id => async dispatch => {
    const response = await gotapi.get(`houses/${id}`);

    dispatch({ type: GET_HOUSE, payload: response.data });
}

export const renderBook = (id) => async dispatch => {
    const response = await gotapi.get(`books/${id}`, {});
    
    dispatch({ type: GET_BOOK, payload: response.data });
}

// GET HOUSE ELEMENTS

export const renderOverlord = id => async dispatch => {
    const response = await gotapi.get(`houses/${id}`);

    dispatch({ type: GET_OVERLORD, payload: response.data})
}

export const renderFounder = id => async dispatch => {
    const response = await gotapi.get(`characters/${id}`);

    dispatch({ type: GET_FOUNDER, payload: response.data})
}

export const renderCurrentLord = id => async dispatch => {
    const response = await gotapi.get(`characters/${id}`);

    dispatch({ type: GET_CURRENT_LORD, payload: response.data})
}

export const renderBookLink = id => async dispatch => {
    const response = await gotapi.get(`books/${id}`);

    dispatch({ type: GET_BOOK_LINK, payload: response.data})
}

export const renderCadetBranches = id => async dispatch => {
    const response = await gotapi.get(`houses/${id}`)

    dispatch({ type: GET_CADET_BRANCHES, payload: response.data})
}

export const renderHeir = id => async dispatch => {
    const response = await gotapi.get(`characters/${id}`);

    dispatch({ type: GET_HEIR, payload: response.data})
}


//SINGLECHARACTER ACTION CREATORS

export const renderFather = id => async dispatch => {
    const response = await gotapi.get(`characters/${id}`);

    dispatch({ type: GET_FATHER, payload: response.data });
}

export const renderMother = id => async dispatch => {
    const response = await gotapi.get(`characters/${id}`);

    dispatch({ type: GET_MOTHER, payload: response.data })
}

export const renderAllegiances = id => async dispatch => {
    const response = await gotapi.get(`houses/${id}`)
    
    dispatch({ type: GET_ALLEGIANCES, payload: response.data })
}

export const renderPovBooks = id => async dispatch => {
    const response = await gotapi.get(`books/${id}`)

    dispatch({ type: GET_POV_BOOKS, payload: response.data })
}

export const renderBooks = id => async dispatch => {
    const response = await gotapi.get(`books/${id}`)

    dispatch({ type: GET_BOOKS, payload: response.data })
}

export const renderSpouse = id => async dispatch => {
    const response = await gotapi.get(`characters/${id}`);

    dispatch({ type: GET_SPOUSE, payload: response.data})
}

// SINGLE BOOK

export const renderCharacters = (id) => async dispatch => {
    const response = await gotapi.get(`characters/${id}`)

    dispatch({ type: RENDER_CHARACTERS, payload: response.data})
}

export const renderPovCharacters = (id) => async dispatch => {
    const response = await gotapi.get(`characters/${id}`)

    dispatch({ type: RENDER_POV_CHARACTERS, payload: response.data})
}

// MAIN HANDLE

export const reset = () => {
    return {
        type: RESET
    }
}