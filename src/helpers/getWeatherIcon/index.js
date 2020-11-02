import Clear from '../../assets/Clear.png';
import Hail from '../../assets/Hail.png';
import HeavyCloud from '../../assets/HeavyCloud.png';
import HeavyRain from '../../assets/HeavyRain.png';
import LightCloud from '../../assets/LightCloud.png';
import LightRain from '../../assets/LightRain.png';
import Shower from '../../assets/Shower.png';
import Sleet from '../../assets/Sleet.png';
import Snow from '../../assets/Snow.png';
import Thunderstorm from '../../assets/Thunderstorm.png';

export default function GetWeatherIcon(icon) {
    if(icon === 'Clear') {
        return Clear;
    }
    else if(icon === 'Hail') {
        return Hail;
    }
    else if(icon === 'HeavyCloud') {
        return HeavyCloud;
    }
    else if(icon === 'HeavyRain') {
        return HeavyRain;
    }
    else if(icon === 'LightCloud') {
        return LightCloud;
    }
    else if(icon === 'LightRain') {
        return LightRain;
    }
    else if(icon === 'Shower') {
        return Shower;
    }
    else if(icon === 'Sleet') {
        return Sleet;
    }
    else if(icon === 'Snow') {
        return Snow;
    }
    else if(icon === 'Thunderstorm') {
        return Thunderstorm;
    }
    else {
        return '';
    }
}