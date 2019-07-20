"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReviewsScoresContainer = _interopRequireDefault(require("../containers/ReviewsScoresContainer.js"));

var _ReviewsBarsContainer = _interopRequireDefault(require("../containers/ReviewsBarsContainer.js"));

var _ReviewListContainer = _interopRequireDefault(require("../containers/ReviewListContainer.js"));

var Reviews = function Reviews(props) {
  var recommended;

  if (!props.meta.recommended[1]) {
    recommended = '0%';
  } else {
    recommended = (props.meta.recommended[1] / (props.meta.recommended[0] + props.meta.recommended[1]) * 100).toFixed().toString() + '%';
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    style: {
      "float": 'left'
    }
  }, _react["default"].createElement("h3", null, "Rating & Reviews"), _react["default"].createElement("div", null, _react["default"].createElement(_ReviewsScoresContainer["default"], null)), _react["default"].createElement("div", null, recommended, " of reviews recommend this product"), _react["default"].createElement("div", null, _react["default"].createElement(_ReviewsBarsContainer["default"], null))), _react["default"].createElement("div", {
    style: {
      marginLeft: '350px'
    }
  }, _react["default"].createElement(_ReviewListContainer["default"], null)));
};

var _default = Reviews;
exports["default"] = _default;