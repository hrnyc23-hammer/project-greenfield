import Redux from 'redux';
import { styles } from '../data/sampleItemData.js';

let overviewChangeSelectedStyleReducer = (state = styles.results[0], action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_SELECTED_STYLE':
      return Object.assign({},state,action.selectedStyle);
    default:
    return state;
  }
};

export default overviewChangeSelectedStyleReducer;