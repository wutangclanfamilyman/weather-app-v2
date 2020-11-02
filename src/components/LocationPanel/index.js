import React from 'react'
import Location from '../../assets/my_location.svg';

const LocationPanel = () => {
    return (
        <div className="app__location-panel">
            <button className="btn btn-search-panel">Search for places</button>
            <button className="btn btn-current-location">
                <img src={Location} alt="my location" />
            </button>
        </div>
    )
}

export default LocationPanel