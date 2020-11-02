import React from 'react'
import HeavyRain from '../../assets/HeavyRain.png';

const ForecastItem = () => {
    return (
        <div className="forecast-item">
            <div className="forecast-item__date">
                Tomorrow
            </div>
            <div className="forecast-item__icon">
                <img src={HeavyRain} alt="" />
            </div>
            <div className="forecast-item__temp">
                <div className="forecast-item__temp--day">16°C</div>
                <div className="forecast-item__temp--night">11°C</div>
            </div>
        </div>
    )
}

export default ForecastItem
