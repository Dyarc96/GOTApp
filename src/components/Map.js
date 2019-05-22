import React from 'react';
import worldMap from '../img/maps/worldMap.png'

const Map = () => {
    return (
        <div className="container__map">
            <img src={worldMap} className="map"></img>
        </div>
    )
}

export default Map;