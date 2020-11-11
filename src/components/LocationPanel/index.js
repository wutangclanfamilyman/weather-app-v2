import React from 'react'
import PropTypes from 'prop-types'
import Location from '../../assets/my_location.svg';

const LocationPanel = ({fetchUserPosition, toggleForm}) => {

    return (
        <div className="app__location-panel">
            <button className="btn btn-search-panel" onClick={() => {toggleForm()}}>Search for places</button>
            <button className="btn btn-current-location" onClick={() => {fetchUserPosition()}}>
                <img src={Location} alt="my location" />
            </button>
        </div>
    )
}

LocationPanel.propTypes = {
    fetchUserPosition: PropTypes.func,
    toggleForm: PropTypes.func
}

export default LocationPanel