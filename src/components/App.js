import React from 'react';
import { Router, Route } from 'react-router-dom';
import Houses from './Houses';
import SingleHouse from './SingleHouse';
import SingleCharacter from './SingleCharacter';
import SingleBook from './SingleBook';
import CharacterList from './CharacterList';
import Map from './Map';
import BooksList from './BookList';
import WelcomePage from './WelcomePage';
import Nav from './Nav';
import history from '../history';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <h1 className="heading-primary">A song of Ice and Fire</h1>
                    <h2 className="heading-secondary">Fan App</h2>
                </header>
                <Router history={history}>
                    <Nav className="nav"/>
                    <Route path="/" exact component={WelcomePage} />
                    <Route path="/houses" exact component={Houses} />
                    <Route path="/characters" exact component={CharacterList} />
                    <Route path="/books" exact component={BooksList} />
                    <Route path="/characters/:id" exact component={SingleCharacter} />
                    <Route path="/houses/:id" exact component={SingleHouse}/>
                    <Route path="/books/:id" exact component={SingleBook}/>
                    <Route path="/map" exact component={Map}/>
                </Router>
            </div>
        )
    }
};

export default App;