import { combineReducers } from 'redux';
import related from './related.js';
import QAHandleSearchEntry from './QAHandleSearchEntryReducer.js';


const rootReducer = combineReducers({
  related
});

export default rootReducer;