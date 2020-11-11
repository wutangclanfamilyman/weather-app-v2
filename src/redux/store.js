import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'  
import rootReducer from './reducers';

const middlewares = [thunk]

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose 

const store = createStore(rootReducer, reduxDevTools(applyMiddleware(...middlewares)))

export default store;