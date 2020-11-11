import { func } from "prop-types";

export default function getCurrentLatLng() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

            const coords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            return coords

        }, (err) => {
            console.log(`ERROR:${err.code}; MESSAGE:${err.message}`);
        })
    }
}