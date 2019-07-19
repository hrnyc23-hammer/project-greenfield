"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Overview = function Overview(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "Product Name : ", props.info.name), _react["default"].createElement("div", null, "Category : ", props.info.category), _react["default"].createElement("div", null, "Price : ", props.info.price), _react["default"].createElement("div", null, props.styles.results.map(function (style) {
    return _react["default"].createElement("div", {
      key: style.style_id
    }, style.name);
  })));
};

var _default = Overview;
exports["default"] = _default;