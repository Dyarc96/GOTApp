import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav__list">
                <div className="nav__item">
                    <Link to="/" className="nav__link">Landing</Link>
                </div>
                <div className="nav__item">
                    <Link to="/houses" className="nav__link">Houses</Link>
                </div>
                <div className="nav__item">
                    <Link to="/characters" className="nav__link">Characters</Link>
                </div>
                <div className="nav__item">
                    <Link to="/books" className="nav__link">Books</Link>
                </div>
                <div className="nav__item">
                    <Link to="/map" className="nav__link">Map</Link>
                </div>
            </ul>
        </div>
    )
}

export default Nav;