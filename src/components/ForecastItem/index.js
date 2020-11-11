import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {GetWeatherIcon, ConvertDate} from '../../helpers'

const ForecastItem = ({date, max, min, weather, scale}) => {

    const [currentIcon, setIcon] = useState('');

    const pathIcon = GetWeatherIcon(weather)

    useEffect(() => {
        if(weather) {
            setIcon(pathIcon)
        }
    })

    return (
        <div className="forecast-item">
            <div className="forecast-item__date">
                {ConvertDate(date)}
            </div>
            <div className="forecast-item__icon">
                <img src={currentIcon} alt="" />
            </div>
            <div className="forecast-item__temp">
                <div className="forecast-item__temp--day">{Math.round(max)}°{scale ? 'C' : 'F'}</div>
                <div className="forecast-item__temp--night">{Math.round(min)}°{scale ? 'C' : 'F'}</div>
            </div>
        </div>
    )
}

ForecastItem.propTypes = {
    date: PropTypes.object,
    max: PropTypes.number,
    min: PropTypes.number,
    weather: PropTypes.string,
    scale: PropTypes.bool
}

export default ForecastItem
