"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _ReviewList = _interopRequireDefault(require("../components/ReviewList"));

var _reviewsLength = _interopRequireDefault(require("../actions/reviewsLength.js"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    reviews: store.reviews,
    barFilter: store.reviewsChangeBarFilter,
    reviewsLength: store.reviewsLengthReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLengthChange: function handleLengthChange() {
      dispatch((0, _reviewsLength["default"])());
    }
  };
};

var ReviewListContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ReviewList["default"]);
var _default = ReviewListContainer;
exports["default"] = _default;