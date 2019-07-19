"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _ReviewList = _interopRequireDefault(require("../components/ReviewList"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    reviews: store.reviews,
    barFilter: store.reviewsChangeBarFilter
  };
};

var ReviewListContainer = (0, _reactRedux.connect)(mapStateToProps)(_ReviewList["default"]);
var _default = ReviewListContainer;
exports["default"] = _default;