"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var changeStyles = function changeStyles(selectedStyle) {
  return {
    type: 'OVERVIEW_CHANGE_SELECTED_STYLE',
    selectedStyle: selectedStyle
  };
};

var _default = changeStyles;
exports["default"] = _default;