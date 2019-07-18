import { combineReducers } from 'redux';
import related from './related.js';
import qaSearchEntry from './QAHandleSearchEntryReducer.js';
import qa from './QAReducer.js';


const rootReducer = combineReducers({
  related,
  qaSearchEntry,
  qa
});

export default rootReducer;