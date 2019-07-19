"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Overview = _interopRequireDefault(require("../components/Overview"));

var mapStateToProps = function mapStateToProps(store) {
  return {
    info: store.info,
    styles: store.styles
  };
};

var OverviewContainer = (0, _reactRedux.connect)(mapStateToProps)(_Overview["default"]);
var _default = OverviewContainer;
exports["default"] = _default;