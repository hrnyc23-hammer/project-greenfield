import Redux from 'redux';
import { related } from '../data/sampleItemData.js';

const relatedReducer = (state = related, action) => {
  switch(action.type) {
    case('CHANGE_RELATED'):
      return Object.assign(state, action.related);
    default:
      return state;
  }
};

export default relatedReducer