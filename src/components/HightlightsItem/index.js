import React from 'react'
import PropTypes from 'prop-types'

import Arrow from '../../assets/arrow.svg';
import Loader from '../Loader';

const HightlightsItem = (props) => {

    const {wind, title, humidity, air, visibility} = props;

    return ((wind || humidity || air || visibility) ? (
        <div className="hightlights-item">
            <div className="hightlights-item__header">
                {title}
            </div>
            <div className="hightlights-item__value">
                {wind && <>{Math.round(wind.speed)} <span>mph</span></>}
                {humidity && <>{humidity} <span>%</span></>}
                {air && <>{air} <span>mb</span></>}
                {visibility && <>{visibility.toFixed(2)} <span>miles</span></>}
            </div>
            {wind && <div className="hightlights-item__wsw">
                <div className="wsw-arrow">
                    <img src={Arrow} alt="" style={{transform: `rotate(${wind.direction}deg)`}}/> 
                </div>
                {wind.compass}
            </div> }
            {humidity && <div className="hightlights-item__humidity">
                <div className="humidity-values">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </div>
                <div className="humidity-bar">
                    <div className="humidity-bar--filled" style={{width: `${humidity}%`}}></div>
                </div>
                <div className="humidity-procent">
                    %
                </div>
            </div>}
        </div>
    ) : <Loader />
)}

HightlightsItem.propTypes = {
    wind: PropTypes.any,
    title: PropTypes.string,
    humidity: PropTypes.number,
    air: PropTypes.number,
    visibility: PropTypes.number
}

export default HightlightsItem
