import Redux from 'redux';
import { qa } from '../data/sampleItemData.js';


var qaReducer = (state = qa, action) => {
  switch (action.type) {
  case 'CHANGE_QA':
    return action.qa;
  default:
    return state;
  }
};

export default qaReducer;