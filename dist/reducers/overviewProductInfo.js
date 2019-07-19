"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var _sampleItemData = require("../data/sampleItemData.js");

var overviewChangeProductInfo = function overviewChangeProductInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sampleItemData.info;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OVERVIEW_CHANGE_INFO':
      return Object.assign({}, state, action.product);

    default:
      return state;
  }
};

var _default = overviewChangeProductInfo;
exports["default"] = _default;