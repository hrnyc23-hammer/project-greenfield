import Redux from 'redux';


var reviewsLengthReducer = (state = 1, action) => {
    switch (action.type) {
        case 'CHANGE_REVIEW_LENGTH':
            return state + 2;
        default:
            return state;
    }
};

export default reviewsLengthReducer;