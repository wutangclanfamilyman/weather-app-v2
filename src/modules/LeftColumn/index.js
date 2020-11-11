import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {ConvertDate, ConvertToFahrenheit} from '../../helpers'

import {userActions, weatherActions} from '../../redux/actions'

import {LocationPanel, WeatherIcon, Temperature, DateAndLocation} from '../../components';
import './LeftColumn.scss';

const LeftColumn = ({temp, weatherTitle, fetchWeather, fetchUserPosition, toggleSearchForm, celcius, city, position}) => {

    useEffect(() => {
      console.log(city);
        if(!city) {
         fetchUserPosition();
        }
        else if (city) {
         fetchWeather(city);
        }
        return
    })

    return (
        <div className="left-column">
          <LocationPanel fetchUserPosition={fetchUserPosition} toggleForm={toggleSearchForm} />
          <WeatherIcon icon={weatherTitle} />
          <Temperature temp={celcius ? temp : ConvertToFahrenheit(temp)} scale={celcius} weather={weatherTitle} />
          <DateAndLocation date={ConvertDate(new Date())} position={city} />
        </div>
    )
}

LeftColumn.propTypes = {
  weatherTitle: PropTypes.string,
  temp: PropTypes.number,
  fetchWeather: PropTypes.func,
  position: PropTypes.object,
  city: PropTypes.string,
  fetchUserPosition: PropTypes.func,
  toggleSearchForm: PropTypes.func,
  celcius: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    weatherTitle: state.weather.weatherTitle,
    temp: state.weather.temp,
    celcius: state.user.celcius,
    city: state.user.city,
    position: state.user.position
  }
}

const mapDispatchToProps = {
  fetchWeather: weatherActions.fetchWeather,
  fetchUserPosition: userActions.fetchUserPosition,
  toggleSearchForm: userActions.toggleSearchForm
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftColumn);