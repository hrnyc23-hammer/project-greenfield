"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _ReviewsStars = _interopRequireDefault(require("../components/ReviewsStars"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    meta: store.meta
  };
};

var ReviewsStarsContainer = (0, _reactRedux.connect)(mapStateToProps)(_ReviewsStars["default"]);
var _default = ReviewsStarsContainer;
exports["default"] = _default;