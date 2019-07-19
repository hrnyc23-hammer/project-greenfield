import Redux from 'redux';


var outfitsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_OUTFITS':
            return action.outfit;
        default:
            return state;
    }
};

export default outfitsReducer;