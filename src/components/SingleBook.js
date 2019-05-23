import React from 'react';
import { renderBook, renderCharacters, getCharacter, renderPovCharacters, reset } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios';

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
                await this.props.renderCharacters(char.toString().slice(49))
            }
            }
        }
    }

    render() {
        const book = this.props.book;

        const renderChars = this.props.characters ? this.props.characters.map(char => {
            const charRoute = char.url.length <= 49 ? char.url.toString().slice(45) : char.url.toString().slice(49)
            const charNamePicker = char.name ? char.name : char.aliases[0]
            return <span><Link to={`/characters/${charRoute}`} className="list__link">{charNamePicker}, </Link></span>
            }) : null

        const renderPovChars = this.props.povChars ? this.props.povChars.map(povChar => {
            const route = povChar.url.length <= 49 ? povChar.url.toString().slice(45) : povChar.url.toString().slice(49)
            const namePicker = povChar.name ? povChar.name : povChar.aliases[0]
            return <span><Link to={`/characters/${route}`} className="list__link">{namePicker}, </Link></span>
            }) : null

        return (
            <div className="container__element">
                <h1 className="heading-tertiary">{book[1]}</h1>
                <p className="paragraph-secondary">ISBN: {book[2]}</p>
                <p className="paragraph-secondary">Authors: {book[3]}</p>
                <p className="paragraph-secondary">Number of pages: {book[4]}</p>
                <p className="paragraph-secondary">Publisher: {book[5]}</p>
                <p className="paragraph-secondary">Country: {book[6]}</p>
                <p className="paragraph-secondary">Media type: {book[7]}</p>
                <p className="paragraph-secondary">Released: {book[8]}</p>
                <p className="paragraph-secondary">Characters: {renderChars}</p>
                {book[10] != "" && <p className="paragraph-secondary">Pov characters: {renderPovChars}</p>}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        book: Object.values(state.book),
        povChars: Object.values(state.povChars.povChars),
        characters: Object.values(state.characters.chars)
    }
}

export default connect(mapStateToProps, { renderBook, getCharacter, reset, renderCharacters, renderPovCharacters })(SingleBook);