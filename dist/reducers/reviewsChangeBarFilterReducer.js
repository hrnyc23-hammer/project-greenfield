"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _redux = _interopRequireDefault(require("redux"));

var reviewsChangeBarFilterReducer = function reviewsChangeBarFilterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHANGE_BAR_FILTER':
      if (!state.includes(action.barFilter)) {
        return [].concat((0, _toConsumableArray2["default"])(state), [action.barFilter]);
      }

      return state;

    case 'RESET_BAR_FILTER':
      return [];

    default:
      return state;
  }
};

var _default = reviewsChangeBarFilterReducer;
exports["default"] = _default;