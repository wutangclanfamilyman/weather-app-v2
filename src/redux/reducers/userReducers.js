const initialState = {
    position: null,
    city: null,
    searchPanel: false,
    celcius: true
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'USER:CHANGE_SCALE':
            return {
                ...state,
                celcius: !state.celcius
            };
        case 'USER:SET_CITY':
            return {
                ...state,
                city: action.payload
            };
        case 'USER:SET_COORDINATES':
            return {
                ...state,
                position: action.payload
            };
        case 'USER:TOGGLE_SEARCH_PANEL':
            return {
                ...state,
                searchPanel: !state.searchPanel
            };
        default:
            return {
                ...state
            }
    }
}

export default userReducers