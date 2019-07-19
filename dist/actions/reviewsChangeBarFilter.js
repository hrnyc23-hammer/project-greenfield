"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var reviewsChangeBarFilter = function reviewsChangeBarFilter(filter) {
  return {
    type: "CHANGE_BAR_FILTER",
    barFilter: filter
  };
};

var _default = reviewsChangeBarFilter;
exports["default"] = _default;