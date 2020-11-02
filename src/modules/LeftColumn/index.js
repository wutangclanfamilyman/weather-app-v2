import React from 'react';
import {LocationPanel, WeatherIcon, Temperature, DateAndLocation} from '../../components';
import WeatherAPI from '../../api'
import './LeftColumn.scss';

const LeftColumn = () => {

    const weatherAPI = new WeatherAPI();

    weatherAPI.getLocationByQuery('Kiev')
      .then(res => console.log(res))
      .catch(err => console.log(err))

    return (
        <div className="left-column">
          <LocationPanel />
          <WeatherIcon icon={'Clear'} />
          <Temperature />
          <DateAndLocation />
        </div>
    )
}

export default LeftColumn;