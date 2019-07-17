import { combineReducers } from "redux";
import QAHandleSearchEntryReducer from "./QAHandleSearchEntryReducer";
import QAHandleMoreQuestionsButtonReducer from "./QAHandleMoreQuestionsButtonReducer";
// import QAReducer from "./QAReducer";
import store from "./../store/store";

const rootReducer = combineReducers({
  // QAHandleSearchEntryReducer,
  // QAHandleMoreQuestionsButtonReducer
});

export default rootReducer;
