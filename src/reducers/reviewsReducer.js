import Redux from 'redux';


var reviewsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_REVIEWS':
            return action.reviews;
        default:
            return state;
    }
};

export default reviewsReducer;