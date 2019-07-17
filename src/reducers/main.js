import { combineReducers } from "redux";
import QAHandleSearchEntryReducer from "./QAHandleSearchEntryReducer";

const rootReducer = combineReducers({
  QASearchEntry: QAHandleSearchEntryReducer
});

export default rootReducer;
