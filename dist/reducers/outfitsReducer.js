"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = _interopRequireDefault(require("redux"));

var outfitsReducer = function outfitsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var obj;

  switch (action.type) {
    case 'ADD_TO_OUTFITS':
      return Object.assign({}, state, action.outfits);

    case 'REMOVE_FROM_OUTFITS':
      obj = Object.assign({}, state);
      delete obj[action.outfitId];
      return Object.assign({}, obj);

    default:
      return state;
  }
};

var _default = outfitsReducer;
exports["default"] = _default;