import Redux from 'redux'

let reviewsChangeBarFilterReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_BAR_FILTER':
            if (!state.includes(action.barFilter)) {
                return [...state, action.barFilter]
            }
            return state
        case 'RESET_BAR_FILTER':
            return []
        default:
            return state;
    }
};

export default reviewsChangeBarFilterReducer;