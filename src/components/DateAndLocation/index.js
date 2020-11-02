import React from 'react'
import Place from '../../assets/place.svg';

const DateAndLocation = () => {
    return (
        <div className="app__date-and-location">
            <div className="app__current-date">
                <span>Today</span>
                <span>Fri, 5 Jun</span>
            </div>
            <div className="app__current-location">
                <img src={Place} /> Helsinki
            </div>
        </div>
    )
}

export default DateAndLocation