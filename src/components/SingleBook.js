import React from 'react';
import { renderBook, renderCharacters, getCharacter, renderPovCharacters, reset } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class SingleBook extends React.Component{
    async componentDidMount() {
        await this.props.renderBook(this.props.match.params.id);
        if(this.props.book[10]) {
            for ( const povChar of this.props.book[10]) {
                if (povChar.length <= 49) {
                await this.props.renderPovCharacters(povChar.toString().slice(45))
                } else if (povChar.length > 49) {
                    await this.props.renderPovCharacters(povChar.toString().slice(49))
                }
        }
    }
        if (this.props.book[9]) {
            for ( const char of this.props.book[9]) {
                if (char.length <= 49) {
                await this.props.renderCharacters(char.toString().slice(45))
            } else if (char.length > 49) {
                await this.props.renderPovCharacters(char.toString().slice(49))
            }
            }
        }
    }

    render() {
        const book = this.props.book;

        const renderChars = this.props.characters ? this.props.characters.map(char => {
            const route = char.url.length <= 49 ? char.url.toString().slice(45) : char.url.toString().slice(49)
            const namePicker = char.name ? char.name : char.aliases[0]
            return <span><Link to={`/characters/${route}`} className="list__link">{namePicker}, </Link></span>
            }) : null

        const renderPovChars = this.props.povChars ? this.props.povChars.map(povChar => {
            const route = povChar.url.length <= 49 ? povChar.url.toString().slice(45) : povChar.url.toString().slice(49)
            const namePicker = povChar.name ? povChar.name : povChar.aliases[0]
            return <span><Link to={`/characters/${route}`} className="list__link">{namePicker}, </Link></span>
            }) : null

        return (
            <div className="container__element">
                <h1 className="heading-tertiary">{book[1]}</h1>
                <p className="list__item">ISBN: {book[2]}</p>
                <p className="list__item">Authors: {book[3]}</p>
                <p className="list__item">Number of pages: {book[4]}</p>
                <p className="list__item">Publisher: {book[5]}</p>
                <p className="list__item">Country: {book[6]}</p>
                <p className="list__item">Media type: {book[7]}</p>
                <p className="list__item">Released: {book[8]}</p>
                {book[10] != "" && <p className="list__item">Pov characters: {renderPovChars}</p>}
                <p className="list__item">Characters: {renderChars}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        book: Object.values(state.book),
        povChars: Object.values(state.povChars.arr),
        characters: Object.values(state.characters.arr)
    }
}

export default connect(mapStateToProps, { renderBook, getCharacter, reset, renderCharacters, renderPovCharacters })(SingleBook);