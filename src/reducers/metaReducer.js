import Redux from 'redux';
import { meta } from '../data/sampleItemData.js';


var metaReducer = (state = meta, action) => {
    switch (action.type) {
        case 'CHANGE_META':
            return action.meta;
        default:
            return state;
    }
};

export default metaReducer;