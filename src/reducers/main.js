import { combineReducers } from 'redux';
import QAHandleSearchEntryReducer from "./QAHandleSearchEntryReducer";
import QAHandleMoreQuestionsButtonReducer from "./QAHandleMoreQuestionsButtonReducer";
// import QAReducer from "./QAReducer";
import related from './related.js';

const rootReducer = combineReducers({
  related
});

export default rootReducer;
