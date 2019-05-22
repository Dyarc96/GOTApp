import React from 'react';
import { connect } from 'react-redux';
import { renderHouse, renderOverlord, renderFounder, renderCurrentLord, renderMembers, renderHeir, reset, renderCadetBranches } from '../actions';
import { Link } from 'react-router-dom';

class SingleHouse extends React.Component {
    async componentDidMount() {
        this.props.reset();
        await this.props.renderHouse(this.props.match.params.id);
        if (this.props.house) {
            // OVERLORD
            if (this.props.house[9]) {
                if (this.props.house[9].length <= 44) 
                await this.props.renderOverlord(this.props.house[9].toString().slice(41));
                else if (this.props.house[9].length > 44) 
                await this.props.renderOverlord(this.props.house[9].toString().slice(45))
                else if (this.props.house[9].length <= 1)
                return null
            }
            // FOUNDER
            if (this.props.house[11]) {
                if (this.props.house[11].length <= 49)
                await this.props.renderFounder(this.props.house[11].toString().slice(45))
                else if (this.props.house[11].length > 49)
                await this.props.renderFounder(this.props.house[11].toString().slice(49))
                else if (this.props.house[11].length <= 1)
                return null
            }
            // CURRENT LORD
            if (this.props.house[7]) {
                if (this.props.house[7].length <= 49)
                await this.props.renderCurrentLord(this.props.house[7].toString().slice(45))
                else if (this.props.house[7].length > 49) 
                await this.props.renderCurrentLord(this.props.house[7].toString().slice(49))
                else if (this.props.house.length <= 1)
                return null
            }
            // HEIR
            if (this.props.house[8]) {
                if (this.props.house[8].length <= 49)
                await this.props.renderHeir(this.props.house[8].toString().slice(45))
                else if (this.props.house[8].length > 49) 
                await this.props.renderHeir(this.props.house[8].toString().slice(49))
                else if (this.props.house.length <= 1)
                return null
            }
            // CADET BRANCHES
            if (this.props.house[14]) {
                for (const cadet of this.props.house[14])
                await this.props.renderCadetBranches(cadet.toString().slice(45))
            }
            // SWORN MEMBERS
            if (this.props.house[15]) {
                if (this.props.house[15][0].length <= 49) {
                    for (const member of this.props.house[15])
                    await this.props.renderMembers(member.toString().slice(45))
                } else if (this.props.house[15][0].length > 49) {
                    for (const member of this.props.house[15])
                    await this.props.renderMembers(member.toString().slice(49))
                } else if (this.props.house[15][0] === null) {
                    return null
                }
            }
        }
    }
    

    async componentDidUpdate(prevProps) {
        const route = prevProps.history.location.pathname.toString().slice(8)
        if (route !== prevProps.match.params.id) {
            this.props.reset()
            await this.props.renderHouse(route)
            if (this.props.house[9]) {
                if (this.props.house[9].length <= 44) 
                await this.props.renderOverlord(this.props.house[9].toString().slice(41));
                else if (this.props.house[9].length > 44) 
                await this.props.renderOverlord(this.props.house[9].toString().slice(45))
                else if (this.props.house[9].length <= 1)
                return null
            }
            if (this.props.house[11]) {
                if (this.props.house[11].length < 49)
                await this.props.renderFounder(this.props.house[11].toString().slice(45))
                else if (this.props.house[11].length >= 49)
                await this.props.renderFounder(this.props.house[11].toString().slice(49))
                else if (this.props.house[11].length <= 1)
                return null
            }
            // CURRENT LORD
            if (this.props.house[7]) {
                if (this.props.house[7].length <= 49)
                await this.props.renderCurrentLord(this.props.house[7].toString().slice(45))
                else if (this.props.house[7].length > 49) 
                await this.props.renderCurrentLord(this.props.house[7].toString().slice(49))
                else if (this.props.house.length <= 1)
                return null
            }
            // HEIR
            if (this.props.house[8]) {
                if (this.props.house[8].length <= 49)
                await this.props.renderHeir(this.props.house[8].toString().slice(45))
                 else if (this.props.house[8].length > 49) 
                await this.props.renderHeir(this.props.house[8].toString().slice(49))
                else if (this.props.house.length <= 1)
                return null
            }
            // CADET BRANCHES
            if (this.props.house[14]) {
                for (const cadet of this.props.house[14])
                await this.props.renderCadetBranches(cadet.toString().slice(45))
            }
            // SWORN MEMBERS
            if (this.props.house[15]) {
                if (this.props.house[15][0].length <= 49) {
                    for (const member of this.props.house[15])
                    await this.props.renderMembers(member.toString().slice(45))
                } else if (this.props.house[15][0].length > 49) {
                    for (const member of this.props.house[15])
                    await this.props.renderMembers(member.toString().slice(49))
                } else if (this.props.house[15][0] === null) {
                    return null
                }
            }
        }
    }


    render() {
        const house = this.props.house;
        console.log(house)
        

        const renderTitles = (house[5]) ? 
        house[5].map((element,index) => { 
            return <span key={index}>{element}, </span>}) : house[5]

        const renderSeats = (house[6]) ? house[6].map((element,index) => { 
            return <span key={index}>{element}, </span>}) : null

        const renderLink = (house[9]) ? (house[9].length <= 44 ? house[9].slice(41) : house[9].slice(45)) : house[9]

        const renderCurrentLordLink = (house[7]) ?
            (house[7].length <= 49 ?
            house[7].toString().slice(45) : house[7].toString().slice(49)) : null;

        const renderFounderLink = (house[11]) ? house[11].toString().slice(49) : null;
        
        const renderHeirLink = house[8] ? house[8].toString().slice(49) : null;

        const renderMembers = this.props.members  ? this.props.members.map((element, index) => {
            const elementUrl = (element.url) ? (element.url <= 49 ? element.url.toString().slice(45) : element.url.toString().slice(49)) : null;
            return <span key={index}><Link to={`/characters/${elementUrl}`} className="list__link" >{(element.name) ? (element.name) : element.aliases}, </Link></span>}) : null 

        const renderCadets = this.props.cadets.length === 0 ? null : this.props.cadets.map((element, index) => {
            const elementUrl = (element.url) ? (element.url <= 44 ? element.url.toString().slice(41) : element.url.toString().slice(45)) : null;
            return <span key={index}><Link to={`/houses/${elementUrl}`} className="list__link" >{(element.name) ? (element.name) : element.aliases}, </Link></span>})

        return (
            <div className="container__element">
                <h2 className="heading-tertiary">{house[1]}</h2>
                <p className="list__item">Region {house[2]}</p>
                {house[3] && <p className="list__item" >Coat of Arms: {house[3]}</p>}
                {house[4] && <p className="list__item" >Words: {house[4]}</p>}
                {house[5] != "" && <p className="list__item" >Titles: {renderTitles}</p>}
                {house[6] != "" && <p className="list__item" >Seat: {renderSeats}</p>}
                {house[7] && <p className="list__item" >Current lord: <Link to={`/characters/${renderCurrentLordLink}`} className="list__link">{this.props.currentLord[1]}</Link></p>}
                {house[11] && <p className="list__item" >Founder: <Link to={`/characters/${renderFounderLink}`} className="list__link">{this.props.founder[1]}</Link></p>}
                {house[8] != "" && <p className="list__item" >Heir: <Link to={`/characters/${renderHeirLink}`} className="list__link">{this.props.heir[1]}</Link></p>}
                {house[9] && <p className="list__item" >Overlord: <Link to={`/houses/${renderLink}`} className="list__link">{this.props.overlord[1]}</Link></p>}
                {house[10] && <p className="list__item" >Age of founding: {house[10]}</p>}
                {house[12] && <p className="list__item" >Died out: {house[14]}</p>}
                {house[13] != "" && <p className="list__item" >Weapon: {house[13]}</p>}
                {house[14] != "" && <p className="list__item" >Cadet branches: {renderCadets}</p>}
                {house[15] != "" && <p className="list__item" >Sworn members: {renderMembers}</p>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        house: Object.values(state.house),
        overlord: Object.values(state.overlord),
        currentLord: Object.values(state.currentLord),
        founder: Object.values(state.founder),
        cadets: Object.values(state.cadets.arr),
        heir: Object.values(state.heir),
        members: Object.values(state.members.arr)
    }
}



export default connect(mapStateToProps, { renderHouse, renderOverlord, renderFounder, renderHeir, renderCadetBranches, reset, renderCurrentLord, renderMembers })(SingleHouse);