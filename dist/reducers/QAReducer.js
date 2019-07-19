"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var _sampleItemData = require("../data/sampleItemData.js");

var qaReducer = function qaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sampleItemData.qa;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CHANGE_QA':
      return action.qa;

    default:
      return state;
  }
};

var _default = qaReducer;
exports["default"] = _default;