"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _reviews = _interopRequireDefault(require("../components/reviews"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    reviews: store.reviews,
    meta: store.meta
  };
};

var ReviewsContainer = (0, _reactRedux.connect)(mapStateToProps)(_reviews["default"]);
var _default = ReviewsContainer;
exports["default"] = _default;