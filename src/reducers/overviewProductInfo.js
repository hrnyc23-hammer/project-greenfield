import Redux from 'redux'
import { info } from '../data/sampleItemData.js';

let overviewChangeProductInfo = (state = info, action) => {
  switch (action.type) {
    case 'OVERVIEW_CHANGE_PRODUCTS':
      return Object.assign(state,action.product);
    default:
    return state;
  }
};

export default overviewChangeProductInfo;