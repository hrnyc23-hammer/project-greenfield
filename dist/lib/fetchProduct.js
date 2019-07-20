"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _axios = _interopRequireDefault(require("axios"));

var fetchProduct = function fetchProduct(id) {
  return _axios["default"].get("store/".concat(id));
};