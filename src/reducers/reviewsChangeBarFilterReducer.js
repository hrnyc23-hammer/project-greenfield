import Redux from 'redux'

let reviewsChangeBarFilterReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_BAR_FILTER':
            var temp = JSON.parse(JSON.stringify(state))
            if (!temp.includes(action.barFilter)) {
                temp.push(action.barFilter)
            }
            return Object.assign([], state, temp);
        case 'RESET_BAR_FILTER':
            return []
        default:
            return state;
    }
};

export default reviewsChangeBarFilterReducer;