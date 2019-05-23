import React from 'react';
import { listAllChars, reset } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import charImg from '../img/pics/114-user.svg';
import './App.css';

class CharacterList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  id: '', query: '' }
    }

    async componentDidMount() {
        for (let i = 1; i <= 43; i++) {
            await this.props.listAllChars(i);
        }
    }

    handleClick = (e) => {
        e.stopPropagation();
        this.setState({ id: e.currentTarget.id })
    }

    onInputChange = (e) => {
        this.setState({ query: e.target.value });
    }

    render() {
        const characters = this.props.characters;

        let mergedArrays = [].concat.apply([], characters);
        mergedArrays.forEach((item, i) => {
            item.id = i + 1
        })

        const filteredCharacters = mergedArrays ? mergedArrays.filter((character) => {
            return Number(character.name.indexOf(this.state.query)) !== -1;
        }) : null

        const mapAllElements = filteredCharacters.map((character, index) => {
                return (
                <Link to={`/characters/${this.state.id}`} key={index} className="card__link">
                <div className="card" id={character.id} onClick={this.handleClick}>
                        <div className="card__photo-container">
                            <img src={charImg} className="card__photo"/>
                        </div>
                            <div className="card__header">
                            {character.name &&
                            <h2 className="heading-secondary">
                            {character.name}</h2>}
                            {!character.name &&
                            <h2 className="heading-secondary">
                            {character.aliases[0]}
                            </h2>}
                            {character.name && character.aliases[0] &&
                            <div className="card__header">{character.name}</div> &&
                            <p className="paragraph">Also known as: {character.aliases[0]}</p>}
                        </div>
                    </div>
                </Link>
            );
        })

        return (
            <div className="container__lists">
                <div className="searchbar">
                    <div className="searchbar__content">
                        <input className="searchbar__input" type="search" value={this.state.query} onChange={this.onInputChange} type="text" placeholder="search ..."/>                    </div>
                </div>
                <main className="main">
                    <div className="list">
                        {mapAllElements}
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: Object.values(state.characterList.characters)
    }
}
    

export default connect(mapStateToProps, { listAllChars, reset })(CharacterList);