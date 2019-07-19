"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var QAHandleSearchEntryReducer = function QAHandleSearchEntryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CHANGE_SEARCH_ENTRY":
      // return Object.assign({}, state, action.entry);
      return action.entry;

    default:
      return state;
  }
};

var _default = QAHandleSearchEntryReducer;
exports["default"] = _default;