import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {ConvertToFahrenheit} from '../../helpers'
import {userActions} from '../../redux/actions'
import {ForecastItem, HightlightsItem, Loader, Scale} from '../../components'

import './RightColumn.scss';

const RightColumn = ({windDirection, windSpeed, compass, humidity, visibility, air, forecastData, celcius, toggleScale}) => {

    return (
        <div className="right-column">
            <Scale celcius={celcius} toggle={toggleScale} />
            <div className="app__forecast">
              {
                forecastData ? forecastData.map(item => {
                  const {id, applicable_date, weather_state_name, min_temp, max_temp} = item

                  return <ForecastItem key={id} date={new Date(applicable_date)} weather={weather_state_name} scale={celcius} min={celcius ? min_temp : ConvertToFahrenheit(min_temp)} max={celcius ? max_temp : ConvertToFahrenheit(max_temp)} />

                }) : <Loader/> 
              }
            </div>
            <div className="app__hightlights">
              <div className="hightlights__header">
                Today’s Hightlights
              </div>
              <div className="hightlights__wrapper">
                <HightlightsItem title={'Wind status'} wind={(windDirection && windSpeed && compass) ? {
                  speed: windSpeed,
                  direction: windDirection,
                  compass
                } : null} />
                <HightlightsItem title={'Humidity'} humidity={humidity} />
                <HightlightsItem title={'Visibility'} visibility={visibility} />
                <HightlightsItem title={'Air Pressure'} air={air} />
              </div>
            </div>
            </div>
    )
}

RightColumn.propTypes = {
  windSpeed: PropTypes.number,
  windDirection: PropTypes.number,
  compass: PropTypes.string,
  humidity: PropTypes.number,
  visibility: PropTypes.number,
  air: PropTypes.number,
  forecastData: PropTypes.array,
  celcius: PropTypes.bool,
  toggleScale: PropTypes.func
}


const mapStateToProps = (state) => {
  return {
    windSpeed: state.weather.windSpeed,
    windDirection: state.weather.windDirection,
    compass: state.weather.compass,
    humidity: state.weather.humidity,
    visibility: state.weather.visibility,
    air: state.weather.air,
    forecastData: state.weather.forecastData,
    celcius: state.user.celcius
  }
}

const mapDispacthToProps = {
  toggleScale: userActions.toogleCelcius
}

export default connect(mapStateToProps, mapDispacthToProps)(RightColumn);