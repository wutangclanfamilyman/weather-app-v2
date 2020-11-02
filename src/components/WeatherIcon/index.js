import React, {useState, useEffect} from 'react'
import {Loader} from '../../components'
import PropTypes from 'prop-types'

import {GetWeatherIcon} from '../../helpers'

const WeatherIcon = ({icon}) => {

    const [currentIcon, setIcon] = useState('');

    const pathIcon = GetWeatherIcon(icon)

    useEffect(() => {
        if(icon) {
            setIcon(pathIcon)
        }
    })

    return (
        <div className="app__weather-icon">
            {currentIcon ? <img src={currentIcon} alt="weather icon" /> : <Loader />}
        </div>
    )
}

WeatherIcon.propTypes = {
    icon: PropTypes.string
}

export default WeatherIcon;