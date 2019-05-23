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
                <Router history={history} basename={process.env.PUBLIC_URL + '/'}>
                    <Nav className="nav"/>
                    <Route path={`/`} exact component={WelcomePage} />
                    <Route path={`/houses`} exact component={Houses}
                    render={(routerProps) => <Houses routerProps={routerProps}/>}/>
                    <Route path={`/characters`} exact component={CharacterList}
                    render={(routerProps) => <CharacterList routerProps={routerProps}/>} />
                    <Route path={`/books`} exact component={BooksList} 
                    render={(routerProps) => <BooksList routerProps={routerProps}/>}/>
                    <Route path={`/characters/:id`} exact component={SingleCharacter} 
                    render={(routerProps) => <SingleCharacter routerProps={routerProps}/>}/>
                    <Route path={`/houses/:id`} exact component={SingleHouse}
                    render={(routerProps) => <SingleHouse routerProps={routerProps}/>}/>
                    <Route path={`/books/:id`} exact component={SingleBook}
                    render={(routerProps) => <SingleBook routerProps={routerProps}/>}/>
                    <Route path={`/map`} exact component={Map}/>
                </Router>
            </div>
        )
    }
};

export default App;