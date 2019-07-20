"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var changeSelectedStyle = function changeSelectedStyle(selectedStyle) {
  return {
    type: 'OVERVIEW_CHANGE_SELECTED_STYLE',
    selectedStyle: selectedStyle
  };
};

var _default = changeSelectedStyle;
exports["default"] = _default;