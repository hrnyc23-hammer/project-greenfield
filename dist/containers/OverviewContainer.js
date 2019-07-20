"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Overview = _interopRequireDefault(require("../components/Overview"));

var _changeSelectedStyle = _interopRequireDefault(require("../actions/changeSelectedStyle.js"));

var _changeSize = _interopRequireDefault(require("../actions/changeSize.js"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    info: store.overviewProductInfo,
    styles: store.overviewChangeStyles,
    selectedStyle: store.overviewChangeSelectedStyles,
    meta: store.meta,
    size: store.overviewChangeSize
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSelectedStyle: function handleSelectedStyle(selectedStyle) {
      dispatch((0, _changeSelectedStyle["default"])(selectedStyle));
    },
    handleSelectedSize: function handleSelectedSize(selectedSize) {
      dispatch((0, _changeSize["default"])(selectedSize));
    }
  };
};

var OverviewContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Overview["default"]);
var _default = OverviewContainer;
exports["default"] = _default;