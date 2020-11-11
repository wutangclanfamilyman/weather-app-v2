const initialState = {
    temp: null,
    weatherTitle: null,
    compass: null,
    windSpeed: null,
    windDirection: null,
    air: null,
    humidity: null,
    visibility: null,
    forecastData: null,
    loading: false,
    error: false
}

const weathersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'WEATHER:REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'WEATHER:LOADED':

            const {temp, weatherTitle, compass, windSpeed, windDirection, air, humidity, visibility, forecastData} = action.payload

            return {
                ...state,
                loading: false,
                temp: Math.round(temp),
                weatherTitle,
                compass,
                windSpeed,
                windDirection,
                air,
                humidity,
                visibility,
                forecastData
            }
        case 'WEATHER:FAILED':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}

export default weathersReducer