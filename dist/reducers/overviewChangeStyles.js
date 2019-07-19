"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var _sampleItemData = require("../data/sampleItemData.js");

var overviewChangeStylesReducer = function overviewChangeStylesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sampleItemData.styles;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OVERVIEW_CHANGE_STYLES':
      return Object.assign({}, state, action.styles);

    default:
      return state;
  }
};

var _default = overviewChangeStylesReducer;
exports["default"] = _default;