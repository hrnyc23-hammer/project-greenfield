"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var changeRelated = function changeRelated(related) {
  return {
    type: 'CHANGE_RELATED',
    related: related
  };
};

var _default = changeRelated;
exports["default"] = _default;