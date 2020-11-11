import WeatherAPI from '../../api';
import {userActions} from './index'
const weatherApi = new WeatherAPI();

const Actions = {
    weatherRequest: () => {
        return {
            type: 'WEATHER:REQUEST'
        }
    },
    weatherLoaded: (temp, weatherTitle, compass, windSpeed, windDirection, air, humidity, visibility, forecastData) => {
        return {
            type: 'WEATHER:LOADED',
            payload: {
                temp,
                weatherTitle,
                compass,
                windSpeed,
                windDirection,
                air,
                humidity,
                visibility,
                forecastData
            }
        }
    },
    weatherFailed: () => {
        return {
            type: 'WEATHER:FAILED'
        }
    },
    fetchWeather: (city, position) => dispatch => {
        dispatch(Actions.weatherRequest())
        if(!position && city) {
            weatherApi.getLocationByQuery(city)
                .then(res => weatherApi.getLocationByWoeid(res.data[0].woeid)
                    .then(weather => {
                        const {air_pressure, humidity, the_temp, visibility, weather_state_name, wind_direction, wind_direction_compass, wind_speed} = weather.data.consolidated_weather[0];
                        const forecastData = weather.data.consolidated_weather.splice(1, weather.data.consolidated_weather.length);

                        dispatch(userActions.setCurrentCity(res.data[0].title))
                        
                        dispatch(Actions.weatherLoaded(the_temp, weather_state_name, wind_direction_compass, wind_speed, wind_direction, air_pressure, humidity, visibility, forecastData))

                    })
                    .catch(err => {
                        dispatch(Actions.weatherFailed())
                        console.log(err);
                    }))
                .catch(err => {
                    dispatch(Actions.weatherFailed())
                    console.log(err);
                })
        }
        else if(position) {
            weatherApi.getLocationByLatLng(position.lat, position.lng)
                .then(res => weatherApi.getLocationByWoeid(res.data[0].woeid)
                    .then(weather => {
                        const {air_pressure, humidity, the_temp, visibility, weather_state_name, wind_direction, wind_direction_compass, wind_speed} = weather.data.consolidated_weather[0];
                        const forecastData = weather.data.consolidated_weather.splice(1, weather.data.consolidated_weather.length);

                        dispatch(userActions.setCurrentCity(res.data[0].title))
                        dispatch(Actions.weatherLoaded(the_temp, weather_state_name, wind_direction_compass, wind_speed, wind_direction, air_pressure, humidity, visibility, forecastData))
                    })
                .catch(err => {
                    dispatch(Actions.weatherFailed())
                    console.log(err);
                }))
            .catch(err => {
                dispatch(Actions.weatherFailed())
                console.log(err);
            })
        }
    }
}

export default Actions