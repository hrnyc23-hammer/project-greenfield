"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReviewsStars = _interopRequireDefault(require("./ReviewsStars"));

var _ReviewsRating = _interopRequireDefault(require("./ReviewsRating"));

var ReviewsScores = function ReviewsScores(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ReviewsRating["default"], {
    meta: props.meta
  }), _react["default"].createElement(_ReviewsStars["default"], {
    meta: props.meta
  }));
};

var _default = ReviewsScores;
exports["default"] = _default;