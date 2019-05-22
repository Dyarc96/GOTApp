import { combineReducers } from 'redux';
import { bookListReducer, houseListReducer, characterListReducer } from './listReducers';
import { founderReducer, houseReducer, currentLordReducer, overlordReducer, membersReducer, cadetReducer, heirReducer } from './singleHouseReducers';
import { allegiancesReducer, characterReducer, fatherReducer, motherReducer, spouseReducer, povBooksReducer, booksReducer } from './singleCharacterReducers';
import { povCharacterReducer, bookReducer, charactersReducer } from './singleBookReducers';

const appReducer = combineReducers({
    bookList: bookListReducer,
    houseList: houseListReducer,
    characterList: characterListReducer,
    povChars: povCharacterReducer,
    characters: charactersReducer,
    book: bookReducer,
    books: booksReducer,
    povBooks: povBooksReducer,
    house: houseReducer,
    character: characterReducer,
    founder: founderReducer,
    currentLord: currentLordReducer,
    overlord: overlordReducer,
    cadets: cadetReducer,
    heir: heirReducer,
    members: membersReducer,
    father: fatherReducer,
    mother: motherReducer,
    spouse: spouseReducer,
    allegiances: allegiancesReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined
    } else {
        return appReducer(state, action)
    }
}



export default rootReducer