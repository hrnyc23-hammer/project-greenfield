import Redux from 'redux';


var reviewsLoadedReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LOADED_REVIEWS':
            return state.concat(action.payload)
        case 'RESET_LOADED_REVIEWS':
            return []
        default:
            return state;
    }
};

export default reviewsLoadedReducer;