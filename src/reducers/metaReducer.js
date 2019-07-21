import Redux from 'redux';


var metaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_META':
            return action.meta;
        default:
            return state;
    }
};

export default metaReducer;