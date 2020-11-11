import axios from 'axios';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

class WeatherAPI {

    async getLocationByQuery(city) {
        try {
            const result = await axios.get(`location/search/?query=${city.toLowerCase()}`)

            if(result.status !== 200) {
                throw new Error(result)
            }

            return await result
        }
        catch (e) {
            console.error(e);

            return false
        }
    }

    getLocationByLatLng = async (lat, lng) => {
        try {
            const result = await axios.get(`location/search/?lattlong=${lat},${lng}`)

            if(result.status !== 200) {
                throw new Error(result)
            }

            return await result;
        }
        catch (e) {
            console.error(e);

            return false
        }
    }

    getLocationByWoeid = async (woied) => {
        try {
            const result = await axios.get(`location/${woied}`)
            
            if(result.status !== 200) {
                throw new Error(result)
            }

            return await result;
        }
        catch (e) {
            console.log(e);

            return false
        }
    }

}

export default WeatherAPI