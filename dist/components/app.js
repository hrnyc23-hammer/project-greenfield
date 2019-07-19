"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _OverviewContainer = _interopRequireDefault(require("../containers/OverviewContainer.js"));

var _RelatedContainer = _interopRequireDefault(require("../containers/RelatedContainer.js"));

var _ReviewsContainer = _interopRequireDefault(require("../containers/ReviewsContainer.js"));

var _QAContainer = _interopRequireDefault(require("./../containers/QAContainer"));

var App = function App(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_OverviewContainer["default"], null), _react["default"].createElement(_ReviewsContainer["default"], null), _react["default"].createElement(_RelatedContainer["default"], null), _react["default"].createElement(_QAContainer["default"], null));
};

var _default = App;
exports["default"] = _default;