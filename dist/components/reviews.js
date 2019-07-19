"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReviewsStarsContainer = _interopRequireDefault(require("../containers/ReviewsStarsContainer.js"));

var Reviews = function Reviews(props) {
  if (!props.meta.recommended[1]) {
    var recommended = '0%';
  } else {
    var recommended = (props.meta.recommended[1] / (props.meta.recommended[0] + props.meta.recommended[1]) * 100).toFixed().toString() + '%';
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "Rating & Reviews"), _react["default"].createElement("div", null, recommended, " of reviews recommend this product"), _react["default"].createElement("div", null, _react["default"].createElement(_ReviewsStarsContainer["default"], null)));
};

var _default = Reviews;
exports["default"] = _default;