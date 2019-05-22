const initialState = {
    arr: []
}


export const povBooksReducer = (state = initialState, action) => {
    if (action.type === 'GET_POV_BOOKS') {
        return {
            arr: initialState,
            arr: [...state.arr, action.payload]
        }
    } else {
        return state
    }
}

export const booksReducer = (state = initialState, action) => {
    if (action.type === 'GET_BOOKS') {
        return {
            arr: initialState,
            arr: [...state.arr, action.payload]
        }
    } else {
        return state
    }
}

export const allegiancesReducer = (state = initialState, action) => {
    if (action.type === 'GET_ALLEGIANCES') {
        return {
            arr: initialState,
            arr: [...state.arr, action.payload]
        }
    } else {
        return state
    }
}

export const fatherReducer = (state = {}, action) => {
    if (action.type === 'GET_FATHER') {
        return {...action.payload}
    } else {
        return state
    }
}

export const motherReducer = (state={}, action) => {
    if (action.type === 'GET_MOTHER') {
        return {...action.payload}
    } else {
        return state
    }
}

export const spouseReducer = (state={}, action) => {
    if (action.type === 'GET_SPOUSE') {
        return {...action.payload}
    } else {
        return state
    }
}

export const characterReducer = (state= {}, action) => {
    if (action.type === 'GET_CHARACTER') {
        return {...action.payload}
    } else {
        return state
    }
}

