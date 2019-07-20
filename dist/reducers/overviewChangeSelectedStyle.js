"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var overviewChangeSelectedStyleReducer = function overviewChangeSelectedStyleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OVERVIEW_CHANGE_SELECTED_STYLE':
      return Object.assign({}, state, action.selectedStyle);

    default:
      return state;
  }
};

var _default = overviewChangeSelectedStyleReducer;
exports["default"] = _default;