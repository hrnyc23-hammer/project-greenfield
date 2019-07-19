"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _ReviewsBars = _interopRequireDefault(require("../components/ReviewsBars"));

var _reviewsChangeBarFilter = _interopRequireDefault(require("../actions/reviewsChangeBarFilter.js"));

var _reviewsResetBarFilter = _interopRequireDefault(require("../actions/reviewsResetBarFilter"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    meta: store.meta,
    barFilter: store.reviewsChangeBarFilter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleBarFilterChange: function handleBarFilterChange(filter) {
      dispatch((0, _reviewsChangeBarFilter["default"])(filter));
    },
    handleBarFilterReset: function handleBarFilterReset() {
      dispatch((0, _reviewsResetBarFilter["default"])());
    }
  };
};

var ReviewsBarsContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ReviewsBars["default"]);
var _default = ReviewsBarsContainer;
exports["default"] = _default;