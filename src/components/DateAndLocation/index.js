import React from 'react'
import PropTypes from 'prop-types'

import Place from '../../assets/place.svg';

const DateAndLocation = ({date, position}) => {
    return (
        <div className="app__date-and-location">
            <div className="app__current-date">
                <span>Today</span>
                <span>{date}</span>
            </div>
            <div className="app__current-location">
                <img src={Place} /> {position}
            </div>
        </div>
    )
}

DateAndLocation.propTypes = {
    date: PropTypes.string,
    position: PropTypes.string
}

export default DateAndLocation