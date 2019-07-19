"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _related = _interopRequireDefault(require("./related.js"));

var _overviewProductInfo = _interopRequireDefault(require("./overviewProductInfo.js"));

var _overviewChangeStyles = _interopRequireDefault(require("./overviewChangeStyles"));

var _overviewChangeSelectedStyle = _interopRequireDefault(require("./overviewChangeSelectedStyle.js"));

var _QAHandleSearchEntryReducer = _interopRequireDefault(require("./QAHandleSearchEntryReducer.js"));

var _QAReducer = _interopRequireDefault(require("./QAReducer.js"));

var _metaReducer = _interopRequireDefault(require("./metaReducer.js"));

var _reviewsReducer = _interopRequireDefault(require("./reviewsReducer.js"));

var _reviewsChangeBarFilterReducer = _interopRequireDefault(require("./reviewsChangeBarFilterReducer.js"));

var _QAChangeResultsArrReducer = _interopRequireDefault(require("./QAChangeResultsArrReducer.js"));

var _QAIncrementerReducer = _interopRequireDefault(require("./QAIncrementerReducer.js"));

var rootReducer = (0, _redux.combineReducers)({
  related: _related["default"],
  overviewProductInfo: _overviewProductInfo["default"],
  overviewChangeStyles: _overviewChangeStyles["default"],
  overviewChangeSelectedStyles: _overviewChangeSelectedStyle["default"],
  qaSearchEntry: _QAHandleSearchEntryReducer["default"],
  qa: _QAReducer["default"],
  meta: _metaReducer["default"],
  reviews: _reviewsReducer["default"],
  reviewsChangeBarFilter: _reviewsChangeBarFilterReducer["default"],
  qaResultsArr: _QAChangeResultsArrReducer["default"],
  qaIncrementer: _QAIncrementerReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;