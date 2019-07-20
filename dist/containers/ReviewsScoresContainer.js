"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _ReviewsScores = _interopRequireDefault(require("../components/ReviewsScores"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    meta: store.meta
  };
};

var ReviewsScoresContainer = (0, _reactRedux.connect)(mapStateToProps)(_ReviewsScores["default"]);
var _default = ReviewsScoresContainer;
exports["default"] = _default;