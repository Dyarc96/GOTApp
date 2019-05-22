import React from 'react';
import { connect } from 'react-redux';
import { getCharacter, renderFather, renderMother, renderAllegiances, renderPovBooks, renderBooks, renderSpouse, reset } from '../actions';
import { Link } from 'react-router-dom';
import './App.css';

class SingleCharacter extends React.Component {
    async componentDidMount() {
        this.props.reset()
        await this.props.getCharacter(this.props.match.params.id);
        if (this.props.character) {
            // FATHER
            if (this.props.character[8]) {
                if (this.props.character[8].length < 49)
                await this.props.renderFather(this.props.character[8].toString().slice(45));
                else if (this.props.character[8].length >= 49 )
                await this.props.renderFather(this.props.character[8].toString().slice(49));
                else
                return null
            }
            // MOTHER
            if (this.props.character[9]) {
                if (this.props.character[9].length < 49)
                await this.props.renderMother(this.props.character[9].toString().slice(45));
                else if (this.props.character[9].length >= 49 )
                await this.props.renderMother(this.props.character[9].toString().slice(49));
                else
                return null
            }
            // SPOUSE
            if (this.props.character[10]) {
                if (this.props.character[10].length <= 49)
                await this.props.renderSpouse(this.props.character[10].toString().slice(45));
                else if (this.props.character[10].length > 49 )
                await this.props.renderSpouse(this.props.character[10].toString().slice(49));
                else
                return null
            }
            // ALLEGIANCES
            if (this.props.character[11]) {
                for(const allegiance of this.props.character[11])
                await this.props.renderAllegiances(allegiance.toString().slice(45))
            }
            if(this.props.character[12]) {
                for (const book of this.props.character[12]) {
                    if(book.length <= 42)
                        await this.props.renderBooks(book.toString().slice(40))
                    else if(book.length > 43)
                        await this.props.renderBooks(book.toString().slice(44))    
            }
            }
            if(this.props.character[13]) {
                for (const book of this.props.character[13]) {
                    if(book.length <= 42)
                        await this.props.renderBooks(book.toString().slice(40))
                            else if(book.length > 43)
                        await this.props.renderBooks(book.toString().slice(44))  
                }
            }
        }
    }

    async componentDidUpdate(prevProps) {
        const route = prevProps.history.location.pathname.toString().slice(12);
        if (route !== prevProps.match.params.id) {
            this.props.reset();
            await this.props.getCharacter(route)
            if (this.props.character) {
                // FATHER
                if (this.props.character[8]) {
                    if (this.props.character[8].length < 49)
                    await this.props.renderFather(this.props.character[8].toString().slice(45));
                    else if (this.props.character[8].length >= 49 )
                    await this.props.renderFather(this.props.character[8].toString().slice(49));
                    else
                    return null
                }
                // MOTHER
                if (this.props.character[9]) {
                    if (this.props.character[9].length < 49)
                    await this.props.renderMother(this.props.character[9].toString().slice(45));
                    else if (this.props.character[9].length >= 49 )
                    await this.props.renderMother(this.props.character[9].toString().slice(49));
                    else
                    return null
                }
                // SPOUSE
                if (this.props.character[10]) {
                    if (this.props.character[10].length <= 49)
                    await this.props.renderSpouse(this.props.character[10].toString().slice(45));
                    else if (this.props.character[10].length > 49 )
                    await this.props.renderSpouse(this.props.character[10].toString().slice(49));
                    else
                    return null
                }
                
                // ALLEGIANCES
                if (this.props.character[11]) {
                    for(const allegiance of this.props.character[11])
                    await this.props.renderAllegiances(allegiance.toString().slice(45))
                }

                if(this.props.character[12]) {
                    for (const book of this.props.character[12])
                    await this.props.renderBooks(book.toString().slice(44))
                }

                if(this.props.character[13]) {
                    for (const book of this.props.character[13])
                    await this.props.renderPovBooks(book.toString().slice(44))
                }
            }
        }
    }

    render() {
        const character = this.props.character;

        const renderTitles = character[6] ? (character[6].length === 1 ? character[6] :character[6].map((element, index) => {
            return <span key={index}>{element}, </span>
        })) : null

        const renderFatherLink = character[8] ?
        (character[8].length <= 49 ? character[8].toString().slice(45) : character[8].toString().slice(49)) : null;

        const renderMotherLink = character[9] ? 
        (character[9].length <= 49 ? character[9].toString().slice(45) : character[9].toString().slice(49)) : null;

        const renderSpouseLink = character[10] ?
        (character[10].length <= 49 ? character[10].toString().slice(45) : character[10].toString().slice(49)) : null;

        const renderTvSeries = character[14] ? character[14].map((element, index) => {
            return <span key={index}>{element}, </span>
        }) : null

        const listBooks = this.props.books.length > 0 ? this.props.books.map((povChar, index) => {
            console.log(povChar)
            const route = povChar.url.length <= 44 ? povChar.url.toString().slice(41) : povChar.url.toString().slice(44)
            const namePicker = povChar.name ? povChar.name : povChar.aliases[0]
            return <span key={index}><Link to={`/books/${route}`} className="list__link">{namePicker}, </Link></span>
            }) : null
        
        const listPovBooks = this.props.povBooks.length > 0 ? this.props.povBooks.map((povChar, index) => {
            const route = povChar.url.length <= 44 ? povChar.url.toString().slice(41) : povChar.url.toString().slice(44)
            const namePicker = povChar.name ? povChar.name : povChar.aliases[0]
            return <span key={index}><Link to={`/books/${route}`} className="list__link">{namePicker}, </Link></span>
            }) : null


        const renderAllegiances = this.props.allegiances.length > 0 ? this.props.allegiances.map((element, index) => {
            const elementUrl = (element.url ? (element.url.length < 49 ? element.url.toString().slice(45) : element.url.toString().slice(49)) : null);
            return <span key={index}><Link to={`/houses/${elementUrl}`} className="list__link">{element.name}, </Link></span>
        }) : null

        return (
            <div className="container__element">
                {character[1] && <h1 className="heading-tertiary">{character[1]}</h1>}
                {!character[1] && <h1 className="heading-tertiary">{character[7]}</h1>}
                {character[2] && <p>Gender: {character[2]}</p>}
                {character[3] && <p>Culture: {character[3]}</p>}
                {character[4] && <p>Born: {character[4]}</p>}
                {character[5] && <p>Died: {character[5]}</p>}
                {character[6] != "" && <p>Titles: {renderTitles}</p>}
                {character[8] && <p >Father: <Link to={`/characters/${renderFatherLink}`} className="list__link" >{this.props.father[1]}</Link></p>}
                {character[9] && <p>Mother: <Link to={`/characters/${renderMotherLink}`} className="list__link" >{this.props.mother[1]}</Link></p>}
                {character[10] && <p>Spouse: <Link to={`/characters/${renderSpouseLink}`} className="list__link" >{this.props.spouse[1]}</Link></p>}
                {character[11] != "" && <p>Allegiances: {renderAllegiances}</p>}
                {character[12] != "" && <p>Books: {listBooks}</p>}
                {character[13] != "" && <p>povBooks: {listPovBooks}</p>}
                {character[14] != "" && <p>Tv Series: {renderTvSeries}</p>}
                {character[15] != "" && <p>Played by: {character[15]}</p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        character: Object.values(state.character),
        father: Object.values(state.father),
        mother: Object.values(state.mother),
        spouse: Object.values(state.spouse),
        books: Object.values(state.books.arr),
        povBooks: Object.values(state.povBooks.arr),
        allegiances: Object.values(state.allegiances.arr)
    }
}

export default connect(mapStateToProps, { getCharacter, renderFather, reset, renderMother, renderBooks, renderSpouse, renderPovBooks, reset, renderAllegiances })(SingleCharacter);