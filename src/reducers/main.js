import { combineReducers } from 'redux';
import related from './related.js';
import overviewProductInfo from './overviewProductInfo.js';
import overviewChangeStyles from './overviewChangeStyles';
import overviewChangeSelectedStyles from './overviewChangeSelectedStyle.js';

const rootReducer = combineReducers({
  related,
  overviewProductInfo,
  overviewChangeStyles,
  overviewChangeSelectedStyles
});

export default rootReducer;