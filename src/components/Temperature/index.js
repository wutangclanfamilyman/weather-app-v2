import React from 'react'
import PropTypes from 'prop-types'

const Temperature = ({weather, temp, scale}) => {
    return (
        <div className="app__temperature">
            <div className="app__current-temperature">
                {temp}<span>°{scale ? 'C' : 'F'}</span>
            </div>
            <div className="app__current-weather">
                {weather}
            </div>
        </div>
    )
}

Temperature.propTypes = {
    weather: PropTypes.string,
    temp: PropTypes.number,
    scale: PropTypes.bool
}

export default Temperature;