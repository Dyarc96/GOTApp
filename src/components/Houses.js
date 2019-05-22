import React from 'react';
import './App.css';
import houseImg from '../img/pics/home.png';
import { listAllHouses, reset } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Houses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  id: '', query: ''}
        this.props.reset();
    }
    
    async componentDidMount() {
        for (let i = 1; i <= 9; i++) {
            await this.props.listAllHouses(i);
        }
    }

    handleClick = (e) => {
        e.stopPropagation();
        this.setState({id: e.currentTarget.id})
    }

    onInputChange = (e) => {
        this.setState({ query: e.target.value });
    }

    render() {
        let houses = this.props.houses;
        console.log(houses);

        let mergedArrays = [].concat.apply([], houses);
        mergedArrays.forEach((item, i) => {
            item.id = i + 1
        })

        const filteredHouses = mergedArrays.filter((house) => {
            return Number(house.name.indexOf(this.state.query)) !== -1;
        })

        const renderList = filteredHouses.map((house, index) => {
            return (
                <Link to={`/houses/${this.state.id}`} key={index} className="card__link">
                <div className="card card-house" id={house.id} onClick={this.handleClick}>
                    <div className="card__photo-container">
                            <img src={houseImg} className="card__photo"/>
                        </div>
                    <div className="card__header">{house.name}</div>
                    <p className="paragraph">Region: {house.region} </p>
                </div>
                </Link>
            )
        });

    return (
            <div className="container__lists">
                    <div className="searchbar">
                        <div className="searchbar__content">
                        <input className="searchbar__input" type="search" value={this.state.query} onChange={this.onInputChange} type="text" placeholder="search ..."/>
                        </div>
                    </div>
                <main className="main">
                    <div className="list">
                        {renderList}
                    </div>
                </main>
            </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        houses: Object.values(state.houseList.houses)
    }
}

export default connect(mapStateToProps, { listAllHouses, reset })(Houses);