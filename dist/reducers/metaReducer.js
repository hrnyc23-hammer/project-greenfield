"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var _sampleItemData = require("../data/sampleItemData.js");

var metaReducer = function metaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sampleItemData.meta;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHANGE_META':
      return action.meta;

    default:
      return state;
  }
};

var _default = metaReducer;
exports["default"] = _default;