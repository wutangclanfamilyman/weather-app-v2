import React from 'react';

import {ForecastItem, HightlightsItem} from '../../components'

import './RightColumn.scss';

const RightColumn = () => {
    return (
        <div className="right-column">
            
            <div className="app__forecast">
              <ForecastItem />
            </div>
            <div className="app__hightlights">
              <div className="hightlights__header">
                Today’s Hightlights
              </div>
              <div className="hightlights__wrapper">
                <HightlightsItem wsw={74} />
              </div>
            </div>
            </div>
    )
}

export default RightColumn;