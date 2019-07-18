<<<<<<< HEAD
import { combineReducers } from 'redux';
import related from './related.js';
import overviewProductInfo from './overviewProductInfo.js';
import overviewChangeStyles from './overviewChangeStyles';
import overviewChangeSelectedStyles from './overviewChangeSelectedStyle.js';
import qaSearchEntry from './QAHandleSearchEntryReducer.js';
import qa from './QAReducer.js';
import meta from './metaReducer.js'
import reviews from './reviewsReducer.js'
=======
import { combineReducers } from "redux";
import related from "./related.js";
import overviewProductInfo from "./overviewProductInfo.js";
import overviewChangeStyles from "./overviewChangeStyles";
import overviewChangeSelectedStyles from "./overviewChangeSelectedStyle.js";
import qaSearchEntry from "./QAHandleSearchEntryReducer.js";
import qa from "./QAReducer.js";
>>>>>>> 122b68b96a2848e074d04018c9f2ae1a0d647489
import qaResultsArr from "./QAChangeResultsArrReducer.js";
import qaIncrementer from "./QAIncrementerReducer.js";

const rootReducer = combineReducers({
<<<<<<< HEAD
    related,
    overviewProductInfo,
    overviewChangeStyles,
    overviewChangeSelectedStyles,
    qaSearchEntry,
    qa,
    meta,
    reviews,
    qaResultsArr,
    qaIncrementer
=======
  related,
  overviewProductInfo,
  overviewChangeStyles,
  overviewChangeSelectedStyles,
  qaSearchEntry,
  qa,
  qaResultsArr,
  qaIncrementer
>>>>>>> 122b68b96a2848e074d04018c9f2ae1a0d647489
});

export default rootReducer;
