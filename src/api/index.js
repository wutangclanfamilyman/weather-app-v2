import axios from 'axios';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

class WeatherAPI {

    getLocationByQuery = async (city) => {
        try {
            const query = await axios(`location/search/?query=${city.toLowerCase()}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    withCredentials: true,
                    mode: 'no-cors',
                    crossDomain: true,
                }
            }) 

            return query;
        }
        catch(e) {
            console.log(e);
        }
    }

    getLocationByLatLng = async (lat, lng) => {
        try {
            const query = await axios.get(`location/search/?lattlong=${lat},${lng}`)
                .then(res => res.json())

            return query;
        }
        catch (e) {
            console.log(e);
        }
    }

    getLocationByWoeid = async (woied) => {
        try {
            const query = await axios.get(`location/${woied}`)
                .then(res => res.json())

            return query;
        }
        catch (e) {
            console.log(e);
        }
    }

}

export default WeatherAPI