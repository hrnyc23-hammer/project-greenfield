import { combineReducers } from 'redux';
import related from './related.js';
import overviewProductInfo from './overviewProductInfo.js';
import overviewChangeStyles from './overviewChangeStyles';
import overviewChangeSelectedStyles from './overviewChangeSelectedStyle.js';
import qaSearchEntry from './QAHandleSearchEntryReducer.js';
import qa from './QAReducer.js';
import meta from './metaReducer.js'
import reviews from './reviewsReducer.js'

const rootReducer = combineReducers({
    related,
    overviewProductInfo,
    overviewChangeStyles,
    overviewChangeSelectedStyles,
    qaSearchEntry,
    qa,
    meta,
    reviews
});

export default rootReducer;