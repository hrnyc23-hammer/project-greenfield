import Redux from 'redux';
import { reviews } from '../data/sampleItemData.js';


var reviewsReducer = (state = reviews, action) => {
    switch (action.type) {
        case 'CHANGE_REVIEWS':
            return action.reviews;
        default:
            return state;
    }
};

export default reviewsReducer;