import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Scale = ({celcius, toggle}) => {
    return (
        <div className="app__scale">
            <button disabled={celcius} onClick={toggle} className={classNames('btn btn-scale', {'btn-scale--active': celcius})}>°C</button>
            <button disabled={!celcius} onClick={toggle} className={classNames('btn btn-scale', {'btn-scale--active': !celcius})}>°F</button>
        </div>
    )
}

Scale.propTypes = {
    celcius: PropTypes.bool,
    toggle: PropTypes.func
}

export default Scale;