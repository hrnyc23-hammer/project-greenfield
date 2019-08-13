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
import reviewsLoadedReducer from "./reviewsLoadedReducer.js";
import qaAnswerClicked from "./QAAnswerFlagChangerReducer.js";
import qaAnswerNickname from "./QAAnswerNicknameReducer.js";
import qaAnswerEmail from "./QAAddEmailReducer.js";
import qaAnswerBody from "./QAAnswerBodyReducer.js";
import qaAddPhotos from "./QAAddPhotosReducer.js";
import qaUrl from "./QAUrlReducer.js";
import qaImageClicked from "./QAImageClickedReducer.js";
import qaImageUrl from "./QAClickedImageUrlReducer.js";
import qaCurrentQuestion from "./QACurrentQuestionReducer";
import qaQuestionClicked from "./QAQuestionFlagChangerReducer";
import qaQuestionBody from "./QAQuestionBodyReducer";
import qaQuestionNickname from "./QAQuestionNicknameReducer";
import qaQuestionEmail from "./QAQuestionEmailReducer";

const rootReducer = combineReducers({
  // related,
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
  // outfits,
  reviewsLoadedReducer,
  qaAnswerClicked,
  qaAnswerNickname,
  qaAnswerEmail,
  qaAnswerBody,
  qaAddPhotos,
  qaUrl,
  qaImageClicked,
  qaImageUrl,
  qaCurrentQuestion,
  qaQuestionClicked,
  qaQuestionBody,
  qaQuestionNickname,
  qaQuestionEmail
});

export default rootReducer;
