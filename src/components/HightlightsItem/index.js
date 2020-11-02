import React from 'react'
import PropTypes from 'prop-types'

import Arrow from '../../assets/arrow.svg';

const HightlightsItem = (props) => {

    const {wsw, himidity} = props;

    return (
        <div className="hightlights-item">
            <div className="hightlights-item__header">
                Wind status
            </div>
            <div className="hightlights-item__value">
                7<span>mph</span>
            </div>
            {wsw && <div className="hightlights-item__wsw">
                <div className="wsw-arrow">
                    <img src={Arrow} alt="" /> 
                </div>
                WSW
            </div> }
            {himidity && <div className="hightlights-item__humidity">
                <div className="humidity-values">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </div>
                <div className="humidity-bar">
                    <div className="humidity-bar--filled" style={{width: `${himidity}%`}}></div>
                </div>
                <div className="humidity-procent">
                    %
                </div>
            </div>}
        </div>
    )
}

HightlightsItem.propTypes = {
    wsw: PropTypes.number,
    himidity: PropTypes.number
}

export default HightlightsItem
