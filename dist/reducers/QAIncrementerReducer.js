"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var QAIncrementerReducer = function QAIncrementerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // let currentState = state;
  switch (action.type) {
    case "QA_INCREMENT_BY_ENTRY":
      // return Object.assign({}, state, action.entry);
      return state + action.entry;

    default:
      return state;
  }
};

var _default = QAIncrementerReducer;
exports["default"] = _default;