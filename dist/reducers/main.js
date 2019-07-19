"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _related = _interopRequireDefault(require("./related.js"));

var _QAHandleSearchEntryReducer = _interopRequireDefault(require("./QAHandleSearchEntryReducer.js"));

var rootReducer = (0, _redux.combineReducers)({
  related: _related["default"]
});
var _default = rootReducer;
exports["default"] = _default;