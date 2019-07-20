"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var reviewsLengthReducer = function reviewsLengthReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHANGE_REVIEW_LENGTH':
      return state + 2;

    default:
      return state;
  }
};

var _default = reviewsLengthReducer;
exports["default"] = _default;