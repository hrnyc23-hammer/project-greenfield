import { combineReducers } from "redux";
import related from "./related.js";
import overviewProductInfo from "./overviewProductInfo.js";
import overviewChangeStyles from "./overviewChangeStyles";
import overviewChangeSelectedStyles from "./overviewChangeSelectedStyle.js";
import qaSearchEntry from "./QAHandleSearchEntryReducer.js";
import qa from "./QAReducer.js";
import meta from "./metaReducer.js";
import reviews from "./reviewsReducer.js";
import reviewsChangeBarFilter from "./reviewsChangeBarFilterReducer.js";
import qaResultsArr from "./QAChangeResultsArrReducer.js";
import qaIncrementer from "./QAIncrementerReducer.js";
import reviewsLengthReducer from "./reviewsLengthReducer.js";
import overviewChangeSize from "./overviewChangeSize.js";
import outfits from "./outfitsReducer.js";
import qaQuestionClicked from "./QAAddAQuestionReducer.js";
import qaQuestionNickname from "./QAQuestionNicknameReducer.js";
import qaQuestionEmail from "./QAAddEmailReducer.js";
import qaQuestionBody from "./QAQuestionBodyReducer.js";

const rootReducer = combineReducers({
  related,
  overviewProductInfo,
  overviewChangeStyles,
  overviewChangeSelectedStyles,
  qaSearchEntry,
  qa,
  meta,
  reviews,
  reviewsChangeBarFilter,
  qaResultsArr,
  qaIncrementer,
  reviewsLengthReducer,
  overviewChangeSize,
  outfits,
  qaQuestionClicked,
  qaQuestionNickname,
  qaQuestionEmail,
  qaQuestionBody
});

export default rootReducer;
