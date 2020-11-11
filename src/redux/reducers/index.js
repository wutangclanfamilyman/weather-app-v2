import {combineReducers} from 'redux'

import weather from './weatherReducers';
import user from './userReducers';

export default combineReducers({
    weather,
    user
})