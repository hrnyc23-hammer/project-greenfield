import Redux from 'redux'
import { styles } from '../data/sampleItemData.js';

let overviewChangeStylesReducer = (state = styles, action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_STYLES':
      return Object.assign({},state,action.styles);
    default:
    return state;
  }
};

export default overviewChangeStylesReducer;