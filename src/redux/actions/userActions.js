import WeatherAPI from '../../api';

const weatherApi = new WeatherAPI();

const Actions = {
    toogleCelcius: () => {
        return {
            type: 'USER:CHANGE_SCALE'
        }
    },
    toggleSearchForm: () => {
        return {
            type: 'USER:TOGGLE_SEARCH_PANEL'
        }
    },
    setCurrentCity: (city) => {
        return {
            type: 'USER:SET_CITY',
            payload: city
        }
    },
    setCurrentPosition: (coords) => {
        return {
            type: 'USER:SET_COORDINATES',
            payload: coords
        }
    },
    fetchUserPosition: () => (dispatch) => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if(position) {
                    //dispatch(Actions.setCurrentPosition(coords))
                    weatherApi.getLocationByLatLng(position.coords.latitude, position.coords.longitude)
                        .then(res => {
                            dispatch(Actions.setCurrentCity(res.data[0].title))
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            }, (err) => {
                console.log(`ERROR:${err.code}; MESSAGE:${err.message}`);
            })
        }
        
    }
}

export default Actions